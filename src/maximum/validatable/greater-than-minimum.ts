import Minimum from "../../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-merge";
import MessageCallback from "@dikac/t-validator/validatable/callback";
import Inclusive from "../../inclusive/inclusive";
import Maximum from "../maximum";
import GreaterThanMinimumFunction from "../boolean/greater-than-minimum";

export default class GreaterThanMinimum<MessageT, ValueT extends Minimum & Maximum & Inclusive>
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
        message : (result:Readonly<Maximum & Inclusive & Minimum & Validatable>)=>MessageT
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
