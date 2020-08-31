import Callback from "@dikac/t-validator/validatable/callback-function";
import PositiveValidation from "../boolean/positive";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";

export default function Positive<MessageT>(
    number : number,
    message : (result:Readonly<Value<number> & Validatable>)=>MessageT
) : Readonly<Validatable & Message<MessageT> & Value<number>> {
    return Callback(number, PositiveValidation, message);
}
