import Callback from "@dikac/t-validator/validatable/callback";
import IntegerValidation from "../boolean/integer";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";

export default function Integer<MessageT>(
    number : number,
    message : (result:Readonly<Value<number> & Validatable>)=>MessageT
) : Readonly<Validatable & Message<MessageT> & Value<number>> {

    return Callback(number, IntegerValidation, message);
}
