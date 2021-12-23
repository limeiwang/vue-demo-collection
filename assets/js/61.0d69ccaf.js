(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1058:function(e,t,n){"use strict";n.r(t);var l=n(46),o=Object(l.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"element-ui-多选表格-当复选框禁用-鼠标覆盖显示-tooltip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#element-ui-多选表格-当复选框禁用-鼠标覆盖显示-tooltip"}},[e._v("#")]),e._v(" element-ui 多选表格，当复选框禁用，鼠标覆盖显示 tooltip")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6aa5d2aef7a64c05bdbda25c001b8180~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),e._v(" "),n("p",[e._v("今日遇到如图功能，需要在表格禁用勾选的复选框上加上 "),n("code",[e._v("tooltip")]),e._v(" 提示。")]),e._v(" "),n("p",[e._v("先尝试了使用 "),n("code",[e._v("自定义列模版")]),e._v(" 去渲染列，根据条件展示 "),n("code",[e._v("checkbox")]),e._v(" 和使用 "),n("code",[e._v("tooltip")]),e._v(" 包裹的 "),n("code",[e._v("checkbox")]),e._v("。但是用自定义列模版实现的话就会带来副作用——组件本身提供的 "),n("code",[e._v("clearSelection")]),e._v(" 和 "),n("code",[e._v("toggleAllSelection")]),e._v(" 方法就会失效。")]),e._v(" "),n("p",[e._v("于是采用一个简单的方法，就是去模拟 "),n("code",[e._v("tooltip")]),e._v(" 的实现。当鼠标移入 "),n("code",[e._v('type="selection"')]),e._v(" 的列时让 "),n("code",[e._v("tooltip")]),e._v(" 显示，移出列时隐藏 "),n("code",[e._v("tooltip")]),e._v(" 即可。")]),e._v(" "),n("p",[e._v("唯一需要思考的地方就是获取鼠标移入时元素在屏幕中的位置用来显示 "),n("code",[e._v("tooltip")]),e._v(" 的位置。用 "),n("code",[e._v("getElementViewLeft")]),e._v("和 "),n("code",[e._v("getElementViewTop")]),e._v(" 获取元素视口位置即可。全部代码见下：")]),e._v(" "),n("h2",{attrs:{id:"实现模拟的-tooltip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现模拟的-tooltip"}},[e._v("#")]),e._v(" 实现模拟的 Tooltip")]),e._v(" "),n("p",[n("code",[e._v("dom")]),e._v(" 结构：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<el-table\n  @cell-mouse-enter="cellMoveEnter"\n  @cell-mouse-leave="cellMoveLeave"\n  @select="onSelectionChange">\n  <el-table-column fixed type="selection" :selectable="row => !row.disabled"></el-table-column>\n</el-table>\n<div ref="tooltip" class="tooltip-wrapper">\n  <span>提示：此项禁止勾选</span>\n  <div class="arrow-wrapper"></div>\n</div>\n\n')])])]),n("p",[n("code",[e._v("css")]),e._v(" 部分：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(".tooltip-wrapper {\n    display: none;\n    position: relative;\n    background: #fff;\n    box-shadow: 0 2px 12px 0 rgba(35, 35, 51, 0.5);\n    border: 1px solid transparent;\n    color: #747487;\n    border-radius: 8px;\n    padding: 8px 12px;\n    z-index: 2000;\n    font-size: 14px;\n    line-height: 24px;\n    width: 280px;\n}\n.arrow-wrapper {\n    position: absolute;\n    top: calc(50% - 6px);\n    right: -16px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 8px solid transparent;\n    border-left: 8px solid white;\n}\n")])])]),n("p",[n("code",[e._v("js")]),e._v(" 部分：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cellMoveEnter (row, column, cell, event) {\n  if (column.type === \"selection\" && this.$refs.tooltip.style.display !== 'block' && row.disabled) {\n    this.$refs.tooltip.style.display = 'block'\n    this.$refs.tooltip.style.position = 'fixed'\n    this.$refs.tooltip.style.left = utils.getElementViewLeft(event.target) - 300 + 'px'\n    this.$refs.tooltip.style.top = utils.getElementViewTop(event.target) + 1 + 'px'\n  }\n},\n\ncellMoveLeave (row, column, cell, event) {\n  if (this.$refs.tooltip.style.display !== 'none') {\n    this.$refs.tooltip.style.display = 'none'\n  }\n},\n")])])]),n("p",[n("code",[e._v("utils.js")]),e._v(" 工具函数：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('const getElementViewLeft = element => {\n  let actualLeft = element.offsetLeft\n  let current = element.offsetParent\n\n  while (current !== null) {\n    actualLeft += current.offsetLeft\n    current = current.offsetParent\n  }\n  let elementScrollLeft\n  if (document.compatMode == "BackCompat") {\n    elementScrollLeft = document.body.scrollLeft\n  } else {\n    elementScrollLeft = document.documentElement.scrollLeft\n  }\n\n  return actualLeft - elementScrollLeft\n}\nconst getElementViewTop = element => {\n  let actualTop = element.offsetTop\n  let current = element.offsetParent\n\n  while (current !== null) {\n    actualTop += current.offsetTop\n    current = current.offsetParent\n  }\n  let elementScrollTop\n   if (document.compatMode == "BackCompat") {\n     elementScrollTop = document.body.scrollTop\n  } else {\n     elementScrollTop = document.documentElement.scrollTop\n  }\n\n  return actualTop - elementScrollTop\n}\n\nexport default {\n  getElementViewLeft,\n  getElementViewTop\n}\n')])])]),n("h2",{attrs:{id:"benchmark-测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#benchmark-测试"}},[e._v("#")]),e._v(" benchmark 测试")]),e._v(" "),n("p",[e._v("拿分页的表格手写 "),n("code",[e._v("benchmark")]),e._v(" 测试一下（没有测试长列表），来回 "),n("code",[e._v("hover")]),e._v(" 禁用的复选框每次渲染花费时间基本在 "),n("code",[e._v("1ms")]),e._v(" 以内。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cellMoveEnter (row, column, cell, event) {\n  const s = window.performance.now()\n  if (column.type === \"selection\" && this.$refs.tooltip.style.display !== 'block' && this.getCheckboxTipStatus(row)) {\n    this.$refs.tooltip.style.display = 'block'\n    this.$refs.tooltip.style.position = 'fixed'\n    this.$refs.tooltip.style.left = utils.getElementViewLeft(event.target) - 300 + 'px'\n    this.$refs.tooltip.style.top = utils.getElementViewTop(event.target) + 1 + 'px'\n  }\n  const renderTime = (window.performance.now() - s).toFixed(2) + 'ms'\n  console.log(renderTime)\n}\n")])])]),n("p",[n("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f53e76a48f264153ad14fb79a09a7a17~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})])])}),[],!1,null,null,null);t.default=o.exports}}]);