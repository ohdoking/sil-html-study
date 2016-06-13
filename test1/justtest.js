/*

function zero(val, callback2,cause){
	console.log("before " + val);
	val--;

	var a = 10;
	var b = 10;

	var c = a++;
	var d = ++b;
	console.log("rrrrr : " + a,b,c,d);
	if(typeof callback2 == "function" && callback2 !== null){
		val = callback2(val);
	}

	console.log((cause ? "moring" : "evening"));
	return callback(val)	
}

function callback(val){
	console.log("callback " + val);
	return val;
}

var ho = zero(109,{},false);

console.log("hon : " + ho);

var zo = zero(109, function(val){	
	console.log("excute callback2!!");

	val++
	val++

	return val;
},true);

console.log("zon : " + zo);
*/
/*var soft = {
	val : {
		bo : "hi"
	}
}

function excute(){
	var mi = soft.val.bo;
	return mi;
}

var excute2 = function(){
	var mi = soft.val.bo;
}


console.log(excute());
console.log(excute2());*/


/*var myObject = {
	value : 0,
	increment : function(something){
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment.prototype.minus = function(something){
	this.value += 10;
}

myObject.increment.multi = function(){

}

myObject.increment();
document.writeln(myObject.value);

myObject.increment(2);
document.writeln(myObject.value);


console.log(myObject)
*/

/*var myObject = function(){
	var value  = 0;

	return {
		increment : function(inc){
			value += typeof inc === 'number' ? inc : 1;
		},

		getValue : function(){

		}
	};
}();
*/

/*
	호이스트란, 변수의 정의가 그 범위에 따라 선언과 할당으로 분리되는 것을 의미합니다. 
	즉, 변수가 함수내에서 정의되었을 경우 선언이 함수의 최상위로, 함수 바깥에서 정의되었을 경우는 전역 컨텍스트의 최상위로 변경됩니다.
 */

/*var name = "ss";
function showName() {
     console.log("First Name : " + name);
     var name = "Ford";
     console.log("Last Name : " + name);
}
showName();*/


function outter (){
	var title = 'coding everybody';
	return function(){
		console.log("inner")
		alert(title);
	}
}

var inner = outter();

inner();