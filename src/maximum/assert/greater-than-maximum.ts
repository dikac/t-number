import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import GreaterThanMaximumBoolean from "../boolean/greater-than-minimum";
import Greater from "../../validatable/boolean/greater";
import Function from "@dikac/t-function/function";
import GreaterThanMaximumError from "./throwable/greater-than-maximum";
import Parameter from "@dikac/t-function/assert/parameter";
import IsInfinite from "../../boolean/infinite";
import Inclusive from "../../inclusive/inclusive";

export default function GreaterThanMaximum<Object extends  Readonly<Minimum & Maximum & Inclusive>>(
    object : Readonly<Object>,
    error : Function<[Object], Error> = GreaterThanMaximumError
) : asserts object is Object {

    Parameter(object, GreaterThanMaximumBoolean, error);

}
