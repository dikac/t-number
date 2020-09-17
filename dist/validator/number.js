import NumberValidatable from "../validatable/number";
export default class Number {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return NumberValidatable(value, this.message);
    }
}
//# sourceMappingURL=number.js.map