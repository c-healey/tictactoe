(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(7),s=c.n(a),u=c(2),o=c(6),i=c(0),j=r.a.createContext(),b=function(e){var t=Object(n.useState)(Array(9).fill(null)),c=Object(u.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(!0),o=Object(u.a)(s,2),b=o[0],l=o[1],O=Object(n.useState)(null),f=Object(u.a)(O,2),d=f[0],x=f[1],v=Object(n.useState)([r]),h=Object(u.a)(v,2),m=h[0],p=h[1],N=Object(n.useState)(0),S=Object(u.a)(N,2),g=S[0],C=S[1];return Object(i.jsx)(j.Provider,{value:[r,a,b,l,d,x,m,p,g,C],children:e.children})},l=function(e){var t=e.index,c=Object(n.useContext)(j),r=Object(u.a)(c,10),a=r[0],s=r[1],b=r[2],l=r[4],O=r[6],f=r[7],d=r[8],x=r[9];return Object(i.jsx)("button",{className:"square","data-testid":t,onClick:function(){return function(e){var t=Object(o.a)(a);l||t[e]||(t[e]=b?"X":"O",s(t),f([].concat(Object(o.a)(O.slice(0,d+1)),[t])),x(d+1))}(t)},children:a[t]})},O=function(e){var t=e.squares;return Object(i.jsx)("div",{className:"board",children:function(e){return e.map((function(e,t){return Object(i.jsx)(l,{index:t},t)}))}(t)})},f=(c(13),function(){var e=Object(n.useContext)(j),t=Object(u.a)(e,10),c=t[0],r=t[1],a=t[2],s=t[3],o=t[4],b=t[5],l=t[6],f=(t[7],t[8]),d=t[9];Object(n.useEffect)((function(){b(function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(u.a)(t[c],3),r=n[0],a=n[1],s=n[2];if(e[r]&&e[r]===e[a]&&e[r]===e[s])return[e[r],r,a,s]}return null}(c)),console.log("!winner",!o),o||(console.log("ste step%2",f,f%2),s(!(f%2)))}),[c]);var x=function(e){console.log(e),r(l[e]),d(e)};return Object(i.jsxs)("div",{className:"game",children:[Object(i.jsx)(O,{squares:c}),Object(i.jsxs)("div",{className:"history",children:[Object(i.jsx)("p",{children:o?"Winner ".concat(o[0]):f>=9?"Game is a Draw":"NextPlayer ".concat(a?"X":"O")}),l.map((function(e,t){return Object(i.jsxs)("button",{className:"step",onClick:function(){return x(t)},children:["Move ",t]},t)}))]})]})}),d=function(){return Object(i.jsx)(b,{children:Object(i.jsx)(f,{})})};s.a.render(Object(i.jsx)(d,{}),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.daa0de80.chunk.js.map