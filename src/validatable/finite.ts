import Callback from "@dikac/t-validator/validatable/callback";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";

export default function Finite<MessageT>(
    number : number,
    message : Function<[Readonly<Value<number> & Validatable>], MessageT>
) : Readonly<Validatable & Message<MessageT> & Value<number>> {
    return Callback(number, isFinite, message);
}
