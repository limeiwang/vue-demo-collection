(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1022:function(t,e,n){"use strict";n.r(e);var a=n(113),i=(n(197),n(79),n(700)),o=n.n(i),c={name:"Home",data:function(){return{copyValue:""}},mounted:function(){var t=this;this.drawChart(),window.copy=function(e){t.copy(e)},window.getDetail=function(e){t.jumpTablePage(JSON.parse(e))}},methods:{drawChart:function(){var t=this;this.$nextTick((function(){t.barChart=o.a.init(document.getElementById("bar"));var e={title:{text:"ECharts 入门示例"},tooltip:{trigger:"axis",triggerOn:"mousemove",axisPointer:{type:"shadow"},enterable:!0,position:function(t,e,n,a,i){return t[0]>i.viewSize[0]/2?[t[0]-100,"50%"]:[t[0],"50%"]},formatter:function(t){var e=Object(a.a)(t,1)[0],n=e?"<div>数量：".concat(e.value||0,"件</div>"):"";return"\n<div>".concat(e.name,"</div>\n").concat(n,"\n<div onclick=\"copy('").concat(e.name,'\')" class="copy-btn">复制</div>\n<div onclick="getDetail(JSON.stringify({value:\'').concat(e.value,"',name:'").concat(e.name,'\'}))" class="detail-btn">查看详情</div>\n')}},legend:{data:["销量"]},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]};t.barChart.setOption(e)}))},copy:function(t){var e=document.getElementById("copy_input");e.value=t,e.select(),document.execCommand("copy"),alert("ctrl + v 试试是否复制成功：".concat(t))},jumpTablePage:function(t){alert(JSON.stringify(t))}}},r=(n(995),n(46)),u=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tooltip-wrapper"},[n("div",{staticStyle:{height:"300px",width:"500px"},attrs:{id:"bar"}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.copyValue,expression:"copyValue"}],ref:"copyInput",staticClass:"copy-input",attrs:{id:"copy_input"},domProps:{value:t.copyValue},on:{input:function(e){e.target.composing||(t.copyValue=e.target.value)}}})])}),[],!1,null,"331a3442",null);e.default=u.exports},656:function(t,e,n){},995:function(t,e,n){"use strict";n(656)}}]);