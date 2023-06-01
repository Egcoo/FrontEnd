// alert("hello,world");

function fun() {

}

// 10
function sum(num1, num2) {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof (arguments[i] == "number")) {
      result += arguments[i];
    }
  }
  return result;
}

alert(sum(1, 2, 3, 4, 5, 6, 7));
/*
03变量类型
js的变量类型
数值类型： number、字符串类型：string、对象类型：object、布尔类型：boolean、函数类型：function
特殊的值：
undefined：未定义  null 空值、 NaN 非数字、非数值

 05-逻辑运算
 在JavaScript中，所有的变量都可以作为boolean类型去使用

  07—数组类型
  js中的数组会自动扩容

  10-隐形参数
  js中的隐形参数和java中的可变参数操作类似

  11-自定义对象
  var 变量名 = new Object();
  变量名.属性名 = 值
  变量名.函数名 = function(){}

  var 变量名 = {}


 */

/*
10.事件——事件是电脑输入设备与页面交互以后的响应，我们称之为事件

  事件的注册又分静态和动态两种：就是告诉浏览器，当事件响应后要执行哪些操作代码叫事件注册或绑定
  静态注册：通过Html 标签的事件属性直接赋予事件响应后的代码，这种方式我们叫静态注册
  动态注册：先通过js代码得到标签的 dom 对象，然后再通过dom对象.事件名 = function(){} 这种形式赋予
  事件响应后的代码，叫动态注册

    基本步骤 1.获取标签对象 2.标签对象.事件名=function(){} 
*/

//静态注册onload 事件：就是浏览器解析完以后就自动执行

function onloadFun() {
  alert("静态注册onload事件，所有代码");
}

// onload 注册的动态写法，是固定写法
window.onload = function () {
  alert("静态注册onload事件，所有代码");
}

