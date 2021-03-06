import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";

export default class Callback<
    Type extends number,
    MessageType = unknown
> extends ValidatableCallbacks<number, Type, MessageType> implements ValueOf<number>, ToString<number|void> {

    valueOf() : number {

        return this.value;
    }

    toString(radix ?: number) : string {

        return this.value.toString(radix);
    }
}
