(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1056:function(e,t,n){"use strict";n.r(t);var a=n(46),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"实现vue-中可编辑的-svg-icon-组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现vue-中可编辑的-svg-icon-组件"}},[e._v("#")]),e._v(" 实现Vue 中可编辑的 SVG  Icon 组件")]),e._v(" "),n("p",[e._v("当 "),n("code",[e._v("UI")]),e._v(" 给了多个 "),n("code",[e._v("svg")]),e._v(" 图标，前端需要根据不同条件渲染不同图标，并且图标的颜色要与周围文本的颜色一致，例如 "),n("code",[e._v("hover")]),e._v(" 状态下图标与字体的颜色都由 "),n("code",[e._v("black")]),e._v(" 改变为 "),n("code",[e._v("red")]),e._v("，这样的需求应该怎么实现？")]),e._v(" "),n("h2",{attrs:{id:"关于封装-svg-图标基础组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于封装-svg-图标基础组件"}},[e._v("#")]),e._v(" 关于封装 svg  图标基础组件")]),e._v(" "),n("p",[e._v("通常情况下，我们可以直接复制 "),n("code",[e._v("svg")]),e._v(" 文件内容到 "),n("code",[e._v("template")]),e._v(" 中，然后修改其 "),n("code",[e._v("fill")]),e._v(" 的颜色。")]),e._v(" "),n("p",[e._v("但这里我们需要对 "),n("code",[e._v("svg")]),e._v(" 做一个封装，写成一个 "),n("code",[e._v("IconBase.vue")]),e._v(" 文件如下（根据 "),n("code",[e._v("svg")]),e._v(" 格式抽象的组件，保留 "),n("code",[e._v("<svg>")]),e._v("标签，"),n("code",[e._v("path")]),e._v("  部分抽象出来，封装成组件，动态引入）。")]),e._v(" "),n("h3",{attrs:{id:"封装-iconbase-组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#封装-iconbase-组件"}},[e._v("#")]),e._v(" 封装 "),n("code",[e._v("IconBase")]),e._v(" 组件")]),e._v(" "),n("p",[e._v("封装后的 "),n("code",[e._v("IconBase")]),e._v(" 组件支持传入:")]),e._v(" "),n("ul",[n("li",[e._v("名称 "),n("code",[e._v("iconName")])]),e._v(" "),n("li",[e._v("宽度 "),n("code",[e._v("width")])]),e._v(" "),n("li",[e._v("高度 "),n("code",[e._v("height")])]),e._v(" "),n("li",[e._v("颜色 "),n("code",[e._v("iconColor")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<template>\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    :width="width"\n    :height="height"\n    viewBox="0 0 1024 1024"\n    :aria-labelledby="iconName"\n    role="presentation"\n  >\n    <title :id="iconName" lang="en">{{iconName}} icon</title>\n    <g :fill="iconColor">\n      \x3c!-- path 部分抽象出来，封装成组件，动态引入 --\x3e\n      <component v-bind:is="currentIcon" />\n    </g>\n  </svg>\n</template>\n\n<script>\nimport Vue from \'vue\'\nexport default {\n  props: {\n    iconName: {\n      type: String,\n      default: \'box\'\n    },\n    width: {\n      type: [Number, String],\n      default: 18\n    },\n    height: {\n      type: [Number, String],\n      default: 18\n    },\n    iconColor: {\n      type: String,\n      default: \'currentColor\'\n    }\n  },\n  data () {\n    return {\n      currentIcon: \'\'\n    }\n  },\n\n  created () {\n    this.getSvgIcon()\n  },\n  \n  methods: {\n    getSvgIcon () {\n      try {\n        this.registerComponent(this.iconName).then(component => {\n          this.currentIcon = component\n        })\n      } catch (error) {\n        // console.log(error)\n      }\n    },\n    /**\n      *@desc 统一加载注册组件资源\n    */\n    registerComponent (name) {\n      const files = require.context(\'@/components/icons/\', false, /\\.vue$/)\n      if (files.keys().includes(`./${name}.vue`)) {\n        return import(\'@/components/icons/\' + name).then(component => { //eslint-disable-line\n          return Vue.extend(component.default)\n        })\n      } else {\n        console.log(\'未找到icon组件\')\n      }\n    }\n  }\n}\n<\/script>\n\n<style scoped>\nsvg {\n  display: inline-block;\n  vertical-align: baseline;\n  margin-bottom: -2px; /* yes, I\'m that particular about formatting */\n}\n</style>\n\n')])])]),n("p",[e._v("这里动态加载组件资源的方法第二部分有解释。先接着说明抽象成动态组件后，组件到底是什么。")]),e._v(" "),n("h3",{attrs:{id:"动态引入和抽象出的组件到底是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态引入和抽象出的组件到底是什么"}},[e._v("#")]),e._v(" 动态引入和抽象出的组件到底是什么？")]),e._v(" "),n("p",[e._v("由于 "),n("code",[e._v("IconBase.vue")]),e._v(" 文件中是以动态组件的方式引入的，所以需要对 "),n("code",[e._v("svg")]),e._v(" 文件做处理，以 "),n("code",[e._v("vue")]),e._v(" 组件的方式引用，需要将用到的每一个 "),n("code",[e._v("svg")]),e._v(" 文件封装成如下结构：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<template>\n  <path\n    d="M484.266667 272.021333l6.634666 6.72c5.973333 5.973333 13.013333 12.842667 21.098667 20.629334l9.194667-8.917334c7.253333-7.04 13.44-13.184 18.56-18.432a193.28 193.28 0 0 1 277.44 0c75.904 77.525333 76.629333 202.794667 2.133333 281.194667L512 853.333333 204.672 553.237333c-74.474667-78.421333-73.770667-203.690667 2.133333-281.216a193.28 193.28 0 0 1 277.44 0z"\n  / >\n</template>\n\n')])])]),n("p",[e._v("同时需要注意的是最好将所有要用到的svg封装成的 vue 文件放在一个目录下，方便 "),n("code",[e._v("require.context()")]),e._v(" 使用。")]),e._v(" "),n("h3",{attrs:{id:"如何使用-iconbase-组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-iconbase-组件"}},[e._v("#")]),e._v(" 如何使用 "),n("code",[e._v("IconBase")]),e._v(" 组件？")]),e._v(" "),n("p",[e._v("组件封装完成后，使用方法如下，这里的 "),n("code",[e._v("IconLike")]),e._v(" 就是一个图标文件的文件名。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<template>\n  <div id="app">\n    <icon-base icon-name="IconLike"></icon-base>111\n  </div>\n</template>\n')])])]),n("p",[e._v("当添加 "),n("code",[e._v("hover")]),e._v(" 样式后，图标颜色随着文本颜色变化：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<style lang="stylus" scoped>\n#app\n  &:hover\n    color red\n</style>\n')])])]),n("h2",{attrs:{id:"关于动态加载组件资源的说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于动态加载组件资源的说明"}},[e._v("#")]),e._v(" 关于动态加载组件资源的说明")]),e._v(" "),n("p",[e._v("以上的例子中使用了动态加载组件的方式，这里详细说明一下动态加载组件的方法：")]),e._v(" "),n("p",[e._v("这里使用了另外一个 "),n("code",[e._v("demo")]),e._v(" 来说明，是之前做可视化大屏配置项目中使用到的。当选择 "),n("code",[e._v("echarts")]),e._v(" 的一项配置标题组件 "),n("code",[e._v("title")]),e._v(" ，下方就动态显示封装了 "),n("code",[e._v("title")]),e._v("  包含的所有配置项的表单组件。")]),e._v(" "),n("h3",{attrs:{id:"先说说使用动态加载组件的原因"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#先说说使用动态加载组件的原因"}},[e._v("#")]),e._v(" 先说说使用动态加载组件的原因")]),e._v(" "),n("p",[e._v("如图所示的功能改如何去做？第一想到的可能是"),n("code",[e._v("v-if")]),e._v("， "),n("code",[e._v("v-else-if")]),e._v("， "),n("code",[e._v("v-else")]),e._v("，但在条件多的时候会导致太冗余，页面看起来很复杂的问题。所以一方面为了简化代码，一方面为了减少手动 "),n("code",[e._v("import")]),e._v(" 组件的步骤，我们使用动态加载组件。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/29/172fe274172f319d?w=1462&h=946&f=png&s=110704",alt:""}})]),e._v(" "),n("h3",{attrs:{id:"使用动态加载组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用动态加载组件"}},[e._v("#")]),e._v(" 使用动态加载组件")]),e._v(" "),n("p",[e._v("那么如何做到根据选择的配置项显示对应的组件信息呢？ "),n("code",[e._v("vue")]),e._v(" 中提供了 "),n("code",[e._v("vue.extend()")]),e._v(" 方法以及 "),n("code",[e._v("is")]),e._v(" 的使用。")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("is")]),e._v(" 预期接收 "),n("code",[e._v("String| Object(组件的选项对象)")]),e._v(" 。当 "),n("code",[e._v("currentView")]),e._v(" 改变时，组件也跟着改变。点击 "),n("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#is",target:"_blank",rel:"noopener noreferrer"}},[e._v("is 官网介绍"),n("OutboundLink")],1),e._v(" 查看。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<template>\n    <component v-bind:is="currentView"></component>\n</template>\n')])])]),n("ul",[n("li",[e._v("同时我们需要 "),n("code",[e._v("Vue.extend(component.default)")]),e._v(" 去实现加载注册组件资源。为了优化功能，这里还做了未找到文件的报错处理机制，防止未能 "),n("code",[e._v("import")]),e._v(" 成功时的处理：")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/**\n  *@desc 响应下拉选择\n  */\nhandleChangeApi (value) {\n  try {\n    this.registerComponent(value).then(component => {\n      this.currentView = component\n    })\n  } catch (error) {\n      // 未找到相应文件报错处理\n  }\n}\n")])])]),n("h3",{attrs:{id:"使用-require-context-减少手动-import"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-require-context-减少手动-import"}},[e._v("#")]),e._v(" 使用 "),n("code",[e._v("require.context()")]),e._v(" 减少手动 "),n("code",[e._v("import")])]),e._v(" "),n("p",[e._v("这里使用到了 "),n("code",[e._v("require.context()")]),e._v("，可以去了解一下如何使用，这对于需要引入大量文件时比较有用。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/**\n  *@desc 用require.context()获取文件夹下所有文件，统一加载注册组件资源\n  */\nregisterComponent (name) {\n  const files = require.context('./form', false, /\\.vue$/) \n  if (files.keys().includes(`./${name}.vue`)) {\n    return import('./form/' + name).then(component => { \n      return Vue.extend(component.default)\n    })\n  } else {\n    this.$message.error('配置项暂不支持')\n  }\n}\n")])])]),n("p",[e._v("以上就是 "),n("code",[e._v("vue")]),e._v(" 中动态组件的使用方法了。")]),e._v(" "),n("p",[e._v("上述步骤就是 "),n("code",[e._v("Vue")]),e._v(" 中动态使用 "),n("code",[e._v("SVG")]),e._v("  图标的说明。最后插入一个小经验，关于 "),n("code",[e._v("vue")]),e._v(" 父组件向子组件如何传递图片变量。")]),e._v(" "),n("h2",{attrs:{id:"其他代替方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他代替方案"}},[e._v("#")]),e._v(" 其他代替方案")]),e._v(" "),n("p",[e._v("其它帮助你管理 SVG 图标的工具有：")]),e._v(" "),n("h3",{attrs:{id:"vue-svg-icon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-svg-icon"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cenkai88/vue-svg-icon",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-svg-icon"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"svg-sprite-loader"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#svg-sprite-loader"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/JetBrains/svg-sprite-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("svg-sprite-loader"),n("OutboundLink")],1)]),e._v(" "),n("h3",{attrs:{id:"svgo-loader"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#svgo-loader"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/rpominov/svgo-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("svgo-loader"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"vue父组件如何向子组件传递图片变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue父组件如何向子组件传递图片变量"}},[e._v("#")]),e._v(" vue父组件如何向子组件传递图片变量？")]),e._v(" "),n("p",[e._v("通常我们会使用以下代码在 "),n("code",[e._v("vue")]),e._v(" 中动态引入图片：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<img :src=\"require('../../assets/happy.png')\" />\n")])])]),n("p",[e._v("那如果我们想要在 "),n("code",[e._v("require")]),e._v(" 中传变量可以吗？答案是不行。")]),e._v(" "),n("p",[e._v("因为 "),n("code",[e._v("require")]),e._v(" 的参数值必须是字符串直接量。当我们传一个变量进去，例如："),n("code",[e._v('<img :src="require(icon)" alt />')]),e._v("，明明路径是正确的，但会报路径找不到的错误:")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/12/172a852c13119f3f?w=1324&h=270&f=png&s=41190",alt:""}})]),e._v(" "),n("h3",{attrs:{id:"require-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#require-方法"}},[e._v("#")]),e._v(" "),n("code",[e._v("require")]),e._v(" 方法")]),e._v(" "),n("p",[e._v("父组件直接 "),n("code",[e._v("require")]),e._v(" 进图片传递， 注意：路径不能使用 "),n("code",[e._v("@/assets")]),e._v("，否则也会报错。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 父组件\n<template>\n    <child :icon=\"require('../../assets/happy.png')\" />\n</template>\n\n<script>\nimport child from './child'\n\nexport default {\n  components: {\n    child\n  }\n}\n<\/script>\n")])])]),n("h3",{attrs:{id:"import-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#import-方法"}},[e._v("#")]),e._v(" "),n("code",[e._v("import")]),e._v(" 方法")]),e._v(" "),n("p",[e._v("父组件需要将图片先 "),n("code",[e._v("import")]),e._v(" 进来，再将图片作为参数传递给子组件，这个方法的好处是可以写成 "),n("code",[e._v("@/assets/happy.png")]),e._v(" 格式：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 父组件\n<template>\n    <child :icon=\"happy\" />\n</template>\n\n<script>\nimport child from './child'\nimport happy from '@/assets/happy.png'\n\nexport default {\n  components: {\n    child\n  },\n  data () {\n    return {\n      happy\n    }\n  }\n}\n<\/script>\n")])])]),n("p",[e._v("两种方案的子组件写法相同， "),n("code",[e._v("img")]),e._v(" 的 "),n("code",[e._v("src")]),e._v(" 属性直接写变量就好：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 子组件\n<template>\n    <img :src=\"icon\" alt />\n</template>\n\n<script>\nexport default {\n  props: {\n    icon: {\n      type: String,\n      default: ''\n    }\n  },\n}\n<\/script>\n\n")])])]),n("h3",{attrs:{id:"element-ui-使用者戳这里-结合-icon-和-img-的兼容性写法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#element-ui-使用者戳这里-结合-icon-和-img-的兼容性写法"}},[e._v("#")]),e._v(" "),n("code",[e._v("element-ui")]),e._v(" 使用者戳这里：结合 "),n("code",[e._v("icon")]),e._v(" 和 "),n("code",[e._v("img")]),e._v(" 的兼容性写法：")]),e._v(" "),n("p",[e._v("如果你是 "),n("code",[e._v("elementUI")]),e._v(" 的使用者，可能会烦恼如果一个图标显示的既有可能是  "),n("code",[e._v("el-icon-edit")]),e._v("，也可能是 "),n("code",[e._v("img")]),e._v("，那我们是要用两个参数分别传递吗？")]),e._v(" "),n("p",[e._v("当然不啦，为了使子组件更具兼容性，推荐父组件只传递一个参数。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 显示 img\n<child :icon=\"happy\" /> \x3c!-- import happy from '@/assets/happy.png' --\x3e\n// 显示 icon\n<child :icon=\"el-icon-eleme\" />  \x3c!-- const el-icon-eleme = 'el-icon-eleme' --\x3e\n")])])]),n("p",[e._v("因为通过一个参数传递，所以在子组件中需要用正则 "),n("code",[e._v("/(.*)\\.(png|jpg|jpeg|gif|bmp)$/")]),e._v(" 和 "),n("code",[e._v("/^data:image\\/[a-z]+;base64/")]),e._v(" 判断一下类型：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// 子组件\n<template>\n  <div>\n    <i v-if="isIcon" :class="icon"></i>\n    <img v-else :src="icon" />\n  </div>\n</template>\n\n<script>\nconst IMG_REG = /(.*)\\.(png|jpg|jpeg|gif|bmp)$/\nconst SIMPLE_IMG_BASE_64_REG = /^data:image\\/[a-z]+;base64/\nexport default {\n  props: {\n    icon: {\n      type: String,\n      default: \'\'\n    }\n  },\n  computed: {\n    isIcon () {\n      return !IMG_REG.test(this.icon) && !SIMPLE_IMG_BASE_64_REG.test(this.icon)\n    }\n  }\n}\n<\/script>\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);