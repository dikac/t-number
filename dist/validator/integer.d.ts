import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
export default class Integer<Msg> implements Validator<number, Validatable & Message<Msg> & Value<number>>, Message<Function<[Readonly<Value<number>> & Readonly<Validatable>], Msg>> {
    message: Function<[Readonly<Value<number>> & Readonly<Validatable>], Msg>;
    constructor(message: Function<[Readonly<Value<number>> & Readonly<Validatable>], Msg>);
    validate(value: number): Readonly<Validatable & Message<Msg> & Value<number>>;
}
