export default function Type(value : any) : value is number {

    return typeof value === "number";
}