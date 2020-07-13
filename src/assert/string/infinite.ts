export default function Infinite(value : number, valid : boolean) : string {

    if(valid) {

        return `value "${value}" is infinite`;

    } else {

        return `value "${value}" is not infinite`;
    }
}
