import IntegerMessage from "./string/integer";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Integer from "./integer";

export default function IntegerStandard(number : number) : Readonly<Validatable & Message<string> & Value<number>> {

    return Integer(number, IntegerMessage);
}
