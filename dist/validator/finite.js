import FiniteValidatable from "../validatable/finite";
export default class Finite {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return FiniteValidatable(value, this.message);
    }
}
//# sourceMappingURL=finite.js.map