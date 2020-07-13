import Finite from "../../../dist/validatable/string/finite";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Finite({value:Infinity, valid:true})).toBe('value "Infinity" is finite');
        expect(Finite({value:Infinity, valid:false})).toBe('value "Infinity" is not finite');
    });

    it(`negative`, () => {
        expect(Finite({value:-Infinity, valid:true})).toBe('value "-Infinity" is finite');
        expect(Finite({value:-Infinity, valid:false})).toBe('value "-Infinity" is not finite');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Finite({value:1, valid:true})).toBe('value "1" is finite');
        expect(Finite({value:1, valid:false})).toBe('value "1" is not finite');
    });

    it(`negative`, () => {
        expect(Finite({value:-1, valid:true})).toBe('value "-1" is finite');
        expect(Finite({value:-1, valid:false})).toBe('value "-1" is not finite');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Finite({value:1.1, valid:true})).toBe('value "1.1" is finite');
        expect(Finite({value:1.1, valid:false})).toBe('value "1.1" is not finite');
    });

    it(`float`, () => {
        expect(Finite({value:-1.1, valid:true})).toBe('value "-1.1" is finite');
        expect(Finite({value:-1.1, valid:false})).toBe('value "-1.1" is not finite');
    });
});

it('nan',() =>{

    expect(Finite({value:NaN, valid:true})).toBe('value "NaN" is finite');
    expect(Finite({value:NaN, valid:false})).toBe('value "NaN" is not finite');

});
