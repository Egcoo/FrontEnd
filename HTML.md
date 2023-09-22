# Front End

## HTML

1. html 是一个标记语言，代表着只是用来描述页面的内容
2. Semantic(语义化) 的 html search engine optimization
3. id 选择器和 class 选择器的最大的区别在于 id 选择器是唯一的。
4. 尽量使用 class 而不是 id：**we are making our code ready for the future,and ready for the protential change.**
5. 通用选择器不会被继承, margin 也不是一个可继承的属性, 通常我们只会使用 margin-top 或者 bottom 中的一个来创造垂直空间。
6. 将盒子模型的 css 代码放到前面，同时避免写太复杂的 css 选择器。
7. 当你需要一些元素内部的空间，尤其是背景颜色，使用 padding；在元素之外或者多个元素创造空间，使用 margin
8. block-level box vs inline box, 对于行元素宽度和高度的设置对其没有任何影响，padding 和 margin 仅适用于左右，也就是仅对水平起作用
9. inline-block boxex: 内部呈现为块元素，但在外部表现为行元素
   1. inline elements: 无法应用 text-again, ta 是使元素内部的文本居中，inline elements 总共占据的空间只是内容的空间。
10. 定位：元素默认都是 relative , 如果设置成 absolute，那么这个元素参照的对象默认是整个视口，如果有被设置为 relative 的父元素，那么参照的对象是第一个 relative 的父元素的容器。注意：不要用其来构建复杂的布局，我们一般对单个元素使用绝对定位，比如点赞之类的小东西。
11. pseudo element 伪元素选择器中最常用的就是 after 和 before ,而且伪元素一般都是 inline box, 想使用的话我们一般将其变成 inline-block box 行块盒。

## Conflicts between selectors

## CSS Layout

1. 网站的排列方式和放置方式就是网站上设计的布局
2. Layout is the way text, images and other content is placed and arranged on a webpage
3. Layout gives the page a visual structure, into which we place our content
4. Building a layout: arranging page elements into a visual structure, instead of simply having them placed one after another (normal flow)

## THE 3 WAYS OF BUILDING LAYOUTS WITH CSS

1. FLOAT LAYOUTS：The **old way of building layouts** of all sizes, using the float CSS property. Still used,but getting outdated fast.
2. FLEXBOX: Modern way of laying out elements in a 1-dimensional row without using floats.Perfect for component layouts.
3. CSS GRID: For laying out element in a fully-fledged 2-dimensional grid. Perfect for page layouts,and complex components.

### Float

1. 父元素的所有子元素都变成 Float，则会产生高度坍塌。
2. 解决方法两种，一个是加一个空的 div 元素, 第二种方法就是使用 clearfix Hack + 伪元素选择器

### Flexbox

1. 我们可以使用 css 的相关属性构建一维布局。
2. 设计时的主要思想是浏览器允许父元素中的子元素自动化分空白空间。
3. 方便实现自动对齐父容器中的子元素，无论水平还是垂直
4. 方便实现垂直居中和创建等高列。
5. 使用的时候问问自己你想应用的 Flex 元素是什么？或者说你想排版的元素在哪个父元素内？
6. flexbox 同样对于小组件构建的布局很好用
7. 同时可以改变 flex 容器的方向，会切换主轴与横轴

### CSS Grid

1. css grid 主要用于构建二维布局
2. 使用 css grid 我们可以把元素分为用其子元素填充的行和列 （跨行、跨列、重叠元素）
3. 可以编写更少的 html 和更易阅读的 css
4. css grid 和 flexbox 是协作关系，一维使用 flexbox， 二维使用 css grid

话语霸权 + 审美殖民

### CSS 创建动画的两种方式

1. transition 属性,opacity: 0 设置为某些属性不可见。
2. @keyframes 定制动画

### Web Design Components summarize

1. 既然 flexbox 非常方便，那么我们为什么不在定位上使用 flexbox？
   1. 首先我们并不会把定位当成 flexbox 元素
   2. 我们在定位一个元素的时候通常喜欢使用定位而不是 flexbox，那是定位的独特作用
   3. 特殊的 translate 属性为定位元素提供便利，flexbox 无法做到
   4. 无法在容器之外使用 flexbox
