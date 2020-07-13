import Minimum from "./minimum/minimum";
import Maximum from "./maximum/maximum";
import Inclusive from "./inclusive/inclusive";
import { Object } from 'ts-toolbelt';
export default function RandomIntegerFromObject(object: Minimum & Maximum & Object.Optional<Inclusive>): number;
