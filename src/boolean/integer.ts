import Finite from "./finite";

export default function Integer(number : number) : number is number {

    if(Finite(number)) {

        return number === Math.floor(number);

    }

    return false;
}