import NanType from "../string/nan";

export default function Nan(number : number) : Error {

    return new Error(NanType(number, false))
}
