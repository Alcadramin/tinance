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
  .parse(process.argv);

const options = app.opts();

if (options.currency) {
  defaults.currency = options.currency;
}

if (options.top) {
  defaults.top = `${options.top}`;
}

/** Get rates */
const sourceURI = `https://api.coincap.io/v2/assets?limit=${defaults.top}&convert=${defaults.currency}`;

/** Start the spinner */
const spinner = ora('Fetching data hang on! 💰');
spinner.start();

const fetch = async () => {
  /** Fetch data from API */
  const arr = [];
  const data = await getRates(sourceURI, arr);

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

/** Refresh every 5 minutes */
setInterval(() => {
  fetch();
}, 5 * 60 * 1000);
