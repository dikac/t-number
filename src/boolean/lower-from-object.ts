import Maximum from "../maximum/maximum";
import Value from "@dikac/t-value/value";
import Lower from "./lower";
import Inclusive from "../inclusive/inclusive";

export default function LowerFromObject(object : Readonly<Inclusive> & Readonly<Maximum> & Readonly<Value<number>>) : boolean {

    return Lower(object.value, object.maximum, object.inclusive)
}
