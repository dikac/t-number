import GreaterType from "../../boolean/string/greater";

export default function Greater(number : number, minimum : number, inclusive : boolean) : Error {

    return new Error(GreaterType(false, number, minimum, inclusive))
}
