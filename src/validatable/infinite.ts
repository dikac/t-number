import Callback from "./callback";
import InfiniteValidation from "../boolean/infinite";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";

export default function Positive<MessageT>(
    number : number,
    message : (result:Readonly<Value<number> & Validatable>)=>MessageT
) : Readonly<Validatable & Message<MessageT> & Value<number>> & ValueOf<number> & ToString<number|void> {
    return new Callback(number, InfiniteValidation, message);
}