2. Position 的定位：使用定位元素分清楚到底是和父元素有关还是和元素本身有关
3. table 标签中独特的专有属性，两个边框重叠的时候使用 border-collapse: collapse 消除重叠边框
4. 完成程序之前的规划也很重要，一次完成一个功能，而不是东敲一榔头
5. Hero Section
   1. 可以单独创建一个容器类 container 使得所有文本居中
   2. background-image、background-size、vh 高度设置、
6. Web App Layout
   1. grid 里面嵌套 flexbox
   2. body 元素不会神奇地占据所有空间，只会占据内容本身所需要的内容
   3. 设置 margin-left/right 为 auto，是一个小技巧，让元素根据宽度改变
   4. flexbox 换主轴
   5. 不合适容器大小的元素如何出现 ：overflow: scroll; 如果和 flex 同时使用需要使用 flex-shrink: 0 属性，因为 flex 会自动收缩项目

## Omifood

### HOW REM AND MAX-WIDTH WORK

1. if the container width is larger than the specified max-width, then the width of the element is equal the value that was specified max-width. if the container width is less than the specified max-width , then the width of the element will be 100% of the container element width.

### Hero section

1. 可以单独创建一个容器类 hero, 指定最大宽度并且居中元素
2. box-shadow: inset 0 0 0 3px #fff;
3. transition 属性是一个允许我们，使用动画在两个值之间相互转换
4. 重复性的工作提炼出来，成为一个单独的属性
5. 使用 grid 处理大的布局，使用 flex 处理小的东西。
6. 处理边距的技巧：使用 flex 布局，并且让使得最后一个元素的 margin-xx 设置为 auto

---

###### 参考资料：

1. [讲 border-shadow 的文章](https://zhuanlan.zhihu.com/p/587750815)
2.

---

## SEO

### Introduction

What is SEO ?
SEO 代表搜索引擎优化，这是优化通过搜索引擎的自然搜索结果发现的内容的过程
Why is it Important？
三件事情使得 SEO 成为最佳流量来源

1. 与付费广告不同，搜索流量是免费的。
2. 一旦你的排名很高，给你的流量通常会持续很长时间。而社交媒体带来的热点通常也会很快消失。
3. 你有机会接触到大量受众。

How google works?

1. Crawling and indexation. 先爬取所有的网页数据，然后将所有的数据带回到 google 的服务器，然后添加到“搜索索引”中。
2. Google ranking algorithm. 1) 反向链接，也就是知名网站中的超链接 2）查询意图，返回最相关的结果 3）内容深度

### Moudle #1: Keyword research

What are Keywords ？

1. 关键词为搜索引擎的优化奠定了整个基础。

How to Choose Them？

1. 检查你的关键字是否有搜索需求。
2. 主题的流量潜力。排名前 10 的网站，几乎都有 1000 个关键词左右。仅仅根据指标选择关键字并不是一个好主意。
3. 评估关键字和主题的商业潜力。（搜索量、流量潜力、商业潜力）
4. 检查是否匹配搜索者的意图。
5. 为你设立的关键字排名。

如何分析搜索者意图？

1. Content type （Blog posts,videos, product pages, category pages, landing pages）
2. Content Format
3. content angle, It's basically your "hook" as to why someone should click and visit your page.

如何为您的网站查找关键字?

1. Generate keyword ideas

   1. Keyword Research Tools 1) Show you information on keywords 2)Search volume 3)Keyword difficulty scores 4) Other SEO metrics
   2. Informational:how、what、who、where、why、guide、tutorial、resource、help、ideas、tips、learn、examples。
   3. Navigational：brand names、name of a product、name of a service
   4. Commercial investigation：best、top、pricing、review、Attribute of a product、(size, color)、comparison
   5. Transactional：buy、coupon、order、[city] type of store(local)、purchase、cheap、price、pricing
   6. The best way to find these keywords is to look at pages that drive the most search traffic to your competitors' sites.

