(this["webpackJsonpjoke-gen"]=this["webpackJsonpjoke-gen"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),u=n.n(a),s=(n(11),n(2)),o=(n(12),n(4)),i=n.n(o),j=n(6);var b=function(e,t){var n=Object(c.useState)(""),r=Object(s.a)(n,2),a=r[0],u=r[1];return Object(c.useEffect)((function(){var n=function(){var n=Object(j.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.icndb.com/jokes/random?firstName=".concat(e,"&lastName=").concat(t)).then((function(e){return e.json()})).then((function(e){u(e.value.joke)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[e,t]),a},f=n(0);var l=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(c.useState)("Anthony"),r=Object(s.a)(n,2),a=r[0],u=r[1],o=Object(c.useState)("Zaino"),i=Object(s.a)(o,2),j=i[0],l=i[1],h=b(a,j);return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("center",{children:[Object(f.jsx)("h1",{children:"The Joke Generator"}),Object(f.jsx)("h2",{children:h}),Object(f.jsxs)("form",{children:[Object(f.jsx)("input",{placeholder:"first name",ref:e}),Object(f.jsx)("input",{placeholder:"last name",ref:t}),Object(f.jsx)("button",{onClick:function(n){n.preventDefault(),u(e.current.value),l(t.current.value)},children:" Generate Joke"})]})]})})};u.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(l,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c4544446.chunk.js.map