import Negative from "../../../dist/assert/string/negative";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`valid`, () => {
    expect(Negative(true, Infinity)).toBe('is negative number.');
});

it(`invalid`, () => {
    expect(Negative(false, 1)).toBe('must negative number, actual "1".');
});
