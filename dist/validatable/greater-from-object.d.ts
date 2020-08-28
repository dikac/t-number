import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Inclusive from "../inclusive/inclusive";
declare type Argument = Inclusive & Minimum & Value<number>;
export default function GreaterFromObject<MessageT>(object: Argument & Message<(result: Readonly<Argument & Validatable>) => MessageT>): Readonly<Argument & Message<MessageT> & Validatable>;
export {};
