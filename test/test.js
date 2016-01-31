'use strict';

import { assert } from 'chai';
import { jsonLocalStorage } from '../src';

describe('JSON Web Storage', function() {
  describe('jsonLocalStorage', function() {
    it('should provide the exact same API with automatic JSON serialization', function() {
      let number;
      number = jsonLocalStorage.getItem('number');
      assert.isNull(number);
      jsonLocalStorage.setItem('number', 123.45);
      number = jsonLocalStorage.getItem('number');
      assert.isNumber(number);
      assert.strictEqual(number, 123.45);

      let object;
      object = jsonLocalStorage.getItem('object');
      assert.isNull(object);
      jsonLocalStorage.setItem('object', { name: 'Manu' });
      object = jsonLocalStorage.getItem('object');
      assert.isObject(object);
      assert.deepEqual(object, { name: 'Manu' });

      let temporary;
      temporary = jsonLocalStorage.getItem('temporary');
      assert.isNull(temporary);
      jsonLocalStorage.setItem('temporary', 'string');
      temporary = jsonLocalStorage.getItem('temporary');
      assert.isString(temporary);
      assert.strictEqual(temporary, 'string');
      jsonLocalStorage.removeItem('temporary');
      temporary = jsonLocalStorage.getItem('temporary');
      assert.isNull(temporary);

      let key;
      key = jsonLocalStorage.key(0);
      assert.equal(key, 'number');
      key = jsonLocalStorage.key(1);
      assert.equal(key, 'object');
      key = jsonLocalStorage.key(2);
      assert.isNull(key);

      let length;
      length = jsonLocalStorage.length;
      assert.equal(length, 2);
      jsonLocalStorage.clear();
      length = jsonLocalStorage.length;
      assert.equal(length, 0);
    });
  });
});
