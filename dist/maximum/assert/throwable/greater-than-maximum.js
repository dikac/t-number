import LowerThanMaximumString from "../../string/greater-than-minimum";
export default function GreaterThanMaximum(object) {
    return new Error(LowerThanMaximumString({
        valid: false,
        maximum: object.maximum,
        minimum: object.minimum,
        inclusive: object.inclusive,
    }));
}
//# sourceMappingURL=greater-than-maximum.js.map