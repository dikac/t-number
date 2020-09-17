import LowerParameter from "../../assert/string/lower";
/**
 * message for between validation
 */
export default function Lower(instance) {
    return LowerParameter(instance.valid, instance.value, instance.maximum, instance.inclusive, 'value');
}
//# sourceMappingURL=lower.js.map