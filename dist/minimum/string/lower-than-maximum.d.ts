import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import Validatable from "@dikac/t-validatable/validatable";
import Inclusive from "../../inclusive/inclusive";
export default function LowerThanMaximum(object: Readonly<Minimum & Maximum & Validatable & Inclusive>): string;
