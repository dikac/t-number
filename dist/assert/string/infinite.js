import SentencesMust from "@dikac/t-string/message/sentences-must";
export default function Infinite(valid, value, subject = '') {
    const sentence = SentencesMust(valid, [subject]);
    sentence.expect = ['infinite number'];
    sentence.comma.push('expect');
    if (!valid) {
        sentence.actual.push('actual', `"${value.toString()}"`);
    }
    return sentence.message;
}
//# sourceMappingURL=infinite.js.map