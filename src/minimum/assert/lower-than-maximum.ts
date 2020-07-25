import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import LowerThanMaximumBoolean from "../boolean/lower-than-maximum";
import Greater from "../../validatable/boolean/greater";
import Function from "@dikac/t-function/function";
import LowerThanMaximumError from "./throwable/lower-than-maximum";
import Parameter from "@dikac/t-function/assert/parameter";
import IsInfinite from "../../boolean/infinite";
import Inclusive from "../../inclusive/inclusive";

export default function LowerThanMaximum<Object extends  Readonly<Minimum & Maximum & Inclusive>>(
    object : Readonly<Object>,
    error : Function<[Object], Error> = LowerThanMaximumError
) : asserts object is Object {

    Parameter(object, LowerThanMaximumBoolean, error);

}
