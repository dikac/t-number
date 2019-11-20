import Type from "./boolean/type";

export default function Guard(
    value : any,
    error : (value: any) => Error = (value: any) => new Error('type expect string, given ' + value)
) : number {

    if(Type(value)) {

        return value;
    }

    throw error(value);
}