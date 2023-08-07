# JavaScript

## How to Code

### How to fail to code

Consolas

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

### How to think like a Developer & Problem slover

1. 当我们说解决问题的时候，我们说的是一个真正的需要解决方案的真正问题。
2. Stay calm and slow down, don't just jump at a problem withouta plan
3. Take a very logical and rational approach (programming is just logic, in the end...)
4. Use my 4-step framework to solve any problem
   1. 确保你 100% 理解问题，跳出当前去看大局，并且提问出正确的问题。
   2. 一个大问题化成多个小问题
   3. 不害怕做尽可能多的研究。
   4. 对于一个大的问题，可以尝试着写一些伪代码
   5. 培养真正的好奇心和热情。

## Javascript fundamentals - part 1

1. 5 falsy values: 0, "", undefined, null, NaN
2. 根据干净代码的一般原则，尽量避免使用 loose equality operator
3. 语句(statement)和表达式(expression)：表达式产生值，而语句就是翻译我们行为的完整的句子。
   - 在模板文字(template literal) 中，我们只能插入表达式，不能插入语句。

## Program 5,6,7 summarize

1. 使用清晰和语义化的变量名。使用像 activePlayer 这样的名称而不是 player。
2. 将数据与 UI 分离。将数据存储在 scores 和 activePlayer 等变量中，并使用这些数据更新 UI 元素。这使得代码可重用和可维护。
3. 将逻辑拆分为函数。像 init()， switchPlayer()这样的函数保持了主逻辑的简洁。
4. 将初始化逻辑封装在函数中。init()函数将游戏状态重置为初始条件
5. 在 New Game 按钮中添加监听器来调用 init()并重置游戏。
6. 使用 classList 来切换 UI 状态，而不是直接编辑 HTML。这将状态管理(数据)的职责与 UI 呈现分离开来。
7. 在每个回合之后检查获胜条件，而不是在最后，提供即时反馈，设置整个状态。
8. 遵循关注点分离、封装、模块化和使用语义名称等原则。让你的职能集中，只做一件事。并尽可能使用函数重置状态。

## HOW JAVASCRIPT WORKS BEHIND THE SCENES

### overview

1. js 是一个面向对象的，多范式的，解释型，动态的，单线程，垃圾回收机制，具有非阻塞事件循环并发模型的编程语言。
2. High-level
3. Garbage-collected
4. Interpreted or just-in-time compiled
5. Multi-paradigm
   1. Procedural programming
   2. Object-oriented programming (OOP)
   3. Functional programming (FP)
6. Prototype-based object-oriented
7. First-class functions：In a language with first-class functions, functions are simply treated as variables. We can pass them into other functions, and returin them from functions.
8. Dynamic
9. Single-threaded
10. Non-blocking event loop

### THE JAVASCRIPT ENGINE AND RUNTIME

1. 任何一个 js 引擎 = 调用栈（代码实际执行） + 堆（存储程序需要的对象）
2. 现代 js 引擎混合使用编译和解释 (先通过编译整个编译成机器码，后执行)
3. 现代引擎的原理：开始编译的结果就是产生一个未优化的机器码，以至于可以快速执行，然后在后台代码继续优化，并且在已经运行的程序执行期间重新编译，并且这个过程会多次持续，直至未优化的代码彻底变成优化后的代码（发生在引擎内部的我们无法通过代码访问的线程）
4. js runtime: js Engine + web API(为 Engine 提供功能，但不是一部分) + Callback queue（比如事件处理函数，调用过后重新放入回调队列，**当调用栈为空时，回调函数被传回栈**）
5. Node.js js runtime : js Engine + C++ Bindings & Thread Pool + callback queue

### EXECUTION CONTEXTS AND THE CALL STACK

1. 执行的具体步骤
   1. 创造一个 global execution of context for 执行非调用函数的代码和接收函数声明(Exactly one global execution context (EC))
   2. Execution context: Environment in which a piece of JavaScript is executed. Stores all the necessary information for some code to be executed.
   3. One execution context per function: For each function call, a new execution context is created,**all together make the call stack**
   4. 调用栈：每个执行上下文堆叠在一起，为了追踪我们在程序执行中所处的位置，执行完就弹出（"Place" where execution contexts get stacked on top of each other, to keep track of where we are in the execution）
   5. 代码在调用栈中的执行上下文中运行
2.

## js 介绍

1. 由值决定类型。
2. 值类型——数据类型：不可改变的原始值(栈数据)、引用值(堆数据)，唯一的不同是赋值形式的不同。
3. 真想删除东西就需要二次覆盖。

## 7 种基本类型

1. Number, Sting, Boolean, underfined, Null, Symbol, BigInt
2. 独特的动态类型机制
3. 没声明就用，会让 js 在全局对象上创建一个属性

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
