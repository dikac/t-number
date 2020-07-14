import Minimum from "../../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-validatable/message/readonly-merge";
import MessageCallback from "@dikac/t-validatable/message/callback";
import Inclusive from "../../inclusive/inclusive";
import Maximum from "../maximum";
import GreaterThanMinimumFunction from "../boolean/greater-than-minimum";

export default class Greater<Msg,  Val extends Minimum & Maximum & Inclusive>
    extends MergeWrapper<Value<Val>, Message<Msg>, Validatable>
    implements
        Readonly<Inclusive>,
        Readonly<Minimum>,
        Readonly<Maximum>
{
    readonly minimum : number;
    readonly maximum : number;
    readonly inclusive : boolean;

    constructor(
        object : Val,
        message : Function<[Readonly<Maximum & Inclusive & Minimum & Validatable>], Msg>
    ) {

        let container : Inclusive & Minimum & Value<Val> & Maximum = {
            maximum : object.maximum,
            minimum : object.minimum,
            inclusive : object.inclusive,
            value : object
        };

        let msg = MessageCallback(container, GreaterThanMinimumFunction, ()=>message(this));

        super(container, msg, msg);

        this.minimum = object.minimum;
        this.maximum = object.maximum;
        this.inclusive = object.inclusive;

    }
}
