<p align="center">
  <img src="https://i.imgur.com/iMxSX2r.png" alt="tinance-logo">
</p>
<p align="center">
  <img src="https://github.com/panlazy/tinance/workflows/tinance/badge.svg" alt="actions-badge">
  <a href="https://github.com/panlazy/tinance/blob/main/LICENSE.md"><img src="https://img.shields.io/badge/license-GPLv3-blue" alt="license"></a>
</p>
<p align="center">
  <a href="https://nodei.co/npm/tinance/"><img src="https://nodei.co/npm/tinance.png?compact=true"></a>
</p>

> CLI tool made by cryptohead for cryptoheads. 🤯

- Check cryptocurrency prices from your terminal! 💰
- It will auto refresh the data every 10 seconds.
- Price data is provided by [Coincap](https://coincap.io/)'s public API. ✌

## Install

- Install with npm.

```bash
❯ npm install -g tinance
```

- You can also install from AUR. Install with your favorite AUR helper.

```bash
❯ yay -S tinance
```

- For now I only published the package to `npm` and `AUR`. More releases coming soon ™️.

## Usage

- Use with default parameters. (USD, Top 20 currencies)

```bash
❯ tinance
```

- Options

```bash
❯ tinance --top 30 // Get top 30
❯ tinance --currency EUR // Convert to your prefered currency like 'EUR' or 'CAD'
❯ tinance --filter bitcoin ethereum // Filter by your favorite cryptocurrency. It will convert to USD by default.
```

- Show help text

```bash
❯ tinance --help
```

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

- Please use ES6 syntax, we are using babel and prettier. Any PR is welcome.

## License

This project is under the [GPLv3](LICENSE.md) license.
