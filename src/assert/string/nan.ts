import SentencesIs from "@dikac/t-string/message/sentences-is";

export default function Nan(
    valid : boolean,
    value : number,
    subject : string = '',
) : string {

    let sentence = new SentencesIs(valid);
    sentence.type.push('NaN');
    sentence.value.push(subject, value.toString());

    return sentence.message;
}

