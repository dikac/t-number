import Number from "./number";
import NumberString from "../validatable/string/number";

export default function NumberStandard() : Number<string> {

    return new Number(NumberString);
}
