# JavaScript

## Questions remain

1. **数值精度**部分，有效数字这时总是`1.xx...xx`的形式，其中`xx..xx`的部分保存在64位浮点数之中，最长可能为52位。为什么JavaScript 提供的有效数字最长为53个二进制位？✅ [Js中的数字存储](https://fengmumu1.github.io/2018/06/30/js-number/)，[面试必备之详解JS数字精度](https://segmentfault.com/a/1190000021684144)
2. 



## How to Code

### How To Fail To Code

1. 没有一个明确的目标
2. 只是复制代码，而不关心它是如何工作的
3. 没有在课程和教程中强化他所学习的内容，或者做笔记。
4. 课外不练习，不去提出自己的想法。
5. 失去动力与信心，独自学习。
6. 自认为是一个程序员，但连自己的一个项目或者简单的应用程序也没有

### How To Do With that

1. He didn't have a clear goal at the beginning of his journey
   1. 拥有一个明确的目标，比如一年后我想成为一个优秀的全栈工程师，我应该如何做？具象化自己的目标。
   2. 重要的是找到一个原因，这会让你保持动力以应对越来越难的情况。
   3. Imagine a big project you want to able to build.
2. He would just copy the code without caring how it works.
   1. 始终确保自己真正理解代码。
   2. 不要只是复制粘贴。
3. He didn't reinforce what he was learning by doing small challenges or taking notes.
   1. 网站 codewar.com。
4. He didn't practice coding, and didn't come up with his own project ideas
   1. **自主练习永远是最重要的事情**。
   2. 在没有任何课程指导的情况下自己编写项目，非常重要。
   3. 走出自己的舒适区才是唯一的成长途径。不要陷入教程陷阱。
   4. 模仿常见的页面的写法 copy。
5. He quickly became frustrated when his code was not perfectly clean or efficient
   1. 干净高效的代码会随着时间而出现。
6. He lost motivation because he thought he could never know everything
   1. **你永远不会知道一切**
7. 某一个时刻你就会发现你已经特别擅长写代码了
8. web 开发的变化本身就非常快，你要学会去适应新的技术。
9. **keep going, keep coding and keep building.**

### How To Think Like a Developer & Problem Slover

1. 当我们说解决问题的时候，我们说的是一个真正的需要解决方案的真正问题。
2. Stay calm and slow down, don't just jump at a problem withouta plan.
3. Take a very logical and rational approach (programming is just logic, in the end...)
4. Use my 4-step framework to solve any problem
   1. 确保你 100% 理解问题，跳出当前去看大局，并且提问出正确的问题。
   2. 一个大问题化成多个小问题。
   3. 不害怕做尽可能多的研究。
   4. 对于一个大的问题，可以尝试着写一些伪代码。
   5. 培养真正的好奇心和热情。

### How the web works

<img src="../img/TCP-IP.png" alt="Request and response" style="zoom:50%">

## JavaScript Fundamentalsjs

### Clean code

1. 5 falsy values: 0, "", undefined, null, NaN
2. 根据干净代码的一般原则，尽量避免使用 loose equality operator ("==")。
3. 语句(statement)和表达式(expression)：表达式产生值，而语句就是翻译我们行为的完整的句子。
4. 注意：在模板文字(template literal) 中，我们只能插入表达式，不能插入语句。



### Display Type Conversion

1. Number(mix), parseInt(string , radix), parseFloat(string), toString(radix), String(mix), Boolean()
2. Number() 会想尽一切办法把括号里的内容转化为数，null -> 0, true -> 1, false -> 0, Number(undefined) 结果是 NaN， 普通字符串结果 NaN
3. parseInt(string , 进制) 会将其中的内容转化为**整数**，如果是字符串的数从数字位开始截取到非数字位为止给你转化成数，如果是 null，false，true 直接 NaN，如果 radix 不为空，**则以目标进制为基底转化成十进制。radix 取值范围（2，36）**
4. parseFloat(string , 进制)：转化成正常小数，如果是字符串的数从数字位开始截取到非数字位为止给你转化成数
5. String(): 写任何东西都变成 string
6. Boolean() : 空串""是 false，
7. toString(radix): toString 作为一个函数，undefined 和 null 都不能用 tostring，如果 radix 不为空，则以当前进制为基底转化成目标进制(radix)。

### Implicit Conversion

1. +"string" ，可以隐式转换 string 为Number类型。
2. isNaN(), 检查一个值是否不是个数。
3. isFinite(), 检查一个值是否是数字的最佳实践。

### Program 5,6,7 summarize

1. 使用清晰和语义化的变量名。使用像 activePlayer 这样的名称而不是 player。
2. 将数据与 UI 分离。将数据存储在 scores 和 activePlayer 等变量中，并使用这些数据更新 UI 元素。这使得代码可重用和可维护。
3. 将逻辑拆分为函数。像 init()， switchPlayer()这样的函数保持了主逻辑的简洁。
4. 将初始化逻辑封装在函数中。init()函数将游戏状态重置为初始条件
5. 在 New Game 按钮中添加监听器来调用 init()并重置游戏。
6. 使用 classList 来切换 UI 状态，而不是直接编辑 HTML。这将状态管理(数据)的职责与 UI 呈现分离开来。
7. 在每个回合之后检查获胜条件，而不是在最后，提供即时反馈，设置整个状态。
8. 遵循关注点分离、封装、模块化和使用语义名称等原则。让你的职能集中，只做一件事。并尽可能使用函数重置状态。

## How Javascript Works Behind the Sences

### Overview

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

### The JavaScript Engine and Runtime

1. 任何一个 js 引擎 = 调用栈（代码实际执行） + 堆（存储程序需要的对象）。
2. 即时编译：现代 js 引擎混合使用编译和解释 (先通过编译整个编译成机器码，后执行)。
3. 现代引擎的原理：开始编译的结果就是产生一个未优化的机器码，以至于可以快速执行，然后在后台代码继续优化，并且在已经运行的程序执行期间重新编译，并且这个过程会多次持续，直至未优化的代码彻底变成优化后的代码（发生在引擎内部的我们无法通过代码访问的线程）
4. js runtime = js Engine + web API(为 Engine 提供功能，但不是一部分) + Callback queue（比如事件处理函数，调用过后重新放入回调队列，**当调用栈为空时，回调函数被传回栈**）
5. Node.js js runtime = js Engine + C++ Bindings & Thread Pool + callback queue

### Execution Contexts and the Call Stack

执行的具体步骤

1.  创造一个 global execution of context (for top level code, 这里的 top level code 不在任何函数中) 执行非调用函数的代码和接收函数声明(Exactly one global execution context (EC))
2.  Execution context: Environment in which a piece of JavaScript is executed. Stores all the necessary information for some code to be executed.（披萨盒子是环境，披萨是 code，吃披萨工具和收据是必要的信息）
3.  Execution context = vairable environment + Scope chain + this keyword
4.  One execution context per function: For each function call, a new execution context is created,**all together make the call stack**
5.  调用栈：每个执行上下文堆叠在一起，为了追踪我们在程序执行中所处的位置，执行完就弹出（"Place" where execution contexts get stacked on top of each other, to keep track of where we are in the execution）
6.  代码在调用栈中的执行上下文中运行

### Scope and The Scope Chain

1. Scoping: How our program's variables are organized and accessed.
2. Scope: Space or environment in which a certain variable is declared (variable environment in case of functions). There is **global** scope, **function** socope, and **block** scope;
3. Scope of a variable: Region of our code where a certain variable can be accessed.
4. Three Type of scope
   1. global scope
   2. function scope
   3. block scope : only let and const are block scope (**Functions are also block scoped**(only in strict mode))
5. call stack, execution context, variable environment , scope
   1. 全局变量（global scope）中的可用变量就是存储在全局执行上下文(global execution context)的那些变量环境(variable environment)
   2. Every scope always has access to all the variables from all its outer scopes. This is the scope chain
   3. scope chain 只和代码被写在了哪里有关，和代码是否被调用，调用顺序无关
   4. 当一个变量不在当前范围，引擎就会想上寻找直到找到变量在哪里。
   5. The scope chain in a certain scope is equal to adding together all the variable environments of the all parent scopes;（某作用域内的作用域链等于所有父作用域的所有变量环境的总和;）

### Variable Environment: Hoisting and THE TDZ 提升机制

1. Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope".(在你声明之前先使用)
   1. 函数声明：Hoisted ✅; Initial Value: Actual function; Scope: Block
   2. var variables: Hoisted ✅; Initial Value: underfined ; Scope: Function(var 在全局变量上创建)
   3. Let and const variables: Hoisted ❌; <uninitialized>,TDZ; Scope: Block
   4. function expressions and arrows: Depends if using var or let/const
2. Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.(在执行之前，扫描代码以查找变量声明，并且在变量环境对象中为每个变量创建一个新属性。在全局对象上创建一个属性)
3. Why TDZ : Makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avoided; 2） 让 const 常量真正起作用，因为我们不能重新分配 const

### This key word

1. this keyword/variable: Special variable that is created for every execution context (every function) Takes the value of (points to) the "owner" of the function in which the this keyword is used.
2. this is **NOT** static. It depends on how the function is called, and its value is only assigned when the function is actually called.
3. this 的四种使用方法
   1. Method ：this <Object that is calling the method> **this 总是指向调用该方法或者属性的对象**
   2. Simple function call this = undefined Arrow functions 函数中直接调用就是 undefined
   3. this = <this of surrounding function (lexical this) > ， **arrow functions 调用 this 就是 window，因为 arrow function 没有自己的 this，只能调用父函数的 function**
   4. Event listener this = <DOM element that the handler is attached to>，this 关键字总是指向元素本身。
4. this does NOT point to the function itself, and also NOT tthe its variable environment!(this 不是指向函数本身，也不是它的变量环境!)
5. arguement 关键字：只有函数表达式里存在 arguement 关键词，箭头表达式里没有。

### Regular function vs Arrow Function

1. 当我们试图访问一个不存在的属性，不会报错，只会有 undefined。
2. arguement 这个关键字只存在于常规函数之中（比较过时的方法）。
3. Arrow Function{}中书写代码片段 箭头函数的特点
   1. 当你的形参只有一个的时候, 可以不写小括号。
   2. 如果你的形参没有或者两个及以上, 必须写小括号。
   3. return 可以省略。

### Primitive VS. Objects (Primitive VS. Reference Types)

1. 七种基本类型：Number, Sting, Boolean, underfined, Null, Symbol, BigInt
2. 独特的动态类型机制
3. 原始类型和引用类型在内存中的存储方式是相当不同的。基本类型存储在执行上下文中（但因为执行上下文在调用栈内，也可以说是在栈中），引用类型存储在堆中。
4. const 不改变只适用于原始类型
5. 引用类型：当你复制一个对象时，你只是在创建一个变量指向新对象。



### Math and Rounding

1. Math.sqrt(), 平方根
2. Math.max(a,b,c,d), 返回最大值
3. Math.min(a,b,c,d), 返回最小值
4. Math.random(), 返回从(0,1]的一个小数。
5. Math.round, Math.ceil,四舍五入
6. Math.floor() 比 Math.trunc() 好的一点在于后者只是简单去除小数点后的部分，而前者会向更小的部分四舍五入。
7. toFixed() , 括号可以跟参数，小数的四舍五入，返回的是字符串。

### Tips

1. typeof(typeof(undefined)) 返回 string 值, 因为内层返回 undefined 是字符类型。
2. 数组、null 放进去返回值也是 object
3. typeof(NaN) -> number

## Data structures

### Spread operator

1. 扩展运算符适用于所有的可迭代对象。(Iterables: arrays, strings, maps, sets, NOT object) [...xxx]
2. 扩展运算符的主要用途就是解包一个数组构建新数组和将多个值传递给函数，通常当实参用，分发参数
3. Rest pattern and parameters 用作形参收集参数，或者用逗号分隔的变量名,常用在等号左边。

### Logical Operator（用于替代 if 语句）

1. undefined, null, NaN, " ", 0, false ===> false
2. || 一碰到真就返回真的表达式，全假就返回最后一个值。
3. && 如果是多个表达式的话，只要是真就一直往后走，一旦碰到假就返回假的位置。
4. Nullish(??): null and undefined (NOT 0 or '')
5. 逻辑赋值运算符(ES2021 引入)：||= 和 &&=
6. 链接运算符 ?., 只有?.前面的成立，才会往后走，经常与无效合并运算符(??)一起使用

### Looping Objects: Object Keys. Values. and Entries

1. 数组中使用 entries 方法 和对对象使用是相当不同的。

```javascript
/* Demo of Object.entries() */
const object1 = {
  a: "somestring",
  b: 42,
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// output:
// "a: somestring"
// "b: 42"
/* Demo of Array entries()  */
var fruits = ["Banana", "Orange", "Apple", "Mango"];

for (let [key, value] of fruits.entries()) {
  console.log(`${key}: ${value}`);
}

// output:
// 0: Banana
// 1: Orange
// 2: Apple
// 3: Mango
```

### Strings

1. 为什么 string 是原始类型还能有方法？当我们在 string 调用方法的时候，js 自动在幕后把 string 原始类型转化为 string 对象，调用结束以后，js 再转回来。
2. split(),根据指定分隔符分割字符串，后返回一个数组。
3. toLowerCase(),toUpperCase(),返回字符串的大小写。

### Array,Sets and maps

1. array: pop 删除、
   1. slice(),返回一个数组，截取数组元素，不会改变原本数组，什么参数都不填就是复制原数组。（浅拷贝）
   2. split(),根据某个字符分割，会返回一个数组。
   3. splice(),提取数组元素，会改变原本数组, 原有数组会丢失被提取的部分。不过我们通常的用法就是直接删除最后一个元素，什么参数都不放就是复制数组。
   4. reverse(), 返回一个数组，将原数组反转，会改变原数组。
   5. concat(),将两个数组连接。
   6. join(), 会返回一个带有我们指定分隔符的**字符串**。
   7. fill(), 填充数组元素，可以填一个参数，两个参数，三个参数
   8. at(),可以在其中指定相关索引，多用于返回最后一个值，也适用于字符串。
   9. entries(), 返回两个值，一个是索引，一个是值。
   10. forEach(), 是一个高阶函数，内部要放回调函数。高阶函数的三个参数(当前元素，元素的索引，数组)
   11. for...of loop, 当你需要 for 循环过程中有 break，continue 的请求的时候就用。
2. sets 无顺序，不重复
   1. forEach(),高阶函数的三个参数(value，value，set)
3. Map:set(),get(), 对对象使用两个方法需要提炼
   1. forEach(),高阶函数的三个参数(value，key，map)
4. data transformation: map,filter,reduce
   1. map(value,index,array): 返回一个新数组，其中包含对所有原始数组元素应用操作的结果，比如统一加一个或者减去一个数。
   2. filter(value,index,array): 返回一个新的数组，其中包含通过**指定的测试条件**的数组元素
   3. reduce((acc,cur,i,arr),other) : 将所有数组元素浓缩(“缩减”)为一个值
   4. find(),不会返回新数组，而是返回满足条件的第一个元素，用途就是定向搜索。
   5. findIndex(),只是返回当前索引，比 indexOf() 高级的一点在于可以放入不同的条件。
   6. some(),只是一个判断真假的方法，其中可以加入高阶函数作为判断条件，有符合的就返回真。
   7. every(),判断真假的方法，当所有元素都满足要求。
   8. flat(),不需要加入回调函数，可以把解耦嵌套的数组，默认只解耦一层，可以填写参数改变。**通常使用时先用 map 把数据拿出来，后 flat 展平，之后再 reduce 或者其他。**
   9. flatMap(),结合了两个方法，但只深入一层。
   10. sort(),默认会把所有元素都变成 string,然后排序，不过可以加入回调函数,**会对原始数组进行更改**。
       - String,从 A 到 Z 排队。
   11. from( \_,i),当我们不需要使用第一个元素的时候，但又需要一个索引的时候，用\_代替

![ArrayMethods](../img/ArrayMethods.png "ArrayMehtods")

### Which data structure to use?

SOURCES OF DATA

1. **From the program itself**: Data written directly in source code (e.g. status messages)
2. **From the UI**: Data input from the user or data written in DOM (e.g tassks in todo app)
3. **From external sources**: Data fetched for example from web API (e.g.recipe objects) ,data from web APIS usually comes in a special data format.

Data structure, javascript only has four built-in data structure

1. Simple list: Arrays or Sets.
2. key/value pairs : Object or maps.

Arrays:

1. Use when you need ordered list of values (might contain duplicates)
2. Use when you need to manipulate data

Sets:

1. Use when you need to work with unique values
2. Use when high-performance is really important
3. Use to remove duplicates from arrays

Objects:

1. More "traditional" key/value store ("abused" objects)
2. Easier to write and access
3. values with . and []
4. Use when you need to include functions (methods)
5. Use when working with JSON (can convert to map)

Maps:

1. Better performance
2. Keys can have any data type
3. Easy to iterate
4. Easy to compute size
5. Use when you simply need to map key to values
6. Use when you need keys that are not strings

### A closer look at function

#### How passing arguement works?

只有值传递，没有引用传递，引用类型的数据是存在堆内存中的，而该堆内存的地址是存在栈指针的值中的，参数传递引用类型数据时传递的也是栈指针的值，而不是堆地址的值。

#### First class vs Higher-Order function

 first class function 只是编程语言有或者没有的一个功能

1. JavaScript treats functions as first-class citizens
2. This means that functions are simply values
3. Functions are just another "type" of object

#### Higher-Order function

1. A function that receives another function as an argument, that returns a new function, or both.
2. This is only possible because of first-class functions.

有两个好处：1.可以拆分成更多的可重复使用和关联的部分。2.隐藏不必要的细节，允许我们创建抽象。

#### Call & Apply & bind 

函数它们可以指定函数中的 this 指向哪个对象，以及传递参数给函数。

1. Call，，call 函数允许你在一个特定的上下文中调用一个函数。
2. apply(),**已过时**，apply 函数与 call 函数类似，它也允许你在一个特定的上下文中调用一个函数。不同之处在于，apply 函数需要将参数作为数组传递。
3. bind() 它不会立即调用函数。相反，它返回一个新函数，该函数将绑定到指定的上下文，当该函数被调用时，它将以指定的上下文运行。

#### Immediately Invoked Function Expressions.

1. 仅仅用于单次执行，用完就没了

#### Clousure

1. 闭包 A closure is the closed-over **variable environment** of the eexecution context **in which a function was created**, even after that execution context is gone;
2. A closure gives a function access to all the variables **of its parernt function**, even **after** that parent function has returned. The function keeps a **reference** to its outer scope, which **preserves** thhe scope chain throughout time.
3. A closure makes sure that a function doesn't loose connectionto **variables that existed at the function's birth place;**（像是一个离开家乡的人并不会失去和他的家乡的联系。）
4. A closure is like a backpack that a function carries around whenrever it goes. This backpack has all the **variables that were present in the environment where the function was created**

5. A function has access to the variable environment (VE) of theexecution context in which it was created。任何函数总是可以访问变量环境创建函数的执行上下文，即使创建它的那个变量环境已经消失。
6. Closure: VE attached to the function, exactly as it was at the ttime and place the function was created.闭包就是依附到函数上的变量环境，和函数创建的时间地点完全相同。
7. 由于闭包，函数不会失去和函数创建所在地的变量的链接。
8. We do **NOT** have to manually create closures, this is a JavaScript feature that happens automatically. We can't even access closed-over variables explicitly. A closure is **NOT** a tangible JavaScript object



## DOM

### How Dom really works?

1. Allows us to make JavaScript interact with the browser;
2. We can write JavaScript to create, modify and delete HTML elerments;set styles, classes and attributes; and listen and respond to events
3. DOM tree is generated from an HTML document, which we can then interact with;
4. DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree.



![DOM](../img/DOM.png "DOM")



## Asynchronous

### Promise

<img src="../img/promise.png" alt="The promise lifecycle" style="zoom:50%" >



### How Asynchronous JavaScript works behind the scene

<img src="../img/asynchronousWorks.png" alt="How Asynchronous works" style="zoom:50%" >





## 5. 标准库

### 5.1 Object 对象

#### 概述

Object 原生提供 Object 对象，除此以外，所有其他对象都是 Object 对象的实例，即都继承 Object。

Object 对象的原生方法分两类：Object 静态方法（就定义在 Object 对象底下，是自己的）+ Object 的实例方法（继承来的，不是自己的）

### Object() 和 new Object()

`Object(foo)` ，一个工具方法，把任何值转换成对象，参数是原始类型转成对应包装对象的实例，参数是对象不用转换。`new Object(foo)` 用法完全一样，唯一区别在于前者直接硬转，后者重新生成一个。

### 5.2 属性描述对象

#### 概述	

JavaScript 内部有一个针对属性的数据结构叫 "arrtibute object"，用来描述对象的属性，控制它的行为，比如该属性是否可写、可遍历等等，每一个属性都有，里面有一堆方法，用到再看。

### 5.3 Array 对象

#### 构造函数

```javascript
var arr = new Array(2);
```

作用就是生成新数组，但方法规则很乱，尽量别用，就老老实实使用数组字面量。

#### 静态方法

`Array.isArray` 方法返回一个布尔值，表示参数是否为数组。它可以弥补 `typeof` 运算符的不足，`typeof` 运算符只能显示数组的类型是 `Object`，而 `Array.isArray` 方法可以识别数组。。

#### 实例方法

```javascript
// 1.valueOf，数组的 valueOf 方法返回数组本身。
var arr = [1, 2, 3];
arr.valueOf() // [1, 2, 3]

// 数组的 toString 方法返回数组的字符串形式
var arr = [1, 2, 3, [4, 5, 6]];
arr.toString() // "1,2,3,4,5,6"

// 2.push() pop() 都会改变原数组，“后进先出”的栈结构（stack）
// push方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。
var arr = [];
arr.push(1) // 1
arr.push('a') // 2

// pop方法用于删除数组的最后一个元素，并返回该元素。
var arr = ['a', 'b', 'c'];
arr.pop() // 'c'

// 3.shift()，unshift() 都会改变原数组
// shift()方法用于删除数组的第一个元素，并返回该元素
var a = ['a', 'b', 'c'];
a.shift() // 'a'
a // ['b', 'c']

// unshift()方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度
var arr = [ 'c', 'd' ];
arr.unshift('a', 'b') // 4
arr // [ 'a', 'b', 'c', 'd' ]

// 4.join() 指定参数作为分隔符，将所有数组成员连接为一个字符串返回。默认用逗号分隔。
var a = [1, 2, 3, 4];

a.join(' ') // '1 2 3 4'
a.join(' | ') // "1 | 2 | 3 | 4"
a.join() // "1,2,3,4"

//如果数组成员是undefined或null或空位，会被转成空字符串。
[undefined, null].join('#')
// '#'

['a',, 'b'].join('-')
// 'a--b'

// 5. concat() 用于多个数组的合并，将新数组的成员，添加到原数组后部，返回一个新数组，原数组不变。
['hello'].concat(['world'], ['!'])
// ["hello", "world", "!"]

[2].concat({a: 1})
// [2, {a: 1}]

// 6.reverse() 用于颠倒排列数组，返回改变后的数组。注意，该方法将改变原数组。
var a = ['a', 'b', 'c'];

a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]

// 7.slice() 用于提取目标数组的一部分，返回一个新数组，原数组不变。它的第一个参数为起始位置（从0开始，会包括在返回的新数组之中），第二个参数为终止位置（但该位置的元素本身不包括在内）。如果省略第二个参数，则一直返回到原数组的最后一个成员。
// slice()方法的一个重要应用，是将类似数组的对象转为真正的数组。
arr.slice(start, end);
var a = ['a', 'b', 'c'];

a.slice(0) // ["a", "b", "c"]
a.slice(1) // ["b", "c"]

// 如果slice()方法的参数是负数，则表示倒数计算的位置。
var a = ['a', 'b', 'c'];
a.slice(-2) // ["b", "c"]

// 8. 
```

### 5.4 包装对象

#### 定义

对象是 JavaScript 语言最主要的数据类型，三种原始类型的值——数值，字符串，布尔值在一定条件下，也能自动转换为对象，也就是转成原生对象。

包装对象的设计目的，首先是使得“对象”这种类型可以覆盖 JavaScript 所有的值，整门语言有一个通用的数据模型，其次是使得原始类型的值也有办法调用自己的方法。

这三个对象作为构造函数使用（带有`new`）时，可以将原始类型的值转为对象；作为普通函数使用时（不带有`new`），可以将任意类型的值，转为原始类型的值。

#### 实例方法

valueOf()：返回那个原始类型的值。

toString()：返回对应的字符串形式。

#### 原始类型与实例对象的自动转换

某些场合，原始类型的值会自动当作包装对象调用，即调用包装对象的属性和方法。这时，JavaScript 引擎会自动将原始类型的值转为包装对象实例，并在使用后立刻销毁实例。

```javascript
var s = 'Hello World';
s.x = 123;
s.x // undefined
```

调用结束后，包装对象实例会自动销毁。这意味着，下一次调用字符串的属性时，实际是调用一个新生成的对象，而不是上一次调用时生成的那个对象，所以取不到赋值在上一个对象的属性。如果要为字符串添加属性，只有在它的原型对象`String.prototype`上定义

#### 自定义方法

除了原生的实例方法，包装对象还可以自定义方法和属性，供原始类型的值直接调用。

### 5.5 Boolean 对象

```javascript
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean('') // false
Boolean(NaN) // false
```

### 5.6 Number 对象

包括静态属性和实例方法（继承了prototype），用到再看。

### 5.7 String 对象

有静态方法，实例属性，实例方法，用到再看。

## 7. 异步操作

### 7.1 概述

#### 单线程模型

JavaScript 只在一个线程上运行（JavaScript引擎有多个线程），只能同时执行一个任务，其他任务都在后面排队。

事件循环（Event Loop）：挂起处于等待中的任务，先运行排在后面的任务。等到 IO 操作返回了结果，再回过头，把挂起的任务继续执行下去。

#### 同步任务和异步任务

程序里面所有的任务，可以分成两类：同步任务（synchronous）和异步任务（asynchronous）。

#### 任务队列和事件循环

JavaScript 运行时，除了一个正在运行的主线程，引擎还提供一个任务队列（task queue），里面是各种需要当前程序处理的异步任务。（实际上，根据异步任务的类型，存在多个任务队列。为了方便理解，这里假设只存在一个队列。）

#### 异步操作的几种模式

1. 回调函数，优点是简单、容易理解和实现，缺点是不利于代码的阅读和维护，各个部分之间高度[耦合](https://en.wikipedia.org/wiki/Coupling_(computer_programming))（coupling），使得程序结构混乱、流程难以追踪（尤其是多个回调函数嵌套的情况），而且每个任务只能指定一个回调函数。
2. 事件监听，这种方法的优点是比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以“[去耦合](https://en.wikipedia.org/wiki/Decoupling)”（decoupling），有利于实现模块化。缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。
3. 发布/订阅模式，事件完全可以理解成“信号”，如果存在一个“信号中心”，某个任务执行完成，就向信号中心“发布”（publish）一个信号，其他任务可以向信号中心“订阅”（subscribe）这个信号，从而知道什么时候自己可以开始执行。

## 8. DOM

### 8.1 DOM 概述

#### 概述

DOM 是 JavaScript 操作网页的**接口规范**，全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为一个JavaScript 对象，从而可以用脚本进行各种操作（比如增删内容）。

浏览器会根据 DOM 模型，将结构化的文档（比如HTML 和 XML） 解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。

DOM 只是一个接口规范，可以用各种语言实现，所以严格来说，DOM 不是JavaScript 语法的一部分，只是最常用于 DOM 操作的语言。但是 DOM 操作是 JavaScript 最常见的任务，离开了 DOM，JavaScript 就无法控制网页。

####  节点

DOM 的最小组成单位叫做节点（node），共有七种节点，浏览器原生提供一个节点对象（Node），七种节点都继承了 Node，所以会有一些共同的属性和方法。文档的树形结构（DOM 树），就是由各种不同类型的节点组成。每个节点可以看作是文档树的一片叶子。

#### DOM 树

一个文档的所有节点，按照所在的层级，可以抽象成一种树状结构，DOM 树。

浏览器原生提供`document`节点，代表整个文档。文档的第一层有两个节点，第一个是文档类型节点（`<!doctype html>`），第二个是 HTML 网页的顶层容器标签`<html>`。后者构成了树结构的根节点（root node），其他 HTML 标签节点都是它的下级节点。

除了根节点，其他节点都有三种层级关系。

- 父节点关系（parentNode）：直接的那个上级节点
- 子节点关系（childNodes）：直接的下级节点
- 同级节点关系（sibling）：拥有同一个父节点的节点

DOM 提供操作接口，用来获取这三种关系的节点。比如，子节点接口包括`firstChild`（第一个子节点）和`lastChild`（最后一个子节点）等属性，同级节点接口包括`nextSibling`（紧邻在后的那个同级节点）和`previousSibling`（紧邻在前的那个同级节点）属性。

### 8.2 Node 接口

所有 DOM 节点对象都继承了 Node 接口，拥有一些共同的属性和方法。这是 DOM 操作的基础。（用到再看）

### 8.3 NodeList ，HTMLCollection 接口

#### 概述

节点都是单个对象，有时需要一种数据结构，能够容纳多个节点。DOM 提供两种节点集合，用于容纳多个节点：`NodeList` 和`HTMLCollection`。

这两种集合都属于接口规范。许多 DOM 属性和方法，返回的结果是`NodeList`实例或`HTMLCollection`实例。主要区别是，`NodeList`可以包含各种类型的节点，`HTMLCollection`只能包含 HTML 元素节点。

#### NodeList

`NodeList`实例是一个类似数组的对象，它的成员是节点对象，`NodeList`实例很像数组，可以使用`length`属性和`forEach`方法。但是，它不是数组，不能使用 `pop` 或 `push` 之类数组特有的方法，如果`NodeList`实例要使用数组方法，可以将其转为真正的数组。	

`Node.childNodes` 返回的是一个动态集合（动态集合就是一个活的集合，DOM 删除或新增一个相关节点，都会立刻反映在 NodeList 实例），其他的 NodeList 都是静态集合。

#### HTMLCollection

`HTMLCollection`是一个节点对象的集合，只能包含元素节点（element），不能包含其他类型的节点。它的返回值是一个类似数组的对象，但是与`NodeList`接口不同，`HTMLCollection`没有`forEach`方法，只能使用`for`循环遍历。

返回`HTMLCollection`实例的，主要是一些`Document`对象的集合属性，比如`document.links`、`document.forms`、`document.images`等。

`HTMLCollection`实例都是动态集合，节点的变化会实时反映在集合中。

### 8.4 ParentNode, ChildNode

#### 概述

`ParentNode`接口表示当前节点是一个父节点，提供一些处理子节点的方法。`ChildNode`接口表示当前节点是一个子节点，提供一些相关方法。

#### ParentNode

只有元素节点（element）、文档节点（document）和文档片段节点（documentFragment）拥有子节点，因此只有这三类节点会拥有`ParentNode`接口。

#### ChildNode

如果一个元素有父节点，也就有了ChildNode 接口。

## 9. 事件

事件的本质是程序**各个组成部分之间的一种通信方式**，也是异步编程的一种实现。

### 9.1 EventTarget 接口

DOM 节点的事件操作（监听和触发），都定义在`EventTarget`接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，`XMLHttpRequest`、`AudioNode`、`AudioContext`）也部署了这个接口。

该接口主要提供三个实例方法。

- `addEventListener()`：绑定事件的监听函数，一旦这个事件发生，就会执行监听函数。该方法没有返回值。
  - 该方法接受三个参数。
  - `type`：事件名称，大小写敏感。
  - `listener`：监听函数。事件发生时，会调用该监听函数。
  - `useCapture`：布尔值，如果设为`true`，表示监听函数将在捕获阶段（capture）触发（参见后文《事件的传播》部分）。该参数可选，默认值为`false`（监听函数只在冒泡阶段被触发）。

- `removeEventListener()`：移除事件的监听函数，移除`addEventListener()`方法添加的事件监听函数。该方法没有返回值。
- `dispatchEvent()`：触发事件

### 9.2 事件模型

#### 监听函数

浏览器的事件模型，就是通过监听函数（listener）对事件做出反应。事件发生后，浏览器监听到了这个事件，就会执行对应的监听函数。这是事件驱动编程模式（event-driven）的主要编程方式。

`EventTarget.addEventListener`是推荐的指定监听函数的方法。它有如下优点：

- 同一个事件可以添加多个监听函数。
- 能够指定在哪个阶段（捕获阶段还是冒泡阶段）触发监听函数。
- 除了 DOM 节点，其他对象（比如`window`、`XMLHttpRequest`等）也有这个接口，它等于是整个 JavaScript 统一的监听函数接口。

#### this 的指向 

监听函数内部的`this`指向触发事件的那个元素节点。

#### 事件的传播 

一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段。

- **第一阶段**：从 `window` 对象传导到目标节点（上层传到底层），称为捕获阶段（capture phase）。
- **第二阶段**：在目标节点上触发，称为“目标阶段”（target phase）。
- **第三阶段**：从目标节点传导回 `window` 对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。

#### 事件的代理

由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。

### 9.3 Event 对象

#### 概述

事件发生以后，会产生一个事件对象，作为参数传给监听函数。浏览器原生提供一个`Event`对象，所有的事件对象都是这个对象的实例，或者说继承了`Event.prototype`对象。

`Event`对象本身就是一个构造函数，可以用来生成新的实例。

```javascript
event = new Event(type, options);
```

`Event`构造函数接受两个参数。第一个参数`type`是字符串，表示事件的名称；第二个参数`options`是一个对象，表示事件对象的配置。该对象主要有两个属性：

- `bubble`：布尔值，可选，默认为`false`，表示事件对象是否冒泡。
- `cancelable`：布尔值，可选，默认`false`，表示事件是否可以被取消，即能否用`Event.preventDefault()`取消这个事件。一旦被取消，就不会触发浏览器对该事件的默认行为。

#### 实例属性与实例方法

用到再看

### 9.4

## 10 浏览器模型

### 10.1 概述

JavaScript 是浏览器的内置脚本语言。也就是说，浏览器内置了 JavaScript 引擎，并且提供各种接口，让 JavaScript 脚本可以控制浏览器的各种功能。

#### 代码嵌入网页的方法

#### Script 元素

##### 工作原理

浏览器加载 Javascript 脚本，主要通过`<script>`元素完成。

##### 正常网页加载流程

1. 浏览器一边下载 HTML 网页，一边开始解析。也就是说，不等到下载完成，就开始解析（渲染）。
2. 解析过程中，浏览器发现`<script>`元素，就暂停渲染，把网页渲染的控制权交给 JavaScript 引擎。
3. 如果`<script>`元素引用了外部脚本，就等待脚本下载完成后再执行，如果没有外部脚本，就直接执行`<script>`代码，这段时间内浏览器会暂停渲染，原因是 JavaScript 代码可以修改 DOM 所以把控制权转让，否则会导致复杂的线程竞赛问题。
4. JavaScript 引擎渲染执行完毕，把渲染的控制权交还浏览器，恢复往下解析 HTML 网页。

浏览器会同时并行下载`a.js`和`b.js`，但是，执行时会保证先执行`a.js`，然后再执行`b.js`，即使后者先下载完成，也是如此。也就是说，脚本的执行顺序由它们在页面中的出现顺序决定，这是为了保证脚本之间的依赖关系不受到破坏。当然，加载这两个脚本都会产生“阻塞效应”，必须等到它们都加载完成，浏览器才会继续页面渲染。

##### defer 属性

为了解决脚本文件下载阻塞网页渲染的问题，一个方法是对`<script>`元素加入`defer`属性。它的作用是延迟脚本的执行，等到 DOM 加载生成后，再执行脚本。**（并行下载，延迟执行）**

`defer`属性的运行流程如下。

1. 浏览器开始解析 HTML 网页。
2. 解析过程中，发现带有`defer`属性的`<script>`元素。
3. 浏览器继续往下解析 HTML 网页，同时并行下载`<script>`元素加载的外部脚本。
4. 浏览器完成解析 HTML 网页，此时再回过头执行已经下载完成的脚本。

##### async 属性

解决“阻塞效应”的另一个方法是对`<script>`元素加入`async`属性。（并行下载，下载完以后执行，无法保证顺序）

`async`属性的作用是，使用另一个进程下载脚本，下载时不会阻塞渲染。

1. 浏览器开始解析 HTML 网页。
2. 解析过程中，发现带有`async`属性的`script`标签。
3. 浏览器继续往下解析 HTML 网页，同时并行下载`<script>`标签中的外部脚本。
4. 脚本下载完成，浏览器暂停解析 HTML 网页，开始执行下载的脚本。
5. 脚本执行完毕，浏览器恢复解析 HTML 网页。

一般来说，如果脚本之间没有依赖关系，就可以使用`async`属性，如果脚本之间有依赖关系，就使用`defer`属性。如果同时使用`async`和`defer`属性，后者不起作用，浏览器行为由`async`属性决定。

##### 脚本动态加载

`<script>`元素还可以动态生成，生成后再插入页面，从而实现脚本的动态加载（基本不用）。

##### 加载使用的协议

如果不指定协议，浏览器默认采用 HTTP 协议下载，如果要采用 HTTPS 协议下载，必需写明。

```javascript
<script src="example.js"></script>

<script src="https://example.js"></script>
```

#### 浏览器的组成

浏览器的核心是两部分：渲染引擎和 JavaScript 解释器（又称 JavaScript 引擎）。

##### 渲染引擎

渲染引擎的主要作用是，将网页代码渲染为用户视觉可以感知的平面文档。

##### 重流和重绘

##### JavaScript 引擎

JavaScript 引擎的主要作用是，读取网页中的 JavaScript 代码，对其处理后运行。

JavaScript 是一种解释型语言，也就是说，它不需要编译，由解释器实时运行。这样的好处是运行和修改都比较方便，刷新页面就可以重新解释；缺点是每次运行都要调用解释器，系统开销较大，运行速度慢于编译型语言。

为了提高运行速度，目前的浏览器都将 JavaScript 进行一定程度的编译，生成类似字节码（bytecode）的中间代码，以提高运行速度。

现代浏览器改为采用“即时编译”（Just In Time compiler，缩写 JIT），即字节码只在运行时编译，用到哪一行就编译哪一行，并且把编译结果缓存（inline cache）。通常，一个程序被经常用到的，只是其中一小部分代码，有了缓存的编译结果，整个程序的运行速度就会显著提升。

字节码不能直接运行，而是运行在一个虚拟机（Virtual Machine）之上，一般也把虚拟机称为 JavaScript 引擎。并非所有的 JavaScript 虚拟机运行时都有字节码，有的 JavaScript 虚拟机基于源码，即只要有可能，就通过 JIT（just in time）编译器直接把源码编译成机器码运行，省略字节码步骤。这一点与其他采用虚拟机（比如 Java）的语言不尽相同。这样做的目的，是为了尽可能地优化代码、提高性能。
