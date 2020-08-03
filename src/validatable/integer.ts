import Callback from "@dikac/t-value/message/callback";
import IntegerValidation from "../boolean/integer";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";

export default function Integer<MessageT>(
    number : number,
    message : Function<[Readonly<Value<number> & Validatable>], MessageT>
) : Readonly<Validatable & Message<MessageT> & Value<number>> {

    return Callback(number, IntegerValidation, message);
}
