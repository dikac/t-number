import FiniteType from "../string/finite";

export default function Finite(number : number) : Error {

    return new Error(FiniteType(false, number))
}
