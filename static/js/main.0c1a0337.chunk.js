(this["webpackJsonpcurrency_converter-react"]=this["webpackJsonpcurrency_converter-react"]||[]).push([[0],{25:function(e,n,t){e.exports=t.p+"static/media/background.dffb7263.jpg"},26:function(e,n,t){e.exports=t(49)},49:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(19),u=t.n(c),l=t(4),o=t(6),i=t.n(o),s=t(20),f=t(21),m=t.n(f),p=function(e){var n=e.children;return r.a.createElement("main",null,n)},b=t(2),d=t(3);function g(){var e=Object(b.a)(["\n  font-size: 12px;\n  margin: 10px 0;\n  letter-spacing: 5px;\n"]);return g=function(){return e},e}function v(){var e=Object(b.a)(["\n  font-size: 30px;\n  font-weight: bold;\n  margin: 0;\n  letter-spacing: 5px;\n\n  @media (max-width: 420px) {\n    font-size: 22px;\n  }\n"]);return v=function(){return e},e}var E=d.b.h1(v()),x=d.b.p(g()),j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null,"Currency Converter"),r.a.createElement(x,null,"Fast and secure currency exchange"))};function h(){var e=Object(b.a)(["\n  border: none;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 5px;\n  margin: 10px;\n  width: 100%;\n"]);return h=function(){return e},e}function O(){var e=Object(b.a)(["\n  border: none;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 5px;\n  margin: 5px;\n  width: 70%;\n"]);return O=function(){return e},e}function y(){var e=Object(b.a)(["\n  border: none;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 5px;\n  margin: 5px;\n  width: 70%;\n"]);return y=function(){return e},e}function w(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return w=function(){return e},e}var k=d.b.label(w()),S=d.b.select(y()),C=d.b.input(O()),z=d.b.button(h()),F=function(e){var n=e.calculateResult,t=e.plnValue,c=Object(a.useState)(""),u=Object(l.a)(c,2),o=u[0],i=u[1],s=Object(a.useState)("PLN"),f=Object(l.a)(s,2),m=f[0],p=f[1],b=Object(a.useState)("EUR"),d=Object(l.a)(b,2),g=d[0],v=d[1],E=Object.entries(t).map((function(e){return r.a.createElement("option",{key:e[0]},e[0])}));return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(+o,m,g)}},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Converter"),r.a.createElement(k,null,r.a.createElement("span",null,"Amount: "),r.a.createElement(C,{required:!0,type:"number",step:"0.01",min:"1",value:o,onChange:function(e){var n=e.target;return i(n.value)}})),r.a.createElement(k,null,r.a.createElement("span",null,"From: "),r.a.createElement(S,{value:m,onChange:function(e){var n=e.target;return p(n.value)}},E)),r.a.createElement(k,null,r.a.createElement("span",null,"To: "),r.a.createElement(S,{value:g,onChange:function(e){var n=e.target;return v(n.value)}},E)),r.a.createElement(k,null,r.a.createElement(z,null,"Exchange"))))},L=function(e){var n=e.result;return r.a.createElement("p",null,r.a.createElement("strong",null,"Result:")," ",n)},R=function(){var e=Object(a.useState)(new Date),n=Object(l.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(e)}}),[]),t};function V(){var e=Object(b.a)(["\n  font-family: monospace;\n  text-align: right;\n"]);return V=function(){return e},e}var D=d.b.p(V()),I=function(){var e=R();return r.a.createElement(D,null,function(e){return e.toLocaleString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"numeric",minute:"numeric",second:"numeric"})}(e))},J=t(25),N=t.n(J);function P(){var e=Object(b.a)(['\nhtml {\n    box-sizing: border-box;\n  }\n  \n  *,\n  ::before,\n  ::after {\n    box-sizing: inherit;\n  }\n  \n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n  background-image: url("','");\n    background-position: center;\n    background-repeat: no-repeat;\n    font-family: "Lato", sans-serif;\n    padding: 0 0 125px 90px;\n  }\n  \n  @media (max-width: 520px) {\n    body {\n      padding: 120px 10px 125px 10px;\n      background-position: 59% 40%;\n    }\n    p {\n      font-size:14px\n    }\n  }\n  \n']);return P=function(){return e},e}var T=Object(d.a)(P(),N.a),_=function(){var e=function(){var e=Object(a.useState)(null),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(null),u=Object(l.a)(c,2),o=u[0],f=u[1],p=Object(a.useState)(!1),b=Object(l.a)(p,2),d=b[0],g=b[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.exchangeratesapi.io/latest?base=PLN").then((function(e){var n=e.data.rates,t=e.data.date;f(t),r(n)})).catch((function(){g(!0)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();setTimeout((function(){e()}),1e3)}),[]),{ratesValue:t,date:o,isError:d}}(),n=e.date,t=e.ratesValue,c=e.isError,u=Object(a.useState)(""),o=Object(l.a)(u,2),f=o[0],b=o[1];return r.a.createElement(p,null,r.a.createElement(T,null),r.a.createElement(I,null),r.a.createElement(j,null),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{calculateResult:function(e,n,a){var r=e*t[a]/t[n];b("".concat(r.toFixed(2)," ").concat(a))},plnValue:t}),r.a.createElement(L,{result:f}),r.a.createElement("p",null,"Currency exchange rates updated on: ",r.a.createElement("strong",null,n))):c?"Error, please try again later":"Loading...")};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.0c1a0337.chunk.js.map