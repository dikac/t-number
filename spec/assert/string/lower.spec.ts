import Lower from "../../../dist/assert/string/lower";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`integer`,function() {

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Lower(false, 1, 1, false)).toBe('1 must lower than 1');
            expect(Lower(true, 1, 10, false)).toBe('1 is lower than 10');
        });

        it(`negative`, () => {
            expect(Lower(false, -1, -1, false)).toBe('-1 must lower than -1');
            expect(Lower(true, -1, -10, false)).toBe('-1 is lower than -10');
        });

    });

    describe(`inclusive`,function() {

        it(`positive`, () => {
            expect(Lower(false, 1, 1, true)).toBe('1 must lower or equal than 1');
            expect(Lower(true, 1, 10, true)).toBe('1 is lower or equal than 10');
        });

        it(`negative`, () => {
            expect(Lower(false, -1, -1, true)).toBe('-1 must lower or equal than -1');
            expect(Lower(true, -1, -10, true)).toBe('-1 is lower or equal than -10');
        });

    });
});

describe(`float`,function() {

    describe(`inclusive`,function() {

        it(`positive`, () => {
            expect(Lower(false, 1.1, 1.1, true)).toBe('1.1 must lower or equal than 1.1');
            expect(Lower(true, 1.1, 10.1, true)).toBe('1.1 is lower or equal than 10.1');
        });

        it(`negative`, () => {
            expect(Lower(false, -1.2, -1.1, true)).toBe('-1.2 must lower or equal than -1.1');
            expect(Lower(true, -1.2, -10.1, true)).toBe('-1.2 is lower or equal than -10.1');
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Lower(false, 1.1, 1.1, false)).toBe('1.1 must lower than 1.1');
            expect(Lower(true, 1.1, 10.1, false)).toBe('1.1 is lower than 10.1');
        });

        it(`negative`, () => {
            expect(Lower(false, -1.2, -1.1, false)).toBe('-1.2 must lower than -1.1');
            expect(Lower(true, -1.2, -10.1, false)).toBe('-1.2 is lower than -10.1');
        });

    });
});

describe(`infinity`,function() {

    describe(`infinity`,function() {

        it(`inclusive`, () => {
            expect(Lower(false, Infinity, Infinity, true)).toBe('Infinity must lower or equal than Infinity');
            expect(Lower(true, Infinity, Infinity, true)).toBe('Infinity is lower or equal than Infinity');
        });

        it(`negative`, () => {
            expect(Lower(false, -Infinity, -Infinity, true)).toBe('-Infinity must lower or equal than -Infinity');
            expect(Lower(true, -Infinity, -Infinity, true)).toBe('-Infinity is lower or equal than -Infinity');
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Lower(false, Infinity, Infinity, false)).toBe('Infinity must lower than Infinity');
            expect(Lower(true, Infinity, Infinity, false)).toBe('Infinity is lower than Infinity');
        });

        it(`negative`, () => {
            expect(Lower(false, -Infinity, -Infinity, false)).toBe('-Infinity must lower than -Infinity');
            expect(Lower(true, -Infinity, -Infinity, false)).toBe('-Infinity is lower than -Infinity');
        });

    });
});

describe(`nan`, () => {

    it(`inclusive`, () => {
        expect(Lower(false, NaN, NaN, true)).toBe('NaN must lower or equal than NaN');
        expect(Lower(true, NaN, NaN, true)).toBe('NaN is lower or equal than NaN');
    });

    it(`exclusive`, () => {
        expect(Lower(false, NaN, NaN, false)).toBe('NaN must lower than NaN');
        expect(Lower(true, NaN, NaN, false)).toBe('NaN is lower than NaN');
    });
});



