import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import GreaterTHanMinimumValidatable from "../validatable/greater-than-minimum";
import Function from "@dikac/t-function/function";
import Minimum from "../../minimum/minimum";
import Maximum from "../maximum";
import Inclusive from "../../inclusive/inclusive";
import Return from "@dikac/t-validator/return/return";

export default class GreaterThanMinimum<Base extends Minimum & Maximum & Inclusive, MessageT>
    implements
        Validator<Base, Base, GreaterTHanMinimumValidatable<MessageT, Base>>,
        Message<Function<[Readonly<Maximum & Inclusive & Minimum & Validatable>], MessageT>>
{
    constructor(
        public message : Function<[Readonly<Maximum & Inclusive & Minimum & Validatable>], MessageT>
    ) {
    }

    validate<Argument extends Base>(value: Argument): Return<Base, Argument, Base, GreaterTHanMinimumValidatable<MessageT, Base>> {

        return new GreaterTHanMinimumValidatable(value, this.message);
    }
}
