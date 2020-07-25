import Infinite from "./infinite";
import InfiniteString from "../validatable/string/infinite";

export default function InfiniteStandard() : Infinite<string> {

    return new Infinite(InfiniteString);
}
