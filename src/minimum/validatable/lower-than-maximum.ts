import Minimum from "../../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-merge";
import MessageCallback from "@dikac/t-validator/validatable/callback";
import Inclusive from "../../inclusive/inclusive";
import Maximum from "../../maximum/maximum";
import GreaterThanMinimumFunction from "../boolean/lower-than-maximum";

export default class Greater<MessageT,  ValueT extends Minimum & Maximum & Inclusive>
    extends MergeWrapper<Value<ValueT>, Message<MessageT>, Validatable>
    implements
        Readonly<Inclusive>,
        Readonly<Minimum>,
        Readonly<Maximum>
{
    readonly minimum : number;
    readonly maximum : number;
    readonly inclusive : boolean;

    constructor(
        object : ValueT,
        message : Function<[Readonly<Maximum & Inclusive & Minimum & Validatable>], MessageT>
    ) {

        let container : Inclusive & Minimum & Value<ValueT> & Maximum = {
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
