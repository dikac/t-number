
import Trim from "@dikac/t-string/trim";
import SentencesIs from "@dikac/t-string/message/sentences-is";

export default function Finite(
    valid : boolean,
    value : number,
    subject : string = ''
) : string {

    const sentence = new SentencesIs(valid, [subject, value.toString()]);

    sentence.type = ['finite'];

    return sentence.message;
}
