import Positive from "../../../dist/validatable/string/positive";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`float`, () => {
    expect(Positive({value:NaN, valid:true})).toBe('value is positive number.');
});

it(`float`, () => {
    expect(Positive({value:NaN, valid:false})).toBe('value must positive number, actual "NaN".');
});
