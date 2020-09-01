import Lower from "../../../dist/validatable/string/lower";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`integer`,function() {

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Lower({value:1, maximum:1, inclusive: false, valid:false})).toBe('1 must lower than 1');
            expect(Lower({value:1, maximum:10, inclusive: false, valid:true})).toBe('1 is lower than 10');
        });

        it(`negative`, () => {
            expect(Lower({value:-1, maximum:-1, inclusive:false, valid:false})).toBe('-1 must lower than -1');
            expect(Lower({value:-1, maximum:-10, inclusive:false, valid:true})).toBe('-1 is lower than -10');
        });

    });

    describe(`inclusive`,function() {

        it(`positive`, () => {
            expect(Lower({value:1, maximum:1, inclusive: true, valid:false})).toBe('1 must lower or equal than 1');
            expect(Lower({value:1, maximum:10, inclusive: true, valid:true})).toBe('1 is lower or equal than 10');
        });

        it(`negative`, () => {
            expect(Lower({value:-1, maximum:-1, inclusive:true, valid:false})).toBe('-1 must lower or equal than -1');
            expect(Lower({value:-1, maximum:-10, inclusive:true, valid:true})).toBe('-1 is lower or equal than -10');
        });

    });
});

describe(`float`,function() {

    describe(`inclusive`,function() {

        it(`positive`, () => {
            expect(Lower({value:1.1, maximum:1.1, inclusive:true, valid:false})).toBe('1.1 must lower or equal than 1.1');
            expect(Lower({value:1.1, maximum:10.1, inclusive:true, valid:true})).toBe('1.1 is lower or equal than 10.1');
        });

        it(`negative`, () => {
            expect(Lower({value:-1.2, maximum:-1.1, inclusive:true, valid:false})).toBe('-1.2 must lower or equal than -1.1');
            expect(Lower({value:-1.2, maximum:-10.1, inclusive:true, valid:true})).toBe('-1.2 is lower or equal than -10.1');
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Lower({value:1.1, maximum:1.1, inclusive:false, valid:false})).toBe('1.1 must lower than 1.1');
            expect(Lower({value:1.1, maximum:10.1, inclusive:false, valid:true})).toBe('1.1 is lower than 10.1');
        });

        it(`negative`, () => {
            expect(Lower({value:-1.2, maximum:-1.1, inclusive:false, valid:false})).toBe('-1.2 must lower than -1.1');
            expect(Lower({value:-1.2, maximum:-10.1, inclusive:false, valid:true})).toBe('-1.2 is lower than -10.1');
        });

    });
});

describe(`infinity`,function() {

    describe(`infinity`,function() {

        it(`inclusive`, () => {
            expect(Lower({value:Infinity, maximum:Infinity, inclusive:true, valid:false})).toBe('Infinity must lower or equal than Infinity');
            expect(Lower({value:Infinity, maximum:Infinity, inclusive:true, valid:true})).toBe('Infinity is lower or equal than Infinity');
        });

        it(`negative`, () => {
            expect(Lower({value:-Infinity, maximum:-Infinity, inclusive:true, valid:false})).toBe('-Infinity must lower or equal than -Infinity');
            expect(Lower({value:-Infinity, maximum:-Infinity, inclusive:true, valid:true})).toBe('-Infinity is lower or equal than -Infinity');
        });

    });

    describe(`exclusive`,function() {

        it(`positive`, () => {
            expect(Lower({value:Infinity, maximum:Infinity, inclusive:false, valid:false})).toBe('Infinity must lower than Infinity');
            expect(Lower({value:Infinity, maximum:Infinity, inclusive:false, valid:true})).toBe('Infinity is lower than Infinity');
        });

        it(`negative`, () => {
            expect(Lower({value:-Infinity, maximum:-Infinity, inclusive:false, valid:false})).toBe('-Infinity must lower than -Infinity');
            expect(Lower({value:-Infinity, maximum:-Infinity, inclusive:false, valid:true})).toBe('-Infinity is lower than -Infinity');
        });

    });
});

describe(`nan`, () => {

    it(`inclusive`, () => {
        expect(Lower({value:NaN, maximum:NaN, inclusive:true, valid:false})).toBe('NaN must lower or equal than NaN');
        expect(Lower({value:NaN, maximum:NaN, inclusive:true, valid:true})).toBe('NaN is lower or equal than NaN');
    });

    it(`exclusive`, () => {
        expect(Lower({value:NaN, maximum:NaN, inclusive:false, valid:false})).toBe('NaN must lower than NaN');
        expect(Lower({value:NaN, maximum:NaN, inclusive:false, valid:true})).toBe('NaN is lower than NaN');
    });
});



