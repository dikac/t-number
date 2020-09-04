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

    const sentence = SentencesIs(valid, [subject, value.toString()]);

    sentence.object = [minimum.toString()];

    if(inclusive) {

        sentence.predicate = {
            invalid:['must greater or equal than'],
            valid:['is greater or equal than'],
        }

    } else {

        sentence.predicate = {
            invalid:['must greater than'],
            valid:['is greater than'],
        }
    }


    return sentence.message;
}
