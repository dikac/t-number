import Finite from "../../../dist/assert/string/finite";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Finite(true, Infinity)).toBe('Infinity is finite');
        expect(Finite(false, Infinity)).toBe('Infinity is not finite');
    });

    it(`negative`, () => {
        expect(Finite(true, -Infinity)).toBe('-Infinity is finite');
        expect(Finite(false, -Infinity)).toBe('-Infinity is not finite');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Finite(true, 1)).toBe('1 is finite');
        expect(Finite(false, 1)).toBe('1 is not finite');
    });

    it(`negative`, () => {
        expect(Finite(true, -1)).toBe('-1 is finite');
        expect(Finite(false, -1)).toBe('-1 is not finite');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Finite(true, 1.1)).toBe('1.1 is finite');
        expect(Finite(false, 1.1)).toBe('1.1 is not finite');
    });

    it(`float`, () => {
        expect(Finite(true, -1.1)).toBe('-1.1 is finite');
        expect(Finite(false, -1.1)).toBe('-1.1 is not finite');
    });
});

it('nan',() =>{

    expect(Finite(true, NaN)).toBe('NaN is finite');
    expect(Finite(false, NaN)).toBe('NaN is not finite');

});
