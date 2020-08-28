import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Inclusive from "../inclusive/inclusive";
import Lower from "./lower";
import Maximum from "../maximum/maximum";
export default function LowerFromObject<MessageT>(object: Maximum & Inclusive & Message<(result: Readonly<Value<number> & Inclusive & Maximum & Validatable>) => MessageT>): Lower<MessageT>;
