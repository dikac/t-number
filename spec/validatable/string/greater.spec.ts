import Greater from "../../../dist/validatable/string/greater";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`exclusive`,function() {

    it(`valid`, () => {
        expect(Greater({valid:true, value:1, minimum:10, inclusive:false})).toBe('value is greater than "10".');
    });

    it(`invalid`, () => {
        expect(Greater({valid:false, value:-1,minimum:-10, inclusive:false})).toBe('value must greater than "-10", actual "-1".');
    });

});

describe(`inclusive`,function() {

    it(`valid`, () => {
        expect(Greater({valid:true, value:1, minimum:1, inclusive:true})).toBe('value is greater or equal than "1".');
    });

    it(`invalid`, () => {
        expect(Greater({valid:false, value:-1,minimum:-1, inclusive:true})).toBe('value must greater or equal than "-1", actual "-1".');
    });

});

