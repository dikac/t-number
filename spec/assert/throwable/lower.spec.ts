import Lower from "../../../dist/assert/throwable/lower";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`integer`,function() {

    describe(`exclusive`,function() {

        it(`positive`, () => {
            let throwable = Lower(1, 10, false);
            expect(throwable.message).toBe('value "1" must lower than "10"');
            expect(throwable).toBeInstanceOf(Error);
        });

        it(`negative`, () => {
            let throwable = Lower(-1, -1, false);
            expect(throwable.message).toBe('value "-1" must lower than "-1"');
            expect(throwable).toBeInstanceOf(Error);
        });

    });

    describe(`inclusive`,function() {

        it(`positive`, () => {
            let throwable = Lower(1, 1, true);
            expect(throwable.message).toBe('value "1" must lower or equal than "1"');
            expect(throwable).toBeInstanceOf(Error);
        });

        it(`negative`, () => {
            let throwable = Lower(-1, -1, true);
            expect(throwable.message).toBe('value "-1" must lower or equal than "-1"');
            expect(throwable).toBeInstanceOf(Error);
        });

    });
});

describe(`float`,function() {

    describe(`inclusive`,function() {

        it(`positive`, () => {
            let throwable = Lower(1.1, 1.1, true);
            expect(throwable.message).toBe('value "1.1" must lower or equal than "1.1"');
            expect(throwable).toBeInstanceOf(Error);
        });

        it(`negative`, () => {
            let throwable = Lower(-1.2, -1.1, true);
            expect(throwable.message).toBe('value "-1.2" must lower or equal than "-1.1"');
            expect(throwable).toBeInstanceOf(Error);
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            let throwable = Lower(1.1, 1.1, false);
            expect(throwable.message).toBe('value "1.1" must lower than "1.1"');
            expect(throwable).toBeInstanceOf(Error);
        });

        it(`negative`, () => {
            let throwable = Lower(-1.2, -1.1, false);
            expect(throwable.message).toBe('value "-1.2" must lower than "-1.1"');
            expect(throwable).toBeInstanceOf(Error);
        });
    });
});

describe(`infinity`,function() {

    describe(`infinity`,function() {

        it(`inclusive`, () => {
            let throwable = Lower(Infinity, Infinity, true);
            expect(throwable.message).toBe('value "Infinity" must lower or equal than "Infinity"');
            expect(throwable).toBeInstanceOf(Error);
        });

        it(`negative`, () => {
            let throwable = Lower(-Infinity, -Infinity, true);
            expect(throwable.message).toBe('value "-Infinity" must lower or equal than "-Infinity"');
            expect(throwable).toBeInstanceOf(Error);
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            let throwable = Lower(Infinity, Infinity, false);
            expect(throwable.message).toBe('value "Infinity" must lower than "Infinity"');
            expect(throwable).toBeInstanceOf(Error);

        });

        it(`negative`, () => {
            let throwable = Lower(-Infinity, -Infinity, false);
            expect(throwable.message).toBe('value "-Infinity" must lower than "-Infinity"');
            expect(throwable).toBeInstanceOf(Error);

        });

    });
});

describe(`nan`, () => {

    it(`inclusive`, () => {
        let throwable = Lower(NaN, NaN, true);
        expect(throwable.message).toBe('value "NaN" must lower or equal than "NaN"');
        expect(throwable).toBeInstanceOf(Error);

    });

    it(`exclusive`, () => {
        let throwable = Lower(NaN, NaN, false);
        expect(throwable.message).toBe('value "NaN" must lower than "NaN"');
        expect(throwable).toBeInstanceOf(Error);

    });
});



