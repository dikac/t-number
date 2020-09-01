import Integer from "../../../dist/assert/string/integer";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Integer(true, Infinity)).toBe('Infinity is integer');
        expect(Integer(false, Infinity)).toBe('Infinity is not integer');
    });

    it(`negative`, () => {
        expect(Integer(true, -Infinity)).toBe('-Infinity is integer');
        expect(Integer(false, -Infinity)).toBe('-Infinity is not integer');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Integer(true, 1)).toBe('1 is integer');
        expect(Integer(false, 1)).toBe('1 is not integer');
    });

    it(`negative`, () => {
        expect(Integer(true, -1)).toBe('-1 is integer');
        expect(Integer(false, -1)).toBe('-1 is not integer');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Integer(true, 1.1)).toBe('1.1 is integer');
        expect(Integer(false, 1.1)).toBe('1.1 is not integer');
    });

    it(`float`, () => {
        expect(Integer(true, -1.1)).toBe('-1.1 is integer');
        expect(Integer(false, -1.1)).toBe('-1.1 is not integer');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Integer(true, NaN)).toBe('NaN is integer');
        expect(Integer(false, NaN)).toBe('NaN is not integer');
    });

});
