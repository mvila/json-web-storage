# JSON Web Storage [![Build Status](https://travis-ci.org/mvila/json-web-storage.svg?branch=master)](https://travis-ci.org/mvila/json-web-storage)

Simple localStorage/sessionStorage wrapper providing the exact same API with automatic JSON serialization.

## Installation

With npm (for Browserify/Webpack):

```
npm install --save json-web-storage
```

## Usage

The API is identical to the standard [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Storage). The only difference is that the items we put/get are automatically serialized/unserialized with JSON.stringify() and JSON.parse().

## Example

```javascript
import { jsonLocalStorage } from 'json-web-storage';

jsonLocalStorage.setItem('num', 123.45);
let num = jsonLocalStorage.getItem('num');
console.log(typeof num) // => number
console.log(num) // => 123.45

jsonLocalStorage.setItem('obj', { name: 'John' });
let obj = jsonLocalStorage.getItem('obj');
console.log(typeof obj) // => object
console.log(obj.name) // => John
```

## License

MIT
