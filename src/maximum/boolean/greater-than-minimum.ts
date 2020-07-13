import Minimum from "../../minimum/minimum";
import Maximum from "../maximum";
import Inclusive from "../../inclusive/inclusive";
import Greater from "../../boolean/greater";

export default function GreaterThanMinimum(object : Readonly<Minimum & Maximum & Inclusive>) : boolean {

    return Greater(object.maximum, object.minimum, object.inclusive);
}
