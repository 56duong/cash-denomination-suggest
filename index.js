/**
 * Suggest cash denominations for payment.
 * @param {number} value - The target value to reach or exceed.
 * @param {number[]} denominations - An array of available cash denominations.
 * @returns {number[]} An array of suggested cash denominations.
 * @throws {Error} If the value is not divisible by the smallest denomination.
 * @example
  import { cashDenominationSuggest } from './index.js';
  const DEMONSTRATIONS = [1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000];
  const value = 654000;
  try {
    const results = cashDenominationSuggest(value, DEMONSTRATIONS);
    console.log('Suggested denominations:', results);
  } catch (err) {
    console.error(err);
  }
 */
export function cashDenominationSuggest(value, denominations) {
  if (value % denominations[0] !== 0) {
    throw new Error(`Value must be divisible by the smallest denomination: ${denominations[0]}`);
  }
  const set = new Set();
  for (const d of denominations) {
    const sug = Math.ceil(value / d) * d;
    set.add(sug);
  }
  return Array.from(set);
}