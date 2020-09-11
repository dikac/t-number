import Number from "../../../dist/assert/throwable/number";
import Message from "../../../dist/assert/string/number";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`check value`, () => {
    let throwable = Number(Infinity);
    expect(throwable.message).toBe(Message(false, Infinity));
    expect(throwable).toBeInstanceOf(Error);
});
