export default function Integer(valid : boolean, value : number) : string {

    if(valid) {

        return `value "${value}" is integer`;

    } else {

        return `value "${value}" is not integer`;
    }
}
