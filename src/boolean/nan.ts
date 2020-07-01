import Type from "./type";

export default function Nan(value : any) : value is number {

    if(!Type(value)) {

        return false;
    }

    return isNaN(value);
}
