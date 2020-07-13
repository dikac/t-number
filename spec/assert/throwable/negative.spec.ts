import Negative from "../../../dist/assert/throwable/negative";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        let throwable = Negative(Infinity);
        expect(throwable.message).toBe('value "Infinity" is not negative');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Negative(-Infinity);
        expect(throwable.message).toBe('value "-Infinity" is not negative');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('negative',() =>{

    it(`positive`, () => {
        let throwable = Negative(1);
        expect(throwable.message).toBe('value "1" is not negative');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Negative(-1);
        expect(throwable.message).toBe('value "-1" is not negative');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('float',() =>{

    it(`positive`, () => {
        let throwable = Negative(1.1);
        expect(throwable.message).toBe('value "1.1" is not negative');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Negative(-1.1);
        expect(throwable.message).toBe('value "-1.1" is not negative');
        expect(throwable).toBeInstanceOf(Error);
    });
});

it('nan',() =>{

    let throwable = Negative(NaN);
    expect(throwable.message).toBe('value "NaN" is not negative');
    expect(throwable).toBeInstanceOf(Error);
});