2. Validate whether those keywords are worth going after

如何了解排名的难度？

1. 先要了解你的对手是谁。
   1. Search intent
   2. Metrics of the top ranking pages and websites
   3. Topical authority of the top ranking websites
2. four question to understand your web rank
   1. Do some of the top-ranking pages fail to closely match search intent?
   2. Can I get more QUALITY backlinks than the top ranking pages?
   3. Is my website in a similar DR range OR higher than the top ranking websites?
   4. Is my website equally or MORE topically authoritative than the top ranking websites?

### Moudle #2: On-page SEO

搜索引擎优化不是什么？

1. 不是填充完全匹配的关键字。
2. 不是在页面上使用特定的次数。
3. 不是满足最低字数要求。

搜索引擎优化是什么？

1. 优化网页以在搜索引擎中排名更高的做法。
2. 满足人们所希望看到的内容
3. 需要确定更”有形“的项目，例如标题、副标题、内部链接、可读性、内容本身

### Moudle #3: Link Building

### Moudle #4: The basics of technical SEO

---

## 语义化

### 什么是语义化

1. 每一个 HTML 元素都有具体的含义
   a 元素:超链接
   p 元素:段落
   h1 元素:一级标题
   我们经常见到的 html 某些标签过期了，几乎都是出于语义化的考虑

2. 所有元素与展示效果无关

元素展示到页面中的效果,应该由 CSS 决定。
因为浏览器带有默认的 CSS 样式,所以每个元素有一些默认样式。
**重要：选择什么元素，取决于内容的含义，而不是内容显示出的效果**

### 为什么需要语义化？

1. 为了让搜索引擎优化（SEO）

搜索引擎:百度、搜搜、Bing、Google
每隔一段时间,搜索引擎会从整个互联网中,抓取页面源代码

2. 为了让浏览器理解网页
   阅读模式、语音模式

### span

- 没有语义，仅用于设置样式
- 以前:某些元素在显示时会独占一行(块级元素),而某些元素不会(行级元素)
- 到了 HTML5,已经弃用这种说法。

### pre

预格式化文本元素
空白折叠: 在源代码中的连续空白字符(空格、换行、制表),在页面显示 B 时,会被折叠为一个空格
例外:在 pre 元素中的内容不会出现空白折叠
在 pre 元素内部出现的内容,会按照源代码格式显示到页面上。
该元素通常用于在网页中显示一些代码。
pre 元素功能的本质:它有一个默认的 css 属性
显示代码时，通常外面套一个 code 元素

## HTML 实体

实体字符,
HTML Entity
实体字符通常用于在页面中显示一些特殊符号。
1.&单词;
2.&#数字;

- 小于符号 &lt;

## a 元素

### href 属性

hyper reference(引用)

1. 普通链接：跳转地址
2. 锚链接：跳转某个锚点 id

- id 属性:全局属性,表示元素在文档中的唯一编号

3. 功能链接：点击以后触发某个功能性代码

- 执行 JS 代码，JavaScript
- 发送邮件,mailto: 要求用户计算机上安装有邮件发送软件:exchange
- 拨号,tel: 要求用户计算机上安装有拨号软件,或使用的是移动端访问

一些小 tricks：

1. a[href="chapter$"]\*6
2. ((h2[id="chapter$"]>{章节$})+p>lorem1000)\*6

### target 属性

表示跳转窗口的位置

target 的取值:

- \_self:在当前页面窗口中打开,默认值
- \_blank: 在新窗口中打开

## 路径

### 站内和站外

站内资源:当前网站的资源
站外资源:非当前网站的资源

## 绝对路径和相对路径

绝对路径是每次都从起点出发，去往目的地；而相对路径是从当前所在地出发。
站外资源:绝对路径

站内资源:相对路径

1. 绝对路径
   绝对路径的书写格式:

```
协议名://主机名:端口号/path
schema://host:port/path
互联网是一个巨大的城市，协议名表示用什么方法去，主机名表示在那个楼，端口号表示哪个楼的哪个房间，路径代表房间里第几个柜子的第几个抽屉。
```

