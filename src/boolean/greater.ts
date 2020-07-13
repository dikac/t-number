export default function Greater(number : number, minimum : number, inclusive : boolean = false) : boolean {

    return inclusive ? number >= minimum : number > minimum;
}
