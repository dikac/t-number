import NegativeValidatable from "../validatable/negative";
export default class Negative {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return NegativeValidatable(value, this.message);
    }
}
//# sourceMappingURL=negative.js.map