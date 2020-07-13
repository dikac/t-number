import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Minimum from "../../minimum/minimum";
import Maximum from "../maximum";
import Inclusive from "../../inclusive/inclusive";
declare type Return<Val extends Minimum & Maximum & Inclusive, Msg> = Readonly<Validatable & Message<Msg> & Value<Val> & Minimum & Maximum & Inclusive>;
export default class GreaterThanMinimum<Val extends Minimum & Maximum & Inclusive, Msg> implements Validator<Val, Readonly<Return<Val, Msg>>>, Message<Function<[Readonly<Return<Val, Msg>>], Msg>> {
    message: Function<[Readonly<Maximum & Inclusive & Minimum & Validatable>], Msg>;
    constructor(message: Function<[Readonly<Maximum & Inclusive & Minimum & Validatable>], Msg>);
    validate(value: Val): Readonly<Return<Val, Msg>>;
}
export {};
