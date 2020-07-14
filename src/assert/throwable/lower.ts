import LowerType from "../../boolean/string/lower";

export default function Lower(number : number, minimum : number, inclusive : boolean) : Error {

    return new Error(LowerType(false, number, minimum, inclusive))
}
