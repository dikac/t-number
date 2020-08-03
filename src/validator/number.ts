import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NumberValidatable from "../validatable/number";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/parameter/instance/instance";
import Return from "@dikac/t-validator/return/return";


export default class Number<MessageT>
    implements
        Validator<unknown, number, Readonly<Instance<unknown, MessageT>>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], MessageT>>
{

    constructor(
       public message : Function<[Readonly<Value> & Readonly<Validatable>], MessageT>
    ) {
    }

    validate<Argument extends unknown>(value: Argument): Return<unknown, Argument, number, Readonly<Instance<unknown, MessageT>>>  {

        return <Return<unknown, Argument, number, Readonly<Instance<number, MessageT>>>> NumberValidatable(value, this.message);
    }
}
