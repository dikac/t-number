import Positive from "../../../dist/assert/throwable/positive";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        let throwable = Positive(Infinity);
        expect(throwable.message).toBe('value "Infinity" is not positive');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`positive`, () => {
        let throwable = Positive(-Infinity);
        expect(throwable.message).toBe('value "-Infinity" is not positive');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        let throwable = Positive(1);
        expect(throwable.message).toBe('value "1" is not positive');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Positive(-1);
        expect(throwable.message).toBe('value "-1" is not positive');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('float',() =>{

    it(`positive`, () => {
        let throwable = Positive(1.1);
        expect(throwable.message).toBe('value "1.1" is not positive');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Positive(-1.1);
        expect(throwable.message).toBe('value "-1.1" is not positive');
        expect(throwable).toBeInstanceOf(Error);
    });
});

it('nan',() =>{

    let throwable = Positive(NaN);
    expect(throwable.message).toBe('value "NaN" is not positive');
    expect(throwable).toBeInstanceOf(Error);
});
