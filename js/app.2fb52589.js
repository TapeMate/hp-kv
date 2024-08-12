(function(){var e={9891:function(e,t,n){"use strict";var i=n(5130),r=n(6768);function a(e,t){const n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(n)}var o=n(1241);const s={},c=(0,o.A)(s,[["render",a]]);var l=c,u=n(1387);function m(e,t,n,i,a,o){const s=(0,r.g2)("NavbarMain"),c=(0,r.g2)("MainSection"),l=(0,r.g2)("ServiceSection"),u=(0,r.g2)("GallerySection"),m=(0,r.g2)("ContactSection"),g=(0,r.g2)("FooterMain");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.bF)(s),(0,r.bF)(c),(0,r.bF)(l),(0,r.bF)(u),(0,r.bF)(m),(0,r.bF)(g)])}var g=n(4232);const p={class:"navbar-items"};function d(e,t,n,i,a,o){return(0,r.uX)(),(0,r.CE)("nav",p,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.navItems,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{key:t,class:"nav-item"},(0,g.v_)(e.title),1)))),128))])}var v=JSON.parse('{"lW":[{"title":"Startseite"},{"title":"Dienstleistung"},{"title":"Gallerie"},{"title":"Contact"}],"iu":[{"content":"Grünanlagenpflege"},{"content":"Baumschnitt"},{"content":"Industrieklettern"}],"l9":[{"header":"service header","description":"service dummy content."},{"header":"service header","description":"service dummy content."},{"header":"service header","description":"service dummy content."},{"header":"service header","description":"service dummy content."}],"BZ":{"phone":"0170 - 00 00 00 00","email":"some@one.de"},"Fs":[{"title":"Startseite","url":"#"},{"title":"Impressum","url":"#"},{"title":"Datenschutz","url":"#"}],"sN":[{"id":"01","title":"img title","description":"you will find a description of the shown image here, to tell you what this image is about."},{"id":"02","title":"img title","description":"you will find a description of the shown image here, to tell you what this image is about."},{"id":"03","title":"img title","description":"you will find a description of the shown image here, to tell you what this image is about."}]}'),f={name:"NavbarMain",data(){return{navItems:v.lW}},methods:{}};const h=(0,o.A)(f,[["render",d]]);var y=h;const b={class:"section-main-container"},k={class:"section-main-banner-container"},C=(0,r.Lk)("h3",{class:"section-main-header"},"dummy header main",-1),L=(0,r.Lk)("div",{class:"section-main-logo"},null,-1),E={class:"section-main-content"},I=(0,r.Lk)("div",{class:"section-main-options"},[(0,r.Lk)("button",{class:"main-option-btn"},"OPTION BUTTON")],-1);function w(e,t,n,i,a,o){return(0,r.uX)(),(0,r.CE)("section",b,[(0,r.Lk)("div",k,[C,L,(0,r.Lk)("div",E,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.bannerContent,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{key:t,class:"banner-content"},(0,g.v_)(e.content),1)))),128))]),I])])}var F={name:"MainSection",data(){return{bannerContent:v.iu}}};const O=(0,o.A)(F,[["render",w]]);var X=O;const S={class:"section-service-container"},x=(0,r.Lk)("h3",{class:"section-service-header"},"dummy header service",-1),_={class:"section-service-items"},A={class:"service-item-header"},M={class:"service-item-description"};function D(e,t,n,i,a,o){return(0,r.uX)(),(0,r.CE)("section",S,[x,(0,r.Lk)("div",_,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.serviceContent,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{key:t,class:"service-item"},[(0,r.Lk)("h4",A,(0,g.v_)(e.header),1),(0,r.Lk)("p",M,(0,g.v_)(e.description),1)])))),128))])])}var N={name:"ServiceSection",data(){return{serviceContent:v.l9}}};const G=(0,o.A)(N,[["render",D]]);var j=G;const T={class:"section-gallery-container"};function W(e,t,n,i,a,o){const s=(0,r.g2)("ImgGallery");return(0,r.uX)(),(0,r.CE)("section",T,[(0,r.bF)(s)])}const K={class:"gallery-container"},B=(0,r.Lk)("h3",{class:"gallery-header"},"dummy header gallery",-1),P={class:"img-gallery"},U={class:"gallery-item-header"},Z=["src"],z={class:"gallery-item-description"};function H(e,t,n,i,a,o){return(0,r.uX)(),(0,r.CE)("div",K,[B,(0,r.Lk)("div",P,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.galleryData,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{key:t,class:"gallery-item"},[(0,r.Lk)("h4",U,(0,g.v_)(e.title),1),(0,r.Lk)("img",{src:e.image,alt:"Galeriebild",class:"gallery-item-image"},null,8,Z),(0,r.Lk)("p",z,(0,g.v_)(e.description),1)])))),128))])])}var J={name:"ImgGallery",data(){return{galleryData:this.importAllImagesWithMetaData()}},methods:{importAllImages(){const e=n(874);return e.keys().map(e)},importAllImagesWithMetaData(){const e=this.importAllImages(),t=v.sN;return e.map(((e,n)=>({image:e,title:t[n]?.title||"Default Title",description:t[n]?.description||"Default Description"})))}}};const V=(0,o.A)(J,[["render",H]]);var $=V,q={name:"GallerySection",components:{ImgGallery:$}};const Q=(0,o.A)(q,[["render",W]]);var R=Q;const Y={class:"section-contact-container"},ee={class:"section-contact-background"},te=(0,r.Lk)("h3",{class:"section-contact-header"},"dummy header contact",-1),ne={class:"section-contact-info"},ie=(0,r.Lk)("button",{class:"enable-contact-info-btn"},"get in contact",-1),re=(0,r.Lk)("div",null,"captcha placeholder",-1);function ae(e,t,n,i,a,o){return(0,r.uX)(),(0,r.CE)("section",Y,[(0,r.Lk)("div",ee,[te,(0,r.Lk)("div",ne,[ie,re,(0,r.Lk)("p",null,[(0,r.eW)(" Phone: "),(0,r.Lk)("span",null,(0,g.v_)(a.contactInfo.phone),1)]),(0,r.Lk)("p",null,[(0,r.eW)(" Email: "),(0,r.Lk)("span",null,(0,g.v_)(a.contactInfo.email),1)])])])])}var oe={name:"ContactSection",data(){return{contactInfo:v.BZ}}};const se=(0,o.A)(oe,[["render",ae]]);var ce=se;const le={class:"footer-items"},ue={href:"",class:"footer-url"};function me(e,t,n,i,a,o){return(0,r.uX)(),(0,r.CE)("footer",le,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.footerItems,((e,t)=>((0,r.uX)(),(0,r.CE)("div",{key:t,class:"footer-item"},[(0,r.Lk)("a",ue,(0,g.v_)(e.title),1)])))),128))])}var ge={name:"FooterMain",data(){return{footerItems:v.Fs}}};const pe=(0,o.A)(ge,[["render",me]]);var de=pe,ve={name:"HomeView",components:{NavbarMain:y,MainSection:X,ServiceSection:j,GallerySection:R,ContactSection:ce,FooterMain:de}};const fe=(0,o.A)(ve,[["render",m]]);var he=fe;const ye=[{path:"/",name:"home",component:he}],be=(0,u.aE)({history:(0,u.LA)("/hp-kv/"),routes:ye});var ke=be,Ce=n(782),Le=(0,Ce.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,i.Ef)(l).use(Le).use(ke).mount("#app")},874:function(e,t,n){var i={"./galleryimg01.png":4359,"./galleryimg02.png":6252,"./galleryimg03.png":9141,"./galleryimg04.png":2266,"./galleryimg05.png":1123,"./galleryimg06.png":5368,"./galleryimg07.png":6497,"./galleryimg08.png":7654,"./galleryimg09.png":319};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id=874},4359:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg01.a912bf81.png"},6252:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg02.a912bf81.png"},9141:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg03.a912bf81.png"},2266:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg04.a912bf81.png"},1123:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg05.a912bf81.png"},5368:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg06.a912bf81.png"},6497:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg07.a912bf81.png"},7654:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg08.a912bf81.png"},319:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg09.a912bf81.png"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,a){if(!i){var o=1/0;for(u=0;u<e.length;u++){i=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,c=0;c<i.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(s=!1,a<o&&(o=a));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/hp-kv/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,a,o=i[0],s=i[1],c=i[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(t&&t(i);l<o.length;l++)a=o[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},i=self["webpackChunkhp_kv"]=self["webpackChunkhp_kv"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(9891)}));i=n.O(i)})();
//# sourceMappingURL=app.2fb52589.js.map