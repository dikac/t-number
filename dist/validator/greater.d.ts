import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Inclusive from "../inclusive/inclusive";
import Minimum from "../minimum/minimum";
export default class Greater<Msg> implements Validator<number, Validatable & Message<Msg> & Value<number>>, Message<Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], Msg>>, Minimum, Inclusive {
    minimum: number;
    inclusive: boolean;
    message: Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], Msg>;
    constructor(minimum: number, inclusive: boolean, message: Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], Msg>);
    validate(value: number): Readonly<Validatable & Message<Msg> & Value<number> & Inclusive & Minimum>;
}
