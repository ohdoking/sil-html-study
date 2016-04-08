var http = require("http");

var test1 = require('./test');
var test2 = require('./test2');
var test3 = require('./test3');
var test4 = require('./test4');
var test5 = require('./test5');
var test6 = require('./test6');

function start(){
  function startFunction(){
    console.log(options,"start");
  }
  var test1Result = new test1({"test":"test1"}).add(1,2);
  var test2Result = test2.add(1,3);
  var test3Result = test3.client({"test":"test3"}).add(1,4);
  var test4Result = new test4({"test":"test4"}).add(1,5);
  var test5Result = test5.fifth.add(1,6);
  var test6Result = test6.add(1,7);

  console.log(test1Result,test2Result,test3Result,test4Result,test5Result,test6Result)

  console.log("##  test1  ##");
  console.log("test1",test1);
  console.log("---------------");
  console.log(test1);
  console.log("##  test2  ##");
  console.log("test2",test2);
  console.log("---------------");
  console.log(test2);
  console.log("##  test3  ##");
  console.log("test3",test3);
  console.log("---------------");
  console.log(test3);
  console.log("##  test4  ##");
  console.log("test4",test4);
  console.log("---------------");
  console.log(test4);
  console.log("##  test5  ##");
  console.log("test5",test5);
  console.log("---------------");
  console.log(test5);
  console.log("##  test6  ##");
  console.log("test6",test6);
  console.log("---------------");
  console.log(test6);


  http.createServer(function(request,response){

    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("success");
    response.end();
    console.log("server start");
  }).listen(8888);

}

module.exports.start = start;