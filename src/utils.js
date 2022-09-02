/**
* @description generates random number from 0 to 100
* @returns {Number} generated number
*/
export const generateRandomNumber = () => Math.round(Math.random() * 100);

/**
 * @description stringifies number or boolean
 * @param {any} value value to be stringified
 * @returns {String}
 */
export const stringifyValue = (value) => value.toString();