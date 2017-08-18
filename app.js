const ci = require('./ci/ci');

var [key] = process.argv.splice(2);
console.log(ci(key));