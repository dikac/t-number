import Integer from "../../../dist/assert/string/integer";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`valid`, () => {
    expect(Integer(true, Infinity)).toBe('is integer number.');
});

it(`invalid`, () => {
    expect(Integer(false, 1)).toBe('must integer number, actual "1".');
});
