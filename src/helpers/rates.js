import axios from 'axios';
import humanize from 'humanize-plus';
import chalk from 'chalk';

module.exports = {
  getRates: async (source, val, cur, spinner) => {
    await axios
      .get(source)
      .then(async (res) => {
        if (res.data.data.length < 1) {
          spinner.stop();
          console.log(
            '❎ ' +
              chalk.red('You probably provided invalid options, try again.')
          );

          process.exit();
        }

        cur !== 'USD'
          ? await axios.get(`https://api.coincap.io/v2/rates`).then((res) => {
              cur = res.data.data.filter((el) => el.symbol === cur);
            })
          : cur;

        res.data.data.map((el) => {
          val.push({
            Rank: chalk.blue(el.rank),
            Name: chalk.cyan(el.name),
            Symbol: chalk.yellow(el.symbol),
            Price:
              humanize.formatNumber(
                cur === 'USD' ? el.priceUsd : el.priceUsd / cur[0].rateUsd,
                4
              ) + chalk.bold(` ${cur !== 'USD' ? cur[0].symbol : cur}`),
            'Change (24hr)':
              parseFloat(el.changePercent24Hr) < 0
                ? chalk.red(parseFloat(el.changePercent24Hr).toFixed(4) + ' %')
                : chalk.green(
                    parseFloat(el.changePercent24Hr).toFixed(4) + ' %'
                  ),
            'Volume (24hr)': humanize.compactInteger(el.volumeUsd24Hr, 1),
            Supply: humanize.compactInteger(el.supply, 1),
            'Market Cap': humanize.compactInteger(el.marketCapUsd, 1),
            'Max Supply': el.maxSupply
              ? humanize.compactInteger(el.maxSupply, 1)
              : 'N/A',
          });
        });
      })
      .catch(() => {
        spinner.stop();
        console.log(
          '❎ ' + chalk.red('Something went wrong, try again later.')
        );
        process.exit();
      });

    return Promise.all(val);
  },
};
