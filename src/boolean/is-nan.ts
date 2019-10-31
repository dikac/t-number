import Type from "./type";

export default function IsNan(value : any) : value is number {

    if(!Type(value)) {

        return false;
    }

    return isNaN(value);
}