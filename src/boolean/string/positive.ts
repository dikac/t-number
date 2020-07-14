export default function Positive(valid : boolean, value : number) : string {

    if(valid) {

        return `value "${value}" is positive`;

    } else {

        return `value "${value}" is not positive`;
    }
}
