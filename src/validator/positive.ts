import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import PositiveValidatable from "../validatable/positive";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default class Positive<MessageT>
    implements
        Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>,
        Message<(result:Readonly<Value<number> & Validatable>)=>MessageT>
{

    constructor(
       public message : (result:Readonly<Value<number> & Validatable>)=>MessageT
    ) {
    }

    validate<Argument extends number>(value: Argument): SimpleValidatable<number, Argument, number, Readonly<Instance<number, MessageT>>> {

        return <SimpleValidatable<number, Argument, number, Readonly<Instance<number, MessageT>>>> PositiveValidatable(value, this.message);
    }
}
