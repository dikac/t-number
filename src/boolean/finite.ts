import Type from "./type";

export default function Finite(value : any) : value is number {

    return Type(value) && isFinite(value);
}

