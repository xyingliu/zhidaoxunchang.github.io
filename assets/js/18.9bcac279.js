(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{460:function(a,s,t){"use strict";t.r(s);var e=t(33),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"_1-检查当前电脑是否有-ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-检查当前电脑是否有-ssh"}},[a._v("#")]),a._v(" 1. 检查当前电脑是否有 ssh")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ls -al ~/.ssh\n")])])]),t("h3",{attrs:{id:"配置域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置域名"}},[a._v("#")]),a._v(" 配置域名：")]),a._v(" "),t("ul",[t("li",[a._v("sudo vim /etc/hosts")]),a._v(" "),t("li",[a._v("i 进入编辑模式")]),a._v(" "),t("li",[a._v("输入域名")]),a._v(" "),t("li",[a._v("esc :wq 保存并退出")]),a._v(" "),t("li",[a._v("esc :q 退出")]),a._v(" "),t("li",[a._v("提示只读时：按键 esc 再输入 set noreadonly 再保存即可")]),a._v(" "),t("li",[a._v("pwd 显示当前目录")])]),a._v(" "),t("h3",{attrs:{id:"zip-压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zip-压缩"}},[a._v("#")]),a._v(" zip 压缩")]),a._v(" "),t("ul",[t("li",[a._v("zip [options] dest_files source")]),a._v(" "),t("li",[a._v("zip -r9 ~/zdd /home/zdd/* 将目录/home/zdd 下的所有文件压缩并放入当前目录下名为 zdd。-r 表示递归处理文件夹中的文件,9 表示最大压缩率。")])]),a._v(" "),t("h3",{attrs:{id:"unzip-解压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unzip-解压缩"}},[a._v("#")]),a._v(" unzip 解压缩")]),a._v(" "),t("ul",[t("li",[a._v("unzip -d ~/zdd zdd.zip 将 zdd.zip 解压到当前目录下的 zdd 目录中，-d 表示指定解压目录。")])]),a._v(" "),t("h3",{attrs:{id:"gzip-压缩-解压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gzip-压缩-解压缩"}},[a._v("#")]),a._v(" gzip 压缩/解压缩")]),a._v(" "),t("ul",[t("li",[a._v("gzip -d error_log.gz 将 error_log.gz 解压缩，-d 表示解压缩，解压缩后 error_log.gz 将不复存在。")])]),a._v(" "),t("h3",{attrs:{id:"阻止-npm-创建-package-lock-json-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阻止-npm-创建-package-lock-json-文件"}},[a._v("#")]),a._v(" 阻止 npm 创建 package-lock.json 文件")]),a._v(" "),t("p",[a._v("npm install --no-package-lock")]),a._v(" "),t("h3",{attrs:{id:"查看目录中的隐藏文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看目录中的隐藏文件"}},[a._v("#")]),a._v(" 查看目录中的隐藏文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ls -a\n")])])]),t("h3",{attrs:{id:"删除目录文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除目录文件"}},[a._v("#")]),a._v(" 删除目录文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rm -rf  .git\n")])])]),t("hr"),a._v(" "),t("p",[a._v("yarn 删除依赖")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yarn remove XXX\n")])])]),t("h3",{attrs:{id:"vscode中目录层级树打印"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vscode中目录层级树打印"}},[a._v("#")]),a._v(" vscode中目录层级树打印")]),a._v(" "),t("p",[a._v("命令行命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tree -I '*node_module*'\n\n")])])]),t("p",[a._v("-C：对 tree 显示的进行颜色显示，便于查看。\n-d： 只显示目录。\n-L：显示层级数量，关键参数。")])])}),[],!1,null,null,null);s.default=r.exports}}]);