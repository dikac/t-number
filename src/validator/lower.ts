import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import LowerValidatable from "../validatable/lower";
import Function from "@dikac/t-function/function";
import Inclusive from "../inclusive/inclusive";
import Maximum from "../maximum/maximum";

export default class Lower<Msg>
    implements
        Validator<number, Validatable & Message<Msg> & Value<number>>,
        Message<Function<[Readonly<Value<number> & Inclusive & Maximum & Validatable>], Msg>>,
        Maximum,
        Inclusive
{

    constructor(
        public maximum : number,
        public inclusive : boolean,
        public message : Function<[Readonly<Value<number> & Inclusive & Maximum & Validatable>], Msg>
    ) {
    }

    validate(value: number): Readonly<Validatable & Message<Msg> & Value<number> & Inclusive & Maximum> {

        return new LowerValidatable(value, this.maximum, this.inclusive, this.message);
    }
}
