import Integer from "../../../dist/assert/throwable/integer";

it("enable console log", () => {spyOn(console, 'log').and.callThrough()});

describe('infinity',() =>{

    it(`positive`, () => {
        let throwable = Integer(Infinity);
        expect(throwable.message).toBe('value "Infinity" is not integer');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Integer(-Infinity);
        expect(throwable.message).toBe('value "-Infinity" is not integer');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('integer',() =>{

    it(`positive`, () => {
        let throwable = Integer(1);
        expect(throwable.message).toBe('value "1" is not integer');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Integer(-1);
        expect(throwable.message).toBe('value "-1" is not integer');
        expect(throwable).toBeInstanceOf(Error);
    });
});

describe('float',() =>{

    it(`positive`, () => {
        let throwable = Integer(1.1);
        expect(throwable.message).toBe('value "1.1" is not integer');
        expect(throwable).toBeInstanceOf(Error);
    });

    it(`negative`, () => {
        let throwable = Integer(-1.1);
        expect(throwable.message).toBe('value "-1.1" is not integer');
        expect(throwable).toBeInstanceOf(Error);
    });
});

it('nan',() =>{

    let throwable = Integer(NaN);
    expect(throwable.message).toBe('value "NaN" is not integer');
    expect(throwable).toBeInstanceOf(Error);
});
