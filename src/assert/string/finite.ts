export default function Finite(value : number, valid : boolean) : string {

    if(valid) {

        return `value "${value}" is finite`;

    } else {

        return `value "${value}" is not finite`;
    }
}
