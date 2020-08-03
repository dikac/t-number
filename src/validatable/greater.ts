import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import GreaterObject from "./boolean/greater";
import Inclusive from "../inclusive/inclusive";

export default class Greater<MessageT>

    implements
        Readonly<Inclusive & Value<number> & Message<MessageT> & Validatable>,
        Readonly<Minimum>
{
    readonly valid : boolean;

    constructor(
        readonly value : number,
        readonly minimum : number,
        readonly inclusive : boolean,
        private _message : Function<[Readonly<Value<number> & Inclusive & Minimum & Validatable>], MessageT>
    ) {

        this.valid = GreaterObject(this);
    }

    get message() : MessageT {

        return this._message(this)
    }
}
