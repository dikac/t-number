import Minimum from "./minimum/minimum";
import Maximum from "./maximum/maximum";
import RandomInteger from "./random-integer";
import Inclusive from "./inclusive/inclusive";
import {Object} from 'ts-toolbelt'

export default function RandomIntegerFromObject (object : Minimum & Maximum & Object.Optional<Inclusive>) : number {

    return  RandomInteger(object.minimum, object.maximum, object.inclusive);
}
