import LowerType from "../string/lower";

export default function Lower(number : number, minimum : number, inclusive : boolean) : Error {

    return new Error(LowerType(number, minimum, inclusive, false))
}
