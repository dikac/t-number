import Nan from "../../dist/boolean/nan";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`valid`,function() {

    it(`valid`, () => expect(Nan(NaN)).toBeTrue());

});

describe(`invalid`,function() {

    it(`integer`, () => expect(Nan(1)).toBeFalse());
    it(`float`, () => expect(Nan(1.1)).toBeFalse());
    it(`infinite`, () => expect(Nan(Infinity)).toBeFalse());
});



