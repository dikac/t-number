import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import GreaterValidatable from "../validatable/greater";
import Function from "@dikac/t-function/function";
import Inclusive from "../inclusive/inclusive";
import Minimum from "../minimum/minimum";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";

export default class Greater<MessageT>
    implements
        Validator<number, number, boolean, boolean, GreaterValidatable<number, MessageT>>,
        Message<Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], MessageT>>,
        Minimum,
        Inclusive
{
    constructor(
        public minimum : number,
        public inclusive : boolean,
        public message : Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], MessageT>
    ) {
    }

    validate<Argument extends number>(value: Argument): SimpleValidatable<number, Argument, number, GreaterValidatable<Argument, MessageT>> {

        return <SimpleValidatable<number, Argument, number, GreaterValidatable<Argument, MessageT>>> new GreaterValidatable<Argument, MessageT>(value, this.minimum, this.inclusive, this.message);
    }
}
