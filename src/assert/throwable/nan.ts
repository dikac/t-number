import NanType from "../../boolean/string/nan";

export default function Nan(number : number) : Error {

    return new Error(NanType(false, number))
}