协议名:http、https、file
主机名:域名、IP 地址
端口号:如果协议是 http 协议,默认端口号 80;如果协议是 https 协议,默认端口号为 443

2. 相对路径
   以./开头, ./表示当前资源所在的目录
   可以书写../表示返回上一级目录
   相对路径中:
   ./可以省略

### 和 figure 元素联合使用

指代、定义,通常用于把图片、图片标题、描述包裹起来
子元素:figcaption

## 多媒体元素

### video

controls:控制控件的显示,取值只能为 controls
某些属性,只有两种状态:1.不写 2.取值为属性名,这种属性叫做布尔属性
布尔属性,在 HTML5 中,可以不用书写属性值
autoplay:布尔属性,自动播放。
muted:布尔属性,静音播放。

### audio

和视频完全一致

### 兼容性

1. 旧版本的浏览器不支持这两个元素
2. 不同的浏览器支持的音视频格式可能不一致

### 定义列表

通常用于一些术语的定义
dl: definition list
dt: definition title
dd: definition description

## 容器元素

容器元素:该元素代表一个块区域,内部用于放置其他元素

### div 元素

没有语义

### 语义化容器元素

header: 通常用于表示页头,也可以用于表示文章的头部
footer: 通常用于表示页脚,也可以用于表示文章的尾部
article：通常用于表示整篇文章
section:通常用于表示文章的章节
aside:通常用于表示侧边栏，一些附加信息

## 元素间的包含关系

以前:块级元素可以包含行级元素,行级元素不可以包含块级元素,a 元素除外
元素的包含关系由元素的内容类别决定。

如何查询：标签名 + mdn

现在元素间的包含关系完全取决于所要嵌套内容的语义。

总结:

1. 容器元素中可以包含任何元素
2. a 元素中几乎可以包含任何元素
3. 某些元素有固定的子元素(ul>li,ol>li,dl>dt+dd)
4. 标题元素和段落元素不能相互嵌套,并且不能包含容器元素

## 为网页添加样式

### 术语解释

```CSS
h1{
  color:red;
  background-color:lightblue;
  text-align: center;
}
```

CSS 规则 = 选择器 + 声明块

### 选择器

选择器:选中元素
1.ID 选择器:选中的是对应 id 值的元素 2.元素选择器: 选择的范围太广了 3.类选择器

### 声明块

出现在大括号中
声明块中包含很多声明(属性),每一个声明(属性)表达了某某一方面的样式

### CSS 代码书写位置

1. 内部样式表
   书写在 style 元素中

2. 内联样式表,元素样式表 [常用于测试]
   直接书写在元素的 style 属性中

3. 外部样式表 [推荐]

将样式书写到独立的 css 文件中。

1).外部样式可以解决多页面样式重复的问题
2).有利于浏览器缓存,从而提高页面响应速度
3).有利于代码分离(HTML 和 CSS),更容易阅读和维护

<link rel="stylesheet" href="./css/index.css ">

## 常见的样式声明

1. color
   **预设值**:定义好的单词
   **三原色,RGB**:光学三原色(红、绿、蓝),每个颜色可以使用 0-255 之间的数字来表达,色值。
   rgb 表示法:
   rgb(0, 255, 0)
   hex(16 进制)表示法:#红绿蓝 [淘宝红：#ff4400]

2. background-color
3. font-size
   元素内部文字的尺寸大小
   1)px:像素,绝对单位,简单的理解为文字的高度占多少个像素素
   2)em:相对单位,相对于父元素的字体大小
   每个元素必须有字体大小,如果没有声明,则直接使用父元素的字体大小,如果没有父元素(html)
   ,则使用基准字号。

useragent,UA,用户代理(浏览器)

4. font-weight
   文字粗细程度,可以取值数字,可以取值为预设值

5. font-family
   文字类型,必须用户计算机中存在的字体才会有效。
   使用多个字体,以匹配不同环境
   sans-serif,非衬线字体

6. font-style

