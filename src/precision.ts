export default function Precision(number: number, precision : number) : number {

    let strings = number.toString().split('.');

    if(strings[1] !== undefined) {

        strings[1] = strings[1].substr(0, precision);

        number = parseFloat(strings.join('.'));
    }

    return number;
}
