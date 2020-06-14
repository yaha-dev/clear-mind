/**
 * Capitalize a word
 * @param {String} str
 * @returns {String}
 */
export const firstCharToUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