字体样式,通常用它设置斜体
i 元素,em 元素, 默认样式,是倾斜字体;实际使用中,通常用它表示一个图标(icon)

7. text-decoration

- a 元素
- del 元素:错误的内容
- s 元素:过期的内容

8. text-indent
   首行文本缩进

9. line-height
   每行文本的高度每行文本的高度,该值越大,每行文本的距离越大。
   设置行高为容器的高度,可以让**单行文本垂直居中**
   行高可以设置为纯数字,表示相对于当前元素的字体大小。

10. width

11. height

12. letter-space

文字间隙

13. text-align
    元素内部的水平排列方式

## 选择器

### 简单选择器

1. ID 选择器

```html
#id{ }
```

2. 元素选择器
3. 类选择器
4. 通配符选择器
5. 属性选择器
   根据属性名和属性值选中元素

6. 伪类选择器
   选中某些元素的某种状态
7. link:超链接未访问时的状态

8. visited:超链接未访问过后的状态

9. hover:鼠标悬停状态

```HTML
/*选中鼠标悬停时的a元素*/
  a:hover{
    color: red;
  }
```

4. active:激活状态,鼠标按下状态

爱恨法则:love hate

7. 伪元素选择器：用于生成子元素

before
after

### 选择器的组合

0. 并且
1. 后代元素 —— 空格
2. 子元素 —— >
3. 相邻兄弟元素 —— +
4. 后面出现的所有兄弟元素 —— ~

### 选择器的并列

多个选择器,用逗号分隔

## 层叠

声明冲突:同一个样式,多次应用到同一个元素
层叠:解决声明冲突的过程,浏览器自动处理 （权重计算）

### 1.比较重要性

重要性从高到底:
作者样式表:开发者书写的样式 1)作者样式表中的!important 样式 2)作者样式表中的普通样式 3)浏览器默认样式表中的样式

### 2.比较特殊性

看选择器
总体规则:选择器选中的范围越窄,越特殊

具体规则:通过选择器,计算出一个 4 位数(x x x x)

1. 千位:如果是内联样式,记 1,否则记 0
2. 百位:等于选择器中所有 id 选择器的数量
3. 十位:等于选择器中所有类选择器、属性选择器、伪类选择器的数量
4. 个位:等于选择器中所有元素选择器、伪元素选择器的数量

### 3.比较源次序

代码书写靠后的胜出

### 应用

1. 重置样式表
   书写一些作者样式,覆盖浏览器的默认样式
   重置样式表->浏览器的默认样式
   常见的重置样式表:normalize.css、reset.css、meyer.cSS

2. 爱恨法则
   主要是因为这几个伪类选择器重要程度一样，而且同一个时间点可能有多个样式应用到同一个元素上，
   根据原次序比较，书写代码靠后的胜出
   link > visited > hover > active

## 继承

子元素会继承父元素的某些 CSS 属性
通常,跟文字内容相关的属性都能被继承

## 属性值的计算过程

一个元素一个元素依次渲染,顺序按照页面文档的树形目录结构沟进行
渲染每个元素的前提条件:该元素的所有 CSS 属性必须有值
一个元素,从所有属性都没有值,到所有的属性都有值,这个计算过程,叫你故属性值计算过程

1. 确定声明值:参考样式表中没有冲突的声明,作为 CSS 属性值 作者样式表 浏览器默认样式表

2. 层叠冲突:对样式表有冲突的声明使用层叠规则,确定 CSS 属性值
3. 使用继承:对仍然没有值的属性,若可以继承,则继承父元素的值
4. 使用默认值。

特殊的两个 CSS 取值:

- inherit:手动(强制)继承,将父元素的值取出应用到该元素
- initial:初始值,将该属性设置为默认值

## 盒模型

box:盒子,每个元素在页面中都会生成一个矩形区域(盒子)
盒子类型:

1. 行盒,display 等于 inline 的元素
2. 块盒,display 等于 block 的元素
   行盒在页面中不换行、块盒独占一行

浏览器默认样式表设置的块盒:容器元素、h1~h6、p
常见的行盒:span、a、img、video、audio

