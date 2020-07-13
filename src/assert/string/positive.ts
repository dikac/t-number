export default function Positive(value : number, valid : boolean) : string {

    if(valid) {

        return `value "${value}" is positive`;

    } else {

        return `value "${value}" is not positive`;
    }
}
