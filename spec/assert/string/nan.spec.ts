import Nan from "../../../dist/assert/string/nan";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Nan(true, Infinity)).toBe('Infinity is NaN');
        expect(Nan(false, Infinity)).toBe('Infinity is not NaN');
    });

    it(`negative`, () => {
        expect(Nan(true, -Infinity)).toBe('-Infinity is NaN');
        expect(Nan(false, -Infinity)).toBe('-Infinity is not NaN');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Nan(true, 1)).toBe('1 is NaN');
        expect(Nan(false, 1)).toBe('1 is not NaN');
    });

    it(`negative`, () => {
        expect(Nan(true, -1)).toBe('-1 is NaN');
        expect(Nan(false, -1)).toBe('-1 is not NaN');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Nan(true, 1.1)).toBe('1.1 is NaN');
        expect(Nan(false, 1.1)).toBe('1.1 is not NaN');
    });

    it(`float`, () => {
        expect(Nan(true, -1.1)).toBe('-1.1 is NaN');
        expect(Nan(false, -1.1)).toBe('-1.1 is not NaN');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Nan(true, NaN)).toBe('NaN is NaN');
        expect(Nan(false, NaN)).toBe('NaN is not NaN');
    });

});
