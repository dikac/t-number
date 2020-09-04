import NumberType from "../string/number";

export default function Number(
    number : any,
    subject ?: string ,
    conversion ?: (value:unknown)=>string
) : Error {

    return new Error(NumberType(false, number, subject, conversion))
}
