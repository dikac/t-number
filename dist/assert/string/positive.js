import SentencesMust from "@dikac/t-string/message/sentences-must";
export default function Positive(valid, value, subject = '') {
    const sentence = SentencesMust(valid, [subject]);
    sentence.expect = ['positive number'];
    sentence.comma.push('expect');
    if (!valid) {
        sentence.actual.push('actual', `"${value}"`);
    }
    return sentence.message;
}
//# sourceMappingURL=positive.js.map