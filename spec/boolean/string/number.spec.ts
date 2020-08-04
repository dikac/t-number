import Number from "../../../dist/boolean/string/number";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Number(true, Infinity )).toBe('value is number');
        expect(Number(false, Infinity )).toBe('value is not number');
    });

    it(`number`, () => {
        expect(Number(true, -Infinity)).toBe('value is number');
        expect(Number(false, -Infinity)).toBe('value is not number');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Number(true, 1 )).toBe('value is number');
        expect(Number(false, 1 )).toBe('value is not number');
    });

    it(`number`, () => {
        expect(Number(true, -1)).toBe('value is number');
        expect(Number(false, -1)).toBe('value is not number');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Number(true, 1.1)).toBe('value is number');
        expect(Number(false, 1.1)).toBe('value is not number');
    });

    it(`float`, () => {
        expect(Number(true, -1.1)).toBe('value is number');
        expect(Number(false, -1.1)).toBe('value is not number');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Number(true, NaN)).toBe('value is number');
        expect(Number(false, NaN)).toBe('value is not number');
    });

});
