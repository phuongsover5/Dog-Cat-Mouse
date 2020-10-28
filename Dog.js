
var chalk = require('chalk');
function Dog(name) {
    this.name = name;
    this.stomach =[];
}

Dog.prototype.sayHi = function() {
    console.log('Hi! I\'m a dog. My name is ' + chalk.yellowBright(this.name));
}
Dog.prototype.eat = function(cat) {
    this.stomach.push(cat);
}

module.exports = Dog;