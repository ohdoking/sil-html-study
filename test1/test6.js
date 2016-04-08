var util   = require('util');
var events = require('events');

function Sixth(options){
  events.EventEmitter.call(this);
  console.log(options,"Sixth");

  // return( { foo: "bar" } );
  return this;
}

util.inherits(Sixth, events.EventEmitter);

Sixth.prototype.add = function(a,b){
  return a+b;
}

module.exports = new Sixth({"test":"test6"});