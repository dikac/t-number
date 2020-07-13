import Nan from "../../../dist/assert/throwable/nan";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        let throwable = Nan(Infinity);
        expect(throwable.message).toBe('value "Infinity" is not NaN');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Nan(-Infinity);
        expect(throwable.message).toBe('value "-Infinity" is not NaN');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('nan',() =>{

    it(`positive`, () => {
        let throwable = Nan(1);
        expect(throwable.message).toBe('value "1" is not NaN');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Nan(-1);
        expect(throwable.message).toBe('value "-1" is not NaN');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('float',() =>{

    it(`positive`, () => {
        let throwable = Nan(1.1);
        expect(throwable.message).toBe('value "1.1" is not NaN');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Nan(-1.1);
        expect(throwable.message).toBe('value "-1.1" is not NaN');
        expect(throwable).toBeInstanceOf(Error);
    });
});

it('nan',() =>{

    let throwable = Nan(NaN);
    expect(throwable.message).toBe('value "NaN" is not NaN');
    expect(throwable).toBeInstanceOf(Error);
});
