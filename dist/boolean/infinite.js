/**
 * check if {@param number} is infinite
 * @param number
 */
export default function Infinite(number) {
    switch (number) {
        case Number.POSITIVE_INFINITY:
        case Number.NEGATIVE_INFINITY:
            return true;
    }
    return false;
}
//# sourceMappingURL=infinite.js.map