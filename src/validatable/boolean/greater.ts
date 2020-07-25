import Minimum from "../../minimum/minimum";
import Value from "@dikac/t-value/value";
import GreaterParameter from "../../boolean/greater";
import Inclusive from "../../inclusive/inclusive";

export default function Greater(object : Readonly<Inclusive> & Readonly<Minimum> & Readonly<Value<number>>) : boolean {

    return GreaterParameter(object.value, object.minimum, object.inclusive)
}
