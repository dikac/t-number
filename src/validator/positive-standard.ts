import Positive from "./positive";
import PositiveString from "../validatable/string/positive";

export default function PositiveStandard() : Positive<string> {

    return new Positive(PositiveString);
}
