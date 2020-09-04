import SentencesIs from "@dikac/t-string/message/sentences-is";

export default function Nan(
    valid : boolean,
    value : number,
    subject : string = '',
) : string {

    let sentence = SentencesIs(valid);
    sentence.object.push('NaN');
    sentence.subject.push(subject, value.toString());

    return sentence.message;
}

