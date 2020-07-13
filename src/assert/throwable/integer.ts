import IntegerType from "../string/integer";

export default function Integer(number : number) : Error {

    return new Error(IntegerType(number, false))
}
