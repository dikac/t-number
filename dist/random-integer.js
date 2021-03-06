import Greater from "./boolean/greater";
import Lower from "./boolean/lower";
import LowerThanMaximum from "./minimum/assert/lower-than-maximum";
/**
 * get random integer
 * @param minimum
 * @param maximum
 * @param inclusive
 */
export default function RandomInteger(minimum, maximum, inclusive = true) {
    LowerThanMaximum({
        maximum: maximum,
        minimum: minimum,
        inclusive: inclusive,
    });
    if ((maximum - minimum) <= 1) {
        if (!inclusive) {
            throw new Error(`minimum (${minimum}) and maximum (${maximum}) different must greater than 1 in exclusive mode`);
        }
    }
    let random = Math.random() * (maximum - minimum + 1);
    random = Math.floor(random + minimum);
    if (inclusive) {
        return random;
    }
    else {
        if (Greater(random, minimum, inclusive) && Lower(random, maximum, inclusive)) {
            return random;
        }
        else {
            return RandomInteger(minimum, maximum, inclusive);
        }
    }
}
//# sourceMappingURL=random-integer.js.map