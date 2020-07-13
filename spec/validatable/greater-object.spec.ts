import GreaterFromObject from "../../dist/validatable/greater-from-object";
import GreaterString from "../../dist/validatable/string/greater";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let greater = GreaterFromObject<string>({value:2, minimum:1, inclusive:false, message:GreaterString});

    it('set valid', ()=>{

        try {
            // @ts-expect-error
            greater.valid = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set value', ()=>{

        try {
            // @ts-expect-error
            greater.value = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set minimum', ()=>{

        try {
            // @ts-expect-error
            greater.minimum = 3;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

    it('set inclusive', ()=>{

        try {
            // @ts-expect-error
            greater.inclusive = true;

        } catch (e) {

            expect(e).toBeInstanceOf(Error);
        }

    });

});


describe(`value equal to minimum`,function() {

    describe(`inclusive`,function() {

        let greater = GreaterFromObject<string>({value:1, minimum:1, inclusive:true, message:GreaterString});

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(1);
            expect(greater.minimum).toBe(1);
            expect(greater.inclusive).toBeTrue();

        })
    });

    describe(`exclusive`,function() {

        let greater = GreaterFromObject<string>({value:1, minimum:1, inclusive:false, message:GreaterString});

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(1);
            expect(greater.minimum).toBe(1);
            expect(greater.inclusive).toBeFalse();

        })
    });
});

describe(`value greater to minimum`,function() {

    describe(`inclusive`,function() {

        let greater = GreaterFromObject<string>({value:2, minimum:1, inclusive:true, message:GreaterString});

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(2);
            expect(greater.minimum).toBe(1);
            expect(greater.inclusive).toBeTrue();

        })
    });

    describe(`exclusive`,function() {

        let greater = GreaterFromObject<string>({value:2, minimum:1, inclusive:false, message:GreaterString});

        it('validate object', ()=>{

            expect(greater.valid).toBeTrue();
            expect(greater.value).toBe(2);
            expect(greater.minimum).toBe(1);
            expect(greater.inclusive).toBeFalse();

        })
    });
});

describe(`value lower to minimum`,function() {

    describe(`inclusive`,function() {

        let greater = GreaterFromObject<string>({value:-1, minimum:1, inclusive:true, message:GreaterString});

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(-1);
            expect(greater.minimum).toBe(1);
            expect(greater.inclusive).toBeTrue();

        })
    });

    describe(`exclusive`,function() {

        let greater = GreaterFromObject<string>({value:-1, minimum:1, inclusive:false, message:GreaterString});

        it('validate object', ()=>{

            expect(greater.valid).toBeFalse();
            expect(greater.value).toBe(-1);
            expect(greater.minimum).toBe(1);
            expect(greater.inclusive).toBeFalse();

        })
    });
});
