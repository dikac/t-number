import Infinite from "../../../dist/assert/string/infinite";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Infinite(Infinity, true)).toBe('value "Infinity" is infinite');
        expect(Infinite(Infinity, false)).toBe('value "Infinity" is not infinite');
    });

    it(`negative`, () => {
        expect(Infinite(-Infinity, true)).toBe('value "-Infinity" is infinite');
        expect(Infinite(-Infinity, false)).toBe('value "-Infinity" is not infinite');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Infinite(1, true)).toBe('value "1" is infinite');
        expect(Infinite(1, false)).toBe('value "1" is not infinite');
    });

    it(`negative`, () => {
        expect(Infinite(-1, true)).toBe('value "-1" is infinite');
        expect(Infinite(-1, false)).toBe('value "-1" is not infinite');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Infinite(1.1, true)).toBe('value "1.1" is infinite');
        expect(Infinite(1.1, false)).toBe('value "1.1" is not infinite');
    });

    it(`float`, () => {
        expect(Infinite(-1.1, true)).toBe('value "-1.1" is infinite');
        expect(Infinite(-1.1, false)).toBe('value "-1.1" is not infinite');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Infinite(NaN, true)).toBe('value "NaN" is infinite');
        expect(Infinite(NaN, false)).toBe('value "NaN" is not infinite');
    });

});
