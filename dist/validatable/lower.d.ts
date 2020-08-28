import Maximum from "../maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "../inclusive/inclusive";
export default class Lower<ValueT extends number, MessageT> implements Readonly<Inclusive>, Readonly<Maximum & Value<ValueT> & Message<MessageT> & Validatable> {
    readonly value: ValueT;
    readonly maximum: number;
    readonly inclusive: boolean;
    private _message;
    readonly valid: boolean;
    constructor(value: ValueT, maximum: number, inclusive: boolean, _message: (result: Readonly<Value<ValueT> & Inclusive & Maximum & Validatable>) => MessageT);
    get message(): MessageT;
}
