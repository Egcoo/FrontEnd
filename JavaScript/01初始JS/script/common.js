//var n = parseInt(window.prompt('input'));
// for (var a = 0; a < 10; a++) {
//   document.write("a");
// }

// var num = 123;
// console.log(typeof(num));

var a = +"abc";
console.log(a + ":" + typeof a);

function test1() {
  document.write("1");
  document.write("1");
  document.write("1");
  document.write("Hello world!");
}

//函数声明
function theFirstName() {}

//1.命名函数表达式
var test = function abc() {
  document.write("a");
};

// 2.匿名函数表达式 ------> 函数表达式
//Source Code Pro
var demo = function () {
  document.write();
};
