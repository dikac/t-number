import Maximum from "../maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import LowerFromObject from "./boolean/lower";
import Inclusive from "../inclusive/inclusive";

export default class Lower<ValueT extends number, MessageT>
    implements
        Readonly<Inclusive>,
        Readonly<Maximum &
            Value<ValueT> &
            Message<MessageT> &
            Validatable
        >
{

    readonly valid : boolean;

    constructor(
        readonly value : ValueT,
        readonly maximum : number,
        readonly inclusive : boolean,
        private _message : (result:Readonly<Value<ValueT> & Inclusive & Maximum & Validatable>)=>MessageT
    ) {

        this.valid = LowerFromObject(this);
    }

    get message() : MessageT {

        return this._message(this)
    }

}
