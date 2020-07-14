import NumberType from "../../boolean/string/number";

export default function Number(number : any) : Error {

    return new Error(NumberType(number, false))
}
