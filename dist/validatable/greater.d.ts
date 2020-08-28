import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "../inclusive/inclusive";
export default class Greater<ValueT extends number, MessageT> implements Readonly<Inclusive & Value<ValueT> & Message<MessageT> & Validatable>, Readonly<Minimum> {
    readonly value: ValueT;
    readonly minimum: number;
    readonly inclusive: boolean;
    private _message;
    readonly valid: boolean;
    constructor(value: ValueT, minimum: number, inclusive: boolean, _message: (result: Readonly<Value<ValueT> & Inclusive & Minimum & Validatable>) => MessageT);
    get message(): MessageT;
}
