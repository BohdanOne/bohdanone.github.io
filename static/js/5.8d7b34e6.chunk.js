(this["webpackJsonpportfolio-frontend"]=this["webpackJsonpportfolio-frontend"]||[]).push([[5],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(40),c=a(10),o=a(20),s=a(14),l=function(e){var t=new(window.AudioContext||window.webkitAudioContext),a=new Audio(e),n=t.createGain();n.gain.value=.5;var r=t.createMediaElementSource(a);r.connect(n).connect(t.destination);var i=t.createAnalyser();return r.connect(i),function(e){var t=document.getElementById("canvas"),a=t.getContext("2d");t.setAttribute("width",window.innerWidth),function(){var n=t.width,r=t.height;e.fftSize=512;var i=e.fftSize,c=new Uint8Array(i);a.clearRect(0,0,n,r),function o(){requestAnimationFrame(o),e.getByteTimeDomainData(c),a.fillStyle="rgba(255,255,255,0.1)",a.fillRect(0,0,n,r),a.lineWidth=1,a.strokeStyle="#ffa600",a.beginPath();for(var s=n/i,l=0,u=0;u<i;u++){var m=c[u]/128*r/2;0===u?a.moveTo(l,m):a.lineTo(l,m),l+=s}a.lineTo(t.width,t.height/2),a.stroke()}()}()}(i),[a,t]},u=a(42),m=a.n(u),d=Object(s.b)((function(e){return{sound:e.sound.isOn}}))((function(e){var t=Object(n.useState)(),a=Object(o.a)(t,2),i=a[0],c=a[1],s=Object(n.useState)(),u=Object(o.a)(s,2),d=u[0],f=u[1],p=Object(n.useState)(!1),g=Object(o.a)(p,2),b=g[0],v=g[1];Object(n.useEffect)((function(){return e.sound&&b?(d&&d.resume(),i&&i.play()):i&&i.pause(),function(){return i&&i.pause()}}),[e.sound,b,i,d]);var h=function(e){if(e){if(!i){var t=l(m.a),a=Object(o.a)(t,2),n=a[0],r=a[1];c(n),f(r)}}else!function(){var e=document.querySelector(".sound-toggler").querySelector("path"),t=setInterval((function(){e.setAttribute("fill","#ffa600"),setTimeout((function(){e.removeAttribute("fill","#ffa600")}),200)}),400);setTimeout((function(){clearInterval(t)}),2100)}();v(!b)};return r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("img",{className:e.imgClass,src:e.imgSrc[0],srcSet:"".concat(e.imgSrc[0]," 246w, ").concat(e.imgSrc[1]," 492w, ").concat(e.imgSrc[2]," 738w"),sizes:"(max-width: 568px) 246px, 492px",alt:e.imgAlt,onClick:function(){return h(e.sound)},onKeyPress:function(){return h(e.sound)},tabIndex:"0",role:"button","aria-label":"Audio Playback Toogle"}))})),f=a(43),p=a.n(f),g=a(44),b=a.n(g),v=a(45),h=a.n(v);t.default=function(){var e=Object(i.b)({from:{opacity:0,transform:"translateX(200%) rotate(-30deg)"},to:{opacity:1,transform:"translateX(0%) rotate(15deg)"},delay:3e3});return r.a.createElement("section",{className:"AboutPage"},r.a.createElement("canvas",{id:"canvas"}),r.a.createElement("h2",{className:"hi"},"Hi!"),r.a.createElement("h3",{className:"bohdan"},"My name is Bohdan"),r.a.createElement(d,{imgClass:"drummer",imgSrc:[p.a,b.a,h.a],imgAlt:"Bohdan Imiela play drums"}),r.a.createElement("p",{className:"play-drums"},"I play drums..."),r.a.createElement(i.a.p,{style:e,className:"click-to-listen"},r.a.createElement("span",{role:"img","aria-label":"Backhand Index Pointing Left"},"\ud83d\udc48 "),"click to listen",r.a.createElement("span",{role:"img","aria-label":"Drum"}," \ud83e\udd41")),r.a.createElement(c.b,{to:"/projects",className:"projects-link"},"...and I build apps."))}},42:function(e,t,a){e.exports=a.p+"static/media/Zouk.dfa4e760.mp3"},43:function(e,t,a){e.exports=a.p+"static/media/drummer.dec7c367.png"},44:function(e,t,a){e.exports=a.p+"static/media/drummer@2x.39408019.png"},45:function(e,t,a){e.exports=a.p+"static/media/drummer@3x.6ce68fff.png"}}]);
//# sourceMappingURL=5.8d7b34e6.chunk.js.map