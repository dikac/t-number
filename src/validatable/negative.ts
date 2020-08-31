import Callback from "@dikac/t-validator/validatable/callback-function";
import NegativeValidation from "../boolean/negative";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";

export default function Negative<MessageT>(
    number : number,
    message : (result:Readonly<Value<number> & Validatable>)=>MessageT
) : Readonly<Validatable & Message<MessageT> & Value<number>> {
    return Callback(number, NegativeValidation, message);
}
