export default function Nan(value : number, valid : boolean) : string {

    if(valid) {

        return `value "${value}" is NaN`;

    } else {

        return `value "${value}" is not NaN`;
    }
}
