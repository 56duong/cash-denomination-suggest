# cash-denomination-suggest

Suggest cash denominations for payment.

## Install

```sh
npm install cash-denomination-suggest
```

## Usage

```js
import { cashDenominationSuggest } from 'cash-denomination-suggest';

const denominations = [1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000];
const value = 654000;

try {
  const results = cashDenominationSuggest(value, DEMONSTRATIONS);
  console.log('Suggested denominations:', result);
} catch (err) {
  console.error(err);
}
```