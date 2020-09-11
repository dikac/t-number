import lower from "../../../dist/assert/string/lower";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`exclusive`,function() {

    it(`valid`, () => {
        expect(lower(true, 1, 10, false)).toBe('number is lower than "10".');
    });

    it(`invalid`, () => {
        expect(lower(false, -1, -10, false)).toBe('number must lower than "-10", actual "-1".');
    });

});

describe(`inclusive`,function() {

    it(`valid`, () => {
        expect(lower(true, 1, 1, true)).toBe('number is lower or equal than "1".');
    });

    it(`invalid`, () => {
        expect(lower(false, -1, -1, true)).toBe('number must lower or equal than "-1", actual "-1".');
    });

});

