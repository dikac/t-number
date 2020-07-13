import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Inclusive from "../inclusive/inclusive";
import Maximum from "../maximum/maximum";
export default class Lower<Msg> implements Validator<number, Validatable & Message<Msg> & Value<number>>, Message<Function<[Readonly<Value<number> & Inclusive & Maximum & Validatable>], Msg>>, Maximum, Inclusive {
    maximum: number;
    inclusive: boolean;
    message: Function<[Readonly<Value<number> & Inclusive & Maximum & Validatable>], Msg>;
    constructor(maximum: number, inclusive: boolean, message: Function<[Readonly<Value<number> & Inclusive & Maximum & Validatable>], Msg>);
    validate(value: number): Readonly<Validatable & Message<Msg> & Value<number> & Inclusive & Maximum>;
}
