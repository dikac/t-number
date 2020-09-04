import NegativeType from "../string/negative";

export default function Integer(
    number : number,
    subject ?: string
) : Error {

    return new Error(NegativeType(false, number))
}
