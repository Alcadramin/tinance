module.exports = {
  validateNumber: (val) => {
    if (isNaN(val) || +val < 0) {
      console.log('❎ Invalid parameter, please input a valid number.');
      process.exit();
    }
    return +val;
  },
  validateCurrency: (val) => {
    const converToUpperCase = val.toUpperCase();
    const availableCurrencies = [
      'USD',
      'AUD',
      'BRL',
      'CAD',
      'CHF',
      'CLP',
      'CNY',
      'CZK',
      'DKK',
      'EUR',
      'GBP',
      'HKD',
      'HUF',
      'IDR',
      'ILS',
      'INR',
      'JPY',
      'KRW',
      'MXN',
      'MYR',
      'NOK',
      'NZD',
      'PHP',
      'PKR',
      'PLN',
      'RUB',
      'SEK',
      'SGD',
      'THB',
      'TRY',
      'TWD',
      'ZAR',
      'BTC',
    ];
    if (availableCurrencies.indexOf(converToUpperCase) === -1) {
      console.log('❎ Invalid parameter, please input a valid currency.');
      process.exit();
    }
    return converToUpperCase;
  },
};
