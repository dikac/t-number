export default function Integer(value : number, valid : boolean) : string {

    if(valid) {

        return `value "${value}" is integer`;

    } else {

        return `value "${value}" is not integer`;
    }
}
