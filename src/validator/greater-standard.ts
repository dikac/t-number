import Greater from "./greater";
import GreaterString from "../validatable/string/greater";

export default function GreaterStandard(minimum : number, inclusive : boolean) : Greater<string> {

    return new Greater(minimum, inclusive, GreaterString);
}
