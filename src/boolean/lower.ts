export default function Lower(number : number, maximum : number, inclusive : boolean = false) : boolean {

    return inclusive ? number <= maximum : number < maximum;
}
