var util   = require('util');
var events = require('events');

function Third(options){
  events.EventEmitter.call(this);
  console.log(options,"Third");
}

util.inherits(Third, events.EventEmitter);

Third.prototype.add = function(a,b){
  return a+b;
}


exports = module.exports = {};

exports.client = function(options) {
  return new Third(options);
};
