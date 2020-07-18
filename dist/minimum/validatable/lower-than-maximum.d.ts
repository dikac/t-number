import Minimum from "../../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
import Inclusive from "../../inclusive/inclusive";
import Maximum from "../../maximum/maximum";
export default class Greater<Msg, Val extends Minimum & Maximum & Inclusive> extends MergeWrapper<Value<Val>, Message<Msg>, Validatable> implements Readonly<Inclusive>, Readonly<Minimum>, Readonly<Maximum> {
    readonly minimum: number;
    readonly maximum: number;
    readonly inclusive: boolean;
    constructor(object: Val, message: Function<[Readonly<Maximum & Inclusive & Minimum & Validatable>], Msg>);
}
