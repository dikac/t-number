import Guard from "../boolean/number";
import Fn from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import NumberError from "./throwable/number";

export default function Number(
    value : unknown,
    error : Fn<[unknown], Error> = NumberError
) : asserts value is number {

    Callback(value, Guard, error);
}
