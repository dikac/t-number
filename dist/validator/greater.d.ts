import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import GreaterValidatable from "../validatable/greater";
import Inclusive from "../inclusive/inclusive";
import Minimum from "../minimum/minimum";
import SimpleValidatable from "@dikac/t-validator/validatable/simple";
export default class Greater<MessageT> implements Validator<number, number, boolean, boolean, GreaterValidatable<number, MessageT>>, Message<(result: Readonly<Value<number> & Inclusive & Minimum & Validatable>) => MessageT>, Minimum, Inclusive {
    minimum: number;
    inclusive: boolean;
    message: (result: Readonly<Value<number> & Inclusive & Minimum & Validatable>) => MessageT;
    constructor(minimum: number, inclusive: boolean, message: (result: Readonly<Value<number> & Inclusive & Minimum & Validatable>) => MessageT);
    validate<Argument extends number>(value: Argument): SimpleValidatable<number, Argument, number, GreaterValidatable<Argument, MessageT>>;
}
