import Maximum from "../../maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Inclusive from "../../inclusive/inclusive";
/**
 * message for between validation
 */
export default function Lower(instance: Readonly<Inclusive & Maximum & Value<number> & Validatable>): string;
