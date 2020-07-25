import Integer from "./integer";
import IntegerString from "../validatable/string/integer";

export default function IntegerStandard() : Integer<string> {

    return new Integer(IntegerString);
}
