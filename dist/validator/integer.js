import IntegerValidatable from "../validatable/integer";
export default class Integer {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return IntegerValidatable(value, this.message);
    }
}
//# sourceMappingURL=integer.js.map