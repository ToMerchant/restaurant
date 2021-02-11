(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var i=t(645),a=t.n(i)()((function(e){return e[1]}));a.push([e.id,"@import url(//fonts.googleapis.com/css?family=Vibur);"]),a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Trispace:wght@500&display=swap);"]),a.push([e.id,"\n#review{\n  font-size: .8em;\n  margin-top:30px;\n}\n#content{\n    \n    background-color: rgba(0, 0, 0, 0.452);\n    margin-left:15vw;\n    margin-right:15vw;\n    font-family:'Trispace', sans-serif;\n    white-space: pre-line;\n}\n#navBar{\n  \n    \n    background-color: #f944ff85;\n    color: #f944ff85;\n    box-shadow: 0 -40px 100px, 0 0 0px, 0 0 1em #f944ff85, 0 0 0.5em #f944ff85, 0 0 0.1em #f944ff85, 0 10px 3px #000;\n    margin-left:-30px;\n    margin-right:-30px;\n    margin-bottom:30px;\n    padding-right: 20px;\n    margin-top:-7px;\n\n}\nbody {\n    background-image: url(https://media.giphy.com/media/TxVVB6PfWMjE4/giphy.gif);\n    background-size: cover;\n    height: 100vh;\n}\n.tabs{\n    margin-left:15px;\n    margin-right:25px;\n    font-size: 1.1em;\n    font-family:'Trispace', sans-serif;\n    color:white;\n}\n.tabs:hover{\n    color:black;\n    cursor:pointer;\n    \n}\n*{\n    color: white;\n}\nh1{\n    text-align: center;\n}\n#imageLocation{\n    border-color: white;\n    border:solid;\n}\nh2{\n    text-align: center;\n}\n#cost{\n    font-style: italic;\n    font-size:.8em;\n}\np{\n    white-space: pre-line;\n}\n\n\n\n.milli {\n    text-align: center;\n  }\n  \n  .milli b{\n    font: 400 2em \"Vibur\";\n    color: #fee;\n    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;\n  }\n  .milli b span{\n    animation: blink linear infinite 2s;\n  }\n  .milli b span:nth-of-type(2){\n    animation: blink linear infinite 3s;\n  }\n\n\n  .subtitle {\n    text-align: center;\n\n  }\n  \n  .subtitle b{\n    font: 400 1.2em \"Vibur\";\n    color: #fee;\n    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #5aff44, 0 0 0.5em #5aff44, 0 0 0.1em #5aff44, 0 10px 3px #000;\n  }\n  .subtitle b span{\n    animation: blink linear infinite 1s;\n  }\n  .subtitle b span:nth-of-type(2){\n    animation: blink linear infinite 5s;\n  }\n  .subtitle b span:nth-of-type(3){\n    animation: blink linear infinite 2s;\n  }\n  @keyframes blink {\n    78% {\n      color: inherit;\n      text-shadow: inherit;\n    }\n    79%{\n       color: #333;\n    }\n    80% {\n      \n      text-shadow: none;\n    }\n    81% {\n      color: inherit;\n      text-shadow: inherit;\n    }\n    82% {\n      color: #333;\n      text-shadow: none;\n    }\n    83% {\n      color: inherit;\n      text-shadow: inherit;\n    }\n    92% {\n      color: #333;\n      text-shadow: none;\n    }\n    92.5% {\n      color: inherit;\n      text-shadow: inherit;\n    }\n  }\n",""]);const o=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);i&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var i,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function r(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},i=[],a=0;a<e.length;a++){var l=e[a],s=n.base?l[0]+n.base:l[0],c=t[s]||0,d="".concat(s," ").concat(c);t[s]=c+1;var u=r(d),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:d,updater:f(p,n),references:1}),i.push(d)}return i}function s(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var c,d=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function u(e,n,t,i){var a=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(n,a);else{var o=document.createTextNode(a),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(o,r[n]):e.appendChild(o)}}function p(e,n,t){var i=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,m=0;function f(e,n){var t,i,a;if(n.singleton){var o=m++;t=h||(h=s(n)),i=u.bind(null,t,o,!1),a=u.bind(null,t,o,!0)}else t=s(n),i=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var a=r(t[i]);o[a].references--}for(var s=l(e,n),c=0;c<t.length;c++){var d=r(t[c]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=s}}}}},n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={id:i,exports:{}};return e[i](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e=function(){let e=document.getElementById("content");e.innerHTML="";let n=document.createElement("h1");n.textContent="⭐⭐⭐⭐⭐",e.appendChild(n);let t=document.createElement("p");t.setAttribute("id","review"),t.textContent="The Restaurant at the End of the Universe is one of the most extraordinary ventures in the entire history of catering.\r\n\r\nIt is built on the fragmented remains of an eventually ruined planet which is (wioll haven be) enclosed in a vast time bubble and projected forward in time to the precise moment of the End of the Universe.\r\n\r\nThis is, many would say, impossible.\r\n\r\nIn it, guests take (willan on-take) their places at table and eat (willan on eat) sumptuous meals while watching (willing watchen) the whole of creation explode around them.\r\n\r\nThis, many would say, is equally impossible.\r\n\r\nYou can arrive (mayan arrivan on-when) for any sitting you like without prior (late fore-when) reservation because you can book retrospectively, as it were, when you return to your own time (you can have on-book haventa forewhen presooning returningwenta retrohome).\r\n\r\nThis is, many would now insist, absolutely impossible.\r\n\r\nAt the Restaurant you can meet and dine with (mayan meetan con with dinan on when) a fascinating cross-section of the entire population of space and time.\r\n\r\nThis, it can be explained patiently, is also impossible.\r\n\r\n",e.appendChild(t)};var n=t(379),i=t.n(n),a=t(426);i()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;let o=document.createElement("div");o.style.display="flex",o.style.justifyContent="flex-end";let r=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div");r.textContent="Home",l.textContent="Menu",s.textContent="Contact",r.setAttribute("class","tabs"),l.setAttribute("class","tabs"),s.setAttribute("class","tabs"),o.appendChild(r),o.appendChild(l),o.appendChild(s),document.getElementById("navBar").appendChild(o),r.addEventListener("click",e),l.addEventListener("click",(function(){let e=document.getElementById("content");e.innerHTML="";let n=document.createElement("h1");n.textContent="MENU*",e.appendChild(n);let t=document.createElement("h4");t.textContent="Dish Of The Day",e.appendChild(t);let i=document.createElement("p");i.textContent="A very obliging Ameglian Major Cow and a somewhat less obliging vegetables in a green salad. Many cuts are available, including shoulder braised in white wine sauce, grain fed rump, casserole, liver and steaks. ",e.appendChild(i);let a=document.createElement("h4");a.textContent="Drinks",e.appendChild(a);let o=document.createElement("p");o.textContent="🍷 Insidious Wines \r\n🥃 Aldebaran liqueurs\n🍹 Pan Galactic Gargle Blasters\n🍾 Champagne\n 🥤 Mineral Water\n☕ Tea (unavailable)",e.appendChild(o);let r=document.createElement("p");r.textContent="*All meals cost only 1 penny, as by the end of the universe, the compound interest over 170+ quintillion years will be sufficient to pay the extremely high bill.",r.setAttribute("id","cost"),e.appendChild(r)})),s.addEventListener("click",(function(){let e=document.getElementById("content");e.innerHTML="";let n=document.createElement("h1");n.textContent="CONTACT",e.appendChild(n);let t=document.createElement("h4");t.textContent="Reservation",e.appendChild(t);let i=document.createElement("p");i.textContent="Arrive at any time without a reservation. Simply book retrospectively, when you return to your own time.",e.appendChild(i);let a=document.createElement("h4");a.textContent="Location",e.appendChild(a);let o=document.createElement("img");o.src="https://imagine.gsfc.nasa.gov/features/cosmic/images/hst_udf_z8.6_t.jpg",o.setAttribute("id","imageLocation"),e.appendChild(o);let r=document.createElement("p");r.textContent="We are, of course, located at the end of the universe. The fastest way here is on an Infinate Improbability Drive, such as The Heart of Gold. Alternatively, tou can try standing next to an exploding hyperspatial field generator on the planet where Milliways will eventually be built several billion years after the explosion occurs.",e.appendChild(r)})),e()})()})();