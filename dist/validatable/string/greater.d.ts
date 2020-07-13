import Minimum from "../../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Inclusive from "../../inclusive/inclusive";
/**
 * message for between validation
 */
export default function Greater(instance: Readonly<Inclusive & Minimum & Value<number> & Validatable>): string;
