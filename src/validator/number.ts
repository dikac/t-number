import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NumberValidatable from "../validatable/number";
import Instance from "@dikac/t-validator/validatable/validatable";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";


export default class Number<MessageT>
    implements
        Validator<unknown, number, Readonly<Instance<unknown, MessageT>>>,
        Message<(result:Readonly<Value> & Readonly<Validatable>)=>MessageT>
{

    constructor(
       public message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageT
    ) {
    }

    validate<Argument extends number>(value: Argument): Readonly<Instance<Argument, MessageT, true>>
    validate<Argument extends unknown>(value: Argument): SimpleValidatable<unknown, Argument, number, Readonly<Instance<unknown, MessageT>>>
    validate<Argument extends unknown>(value: Argument) {

        return <SimpleValidatable<unknown, Argument, number, Readonly<Instance<number, MessageT>>>> NumberValidatable(value, this.message);
    }
}
