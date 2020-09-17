import SentencesMust from "@dikac/t-string/message/sentences-must";
export default function Nan(valid, value, subject = '') {
    const sentence = SentencesMust(valid, [subject]);
    sentence.expect = ['NaN'];
    sentence.comma.push('expect');
    if (!valid) {
        sentence.actual.push('actual', `"${value.toString()}"`);
    }
    return sentence.message;
}
//# sourceMappingURL=nan.js.map