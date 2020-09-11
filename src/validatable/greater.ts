import Minimum from "../minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import GreaterObject from "./boolean/greater";
import Inclusive from "../inclusive/inclusive";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";
import SetGetter from "@dikac/t-object/value/set-getter";

export default class Greater<ValueT extends number, MessageT>
    implements
        Readonly<Inclusive>,
        Readonly<Value<ValueT>>,
        Readonly<Message<MessageT>>,
        Readonly<Validatable>,
        Readonly<Minimum>,
        ValueOf<number>,
        ToString<number|void>
{

    constructor(
        readonly value : ValueT,
        readonly minimum : number,
        readonly inclusive : boolean,
        private messageFactory : (result:Readonly<Value<ValueT> & Inclusive & Minimum & Validatable>)=>MessageT
    ) {
    }

    get valid () : boolean {

        return SetGetter(this, 'valid', GreaterObject(this))
    }

    get message() : MessageT {

        return SetGetter(this, 'message', this.messageFactory(this))
    }

    valueOf() : number {

        return this.value;
    }

    toString(radix ?: number) : string {

        return this.value.toString(radix);
    }
}
