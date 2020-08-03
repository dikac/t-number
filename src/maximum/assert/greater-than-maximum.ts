import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import GreaterThanMaximumBoolean from "../boolean/greater-than-minimum";
import Function from "@dikac/t-function/function";
import GreaterThanMaximumError from "./throwable/greater-than-maximum";
import Callback from "@dikac/t-function/assert/callback";
import Inclusive from "../../inclusive/inclusive";

export default function GreaterThanMaximum<Object extends  Readonly<Minimum & Maximum & Inclusive>>(
    object : Readonly<Object>,
    error : Function<[Object], Error> = GreaterThanMaximumError
) : asserts object is Object {

    Callback(object, GreaterThanMaximumBoolean, error);

}
