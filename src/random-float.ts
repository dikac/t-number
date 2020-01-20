function RandomFloat (maximum : number) : number
function RandomFloat (minimum : number, maximum : number) : number
function RandomFloat (minimum : number, maximum ?: number) : number {

    if (maximum === undefined) {

        maximum = minimum;
        minimum = 0;
    }

    if(minimum > maximum) {

        throw new Error(`minimum(${minimum}) must not greater than maximum(${maximum})`)
    }

    let random = Math.random() * (maximum - minimum);

    return random + minimum;
}

export default RandomFloat;