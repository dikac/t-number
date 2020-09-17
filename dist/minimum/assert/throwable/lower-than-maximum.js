import LowerThanMaximumString from "../../string/lower-than-maximum";
export default function LowerThanMaximum(object) {
    return new Error(LowerThanMaximumString({
        valid: false,
        maximum: object.maximum,
        minimum: object.minimum,
        inclusive: object.inclusive,
    }));
}
//# sourceMappingURL=lower-than-maximum.js.map