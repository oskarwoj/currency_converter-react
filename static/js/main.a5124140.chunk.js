(this["webpackJsonpcurrency_converter-react"]=this["webpackJsonpcurrency_converter-react"]||[]).push([[0],{12:function(n,e,t){n.exports=t.p+"static/media/background.dffb7263.jpg"},13:function(n,e,t){n.exports=t(20)},20:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(8),u=t.n(c),l=t(3),o=function(n){var e=n.children;return a.a.createElement("main",null,e)},i=t(1),m=t(2);function b(){var n=Object(i.a)(["\n  font-size: 12px;\n  margin: 10px 0;\n  letter-spacing: 5px;\n"]);return b=function(){return n},n}function f(){var n=Object(i.a)(["\n  font-size: 30px;\n  font-weight: bold;\n  margin: 0;\n  letter-spacing: 5px;\n\n  @media (max-width: 420px) {\n    font-size: 22px;\n  }\n"]);return f=function(){return n},n}var p=m.b.h1(f()),s=m.b.p(b()),d=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(p,null,"Currency Converter"),a.a.createElement(s,null,"Fast and secure currency exchange"))};function g(){var n=Object(i.a)(["\n  border: none;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 5px;\n  margin: 10px;\n  width: 100%;\n"]);return g=function(){return n},n}function v(){var n=Object(i.a)(["\n  border: none;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 5px;\n  margin: 5px;\n  width: 70%;\n"]);return v=function(){return n},n}function E(){var n=Object(i.a)(["\n  border: none;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 5px;\n  margin: 5px;\n  width: 70%;\n"]);return E=function(){return n},n}function x(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return x=function(){return n},n}var h=m.b.label(x()),j=m.b.select(E()),O=m.b.input(v()),y=m.b.button(g()),k=function(n){var e=n.calculateResult,t=n.plnValue,c=Object(r.useState)(""),u=Object(l.a)(c,2),o=u[0],i=u[1],m=Object(r.useState)("PLN"),b=Object(l.a)(m,2),f=b[0],p=b[1],s=Object(r.useState)("EUR"),d=Object(l.a)(s,2),g=d[0],v=d[1],E=Object.entries(t).map((function(n){return a.a.createElement("option",{key:n[0]},n[0])}));return a.a.createElement("form",{onSubmit:function(n){n.preventDefault(),e(+o,f,g)}},a.a.createElement("fieldset",null,a.a.createElement("legend",null,"Converter"),a.a.createElement(h,null,a.a.createElement("span",null,"Amount: "),a.a.createElement(O,{required:!0,type:"number",step:"0.01",min:"1",value:o,onChange:function(n){var e=n.target;return i(e.value)}})),a.a.createElement(h,null,a.a.createElement("span",null,"From: "),a.a.createElement(j,{value:f,onChange:function(n){var e=n.target;return p(e.value)}},E)),a.a.createElement(h,null,a.a.createElement("span",null,"To: "),a.a.createElement(j,{value:g,onChange:function(n){var e=n.target;return v(e.value)}},E)),a.a.createElement(h,null,a.a.createElement(y,null,"Exchange"))))},w=function(n){var e=n.result;return a.a.createElement("p",null,a.a.createElement("strong",null,"Result:")," ",e)},S=function(){var n=Object(r.useState)(new Date),e=Object(l.a)(n,2),t=e[0],a=e[1];return Object(r.useEffect)((function(){var n=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(n)}}),[]),t};function C(){var n=Object(i.a)(["\n  font-family: monospace;\n  text-align: right;\n"]);return C=function(){return n},n}var z=m.b.p(C()),R=function(){var n=S();return a.a.createElement(z,null,function(n){return n.toLocaleString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"numeric",minute:"numeric",second:"numeric"})}(n))},D=t(12),F=t.n(D);function L(){var n=Object(i.a)(['\nhtml {\n    box-sizing: border-box;\n  }\n  \n  *,\n  ::before,\n  ::after {\n    box-sizing: inherit;\n  }\n  \n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n  background-image: url("','");\n    background-position: center;\n    background-repeat: no-repeat;\n    font-family: "Lato", sans-serif;\n    padding: 0 0 125px 90px;\n  }\n  \n  @media (max-width: 520px) {\n    body {\n      padding: 120px 10px 125px 10px;\n      background-position: 59% 40%;\n    }\n  }\n  \n']);return L=function(){return n},n}var I=Object(m.a)(L(),F.a),U=function(){var n=Object(r.useState)(""),e=Object(l.a)(n,2),t=e[0],c=e[1],u={PLN:1,USD:3.92,EUR:4.399};return a.a.createElement(o,null,a.a.createElement(I,null),a.a.createElement(d,null),a.a.createElement(k,{calculateResult:function(n,e,t){c("".concat((n*u[e]/u[t]).toFixed(2)," ").concat(t))},plnValue:u}),a.a.createElement(w,{result:t}),a.a.createElement(R,null))};u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(U,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a5124140.chunk.js.map