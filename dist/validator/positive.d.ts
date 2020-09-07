import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";
export default class Positive<MessageT> implements Validator<number, number, boolean, boolean, Readonly<Instance<number, MessageT>>>, Message<(result: Readonly<Value<number> & Validatable>) => MessageT> {
    message: (result: Readonly<Value<number> & Validatable>) => MessageT;
    constructor(message: (result: Readonly<Value<number> & Validatable>) => MessageT);
    validate<Argument extends number>(value: Argument): SimpleValidatable<number, Argument, number, Readonly<Instance<number, MessageT>>> & ValueOf<number> & ToString<number | void>;
}
