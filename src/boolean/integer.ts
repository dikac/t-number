import Finite from "./finite";

export default function Integer(number : number) : boolean {

    if(Finite(number)) {

        return number === Math.floor(number);

    }

    return false;
}