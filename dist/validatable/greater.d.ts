import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "../inclusive/inclusive";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";
export default class Greater<ValueT extends number, MessageT> implements Readonly<Inclusive>, Readonly<Value<ValueT>>, Readonly<Message<MessageT>>, Readonly<Validatable>, Readonly<Minimum>, ValueOf<number>, ToString<number | void> {
    readonly value: ValueT;
    readonly minimum: number;
    readonly inclusive: boolean;
    private messageFactory;
    constructor(value: ValueT, minimum: number, inclusive: boolean, messageFactory: (result: Readonly<Value<ValueT> & Inclusive & Minimum & Validatable>) => MessageT);
    get valid(): boolean;
    get message(): MessageT;
    valueOf(): number;
    toString(radix?: number): string;
}
