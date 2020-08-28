import NanError from "./throwable/nan";
import Callback from "@dikac/t-function/assert/callback";

export default function Nan(
    value : number,
    error : (value:number)=> Error = NanError
) : asserts value is number {

    Callback(value, isNaN, error);

}
