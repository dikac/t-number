import Greater from "../../../dist/boolean/string/greater";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`integer`,function() {

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Greater(false, 1, 1, false)).toBe('value "1" must greater than "1"');
            expect(Greater(true, 1, 10, false)).toBe('value "1" is greater than "10"');
        });

        it(`negative`, () => {
            expect(Greater(false, -1, -1, false)).toBe('value "-1" must greater than "-1"');
            expect(Greater(true, -1, -10, false)).toBe('value "-1" is greater than "-10"');
        });

    });

    describe(`inclusive`,function() {

        it(`positive`, () => {
            expect(Greater(false, 1, 1, true)).toBe('value "1" must greater or equal than "1"');
            expect(Greater(true, 1, 10, true)).toBe('value "1" is greater or equal than "10"');
        });

        it(`negative`, () => {
            expect(Greater(false, -1, -1, true)).toBe('value "-1" must greater or equal than "-1"');
            expect(Greater(true, -1, -10, true)).toBe('value "-1" is greater or equal than "-10"');
        });

    });
});

describe(`float`,function() {

    describe(`inclusive`,function() {

        it(`positive`, () => {
            expect(Greater(false, 1.1, 1.1, true)).toBe('value "1.1" must greater or equal than "1.1"');
            expect(Greater(true, 1.1, 10.1, true)).toBe('value "1.1" is greater or equal than "10.1"');
        });

        it(`negative`, () => {
            expect(Greater(false, -1.2, -1.1, true)).toBe('value "-1.2" must greater or equal than "-1.1"');
            expect(Greater(true, -1.2, -10.1, true)).toBe('value "-1.2" is greater or equal than "-10.1"');
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Greater(false, 1.1, 1.1, false)).toBe('value "1.1" must greater than "1.1"');
            expect(Greater(true, 1.1, 10.1, false)).toBe('value "1.1" is greater than "10.1"');
        });

        it(`negative`, () => {
            expect(Greater(false, -1.2, -1.1, false)).toBe('value "-1.2" must greater than "-1.1"');
            expect(Greater(true, -1.2, -10.1, false)).toBe('value "-1.2" is greater than "-10.1"');
        });

    });
});

describe(`infinity`,function() {

    describe(`infinity`,function() {

        it(`inclusive`, () => {
            expect(Greater(false, Infinity, Infinity, true)).toBe('value "Infinity" must greater or equal than "Infinity"');
            expect(Greater(true, Infinity, Infinity, true)).toBe('value "Infinity" is greater or equal than "Infinity"');
        });

        it(`negative`, () => {
            expect(Greater(false, -Infinity, -Infinity, true)).toBe('value "-Infinity" must greater or equal than "-Infinity"');
            expect(Greater(true, -Infinity, -Infinity, true)).toBe('value "-Infinity" is greater or equal than "-Infinity"');
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Greater(false, Infinity, Infinity, false)).toBe('value "Infinity" must greater than "Infinity"');
            expect(Greater(true, Infinity, Infinity, false)).toBe('value "Infinity" is greater than "Infinity"');
        });

        it(`negative`, () => {
            expect(Greater(false, -Infinity, -Infinity, false)).toBe('value "-Infinity" must greater than "-Infinity"');
            expect(Greater(true, -Infinity, -Infinity, false)).toBe('value "-Infinity" is greater than "-Infinity"');
        });

    });
});

describe(`nan`, () => {

    it(`inclusive`, () => {
        expect(Greater(false, NaN, NaN, true)).toBe('value "NaN" must greater or equal than "NaN"');
        expect(Greater(true, NaN, NaN, true)).toBe('value "NaN" is greater or equal than "NaN"');
    });

    it(`exclusive`, () => {
        expect(Greater(false, NaN, NaN, false)).toBe('value "NaN" must greater than "NaN"');
        expect(Greater(true, NaN, NaN, false)).toBe('value "NaN" is greater than "NaN"');
    });
});



