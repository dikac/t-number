import Nan from "../../../dist/assert/string/nan";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});


it(`valid`, () => {
    expect(Nan(true, Infinity)).toBe('is NaN.');
});

it(`invalid`, () => {
    expect(Nan(false, 1)).toBe('must NaN, actual "1".');
});

