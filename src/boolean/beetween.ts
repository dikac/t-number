export default function Between(value : number, minimum : number, maximum : number) : boolean {

    return value >= minimum && value <= maximum;
}