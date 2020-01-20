import RandomInteger from "../dist/random-integer";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

for(let i = 0; i <= 100; i++) {

    describe(`result undefined - ${i}`,function() {

        let random = RandomInteger(i);
        it(`less than max`, () => expect(random <= i).toBeTrue());
        it(`more than min`, () => expect(random >= 0).toBeTrue());
    });

    describe(`result 0 - ${i}`,function() {

        let random = RandomInteger(0, i);
        it(`less than max`, () => expect(random <= i).toBeTrue());
        it(`more than min`, () => expect(random >= 0).toBeTrue());
    });

    describe(`result 50 - ${i+50}`,function() {

        let random = RandomInteger(50, i+50);
        it(`less than max`, () => expect(random <= i + 50).toBeTrue());
        it(`more than min`, () => expect(random >= 50).toBeTrue());
    });
}


