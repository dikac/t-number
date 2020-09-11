import SentencesMust from "@dikac/t-string/message/sentences-must";

export default function Integer(
    valid : boolean,
    value : number,
    subject : string = '',
) : string {

    const sentence = SentencesMust(valid, [subject]);

    sentence.expect = ['integer number'];
    sentence.comma.push('expect');

    if(!valid) {

        sentence.actual.push('actual', `"${value.toString()}"`);
    }

    return sentence.message;
}

