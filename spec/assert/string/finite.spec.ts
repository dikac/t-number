import Finite from "../../../dist/assert/string/finite";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Finite(Infinity, true)).toBe('value "Infinity" is finite');
        expect(Finite(Infinity, false)).toBe('value "Infinity" is not finite');
    });

    it(`negative`, () => {
        expect(Finite(-Infinity, true)).toBe('value "-Infinity" is finite');
        expect(Finite(-Infinity, false)).toBe('value "-Infinity" is not finite');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Finite(1, true)).toBe('value "1" is finite');
        expect(Finite(1, false)).toBe('value "1" is not finite');
    });

    it(`negative`, () => {
        expect(Finite(-1, true)).toBe('value "-1" is finite');
        expect(Finite(-1, false)).toBe('value "-1" is not finite');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Finite(1.1, true)).toBe('value "1.1" is finite');
        expect(Finite(1.1, false)).toBe('value "1.1" is not finite');
    });

    it(`float`, () => {
        expect(Finite(-1.1, true)).toBe('value "-1.1" is finite');
        expect(Finite(-1.1, false)).toBe('value "-1.1" is not finite');
    });
});

it('nan',() =>{

    expect(Finite(NaN, true)).toBe('value "NaN" is finite');
    expect(Finite(NaN, false)).toBe('value "NaN" is not finite');

});
