(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{369:function(t,s,e){"use strict";e.r(s);var a=e(12),o=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"state与props区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state与props区别"}},[t._v("#")]),t._v(" state与props区别？")]),t._v(" "),s("ol",[s("li",[t._v("state可以看作组件的私有属性，用于组件内部的数据传递")]),t._v(" "),s("li",[t._v("props是组件对外的接口，用于组件之间的传值，props在组件内部是不可修改，可以看作只读属性")])]),t._v(" "),s("p",[t._v("扩展")]),t._v(" "),s("ol",[s("li",[t._v("setState是异步更新，同步执行。因为react中会将多个setState合并在一起处理，从而提升程序的性能，这就是react高明的其中一点")]),t._v(" "),s("li",[t._v("异步，就有回调函数\nsetState()函数有两个参数，第一个对象赋值，第二个就是它的回调啦。")])]),t._v(" "),s("p",[t._v('this.setState({count:this.state.count+1}, ()=>{\nconsole.log("count ",this.state.count);\n});')])])}),[],!1,null,null,null);s.default=o.exports}}]);