import IsLower from "../boolean/lower";
import Callback from "@dikac/t-function/assert/callback";
import LowerError from "./throwable/lower";

export default function Lower(
    value : number,
    minimum : number,
    inclusive : boolean,
    error : (value : number, maximum : number, inclusive : boolean)=>Error = LowerError
) : asserts value is number {

    Callback(value, IsLower,  error, minimum, inclusive);
}
