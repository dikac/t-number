import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Inclusive from "../inclusive/inclusive";
import Minimum from "../minimum/minimum";
import Greater from "./greater";

export default function GreaterFromObject<Msg>(
    object : Minimum & Inclusive & Message<Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], Msg>>
) : Greater<Msg> {

    return new Greater(object.minimum, object.inclusive, object.message);
}
