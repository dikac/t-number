import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Inclusive from "../inclusive/inclusive";
import Lower from "./lower";
import Maximum from "../maximum/maximum";

export default function LowerFromObject<Msg>(
    object : Maximum & Inclusive & Message<Function<[Readonly<Value<number> & Inclusive & Maximum & Validatable>], Msg>>
) : Lower<Msg> {

    return new Lower(object.maximum, object.inclusive, object.message);
}
