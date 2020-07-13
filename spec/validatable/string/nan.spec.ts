import Nan from "../../../dist/validatable/string/nan";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Nan({value:Infinity, valid:true})).toBe('value "Infinity" is NaN');
        expect(Nan({value:Infinity, valid:false})).toBe('value "Infinity" is not NaN');
    });

    it(`negative`, () => {
        expect(Nan({value:-Infinity, valid:true})).toBe('value "-Infinity" is NaN');
        expect(Nan({value:-Infinity, valid:false})).toBe('value "-Infinity" is not NaN');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Nan({value:1, valid:true})).toBe('value "1" is NaN');
        expect(Nan({value:1, valid:false})).toBe('value "1" is not NaN');
    });

    it(`negative`, () => {
        expect(Nan({value:-1, valid:true})).toBe('value "-1" is NaN');
        expect(Nan({value:-1, valid:false})).toBe('value "-1" is not NaN');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Nan({value:1.1, valid:true})).toBe('value "1.1" is NaN');
        expect(Nan({value:1.1, valid:false})).toBe('value "1.1" is not NaN');
    });

    it(`float`, () => {
        expect(Nan({value:-1.1, valid:true})).toBe('value "-1.1" is NaN');
        expect(Nan({value:-1.1, valid:false})).toBe('value "-1.1" is not NaN');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Nan({value:NaN, valid:true})).toBe('value "NaN" is NaN');
        expect(Nan({value:NaN, valid:false})).toBe('value "NaN" is not NaN');
    });

});
