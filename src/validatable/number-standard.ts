import NumberMessage from "./string/number";
import Number from "./number";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/instance";


export default function NumberStandard<Argument extends unknown>(
    value : Argument
) : Return<unknown, Argument, number, Readonly<Instance<Argument, string>>> {

    return <Return<unknown, Argument, number, Readonly<Instance<Argument, string>>>> Number(value, NumberMessage);
}
