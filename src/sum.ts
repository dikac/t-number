export default function Sum(...numbers : ReadonlyArray<number>) : number {

    let total = 0;

    numbers.forEach(number=>total+=number);

    return total;

}
