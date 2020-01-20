import Type from "./type";

export default function Finite(value : any) : boolean {

    return Type(value) && isFinite(value);
}

