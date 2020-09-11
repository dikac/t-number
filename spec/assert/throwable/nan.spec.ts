import Nan from "../../../dist/assert/throwable/nan";
import Message from "../../../dist/assert/string/nan";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`check value`, () => {
    let throwable = Nan(Infinity);
    expect(throwable.message).toBe(Message(false, Infinity));
    expect(throwable).toBeInstanceOf(Error);
});

