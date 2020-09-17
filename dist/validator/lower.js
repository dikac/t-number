import LowerValidatable from "../validatable/lower";
export default class Lower {
    constructor(maximum, inclusive, message) {
        this.maximum = maximum;
        this.inclusive = inclusive;
        this.message = message;
    }
    validate(value) {
        return new LowerValidatable(value, this.maximum, this.inclusive, this.message);
    }
}
//# sourceMappingURL=lower.js.map