import Lower from "../../../dist/assert/string/lower";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`integer`,function() {

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Lower(1, 1, false, false)).toBe('value "1" must lower than "1"');
            expect(Lower(1, 10, false, true)).toBe('value "1" is lower than "10"');
        });

        it(`negative`, () => {
            expect(Lower(-1, -1, false, false)).toBe('value "-1" must lower than "-1"');
            expect(Lower(-1, -10, false, true)).toBe('value "-1" is lower than "-10"');
        });

    });

    describe(`inclusive`,function() {

        it(`positive`, () => {
            expect(Lower(1, 1, true, false)).toBe('value "1" must lower or equal than "1"');
            expect(Lower(1, 10, true, true)).toBe('value "1" is lower or equal than "10"');
        });

        it(`negative`, () => {
            expect(Lower(-1, -1, true, false)).toBe('value "-1" must lower or equal than "-1"');
            expect(Lower(-1, -10, true, true)).toBe('value "-1" is lower or equal than "-10"');
        });

    });
});

describe(`float`,function() {

    describe(`inclusive`,function() {

        it(`positive`, () => {
            expect(Lower(1.1, 1.1, true, false)).toBe('value "1.1" must lower or equal than "1.1"');
            expect(Lower(1.1, 10.1, true, true)).toBe('value "1.1" is lower or equal than "10.1"');
        });

        it(`negative`, () => {
            expect(Lower(-1.2, -1.1, true, false)).toBe('value "-1.2" must lower or equal than "-1.1"');
            expect(Lower(-1.2, -10.1, true, true)).toBe('value "-1.2" is lower or equal than "-10.1"');
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Lower(1.1, 1.1, false, false)).toBe('value "1.1" must lower than "1.1"');
            expect(Lower(1.1, 10.1, false, true)).toBe('value "1.1" is lower than "10.1"');
        });

        it(`negative`, () => {
            expect(Lower(-1.2, -1.1, false, false)).toBe('value "-1.2" must lower than "-1.1"');
            expect(Lower(-1.2, -10.1, false, true)).toBe('value "-1.2" is lower than "-10.1"');
        });

    });
});

describe(`infinity`,function() {

    describe(`infinity`,function() {

        it(`inclusive`, () => {
            expect(Lower(Infinity, Infinity, true, false)).toBe('value "Infinity" must lower or equal than "Infinity"');
            expect(Lower(Infinity, Infinity, true, true)).toBe('value "Infinity" is lower or equal than "Infinity"');
        });

        it(`negative`, () => {
            expect(Lower(-Infinity, -Infinity, true, false)).toBe('value "-Infinity" must lower or equal than "-Infinity"');
            expect(Lower(-Infinity, -Infinity, true, true)).toBe('value "-Infinity" is lower or equal than "-Infinity"');
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Lower(Infinity, Infinity, false, false)).toBe('value "Infinity" must lower than "Infinity"');
            expect(Lower(Infinity, Infinity, false, true)).toBe('value "Infinity" is lower than "Infinity"');
        });

        it(`negative`, () => {
            expect(Lower(-Infinity, -Infinity, false, false)).toBe('value "-Infinity" must lower than "-Infinity"');
            expect(Lower(-Infinity, -Infinity, false, true)).toBe('value "-Infinity" is lower than "-Infinity"');
        });

    });
});

describe(`nan`, () => {

    it(`inclusive`, () => {
        expect(Lower(NaN, NaN, true, false)).toBe('value "NaN" must lower or equal than "NaN"');
        expect(Lower(NaN, NaN, true, true)).toBe('value "NaN" is lower or equal than "NaN"');
    });

    it(`exclusive`, () => {
        expect(Lower(NaN, NaN, false, false)).toBe('value "NaN" must lower than "NaN"');
        expect(Lower(NaN, NaN, false, true)).toBe('value "NaN" is lower than "NaN"');
    });
});



