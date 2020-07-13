import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import GreaterTHanMinimumValidatable from "../validatable/lower-than-maximum";
import Function from "@dikac/t-function/function";
import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import Inclusive from "../../inclusive/inclusive";

type Return<Val extends Minimum & Maximum & Inclusive, Msg> = Readonly<Validatable & Message<Msg> & Value<Val> & Minimum & Maximum & Inclusive>

export default class LowerThanMaximum<Val extends Minimum & Maximum & Inclusive, Msg>
    implements
        Validator<Val, Readonly<Return<Val, Msg>>>,
        Message<Function<[Readonly<Return<Val, Msg>>], Msg>>
{
    constructor(
        public message : Function<[Readonly<Maximum & Inclusive & Minimum & Validatable>], Msg>
    ) {
    }

    validate(value: Val): Readonly<Return<Val, Msg>> {

        return new GreaterTHanMinimumValidatable(value, this.message);
    }
}
