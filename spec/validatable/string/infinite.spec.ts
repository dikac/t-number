import Infinite from "../../../dist/validatable/string/infinite";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        expect(Infinite({value:Infinity, valid:true})).toBe('value "Infinity" is infinite');
        expect(Infinite({value:Infinity, valid:false})).toBe('value "Infinity" is not infinite');
    });

    it(`negative`, () => {
        expect(Infinite({value:-Infinity, valid:true})).toBe('value "-Infinity" is infinite');
        expect(Infinite({value:-Infinity, valid:false})).toBe('value "-Infinity" is not infinite');
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        expect(Infinite({value:1, valid:true})).toBe('value "1" is infinite');
        expect(Infinite({value:1, valid:false})).toBe('value "1" is not infinite');
    });

    it(`negative`, () => {
        expect(Infinite({value:-1, valid:true})).toBe('value "-1" is infinite');
        expect(Infinite({value:-1, valid:false})).toBe('value "-1" is not infinite');
    });
});

describe('float',() =>{

    it(`float`, () => {
        expect(Infinite({value:1.1, valid:true})).toBe('value "1.1" is infinite');
        expect(Infinite({value:1.1, valid:false})).toBe('value "1.1" is not infinite');
    });

    it(`float`, () => {
        expect(Infinite({value:-1.1, valid:true})).toBe('value "-1.1" is infinite');
        expect(Infinite({value:-1.1, valid:false})).toBe('value "-1.1" is not infinite');
    });
});

describe('nan',() =>{

    it(`float`, () => {
        expect(Infinite({value:NaN, valid:true})).toBe('value "NaN" is infinite');
        expect(Infinite({value:NaN, valid:false})).toBe('value "NaN" is not infinite');
    });

});
