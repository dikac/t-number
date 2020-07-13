export default function Negative(value : number, valid : boolean) : string {

    if(valid) {

        return `value "${value}" is negative`;

    } else {

        return `value "${value}" is not negative`;
    }
}
