import Guard from "../boolean/number";
import Callback from "@dikac/t-function/assert/callback";
import NumberError from "./throwable/number";

export default function Number(
    value : unknown,
    error : (value:number)=> Error = NumberError
) : asserts value is number {

    Callback(value, Guard, error);
}
