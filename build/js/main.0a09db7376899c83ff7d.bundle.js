(self.webpackChunkfinal_project=self.webpackChunkfinal_project||[]).push([[179],{652:(e,n,t)=>{"use strict";var r=t(379),a=t.n(r),o=t(183);a()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var s=t(144);a()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"DIV",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=document.createElement(e);return r.id=n,r.classList=t,r};var c=t(852);a()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;var l=t(680);a()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var d=function(e,n,t,r){var a=i("DIV","",r),o=i("IMG","","img-card");o.src=e;var s=i("DIV","","card-body"),c=i("H5","","card-title");c.textContent=n;var l=i("P","","card-text");l.textContent=t;var d=i("DIV","","card-btn buy");return d.textContent="КУПИТЬ",a.append(o,s),s.append(c,l,d),a},u={pic:t(988),name:"LADA XRAY",price:"11111$"},p={pic:t(988),name:"LADA XRAY SPORT",price:"12222$"},m={pic:t(988),name:"LADA XRAY COMFORT",price:"13333$"},f={pic:t(988),name:"LADA XRAY ELEGANS",price:"14444$"},v={pic:t(988),name:"LADA XRAY BASE",price:"15555$"},h={pic:t(988),name:"LADA XRAY 2021 NEW",price:"16666$"},g={pic:t(237),name:"KAMAZ_1",price:"11111$"},y={pic:t(237),name:"KAMAZ_2",price:"12222$"},b={pic:t(237),name:"KAMAZ_3",price:"13333$"},A={pic:t(237),name:"KAMAZ_4",price:"14444$"},I={pic:t(237),name:"KAMAZ_5",price:"15555$"},S={pic:t(237),name:"KAMAZ_6 NEW",price:"16666$"},L=[u,p,m,f,v,h],D=[g,y,b,A,I,S],w=t(134);a()(w.Z,{insert:"head",singleton:!1}),w.Z.locals;var x=t(763);a()(x.Z,{insert:"head",singleton:!1}),x.Z.locals;var V=t(789);a()(V.Z,{insert:"head",singleton:!1}),V.Z.locals;var E=document.querySelector("#root");E.append(function(){var e=i("HEADER"),n=i("DIV","header-container","container"),r=i("DIV","header-info","header-info"),a=i("DIV","header-info-left","header-info-left"),o=i("DIV","logo","logo main"),s=i("A"),c=i("IMG","","pointer"),l=t(665);c.src=l,s.append(c),o.append(s);var d=i("NAV","top-menu","top-menu"),u=i("UL","top-menu-list","top-menu-list"),p=i("A","","pointer main");p.textContent="Главная";var m=i("A","","pointer consumer");m.textContent="Легковые автомобили";var f=i("A","","pointer buisines");f.textContent="Грузовые автомобили",u.append(p,m,f),d.append(u),a.append(o,d);var v=i("DIV","header-info-rigt","header-info-right"),h=i("DIV","header-form","header-form"),g=i("UL","header-form-list","header-form-list"),y=i("A","open-registr-form","pointer");y.textContent="Регистрация";var b=i("A","open-enter-form","pointer");return b.textContent="Вход",g.append(y,b),h.append(g),v.append(h),r.append(a,v),n.append(r),e.append(n),e}()),E.append(function(){var e=document.createElement("DIV");e.id="carousel-wrap",e.className="carousel-wrap";var n=document.createElement("DIV");n.id="carousel-container",n.className="container";var r=document.createElement("DIV");r.id="carousel",r.className="carousel";var a=document.createElement("DIV");a.id="item-container",a.className="item-container",r.append(a);var o=document.createElement("DIV");o.id="item_1",o.className="item active";var s=document.createElement("DIV");s.id="item_2",s.className="item";var i=document.createElement("DIV");i.id="item_3",i.className="item",a.append(o,s,i);var c=document.createElement("IMG"),l=t(281);c.src=l;var d=document.createElement("IMG"),u=t(765);d.src=u;var p=document.createElement("IMG"),m=t(359);return p.src=m,o.append(c),s.append(d),i.append(p),n.append(r),e.append(n),e}());var q=document.querySelectorAll(".item"),C=0;setInterval((function(){q[C].classList.add("to-left"),q[C].addEventListener("animationend",(function(){this.classList.remove("active","to-left")})),C=(C+1)%q.length,q[C].classList.add("next","from-right"),q[C].addEventListener("animationend",(function(){this.classList.remove("next","from-right"),this.classList.add("active")}))}),6e3);var N=i("DIV","section","section");E.append(N);var Z=i("DIV","section-container","container");N.append(Z);var k=i("DIV","section-wrap","section-wrap");Z.append(k),k.append(function(){var e=i("DIV","left-section","left-section"),n=i("UL","section-menu-list","section-menu-list"),t=i("DIV","","smenu-list main"),r=i("DIV","","smenu-list consumer"),a=i("DIV","","smenu-list buisines"),o=i("DIV","","smenu-list all"),s=i("A");s.textContent="Главная";var c=i("A");c.textContent="Легковые автомобили";var l=i("A");l.textContent="Грузовые автомобили";var d=i("A");return d.textContent="Все автомобили",t.append(s),r.append(c),a.append(l),o.append(d),n.append(t,r,a,o),e.append(n),e}());var M=i("DIV","right-section","right-section");k.append(M);var O=i("DIV","vitrina","vitrina");M.append(O);var R=i("DIV","main-banner","main-banner show");M.append(R);var j=i("IMG","","img-main"),$=t(764);j.src=$,R.append(j),function(){for(var e=0;e<L.length;e++){var n=[];n[e]=d(L[e].pic,L[e].name,L[e].price,"card consumer-item hiden"),O.append(n[e])}}(),function(){for(var e=0;e<D.length;e++){var n=[];n[e]=d(D[e].pic,D[e].name,D[e].price,"card buisines-item hiden"),O.append(n[e])}}(),document.querySelectorAll(".consumer").forEach((function(e){return e.addEventListener("click",(function(){for(var e=document.querySelectorAll(".consumer-item"),n=0;n<e.length;n++)-1!=e[n].className.indexOf("hiden")&&(e[n].classList.remove("hiden"),e[n].classList.add("show"));e=document.querySelectorAll(".buisines-item");for(var t=0;t<e.length;t++)-1!=e[t].className.indexOf("show")&&(e[t].classList.remove("show"),e[t].classList.add("hiden"));var r=document.querySelector(".main-banner");console.log(r),-1!=r.className.indexOf("show")&&(r.classList.remove("show"),r.classList.add("hiden"))}))})),document.querySelectorAll(".buisines").forEach((function(e){return e.addEventListener("click",(function(){for(var e=document.querySelectorAll(".buisines-item"),n=0;n<e.length;n++)-1!=e[n].className.indexOf("hiden")&&(e[n].classList.remove("hiden"),e[n].classList.add("show"));e=document.querySelectorAll(".consumer-item");for(var t=0;t<e.length;t++)-1!=e[t].className.indexOf("show")&&(e[t].classList.remove("show"),e[t].classList.add("hiden"));var r=document.querySelector(".main-banner");-1!=r.className.indexOf("show")&&(r.classList.remove("show"),r.classList.add("hiden"))}))})),document.querySelectorAll(".all").forEach((function(e){return e.addEventListener("click",(function(){for(var e=document.querySelectorAll(".buisines-item"),n=0;n<e.length;n++)-1!=e[n].className.indexOf("hiden")&&(e[n].classList.remove("hiden"),e[n].classList.add("show"));e=document.querySelectorAll(".consumer-item");for(var t=0;t<e.length;t++)-1!=e[t].className.indexOf("hiden")&&(e[t].classList.remove("hiden"),e[t].classList.add("show"));var r=document.querySelector(".main-banner");-1!=r.className.indexOf("show")&&(r.classList.remove("show"),r.classList.add("hiden"))}))})),document.querySelectorAll(".main").forEach((function(e){return e.addEventListener("click",(function(){for(var e=document.querySelectorAll(".buisines-item"),n=0;n<e.length;n++)-1!=e[n].className.indexOf("show")&&(e[n].classList.remove("show"),e[n].classList.add("hiden"));e=document.querySelectorAll(".consumer-item");for(var t=0;t<e.length;t++)-1!=e[t].className.indexOf("show")&&(e[t].classList.remove("show"),e[t].classList.add("hiden"));var r=document.querySelector(".main-banner");-1!=r.className.indexOf("hiden")&&(r.classList.remove("hiden"),r.classList.add("show"))}))}));var _=i("DIV","futer","futer");E.append(_);var T=i("DIV","futer-container","container");_.append(T),E.append(function(){var e=i("DIV","enter-form","enter-form"),n=i("DIV","enter-content","enter-content"),t=i("DIV","enter-close","enter-close");t.textContent="×";var r=i("DIV","enter-description","enter-description");return r.textContent="Спасибо за покупку",n.append(t,r),e.append(n),e}());var U=document.querySelector(".enter-form"),G=document.querySelectorAll(".buy"),K=document.querySelector(".enter-close");G.forEach((function(e){return e.addEventListener("click",(function(){U.style.display="block"}))})),K.addEventListener("click",(function(){U.style.display="none"})),window.addEventListener("click",(function(e){e.target==U&&(U.style.display="none")})),E.append(function(){var e=i("DIV","login-form","login-form"),n=i("DIV","login-wrap","login-wrap"),t=i("DIV","login-dscr","login-dscr");t.textContent="Войти";var r=i("DIV","user-name","user-name"),a=i("input","input-user-name","input-user-name");a.placeholder="user@example.com";var o=i("DIV","user-pass","user-pass"),s=i("input","input-user-pass","input-pass");s.placeholder="Пароль";var c=i("DIV","login-btn","login-btn");c.textContent="ВОЙТИ";var l=i("DIV","close-btn","close-btn"),d=i("SPAN","span-close-btn-login","span-close-btn-login");return d.textContent="×",document.body.append(e),e.append(n),n.append(l),l.append(d),n.append(t),n.append(r),r.append(a),n.append(o),o.append(s),n.append(c),e}());var X=document.querySelector("#open-enter-form"),Y=document.querySelector(".login-form"),P=document.querySelector(".span-close-btn-login");X.addEventListener("click",(function(){Y.style.display="block"})),window.addEventListener("click",(function(e){e.target==Y&&(Y.style.display="none")})),P.addEventListener("click",(function(){Y.style.display="none"}));var B=document.querySelector(".login-btn");console.log(B),B.addEventListener("click",(function(){var e=document.querySelector(".input-user-name").value,n=document.querySelector(".input-pass").value;""==e||""==n?alert("Поля не должны быть пустыми..."):(localStorage.setItem("login",e),localStorage.setItem("password",n),Y.style.display="none",document.querySelector(".input-user-name").value="",document.querySelector(".input-pass").value="")})),E.append(function(){var e=i("DIV","registr-form","registr-form"),n=i("DIV","registr-wrap","registr-wrap"),t=i("DIV","registr-dscr","registr-dscr");t.textContent="РЕГИСТРАЦИЯ";var r=i("DIV","registr-user-name","registr-user-name"),a=i("input","input-registr-user-name","input-registr-user-name");a.placeholder="Имя пользователя";var o=i("DIV","registr-name","registr-name"),s=i("input","input-registr-name","input-registr-name");s.placeholder="user@example.com";var c=i("DIV","registr-pass","registr-pass"),l=i("input","input-registr-pass","input-registr-pass");l.placeholder="Пароль";var d=i("DIV","registr-btn","registr-btn");d.textContent="ЗАРЕГИСТРИРОВАТЬ";var u=i("DIV","close-registr-btn","close-registr-btn"),p=i("SPAN","span-close-btn-registr","span-close-btn-registr");return p.textContent="×",document.body.append(e),e.append(n),n.append(u),u.append(p),n.append(t),n.append(r),r.append(a),n.append(o),o.append(s),n.append(c),c.append(l),n.append(d),e}());var H=document.querySelector("#open-registr-form"),F=document.querySelector(".registr-form"),J=document.querySelector(".span-close-btn-registr");H.addEventListener("click",(function(){F.style.display="block"})),window.addEventListener("click",(function(e){e.target==F&&(F.style.display="none")})),J.addEventListener("click",(function(){F.style.display="none"}));var W=document.querySelector(".registr-btn");console.log(W),W.addEventListener("click",(function(){var e=document.querySelector(".input-registr-user-name").value,n=document.querySelector(".input-registr-name").value,t=document.querySelector(".input-registr-pass").value;""==e||""==n||""==t?alert("Поля не должны быть пустыми..."):(localStorage.setItem("registrName",e),localStorage.setItem("registrLogin",n),localStorage.setItem("registrPassword",t),F.style.display="none",document.querySelector(".input-registr-user-name").value="",document.querySelector(".input-registr-name").value="",document.querySelector(".input-registr-pass").value="")}))},183:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(15),a=t.n(r),o=t(645),s=t.n(o)()(a());s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const i=s},134:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(15),a=t.n(r),o=t(645),s=t.n(o)()(a());s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const i=s},852:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(15),a=t.n(r),o=t(645),s=t.n(o)()(a());s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const i=s},680:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(15),a=t.n(r),o=t(645),s=t.n(o)()(a());s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const i=s},763:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(15),a=t.n(r),o=t(645),s=t.n(o)()(a());s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const i=s},789:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(15),a=t.n(r),o=t(645),s=t.n(o)()(a());s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const i=s},144:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(15),a=t.n(r),o=t(645),s=t.n(o)()(a());s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const i=s},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(a[s]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);r&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},15:e=>{"use strict";function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}e.exports=function(e){var t,r,a=(r=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(t.push(s.value),!n||t.length!==n);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return t}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[1],s=a[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),l="/*# ".concat(c," */"),d=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[o].concat(d).concat([l]).join("\n")}return[o].join("\n")}},379:(e,n,t)=>{"use strict";var r,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function s(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function i(e,n){for(var t={},r=[],a=0;a<e.length;a++){var i=e[a],c=n.base?i[0]+n.base:i[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=s(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:d,updater:v(p,n),references:1}),r.push(d)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,a);else{var o=document.createTextNode(a),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(o,s[n]):e.appendChild(o)}}function p(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function v(e,n){var t,r,a;if(n.singleton){var o=f++;t=m||(m=c(n)),r=u.bind(null,t,o,!1),a=u.bind(null,t,o,!0)}else t=c(n),r=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=i(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=s(t[r]);o[a].references--}for(var c=i(e,n),l=0;l<t.length;l++){var d=s(t[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=c}}}},764:(e,n,t)=>{"use strict";e.exports=t.p+"fbe92106287818c6db6e.jpg"},237:(e,n,t)=>{"use strict";e.exports=t.p+"1bc6c31516818337c26c.jpg"},665:(e,n,t)=>{"use strict";e.exports=t.p+"44e1c43f1fe1308b418b.png"},281:(e,n,t)=>{"use strict";e.exports=t.p+"6917f04eac38db98497d.jpg"},765:(e,n,t)=>{"use strict";e.exports=t.p+"708c1df93adb529d62d2.jpg"},359:(e,n,t)=>{"use strict";e.exports=t.p+"5463baebff7c323a32b1.jpg"},988:(e,n,t)=>{"use strict";e.exports=t.p+"f56dc0270b90c58e98b2.jpg"}},0,[[652,666]]]);