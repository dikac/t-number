import Negative from "../../../dist/assert/throwable/negative";
import Message from "../../../dist/assert/string/negative";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`check value`, () => {
    let throwable = Negative(Infinity);
    expect(throwable.message).toBe(Message(false, Infinity));
    expect(throwable).toBeInstanceOf(Error);
});
