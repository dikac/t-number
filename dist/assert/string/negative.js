import SentencesMust from "@dikac/t-string/message/sentences-must";
export default function Negative(valid, value, subject = '') {
    const sentence = SentencesMust(valid, [subject]);
    sentence.expect = ['negative number'];
    sentence.comma.push('expect');
    if (!valid) {
        sentence.actual.push('actual', `"${value}"`);
    }
    return sentence.message;
}
//# sourceMappingURL=negative.js.map