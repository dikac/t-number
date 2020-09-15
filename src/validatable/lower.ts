import Maximum from "../maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import LowerFromObject from "./boolean/lower";
import Inclusive from "../inclusive/inclusive";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "@dikac/t-string/to-string";
import SetGetter from "@dikac/t-object/value/value/set-getter";

export default class Lower<ValueT extends number, MessageT>
    implements
        Readonly<Inclusive>,
        Readonly<Maximum>,
        Readonly<Value<ValueT>>,
        Readonly<Message<MessageT>>,
        Readonly<Validatable>,
        ValueOf<number>,
        ToString<number|void>
{

    constructor(
        readonly value : ValueT,
        readonly maximum : number,
        readonly inclusive : boolean,
        private messageFactory : (result:Readonly<Value<ValueT> & Inclusive & Maximum & Validatable>)=>MessageT
    ) {

    }

    get valid () : boolean {

        return SetGetter(this, 'valid', LowerFromObject(this))
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
