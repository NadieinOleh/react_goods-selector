(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(3),o=n.n(s),c=n(4),a=n(5),r=n(8),d=n(7),i=n(1),l=n.n(i),u=(n(13),n(14),n(6)),b=n.n(u),h=n(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={goods:j,selectedGood:"Jam",hiddenCross:!1},t}return Object(a.a)(n,[{key:"saveStateForButton",value:function(t){this.setState({selectedGood:t,hiddenCross:!0})}},{key:"deleteStateForButton",value:function(){this.setState({selectedGood:"No goods",hiddenCross:!1})}},{key:"render",value:function(){var t=this,e=this.state,n=e.goods,s=e.selectedGood,o=e.hiddenCross;return Object(h.jsxs)("main",{className:"section container",children:[Object(h.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[s," ","is selected",o&&Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){t.deleteStateForButton()}})]}),Object(h.jsx)("table",{className:"table",children:Object(h.jsx)("tbody",{children:n.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":s===e}),children:[Object(h.jsx)("td",{children:s===e?Object(h.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){t.deleteStateForButton()},children:"-"}):Object(h.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){t.saveStateForButton(e)},children:"+"})}),Object(h.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:e})]},e)}))})})]})}}]),n}(l.a.Component);o.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b60d127e.chunk.js.map