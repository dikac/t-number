import NanType from "../string/nan";
export default function Nan(number, subject) {
    return new Error(NanType(false, number, subject));
}
//# sourceMappingURL=nan.js.map