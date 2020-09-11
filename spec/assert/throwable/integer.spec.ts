import Integer from "../../../dist/assert/throwable/integer";
import Message from "../../../dist/assert/string/integer";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`check value`, () => {
    let throwable = Integer(Infinity);
    expect(throwable.message).toBe(Message(false, Infinity));
    expect(throwable).toBeInstanceOf(Error);
});
