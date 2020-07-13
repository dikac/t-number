import Infinite from "../../../dist/assert/throwable/infinite";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        let throwable = Infinite(Infinity);
        expect(throwable.message).toBe('value "Infinity" is not infinite');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Infinite(-Infinity);
        expect(throwable.message).toBe('value "-Infinity" is not infinite');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        let throwable = Infinite(1);
        expect(throwable.message).toBe('value "1" is not infinite');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
       let throwable = Infinite(-1);
        expect(throwable.message).toBe('value "-1" is not infinite');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('float',() =>{

    it(`positive`, () => {
        let throwable = Infinite(1.1);
        expect(throwable.message).toBe('value "1.1" is not infinite');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Infinite(-1.1);
        expect(throwable.message).toBe('value "-1.1" is not infinite');
        expect(throwable).toBeInstanceOf(Error);
    });
});

it(`nan`, () => {
    let throwable = Infinite(NaN);
    expect(throwable.message).toBe('value "NaN" is not infinite');
    expect(throwable).toBeInstanceOf(Error);
});


