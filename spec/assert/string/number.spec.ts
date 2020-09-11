import Number from "../../../dist/assert/string/number";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});


it(`valid`, () => {
    expect(Number(true, {})).toBe('type is number.');
});

it(`invalid`, () => {
    expect(Number(false, 1)).toBe('type must number, actual number.');
});
