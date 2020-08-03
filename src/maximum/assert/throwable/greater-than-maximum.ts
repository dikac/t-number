import Minimum from "../../../minimum/minimum";
import Maximum from "../../../maximum/maximum";
import Inclusive from "../../../inclusive/inclusive";
import LowerThanMaximumString from "../../string/greater-than-minimum";

export default function GreaterThanMaximum(
    object : Readonly<Minimum & Maximum & Inclusive>,
) : Error {

    return new Error(LowerThanMaximumString({
        valid : false,
        maximum : object.maximum,
        minimum : object.minimum,
        inclusive : object.inclusive,
    }));
}
