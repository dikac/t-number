import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import GreaterValidatable from "../validatable/greater";
import Function from "@dikac/t-function/function";
import Inclusive from "../inclusive/inclusive";
import Minimum from "../minimum/minimum";

export default class Greater<Msg>
    implements
        Validator<number, Validatable & Message<Msg> & Value<number>>,
        Message<Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], Msg>>,
        Minimum,
        Inclusive
{
    constructor(
        public minimum : number,
        public inclusive : boolean,
        public message : Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], Msg>
    ) {
    }

    validate(value: number): Readonly<Validatable & Message<Msg> & Value<number> & Inclusive & Minimum> {

        return new GreaterValidatable(value, this.minimum, this.inclusive, this.message);
    }
}
