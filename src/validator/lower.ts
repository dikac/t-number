import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import LowerValidatable from "../validatable/lower";
import Function from "@dikac/t-function/function";
import Inclusive from "../inclusive/inclusive";
import Maximum from "../maximum/maximum";
import Return from "@dikac/t-validator/return/return";

export default class Lower<MessageT>
    implements
        Validator<number, number, LowerValidatable<MessageT>>,
        Message<Function<[Readonly<Value<number> & Inclusive & Maximum & Validatable>], MessageT>>,
        Maximum,
        Inclusive
{

    constructor(
        public maximum : number,
        public inclusive : boolean,
        public message : Function<[Readonly<Value<number> & Inclusive & Maximum & Validatable>], MessageT>
    ) {
    }

    validate<Argument extends number>(value: Argument): Return<number, Argument, number, LowerValidatable<MessageT>> {

        return <Return<number, Argument, number, LowerValidatable<MessageT>>> new LowerValidatable(value, this.maximum, this.inclusive, this.message);
    }
}
