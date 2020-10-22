import NaturalType from "../string/natural";

export default function Natural(
    number : number,
    subject ?: string
) : Error {

    return new Error(NaturalType(false, number, subject))
}
