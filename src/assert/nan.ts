import NanError from "./throwable/nan";
import Function from "@dikac/t-function/function";
import Parameter from "@dikac/t-function/assert/parameter";

export default function Nan(
    value : number,
    error : Function<[number], Error> = NanError
) : asserts value is number {

    Parameter(value, isNaN, error);

}
