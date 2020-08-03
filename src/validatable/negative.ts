import Callback from "@dikac/t-value/message/callback";
import NegativeValidation from "../boolean/negative";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";

export default function Negative<MessageT>(
    number : number,
    message : Function<[Readonly<Value<number> & Validatable>], MessageT>
) : Readonly<Validatable & Message<MessageT> & Value<number>> {
    return Callback(number, NegativeValidation, message);
}
