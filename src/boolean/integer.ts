export default function Integer(number : number) : boolean {

    if(isFinite(number)) {

        return number === Math.floor(number);

    }

    return false;
}
