export default function Sum(...numbers : ReadonlyArray<number>) : number {

    return numbers.reduce((previous, current)=>previous+current);

}
