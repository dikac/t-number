import PositiveValidatable from "../validatable/positive";
export default class Positive {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return PositiveValidatable(value, this.message);
    }
}
//# sourceMappingURL=positive.js.map