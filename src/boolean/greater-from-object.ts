import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Greater from "./greater";
import Inclusive from "../inclusive/inclusive";

export default function GreaterFromObject(object : Readonly<Inclusive> & Readonly<Minimum> & Readonly<Value<number>>) : boolean {

    return Greater(object.value, object.minimum, object.inclusive)
}
