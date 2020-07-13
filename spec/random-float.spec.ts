import RandomFloat from "../dist/random-float";
import RandomFloatFromObject from "../dist/random-float-from-object";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`iterative`,function() {

    for(let i = 0; i <= 100; i++) {

        describe(`inclusive`,function() {

            it(`result 0 - ${i}`, () => {

                {
                    let random = RandomFloat(0, i);
                    expect(random).toBeLessThanOrEqual(i);
                    expect(random).toBeGreaterThanOrEqual(0);
                }
                {
                    let random = RandomFloatFromObject({minimum:0, maximum:i});
                    expect(random).toBeLessThanOrEqual(i);
                    expect(random).toBeGreaterThanOrEqual(0);
                }

            });

            it(`result 50 - ${i+50}`, () => {

                {
                    let random = RandomFloat(50, i + 50);
                    expect(random).toBeLessThanOrEqual(i + 50);
                    expect(random).toBeGreaterThanOrEqual(50);
                }
                {
                    let random = RandomFloatFromObject({minimum:50, maximum:i + 50, inclusive : true});
                    expect(random).toBeLessThanOrEqual(i + 50);
                    expect(random).toBeGreaterThanOrEqual(50);
                }
            });
        });

        describe(`exclusive`,function() {

            let val1 = i + 1;

            it(`result 0 - ${val1}`, () => {

                {
                    let random = RandomFloat(0, val1, false);
                    expect(random).toBeLessThan(val1);
                    expect(random).toBeGreaterThan(0);
                }

                {
                    let random = RandomFloatFromObject({minimum:0, maximum:val1, inclusive : false});
                    expect(random).toBeLessThan(val1);
                    expect(random).toBeGreaterThan(0);
                }

            });

            let val2 = i + 51;
            it(`result 50 - ${val2}`, () => {

                {
                    let random = RandomFloat(50, val2, false);
                    expect(random).toBeLessThan(val2);
                    expect(random).toBeGreaterThan(50);
                }
                {
                    let random = RandomFloatFromObject({minimum:50, maximum:val2, inclusive : false});
                    expect(random).toBeLessThan(val2);
                    expect(random).toBeGreaterThan(50);
                }

            });
        });
    }
});


describe(`minimum & maximum equal`,function() {

    it(`inclusive`,function() {

        let random = RandomFloat(1, 1, true);
        expect(random).toBe(1);

    });

    it(`inclusive object`,function() {

        let random = RandomFloatFromObject({minimum:1, maximum:1, inclusive : true});
        expect(random).toBe(1);

    });

    it(`exclusive`,function() {

        try {
            RandomFloat(1, 1, false);
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });

    it(`exclusive object`,function() {

        try {
            RandomFloatFromObject({minimum:1, maximum:1, inclusive : false});
            fail('exception should thrown');
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }

    });
});


describe(`minimum greater than maximum`,function() {

    it(`inclusive`,function() {
        try {
            RandomFloat(1, 0, true);
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`inclusive object`,function() {
        try {
            RandomFloatFromObject({minimum:1, maximum:0, inclusive : true});
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`exclusive`,function() {
        try {
            RandomFloat(1, 0, false);
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

    it(`exclusive object`,function() {
        try {
            RandomFloatFromObject({minimum:1, maximum:0, inclusive : false});
            fail('exception should thrown');
        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }
    });

});
