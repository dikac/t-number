import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/parameter/instance/instance";
import Return from "@dikac/t-validator/return/return";
export default class Integer<MessageT> implements Validator<number, number, Readonly<Instance<number, MessageT>>>, Message<Function<[Readonly<Value<number>> & Readonly<Validatable>], MessageT>> {
    message: Function<[Readonly<Value<number>> & Readonly<Validatable>], MessageT>;
    constructor(message: Function<[Readonly<Value<number>> & Readonly<Validatable>], MessageT>);
    validate<Argument extends number>(value: Argument): Return<number, Argument, number, Readonly<Instance<number, MessageT>>>;
}
