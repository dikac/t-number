import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import Inclusive from "../inclusive/inclusive";
export default class Greater<Msg> implements Readonly<Inclusive & Value<number> & Message<Msg> & Validatable>, Readonly<Minimum> {
    readonly value: number;
    readonly minimum: number;
    readonly inclusive: boolean;
    private _message;
    readonly valid: boolean;
    constructor(value: number, minimum: number, inclusive: boolean, _message: Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], Msg>);
    get message(): Msg;
}
