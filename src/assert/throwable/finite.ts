import FiniteType from "../string/finite";

export default function Finite(
    number : number,
    subject ?: string
) : Error {

    return new Error(FiniteType(false, number, subject))
}
