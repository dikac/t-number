import SentencesIs from "@dikac/t-string/message/sentences-is";

export default function Positive(
    valid : boolean,
    value : number,
    subject : string = '',
) : string {

    let sentence = SentencesIs(valid);
    sentence.object.push('positive');
    sentence.subject.push(subject, value.toString());

    return sentence.message;
}

