const names = require("./names");
const sayHi = require("./utils");
const data = require("./alternative_flavor");
console.log(data);

require("./sum");

sayHi("green");
sayHi(names.name1);
sayHi(names.name2);