import SentencesMust from "@dikac/t-string/message/sentences-must";


export default function Infinite(
    valid : boolean,
    value : number,
    subject : string = ''
) : string {

    const sentence = SentencesMust(valid, [subject]);

    sentence.expect = ['infinite number'];
    sentence.comma.push('expect');

    if(!valid) {

        sentence.actual.push('actual', `"${value}"`);
    }

    return sentence.message;
}
