(this["webpackJsonpcurrency_converter-react"]=this["webpackJsonpcurrency_converter-react"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(3),c=t.n(l),o=(t(9),t(1)),s=function(e){var a=e.children;return r.a.createElement("main",{className:"formContainer"},a)},m=(t(10),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title"},"Currency Converter"),r.a.createElement("p",{className:"header__paragraph"},"Fast and secure currency exchange"))}),u=(t(11),function(e){var a=e.calculateResult,t=Object(n.useState)(""),l=Object(o.a)(t,2),c=l[0],s=l[1],m=Object(n.useState)(""),u=Object(o.a)(m,2),i=u[0],E=u[1],f=Object(n.useState)(""),_=Object(o.a)(f,2),b=_[0],p=_[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(+c,i,b)},className:"form"},r.a.createElement("fieldset",{className:"from__fieldset"},r.a.createElement("legend",{className:"form__legend"},"Converter"),r.a.createElement("label",{className:"form__label"},r.a.createElement("span",{className:"form__labelText"},"Amount: "),r.a.createElement("input",{className:"form__select",required:!0,type:"number",step:"0.01",min:"1",value:c,onChange:function(e){var a=e.target;return s(a.value)}})),r.a.createElement("label",{className:"form__label"},r.a.createElement("span",{className:"form__labelText"},"From: "),r.a.createElement("select",{className:"form__select",value:i,onChange:function(e){var a=e.target;return E(a.value)}},r.a.createElement("option",null),r.a.createElement("option",null,"PLN"),r.a.createElement("option",null,"USD"),r.a.createElement("option",null,"EUR"))),r.a.createElement("label",{className:"form__label"},r.a.createElement("span",{className:"form__labelText"},"To: "),r.a.createElement("select",{className:"form__select",value:b,onChange:function(e){var a=e.target;return p(a.value)}},r.a.createElement("option",null),r.a.createElement("option",null,"PLN"),r.a.createElement("option",null,"USD"),r.a.createElement("option",null,"EUR"))),r.a.createElement("label",{className:"form__label"},r.a.createElement("button",{className:"form__button"},"Exchange"))))}),i=function(e){var a=e.result;return r.a.createElement("p",{className:"result"},r.a.createElement("strong",null,"Result:")," ",a)},E=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement(s,null,r.a.createElement(m,null),r.a.createElement(u,{calculateResult:function(e,a,t){var n="",r="",c=3.8922,o=4.399;switch(a){case"PLN":n=+e;break;case"USD":n=e*c;break;case"EUR":n=e*o}switch(t){case"PLN":r=n;break;case"USD":r=n/c;break;case"EUR":r=n/o}l("".concat(r.toFixed(2)," ").concat(a))}}),r.a.createElement(i,{result:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.dfa62f03.chunk.js.map