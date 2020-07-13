import Negative from "../../../dist/validatable/string/negative";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Negative({value:Infinity, valid:true})).toBe('value "Infinity" is negative');
        expect(Negative({value:Infinity, valid:false})).toBe('value "Infinity" is not negative');
    });

    it(`negative`, () => {
        expect(Negative({value:-Infinity, valid:true})).toBe('value "-Infinity" is negative');
        expect(Negative({value:-Infinity, valid:false})).toBe('value "-Infinity" is not negative');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Negative({value:1, valid:true})).toBe('value "1" is negative');
        expect(Negative({value:1, valid:false})).toBe('value "1" is not negative');
    });

    it(`negative`, () => {
        expect(Negative({value:-1, valid:true})).toBe('value "-1" is negative');
        expect(Negative({value:-1, valid:false})).toBe('value "-1" is not negative');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Negative({value:1.1, valid: true})).toBe('value "1.1" is negative');
        expect(Negative({value:1.1, valid: false})).toBe('value "1.1" is not negative');
    });

    it(`float`, () => {
        expect(Negative({value:-1.1, valid:true})).toBe('value "-1.1" is negative');
        expect(Negative({value:-1.1, valid:false})).toBe('value "-1.1" is not negative');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Negative({value:NaN, valid:true})).toBe('value "NaN" is negative');
        expect(Negative({value:NaN, valid:false})).toBe('value "NaN" is not negative');
    });

});
