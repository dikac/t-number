import AssertNatural from "../assert/natural";
import NaturalError from "../assert/throwable/natural";
export default function Natural(value, error = NaturalError) {
    AssertNatural(value, error);
    return value;
}
//# sourceMappingURL=natural.js.map