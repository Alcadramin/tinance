import axios from 'axios';
import humanize from 'humanize-plus';
import chalk from 'chalk';

module.exports = {
  getRates: async (source, val, cur) => {
    await axios
      .get(source)
      .then((res) => {
        res.data.data.map((el) => {
          val.push({
            Rank: chalk.blue(el.rank),
            Name: chalk.cyan(el.name),
            Symbol: chalk.yellow(el.symbol),
            Price:
              humanize.formatNumber(el.priceUsd, 4) + chalk.bold(` ${cur}`),
            'Change (24hr)':
              parseFloat(el.changePercent24Hr) < 0
                ? chalk.red(parseFloat(el.changePercent24Hr).toFixed(4) + ' %')
                : chalk.green(
                    parseFloat(el.changePercent24Hr).toFixed(4) + ' %'
                  ),
            'Volume (24hr)': humanize.compactInteger(el.volumeUsd24Hr, 1),
            Supply: humanize.compactInteger(el.supply, 1),
            'Market Cap': humanize.compactInteger(el.marketCapUsd, 1),
            'Max Supply': humanize.compactInteger(el.maxSupply, 1),
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });

    return Promise.all(val);
  },
};
