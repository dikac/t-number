import Integer from "../../../dist/validatable/string/integer";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Integer({value:Infinity, valid:true})).toBe('value "Infinity" is integer');
        expect(Integer({value:Infinity, valid:false})).toBe('value "Infinity" is not integer');
    });

    it(`negative`, () => {
        expect(Integer({value:-Infinity, valid:true})).toBe('value "-Infinity" is integer');
        expect(Integer({value:-Infinity, valid:false})).toBe('value "-Infinity" is not integer');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Integer({value:1, valid:true})).toBe('value "1" is integer');
        expect(Integer({value:1, valid:false})).toBe('value "1" is not integer');
    });

    it(`negative`, () => {
        expect(Integer({value:-1, valid:true})).toBe('value "-1" is integer');
        expect(Integer({value:-1, valid:false})).toBe('value "-1" is not integer');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Integer({value:1.1, valid:true})).toBe('value "1.1" is integer');
        expect(Integer({value:1.1, valid:false})).toBe('value "1.1" is not integer');
    });

    it(`float`, () => {
        expect(Integer({value:-1.1, valid:true})).toBe('value "-1.1" is integer');
        expect(Integer({value:-1.1, valid:false})).toBe('value "-1.1" is not integer');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Integer({value:NaN, valid:true})).toBe('value "NaN" is integer');
        expect(Integer({value:NaN, valid:false})).toBe('value "NaN" is not integer');
    });

});
