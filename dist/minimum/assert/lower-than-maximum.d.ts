import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import Inclusive from "../../inclusive/inclusive";
export default function LowerThanMaximum<Object extends Readonly<Minimum & Maximum & Inclusive>>(object: Readonly<Object>, error?: (value: Object) => Error): asserts object is Object;
