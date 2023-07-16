# JavaScript

## How to Code

### How to fail to code

1. 没有一个明确的目标
2. 只是复制代码，而不关心它是如何工作的
3. 没有在课程和教程中强化他所学习的内容，或者做笔记。
4. 课外不练习，不去提出自己的想法。
5. 失去动力与信心，独自学习。
6. 自认为是一个程序员，但连自己的一个项目或者简单的应用程序也没有

### How to do

1. He didn't have a clear goal at the beginning of his journey
   1. 拥有一个明确的目标，比如一年后我想成为一个优秀的全栈工程师，我应该如何做？具象化自己的目标
   2. 重要的是找到一个原因，这会让你保持动力以应对越来越难的情况。
   3. Imagine a big project you want to able to build.
2. He would just copy the code without caring how it works.
   1. 始终确保自己真正理解代码。
   2. 不要只是复制粘贴
3. He didn't reinforce what he was learning by doing small challenges or taking notes.
   1. 网站 codewar.com
4. He didn't practice coding, and didn't come up with his own project ideas
   1. **自主练习永远是最重要的事情**
   2. 在没有任何课程指导的情况下自己编写项目，非常重要
   3. 走出自己的舒适区才是唯一的成长途径。不要陷入教程陷阱。
   4. 模仿常见的页面的写法 copy
5. He quickly became frustrated when his code was not perfectly clean or efficient
   1. 干净高效的代码会随着时间而出现。
6. He lost motivation because he thought he could never know everything
   1. **你永远不会知道一切**
7. 某一个时刻你就会发现你已经特别删除写代码了
8. web 开发的变化本身就非常快，你要学会去适应新的技术。
9. **keep going, keep coding and keep building.**

## How to think like a Developer & Problem slover

1. 当我们说解决问题的时候，我们说的是一个真正的需要解决方案的真正问题。
2. Stay calm and slow down, don't just jump at a problem withouta plan
3. Take a very logical and rational approach (programming is just logic, in the end...)
4. Use my 4-step framework to solve any problem
   1. 确保你 100% 理解问题，跳出当前去看大局，并且提问出正确的问题。
   2. 一个大问题化成多个小问题
   3. 不害怕做尽可能多的研究。
   4. 对于一个大的问题，可以尝试着写一些伪代码
   5. 培养真正的好奇心和热情。

## js 介绍

1. 由值决定类型。
2. 值类型——数据类型：不可改变的原始值(栈数据)、引用值(堆数据)，唯一的不同是赋值形式的不同。
3. 真想删除东西就需要二次覆盖。

## 逻辑运算符

1. undefined, null, NaN, " ", 0, false ===> false
2. 先看第一表达式转换成布尔值得结果,如果结果为真,那么它会看第二个表达式转换为布尔值得结果,然后如果只有两个表达式的话,只看看到第二个表达式,就可以返回该表达式的值了。
3. 如果是多个表达式的话，只要是真就一直往后走，一旦碰到假就返回假的位置。

## typeof

1. number string boolean object undefined function
2. typeof(typeof(undefined)) 返回 string 值, 因为内层返回 undefined 是字符类型。
3. 数组、null 放进去返回值也是 object
4. typeof(NaN) -> number

## 显示类型转换

2. Number(mix), parseInt(string , radix), parseFloat(string), toString(radix), String(mix), Boolean()
3. Number() 会想尽一切办法把括号里的内容转化为数，null -> 0, true -> 1, false -> 0, Number(undefined) 结果是 NaN， 普通字符串结果 NaN
4. parseInt(string , 进制) 会将其中的内容转化为**整数**，如果是字符串的数从数字位开始截取到非数字位为止给你转化成数，如果是 null，false，true 直接 NaN，如果 radix 不为空，**则以目标进制为基底转化成十进制。radix 取值范围（2，36）**
5. parseFloat(string , 进制)：转化成正常小数，如果是字符串的数从数字位开始截取到非数字位为止给你转化成数
6. String(): 写任何东西都变成 string
7. Boolean() : 空串""是 false，
8. toString(radix): toString 作为一个函数，undefined 和 null 都不能用 tostring，如果 radix 不为空，则以当前进制为基底转化成目标进制(radix)。

## 隐式类型转换

1. isNaN() : 先把括号里的数字放到 Number()里去转换，转化以后和 NaN 比对，如果相等则为 true **NaN != NaN**, 并且 NaN 不等于任何东西。
2. ++/-- +/- : 先把括号里的数字放到 Number() 里去转换

```javascript
    var a = +"abc";
    console.log(a + ":" + typeof(a));
    结果：NaN:number
```

3. - : 隐式类型转换时 String，只要两侧有一个是 String。
4. -\*/% ： Number
5. && || ！：Boolean
6. \> < = : 字符串和数字比较的时候，调用 Number，多个数字和数字比较，一个一个来
7. == != ：调用 Boolean
8. 不发生类型转换： === !== 强制比对

## 函数、初始作用域

1. 参数才决定了一个函数真正神奇的地方，将规则抽象
2. 形参和实参都是随便传，会有一个 arguements 数组来存储实参。
3. arguements 数组和 形参存在一个映射关系。相等的时候才映射。

## 递归

1. 找规律
2. 找出口

## 预编译

1. js 特点：单线程 + 解释型语言
2. js 执行三部曲：语法分析、预编译、解释执行
3. imply global 暗示全局变量:即任何变量,如果变量未经声明就赋值,此变量就为全局对象所有。
4. 一切声明的全局变量,全是 window 的属性，window 就是全局的域

```javascript
var a = 10;
window.a = 10;
```

### 预编译步骤：发生在函数执行的前一刻

//函数声明整体提升
//变量 声明提升

1. 创建 AO 对象
2. 找形参和变量声明,将变量和形参名作为 AO 属性名,值为 undefined
3. 将实参值和形参统一
4. 在函数体里面找函数声明,值赋予函数体

```javascript
function fn(a) {
  console.log(a);

  var a = 123;

  console.log(a);

  function a() {}

  console.log(a);

  var b = function () {};

  console.log(b);

  function d() {}
}
fn(1);
```

全局环境预编译只有两步

1. 创建 GO(Global Object) 对象
2. 在函数体里面找函数声明,值赋予函数体
