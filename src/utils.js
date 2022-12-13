/**
* @description Returns random value from 0 to limit
* @param {Number} limit The possible highest random value
* @returns {Number} Generated random value
* @example
* const randomNum1 = generateRandomNumber(); // => 42
* const randomNum2 = generateRandomNumber(); // => 35
*/
const generateRandomNumber = (limit) => Math.round(Math.random() * limit);

/**
 * @description Returns stringified value
 * @param {String | Number | Boolean} value Value to be stringified
 * @returns {String}
 * @example
 * const value1 = 42;
 * const str1 = stringify(value1); // => "42"
 *
 * const value2 = true;
 * const str2 = stringify(value2); // => "true"
 */
const stringify = (value) => value.toString();

export {
  generateRandomNumber,
  stringify,
};
