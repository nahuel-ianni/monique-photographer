(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],f=0,p=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00ea":function(t,e,a){"use strict";var n=a("34b0"),s=a.n(n);s.a},"04bf":function(t,e,a){"use strict";var n=a("0ac6"),s=a.n(n);s.a},"0ac6":function(t,e,a){},1036:function(t,e,a){t.exports=a.p+"img/img-1.524f7968.jpeg"},1833:function(t,e,a){"use strict";var n=a("911c"),s=a.n(n);s.a},"1f71":function(t,e,a){t.exports=a.p+"img/img-6.27028a0c.jpeg"},2545:function(t,e,a){t.exports=a.p+"img/img-4.7d8c1047.jpeg"},"2ded":function(t,e,a){"use strict";var n=a("8c48"),s=a.n(n);s.a},"34b0":function(t,e,a){},"3ee7":function(t,e,a){t.exports=a.p+"img/img-2.18faec89.jpeg"},"4e3f":function(t,e,a){},5662:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",[a("SiteNavigation")],1),a("main",{staticClass:"main"},[a("HeaderPanel"),a("section",{staticClass:"content"},[a("section",{staticClass:"desktop"},[a("h2",[t._v("Contact me")]),a("ContactInformation")],1),a("router-view"),a("hr",{staticClass:"desktop rule"}),a("hr",{staticClass:"desktop rule vertical"})],1)],1),a("footer",{staticClass:"desktop"})])},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"article"},[n("Flickity",{ref:"flickity",staticClass:"carousel",attrs:{options:t.settings}},[n("img",{staticClass:"img",attrs:{src:a("1036"),alt:"Picture from a set."}}),n("img",{staticClass:"img",attrs:{src:a("3ee7"),alt:"Picture from a set."}}),n("img",{staticClass:"img",attrs:{src:a("5f19"),alt:"Picture from a set."}}),n("img",{staticClass:"img",attrs:{src:a("2545"),alt:"Picture from a set."}})]),n("div",{staticClass:"controls"},[n("svg",{staticClass:"svg",attrs:{viewBox:"0 0 320 512"},on:{click:function(e){return t.previous()}}},[n("path",{attrs:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"}})]),n("svg",{staticClass:"svg",attrs:{viewBox:"0 0 320 512"},on:{click:function(e){return t.next()}}},[n("path",{attrs:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}})])])],1)},r=[],c=a("b394"),l={name:"Carousel",components:{Flickity:c["a"]},data:function(){return{settings:{autoPlay:5e3,cellAlign:"left",initialIndex:Math.floor(Math.random()*Math.floor(4)),pageDots:!1,pauseAutoPlayOnHover:!0,prevNextButtons:!1,setGallerySize:!1,wrapAround:!0}}},methods:{next:function(){this.$refs.flickity.next()},previous:function(){this.$refs.flickity.previous()}}},u=l,f=(a("1833"),a("2877")),p=Object(f["a"])(u,o,r,!1,null,"5f0e0702",null),m=p.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("ul",{staticClass:"ul"},[a("li",{staticClass:"li"},[a("svg",{staticClass:"svg",attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"}})]),a("a",{staticClass:"link",attrs:{href:"mailto:anastasia@arbos.com"}},[t._v("anastasia@arbos.com")])]),a("li",{staticClass:"li"},[a("svg",{staticClass:"svg",attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}})]),a("a",{staticClass:"link",attrs:{href:"tel:+3902120135623"}},[t._v("+39 02 120 135 623")])]),a("li",{staticClass:"li"},[a("svg",{staticClass:"svg",attrs:{viewBox:"0 0 448 512"}},[a("path",{attrs:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})]),a("a",{staticClass:"link",attrs:{href:"http://",target:"_blank",rel:"noopener noreferrer"}},[t._v("anastasia.arbos")])]),a("li",{staticClass:"li"},[a("svg",{staticClass:"svg",attrs:{viewBox:"0 0 576 512"}},[a("path",{attrs:{d:"M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"}})]),a("a",{staticClass:"link",attrs:{href:"http://",target:"_blank",rel:"noopener noreferrer"}},[t._v("anastasia.arbos")])])])])},g=[],d={name:"ContactInformation"},h=d,b=(a("83e0"),Object(f["a"])(h,v,g,!1,null,"07f9a71d",null)),C=b.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"title"},[a("h1",[t._v("Anastasia Arbos")]),a("p",[t._v("Fashion model photographer")])]),a("p",{staticClass:"subtitle"},[t._v(" I've moved to Milan "),a("br"),t._v("and want to shoot. "),a("br"),a("br"),t._v("Get in touch, "),a("br"),t._v("let's work together. ")])])}],j={name:"HeaderPanel"},k=j,y=(a("f791"),Object(f["a"])(k,_,x,!1,null,"22c4a4b6",null)),w=y.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"img",attrs:{src:this.source,alt:"Portfolio image"},on:{click:function(e){return t.onClick()}}}),a("article",{staticClass:"modal",class:{"modal-visible":t.showModal},on:{click:function(e){return t.onClick()}}},[a("span",{staticClass:"close"},[t._v("×")]),a("img",{staticClass:"modal-content",attrs:{src:this.source}})])])},O=[],z={name:"ModalImage",props:{src:String},data:function(){return{showModal:!1}},computed:{source:function(){return a("a042")("./".concat(this.src,".jpeg"))}},methods:{onClick:function(){this.showModal=!this.showModal}}},P=z,E=(a("900b"),Object(f["a"])(P,M,O,!1,null,"07e85ac4",null)),$=E.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav"},[a("svg",{staticClass:"mobile nav-menu svg",class:{"expanded-menu":t.expandMenu},attrs:{viewBox:"0 0 448 512"}},[a("path",{staticClass:"nav-menu",attrs:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}})]),a("ul",{staticClass:"ul",class:{"expanded-menu":t.expandMenu}},[a("li",[a("router-link",{staticClass:"a",attrs:{to:"/"}},[t._v("Home")])],1),a("li",[a("router-link",{staticClass:"a",attrs:{to:"/portfolio"}},[t._v("Portfolio")])],1),a("li",[a("router-link",{staticClass:"a",attrs:{to:"/about"}},[t._v("About")])],1),a("li",[a("router-link",{staticClass:"a mobile",attrs:{to:"/contact"}},[t._v("Contact")])],1)])])},I=[],S={name:"SiteNavigation",data:function(){return{expandMenu:!1}},methods:{toggleMenuVisibility:function(t){(this.expandMenu||t.target.classList.contains("nav-menu"))&&(this.expandMenu=!this.expandMenu)}},created:function(){window.addEventListener("click",this.toggleMenuVisibility)},destroyed:function(){window.removeEventListener("click",this.toggleMenuVisibility)}},L=S,V=(a("04bf"),Object(f["a"])(L,H,I,!1,null,"73093482",null)),A=V.exports,B={name:"App",components:{ContactInformation:C,HeaderPanel:w,SiteNavigation:A}},N=B,F=(a("83ea"),a("00ea"),Object(f["a"])(N,s,i,!1,null,"cdcb74bc",null)),T=F.exports,D=a("8c4f"),G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("article",[n("h2",[t._v("Welcome!")]),n("p",{staticClass:"p"},[n("br"),t._v("I'm Anastasia, a passionate photographer. "),n("br"),n("br"),t._v("I've been part of the fashion industry for over 20 years now, as well as a hobbist landscape lover. "),n("br"),t._v("I try to find beauty wherever I go and immortalize it through the lens of my camera, a faithful companion always at my side. ")])]),n("img",{staticClass:"desktop img",attrs:{src:a("9696"),alt:"Myself, looking at you through the lens of a camera"}})])}],J={name:"About"},U=J,q=(a("2ded"),Object(f["a"])(U,G,W,!1,null,"9f96f6f2",null)),K=q.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("h2",{staticClass:"mobile"},[t._v("Contact me")]),t._m(0),a("ContactInformation",{staticClass:"mobile"})],1)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" I'm always open to new opportunities. "),a("br"),t._v("Inquiries of all kinds are welcomed! ")])}],X={name:"Contact",components:{ContactInformation:C}},Y=X,Z=(a("99ab"),Object(f["a"])(Y,Q,R,!1,null,"5a792b3a",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Carousel")},at=[],nt={name:"Home",components:{Carousel:m}},st=nt,it=Object(f["a"])(st,et,at,!1,null,null,null),ot=it.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("h2",{staticClass:"h2"},[t._v("We couldn't find the page you were looking for!")]),a("p",[t._v(" Click "),a("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("here to go back home")]),t._v(". ")],1)])},ct=[],lt={name:"PageNotFound"},ut=lt,ft=(a("d44d"),Object(f["a"])(ut,rt,ct,!1,null,"f58270f0",null)),pt=ft.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("h2",[t._v("Portfolio")]),t._m(0),a("ul",{staticClass:"ul"},t._l(t.items,(function(t){return a("li",{key:t},[a("ModalImage",{attrs:{src:"img-"+t}})],1)})),0)])},vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" This is but a sample of my previous work. "),a("br"),t._v("Want to see more? Get in touch with me! ")])}],gt=(a("a9e3"),{name:"Portfolio",props:{items:Number},components:{ModalImage:$}}),dt=gt,ht=(a("a254"),Object(f["a"])(dt,mt,vt,!1,null,"58f37ef9",null)),bt=ht.exports;n["a"].use(D["a"]);var Ct=new D["a"]({routes:[{path:"/",component:ot},{path:"/about",component:K},{path:"/contact",component:tt},{path:"/portfolio",component:bt,props:{items:12}},{path:"*",component:pt}]});n["a"].config.productionTip=!1,new n["a"]({router:Ct,render:function(t){return t(T)}}).$mount("#app")},"5f19":function(t,e,a){t.exports=a.p+"img/img-3.b03a14bb.jpeg"},"68c1":function(t,e,a){},"7ed1":function(t,e,a){},"83e0":function(t,e,a){"use strict";var n=a("b6d0"),s=a.n(n);s.a},"83ea":function(t,e,a){"use strict";var n=a("d1a3"),s=a.n(n);s.a},8889:function(t,e,a){t.exports=a.p+"img/img-5.23bab305.jpeg"},"8c48":function(t,e,a){},"900b":function(t,e,a){"use strict";var n=a("4e3f"),s=a.n(n);s.a},"911c":function(t,e,a){},9696:function(t,e,a){t.exports=a.p+"img/img-about.7e726249.jpeg"},"97c0":function(t,e,a){t.exports=a.p+"img/img-8.47c7b813.jpeg"},"99ab":function(t,e,a){"use strict";var n=a("68c1"),s=a.n(n);s.a},a042:function(t,e,a){var n={"./img-1.jpeg":"1036","./img-10.jpeg":"f432","./img-11.jpeg":"d8df","./img-12.jpeg":"a6c0","./img-2.jpeg":"3ee7","./img-3.jpeg":"5f19","./img-4.jpeg":"2545","./img-5.jpeg":"8889","./img-6.jpeg":"1f71","./img-7.jpeg":"fe68","./img-8.jpeg":"97c0","./img-9.jpeg":"fd1b","./img-about.jpeg":"9696"};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="a042"},a254:function(t,e,a){"use strict";var n=a("7ed1"),s=a.n(n);s.a},a6c0:function(t,e,a){t.exports=a.p+"img/img-12.eae96f76.jpeg"},b6d0:function(t,e,a){},d1a3:function(t,e,a){},d44d:function(t,e,a){"use strict";var n=a("e3a6"),s=a.n(n);s.a},d8df:function(t,e,a){t.exports=a.p+"img/img-11.0d0389ae.jpeg"},e3a6:function(t,e,a){},f432:function(t,e,a){t.exports=a.p+"img/img-10.c12e36cc.jpeg"},f791:function(t,e,a){"use strict";var n=a("5662"),s=a.n(n);s.a},fd1b:function(t,e,a){t.exports=a.p+"img/img-9.bf7860fa.jpeg"},fe68:function(t,e,a){t.exports=a.p+"img/img-7.b0c47d78.jpeg"}});
//# sourceMappingURL=app.1b47f8f9.js.map