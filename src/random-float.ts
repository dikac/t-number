import Greater from "./boolean/greater";
import Lower from "./boolean/lower";
import LowerThanMaximum from "./minimum/assert/lower-than-maximum";

export default  function RandomFloat (minimum : number, maximum : number, inclusive : boolean = true/*, precision ?: number*/) : number {

    LowerThanMaximum({
        maximum : maximum,
        minimum : minimum,
        inclusive : inclusive,
    });

    if((maximum - minimum) === 0) {

        if(!inclusive) {

            throw new Error(`minimum (${minimum}) and maximum (${maximum}) different must greater than 0 in exclusive mode`);
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


