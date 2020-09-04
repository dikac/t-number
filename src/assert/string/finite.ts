import SentencesIs from "@dikac/t-string/message/sentences-is";

export default function Finite(
    valid : boolean,
    value : number,
    subject : string = ''
) : string {

    const sentence = SentencesIs(valid, [subject, value.toString()]);

    sentence.object = ['finite'];

    return sentence.message;
}
