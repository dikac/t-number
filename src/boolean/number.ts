export default function Number(value : unknown) : value is number {

    return typeof value === "number";
}
