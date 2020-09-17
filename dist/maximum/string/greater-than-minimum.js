export default function GreaterThanMinimum(object) {
    let parts = [];
    parts.push(`maximum "${object.maximum}"`);
    if (object.valid) {
        parts.push(`is greater`);
    }
    else {
        parts.push(`must greater`);
    }
    if (object.inclusive) {
        parts.push('or equal');
    }
    parts.push(`than minimum "${object.minimum}"`);
    return parts.join(' ');
}
//# sourceMappingURL=greater-than-minimum.js.map