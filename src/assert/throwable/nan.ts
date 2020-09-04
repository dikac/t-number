import NanType from "../string/nan";

export default function Nan(
    number : number,
    subject ?: string
) : Error {

    return new Error(NanType(false, number, subject))
}
