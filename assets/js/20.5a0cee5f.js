(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{476:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[s._v("前言")]),s._v(" "),n("p",[s._v("gyp是一种根据c++源代码编译的工具，node-gyp就是为node编译c++扩展的时候使用的编译工具。")]),s._v(" "),n("h2",{attrs:{id:"问题"}},[s._v("问题")]),s._v(" "),n("p",[s._v("一直有使用到bcrypt模块，而bcrypt依赖于node-gyp。但最近在windows部署却有奇怪的问题：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("error bcrypt@3.0.2 install: "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("node-pre-gyp "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --fallback-to-build"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"前提"}},[s._v("前提")]),s._v(" "),n("p",[s._v("需要安装Visual C++ Build Tools和python2.7，此处使用一行命令可以自动完成：\n"),n("code",[s._v("bash npm install --global --production windows-build-tools")])]),s._v(" "),n("h2",{attrs:{id:"究极原因"}},[s._v("究极原因")]),s._v(" "),n("p",[s._v("因为之前一直可以，而此次不可以，所以我真是懵逼，经过好一番资料查找，终于找到一个issue：\nhttps://github.com/nodejs/node-gyp/issues/1599")]),s._v(" "),n("p",[s._v("按照这位仁兄所述，貌似是因为node-gyp依赖旧版本的grpc，所以新版本的node下是无法编译成功的。然后我把node从12降到10（node最新稳定版是12，以前是10），就。。就OK了！~")]),s._v(" "),n("p",[s._v("真是蛋疼")])])}),[],!1,null,null,null);t.default=e.exports}}]);