import Trim from "@dikac/t-string/trim";
import SentencesIs from "@dikac/t-string/message/sentences-is";

/**
 * message for greater validation
 */
export default function Greater(
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
            invalid:['must greater or equal than'],
            valid:['is greater or equal than'],
        }

    } else {

        sentence.expectation = {
            invalid:['must greater than'],
            valid:['is greater than'],
        }
    }


    return sentence.message;
}