### 盒子的组成部分

无论是行盒、还是块盒,都由下面几个部分组成,从内到外分别是

1. 内容 content
   width、height,设置的是盒子内容的宽高
   内容部分通常叫做整个盒子的 **内容盒 content-box**

2. 填充 padding
   盒子边框到盒子内容的距离
   padding-left、padding-right、padding-top、padding-bottom
   padding:简写属性
   padding:上右下左
   填充区+内容区= **填充盒 padding-box**

3. 边框 border

边框=边框样式+边框宽度+边框颜色
边框样式:border-style
边框宽度:border-width
边框颜色:border-color

边框+填充区+内容区= **边框盒 border-box**
content-box 的 width 不包括 padding 和 border
border-box 的 width 包括 padding 和 border

4. 外边距 margin

边框到其他盒子的距离
margin-top、margin-left、margin-right、margin-bottom
速写属性 margin

## 盒模型应用

### 改变宽高范围

默认情况下,width 和 height 设置的是内容盒宽高。

> 页面重构师:将 psd 文件(设计稿)制作为静态页面

衡量设计稿尺寸的时候,往往使用的是边框盒,但设置 width 和 height,则设置的是内容盒

1. 精确计算
2. CSS3: box-sizing

### 改变背景覆盖范围

默认情况下,背景覆盖边框盒
可以通过 background-clip 进行修改

### 溢出处理

overflow,控制内容溢出边框盒后的处理方式

### 断词规则

word-break,会影响文字在什么位置被截断换行
normal:普通。CJK 字符(文字位置截断),非 CJK 字符(单词位置截断)
break-all:截断所有。所有字符都在文字处截断
keep-all:保持所有。所有文字都在单词之间截断

### 空白处理

white-space: nowrap

## 行盒盒模型

常见的行盒:包含具体内容的元素
span、strong、em、i、i、img、video、audio a

### 显著特点

1.盒子沿着内容

1.盒子沿着内容沿伸 2.行盒不能设置宽高
调整行盒的宽高,应该使用字体大小、行高、字体类型，间接调整 3.内边距(填充区)
水平方向有效,垂直方向仅会影响背景,不会实际占据空间。

4.边框
水平方向有效,垂直方向仅会影响背景,不会实际占据空间。 5.外边距
水平方向有效,垂直方向不会实际占据空间。

### 行块盒

display:inline-block 的盒子 1.不独占一行 2.盒模型中所有尺寸都有效

### 空白折叠

空白折叠,发生在行盒(行块盒)内部或行盒(行块盒)之间

### 可替换元素和非可替换元素

大部分元素,页面上显示的结果,取决于元素内容,称为**非可替换元素**
少部分元素,页面上显示的结果,取决于元素属性,称为**可替音换元素**
可替换元素:img、video、audio

绝大部分可替换元素均为行盒。
可替换元素类似于行块盒,盒模型中所有尺寸都有效。

## 常规流

盒模型:规定单个盒子的规则
视觉格式化模型(布局规则):页面中的多个盒子排列规则

视觉格式化模型,大体上将页面中盒子的排列分为三种方式

1. 常规流
2. 浮动
3. 定位

### 常规流布局

常规流、文档流、普通文档流、常规文档流
所有元素,默认情况下,都属于常规流布局
总体规则:块盒独占一行,行盒水平依次排列
包含块(containing block):每个盒子都有它的包含块,包含块,包含块决定了盒子的活动范围。
绝大部分情况下:盒子的包含块,为其父元素的内容盒

**块盒**

1. 每个块盒的总宽度,必须刚好等于包含块的宽度

宽度的默认值是 auto

margin 的取值也可以是 auto,默认值 0

auto:将剩余空间吸收掉

width 吸收能力强于 margin

若宽度、边框、内边距、外边距计算后,仍然有剩余空间,该剩余空间被 margin-right 全部吸收

在常规流中,块盒在其包含快中居中,可以定宽、然后左右 margin 设置为 auto

2. 每个块盒垂直方向上的 auto 值

height:auto,适应内容的高度
margin:auto,表示 0

