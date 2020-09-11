import Positive from "../../../dist/assert/throwable/positive";
import Message from "../../../dist/assert/string/positive";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`check value`, () => {
    let throwable = Positive(Infinity);
    expect(throwable.message).toBe(Message(false, Infinity));
    expect(throwable).toBeInstanceOf(Error);
});
