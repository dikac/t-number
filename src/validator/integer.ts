import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import IntegerValidatable from "../validatable/integer";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/validatable/instance";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";

export default class Integer<MessageT>
    implements
        Validator<number, number, Readonly<Instance<number, MessageT>>>,
        Message<Function<[Readonly<Value<number>> & Readonly<Validatable>], MessageT>>
{

    constructor(
       public message : Function<[Readonly<Value<number>> & Readonly<Validatable>], MessageT>
    ) {
    }

    validate<Argument extends number>(value: Argument): SimpleValidatable<number, Argument, number, Readonly<Instance<number, MessageT>>> {

        return <SimpleValidatable<number, Argument, number, Readonly<Instance<number, MessageT>>>> IntegerValidatable(value, this.message);
    }
}
