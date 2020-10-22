import Integer from "./integer";
/**
 * check if {@param number} is positive finite or zero integer
 * @param number
 */
export default function Natural(number) {
    return number >= 0 && number !== Infinity && Integer(number);
}
//# sourceMappingURL=natural.js.map