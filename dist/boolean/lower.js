/**
 * check if {@param number} is lower than {@param maximum} or equal if {@param inclusive} is true
 *
 * @param number
 * @param maximum
 * @param inclusive
 */
export default function Lower(number, maximum, inclusive = false) {
    return inclusive ? number <= maximum : number < maximum;
}
//# sourceMappingURL=lower.js.map