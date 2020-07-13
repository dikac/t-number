import Minimum from "./minimum/minimum";
import Maximum from "./maximum/maximum";
import { Object } from 'ts-toolbelt';
import Inclusive from "./inclusive/inclusive";
export default function RandomFloatFromObject(object: Minimum & Maximum & Object.Optional<Inclusive>): number;
