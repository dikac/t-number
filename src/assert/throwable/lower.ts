import LowerType from "../string/lower";

export default function Lower(
    number : number,
    minimum : number,
    inclusive : boolean,
    subject ?: string
) : Error {

    return new Error(LowerType(false, number, minimum, inclusive))
}
