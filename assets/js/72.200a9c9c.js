(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{364:function(t,n,s){"use strict";s.r(n);var a=s(12),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"第一题-判断一个单词是否是回文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一题-判断一个单词是否是回文"}},[t._v("#")]),t._v(" 第一题：判断一个单词是否是回文?")]),t._v(" "),n("ul",[n("li",[n("ol",[n("li",[t._v("方法一")])])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var str = '12345654321';\nfunction isPlain(item){\n    return item == item.split('').reverse().join();\n}\nconsole.log(isPlain(str));//true\n")])])]),n("ul",[n("li",[n("ol",{attrs:{start:"2"}},[n("li",[t._v("方法二:")])])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function isPlain(str){\n    var arr = [],\n        len = str.length,\n        len2 = Math.floor(len/2);\n       for(var i=0;i<len2;i++) {\n           if(str[i] == str[len-1-i]){\n               arr.push(str[i]);\n           }\n       } \n       return (arr.length == len2)? true: false;\n}\nconsole.log(isPlain(str1));//true\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("总结:\nMath.floor();//向下取整\nMath.ceil();//向上取整\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);