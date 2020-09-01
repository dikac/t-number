import Number from "../../../dist/validatable/string/number";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Number({value:Infinity, valid:true})).toBe('is number');
        expect(Number({value:Infinity, valid:false})).toBe('number is not number');
    });

    it(`number`, () => {
        expect(Number({value:-Infinity, valid:true})).toBe('is number');
        expect(Number({value:-Infinity, valid:false})).toBe('number is not number');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Number({value:1, valid:true})).toBe('is number');
        expect(Number({value:1, valid:false})).toBe('number is not number');
    });

    it(`number`, () => {
        expect(Number({value:-1, valid:true})).toBe('is number');
        expect(Number({value:-1, valid:false})).toBe('number is not number');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Number({value:1.1, valid:true})).toBe('is number');
        expect(Number({value:1.1, valid:false})).toBe('number is not number');
    });

    it(`float`, () => {
        expect(Number({value:-1.1, valid:true})).toBe('is number');
        expect(Number({value:-1.1, valid:false})).toBe('number is not number');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Number({value:NaN, valid:true})).toBe('is number');
        expect(Number({value:NaN, valid:false})).toBe('number is not number');
    });

});
