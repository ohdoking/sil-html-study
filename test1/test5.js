var util   = require('util');
var events = require('events');

function fifthFuntion(options){
  events.EventEmitter.call(this);
  console.log(options,"fifthFuntion");
}

util.inherits(fifthFuntion, events.EventEmitter);

fifthFuntion.prototype.add = function(a,b){
  return a+b;
}

var fifth = new fifthFuntion({"test":"test5"});

exports.info = function(message) {
  console.log(message,"fifthFuntion-export-info");
};

exports.fifth = fifth;