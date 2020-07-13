import Greater from "./boolean/greater";
import Lower from "./boolean/lower";

export default  function RandomFloat (minimum : number, maximum : number, inclusive : boolean = true/*, precision ?: number*/) : number {

    if(minimum > maximum) {

        throw new Error(`minimum(${minimum}) must not greater than maximum(${maximum})`);

    } else if(minimum === maximum) {

        if(!inclusive) {

            throw new Error(`minimum(${minimum}) must not equal maximum(${maximum}) in exclusive mode`);

        } else {

            return minimum;
        }

    }

    let random = Math.random() * (maximum - minimum);

    let result = random + minimum;

    if(inclusive) {

        return result;

    } else {

        if(Greater(result, minimum, inclusive) && Lower(result, maximum, inclusive)) {

            return result;

        } else {

            return  RandomFloat(minimum, maximum, inclusive);
        }

    }
}


