/**
 * check if {@param number} is lower than {@param maximum} or equal if {@param inclusive} is true
 *
 * @param number
 * @param maximum
 * @param inclusive
 */
export default function Lower(number : number, maximum : number, inclusive : boolean = false) : boolean {

    return inclusive ? number <= maximum : number < maximum;
}
