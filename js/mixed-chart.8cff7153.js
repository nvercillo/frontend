(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mixed-chart"],{"6d82":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-container"},[a("mixed-chart",{attrs:{height:"100%",width:"100%"}})],1)},o=[],r=a("d4ec"),c=a("262e"),l=a("2caf"),n=a("9ab4"),s=a("1b40"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})},d=[],u=a("bee2"),b=a("313e"),f=a("2fe1"),p=a("9b21"),y=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(u["a"])(a,[{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.initChart()}))}},{key:"beforeDestroy",value:function(){this.chart&&(this.chart.dispose(),this.chart=null)}},{key:"initChart",value:function(){this.chart=b["init"](document.getElementById(this.id));var t=function(){for(var t=[],e=1;e<13;e++)t.push(e+"month");return t}();this.chart.setOption({backgroundColor:"#344b58",title:{text:"statistics",top:"20",textStyle:{color:"#fff",fontSize:22},subtextStyle:{color:"#90979c",fontSize:16}},tooltip:{trigger:"axis"},grid:{left:"5%",right:"5%",borderWidth:0,top:150,bottom:95,textStyle:{color:"#fff"}},legend:{x:"5%",top:"10%",textStyle:{color:"#90979c"},data:["female","male","average"]},xAxis:[{type:"category",axisLine:{lineStyle:{color:"#90979c"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0},data:t}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"#90979c"}},axisTick:{show:!1},axisLabel:{interval:0},splitArea:{show:!1}}],dataZoom:[{show:!0,xAxisIndex:[0],bottom:30,start:10,end:80,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#d3dee5"},textStyle:{color:"#fff"},borderColor:"#90979c"},{type:"inside",show:!0,start:1,end:35}],series:[{name:"female",type:"bar",stack:"total",barMaxWidth:35,barGap:"10%",itemStyle:{color:"rgba(255,144,128,1)",label:{show:!0,textStyle:{color:"#fff"},position:"insideTop",formatter:function(t){return t.value>0?t.value:""}}},data:[709,1917,2455,2610,1719,1433,1544,3285,5208,3372,2484,4078]},{name:"male",type:"bar",stack:"total",itemStyle:{color:"rgba(0,191,183,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}},data:[327,1776,507,1200,800,482,204,1390,1001,951,381,220]},{name:"average",type:"line",stack:"total",symbolSize:10,symbol:"circle",itemStyle:{color:"rgba(252,230,48,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}},data:[1036,3693,2962,3810,2519,1915,1748,4675,6209,4323,2865,4298]}]})}}]),a}(Object(f["c"])(p["a"]));Object(n["a"])([Object(s["b"])({default:"chart"})],y.prototype,"className",void 0),Object(n["a"])([Object(s["b"])({default:"chart"})],y.prototype,"id",void 0),Object(n["a"])([Object(s["b"])({default:"200px"})],y.prototype,"width",void 0),Object(n["a"])([Object(s["b"])({default:"200px"})],y.prototype,"height",void 0),y=Object(n["a"])([Object(s["a"])({name:"MixedChart"})],y);var m=y,x=m,v=a("0c7c"),O=Object(v["a"])(x,h,d,!1,null,null,null),j=O.exports,w=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(s["c"]);w=Object(n["a"])([Object(s["a"])({name:"MixedChartDemo",components:{MixedChart:j}})],w);var g=w,S=g,k=(a("cfa3"),Object(v["a"])(S,i,o,!1,null,"9cd9eb14",null));e["default"]=k.exports},7415:function(t,e,a){},cfa3:function(t,e,a){"use strict";a("7415")}}]);