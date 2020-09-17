import GreaterValidatable from "../validatable/greater";
export default class Greater {
    constructor(minimum, inclusive, message) {
        this.minimum = minimum;
        this.inclusive = inclusive;
        this.message = message;
    }
    validate(value) {
        return new GreaterValidatable(value, this.minimum, this.inclusive, this.message);
    }
}
//# sourceMappingURL=greater.js.map