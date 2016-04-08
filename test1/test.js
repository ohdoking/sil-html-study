var util   = require('util');
var events = require('events');

module.exports = (function(options){
  function First(options){
    // events.EventEmitter.call(this);
    console.log(options,"first");
  }

  // util.inherits(First, events.EventEmitter);

  First.prototype.add = function(a,b){
    return a+b;
  }

  return First;
})({"test1":"test11"});