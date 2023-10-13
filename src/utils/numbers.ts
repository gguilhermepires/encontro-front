import _ from 'lodash';

function decimalIfNeeded(value?: number | string, maxDecimals = 2) {
  if (typeof value === 'undefined' || value === null) return null;

  let result: number;

  if (typeof value === 'string') {
    result = parseFloat(value);

    if (Number.isNaN(result)) return value;
  } else {
    result = Math.round((value + Number.EPSILON) * 100) / 100;
  }

  if (result % 1 === 0) return result.toFixed(0);

  if ((result * 10) % 1 === 0) return result.toFixed(1);

  return result.toFixed(maxDecimals);
}

function roundAndFixed(value: number, maxDecimals = 2) {
  return _.round(value, maxDecimals).toFixed(maxDecimals);
}

export { decimalIfNeeded, roundAndFixed };
