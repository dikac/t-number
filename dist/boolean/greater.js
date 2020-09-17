/**
 * check if {@param number} is greater than {@param minimum} or equal if {@param inclusive} is true
 *
 * @param number
 * @param minimum
 * @param inclusive
 */
export default function Greater(number, minimum, inclusive = false) {
    return inclusive ? number >= minimum : number > minimum;
}
//# sourceMappingURL=greater.js.map