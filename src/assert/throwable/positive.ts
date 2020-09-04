import PositiveType from "../string/positive";

export default function Integer(
    number : number,
    subject ?: string
) : Error {

    return new Error(PositiveType( false, number, subject))
}
