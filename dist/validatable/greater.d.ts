import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-validatable/message/readonly-merge";
import Inclusive from "../inclusive/inclusive";
export default class Greater<Msg> extends MergeWrapper<Value<number>, Message<Msg>, Validatable> implements Readonly<Inclusive>, Readonly<Minimum> {
    readonly minimum: number;
    readonly inclusive: boolean;
    constructor(number: number, minimum: number, inclusive: boolean, message: Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], Msg>);
}
