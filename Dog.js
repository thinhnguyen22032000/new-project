var chalk = require('chalk')

function Trex(name){
	this.stomuch = []
	this.name = name
}

Trex.prototype.eat = function(cat){
	this.stomuch.push(cat)
}

Trex.prototype.hello = function(){
	console.log("hi .i am Trex:", chalk.green(this.name))
}

module.exports = Trex;