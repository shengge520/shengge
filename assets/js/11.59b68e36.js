(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{400:function(t,e,a){"use strict";a.r(e);var s=a(27),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[t._v("#")]),t._v(" List")]),t._v(" "),a("ul",[a("li",[t._v("List([int length]) 创建一个空数组或者 length 长度的数组")]),t._v(" "),a("li",[t._v("List.filled(int length,E fill,{bool growable:false}) 创建一个 list，每个元素共享相同的值，growable 表示是 list 长度是否可变，默认 false 固定长度")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = new List.filled(10, 1);\nprint(a);//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\n")])])]),a("ul",[a("li",[t._v("List.from(iterable elements,{bool growable:true})")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('List a = new List.from([1, "2", 3, 4]);\nprint(a);//[1, 2, 3, 4]\n')])])]),a("ul",[a("li",[t._v("List.generate(int length, E generator(int index) 创建一个元素，每个位置创建一个新对象")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\x3c!-- more --\x3e\nList a = new List.generate(10, (value) => value + 1);\nprint(a);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n")])])]),a("ul",[a("li",[t._v("List.unmodifiable(Iterable elements) 创建一个不可修改的 List")]),t._v(" "),a("li",[t._v("first List 中第一个元素")]),t._v(" "),a("li",[t._v("last List 中最后一个元素")]),t._v(" "),a("li",[t._v("length List 的长度")]),t._v(" "),a("li",[t._v("reversed 返回翻转 List 后的值，不改变原 List")]),t._v(" "),a("li",[t._v("add() 向数组中添加一个元素")]),t._v(" "),a("li",[t._v("addAll() 向数组中添加一个带有 Iterable 接口的类")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('List a = new List.from([1, "2", 3, 4]);\na.addAll([5, 6]);\nprint(a);// [1, 2, 3, 4, 5, 6]\n')])])]),a("ul",[a("li",[t._v("asMap() 返回一个不可修改的 Map,keys 为 List 顺序")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('List a = new List.from([1, "2", 3, 4]);\nMap b = a.asMap();\nprint(b);\nprint(a);\nCONSOLE:\n{0: 1, 1: 2, 2: 3, 3: 4}\n[1, 2, 3, 4]\n')])])]),a("ul",[a("li",[t._v("cast"),a("R",[t._v("() 如果 List 中所有类型满足 R,正常工作并返回 List，如果有一个不满足，将会抛出错误")])],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" List a = new List.from([1,\"2\", 3, 4]);\nprint(a.cast<int>());//抛出错误：type 'String' is not a subtype of type 'int' in type cas\n")])])]),a("ul",[a("li",[t._v("clear() 删除所有元素")]),t._v(" "),a("li",[t._v("fillRange(int start,int end,[E fillValue]) 在选择的范围插入一个新的元素")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = [1, 2, 3, 4];\na.fillRange(1, 3, 'test');\nprint(a);//[1, test, test, 4]\n")])])]),a("ul",[a("li",[t._v("getRange(int start,int end) 返回一个从 start 到 end 的 Iterable")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = [1, 2, 3, 4];\nprint(a.getRange(1, 3));//(2, 3)\nprint(a);//[1, 2, 3, 4]\n\n")])])]),a("ul",[a("li",[t._v("indexOf() 找到第一个满足条件的下标")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = [1, 2, 3, 4];\nprint(a.indexOf(3));//2\n")])])]),a("ul",[a("li",[t._v("indexWhere(bool test(E element),[int start=0]) 迭代 list，返回第一个满足条件的下标")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" List a = [1, 2, 3, 4];\nprint(a.indexWhere((value) => value % 2 == 0));//1\n")])])]),a("ul",[a("li",[t._v("insert(int index,E element) 在 index 处插入一个元素")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = [1, 2, 3, 4];\na.insert(2, 'JsKing');\nprint(a);//[1,2,JsKing,3,4]\n")])])]),a("ul",[a("li",[t._v("insertAll(int index,iterable"),a("E",[t._v(" iterable) 在 index 处插入一个数组")])],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = [1, 2, 3, 4];\na.insertAll(2, ['JsKing', 'good']);\nprint(a);//[1, 2, [JsKing, good], 3, 4]\n")])])]),a("ul",[a("li",[t._v("lastIndexOf(E element, [ int start ]) 类似 indexOf，迭代从后往前")]),t._v(" "),a("li",[t._v("lastIndexWhere(bool test(E element), [ int start ]) 类似 indexWhere，迭代从后往前")]),t._v(" "),a("li",[t._v("remove(Object value) 删除第一个匹配到的 value")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = [1, 2, 3, 4, 3];\na.remove(3);\nprint(a);// [1,2,4,3]\n")])])]),a("ul",[a("li",[t._v("removeAt(int index) 删除 index 处的数据")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = [1, 2, 3, 4, 3];\na.removeAt(3);\nprint(a);//[1, 2, 3, 3]\n")])])]),a("ul",[a("li",[t._v("removeLast() 删除最后一个数据")]),t._v(" "),a("li",[t._v("removeRange(int start,int end) 删除 start 到 end 处的数据")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = [1, 2, 3, 4, 3];\na.removeRange(2, 3);\nprint(a);//[1,2,4,3]\n")])])]),a("ul",[a("li",[t._v("removeWhere() 迭代数据，删除回调中返回 true 的数据")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = [1, 2, 3, 4, 3];\na.removeWhere((value) => value % 2 == 0);\nprint(a);//[1,3,3]\n")])])]),a("ul",[a("li",[t._v("replaceRange(int start,int end,iterable"),a("E",[t._v(" replacement) 删除 start 到 end 的数据插入 replacement")])],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = [1, 2, 3, 4, 3];\na.replaceRange(2, 4, [10, 11, 12, 13]);\nprint(a);//[1, 2, 10, 11, 12, 13, 3]\n")])])]),a("ul",[a("li",[t._v("retainWhere(bool test(E element)) 删除不满足条件的数据")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = [1, 2, 3, 4, 3];\na.retainWhere((value) => value % 2 == 0);\nprint(a);//[2, 4]\n")])])]),a("ul",[a("li",[t._v("setAll(int index,iterable"),a("E",[t._v(" iterable) 从 index 开始插入一个 iterable 数据（对比 insertAll)")])],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = [1, 2, 3, 4, 5];\na.setAll(2, ['JsKing', 'good']);\nprint(a); //[1, 2, JsKing, good, 5]\n")])])]),a("p",[t._v("它与 insertAll 的区别是 insertAll 不会删除原数组的值，setAll 会删除插入处一个或多个值")]),t._v(" "),a("ul",[a("li",[t._v("setRange(int start,int end,Iterable"),a("E",[t._v(" iterable,[int skipCount=0]) 从原数组 start 处开始到 end 结束替换一个 iterable，可选参数 skipCount 表示从 iterable 第 skipCount 处开始复制")])],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List<int> list1 = [1, 2, 3, 4];\nList<int> list2 = [5, 6, 7, 8, 9];\nlist1.setRange(1, 3, list2, 2);\nprint(list1.join(', ')); // 1, 7, 8, 4\n")])])]),a("ul",[a("li",[t._v("shuffle([Random random]) 随机排列 list")]),t._v(" "),a("li",[t._v("sort(int compare(E a,E b)) 排序,类似 js 中的 sort")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List<int> list = [1, 2, 3, 4, 9, 8, 7, 6];\nlist.sort((a, b) => a - b);\nprint(list);//[1, 2, 3, 4, 6, 7, 8, 9]\n")])])]),a("ul",[a("li",[t._v("sublist(int start,[int end]) 提取 list 数据")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List<int> list = [1, 2, 3, 4, 9, 8, 7, 6];\nprint(list.sublist(2, 5));\n")])])]),a("ul",[a("li",[t._v("contains(Object element) 比较原数组中是否包含 element")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List<int> list = [1, 2, 3, 4];\nList<int> list2 = [1, 2, 3, 4];\nprint(list.contains(1));//true\nprint(list2.contains(5));//false\n")])])]),a("ul",[a("li",[t._v("elementAt(int index) 返回 index 处的数据")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List<int> list = [1, 2, 3, 4];\nprint(list.elementAt(2));//3\n")])])]),a("ul",[a("li",[t._v("every(bool test(E element)) list 每一项是否满足条件")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List<int> list = [1, 2, 3, 4];\nList<int> list1 = [0, 2, 4, 6];\nprint(list.every((item) => item % 2 == 0));//false\nprint(list1.every((item) => item % 2 == 0));//true\n")])])]),a("ul",[a("li",[t._v("expand(Iterable"),a("T",[t._v(" f(E element)) 展开 list (类似 js 中的 flat)")])],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var pairs = [[1, 2], [3, 4]];\nvar flattened = pairs.expand((pair) => pair).toList();\nprint(flattened); // => [1, 2, 3, 4];\n\nvar input = [1, 2, 3];\nvar duplicated = input.expand((i) => [i, i]).toList();\nprint(duplicated); // => [1, 1, 2, 2, 3, 3]\n")])])]),a("ul",[a("li",[t._v("firstWhere(bool test(E element),{E orElse()}) 迭代元素返回第一个满足 test，如果没有，返回 orElse 调用结果")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var list = [1, 2, 2, 4];\nvar res = list.firstWhere((pair) => pair == 2);\nprint(res);//2\n")])])]),a("ul",[a("li",[t._v("fold"),a("T",[t._v("(T initialValue,T combine(T previousValue,E element)) 把 initialValue 作为初始值，迭代原数组，返回新的 value，类似 js 中的 reduce，eg:")])],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var value = initialValue;\nfor (E element in this) {\n  value = combine(value, element);\n}\nreturn value;\n")])])]),a("ul",[a("li",[t._v("followedBy(iterable"),a("E",[t._v(" other) 将 other 数据添加到原数组，返回 Iterable 类型")])],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = new List.from([1, 2, 3, 4]);\nIterable b = a.followedBy([1, 2, 3]);\nprint(b);//(1, 2, 3, 4, 1, 2, 3)\n")])])]),a("ul",[a("li",[t._v("forEach(void f(E element)) 迭代数组")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List list = [1, 2, 3, 4];\nlist.forEach((item) {\n    print(item);\n});\n//1,2,3,4\n")])])]),a("ul",[a("li",[t._v("join([String separator='']) 把数组转成字符串中间用 separator 隔开")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var list = [1, 2, 2, 4];\nvar res = list.join('*');\nprint(res);//1*2*3*4\n")])])]),a("ul",[a("li",[t._v("lastWhere(bool test(E element),{E orElse})")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var list = [1, 2, 2, 4];\nvar res = list.lastWhere((pair) => pair == 2);\nprint(res);//3\n")])])]),a("ul",[a("li",[t._v("map"),a("T",[t._v("(T f(E e)) 迭代数组并返回一个新的数组，新数组长度跟原数组长度一样")])],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var list = [1, 2, 2, 4];\nvar res = list.map((pair) => pair * 2);\nprint(res);//(2, 4, 4, 8)\n")])])]),a("ul",[a("li",[t._v("noSuchMethod(Invocation invocation) 访问不存在的方法或属性调用")]),t._v(" "),a("li",[t._v("reduce(E combine(E value,E element)) value 为初始值为原始数组第一项，后面是 combine 返回的项")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = new List.from([1, 2, 3, 4]);\nvar b = a.reduce((a, b) {\n  print(a.toString() + ',' + b.toString());\n  return a + b;\n});\nprint(b);\n//1,2\n//3,3\n//6,4\n//10\n")])])]),a("ul",[a("li",[t._v("singleWhere(bool test(E element),{E orElse()}) 检查元素以查看是否 test(element)返回 true。如果只满足一个元素 test，则返回该元素。如果找到多个匹配元素，则抛出 StateError。如果未找到匹配元素，则返回结果 orElse。如果 orElse 省略，则默认为抛出 StateError")]),t._v(" "),a("li",[t._v("skip(int count) 返回原数组 count 后面的元素")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" List a = new List.from([1, 2, 3, 4]);\nprint(a.skip(2));//(3, 4)  //返回Iterable类型\nprint(a);//[1, 2, 3, 4]\n")])])]),a("ul",[a("li",[t._v("skipWhile(bool test(E value))")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = new List.from([1, 2, 3, 4]);\nprint(a.skipWhile((value) {\n  print(value);\n  if (value == 3) {\n    return false;\n  }\n  return true;\n}));\nprint(a);\n输出:\n1\n2\n3\n(3, 4)\n[1, 2, 3, 4]\n")])])]),a("ul",[a("li",[t._v("take(int count)")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = new List.from([1, 2, 3, 4]);\nprint(a.take(2));//(1,2)\n")])])]),a("ul",[a("li",[t._v("takeWhile(bool test(E value)) 遍历迭代器，直到找到 test 返回为 false 的元素，停止遍历返回找到的 iterable")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = new List.from([1, 2, 3, 4]);\nprint(a.takeWhile((value) => value != 2));\n//(1)\n")])])]),a("ul",[a("li",[t._v("toList({bool growable:true}) 将 Iterable 类转为 List")]),t._v(" "),a("li",[t._v("toSet() 将 Iterable 类及其子类转为 Set")]),t._v(" "),a("li",[t._v("toString()")]),t._v(" "),a("li",[t._v("where(bool test(E element)) 遍历元素，返回所有满足条件的元素,类似 js 中的 filter")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("List a = new List.from([1, 2, 3, 4]);\nprint(a.where((value) => value != 2));//（1，3，4）\n")])])]),a("ul",[a("li",[t._v("whereType"),a("T",[t._v("() 找到原 list 中带有 T 类型的元素")])],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('List a = new List.from([1, "2", 3, 4]);\nprint(a.whereType<String>());//(2)\n')])])])])}),[],!1,null,null,null);e.default=l.exports}}]);