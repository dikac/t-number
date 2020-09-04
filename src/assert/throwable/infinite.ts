import InfiniteType from "../string/infinite";

export default function Infinite(
    number : number,
    subject ?: string
) : Error {

    return new Error(InfiniteType(false, number, subject))
}
