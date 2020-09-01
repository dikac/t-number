import NumberType from "../string/number";

export default function Number(number : any) : Error {

    return new Error(NumberType(false, number))
}
