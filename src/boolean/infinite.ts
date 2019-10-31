import Type from "./type";

export default function Infinite (value : any) : value is number {

    if(!Type(value)) {

        return false;
    }

    if (value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY)  {

        return true;
    }

    return false;

}