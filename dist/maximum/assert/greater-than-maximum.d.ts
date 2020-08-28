import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import Inclusive from "../../inclusive/inclusive";
export default function GreaterThanMaximum<Object extends Readonly<Minimum & Maximum & Inclusive>>(object: Readonly<Object>, error?: (object: Object) => Error): asserts object is Object;
