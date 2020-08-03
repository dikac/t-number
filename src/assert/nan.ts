import NanError from "./throwable/nan";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";

export default function Nan(
    value : number,
    error : Function<[number], Error> = NanError
) : asserts value is number {

    Callback(value, isNaN, error);

}
