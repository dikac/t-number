import Callback from "@dikac/t-validatable/message/callback";
import NegativeValidation from "../boolean/negative";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";

export default function Negative<Msg>(
    number : number,
    message : Function<[Readonly<Value<number> & Validatable>], Msg>
) : Readonly<Validatable & Message<Msg> & Value<number>> {
    return Callback(number, NegativeValidation, message);
}
