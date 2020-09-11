import Number from "../../../dist/validatable/string/number";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`positive`, () => {
    expect(Number({value:Infinity, valid:false})).toBe('value must number, actual number.');
});

it(`number`, () => {
    expect(Number({value:-Infinity, valid:true})).toBe('value is number.');
});
