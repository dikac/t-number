import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
export default function Finite<MessageT>(number: number, message: (result: Readonly<Value<number> & Validatable>) => MessageT): Readonly<Validatable & Message<MessageT> & Value<number>>;
