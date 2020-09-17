import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
export default class Callback extends ValidatableCallbacks {
    valueOf() {
        return this.value;
    }
    toString(radix) {
        return this.value.toString(radix);
    }
}
//# sourceMappingURL=callback.js.map