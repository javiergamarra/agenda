var describe: any;
var it: any;
var expect: any;

describe('1st tests', () => {
  it('true is true', () => expect(true).toEqual(true));

  it('null is not the same thing as undefined',
    () => expect(null).not.toEqual(undefined)
  );

  it('template strings allow ${variables}',
    () => {
      let hola = 'hi!';
      expect(`hola, ${hola}`).toEqual('hola, hi!');
    }
  );

  it('let are equals to var with block support',
    () => {

      {
        var hola = 'hi!';
        // expect(hola).toEqual('hi!');
      }
      expect(hola).toEqual('hi!');

      {
        let adios = 'hi!';
        // expect(adios).toEqual('hi!');
      }
      // expect(adios).toEqual('hi!');
    }
  );

  it('fat arrows have implicit returns',
    () => {

      let fun = x => x + 1;
      let add = function (x) {
        return x + 1;
      };

      expect(fun(2)).toEqual(add(2));
    }
  );

  it('for of is great for iterables',
    () => {

      let iterable = [3, 5, 7];
      iterable['foo'] = "hello";

      let for_props = 0;
      let for_of_props = 0;

      for (let prop in iterable) {
        for_props++;
      }

      for (let prop of iterable) {
        for_of_props++;
      }

      expect(for_props).toEqual(4);
      expect(for_of_props).toEqual(3);
    }
  );

  it('we have sets now',
    () => {

      let example = new Set([2, 2, 3]);

      expect(example.size).toEqual(2);
    }
  );

  it('short syntax for objs',
    () => {

      function createMonster(name, power) {
        return {name, power};
      }

      expect(createMonster('Soraya', 1000)).toEqual({name: 'Soraya', power: 1000});
    }
  );

  it('rest syntax',
    () => {

      function createMonster(name, power, ...rest) {
        return rest;
      }

      expect(createMonster('Soraya', 1000, 'tordesillas', 'toros')).toEqual(['tordesillas', 'toros']);
    }
  );

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

  it('destructuring',
    () => {

      let {name, power} = {name: 'Soraya', power: 1000};

      expect(name).toEqual('Soraya');
    }
  );

  it('destructuring with arrays',
    () => {

      let x = 1, y = 2;
      [x, y] = [y, x];

      expect(x).toEqual(2);
    }
  );

  it('union types',
    () => {

      let type: "North" | "East" = 'North';
      expect(type).toEqual('North');
    }
  );

  it('accessors',
    () => {

      class example {
        private _value: number;

        set value(valor) {
          this._value = valor + 1
        }

        get value() {
          return this._value;
        }
      }

      let ex = new example();
      ex.value = 5;

      expect(ex.value).toEqual(6);
    }
  );

  it('function types',
    () => {

      interface example {
        (x: number): number;
      }

      let fun: example;

      fun = x => x + 1;

      expect(typeof fun(1)).toEqual('number');
    }
  );

  it('static methods',
    () => {

      class Calculator {

        static add(x) {
          return x + 1;
        }
      }

      expect(Calculator.add(1)).toEqual(2);
    }
  );


});
