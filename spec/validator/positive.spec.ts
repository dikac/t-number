import Positive from "../../dist/validator/positive";
import PositiveString from "../../dist/validatable/string/positive";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let validator = new Positive<string>( PositiveString);
    let validatable = validator.validate(2);

    it('set valid', ()=>{

        try {
            // @ts-expect-error
            validatable.valid = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set value', ()=>{

        try {
            // @ts-expect-error
            validatable.value = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set minimum', ()=>{

        try {
            // @ts-expect-error
            validatable.maximum = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set inclusive', ()=>{

        try {
            // @ts-expect-error
            validatable.inclusive = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

});


describe(`integer`,function() {

    describe(`positive`,function() {

        let validator = new Positive<string>(PositiveString);
        let validatable = validator.validate(1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(1);
        })
    });

    describe(`positive`,function() {

        let validator = new Positive<string>(PositiveString);
        let validatable = validator.validate(-1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(-1);
        })
    });
});

describe(`float`,function() {

    describe(`positive`,function() {

        let validator = new Positive<string>(PositiveString);
        let validatable = validator.validate(1.1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(1.1);
        })
    });

    describe(`positive`,function() {

        let validator = new Positive<string>(PositiveString);
        let validatable = validator.validate(-1.1);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(-1.1);
        })
    });
});

describe(`infinity`,function() {

    describe(`positive`,function() {

        let validator = new Positive<string>(PositiveString);
        let validatable = validator.validate(Infinity);

        it('validate object', ()=>{

            expect(validatable.valid).toBeTrue();
            expect(validatable.value).toBe(Infinity);
        })
    });

    describe(`positive`,function() {

        let validator = new Positive<string>(PositiveString);
        let validatable = validator.validate(-Infinity);

        it('validate object', ()=>{

            expect(validatable.valid).toBeFalse();
            expect(validatable.value).toBe(-Infinity);
        })
    });
});
