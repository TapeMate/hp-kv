(function(){var e={1028:function(e,t,n){"use strict";var i=n(5130),a=n(6768);function o(e,t){const n=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.Wv)(n)}var r=n(1241);const l={},s=(0,r.A)(l,[["render",o]]);var c=s,u=n(1387);function m(e,t,n,i,o,r){const l=(0,a.g2)("NavbarMain"),s=(0,a.g2)("MainSection"),c=(0,a.g2)("ServiceSection"),u=(0,a.g2)("GallerySection"),m=(0,a.g2)("ContactSection"),d=(0,a.g2)("FooterMain");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(l),(0,a.bF)(s),(0,a.bF)(c),(0,a.bF)(u),(0,a.bF)(m),(0,a.bF)(d)])}var d=n(4232);const g={class:"navbar-items"};function p(e,t,n,i,o,r){return(0,a.uX)(),(0,a.CE)("nav",g,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.navItems,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:"nav-item"},(0,d.v_)(e.title),1)))),128))])}var h=JSON.parse('{"lW":[{"title":"Startseite"},{"title":"Dienstleistung"},{"title":"Gallerie"},{"title":"Contact"}],"iu":[{"content":"Grünanlagenpflege"},{"content":"Baumschnitt"},{"content":"Industrieklettern"}],"l9":[{"header":"service header","description":"service dummy content."},{"header":"service header","description":"service dummy content."},{"header":"service header","description":"service dummy content."},{"header":"service header","description":"service dummy content."}],"BZ":{"phone":"0170 - 00 00 00 00","email":"some@one.de"},"Fs":[{"title":"Startseite","url":"#"},{"title":"Impressum","url":"#"},{"title":"Datenschutz","url":"#"}],"sN":[{"title":"img title 01","description":"you will find a description of the shown image here, to tell you what this image is about."},{"title":"img title 02","description":"you will find a description of the shown image here, to tell you what this image is about."},{"title":"img title 03","description":"you will find a description of the shown image here, to tell you what this image is about."},{"title":"img title 04"},{"title":"img title 05"},{"title":"img title 06"},{"title":"img title 07"},{"title":"img title 08"},{"title":"img title 09"}]}'),v={name:"NavbarMain",data(){return{navItems:h.lW}},methods:{}};const f=(0,r.A)(v,[["render",p]]);var y=f;const b={class:"section-main-container"},k={class:"section-main-banner-container"},C={class:"section-main-logo"},I=["src"],L={class:"section-main-banner"},x=(0,a.Lk)("div",{class:"section-main-options"},[(0,a.Lk)("button",{class:"main-option-btn"},"OPTION BUTTON")],-1);function M(e,t,n,i,o,r){return(0,a.uX)(),(0,a.CE)("section",b,[(0,a.Lk)("div",k,[(0,a.Lk)("div",C,[(0,a.Lk)("img",{class:"logo",src:o.logo,alt:"Firmenlogo"},null,8,I)]),(0,a.Lk)("div",L,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.bannerContent,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:"banner-content"},(0,d.v_)(e.content),1)))),128))]),x])])}var w=n.p+"img/logo.a195878d.png",E={name:"MainSection",data(){return{bannerContent:h.iu,logo:w}}};const S=(0,r.A)(E,[["render",M]]);var D=S;const X={class:"section-service-container"},F=(0,a.Lk)("h3",{class:"section-service-header"},"dummy header service",-1),O={class:"section-service-items"},N={class:"service-item-header"},_={class:"service-item-description"};function A(e,t,n,i,o,r){return(0,a.uX)(),(0,a.CE)("section",X,[F,(0,a.Lk)("div",O,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.serviceContent,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:"service-item"},[(0,a.Lk)("h4",N,(0,d.v_)(e.header),1),(0,a.Lk)("p",_,(0,d.v_)(e.description),1)])))),128))])])}var T={name:"ServiceSection",data(){return{serviceContent:h.l9}}};const G=(0,r.A)(T,[["render",A]]);var P=G;const j={class:"section-gallery-container"};function W(e,t,n,i,o,r){const l=(0,a.g2)("ImgGallery");return(0,a.uX)(),(0,a.CE)("section",j,[(0,a.bF)(l)])}const B={class:"gallery-container"},V=(0,a.Lk)("h3",{class:"gallery-header"},"dummy header gallery",-1),K={class:"img-gallery"},Q={class:"gallery-item-header"},$=["src","id"],U={class:"gallery-item-description"},Z={key:0,class:"modal-render-container"};function z(e,t,n,i,o,r){const l=(0,a.g2)("ImgModal");return(0,a.uX)(),(0,a.CE)("div",B,[V,(0,a.Lk)("div",K,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.galleryData,((e,n)=>((0,a.uX)(),(0,a.CE)("div",{key:n,class:"gallery-item"},[(0,a.Lk)("h4",Q,(0,d.v_)(e.title),1),(0,a.Lk)("img",{onClick:t[0]||(t[0]=(...e)=>r.onClickShowModal&&r.onClickShowModal(...e)),src:e.image,alt:"Galeriebild",class:"gallery-item-image",id:n},null,8,$),(0,a.Lk)("p",U,(0,d.v_)(e.description),1)])))),128))]),!0===o.viewModal?((0,a.uX)(),(0,a.CE)("div",Z,[(0,a.bF)(l,{onCloseModal:r.onClickCloseModal,onNextImage:r.onClickNextImage,onPrevImage:r.onClickPrevImage,title:o.modalTitle,description:o.modalDescription,image:o.modalImageLink},null,8,["onCloseModal","onNextImage","onPrevImage","title","description","image"])])):(0,a.Q3)("",!0)])}const H={class:"modal-container"},J=["src"],q=["src"],R=["src"],Y={class:"modal-header"},ee=["src"],te={class:"modal-description"};function ne(e,t,n,i,o,r){return(0,a.uX)(),(0,a.CE)("div",H,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=t=>e.$emit("closeModal")),class:"close-modal-btn"},[(0,a.Lk)("img",{class:"modal-close-icon",src:o.close,alt:"Schließen Symbol"},null,8,J)]),(0,a.Lk)("button",{onClick:t[1]||(t[1]=t=>e.$emit("nextImage")),class:"next-image"},[(0,a.Lk)("img",{src:o.next,alt:"Nächstes Bild Symbol",class:"next-icon"},null,8,q)]),(0,a.Lk)("button",{onClick:t[2]||(t[2]=t=>e.$emit("prevImage")),class:"prev-image"},[(0,a.Lk)("img",{src:o.prev,alt:"Vorheriges Bild Symbol",class:"pref-icon"},null,8,R)]),(0,a.Lk)("h4",Y,(0,d.v_)(n.title),1),(0,a.Lk)("img",{src:n.image,alt:"Galeriebild",class:"modal-gallery-image"},null,8,ee),(0,a.Lk)("p",te,(0,d.v_)(n.description),1)])}var ie=n.p+"img/close.1880311d.svg",ae=n.p+"img/arrow-next.f9a36d4f.svg",oe=n.p+"img/arrow-prev.29937bb8.svg",re={name:"ImgModal",data(){return{close:ie,next:ae,prev:oe}},props:{title:String,description:String,image:String}};const le=(0,r.A)(re,[["render",ne]]);var se=le,ce={name:"ImgGallery",components:{ImgModal:se},data(){return{galleryData:this.importAllImagesWithMetaData(),viewModal:!1,currentIndex:null,modalTitle:"",modalDescription:"",modalImageLink:""}},methods:{importAllImages(){const e=n(874);return e.keys().map(e)},importAllImagesWithMetaData(){const e=this.importAllImages(),t=h.sN;return e.map(((e,n)=>({image:e,title:t[n]?.title||"Default Title",description:t[n]?.description||"Default Description"})))},onClickShowModal(e){const t=e.target.id;this.currentIndex=t,this.viewModal=!0,document.body.classList.add("scroll-disabled"),this.updateModalData(t)},onClickCloseModal(){this.viewModal=!1,document.body.classList.remove("scroll-disabled"),this.modalTitle="",this.modalDescription="",this.modalImageLink=""},onClickNextImage(){this.currentIndex+1>=this.galleryData.length?(this.currentIndex=0,this.updateModalData(this.currentIndex)):(this.currentIndex++,this.updateModalData(this.currentIndex))},onClickPrevImage(){this.currentIndex-1<0?(this.currentIndex=this.galleryData.length-1,this.updateModalData(this.currentIndex)):(this.currentIndex--,this.updateModalData(this.currentIndex))},updateModalData(e){this.modalTitle=h.sN[e]?.title||"Default Title",this.modalDescription=h.sN[e]?.description||"Default Description",this.modalImageLink=this.importAllImages()[e]}}};const ue=(0,r.A)(ce,[["render",z]]);var me=ue,de={name:"GallerySection",components:{ImgGallery:me}};const ge=(0,r.A)(de,[["render",W]]);var pe=ge;const he={class:"section-contact-container"},ve=(0,a.Lk)("h3",{class:"section-contact-header"},"dummy header contact",-1),fe={class:"section-contact-content"},ye={key:0},be={key:1},ke=(0,a.Lk)("h5",null,"captcha placeholder",-1),Ce={key:2,class:"section-contact-info"};function Ie(e,t,n,i,o,r){return(0,a.uX)(),(0,a.CE)("section",he,[ve,(0,a.Lk)("div",fe,[!1===o.captchaEnabled?((0,a.uX)(),(0,a.CE)("div",ye,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>r.enableCaptcha&&r.enableCaptcha(...e)),class:"enable-contact-info-btn"}," get in contact ")])):(0,a.Q3)("",!0),!0===o.captchaEnabled&&!1===o.contactInfoVissible?((0,a.uX)(),(0,a.CE)("div",be,[ke,(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>r.showContactInfo&&r.showContactInfo(...e)),class:"placeholder-button"}," yes, i am human! ")])):(0,a.Q3)("",!0),!0===o.contactInfoVissible?((0,a.uX)(),(0,a.CE)("div",Ce,[(0,a.Lk)("p",null,[(0,a.eW)(" Phone: "),(0,a.Lk)("span",null,(0,d.v_)(o.contactInfo.phone),1)]),(0,a.Lk)("p",null,[(0,a.eW)(" Email: "),(0,a.Lk)("span",null,(0,d.v_)(o.contactInfo.email),1)])])):(0,a.Q3)("",!0)])])}var Le={name:"ContactSection",data(){return{contactInfo:h.BZ,captchaEnabled:!1,contactInfoVissible:!1}},methods:{enableCaptcha(){this.captchaEnabled=!0},showContactInfo(){this.contactInfoVissible=!0}}};const xe=(0,r.A)(Le,[["render",Ie]]);var Me=xe;const we={class:"footer-container"},Ee={class:"footer-items"},Se={href:"",class:"footer-url"};function De(e,t,n,i,o,r){return(0,a.uX)(),(0,a.CE)("div",we,[(0,a.Lk)("footer",Ee,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.footerItems,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:"footer-item"},[(0,a.Lk)("a",Se,(0,d.v_)(e.title),1)])))),128))])])}var Xe={name:"FooterMain",data(){return{footerItems:h.Fs}}};const Fe=(0,r.A)(Xe,[["render",De]]);var Oe=Fe,Ne={name:"HomeView",components:{NavbarMain:y,MainSection:D,ServiceSection:P,GallerySection:pe,ContactSection:Me,FooterMain:Oe}};const _e=(0,r.A)(Ne,[["render",m]]);var Ae=_e;const Te=[{path:"/",name:"home",component:Ae}],Ge=(0,u.aE)({history:(0,u.LA)("/hp-kv/"),routes:Te});var Pe=Ge,je=n(782),We=(0,je.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,i.Ef)(c).use(We).use(Pe).mount("#app")},874:function(e,t,n){var i={"./galleryimg01.png":4359,"./galleryimg02.png":6252,"./galleryimg03.png":9141,"./galleryimg04.png":2266,"./galleryimg05.png":1123,"./galleryimg06.png":5368,"./galleryimg07.png":6497,"./galleryimg08.png":7654,"./galleryimg09.png":319};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=o,e.exports=a,a.id=874},4359:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg01.a912bf81.png"},6252:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg02.a912bf81.png"},9141:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg03.a912bf81.png"},2266:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg04.a912bf81.png"},1123:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg05.a912bf81.png"},5368:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg06.a912bf81.png"},6497:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg07.a912bf81.png"},7654:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg08.a912bf81.png"},319:function(e,t,n){"use strict";e.exports=n.p+"img/galleryimg09.a912bf81.png"}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,o){if(!i){var r=1/0;for(u=0;u<e.length;u++){i=e[u][0],a=e[u][1],o=e[u][2];for(var l=!0,s=0;s<i.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(l=!1,o<r&&(r=o));if(l){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/hp-kv/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,o,r=i[0],l=i[1],s=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var u=s(n)}for(t&&t(i);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},i=self["webpackChunkhp_kv"]=self["webpackChunkhp_kv"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(1028)}));i=n.O(i)})();
//# sourceMappingURL=app.fa93cabf.js.map