(this["webpackJsonpportfolio-frontend"]=this["webpackJsonpportfolio-frontend"]||[]).push([[1],{26:function(e,t,n){e.exports=n(37)},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"toggleSound",(function(){return v}));var o=n(0),r=n.n(o),c=n(12),l=n.n(c),i=n(10),u=n(14),s=n(8),d=n(19),m="toggle_sound",g={isOn:!0},L=Object(s.b)({sound:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(d.a)({},e,{isOn:!e.isOn});default:return e}}}),p=(n(35),n(9)),w=n(20),E=function(e){return r.a.createElement(i.b,{to:e.route,className:"nav-button",role:"button","aria-pressed":e.active===e.text,onClick:e.onClick,onKeyPress:e.onClick},e.text)},h=function(e){var t=Object(p.f)(),n="/"===t.pathname?"about":"".concat(t.pathname).slice(1),a=function(){e.open&&e.toggleBurger()};return r.a.createElement("nav",{className:e.open?"MainNav open":"MainNav","aria-expanded":e.open},r.a.createElement(E,{route:"/",text:"about",active:n,onClick:a}),r.a.createElement(E,{route:"/skills",text:"skills",active:n,onClick:a}),r.a.createElement(E,{route:"/projects",text:"projects",active:n,onClick:a}),r.a.createElement(E,{route:"/contact",text:"contact",active:n,onClick:a}))};function v(){return{type:m}}var b=Object(u.b)((function(e){return{sound:e.sound.isOn}}),a)((function(e){var t=function(){return e.toggleSound()};return e.sound?r.a.createElement("button",{onClick:t,role:"switch","aria-checked":"true","aria-label":"Sound Toggle",className:"icon sound-toggler"},r.a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M17 3.59375L15.2812 5.28125L9.5625 11H5V21H9.5625L15.2812 26.7188L17 28.4062V3.59375ZM23.8125 8.1875L22.4062 9.59375C25.9258 13.1133 25.9258 18.7617 22.4062 22.2812L23.8125 23.7188C28.0938 19.4375 28.0938 12.4688 23.8125 8.1875ZM15 8.4375V23.5625L10.7188 19.2812L10.4062 19H7V13H10.4062L10.7188 12.7188L15 8.4375ZM20.9062 11.0938L19.5 12.5C21.4102 14.4102 21.4023 17.5742 19.4688 19.5938L20.9375 21C23.6016 18.2188 23.5938 13.7812 20.9062 11.0938Z"}))):r.a.createElement("button",{onClick:t,role:"switch","aria-checked":"false",className:"icon sound-toggler","aria-label":"Sound Toggle"},r.a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15 4.59375L13.2812 6.28125L8.5625 11H4V21H8.5625L13.2812 25.7188L15 27.4062V4.59375ZM13 9.4375V22.5625L9.71875 19.2812L9.40625 19H6V13H9.40625L9.71875 12.7188L13 9.4375ZM20.2188 11.7812L18.7812 13.2188L21.5625 16L18.7812 18.7812L20.2188 20.2188L23 17.4375L25.7812 20.2188L27.2188 18.7812L24.4375 16L27.2188 13.2188L25.7812 11.7812L23 14.5625L20.2188 11.7812Z"})))})),f=function(e){return e.open?r.a.createElement("button",{onClick:e.toggleBurger,role:"switch","aria-checked":"true",className:"icon hamburger"},r.a.createElement("svg",{viewBox:"-6 -6 32 32",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M4.21875 0.78125L0.78125 2.21875L9.5625 11L0.78125 19.7812L2.21875 21.2188L11 12.4375L19.7812 21.2188L21.2188 19.7812L12.4375 11L21.2188 2.21875L19.7812 0.78125L11 9.5625L2.21875 0.78125Z"}))):r.a.createElement("button",{onClick:e.toggleBurger,role:"switch","aria-checked":"false",className:"icon hamburger","aria-label":"Navigation Toggle"},r.a.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M4 7V9H28V7H4ZM4 15V17H28V15H4ZM4 23V25H28V23H4Z"})))},k=function(){var e=Object(o.useState)(!1),t=Object(w.a)(e,2),n=t[0],a=t[1],c=function(){return a(!n)},l=Object(p.f)();return r.a.createElement("header",{className:n?"Header open":"Header"},r.a.createElement(h,{open:n,toggleBurger:c}),r.a.createElement(f,{open:n,toggleBurger:c}),"/"===l.pathname&&r.a.createElement(b,null))},x=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,100))})),O=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,103))})),C=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,102))})),H=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,101))})),y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,j=Object(s.d)(L,y()),M=document.getElementById("root");!function(){var e=document.documentElement,t=function(t,n){var a=t<1e3?t:1e3;e.style.setProperty("--grid-width","".concat(a/5,"px")),e.style.setProperty("--grid-height","".concat(n/9,"px"))};document.addEventListener("DOMContentLoaded",(function(){t(window.innerWidth,window.innerHeight),window.onresize=function(){t(window.innerWidth,window.innerHeight)}}))}(),window.addEventListener("keydown",(function e(t){9===t.keyCode&&(document.body.classList.add("user-is-tabbing"),window.removeEventListener("keydown",e))})),l.a.render(r.a.createElement(u.a,{store:j},r.a.createElement(i.a,null,r.a.createElement((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(o.Suspense,{fallback:r.a.createElement("div",null,"Loading ...")},r.a.createElement("main",null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:x}),r.a.createElement(p.a,{exact:!0,path:"/skills",component:O}),r.a.createElement(p.a,{exact:!0,path:"/projects",component:C}),r.a.createElement(p.a,{exact:!0,path:"/contact",component:H})))))}),null))),M)}},[[26,2,4]]]);
//# sourceMappingURL=main.1df7a778.chunk.js.map