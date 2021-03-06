import AssertInfinite from "../assert/infinite";
import InfiniteError from "../assert/throwable/infinite";

export default function Infinite(
    value : number,
    error : (value:number)=> Error = InfiniteError
) : number {

     AssertInfinite(value, error);

     return value;
}
