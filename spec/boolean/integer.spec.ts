import Integer from "../../dist/boolean/integer";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`valid`,function() {

    for(let number of [1,2,3,1.0]) {

        it(`for ${number}`, () => expect(Integer(number)).toBeTrue());
    }

});

describe(`invalid`,function() {

    for(let number of [1.1,2.01,3.1,1.1]) {

        it(`for ${number}`, () => expect(Integer(number)).toBeFalse());
    }
});



