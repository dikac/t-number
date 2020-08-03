import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import Inclusive from "../inclusive/inclusive";
declare type Argument = Inclusive & Minimum & Value<number>;
export default function GreaterFromObject<MessageT>(object: Argument & Message<Function<[Readonly<Argument & Validatable>], MessageT>>): Readonly<Argument & Message<MessageT> & Validatable>;
export {};
