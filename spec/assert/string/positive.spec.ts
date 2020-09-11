import Positive from "../../../dist/assert/string/positive";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`valid`, () => {
    expect(Positive(true, Infinity)).toBe('is positive number.');
});

it(`invalid`, () => {
    expect(Positive(false, 1)).toBe('must positive number, actual "1".');
});
