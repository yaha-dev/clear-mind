/**
 * Generate random number in interval
 * @param {Number} min
 * @param  {Number} max
 * @returns {Number}
 */
export function generateRandom(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
