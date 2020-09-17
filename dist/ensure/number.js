import AssertNumber from "../assert/number";
import NumberError from "../assert/throwable/number";
export default function Number(value, error = NumberError) {
    AssertNumber(value, error);
    return value;
}
//# sourceMappingURL=number.js.map