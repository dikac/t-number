import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import NanAssert from "../../boolean/string/nan";

export default function Nan(object : Readonly<Value<number> & Validatable>) : string {

    return NanAssert(object.valid, object.value)
}
