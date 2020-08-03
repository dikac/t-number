import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import GreaterThanMinimumValidatable from "../validatable/lower-than-maximum";
import Function from "@dikac/t-function/function";
import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import Inclusive from "../../inclusive/inclusive";
import Return from "@dikac/t-validator/return/return";
export default class LowerThanMaximum<Base extends Minimum & Maximum & Inclusive, MessageT> implements Validator<Base, Base, GreaterThanMinimumValidatable<MessageT, Base>>, Message<Function<[Readonly<Maximum & Inclusive & Minimum & Validatable>], MessageT>> {
    message: Function<[Readonly<Maximum & Inclusive & Minimum & Validatable>], MessageT>;
    constructor(message: Function<[Readonly<Maximum & Inclusive & Minimum & Validatable>], MessageT>);
    validate<Argument extends Base>(value: Argument): Return<Base, Argument, Base, GreaterThanMinimumValidatable<MessageT, Base>>;
}
