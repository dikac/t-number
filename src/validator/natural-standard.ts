import Natural from "./natural";
import NaturalString from "../validatable/string/natural";

export default function NaturalStandard() : Natural<string> {

    return new Natural(NaturalString);
}
