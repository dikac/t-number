import Greater from "../../../dist/assert/throwable/greater";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`integer`,function() {

    describe(`exclusive`,function() {

        it(`positive`, () => {
            let throwable = Greater(1, 10, false);
            expect(throwable.message).toBe('value "1" must greater than "10"');
            expect(throwable).toBeInstanceOf(Error);
        });

        it(`negative`, () => {
            let throwable = Greater(-1, -1, false);
            expect(throwable.message).toBe('value "-1" must greater than "-1"');
            expect(throwable).toBeInstanceOf(Error);
        });

    });

    describe(`inclusive`,function() {

        it(`positive`, () => {
            let throwable = Greater(1, 1, true);
            expect(throwable.message).toBe('value "1" must greater or equal than "1"');
            expect(throwable).toBeInstanceOf(Error);
        });

        it(`negative`, () => {
            let throwable = Greater(-1, -1, true);
            expect(throwable.message).toBe('value "-1" must greater or equal than "-1"');
            expect(throwable).toBeInstanceOf(Error);
        });

    });
});

describe(`float`,function() {

    describe(`inclusive`,function() {

        it(`positive`, () => {
            let throwable = Greater(1.1, 1.1, true);
            expect(throwable.message).toBe('value "1.1" must greater or equal than "1.1"');
            expect(throwable).toBeInstanceOf(Error);
        });

        it(`negative`, () => {
            let throwable = Greater(-1.2, -1.1, true);
            expect(throwable.message).toBe('value "-1.2" must greater or equal than "-1.1"');
            expect(throwable).toBeInstanceOf(Error);
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            let throwable = Greater(1.1, 1.1, false);
            expect(throwable.message).toBe('value "1.1" must greater than "1.1"');
            expect(throwable).toBeInstanceOf(Error);
        });

        it(`negative`, () => {
            let throwable = Greater(-1.2, -1.1, false);
            expect(throwable.message).toBe('value "-1.2" must greater than "-1.1"');
            expect(throwable).toBeInstanceOf(Error);
        });
    });
});

describe(`infinity`,function() {

    describe(`infinity`,function() {

        it(`inclusive`, () => {
            let throwable = Greater(Infinity, Infinity, true);
            expect(throwable.message).toBe('value "Infinity" must greater or equal than "Infinity"');
            expect(throwable).toBeInstanceOf(Error);
        });

        it(`negative`, () => {
            let throwable = Greater(-Infinity, -Infinity, true);
            expect(throwable.message).toBe('value "-Infinity" must greater or equal than "-Infinity"');
            expect(throwable).toBeInstanceOf(Error);
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            let throwable = Greater(Infinity, Infinity, false);
            expect(throwable.message).toBe('value "Infinity" must greater than "Infinity"');
            expect(throwable).toBeInstanceOf(Error);

        });

        it(`negative`, () => {
            let throwable = Greater(-Infinity, -Infinity, false);
            expect(throwable.message).toBe('value "-Infinity" must greater than "-Infinity"');
            expect(throwable).toBeInstanceOf(Error);

        });

    });
});

describe(`nan`, () => {

    it(`inclusive`, () => {
        let throwable = Greater(NaN, NaN, true);
        expect(throwable.message).toBe('value "NaN" must greater or equal than "NaN"');
        expect(throwable).toBeInstanceOf(Error);

    });

    it(`exclusive`, () => {
        let throwable = Greater(NaN, NaN, false);
        expect(throwable.message).toBe('value "NaN" must greater than "NaN"');
        expect(throwable).toBeInstanceOf(Error);

    });
});



