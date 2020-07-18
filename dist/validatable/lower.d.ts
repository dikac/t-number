import Maximum from "../maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
import Inclusive from "../inclusive/inclusive";
export default class Lower<Msg> extends MergeWrapper<Value<number>, Message<Msg>, Validatable> implements Readonly<Inclusive>, Readonly<Maximum> {
    readonly maximum: number;
    readonly inclusive: boolean;
    constructor(number: number, maximum: number, inclusive: boolean, message: Function<[Readonly<Value<number> & Inclusive & Maximum & Validatable>], Msg>);
}
