import Minimum from "../../minimum";
import Maximum from "../../../maximum/maximum";
import Inclusive from "../../../inclusive/inclusive";
import LowerThanMaximumString from "../../string/lower-than-maximum";

export default function LowerThanMaximum(
    object : Readonly<Minimum & Maximum & Inclusive>,
) : Error {

    return new Error(LowerThanMaximumString({
        valid : false,
        maximum : object.maximum,
        minimum : object.minimum,
        inclusive : object.inclusive,
    }));
}
