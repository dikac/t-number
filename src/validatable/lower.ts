import Maximum from "../maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import LowerFromObject from "./boolean/lower";
import Inclusive from "../inclusive/inclusive";

export default class Lower<MessageT>
    implements
        Readonly<Inclusive>,
        Readonly<Maximum & Value<number> & Message<MessageT> & Validatable>
{

    readonly valid : boolean;

    constructor(
        readonly value : number,
        readonly maximum : number,
        readonly inclusive : boolean,
        private _message : Function<[Readonly<Value<number> & Inclusive & Maximum & Validatable>], MessageT>
    ) {

        this.valid = LowerFromObject(this);
    }

    get message() : MessageT {

        return this._message(this)
    }

}
