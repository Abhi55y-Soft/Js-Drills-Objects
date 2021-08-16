const {mapObject} = require('../mapObject');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const cb = (value) => {return value+5};

const result = mapObject(testObject, cb);
console.log(result);