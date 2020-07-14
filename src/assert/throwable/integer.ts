import IntegerType from "../../boolean/string/integer";

export default function Integer(number : number) : Error {

    return new Error(IntegerType(false, number))
}
