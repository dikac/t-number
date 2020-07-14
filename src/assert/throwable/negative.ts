import NegativeType from "../../boolean/string/negative";

export default function Integer(number : number) : Error {

    return new Error(NegativeType(false, number))
}
