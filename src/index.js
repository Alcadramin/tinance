#!/usr/bin/env node
import commander from 'commander';
import { validateNumber, validateCurrency } from './helpers/validation';
import { getRates } from './helpers/rates';
import { Table } from 'console-table-printer';
import ora from 'ora';
import updateNotifier from 'update-notifier';
import { atom, renderer } from '@acransac/terminal';

('use strict');

/** Default values */
let defaults = {
  top: 20,
  currency: 'USD',
};

/** API */
let sourceURI = `https://api.coincap.io/v2/assets?`;

/** Arguments */
const app = new commander.Command();
app
  .version('0.0.5')
  .option(
    '--refresh',
    'Enable auto refresh, it will auto refresh the data every 10 seconds, otherwise it will run once.',
    false
  )
  .option(
    '-c, --currency <value>',
    'Convert to desired currency.',
    validateCurrency,
    'USD'
  )
  .option('-t, --top <value>', 'Get top X currency.', validateNumber, 20)
  .option('-f, --filter <values...>', 'Filter by your favorite cryptocurrency.')
  .parse(process.argv);

const options = app.opts();

if (options.currency) {
  defaults.currency = options.currency.toUpperCase();
}

if (options.top) {
  defaults.top = `${options.top}`;
}

if (options.filter) {
  const args =
    `${options.filter}` + `${app.args.length ? ',' + app.args.join(',') : ''}`;
  sourceURI += `ids=${args}&`;
}

/**
 *  Update notifier - Comment this while developing!
 */
const pkg = require('./package.json');
updateNotifier({ pkg }).notify();

sourceURI += `limit=${defaults.top}`;

/** Start the spinner */
const spinner = ora('Fetching data hang on! 💰');
spinner.start();

const fetch = async () => {
  /** Fetch data from API */
  const data = await getRates(sourceURI, [], defaults.currency, spinner);

  /** Clear the screen */
  process.stdout.write('\x1B[2J\x1B[0f');

  /** Print table */
  const table = new Table({
    title: 'Tinance 💰 Data provided by: coincap.io 💫',
  });
  table.addRows(data);
  table.printTable();
};

/** Run once */
fetch().then(() => {
  /** Stop the spinner */
  spinner.stop();
});

/** Refresh every 10 seconds */
if (options.refresh) {
  const [render, terminate] = renderer();
  setInterval(() => {
    render(atom(fetch()));
  }, 10 * 1000);

  process.on('SIGINT', () => {
    terminate();
    process.exit();
  });
}
