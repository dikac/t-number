export default function Number(valid : boolean, value : unknown) : string {

    let string = (<any>value).toString();

    if(valid) {

        return `value "${string}" is number`;

    } else {

        return `value "${string}" is not number`;
    }
}
