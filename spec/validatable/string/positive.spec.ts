import Positive from "../../../dist/validatable/string/positive";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Positive({value:Infinity, valid:true})).toBe('value "Infinity" is positive');
        expect(Positive({value:Infinity, valid:false})).toBe('value "Infinity" is not positive');
    });

    it(`positive`, () => {
        expect(Positive({value:-Infinity, valid:true})).toBe('value "-Infinity" is positive');
        expect(Positive({value:-Infinity, valid:false})).toBe('value "-Infinity" is not positive');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Positive({value:1, valid:true})).toBe('value "1" is positive');
        expect(Positive({value:1, valid:false})).toBe('value "1" is not positive');
    });

    it(`positive`, () => {
        expect(Positive({value:-1, valid:true})).toBe('value "-1" is positive');
        expect(Positive({value:-1, valid:false})).toBe('value "-1" is not positive');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Positive({value:1.1, valid:true})).toBe('value "1.1" is positive');
        expect(Positive({value:1.1, valid:false})).toBe('value "1.1" is not positive');
    });

    it(`float`, () => {
        expect(Positive({value:-1.1, valid:true})).toBe('value "-1.1" is positive');
        expect(Positive({value:-1.1, valid:false})).toBe('value "-1.1" is not positive');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Positive({value:NaN, valid:true})).toBe('value "NaN" is positive');
        expect(Positive({value:NaN, valid:false})).toBe('value "NaN" is not positive');
    });

});
