import NegativeMessage from "./string/negative";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Negative from "./negative";

export default function NegativeStandard(number : number) : Readonly<Validatable & Message<string> & Value<number>> {

    return Negative(number, NegativeMessage);
}
