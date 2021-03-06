import AssertNumber from "../assert/number";
import NumberError from "../assert/throwable/number";

export default function Number(
    value : unknown,
    error : (value:unknown)=>Error = NumberError
) : number {

    AssertNumber(value, error);

    return value;
}
