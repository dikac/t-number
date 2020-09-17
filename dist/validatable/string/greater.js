import GreaterParameter from "../../assert/string/greater";
/**
 * message for between validation
 */
export default function Greater(instance) {
    return GreaterParameter(instance.valid, instance.value, instance.minimum, instance.inclusive, 'value');
}
//# sourceMappingURL=greater.js.map