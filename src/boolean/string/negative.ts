export default function Negative(valid : boolean, value : number) : string {

    if(valid) {

        return `value "${value}" is negative`;

    } else {

        return `value "${value}" is not negative`;
    }
}
