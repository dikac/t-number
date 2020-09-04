import GreaterType from "../string/greater";

export default function Greater(
    number : number,
    minimum : number,
    inclusive : boolean,
    subject ?: string
) : Error {

    return new Error(GreaterType(false, number, minimum, inclusive, subject))
}
