export default function Infinite(valid : boolean, value : number) : string {

    if(valid) {

        return `value "${value}" is infinite`;

    } else {

        return `value "${value}" is not infinite`;
    }
}
