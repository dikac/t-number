import Finite from "../../../dist/boolean/string/finite";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Finite(true, Infinity)).toBe('value "Infinity" is finite');
        expect(Finite(false, Infinity)).toBe('value "Infinity" is not finite');
    });

    it(`negative`, () => {
        expect(Finite(true, -Infinity)).toBe('value "-Infinity" is finite');
        expect(Finite(false, -Infinity)).toBe('value "-Infinity" is not finite');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Finite(true, 1)).toBe('value "1" is finite');
        expect(Finite(false, 1)).toBe('value "1" is not finite');
    });

    it(`negative`, () => {
        expect(Finite(true, -1)).toBe('value "-1" is finite');
        expect(Finite(false, -1)).toBe('value "-1" is not finite');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Finite(true, 1.1)).toBe('value "1.1" is finite');
        expect(Finite(false, 1.1)).toBe('value "1.1" is not finite');
    });

    it(`float`, () => {
        expect(Finite(true, -1.1)).toBe('value "-1.1" is finite');
        expect(Finite(false, -1.1)).toBe('value "-1.1" is not finite');
    });
});

it('nan',() =>{

    expect(Finite(true, NaN)).toBe('value "NaN" is finite');
    expect(Finite(false, NaN)).toBe('value "NaN" is not finite');

});
