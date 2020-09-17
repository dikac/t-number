import GreaterObject from "./boolean/greater";
import SetGetter from "@dikac/t-object/value/value/set-getter";
export default class Greater {
    constructor(value, minimum, inclusive, messageFactory) {
        this.value = value;
        this.minimum = minimum;
        this.inclusive = inclusive;
        this.messageFactory = messageFactory;
    }
    get valid() {
        return SetGetter(this, 'valid', GreaterObject(this));
    }
    get message() {
        return SetGetter(this, 'message', this.messageFactory(this));
    }
    valueOf() {
        return this.value;
    }
    toString(radix) {
        return this.value.toString(radix);
    }
}
//# sourceMappingURL=greater.js.map