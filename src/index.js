#!/usr/bin/env node
import commander from 'commander'; /** Get helpers */
import { validateNumber, validateCurrency } from './helpers/validation';
import { getRates } from './helpers/rates';
import { Table } from 'console-table-printer';
import ora from 'ora';

('use strict');

/** Dataset */
let defaults = {
  top: 20,
  currency: 'USD',
};

/** API */
let sourceURI = `https://api.coincap.io/v2/assets?`;

/** Arguments */
const app = new commander.Command();
app
  .version('0.0.1')
  .option(
    '-c, --currency <value>',
    'Convert to desired currency.',
    validateCurrency,
    'USD'
  )
  .option('-t, --top <value>', 'Get top X currency.', validateNumber, 20)
  .option('-f, --filter <values...>', 'Filter by rates')
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

sourceURI += `limit=${defaults.top}`;

console.log(sourceURI);

/** Start the spinner */
const spinner = ora('Fetching data hang on! 💰');
spinner.start();

const fetch = async () => {
  /** Fetch data from API */
  const data = await getRates(sourceURI, [], defaults.currency, spinner);

  /** Stop the spinner */
  spinner.stop();

  /** Clear the screen */
  process.stdout.write('\x1B[2J\x1B[0f');

  /** Print table */
  const table = new Table({
    title: 'Tinance 💰 Data provided by: coincap.io 💫',
  });
  table.addRows(data);
  table.printTable();
};

/** Cold start :P */
fetch();

/** Refresh every 10 seconds */
setInterval(() => {
  fetch();
}, 10 * 1000);
