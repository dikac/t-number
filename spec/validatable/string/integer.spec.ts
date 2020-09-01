import Integer from "../../../dist/validatable/string/integer";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Integer({value:Infinity, valid:true})).toBe('Infinity is integer');
        expect(Integer({value:Infinity, valid:false})).toBe('Infinity is not integer');
    });

    it(`negative`, () => {
        expect(Integer({value:-Infinity, valid:true})).toBe('-Infinity is integer');
        expect(Integer({value:-Infinity, valid:false})).toBe('-Infinity is not integer');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Integer({value:1, valid:true})).toBe('1 is integer');
        expect(Integer({value:1, valid:false})).toBe('1 is not integer');
    });

    it(`negative`, () => {
        expect(Integer({value:-1, valid:true})).toBe('-1 is integer');
        expect(Integer({value:-1, valid:false})).toBe('-1 is not integer');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Integer({value:1.1, valid:true})).toBe('1.1 is integer');
        expect(Integer({value:1.1, valid:false})).toBe('1.1 is not integer');
    });

    it(`float`, () => {
        expect(Integer({value:-1.1, valid:true})).toBe('-1.1 is integer');
        expect(Integer({value:-1.1, valid:false})).toBe('-1.1 is not integer');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Integer({value:NaN, valid:true})).toBe('NaN is integer');
        expect(Integer({value:NaN, valid:false})).toBe('NaN is not integer');
    });

});
