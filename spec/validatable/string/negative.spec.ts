import Negative from "../../../dist/validatable/string/negative";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`positive`, () => {
    expect(Negative({value:Infinity, valid:true})).toBe('value is negative number.');
});

it(`negative`, () => {
    expect(Negative({value:-Infinity, valid:false})).toBe('value must negative number, actual "-Infinity".');
});
