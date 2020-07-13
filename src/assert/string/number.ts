export default function Number(value : unknown, valid : boolean) : string {

    let string = (<any>value).toString();

    if(valid) {

        return `value "${string}" is number`;

    } else {

        return `value "${string}" is not number`;
    }
}
