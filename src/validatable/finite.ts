import Callback from "@dikac/t-value/message/callback";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";

export default function Finite<Msg>(
    number : number,
    message : Function<[Readonly<Value<number> & Validatable>], Msg>
) : Readonly<Validatable & Message<Msg> & Value<number>> {
    return Callback(number, isFinite, message);
}
