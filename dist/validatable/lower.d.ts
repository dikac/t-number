import Maximum from "../maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import Inclusive from "../inclusive/inclusive";
export default class Lower<Msg> implements Readonly<Inclusive>, Readonly<Maximum & Value<number> & Message<Msg> & Validatable> {
    readonly value: number;
    readonly maximum: number;
    readonly inclusive: boolean;
    private _message;
    readonly valid: boolean;
    constructor(value: number, maximum: number, inclusive: boolean, _message: Function<[Readonly<Value<number> & Inclusive & Maximum & Validatable>], Msg>);
    get message(): Msg;
}
