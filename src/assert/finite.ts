import FiniteError from "./throwable/finite";
import Callback from "@dikac/t-function/assert/callback";

export default function Finite(
    value : number,
    error : (value:number)=> Error = FiniteError
) : asserts value is number {

    Callback(value, isFinite, error);

}
