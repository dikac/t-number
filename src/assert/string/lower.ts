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

    const sentence = SentencesIs(valid, [subject, value.toString()]);

    sentence.object = [minimum.toString()];

    if(inclusive) {

        sentence.predicate = {
            invalid:['must lower or equal than'],
            valid:['is lower or equal than'],
        }

    } else {

        sentence.predicate = {
            invalid:['must lower than'],
            valid:['is lower than'],
        }
    }


    return sentence.message;
}
