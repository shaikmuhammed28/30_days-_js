// function add(a,b){
//     return a+b;
// }
// module.exports = add;


// math.test.js
const add = require('./day48j.test.js');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});