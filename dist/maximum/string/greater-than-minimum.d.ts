import Minimum from "../../minimum/minimum";
import Maximum from "../maximum";
import Validatable from "@dikac/t-validatable/validatable";
import Inclusive from "../../inclusive/inclusive";
export default function GreaterThanMinimum(object: Readonly<Minimum & Maximum & Validatable & Inclusive>): string;
