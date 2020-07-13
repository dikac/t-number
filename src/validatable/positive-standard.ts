import PositiveMessage from "./string/positive";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Positive from "./positive";

export default function PositiveStandard(number : number) : Readonly<Validatable & Message<string> & Value<number>> {

    return Positive(number, PositiveMessage);
}
