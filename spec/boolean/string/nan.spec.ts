import Nan from "../../../dist/boolean/string/nan";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Nan(true, Infinity)).toBe('value "Infinity" is NaN');
        expect(Nan(false, Infinity)).toBe('value "Infinity" is not NaN');
    });

    it(`negative`, () => {
        expect(Nan(true, -Infinity)).toBe('value "-Infinity" is NaN');
        expect(Nan(false, -Infinity)).toBe('value "-Infinity" is not NaN');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Nan(true, 1)).toBe('value "1" is NaN');
        expect(Nan(false, 1)).toBe('value "1" is not NaN');
    });

    it(`negative`, () => {
        expect(Nan(true, -1)).toBe('value "-1" is NaN');
        expect(Nan(false, -1)).toBe('value "-1" is not NaN');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Nan(true, 1.1)).toBe('value "1.1" is NaN');
        expect(Nan(false, 1.1)).toBe('value "1.1" is not NaN');
    });

    it(`float`, () => {
        expect(Nan(true, -1.1)).toBe('value "-1.1" is NaN');
        expect(Nan(false, -1.1)).toBe('value "-1.1" is not NaN');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Nan(true, NaN)).toBe('value "NaN" is NaN');
        expect(Nan(false, NaN)).toBe('value "NaN" is not NaN');
    });

});
