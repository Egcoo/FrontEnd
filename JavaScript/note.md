# JavaScript


## js介绍

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
3. 数组、null 放进去返回值也是object
4. 

## 显示类型转换

2. Number(mix), parseInt(string , radix), parseFloat(string), toString(radix), String(mix), Boolean()
3. Number() 会想尽一切办法把括号里的内容转化为数，null -> 0, true -> 1, false -> 0, Number(undefined) 结果是NaN， 普通字符串结果 NaN
4. parseInt(string , 进制) 会将其中的内容转化为**整数**，如果是字符串的数从数字位开始截取到非数字位为止给你转化成数，如果是null，false，true直接NaN，如果 radix 不为空，**则以目标进制为基底转化成十进制。radix取值范围（2，36）**
5. parseFloat(string , 进制)：转化成正常小数，如果是字符串的数从数字位开始截取到非数字位为止给你转化成数
6. String(): 写任何东西都变成 string
7. Boolean() : 空串""是false，
8. toString(radix): toString作为一个函数，undefined 和 null 都不能用 tostring，如果 radix 不为空，则以当前进制为基底转化成目标进制(radix)。


## 隐式类型转换

1. isNaN() : 先把括号里的数字放到Number()里去转换，转化以后和NaN比对，如果相等则为 true **NaN != NaN**
2. ++/-- +/- : 先把括号里的数字放到Number() 里去转换
```javascript
    var a = +"abc";
    console.log(a + ":" + typeof(a));
    结果：NaN:number
```
3. + : 隐式类型转换时String，只要两侧有一个是String。
4. -*/% ： Number
5. && || ！：Boolean
6. \> < = : 字符串和数字比较的时候，调用 Number，多个数字和数字比较，一个一个来
7. == != ：调用 Boolean  
8. 不发生类型转换： === !== 强制比对


