import IsGreater from "../boolean/greater";
import Callback from "@dikac/t-function/assert/callback";
import GreaterError from "./throwable/greater";

export default function Greater(
    value : number,
    minimum : number,
    inclusive : boolean,
    error : (value : number, minimum : number, inclusive : boolean)=>Error = GreaterError
) : asserts value is number {

    Callback(value, IsGreater, error, minimum, inclusive);
}
