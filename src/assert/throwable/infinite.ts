import InfiniteType from "../../boolean/string/infinite";

export default function Infinite(number : number) : Error {

    return new Error(InfiniteType(false, number))
}
