import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
export default function Positive<Msg>(number: number, message: Function<[Readonly<Value<number> & Validatable>], Msg>): Readonly<Validatable & Message<Msg> & Value<number>>;
