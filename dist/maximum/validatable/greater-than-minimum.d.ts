import Minimum from "../../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-merge";
import Inclusive from "../../inclusive/inclusive";
import Maximum from "../maximum";
export default class GreaterThanMinimum<MessageT, ValueT extends Minimum & Maximum & Inclusive> extends MergeWrapper<Value<ValueT>, Message<MessageT>, Validatable> implements Readonly<Inclusive>, Readonly<Minimum>, Readonly<Maximum> {
    readonly minimum: number;
    readonly maximum: number;
    readonly inclusive: boolean;
    constructor(object: ValueT, message: (result: Readonly<Maximum & Inclusive & Minimum & Validatable>) => MessageT);
}
