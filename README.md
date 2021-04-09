<p align="center">
  <img src="https://i.imgur.com/iMxSX2r.png" alt="tinance-logo">
</p>
<p align="center">
  <img src="https://github.com/panlazy/tinance/workflows/tinance/badge.svg" alt="actions-badge">
  <a href="https://github.com/panlazy/tinance/blob/main/LICENSE.md"><img src="https://img.shields.io/badge/license-GPLv3-blue" alt="license"></a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/tinance"><img src="https://img.shields.io/npm/v/tinance?label=version&logo=npm&style=for-the-badge"></a>
  <a href="https://www.npmjs.com/package/tinance"><img src="https://img.shields.io/npm/dm/tinance?logo=npm&style=for-the-badge"></a>
</p>

> CLI tool made by cryptohead for cryptoheads. 🤯

- Check cryptocurrency prices from your terminal! 💰
- It will auto refresh the data every 10 seconds.
- Price data is provided by [Coincap](https://coincap.io/)'s public API. ✌

<p align="center">
  <img src="https://i.imgur.com/18YRyqM.png">
</p>

## Install

- Install with npm.

```shell
$ npm install -g tinance
```

- You can install from AUR. Install with your favorite AUR helper.

```shell
$ yay -S tinance
```

- You can get binaries from [releases](https://github.com/redgroot/tinance/releases). (currently only `.rpm` and `.deb`)

## Usage

- Use with default parameters. (USD, Top 20 currencies, Run once)

```shell
$ tinance
```

- Options

  - **`--help`**: Show help text
    ```shell
    $ tinance --help
    ```
  - **`--top` or `-t`**: Get top `x` cryptocurrencies. Default: `20`
    ```shell
    $ tinance --top 30 # Get top 30
    ```
  - **`--convert` or `-c`**: Convert price to preferred currency. Default: `USD`
    ```shell
    $ tinance --currency EUR # Convert to your prefered currency like 'EUR' or 'CAD'
    ```
  - **`--filter` or `-f`**: Filter by preferred cryptocurrency.
    ```shell
    $ tinance --filter bitcoin ethereum # Filter by your favorite cryptocurrency. It will convert to USD by default.
    ```
  - **`--refresh`**: Enable auto refresh. (Every 10 seconds)
    <br />

- Valid currencies to convert price
  - USD
  - AUD
  - BRL
  - CAD
  - CHF
  - CLP
  - CNY
  - CZK
  - DKK
  - EUR
  - GBP
  - HKD
  - HUF
  - IDR
  - ILS
  - INR
  - JPY
  - KRW
  - MXN
  - MYR
  - NOK
  - NZD
  - PHP
  - PKR
  - PLN
  - RUB
  - SEK
  - SGD
  - THB
  - TRY
  - TWD
  - ZAR
  - BTC

## Contribution

- Please use ES6 syntax, we are using babel and prettier to keep tidy our code. Any PR is welcome.
- If you can't code, you can leave a star! 🌟

## License

This project is under the [GPLv3](LICENSE.md) license.

<br />
<p align="center">
  <a href="http://hits.dwyl.com/redgroot/tinance"><img src="http://hits.dwyl.com/redgroot/tinance.svg"></a>
</p>
