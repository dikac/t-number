import Greater from "../../../dist/validatable/string/greater";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`integer`,function() {

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Greater({value:1, minimum:1, inclusive:false, valid:false})).toBe('1 must greater than 1');
            expect(Greater({value:1, minimum:10, inclusive:false, valid:true})).toBe('1 is greater than 10');
        });

        it(`negative`, () => {
            expect(Greater({value:-1, minimum:-1, inclusive:false, valid:false})).toBe('-1 must greater than -1');
            expect(Greater({value:-1, minimum:-10, inclusive:false, valid:true})).toBe('-1 is greater than -10');
        });

    });

    describe(`inclusive`,function() {

        it(`positive`, () => {
            expect(Greater({value:1, minimum:1, inclusive:true, valid:false})).toBe('1 must greater or equal than 1');
            expect(Greater({value:1, minimum:10, inclusive:true, valid:true})).toBe('1 is greater or equal than 10');
        });

        it(`negative`, () => {
            expect(Greater({value:-1, minimum:-1, inclusive:true, valid:false})).toBe('-1 must greater or equal than -1');
            expect(Greater({value:-1, minimum:-10, inclusive:true, valid:true})).toBe('-1 is greater or equal than -10');
        });

    });
});

describe(`float`,function() {

    describe(`inclusive`,function() {

        it(`positive`, () => {
            expect(Greater({value:1.1, minimum:1.1, inclusive:true, valid:false})).toBe('1.1 must greater or equal than 1.1');
            expect(Greater({value:1.1, minimum:10.1, inclusive:true, valid:true})).toBe('1.1 is greater or equal than 10.1');
        });

        it(`negative`, () => {
            expect(Greater({value:-1.2, minimum:-1.1, inclusive:true, valid:false})).toBe('-1.2 must greater or equal than -1.1');
            expect(Greater({value:-1.2, minimum:-10.1, inclusive:true, valid:true})).toBe('-1.2 is greater or equal than -10.1');
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Greater({value:1.1, minimum:1.1, inclusive:false, valid:false})).toBe('1.1 must greater than 1.1');
            expect(Greater({value:1.1, minimum:10.1, inclusive:false, valid:true})).toBe('1.1 is greater than 10.1');
        });

        it(`negative`, () => {
            expect(Greater({value:-1.2, minimum:-1.1, inclusive:false, valid:false})).toBe('-1.2 must greater than -1.1');
            expect(Greater({value:-1.2, minimum:-10.1, inclusive:false, valid:true})).toBe('-1.2 is greater than -10.1');
        });

    });
});

describe(`infinity`,function() {

    describe(`infinity`,function() {

        it(`inclusive`, () => {
            expect(Greater({value:Infinity, minimum:Infinity, inclusive:true, valid:false})).toBe('Infinity must greater or equal than Infinity');
            expect(Greater({value:Infinity, minimum:Infinity, inclusive:true, valid:true})).toBe('Infinity is greater or equal than Infinity');
        });

        it(`negative`, () => {
            expect(Greater({value:-Infinity, minimum:-Infinity, inclusive:true, valid:false})).toBe('-Infinity must greater or equal than -Infinity');
            expect(Greater({value:-Infinity, minimum:-Infinity, inclusive:true, valid:true})).toBe('-Infinity is greater or equal than -Infinity');
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Greater({value:Infinity, minimum:Infinity, inclusive:false, valid:false})).toBe('Infinity must greater than Infinity');
            expect(Greater({value:Infinity, minimum:Infinity, inclusive:false, valid:true})).toBe('Infinity is greater than Infinity');
        });

        it(`negative`, () => {
            expect(Greater({value:-Infinity, minimum:-Infinity, inclusive:false, valid:false})).toBe('-Infinity must greater than -Infinity');
            expect(Greater({value:-Infinity, minimum:-Infinity, inclusive:false, valid:true})).toBe('-Infinity is greater than -Infinity');
        });

    });
});

describe(`nan`, () => {

    it(`inclusive`, () => {
        expect(Greater({value:NaN, minimum:NaN, inclusive:true, valid:false})).toBe('NaN must greater or equal than NaN');
        expect(Greater({value:NaN, minimum:NaN, inclusive:true, valid:true})).toBe('NaN is greater or equal than NaN');
    });

    it(`exclusive`, () => {
        expect(Greater({value:NaN, minimum:NaN, inclusive:false, valid:false})).toBe('NaN must greater than NaN');
        expect(Greater({value:NaN, minimum:NaN, inclusive:false, valid:true})).toBe('NaN is greater than NaN');
    });
});



