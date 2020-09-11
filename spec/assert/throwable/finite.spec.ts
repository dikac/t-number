import Finite from "../../../dist/assert/throwable/finite";
import Message from "../../../dist/assert/string/finite";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`check value`, () => {

    let throwable = Finite(Infinity);
    expect(throwable.message).toBe(Message(false, Infinity));
    expect(throwable).toBeInstanceOf(Error);
});
