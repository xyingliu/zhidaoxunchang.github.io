(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{444:function(e,t,a){"use strict";a.r(t);var n=a(33),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operators"}},[e._v("#")]),e._v(" Operators")]),e._v(" "),a("h4",{attrs:{id:"选择器类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器类"}},[e._v("#")]),e._v(" 选择器类")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("take")]),e._v(" "),a("ul",[a("li",[e._v("获取前几个数然后结束")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// interval三次之后打印complete\nconst time = interval(1000);\ntime.pipe(take(count)).subscribe({\n    next: (next) => {\n        console.log(next);\n    },\n    error: (error) => {\n        console.log(error);\n        if (count % 2 === 1) {\n            return error;\n        }\n    },\n    complete: () => {\n        console.log('complete');\n    },\n});\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// interval三次打印的结果\nconst time = interval(1000);\ntime.pipe(take(count)).subscribe((timer) => {\n    console.log('timter', timer);\n});\n")])])]),a("p",[e._v("** first **")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n")])])]),a("p",[e._v("** last **\n** takeLast **")]),e._v(" "),a("h4",{attrs:{id:"创建-observable-类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-observable-类"}},[e._v("#")]),e._v(" 创建 observable 类")]),e._v(" "),a("p",[e._v("create\nof\nfrom\nformEvent\nfromPromise\nnever\nempty\nthrow\ninterval\ntimer")]),e._v(" "),a("h4",{attrs:{id:"控制数据流类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制数据流类"}},[e._v("#")]),e._v(" 控制数据流类")]),e._v(" "),a("p",[e._v("// 当发生什么事件时终止订阅\ntakeUtil")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// 发生点击事件的时候中止操作\nconst click = fromEvent(document.body, "click");\nconst source = interval(1000).pipe(takeUntil(click));\n')])])]),a("p",[e._v("// 跳过 n 项操作\nskip")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const source = interval(1000).pipe(skip(3));\nsource.subscribe({\n    next: (next) => {\n        console.log(next);\n    },\n    error: (error) => {\n        console.log(error);\n        if (count % 2 === 1) {\n            return error;\n        }\n    },\n    complete: () => {\n        console.log('complete');\n    },\n});\n")])])]),a("p",[e._v("startWidth\nconcat\nmerge\ndelay\ndelayWhen\nthrottle\ndebounce\ndistinct\ndistinctUtileChanged")]),e._v(" "),a("p",[e._v("// 接收到传递的值之后等到一段时候，确认已经是最后一个值之后取消接收\ndebounce 在每次收到元素，他会先把元素 cache 住并等待一段时间，如果這段時間內已經沒有收到任何元素，則把元素送出；如果這段時間內又收到新的元素，則會把原本 cache 住的元素釋放掉並重新計時，不斷反覆。\ndebounceTime")]),e._v(" "),a("h4",{attrs:{id:"错误处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[e._v("#")]),e._v(" 错误处理")]),e._v(" "),a("p",[e._v("catch\nreturn\nretryWhen")]),e._v(" "),a("h4",{attrs:{id:"操作数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作数据"}},[e._v("#")]),e._v(" 操作数据")]),e._v(" "),a("p",[e._v("scan\nrepeat")]),e._v(" "),a("h4",{attrs:{id:"协调多个-observable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协调多个-observable"}},[e._v("#")]),e._v(" 协调多个 observable")]),e._v(" "),a("p",[e._v("combineLatest\nwithLatestFrom\nzip\nswitchMap\nmergeMap\nconcatMap")]),e._v(" "),a("h4",{attrs:{id:"改变数据流结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改变数据流结构"}},[e._v("#")]),e._v(" 改变数据流结构")]),e._v(" "),a("p",[e._v("concatAll\nmergeAll")]),e._v(" "),a("h4",{attrs:{id:"缓存类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存类"}},[e._v("#")]),e._v(" 缓存类")]),e._v(" "),a("p",[e._v("buffer\nwindow\nwindowToggle")])])}),[],!1,null,null,null);t.default=r.exports}}]);