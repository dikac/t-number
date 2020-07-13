import Number from "../../../dist/assert/string/number";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Number(Infinity, true)).toBe('value "Infinity" is number');
        expect(Number(Infinity, false)).toBe('value "Infinity" is not number');
    });

    it(`number`, () => {
        expect(Number(-Infinity, true)).toBe('value "-Infinity" is number');
        expect(Number(-Infinity, false)).toBe('value "-Infinity" is not number');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Number(1, true)).toBe('value "1" is number');
        expect(Number(1, false)).toBe('value "1" is not number');
    });

    it(`number`, () => {
        expect(Number(-1, true)).toBe('value "-1" is number');
        expect(Number(-1, false)).toBe('value "-1" is not number');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Number(1.1, true)).toBe('value "1.1" is number');
        expect(Number(1.1, false)).toBe('value "1.1" is not number');
    });

    it(`float`, () => {
        expect(Number(-1.1, true)).toBe('value "-1.1" is number');
        expect(Number(-1.1, false)).toBe('value "-1.1" is not number');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Number(NaN, true)).toBe('value "NaN" is number');
        expect(Number(NaN, false)).toBe('value "NaN" is not number');
    });

});
