import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import InfiniteAssert from "../../boolean/string/infinite";

export default function Infinite(object : Readonly<Value<number> & Validatable>) : string {

    return InfiniteAssert(object.valid, object.value)
}
