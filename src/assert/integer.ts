import IsInteger from "../boolean/integer";
import IntegerError from "./throwable/integer";
import Callback from "@dikac/t-function/assert/callback";

export default function Integer(
    value : number,
    error : (value:number)=> Error = IntegerError
) : asserts value is number {

    Callback(value, IsInteger, error);
}
