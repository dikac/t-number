import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import PositiveValidatable from "../validatable/positive";
import Function from "@dikac/t-function/function";
import Return from "@dikac/t-validator/return/return";
import Instance from "@dikac/t-validator/parameter/instance/instance";

export default class Positive<MessageT>
    implements
        Validator<number, number, Readonly<Instance<number, MessageT>>>,
        Message<Function<[Readonly<Value<number> & Validatable>], MessageT>>
{

    constructor(
       public message : Function<[Readonly<Value<number> & Validatable>], MessageT>
    ) {
    }

    validate<Argument extends number>(value: Argument): Return<number, Argument, number, Readonly<Instance<number, MessageT>>> {

        return <Return<number, Argument, number, Readonly<Instance<number, MessageT>>>> PositiveValidatable(value, this.message);
    }
}
