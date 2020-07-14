import Integer from "../../../dist/boolean/string/integer";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Integer(true, Infinity)).toBe('value "Infinity" is integer');
        expect(Integer(false, Infinity)).toBe('value "Infinity" is not integer');
    });

    it(`negative`, () => {
        expect(Integer(true, -Infinity)).toBe('value "-Infinity" is integer');
        expect(Integer(false, -Infinity)).toBe('value "-Infinity" is not integer');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Integer(true, 1)).toBe('value "1" is integer');
        expect(Integer(false, 1)).toBe('value "1" is not integer');
    });

    it(`negative`, () => {
        expect(Integer(true, -1)).toBe('value "-1" is integer');
        expect(Integer(false, -1)).toBe('value "-1" is not integer');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Integer(true, 1.1)).toBe('value "1.1" is integer');
        expect(Integer(false, 1.1)).toBe('value "1.1" is not integer');
    });

    it(`float`, () => {
        expect(Integer(true, -1.1)).toBe('value "-1.1" is integer');
        expect(Integer(false, -1.1)).toBe('value "-1.1" is not integer');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Integer(true, NaN)).toBe('value "NaN" is integer');
        expect(Integer(false, NaN)).toBe('value "NaN" is not integer');
    });

});
