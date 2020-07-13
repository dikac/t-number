import Minimum from "./minimum/minimum";
import Maximum from "./maximum/maximum";
import RandomFloat from "./random-float";
import {Object} from 'ts-toolbelt'
import Inclusive from "./inclusive/inclusive";

export default function RandomFloatFromObject (object : Minimum & Maximum & Object.Optional<Inclusive>) : number {

    return  RandomFloat(object.minimum, object.maximum, object.inclusive);

}