3. 百分比取值

padding、宽、margin 可以取值为百分比
以上的所有百分比相对于包含块的宽度。

高度的百分比:
1).包含块的高度是否取决于子元素的高度,设置百分比无效
2).包含块的高度不取决于子元素的高度,百分比相对于父元素高度

4. 上下外边距的合并
   两个常规流块盒,上下外边距相邻,会进行合并。
   两个外边距取最大值。

## 浮动

视觉格式化模型,大体上将页面中盒子的排列分为三种方式: 1.常规流 2.浮动 float 3.定位 position

### 应用场景

1.文字环绕 2.横向排列

### 浮动的基本特点

修改 float 属性值为:
left:左浮动,元素靠上靠左
right:右浮动,元素靠上靠右

默认值为 none

1. 当一个元素浮动后,元素必定为块盒(更改 display 属性为 blocck)
2. 浮动元素的包含块,和常规流一样,为父元素的内容盒

### 盒子尺寸

1. 宽度为 auto 时,适应内容宽度
2. 高度为 auto 时,与常规流一致,适应内容的高度
3. margin 为 auto,为 0.
4. 边框、内边距、百分比设置与常规流一样

### 盒子排列

1. 左浮动的盒子靠上靠左排列
2. 右浮动的盒子靠上靠右排列
3. 浮动盒子在包含块中排列时,会避开常规流块盒
4. 常规流块盒在排列时,无视浮动盒子
5. 行盒在排列时,会避开浮动盒子
6. 外边距合并不会发生

- 如果文字没有在行盒中,浏览器会自动生成一个行盒包裹文字，该行盒叫匿名行盒

### 高度坍塌

高度坍塌的根源:常规流盒子的自动高度,在计算时,不会考虑浮动动盒子（浮动盒子脱离了常规流）

清除浮动,涉及 CSS 属性:clear

- 默认值:none
- left:清除左浮动,该元素必须出现在前面所有左浮动盒子的下方
- right:清除右浮动,该元素必须出现在前面所有右浮动盒子的下方
- both:清除左右浮动,该元素必须出现在前面所有浮动盒子的下方
- **只要使用了浮动元素，必然要清除高度塌陷问题**

小 trick：div.movie-item\*30>(div.poster>a>img[src="./img/spiderman.jpg"])+(div.name>a>{ 蜘蛛侠：纵横宇宙})+(div.score>{9.4})

## 定位

定位:手动控制元素在包含块中的精准位置

### position 属性

- 默认值:static,静态定位(不定位)
- relative:相对定位
- absolute:绝对定位
- fixed:固定定位

一个元素,只要 position 的取值不是 static,认为该元素是一个定位元素。

定位元素会脱离文档流(相对定位除外)
一个脱离了文档流的元素:

1. 文档流中的元素摆放时,会忽略脱离了文档流的元素
2. 文档流中元素计算自动高度时,会忽略脱离了文档流的元素

### 相对定位

不会导致元素脱离文档流,只是让元素在原来位置上进行偏移。

可以通过四个 CSS 属性对设置其位置:

- left
- right
- top
- bottom

盒子的偏移不会对其他盒子造成任何影响。

### 绝对定位

1. 宽高为 auto,适应内容
2. 包含块变化:找祖先中第一个定位元素,该元素的填充盒为其包含块。若我不到,则它的包含块为整个网页(初始化包含块)

### 固定定位

其他情况和绝对定位完全一样。

**包含块不同:固定为视口(浏览器的可视窗口)**

### 定位下的居中

某个方向居中:

1. 定宽(高)
2. 将左右(上下)距离设置为 0
3. 将左右(上下)margin 设置为 auto
   绝对定位和固定定位中,margin 为 auto 时,会自动吸收剩余空间

### 多个定位元素重叠

堆叠上下文
设置 z-index,通常情况下,该值越大,越靠近用户
只有定位元素设置 z-index 有效

### 补充

- 绝对定位、固定定位元素一定是块盒
- 绝对定位、固定定位元素一定不是浮动
- 没有外边距合并
