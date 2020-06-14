/**
 * Number check
 * @param {Number} val
 * @returns {Boolean}
 */
export function isNumeric(val) {
    return !isNaN(parseFloat(val)) && isFinite(val);
}
