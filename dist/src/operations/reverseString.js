"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = void 0;
/**
 * Reverses the characters in a string.
 *
 * @param {string} str - The input string to be reversed.
 * @returns {string} A new string with the characters in reverse order.
 *
 * @description
 * This function takes a string as input and returns a new string with all
 * the characters in reverse order. It works by splitting the string into
 * an array of characters, reversing the array, and then joining it back
 * into a string.
 */
const reverseString = (str) => {
    return str.split('').reverse().join('');
};
exports.reverseString = reverseString;
