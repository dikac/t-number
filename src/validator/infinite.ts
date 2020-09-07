import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import InfiniteValidatable from "../validatable/infinite";
import Instance from "@dikac/t-validator/validatable/validatable";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";

export default class Infinite<MessageT>
    implements
        Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>,
        Message<(result:Readonly<Value<number> & Validatable>)=>MessageT>
{

    constructor(
       public message : (result:Readonly<Value<number> & Validatable>)=>MessageT
    ) {
    }

    validate<Argument extends number>(value: Argument):
        SimpleValidatable<number, Argument, number, Readonly<Instance<number, MessageT>>>  & ValueOf<number> & ToString<number|void> {

        return <SimpleValidatable<number, Argument, number, Readonly<Instance<number, MessageT>>>  & ValueOf<number> & ToString<number|void>>
            InfiniteValidatable(value, this.message);
    }
}
