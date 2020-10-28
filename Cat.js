var chalk = require('chalk');
function Cat(name) {
    this.stomach = [];
    this.name = name;
}

Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
}

Cat.prototype.sayHi = function() {
    console.log('Hi! I\'m a Cat. My name is ' + chalk.greenBright(this.name));
}


module.exports = Cat;