import Greater from "../../../dist/assert/throwable/greater";
import Message from "../../../dist/assert/string/greater";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it(`exclusive`, () => {
    let throwable = Greater(1, 10, false);
    expect(throwable.message).toBe(Message(false, 1, 10, false));
    expect(throwable).toBeInstanceOf(Error);
});

it(`inclusive`, () => {
    let throwable = Greater(1, 10, true);
    expect(throwable.message).toBe(Message(false, 1, 10, true));
    expect(throwable).toBeInstanceOf(Error);
});
