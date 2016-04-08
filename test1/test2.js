var util   = require('util');
var events = require('events');

module.exports = new (function(){
  function Second(options){
    events.EventEmitter.call(this);
    console.log(options,"Second");
  }

  util.inherits(Second, events.EventEmitter);

  this.add = function(a,b){
    return a+b;
  }
})({"test":"test2"});