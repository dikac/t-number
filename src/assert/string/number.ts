import SentencesIs from "@dikac/t-string/message/sentences-is";

export default function Number(
    valid : boolean,
    value : unknown,
    subject : string = '',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    let sentence = new SentencesIs(valid);
    sentence.type.push('number');
    sentence.value.push(subject);

    if(!valid) {

        sentence.value.push(conversion(value));
    }

    return sentence.message;
}
