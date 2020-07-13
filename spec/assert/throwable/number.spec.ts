import Number from "../../../dist/assert/throwable/number";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        let throwable = Number(Infinity);
        expect(throwable.message).toBe('value "Infinity" is not number');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Number(-Infinity);
        expect(throwable.message).toBe('value "-Infinity" is not number');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('number',() =>{

    it(`positive`, () => {
        let throwable = Number(1);
        expect(throwable.message).toBe('value "1" is not number');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Number(-1);
        expect(throwable.message).toBe('value "-1" is not number');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('float',() =>{

    it(`positive`, () => {
        let throwable = Number(1.1);
        expect(throwable.message).toBe('value "1.1" is not number');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Number(-1.1);
        expect(throwable.message).toBe('value "-1.1" is not number');
        expect(throwable).toBeInstanceOf(Error);
    });
});

it('nan',() =>{

    let throwable = Number(NaN);
    expect(throwable.message).toBe('value "NaN" is not number');
    expect(throwable).toBeInstanceOf(Error);
});
