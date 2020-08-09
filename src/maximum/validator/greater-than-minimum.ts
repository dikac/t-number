import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import GreaterTHanMinimumValidatable from "../validatable/greater-than-minimum";
import Function from "@dikac/t-function/function";
import Minimum from "../../minimum/minimum";
import Maximum from "../maximum";
import Inclusive from "../../inclusive/inclusive";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";

export default class GreaterThanMinimum<Base extends Minimum & Maximum & Inclusive, MessageT>
    implements
        Validator<Base, Base, boolean, boolean, GreaterTHanMinimumValidatable<MessageT, Base>>,
        Message<Function<[Readonly<Maximum & Inclusive & Minimum & Validatable>], MessageT>>
{
    constructor(
        public message : Function<[Readonly<Maximum & Inclusive & Minimum & Validatable>], MessageT>
    ) {
    }

    validate<Argument extends Base>(value: Argument): SimpleValidatable<Base, Argument, Base, GreaterTHanMinimumValidatable<MessageT, Base>> {

        return < SimpleValidatable<Base, Argument, Base, GreaterTHanMinimumValidatable<MessageT, Base>>> new GreaterTHanMinimumValidatable(value, this.message);
    }
}
