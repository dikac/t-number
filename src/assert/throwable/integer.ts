import IntegerType from "../string/integer";

export default function Integer(
    number : number,
    subject ?: string
) : Error {

    return new Error(IntegerType(false, number, subject))
}
