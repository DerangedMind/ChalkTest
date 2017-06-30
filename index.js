var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
var message1 = chalk.hex('#0dead0').underline("I'm an awesome block.");
console.log(message);
console.log(message1)