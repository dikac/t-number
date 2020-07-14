export default function Finite(valid : boolean, value : number) : string {

    if(valid) {

        return `value "${value}" is finite`;

    } else {

        return `value "${value}" is not finite`;
    }
}
