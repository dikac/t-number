import Finite from "../../../dist/assert/string/finite";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});


it(`valid`, () => {
    expect(Finite(true, Infinity)).toBe('is finite number.');
});

it(`invalid`, () => {
    expect(Finite(false, 1)).toBe('must finite number, actual "1".');
});
