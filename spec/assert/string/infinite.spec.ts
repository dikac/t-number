import Infinite from "../../../dist/assert/string/infinite";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`valid`, () => {
    expect(Infinite(true, Infinity)).toBe('is infinite number.');
});

it(`invalid`, () => {
    expect(Infinite(false, 1)).toBe('must infinite number, actual "1".');
});

