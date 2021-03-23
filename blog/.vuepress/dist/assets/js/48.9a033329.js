(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{521:function(t,s,a){"use strict";a.r(s);var n=a(10),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("浏览器一般每开一个页面，就会启动一个渲染进程。渲染进程有多个线程，其中主线程非常繁忙，既要处理 DOM，又要计算样式，还要处理布局，同时还需要处理 JavaScript 任务以及各种输入事件。要让这么多不同类型的任务在主线程中有条不紊地执行，这就需要一个系统来统筹调度这些任务。")]),t._v(" "),a("h2",{attrs:{id:"单线程是如何处理任务的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程是如何处理任务的"}},[t._v("#")]),t._v(" 单线程是如何处理任务的")]),t._v(" "),a("p",[t._v("一个简单的场景，假设有一系列任务，比如")]),t._v(" "),a("ul",[a("li",[t._v("任务 1: 3+5")]),t._v(" "),a("li",[t._v("任务 2: 20 / 5")]),t._v(" "),a("li",[t._v("任务 3: 7 * 8")]),t._v(" "),a("li",[t._v("任务 4: 打印出任务 1、任务 2、任务 3 的运算结果")])]),t._v(" "),a("p",[t._v("现在在一个线程中去执行，那么就是按照顺序执行，假设用 C 语言来写，那就是")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MainThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  任务1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  任务2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  任务3")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  任务4")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"最终计算的值:%d,%d,%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("所有任务装进主线程里，等主线程执行时，这些任务会按照顺序依次执行，所有任务执行完后，线程就退出了（其实这里就是函数退出了）。")]),t._v(" "),a("p",[t._v("但并不是所有的任务都是在执行之前统一安排好的，大部分情况下，新的任务是在线程运行过程中产生的。比如在线程执行过程中，又接收到了一个新的任务要求计算“10+2”，那上面那种方式就无法处理这种情况了。")]),t._v(" "),a("p",[t._v("要想在线程运行过程中，能接收并执行新的任务，就需要采用事件循环机制。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  等待用户从键盘输入一个数字，并返回该输入的数字")]),t._v("\nint "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  int input_number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请输入'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  cin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("input_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" input_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\noid "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MainThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  任务1")]),t._v("\n  int num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  任务2")]),t._v("\n  int num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  任务3")]),t._v("\n  int num3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  任务4")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"最终计算的值:%d,%d,%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("相较于第一版的线程，这一版做了改进：")]),t._v(" "),a("ol",[a("li",[t._v("第一点，引入了循环机制，具体实现方式是在线程语句最后添加了一个 for 循环语句，线程会一直循环执行。")]),t._v(" "),a("li",[t._v("第一点，引入了事件，可以在线程运行过程中，等待用户输入的数字，等待过程中线程处于暂停状态，一旦接收到用户输入的信息，那么线程会被激活，然后执行相加运算，最后输出结果。")])]),t._v(" "),a("p",[t._v("通过引入事件循环机制，就可以让该线程“活”起来了，我们每次输入两个数字，都会打印出两数字相加的结果。")]),t._v(" "),a("h2",{attrs:{id:"处理其他线程发送过来的任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理其他线程发送过来的任务"}},[t._v("#")]),t._v(" 处理其他线程发送过来的任务")]),t._v(" "),a("p",[t._v("我们改进了线程的执行方式，引入了事件循环机制，可以让其在执行过程中接受新的任务。不过在第二版的线程模型中，所有的任务都是来自于线程内部的，如果另外一个线程想让主线程执行一个任务，利用第二版的线程模型是无法做到的。")]),t._v(" "),a("p",[t._v("渲染主线程会频繁接收到来自于 IO 线程的一些任务，接收到这些任务之后，渲染进程就需要着手处理，比如接收到资源加载完成的消息后，渲染进程就要着手进行 DOM 解析了；接收到鼠标点击的消息后，渲染主线程就要开始执行相应的 JavaScript 脚本来处理该点击事件。")]),t._v(" "),a("p",[t._v("一个通用模式是使用消息队列。一个通用模式是使用消息队列。在解释如何实现之前，我们先说说什么是消息队列，消息队列是一种数据结构，可以存放要执行的任务。它符合队列“先进先出”的特点，也就是说要添加任务的话，添加到队列的尾部；要取出任务的话，从队列头部去取。")]),t._v(" "),a("p",[t._v("改造可以分为三个步骤：")]),t._v(" "),a("ol",[a("li",[t._v("添加一个消息队列；")]),t._v(" "),a("li",[t._v("IO 线程中产生的新任务添加进消息队列尾部；")]),t._v(" "),a("li",[t._v("渲染主线程会循环地从消息队列头部中读取任务，执行任务。")])]),t._v(" "),a("p",[t._v("这样改造后，主线程执行的任务都全部从消息队列中获取。所以如果有其他线程想要发送任务让主线程去执行，只需要将任务添加到该消息队列中就可以了。")]),t._v(" "),a("p",[t._v("由于是多个线程操作同一个消息队列，所以在添加任务和取出任务时还会加上一个同步锁，这块内容也要注意下。")]),t._v(" "),a("h2",{attrs:{id:"处理其他进程发送过来的任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理其他进程发送过来的任务"}},[t._v("#")]),t._v(" 处理其他进程发送过来的任务")]),t._v(" "),a("p",[t._v("通过使用消息队列，我们实现了线程之间的消息通信。在 Chrome 中，跨进程之间的任务也是频繁发生的，那么如何处理其他进程发送过来的任务？")]),t._v(" "),a("p",[t._v("渲染进程专门有一个 IO 线程用来接收其他进程传进来的消息，接收到消息之后，会将这些消息组装成任务发送给渲染主线程。")]),t._v(" "),a("h2",{attrs:{id:"消息队列中的任务类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息队列中的任务类型"}},[t._v("#")]),t._v(" 消息队列中的任务类型")]),t._v(" "),a("p",[t._v("在浏览器里，消息队列中消息类型：输入事件（鼠标滚动、点击、移动）、微任务、文件读写、WebSocket、JavaScript 定时器等等。")]),t._v(" "),a("p",[t._v("除此之外，消息队列中还包含了很多与页面相关的事件，如 JavaScript 执行、解析 DOM、样式计算、布局计算、CSS 动画等。")]),t._v(" "),a("p",[t._v("以上这些事件都是在主线程中执行的，所以在编写 Web 应用时，你还需要衡量这些事件所占用的时长，并想办法解决单个任务占用主线程过久的问题。")]),t._v(" "),a("h2",{attrs:{id:"如何安全退出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何安全退出"}},[t._v("#")]),t._v(" 如何安全退出")]),t._v(" "),a("p",[t._v("当页面主线程执行完成之后，又该如何保证页面主线程能够安全退出呢？Chrome 是这样解决的，确定要退出当前页面时，页面主线程会设置一个退出标志的变量，在每次执行完一个任务时，判断是否有设置退出标志。")]),t._v(" "),a("p",[t._v("如果设置了，那么就直接中断当前的所有任务，退出线程。")]),t._v(" "),a("h2",{attrs:{id:"页面使用单线程的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面使用单线程的缺点"}},[t._v("#")]),t._v(" 页面使用单线程的缺点")]),t._v(" "),a("p",[t._v("页面线程所有执行的任务都来自于消息队列。消息队列是“先进先出”的属性，也就是说放入队列中的任务，需要等待前面的任务被执行完，才会被执行。鉴于这个属性，就有如下两个问题需要解决。")]),t._v(" "),a("p",[a("strong",[t._v("第一个问题是如何处理高优先级的任务。")])]),t._v(" "),a("p",[t._v("比如一个典型的场景是监控 DOM 节点的变化情况（节点的插入、修改、删除等动态变化），然后根据这些变化来处理相应的业务逻辑。一个通用的设计的是，利用 JavaScript 设计一套监听接口，当变化发生时，渲染引擎同步调用这些接口，这是一个典型的观察者模式。")]),t._v(" "),a("p",[t._v("不过这个模式有个问题，因为 DOM 变化非常频繁，如果每次发生变化的时候，都直接调用相应的 JavaScript 接口，那么这个当前的任务执行时间会被拉长，从而导致"),a("strong",[t._v("执行效率的下降。")])]),t._v(" "),a("p",[t._v("如果将这些 DOM 变化做成异步的消息事件，添加到消息队列的尾部，那么又会影响到监控的实时性，因为在添加到消息队列的过程中，可能前面就有很多任务在排队了。")]),t._v(" "),a("p",[t._v("这也就是说，如果 DOM 发生变化，采用同步通知的方式，会影响当前任务的执行效率；如果采用异步方式，又会影响到监控的实时性。")]),t._v(" "),a("p",[t._v("那该如何权衡效率和实时性呢？")]),t._v(" "),a("p",[t._v("针对这种情况，微任务就应用而生了，下面我们来看看微任务是如何权衡效率和实时性的。")]),t._v(" "),a("p",[t._v("通常我们把消息队列中的任务称为宏任务，每个宏任务中都包含了一个微任务队列，在执行宏任务的过程中，如果 DOM 有变化，那么就会将该变化添加到微任务列表中，这样就不会影响到宏任务的继续执行，因此也就解决了执行效率的问题。")]),t._v(" "),a("p",[t._v("等宏任务中的主要功能都直接完成之后，这时候，渲染引擎并不着急去执行下一个宏任务，而是执行当前宏任务中的微任务，因为 DOM 变化的事件都保存在这些微任务队列中，这样也就解决了实时性问题。")]),t._v(" "),a("p",[a("strong",[t._v("第二个是如何解决单个任务执行时长过久的问题。")])]),t._v(" "),a("p",[t._v("因为所有的任务都是在单线程中执行的，所以每次只能执行一个任务，而其他任务就都处于等待状态。如果其中一个任务执行时间过久，那么下一个任务就要等待很长时间。")]),t._v(" "),a("p",[t._v("如果在执行动画过程中，其中有个 JavaScript 任务因执行时间过久，占用了动画单帧的时间，这样会给用户制造了卡顿的感觉，这当然是极不好的用户体验。针对这种情况，JavaScript 可以通过回调功能来规避这种问题，也就是让要执行的 JavaScript 任务滞后执行。至于浏览器是如何实现回调功能的。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("浏览器里，js 是在主线程执行的，主线程还要执行很多任务，比如处理 DOM，计算样式，生成布局树，执行 js，所以 js 的执行任务的时间不可太长，否则就会卡死线程。【排版引擎 blink】 和【JavaScript 引擎 v8】都工作在渲染进程的主线程上并且是互斥的，因为主线程上某个时刻只能执行一个。")])])}),[],!1,null,null,null);s.default=r.exports}}]);