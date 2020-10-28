var chalk = require('chalk');
function Mouse(lname) {
    this.name = lname;
}

Mouse.prototype.sayHi = function() {
    console.log('Hi! I\'m a Mouse. My name is ' + chalk.redBright(this.name));
}
module.exports = Mouse;