import Callback from "./callback";
export default function Finite(number, message) {
    return new Callback(number, isFinite, message);
}
//# sourceMappingURL=finite.js.map