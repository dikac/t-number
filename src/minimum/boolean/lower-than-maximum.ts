import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import Inclusive from "../../inclusive/inclusive";
import Greater from "../../boolean/greater";

export default function LowerThanMaximum(object : Readonly<Minimum & Maximum & Inclusive>) : boolean {

    return Greater(object.maximum, object.minimum, object.inclusive);
}
