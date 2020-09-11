import Sentences from "@dikac/t-string/message/sentences";

/**
 * message for greater validation
 */
export default function Greater(
    valid : boolean,
    value : number,
    minimum : number,
    inclusive : boolean,
    subject : string = 'number'
) : string {

    const sentence = new Sentences(valid);

    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(valid) {

        sentence.accept.push(`is greater`);

    } else {

        sentence.reject.push(`must greater`);
    }

    if(inclusive) {

        sentence.expect.push(`or equal`);
    }

    sentence.expect.push('than', `"${minimum.toString()}"`);

    sentence.actual.push('actual', `"${value.toString()}"`)

    return sentence.message;
}
