(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{366:function(e,t,n){"use strict";n.r(t);var a=n(12),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h4",{attrs:{id:"react组件间通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react组件间通信"}},[e._v("#")]),e._v(" react组件间通信")]),e._v(" "),t("ol",[t("li",[e._v("父向子 props")]),e._v(" "),t("li",[e._v("子向父  利用自定义事件机制")]),e._v(" "),t("li",[e._v("同级/跨级    层层组件传递props/使用context")]),e._v(" "),t("li",[e._v("没有嵌套关系组件之间的通信: 自定义事件")])]),e._v(" "),t("h4",{attrs:{id:"react生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react生命周期"}},[e._v("#")]),e._v(" react生命周期")]),e._v(" "),t("p",[e._v("主要分为挂载、渲染、卸载")]),e._v(" "),t("ul",[t("li",[t("ol",[t("li",[e._v("挂载\nconstructor()  初始化数据\ncomponentWillMount() 服务端渲染(少)\nrender\ncomponentDidMount()")])])]),e._v(" "),t("li",[t("p",[e._v("2.渲染  更新数据\nshouldComponentUpdate(nextProps,nextState)  相当于[pureComponent]  组件是否需要更新 默认为true\ncomponentWillUpdate (nextProps,nextState)  组件将要更新\nrender\ncomponentDidUpdate(prevProps,prevState)   组件更新完成")])])]),e._v(" "),t("h4",{attrs:{id:"_1-1-shouldcomponentupdate-为false-只执行-shouldcomponentupdate-渲染时候其他不执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-shouldcomponentupdate-为false-只执行-shouldcomponentupdate-渲染时候其他不执行"}},[e._v("#")]),e._v(" 1.1 shouldComponentUpdate  为false  只执行  shouldComponentUpdate  渲染时候其他不执行")]),e._v(" "),t("p",[e._v("场景，父点击btn给子传参，子需要更新就设置为true(默认),不需要则设置为false")]),e._v(" "),t("p",[e._v("render()")]),e._v(" "),t("ul",[t("li",[e._v("3.卸载\ncomponentWillUnmount ()   组件即将销毁")])]),e._v(" "),t("h4",{attrs:{id:"react-createelement-与react-cloneelement-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react-createelement-与react-cloneelement-区别"}},[e._v("#")]),e._v(" React.createElement()与React.cloneElement()区别")]),e._v(" "),t("p",[e._v("React.createElement(\ntype,   //标签\n[props],\n[...children]\n)\nReact.cloneElement(\nelement,  //元素\n[props],\n[...children]\n)")])])}),[],!1,null,null,null);t.default=o.exports}}]);