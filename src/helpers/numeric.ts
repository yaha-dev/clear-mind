export function isNumeric(val: any): boolean {
    return !isNaN(parseFloat(val)) && isFinite(val);
}
