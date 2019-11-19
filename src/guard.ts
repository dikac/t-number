import Type from "./boolean/type";

export default function Guard(value : any) : number {

    if(Type(value)) {

        return value;
    }

    throw new Error('type expect number, given ' + value);
}