import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
import MessageCallback from "@dikac/t-value/message/callback";
import GreaterObject from "../boolean/greater-from-object";
import Inclusive from "../inclusive/inclusive";

export default class Greater<Msg>
    extends MergeWrapper<Value<number>, Message<Msg>, Validatable>
    implements
        Readonly<Inclusive>,
        Readonly<Minimum>
{
    readonly minimum : number;
    readonly inclusive : boolean;

    constructor(
        number : number,
        minimum : number,
        inclusive : boolean,
        message : Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], Msg>
    ) {

        let container : Inclusive & Minimum & Value<number> = {
            minimum : minimum,
            inclusive : inclusive,
            value : number
        };

        let msg = MessageCallback(container, GreaterObject, ()=>message(this));

        super(container, msg, msg);

        this.minimum = minimum;
        this.inclusive = inclusive;

    }
}
