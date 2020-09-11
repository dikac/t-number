import Lower from "../../../dist/assert/throwable/lower";
import Message from "../../../dist/assert/string/lower";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`exclusive`, () => {
    let throwable = Lower(1, 10, false);
    expect(throwable.message).toBe(Message(false, 1, 10, false));
    expect(throwable).toBeInstanceOf(Error);
});

it(`inclusive`, () => {
    let throwable = Lower(1, 10, true);
    expect(throwable.message).toBe(Message(false, 1, 10, true));
    expect(throwable).toBeInstanceOf(Error);
});
