function RandomFloat (maximum : number) : number
function RandomFloat (minimum : number, maximum : number) : number
function RandomFloat (minimum : number, maximum : number, precision ?: number) : number
function RandomFloat (minimum : number, maximum ?: number, precision ?: number) : number {

    if (maximum === undefined) {

        maximum = minimum;
        minimum = 0;
    }

    if(precision !== undefined && precision < 0) {

        throw new Error(`precision must greater than 0`)
    }

    if(minimum > maximum) {

        throw new Error(`minimum(${minimum}) must not greater than maximum(${maximum})`)
    }

    let random = Math.random() * (maximum - minimum);

    let result = random + minimum;

    if(precision) {

        let strings = result.toString().split('.');

        if(strings[1] !== undefined) {

            strings[1] = strings[1].substr(0, precision);

            //console.log('===============');
            //console.log(precision);
            //console.log(strings);

            result = parseFloat(strings.join('.'));

            //console.log(result);
        }
    }

    return result;
}

export default RandomFloat;