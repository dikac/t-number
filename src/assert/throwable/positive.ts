import PositiveType from "../string/positive";

export default function Integer(number : number) : Error {

    return new Error(PositiveType(number, false))
}
