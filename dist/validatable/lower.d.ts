import Maximum from "../maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "../inclusive/inclusive";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";
export default class Lower<ValueT extends number, MessageT> implements Readonly<Inclusive>, Readonly<Maximum>, Readonly<Value<ValueT>>, Readonly<Message<MessageT>>, Readonly<Validatable>, ValueOf<number>, ToString<number | void> {
    readonly value: ValueT;
    readonly maximum: number;
    readonly inclusive: boolean;
    private messageFactory;
    constructor(value: ValueT, maximum: number, inclusive: boolean, messageFactory: (result: Readonly<Value<ValueT> & Inclusive & Maximum & Validatable>) => MessageT);
    get valid(): boolean;
    get message(): MessageT;
    valueOf(): number;
    toString(radix?: number): string;
}
