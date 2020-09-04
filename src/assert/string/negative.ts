import SentencesIs from "@dikac/t-string/message/sentences-is";

export default function Negative(
    valid : boolean,
    value : number,
    subject : string = '',
) : string {

    let sentence = SentencesIs(valid);
    sentence.object.push('negative');
    sentence.subject.push(subject, value.toString());
    return sentence.message;
}

