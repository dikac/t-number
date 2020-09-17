export default function LowerThanMaximum(object) {
    let parts = [];
    parts.push(`minimum "${object.maximum}"`);
    if (object.valid) {
        parts.push(`is lower`);
    }
    else {
        parts.push(`must lower`);
    }
    if (object.inclusive) {
        parts.push('or equal');
    }
    parts.push(`than maximum "${object.minimum}"`);
    return parts.join(' ');
}
//# sourceMappingURL=lower-than-maximum.js.map