import Guard from "../boolean/number";
import Fn from "@dikac/t-function/function";
import Parameter from "@dikac/t-function/assert/parameter";
import NumberError from "./throwable/number";

export default function Number(
    value : unknown,
    error : Fn<[unknown], Error> = NumberError
) : asserts value is number {

    Parameter(value, Guard, error);
}
