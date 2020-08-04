export default function Number(valid : boolean, value : unknown) : string {

    if(valid) {

        return `value is number`;

    } else {

        return `value is not number`;
    }
}
