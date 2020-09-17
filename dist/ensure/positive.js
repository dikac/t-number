import AssertPositive from "../assert/positive";
import PositiveError from "../assert/throwable/positive";
export default function Positive(value, error = PositiveError) {
    AssertPositive(value, error);
    return value;
}
//# sourceMappingURL=positive.js.map