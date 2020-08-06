(this["webpackJsonpcurrency_converter-react"]=this["webpackJsonpcurrency_converter-react"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=(a(9),a(1)),s=function(e){var t=e.children;return r.a.createElement("main",{className:"formContainer"},t)},m=(a(10),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title"},"Currency Converter"),r.a.createElement("p",{className:"header__paragraph"},"Fast and secure currency exchange"))}),u=(a(11),function(e){var t=e.calculateResult,a=e.plnValue,c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],m=l[1],u=Object(n.useState)("PLN"),i=Object(o.a)(u,2),f=i[0],_=i[1],E=Object(n.useState)("PLN"),v=Object(o.a)(E,2),b=v[0],d=v[1],h=Object.entries(a).map((function(e){return r.a.createElement("option",{key:e[0]},e[0])}));return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(+s,f,b)},className:"form"},r.a.createElement("fieldset",{className:"from__fieldset"},r.a.createElement("legend",{className:"form__legend"},"Converter"),r.a.createElement("label",{className:"form__label"},r.a.createElement("span",{className:"form__labelText"},"Amount: "),r.a.createElement("input",{className:"form__select",required:!0,type:"number",step:"0.01",min:"1",value:s,onChange:function(e){var t=e.target;return m(t.value)}})),r.a.createElement("label",{className:"form__label"},r.a.createElement("span",{className:"form__labelText"},"From: "),r.a.createElement("select",{className:"form__select",value:f,onChange:function(e){var t=e.target;return _(t.value)}},h)),r.a.createElement("label",{className:"form__label"},r.a.createElement("span",{className:"form__labelText"},"To: "),r.a.createElement("select",{className:"form__select",value:b,onChange:function(e){var t=e.target;return d(t.value)}},h)),r.a.createElement("label",{className:"form__label"},r.a.createElement("button",{className:"form__button"},"Exchange"))))}),i=function(e){var t=e.result;return r.a.createElement("p",{className:"result"},r.a.createElement("strong",null,"Result:")," ",t)},f=(a(12),{weekday:"long",day:"numeric",month:"long",hour:"numeric",minute:"numeric",second:"numeric"}),_=function(){var e=Object(n.useState)((new Date).toLocaleDateString(void 0,f)),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){var e=(new Date).toLocaleDateString(void 0,f);c(e)}),1e3);return function(){clearInterval(e)}}),[]),r.a.createElement("p",{className:"form__clock"}," ",a," ")},E=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l={PLN:1,USD:3.92,EUR:4.399};return r.a.createElement(s,null,r.a.createElement(m,null),r.a.createElement(u,{calculateResult:function(e,t,a){c("".concat((e*l[t]/l[a]).toFixed(2)," ").concat(a))},plnValue:l}),r.a.createElement(i,{result:a}),r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.e8b83874.chunk.js.map