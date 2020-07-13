import Minimum from "../../minimum/minimum";
import Maximum from "../maximum";
import Validatable from "@dikac/t-validatable/validatable";
import Inclusive from "../../inclusive/inclusive";

export default function GreaterThanMinimum(object : Readonly<Minimum & Maximum & Validatable & Inclusive>) : string {

    let parts : string[] = [];
    parts.push(`maximum "${object.maximum}"`);

    if(object.valid) {

        parts.push(`is greater`);

    } else {

        parts.push(`must greater`);
    }

    if(object.inclusive) {

        parts.push('or equal');
    }

    parts.push(`than minimum "${object.minimum}"`);

    return parts.join(' ');
}
