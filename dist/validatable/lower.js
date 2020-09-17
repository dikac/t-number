import LowerFromObject from "./boolean/lower";
import SetGetter from "@dikac/t-object/value/value/set-getter";
export default class Lower {
    constructor(value, maximum, inclusive, messageFactory) {
        this.value = value;
        this.maximum = maximum;
        this.inclusive = inclusive;
        this.messageFactory = messageFactory;
    }
    get valid() {
        return SetGetter(this, 'valid', LowerFromObject(this));
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
//# sourceMappingURL=lower.js.map