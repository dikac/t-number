export default function Nan(valid : boolean, value : number) : string {

    if(valid) {

        return `value "${value}" is NaN`;

    } else {

        return `value "${value}" is not NaN`;
    }
}
