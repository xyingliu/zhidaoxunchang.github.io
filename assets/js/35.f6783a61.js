(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{452:function(a,t,e){"use strict";e.r(t);var s=e(33),l=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"path-join"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-join"}},[a._v("#")]),a._v(" path.join")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("path.join(__dirname, './img/abc.jpg')\n")])])]),e("p",[a._v("等价于")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("path.join(__dirname, '/img/abc.jpg')\n")])])]),e("ul",[e("li",[a._v("__dirname 统一路径为: 'D:\\test'")]),a._v(" "),e("li",[a._v("最终生成的路径为: 'D:\\test\\img\\abc.jpg'")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("path.join('/val1','/img/val2.jpg', '/img/abc.jpg','..')\n")])])]),e("ul",[e("li",[a._v("最终生成的路径为: 'D:\\test\\val1\\img\\abc.jpg'")])]),a._v(" "),e("p",[a._v("从上可以看出来,path.join 就是字符串拼接的意思")]),a._v(" "),e("hr"),a._v(" "),e("h3",{attrs:{id:"path-resolve"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-resolve"}},[a._v("#")]),a._v(" path.resolve")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\nlet myPath = path.resolve(__dirname,'/img/a.jpg');\nlet myPath2 = path.resolve(__dirname,'./img/a.jpg');\nlet myPathFoo1 = path.resolve('/foo/bar', './aa.jpg');\nlet myPathFoo2 = path.resolve('/foo/bar', '/file/aa.jpg');\n\nconsole.log(__dirname);\nconsole.log(myPath);\nconsole.log(myPath2);\nconsole.log(myPath3);\nconsole.log(myPath4);\n\n")])])]),e("ul",[e("li",[a._v("myPath 路径为: 'D:\\img\\o'")]),a._v(" "),e("li",[a._v("myPath2 路径为: 'D:\\test\\img\\o'")]),a._v(" "),e("li",[a._v("myPathFoo1 路径为: 'D:\\foo\\bar\\aa.jpg'")]),a._v(" "),e("li",[a._v("myPathFoo2 路径为: 'D:\\file\\aa.jpg'")])]),a._v(" "),e("p",[a._v("从上可以看出来,path.resolve 中的'/'指的是根路径\n其他指的是相对路径")])])}),[],!1,null,null,null);t.default=l.exports}}]);