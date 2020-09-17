import InfiniteValidatable from "../validatable/infinite";
export default class Infinite {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return InfiniteValidatable(value, this.message);
    }
}
//# sourceMappingURL=infinite.js.map