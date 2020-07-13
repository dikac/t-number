import Minimum from "../../minimum/minimum";
import Maximum from "../../maximum/maximum";
import Validatable from "@dikac/t-validatable/validatable";
import Inclusive from "../../inclusive/inclusive";

export default function LowerThanMaximum(object : Readonly<Minimum & Maximum & Validatable & Inclusive>) : string {

    let parts : string[] = [];
    parts.push(`minimum "${object.maximum}"`);

    if(object.valid) {

        parts.push(`is lower`);

    } else {

        parts.push(`must lower`);
    }

    if(object.inclusive) {

        parts.push('or equal');
    }

    parts.push(`than maximum "${object.minimum}"`);

    return parts.join(' ');
}
