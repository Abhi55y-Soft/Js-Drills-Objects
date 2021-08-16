const {defaults} = require('../defaults');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const newObject = {name: 'Wruce Sayne', movie: 'Batman'};
defaults(testObject, newObject);

console.log(testObject);