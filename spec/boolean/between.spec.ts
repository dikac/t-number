import Integer from "../../dist/boolean/integer";
import Between from "../../dist/boolean/beetween";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`valid`,function() {

    it(`valid`, () => expect(Between(1, 0,1)).toBeTrue());
    it(`valid`, () => expect(Between(0, 0,1)).toBeTrue());

});

describe(`invalid`,function() {

    it(`valid`, () => expect(Between(-1, 0,1)).toBeFalse());
    it(`valid`, () => expect(Between(2, 0,1)).toBeFalse());
});



