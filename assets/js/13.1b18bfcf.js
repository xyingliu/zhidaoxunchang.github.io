(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{432:function(e,t,n){"use strict";n.r(t);var s=n(33),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("ol",[n("li",[e._v("在配置路由的 index.js 中给需要 token 页面的路由加上 mata 对象")])]),e._v(" "),n("p",[e._v("如：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" {\n    path: '/setResult',\n    name: 'appletSettingResult',\n    // 判断是否需要登录\n    meta: {\n        requireAuth: true,\n    },\n    component: r => require.ensure([], () => r(require('../components/appletSettings/appletSettingStep/appletSettingStepResult.vue'))),\n},\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("在 main.js 中加上一下判断是否已经存储 token 值")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 进入项目页面时判断是否有token，没有则跳转到登陆页\nrouter.beforeEach((to, from, next) => {\n    if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限\n        console.log('需要登录', to);\n        if (sessionStorage.getItem('token')) { // 判断当前的token是否存在 ； 登录存入的token\n            next();\n        }\n        else {\n            next({\n                path: '/signIn'\n            })\n        }\n    }\n    else {\n        next();\n    }\n})\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);