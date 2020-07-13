import Function from "@dikac/t-function/function";
import AssertNumber from "../assert/number";
import NumberError from "../assert/throwable/number";

export default function Number(
    value : any,
    error : Function<[any], Error> = NumberError
) : number {

    AssertNumber(value, error);

    return value;
}
