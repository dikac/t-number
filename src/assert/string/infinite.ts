import SentencesIs from "@dikac/t-string/message/sentences-is";

export default function Infinite(
    valid : boolean,
    value : number,
    subject : string = ''
) : string {

    const sentence = new SentencesIs(valid, [subject, value.toString()]);

    sentence.type = ['infinite'];

    return sentence.message;
}
