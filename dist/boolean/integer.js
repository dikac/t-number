/**
 * check if {@param number} is infinite
 * @param number
 */
export default function Integer(number) {
    if (isFinite(number)) {
        return number === Math.ceil(number);
    }
    return false;
}
//# sourceMappingURL=integer.js.map