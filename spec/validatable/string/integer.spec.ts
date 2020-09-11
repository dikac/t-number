import Integer from "../../../dist/validatable/string/integer";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

it(`valid`, () => {
    expect(Integer({valid:true, value:Infinity})).toBe('value is integer number.');
});

it(`invalid`, () => {
    expect(Integer({valid:false, value:1})).toBe('value must integer number, actual "1".');
});

