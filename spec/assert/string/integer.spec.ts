import Integer from "../../../dist/assert/string/integer";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Integer(Infinity, true)).toBe('value "Infinity" is integer');
        expect(Integer(Infinity, false)).toBe('value "Infinity" is not integer');
    });

    it(`negative`, () => {
        expect(Integer(-Infinity, true)).toBe('value "-Infinity" is integer');
        expect(Integer(-Infinity, false)).toBe('value "-Infinity" is not integer');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Integer(1, true)).toBe('value "1" is integer');
        expect(Integer(1, false)).toBe('value "1" is not integer');
    });

    it(`negative`, () => {
        expect(Integer(-1, true)).toBe('value "-1" is integer');
        expect(Integer(-1, false)).toBe('value "-1" is not integer');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Integer(1.1, true)).toBe('value "1.1" is integer');
        expect(Integer(1.1, false)).toBe('value "1.1" is not integer');
    });

    it(`float`, () => {
        expect(Integer(-1.1, true)).toBe('value "-1.1" is integer');
        expect(Integer(-1.1, false)).toBe('value "-1.1" is not integer');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Integer(NaN, true)).toBe('value "NaN" is integer');
        expect(Integer(NaN, false)).toBe('value "NaN" is not integer');
    });

});
