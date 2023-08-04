(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{328:function(n,o,e){"use strict";e.r(o);var s=e(12),t=Object(s.a)({},(function(){var n=this,o=n._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h4",{attrs:{id:"_1-浏览器的渲染页面过程"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-浏览器的渲染页面过程"}},[n._v("#")]),n._v(" 1.浏览器的渲染页面过程")]),n._v(" "),o("ul",[o("li",[o("p",[n._v("a. 将HTML解析成html Dom树")])]),n._v(" "),o("li",[o("p",[n._v("b. 将CSS解析成css 规则树")])]),n._v(" "),o("li",[o("p",[n._v("c. 将html DOM树与css 规则树进行结合生成Render树")])]),n._v(" "),o("li",[o("p",[n._v("d. 布局")])]),n._v(" "),o("li",[o("p",[n._v("e. 绘制")]),n._v(" "),o("blockquote",[o("p",[n._v("注意:1.回流(reflow)：当浏览器发现某个部位发生了改变从而影响了布局，这个时候就需要倒回去重新渲染，这个过程就是reflow。常见的reflow有Tab切换,隐藏等。\n2.重绘(repaint)：就是当我们改变某个元素的背景色,文字颜色、边框颜色等等不影响它周围或内部布局的属性时,屏幕的一部分要重画,但是元素的几何尺寸和位置没有发生改变。eg:visibility:hidden\n减少回流:a.用transform做形变和位移;b.通过绝对位移来拖离层叠上下文，形成新的Render Layer。\n优化渲染效率:")])]),n._v(" "),o("ol",[o("li",[n._v("简化并优化CSS选择器，将嵌套层减少到最小")]),n._v(" "),o("li",[n._v("减少js对DOM操作")]),n._v(" "),o("li",[n._v("尽量用transform做形变和位移")])]),n._v(" "),o("blockquote",[o("p",[n._v("为什么要把CSS放在head中？")])])])]),n._v(" "),o("p",[n._v("先加载默认，又加载样式，用户体验差，性能体验差")]),n._v(" "),o("p",[n._v("为什么要把script放在body最下面？")]),n._v(" "),o("p",[n._v("不会阻塞HTML结构渲染，可以拿到所有的HTML")]),n._v(" "),o("h4",{attrs:{id:"从输入url到得到html的详细过程"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到得到html的详细过程"}},[n._v("#")]),n._v(" 从输入url到得到html的详细过程？")]),n._v(" "),o("ol",[o("li",[n._v("DNS解析")]),n._v(" "),o("li",[n._v("客户端向服务器发送请求")]),n._v(" "),o("li",[n._v("服务器接受并响应请求")]),n._v(" "),o("li",[n._v("浏览器得到返回内容")])]),n._v(" "),o("h4",{attrs:{id:"window-onload和domcontentloaded的区别"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#window-onload和domcontentloaded的区别"}},[n._v("#")]),n._v(" window.onload和DOMContentLoaded的区别？")]),n._v(" "),o("ol",[o("li",[n._v("window.onload：页面的全部资源加载完才会执行，包括图片，视频")]),n._v(" "),o("li",[n._v("DOMContentLoaded DOM 渲染完即可执行，此时图片，视频没有加载完成")])]),n._v(" "),o("h4",{attrs:{id:"js事件机制"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#js事件机制"}},[n._v("#")]),n._v(" js事件机制")]),n._v(" "),o("p",[n._v("一、事件流（捕获，冒泡）")]),n._v(" "),o("p",[n._v("二、事件处理程序")]),n._v(" "),o("p",[n._v("三、事件对象")]),n._v(" "),o("p",[n._v("四、事件委托")]),n._v(" "),o("h4",{attrs:{id:"事件循环"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[n._v("#")]),n._v(" 事件循环")]),n._v(" "),o("p",[n._v('js单线程,从上往下执行，将所有代码放入执行栈中执行\n遇到异步函数将这个放入任务队列里面，先执行"执行栈"中的，\n"执行栈"执行完之后，再将任务队列里面的放入"执行栈"中执行，这个过程就叫事件循环')]),n._v(" "),o("h4",{attrs:{id:"任务队列里面包含哪些"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#任务队列里面包含哪些"}},[n._v("#")]),n._v(" 任务队列里面包含哪些？")]),n._v(" "),o("p",[n._v("宏队列与微队列组成了任务队列;\n任务队列将任务放入执行栈中执行")]),n._v(" "),o("p",[n._v("宏队列，macrotask，也叫tasks。\n异步任务的回调会依次进入macro task queue，等待后续被调用，\n这些异步任务包括：\nsetTimeout\nsetInterval\nsetImmediate (Node独有)\nrequestAnimationFrame (浏览器独有)\nI/O\nUI rendering (浏览器独有)")]),n._v(" "),o("p",[n._v("微队列，microtask，也叫jobs。\n异步任务的回调会依次进入micro task queue，等待后续被调用，\n这些异步任务包括：\nprocess.nextTick (Node独有)\nPromise\nObject.observe\nMutationObserver")]),n._v(" "),o("h4",{attrs:{id:"js执行顺序"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#js执行顺序"}},[n._v("#")]),n._v(" js执行顺序")]),n._v(" "),o("ol",[o("li")]),n._v(" "),o("p",[n._v("eg1：")]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("async function async1() {\n    console.log('async1 start');\n    await async2();\n    console.log('async1 end');\n}\nasync function async2() {\n    console.log('async2');\n}\n\nconsole.log('script start');\n\nsetTimeout(function() {\n    console.log('setTimeout');\n}, 0)\n\nasync1();\n\nnew Promise(function(resolve) {\n    console.log('promise1');\n    resolve();\n}).then(function() {\n    console.log('promise2');\n});\nconsole.log('script end');\n")])])]),o("p",[n._v("结果:\nconsole.log('script start');\nconsole.log('async1 start');\nconsole.log('async2');\nconsole.log('promise1');\nconsole.log('script end');\nconsole.log('async1 end');\nconsole.log('promise2');\nconsole.log('setTimeout');")]),n._v(" "),o("p",[n._v("eg2:\nconsole.log('script start');\nsetTimeout(function() {\nconsole.log('setTimeout');\n}, 0)\nnew Promise((resolve)=> {\nconsole.log('promise1');\nresolve();\n}).then(()=> {\nconsole.log('promise2');\n});\nconsole.log('script end');")]),n._v(" "),o("p",[n._v("结果:\nscript start\npromise1\nscript end\npromise2\nsetTimeout")]),n._v(" "),o("p",[n._v("eg3：\nsetTimeout(function() {\nconsole.log('setTimeout1');\n}, 0)")]),n._v(" "),o("p",[n._v("setTimeout(function() {\nconsole.log('setTimeout2');\n}, 1000)\n结果:\nsetTimeout1\nsetTimeout2")]),n._v(" "),o("p",[n._v("eg4:\nconsole.log('start');\nsetTimeout(()=>{\nconsole.log('setTimeout');\n},0);\nconsole.log('end');\n结果:\nstart\nend\nsetTimeout")]),n._v(" "),o("p",[n._v("js单线程,从上往下执行，将所有代码放入执行栈中执行\n遇到异步函数将这个放入任务队列里面，先执行\"执行栈\"中的，\n\"执行栈\"执行完之后，再将任务队列里面的放入\"执行栈\"中执行，这个过程就叫事件循环\neg5:\nsetTimeout(()=>{\nconsole.log('a');\n},0);\nnew Promise((resolve)=>{\nconsole.log('b');\nresolve();\n}).then(()=>{\nconsole.log('c')\n});\n结果:b c a")]),n._v(" "),o("p",[n._v("async function async1() {\nconsole.log('async1 start');\nawait async2();\nconsole.log('async1 end');\n}\n等价于:\naysnc function aysnc1() {\nconsole.log('async1 start');\nPromise.resolve(async2()).then(() =>{\nconsole.log('async1 end');\n})\n}")]),n._v(" "),o("p",[n._v("宏队列与微队列组成了任务队列;\n任务队列将任务放入执行栈中执行")]),n._v(" "),o("p",[n._v("宏队列，macrotask，也叫tasks。\n异步任务的回调会依次进入macro task queue，等待后续被调用，\n这些异步任务包括：\nsetTimeout\nsetInterval\nsetImmediate (Node独有)\nrequestAnimationFrame (浏览器独有)\nI/O\nUI rendering (浏览器独有)")]),n._v(" "),o("p",[n._v("微队列，microtask，也叫jobs。\n异步任务的回调会依次进入micro task queue，等待后续被调用，\n这些异步任务包括：\nprocess.nextTick (Node独有)\nPromise\nObject.observe\nMutationObserver")]),n._v(" "),o("p",[n._v("eg6:\nconsole.log(1);\nsetTimeout(() => {\nconsole.log(2);\nPromise.resolve().then(() => {\nconsole.log(3);\n});\n},0);")]),n._v(" "),o("p",[n._v("new Promise((resolve, reject) => {\nconsole.log(4);\nresolve(5);\n}).then(data => {\nconsole.log(data);\n});")]),n._v(" "),o("p",[n._v("setTimeout(() => {\nconsole.log(6);\n},0);")]),n._v(" "),o("p",[n._v("console.log(7);")]),n._v(" "),o("p",[n._v("结果:\n1 4 7 5 2 6 3")]),n._v(" "),o("p",[n._v("正确结果:\n1 4 7 5 2 3 6")]),n._v(" "),o("p",[n._v("eg7:\nconsole.log(1);\nsetTimeout(() => {\nconsole.log(2);\nPromise.resolve().then(() => {\nconsole.log(3)\n});\n});")]),n._v(" "),o("p",[n._v("new Promise((resolve, reject) => {\nconsole.log(4)\nresolve(5)\n}).then((data) => {\nconsole.log(data);")]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[n._v("Promise.resolve().then(() => {\n    console.log(6)\n}).then(() => {\n    console.log(7)\n    \n    setTimeout(() => {\n        console.log(8)\n    }, 0);\n});\n")])])]),o("p",[n._v("})")]),n._v(" "),o("p",[n._v("setTimeout(() => {\nconsole.log(9);\n})\nconsole.log(10);\n结果:\n1 10 4 5 6 2 3 6 7 9 8\n1 4 10 5 6 7 undefined 2 3 9 8")]),n._v(" "),o("p",[n._v("eg8:\nconsole.log(1);")]),n._v(" "),o("p",[n._v("new Promise((resolve, reject) => {\nconsole.log(4);\nresolve(5);\n}).then(data => {\nconsole.log(data);\n});")]),n._v(" "),o("p",[n._v("console.log(7);\n结果: 1 4 7 5")])])}),[],!1,null,null,null);o.default=t.exports}}]);