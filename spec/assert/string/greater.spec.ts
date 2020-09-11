import Greater from "../../../dist/assert/string/greater";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`exclusive`,function() {

    it(`valid`, () => {
        expect(Greater(true, 1, 10, false)).toBe('number is greater than "10".');
    });

    it(`invalid`, () => {
        expect(Greater(false, -1, -10, false)).toBe('number must greater than "-10", actual "-1".');
    });

});

describe(`inclusive`,function() {

    it(`valid`, () => {
        expect(Greater(true, 1, 1, true)).toBe('number is greater or equal than "1".');
    });

    it(`invalid`, () => {
        expect(Greater(false, -1, -1, true)).toBe('number must greater or equal than "-1", actual "-1".');
    });

});
