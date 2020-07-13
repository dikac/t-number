import NumberMessage from "./string/number";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Number from "./number";

export default function NumberStandard(value : unknown) : Readonly<Validatable<false> & Message<string> & Value<unknown>> | Readonly<Validatable<true> & Message<string> & Value<number>> {

    return Number(value, NumberMessage);
}
