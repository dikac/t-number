import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/instance";
export default function NumberStandard<Argument extends unknown>(value: Argument): Return<unknown, Argument, number, Readonly<Instance<Argument, string>>>;
