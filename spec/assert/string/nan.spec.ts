import Nan from "../../../dist/assert/string/nan";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Nan(Infinity, true)).toBe('value "Infinity" is NaN');
        expect(Nan(Infinity, false)).toBe('value "Infinity" is not NaN');
    });

    it(`negative`, () => {
        expect(Nan(-Infinity, true)).toBe('value "-Infinity" is NaN');
        expect(Nan(-Infinity, false)).toBe('value "-Infinity" is not NaN');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Nan(1, true)).toBe('value "1" is NaN');
        expect(Nan(1, false)).toBe('value "1" is not NaN');
    });

    it(`negative`, () => {
        expect(Nan(-1, true)).toBe('value "-1" is NaN');
        expect(Nan(-1, false)).toBe('value "-1" is not NaN');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Nan(1.1, true)).toBe('value "1.1" is NaN');
        expect(Nan(1.1, false)).toBe('value "1.1" is not NaN');
    });

    it(`float`, () => {
        expect(Nan(-1.1, true)).toBe('value "-1.1" is NaN');
        expect(Nan(-1.1, false)).toBe('value "-1.1" is not NaN');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Nan(NaN, true)).toBe('value "NaN" is NaN');
        expect(Nan(NaN, false)).toBe('value "NaN" is not NaN');
    });

});
