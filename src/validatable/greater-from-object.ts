import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import Inclusive from "../inclusive/inclusive";
import Greater from "./greater";

export default function GreaterFromObject<Msg>(
    object : Inclusive & Minimum & Value<number> & Message<Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], Msg>>,
) : Readonly<Value<number> &  Message<Msg> & Validatable & Inclusive & Minimum> {

    return new Greater(object.value, object.minimum, object.inclusive, object.message);
}
