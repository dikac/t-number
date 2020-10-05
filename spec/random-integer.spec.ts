import RandomInteger from "../dist/random-integer";
import RandomIntegerFromObject from "../dist/random-integer-from-object";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`iterative`,function() {

    for(let i = 1; i <= 100; i++) {

        describe(`inclusive`,function() {

            it(`result 0 - ${i}`, () => {
                {
                    let random = RandomInteger(0, i);
                    expect(random).toBeLessThanOrEqual(i);
                    expect(random).toBeGreaterThanOrEqual(0);
                }

                {
                    let random = RandomIntegerFromObject({minimum:0, maximum:i, inclusive : true});
                    expect(random).toBeLessThanOrEqual(i);
                    expect(random).toBeGreaterThanOrEqual(0);
                }

            });

            it(`result 50 - ${i+50}`, () => {
                {
                    let random = RandomInteger(50, i+50);
                    expect(random).toBeLessThanOrEqual(i + 50);
                    expect(random).toBeGreaterThanOrEqual(50);
                }

                {
                    let random = RandomIntegerFromObject({minimum:50, maximum: i + 50});
                    expect(random).toBeLessThanOrEqual(i + 50);
                    expect(random).toBeGreaterThanOrEqual(50);
                }
            });
        });

        describe(`exclusive`,function() {

            let val1 = i + 2;

            it(`result 0 - ${val1}`, () => {
                {
                    let random = RandomInteger(0, val1, false);
                    expect(random).toBeLessThan(val1);
                    expect(random).toBeGreaterThan(0);
                }

                {
                    let random = RandomIntegerFromObject({minimum: 0, maximum: val1, inclusive: false});
                    expect(random).toBeLessThan(val1);
                    expect(random).toBeGreaterThan(0);
                }
            });

            let val2 = i + 52;
            it(`result 50 - ${val2}`, () => {
                {
                    let random = RandomInteger(50, val2, false);
                    expect(random).toBeLessThan(val2);
                    expect(random).toBeGreaterThan(50);
                }

                {
                    let random = RandomIntegerFromObject({minimum: 50, maximum: val2, inclusive: false});
                    expect(random).toBeLessThan(val2);
                    expect(random).toBeGreaterThan(50);
                }
            });
        });
    }
});


describe(`minimum & maximum equal`,function() {

    it(`inclusive`,function() {

        {
            let random = RandomInteger(1, 1, true);
            expect(random).toBe(1);
        }
        {
            let random = RandomIntegerFromObject({minimum: 1, maximum: 1, inclusive: true});
            expect(random).toBe(1);
        }

    });

    it(`exclusive`,function() {

        try {
            RandomInteger(1, 1, false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

        try {
            RandomIntegerFromObject({minimum: 1, maximum: 1, inclusive: false});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


describe(`minimum greater than maximum`,function() {

    it(`inclusive`,function() {

        try {
            RandomInteger(1, 0, true);
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

        try {
            RandomIntegerFromObject({minimum: 1, maximum: 0, inclusive: true});
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

        try {
            RandomIntegerFromObject({minimum: 1, maximum: 0});
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`exclusive`,function() {

        try {
            RandomInteger(1, 0, false);
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

        try {
            RandomIntegerFromObject({minimum: 1, maximum: 0, inclusive: false});
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });
});


