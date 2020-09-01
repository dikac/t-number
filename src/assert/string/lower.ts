import Trim from "@dikac/t-string/trim";
import SentencesIs from "@dikac/t-string/message/sentences-is";

/**
 * message for lower validation
 */
export default function Lower(
    valid : boolean,
    value : number,
    minimum : number,
    inclusive : boolean,
    subject : string = ''
) : string {

    const sentence = new SentencesIs(valid, [subject, value.toString()]);

    sentence.type = [minimum.toString()];

    if(inclusive) {

        sentence.expectation = {
            invalid:['must lower or equal than'],
            valid:['is lower or equal than'],
        }

    } else {

        sentence.expectation = {
            invalid:['must lower than'],
            valid:['is lower than'],
        }
    }


    return sentence.message;
}
