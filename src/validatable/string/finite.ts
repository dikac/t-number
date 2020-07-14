import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import FiniteAssert from "../../boolean/string/finite";

export default function Finite(object : Readonly<Value<number> & Validatable>) : string {

    return FiniteAssert(object.valid, object.value)
}
