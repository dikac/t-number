import Infinite from "../../../dist/assert/throwable/infinite";
import Message from "../../../dist/assert/string/infinite";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`check value`, () => {
    let throwable = Infinite(Infinity);
    expect(throwable.message).toBe(Message(false, Infinity));
    expect(throwable).toBeInstanceOf(Error);
});

