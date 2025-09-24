/**
 * Suggest cash denominations for payment.
 * @param {number} value - The target value to reach or exceed.
 * @param {number[]} denominations - An array of available cash denominations.
 * @returns {number[]} An array of suggested cash denominations.
 * @throws {Error} If the value is not divisible by the smallest denomination.
 * @example
  import { cashDenominationSuggest } from 'cash-denomination-suggest';
  const DEMONSTRATIONS = [1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000];
  const value = 654000;
  try {
    const results = cashDenominationSuggest(value, DEMONSTRATIONS);
    console.log('Suggested denominations:', results); // [ 654000, 655000, 660000, 700000, 800000, 1000000 ]
  } catch (err) {
    console.error(err);
  }
 */
export function cashDenominationSuggest(value: number, denominations: number[]): number[];