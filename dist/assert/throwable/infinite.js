import InfiniteType from "../string/infinite";
export default function Infinite(number, subject) {
    return new Error(InfiniteType(false, number, subject));
}
//# sourceMappingURL=infinite.js.map