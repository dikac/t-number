import PositiveType from "../../boolean/string/positive";

export default function Integer(number : number) : Error {

    return new Error(PositiveType( false, number))
}
