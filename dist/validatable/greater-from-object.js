import Greater from "./greater";
export default function GreaterFromObject(object) {
    return new Greater(object.value, object.minimum, object.inclusive, object.message);
}
//# sourceMappingURL=greater-from-object.js.map