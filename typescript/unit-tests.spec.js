var describe;
var it;
var expect;
describe('1st tests', function () {
    it('true is true', function () { return expect(true).toEqual(true); });
    it('null is not the same thing as undefined', function () { return expect(null).not.toEqual(undefined); });
    it('template strings allow ${variables}', function () {
        var hola = 'hi!';
        expect("hola, " + hola).toEqual('hola, hi!');
    });
    it('let are equals to var with block support', function () {
        {
            var hola = 'hi!';
        }
        expect(hola).toEqual('hi!');
        {
            var adios = 'hi!';
        }
        // expect(adios).toEqual('hi!');
    });
    it('fat arrows have implicit returns', function () {
        var fun = function (x) { return x + 1; };
        var add = function (x) {
            return x + 1;
        };
        expect(fun(2)).toEqual(add(2));
    });
    it('for of is great for iterables', function () {
        var iterable = [3, 5, 7];
        iterable['foo'] = "hello";
        var for_props = 0;
        var for_of_props = 0;
        for (var prop in iterable) {
            for_props++;
        }
        for (var _i = 0, iterable_1 = iterable; _i < iterable_1.length; _i++) {
            var prop = iterable_1[_i];
            for_of_props++;
        }
        expect(for_props).toEqual(4);
        expect(for_of_props).toEqual(3);
    });
    it('we have sets now', function () {
        var example = new Set([2, 2, 3]);
        expect(example.size).toEqual(2);
    });
    it('short syntax for objs', function () {
        function createMonster(name, power) {
            return { name: name, power: power };
        }
        expect(createMonster('Soraya', 1000)).toEqual({ name: 'Soraya', power: 1000 });
    });
    it('rest syntax', function () {
        function createMonster(name, power) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            return rest;
        }
        expect(createMonster('Soraya', 1000, 'tordesillas', 'toros')).toEqual(['tordesillas', 'toros']);
    });
    // it('spread syntax',
    //   () => {
    //
    //     function createMonster(name, power) {
    //       return {name, power};
    //     }
    //
    //     let values = ['Soraya', 1000];
    //
    //     expect(createMonster(...values)).toEqual({name: 'Soraya', power: 1000});
    //   }
    // );
    it('destructuring', function () {
        var _a = { name: 'Soraya', power: 1000 }, name = _a.name, power = _a.power;
        expect(name).toEqual('Soraya');
    });
    it('destructuring with arrays', function () {
        var x = 1, y = 2;
        _a = [y, x], x = _a[0], y = _a[1];
        expect(x).toEqual(2);
        var _a;
    });
    it('union types', function () {
        var type = 'North';
        expect(type).toEqual('North');
    });
    it('accessors', function () {
        var example = (function () {
            function example() {
            }
            Object.defineProperty(example.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (valor) {
                    this._value = valor + 1;
                },
                enumerable: true,
                configurable: true
            });
            return example;
        }());
        var ex = new example();
        ex.value = 5;
        expect(ex.value).toEqual(6);
    });
    it('function types', function () {
        var fun;
        fun = function (x) { return x + 1; };
        expect(typeof fun(1)).toEqual('number');
    });
    it('static methods', function () {
        var Calculator = (function () {
            function Calculator() {
            }
            Calculator.add = function (x) {
                return x + 1;
            };
            return Calculator;
        }());
        expect(Calculator.add(1)).toEqual(2);
    });
});
