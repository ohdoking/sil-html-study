var util   = require('util');
var events = require('events');

function Fourth(options){
  events.EventEmitter.call(this);
  console.log(options,"Fourth");
}

util.inherits(Fourth, events.EventEmitter);

Fourth.prototype.add = function(a,b){
  return a+b;
}

module.exports = Fourth;