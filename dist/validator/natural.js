import NaturalValidatable from "../validatable/natural";
export default class Natural {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return NaturalValidatable(value, this.message);
    }
}
//# sourceMappingURL=natural.js.map