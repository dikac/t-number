import Lower from "./lower";
import LowerString from "../validatable/string/lower";

export default function LowerStandard(
    maximum : number,
    inclusive : boolean
) : Lower<string> {

    return new Lower(maximum, inclusive, LowerString);
}
