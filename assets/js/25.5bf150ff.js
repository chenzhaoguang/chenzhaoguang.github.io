(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{467:function(t,e,s){"use strict";s.r(e);var a=s(2),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[t._v("前言")]),t._v(" "),s("p",[t._v("最典型的一个react项目就是react-router+redux（可能再加上redux-thunk或saga），在hooks出来之后，redux也同步跟进加了很多hooks，但已经可以完全抛弃redux，仅仅使用useReducer等hooks来管理数据流了（大型、复杂项目的话，目前还是推荐redux）\n这个版本的代码"),s("a",{attrs:{href:"https://github.com/Thyiad/react-ssr/tree/tag-v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("在这"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"步骤"}},[t._v("步骤")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.keepjs.com/_posts/2020-06-05-react+ts%E6%90%AD%E5%BB%BA%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前文"),s("OutboundLink")],1),t._v("中已经配置好webpack了，接下来让我们配置react-router以及reducer")]),t._v(" "),s("h3",{attrs:{id:"react-router"}},[t._v("react-router")]),t._v(" "),s("p",[t._v("先安装依赖：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -S react-router-dom react-helmet\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("react-router-dom是基于react-router的库，里面加入了一些在浏览器运行环境下的功能，例如：Link、BrowserRouter、HashRouter。而其他的一些组件则是直接从react-router中导出的，例如：Switch、Route等等。\nreact-helmet用来动态改变title")]),t._v(" "),s("h3",{attrs:{id:"路由及布局"}},[t._v("路由及布局")]),t._v(" "),s("p",[t._v("路由及布局，就跟我们平时写的react应用是一样的，先写个最简单的就行，就不详细展开了，具体看代码即可，主要新增了3个文件：")]),t._v(" "),s("ul",[s("li",[t._v("routes.js 定义路由")]),t._v(" "),s("li",[t._v("layout 定义布局")]),t._v(" "),s("li",[t._v("RouteWithSubRoutes react-router的嵌套路由组件")])]),t._v(" "),s("h3",{attrs:{id:"插曲"}},[t._v("插曲")]),t._v(" "),s("p",[t._v("写了几个基础页面后，发现报这种错：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Module not found: Error: Can"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t resolve '")]),t._v("core-js/modules/es.array.slice' \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("看了一下package.json，果然，遗漏安装core-js了，因为@babel/preset-env依赖core-js，会跑到当前项目下去寻找core-js\n因为用到的是core-js3，所以我们安装core-js3：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i core-js@3\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"redux"}},[t._v("redux")]),t._v(" "),s("p",[t._v("接下来就是全局状态管理，以往我们都是用redux及react-redux，不过在有了useReducer和useContext之后，已经可以替代了")]),t._v(" "),s("blockquote",[s("p",[t._v("在hooks之前createContext配合Context.Consumer也能读取全局状态，只不过很不方便，"),s("a",{attrs:{href:"https://medium.com/@Whien/%E9%80%8F%E9%81%8E-react-usecontext-%E8%88%87-usereducer-%E4%BE%86%E5%81%9A-global-state-manager-bed30fb1f08b",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),s("OutboundLink")],1),t._v("讲的不错")])]),t._v(" "),s("p",[t._v("简单来说，使用useReducer和useContext来接管redux，主要有3步，示例代码如下：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("createContext创建一个全局context\n"),s("code",[t._v("js const Store = createContext(initState);")])])]),t._v(" "),s("li",[s("p",[t._v("使用上一步的context，导出Provider组件，value中传入useReducer的state及dispatch")])])]),t._v(" "),s("div",{staticClass:"language-ts line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useReducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reducer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("接下来就是传统的写法了，dispatch(action())，显然每个页面都这么写的话，还是挺繁琐的\n如果能像vue那样mapAction，直接调用action，那就方便多了")]),t._v(" "),s("blockquote",[s("p",[t._v("redux4中有一个bindActionCreators，跟mapAction作用类似传入action和dispatch，返回一个直接调用的action\n而且代码多了之后，肯定是需要拆分reducer及action的，所以我们可以这样进行拆分：")])]),t._v(" "),s("ul",[s("li",[t._v("建一个reducers文件夹")]),t._v(" "),s("li",[t._v("一个业务对应一个reducer文件，每个文件里定义actions、reducers")]),t._v(" "),s("li",[t._v("新增一个builder文件，遍历处理，将actions用dispatch包一层，reducers则简单合并，最后导出新的actions、一个新的root reducer")])]),t._v(" "),s("p",[t._v("结构如下：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("- redux\n    - reducers\n        - global.ts\n        - todo.ts\n        - index.ts\n    - builder.ts\n    - store.tsx\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("创建一个useRedux hooks，快捷使用state、dispatch\nconst {state, dispatch, actions} = useContext(Store);")])]),t._v(" "),s("p",[t._v("更具体的代码就不一行行展示了，在tag-v2中可以详细查看")]),t._v(" "),s("h2",{attrs:{id:"小结"}},[t._v("小结")]),t._v(" "),s("p",[t._v("可以看到，createContext+useContext+useReducer这3个react内置的api，已经足够应对小型项目的全局状态管理了")])])}),[],!1,null,null,null);e.default=r.exports}}]);