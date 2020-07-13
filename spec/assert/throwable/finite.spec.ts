import Finite from "../../../dist/assert/throwable/finite";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        let throwable = Finite(Infinity);
        expect(throwable.message).toBe('value "Infinity" is not finite');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Finite(-Infinity);
        expect(throwable.message).toBe('value "-Infinity" is not finite');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('integer',() =>{

    it(`positive`, () => {
       let throwable = Finite(1);
        expect(throwable.message).toBe('value "1" is not finite');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
       let throwable = Finite(-1);
        expect(throwable.message).toBe('value "-1" is not finite');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('float',() =>{

    it(`positive`, () => {
        let throwable = Finite(1.1);
        expect(throwable.message).toBe('value "1.1" is not finite');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Finite(-1.1);
        expect(throwable.message).toBe('value "-1.1" is not finite');
        expect(throwable).toBeInstanceOf(Error);
    });
});

it('nan',() =>{

    let throwable = Finite(NaN);
    expect(throwable.message).toBe('value "NaN" is not finite');
    expect(throwable).toBeInstanceOf(Error);
});
