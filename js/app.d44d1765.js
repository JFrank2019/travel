(function(t){function e(e){for(var n,a,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},r={app:0},s=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"002a":function(t,e,i){"use strict";var n=i("9f81"),r=i.n(n);r.a},2513:function(t,e,i){"use strict";var n=i("c7bc"),r=i.n(n);r.a},"283e":function(t,e,i){"use strict";var n=i("eb3b"),r=i.n(n);r.a},"2dc9":function(t,e,i){"use strict";var n=i("ea68"),r=i.n(n);r.a},"315f":function(t,e,i){},3935:function(t,e,i){"use strict";var n=i("52fc"),r=i.n(n);r.a},"3db4":function(t,e,i){},4810:function(t,e,i){"use strict";var n=i("7034"),r=i.n(n);r.a},4952:function(t,e,i){"use strict";var n=i("e240"),r=i.n(n);r.a},"49cc":function(t,e,i){"use strict";var n=i("5826"),r=i.n(n);r.a},"52fc":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("keep-alive",[i("router-view")],1)],1)},s=[],a=i("2877"),o={},c=Object(a["a"])(o,r,s,!1,null,null,null),l=c.exports,u=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),i("home-swiper",{attrs:{swiperList:t.swiperList}}),i("home-icons",{attrs:{iconList:t.iconList}}),i("home-recommend",{attrs:{recommendList:t.recommendList}}),i("home-weekend",{attrs:{weekendList:t.weekendList}})],1)},f=[],h=(i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("2fa7")),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._m(1),i("router-link",{staticClass:"header-right",attrs:{tag:"div",to:"/city"}},[t._v(" "+t._s(this.city)+" "),i("span",{staticClass:"iconfont arrow-icon"},[t._v("")])])],1)},m=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-left"},[i("div",{staticClass:"iconfont back-icon"},[t._v("")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-input"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(" 输入城市/景点/游玩/主题 ")])}],v=i("2f62");function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(i,!0).forEach((function(e){Object(h["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var g={name:"HomeHeader",computed:y({},Object(v["c"])(["city"]))},w=g,C=(i("4952"),Object(a["a"])(w,p,m,!1,null,"a1c27a14",null)),O=C.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[t.showSwiper?i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.swiperList,(function(t){return i("swiper-slide",{key:t.id},[i("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},j=[],k={name:"HomeSwiper",props:{swiperList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.swiperList.length}}},L=k,P=(i("6297"),Object(a["a"])(L,_,j,!1,null,"b23cf976",null)),S=P.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,(function(e,n){return i("swiper-slide",{key:n},t._l(e,(function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl,alt:""}})]),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])})),0)})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},$=[],I={name:"HomeIcons",props:{iconList:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.iconList.forEach((function(e,i){var n=Math.floor(i/8);t[n]||(t[n]=[]),t[n].push(e)})),t}}},E=I,D=(i("58b1"),Object(a["a"])(E,x,$,!1,null,"1b740ea0",null)),H=D.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),i("ul",t._l(t.recommendList,(function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{to:"/detail/"+e.id,tag:"li"}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])})),1)])},T=[],N={name:"HomeRecommend",props:{recommendList:Array}},G=N,M=(i("3935"),Object(a["a"])(G,A,T,!1,null,"6261ca2f",null)),B=M.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),i("ul",t._l(t.weekendList,(function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}})]),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])})),0)])},U=[],Y={name:"HomeWeekend",props:{weekendList:Array}},J=Y,R=(i("c215"),Object(a["a"])(J,F,U,!1,null,"ab699876",null)),W=R.exports;function q(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function z(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?q(i,!0).forEach((function(e){Object(h["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):q(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var K={name:"Home",components:{HomeHeader:O,HomeSwiper:S,HomeIcons:H,HomeRecommend:B,HomeWeekend:W},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:z({},Object(v["c"])(["city"])),methods:{getHomeInfo:function(){var t=this;this.$http.get("/mock/index.json?city="+this.city).then((function(e){return t.getHomeInfoSucc(e)}))},getHomeInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},Q=K,V=Object(a["a"])(Q,d,f,!1,null,null,null),X=V.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),i("city-search",{attrs:{cities:t.cities}}),i("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handlleLetterChange}})],1)},tt=[],et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._v(" 城市选择 "),i("router-link",{staticClass:"iconfont header-back",attrs:{tag:"div",to:"/"}},[t._v("")])],1)},it=[],nt={name:"CityHeader"},rt=nt,st=(i("002a"),Object(a["a"])(rt,et,it,!1,null,"45bbd40e",null)),at=st.exports,ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{placeholder:"输入城市名或拼音",type:"text"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,(function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(" "+t._s(e.name)+" ")])})),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v(" 没有找到匹配数据 ")])],2)])])},ct=[],lt=(i("c975"),i("b0c0"),i("ac1f"),i("841c"),i("1fba"));function ut(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function dt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?ut(i,!0).forEach((function(e){Object(h["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):ut(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var ft={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},methods:dt({},Object(v["b"])(["changeCity"]),{handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}}),watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyword?this.timer=setTimeout((function(){var e=[];for(var i in t.cities)t.cities[i].forEach((function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)}));t.list=e}),100):this.list=[]}},mounted:function(){this.scroll=new lt["a"](this.$refs.search)}},ht=ft,pt=(i("e4cd"),Object(a["a"])(ht,ot,ct,!1,null,"af68fcf8",null)),mt=pt.exports,vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),i("div",{staticClass:"button-list"},t._l(t.hotCities,(function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])})),0)]),t._l(t.cities,(function(e,n){return i("div",{key:n,ref:n,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(n))]),t._l(e,(function(e){return i("div",{key:e.id,staticClass:"item-list",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("div",{staticClass:"item border-bottom"},[t._v(t._s(e.name))])])}))],2)}))],2)])},bt=[];function yt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function gt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?yt(i,!0).forEach((function(e){Object(h["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):yt(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var wt={name:"CityList",props:{cities:Object,hotCities:Array,letter:String},computed:gt({},Object(v["c"])({currentCity:"city"})),methods:gt({},Object(v["b"])(["changeCity"]),{handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}}),mounted:function(){this.scroll=new lt["a"](this.$refs.wrapper)},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}}},Ct=wt,Ot=(i("2dc9"),Object(a["a"])(Ct,vt,bt,!1,null,"797c6dfc",null)),_t=Ot.exports,jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,(function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetterClick,touchend:t.handleTouchEnd,touchmove:t.handleTouchMove,touchstart:t.handleTouchStart}},[t._v(" "+t._s(e)+" ")])})),0)},kt=[],Lt={name:"CityAlphabet",props:{cities:Object},data:function(){return{touchStatus:!1,startY:0,timer:null}},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){var i=t.touches[0].clientY-79,n=Math.floor((i-e.startY)/20);n>=0&&n<e.letters.length&&e.$emit("change",e.letters[n])}),16))},handleTouchEnd:function(){this.touchStatus=!1}},updated:function(){this.startY=this.$refs["A"][0].offsetTop}},Pt=Lt,St=(i("283e"),Object(a["a"])(Pt,jt,kt,!1,null,"7787b293",null)),xt=St.exports,$t={name:"City",components:{CityHeader:at,CitySearch:mt,CityList:_t,CityAlphabet:xt},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){var t=this;this.$http.get("/mock/city.json").then((function(e){return t.getCityInfoSucc(e)}))},getCityInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handlleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},It=$t,Et=Object(a["a"])(It,Z,tt,!1,null,"8a185862",null),Dt=Et.exports,Ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("detail-banner",{attrs:{bannerImg:t.bannerImg,galleryImgs:t.galleryImgs,sightName:t.sightName}}),i("detail-header"),i("div",{staticClass:"content"},[i("detail-list",{attrs:{categoryList:t.categoryList}})],1)],1)},At=[],Tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBanerClick}},[i("img",{staticClass:"banner-img",attrs:{src:this.bannerImg,alt:""}}),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(this.sightName))]),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v(" "+t._s(this.galleryImgs.length)+" ")])])]),i("fade-animation",[i("common-gallery",{directives:[{name:"show",rawName:"v-show",value:t.showGallery,expression:"showGallery"}],attrs:{imgs:t.galleryImgs},on:{close:t.handleGalleryClose}})],1)],1)},Nt=[],Gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",on:{click:t.handleGalleryClick}},[i("div",{staticClass:"wrapper"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.imgs,(function(t,e){return i("swiper-slide",{key:e},[i("img",{staticClass:"gallery-img",attrs:{src:t,alt:""}})])})),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},Mt=[],Bt={name:"CommonGallery",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGalleryClick:function(){this.$emit("close")}}},Ft=Bt,Ut=(i("4810"),Object(a["a"])(Ft,Gt,Mt,!1,null,"1d51d896",null)),Yt=Ut.exports,Jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",[t._t("default")],2)},Rt=[],Wt={name:"FadeAnimation"},qt=Wt,zt=(i("49cc"),Object(a["a"])(qt,Jt,Rt,!1,null,"e5710df0",null)),Kt=zt.exports,Qt={name:"DetailBanner",components:{CommonGallery:Yt,FadeAnimation:Kt},props:{sightName:String,bannerImg:String,galleryImgs:Array},data:function(){return{showGallery:!1}},methods:{handleBanerClick:function(){this.showGallery=!0},handleGalleryClose:function(){this.showGallery=!1}}},Vt=Qt,Xt=(i("8010"),Object(a["a"])(Vt,Tt,Nt,!1,null,"0c335246",null)),Zt=Xt.exports,te=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[i("span",{staticClass:"iconfont header-abs-back"},[t._v("")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:t.opacityStyle},[i("router-link",{attrs:{tag:"div",to:"/"}},[i("div",{staticClass:"iconfont header-fixed-back"},[t._v("")])]),t._v("景点详情 ")],1)],1)},ee=[],ie={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},ne=ie,re=(i("8283"),Object(a["a"])(ne,te,ee,!1,null,"6c6c57e7",null)),se=re.exports,ae=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.categoryList,(function(e,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v(" "+t._s(e.title)+" ")]),e.children?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{categoryList:e.children}})],1):t._e()])})),0)},oe=[],ce={name:"DetailList",props:{categoryList:Array}},le=ce,ue=(i("2513"),Object(a["a"])(le,ae,oe,!1,null,"76e4edea",null)),de=ue.exports,fe={name:"Detail",components:{DetailBanner:Zt,DetailHeader:se,DetailList:de},data:function(){return{lastPlaceId:"",sightName:"",bannerImg:"",galleryImgs:[],categoryList:[]}},methods:{getDetailInfo:function(){var t=this;this.$http.get("/mock/detail.json",{params:{id:this.$route.params.id}}).then((function(e){return t.getDetailInfoSucc(e)}))},getDetailInfoSucc:function(t){if(t=t.data,t.ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.galleryImgs=e.galleryImgs,this.categoryList=e.categoryList}}},mounted:function(){this.lastPlaceId=this.$route.params.id,this.getDetailInfo()},activated:function(){this.lastPlaceId!==this.$route.params.id&&(this.lastPlaceId=this.$route.params.id,this.getDetailInfo())}},he=fe,pe=(i("e8f7"),Object(a["a"])(he,Ht,At,!1,null,"ab955e5a",null)),me=pe.exports;n["a"].use(u["a"]);var ve=[{path:"/",name:"Home",component:X},{path:"/city",name:"City",component:Dt},{path:"/detail/:id",name:"Detail",component:me}],be=new u["a"]({routes:ve,scrollBehavior:function(){return{x:0,y:0}}}),ye=be,ge=(i("d3b7"),"上海");try{localStorage.city&&(ge=localStorage.city)}catch(xe){Promise.reject(xe)}var we={city:ge},Ce={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(xe){return Promise.reject(xe)}}};n["a"].use(v["a"]);var Oe=new v["a"].Store({state:we,mutations:Ce,actions:{},modules:{}}),_e=i("fe3c"),je=i.n(_e),ke=i("bc3a"),Le=i.n(ke),Pe=i("1f80"),Se=i.n(Pe);i("3db4"),i("c8f4"),i("be35"),i("dfa4");je.a.attach(document.body),n["a"].prototype.$http=Le.a,n["a"].use(Se.a),n["a"].config.productionTip=!1,new n["a"]({router:ye,store:Oe,render:function(t){return t(l)}}).$mount("#app")},5826:function(t,e,i){},5881:function(t,e,i){},"58b1":function(t,e,i){"use strict";var n=i("61b2"),r=i.n(n);r.a},"61b2":function(t,e,i){},6297:function(t,e,i){"use strict";var n=i("abdf"),r=i.n(n);r.a},7034:function(t,e,i){},8010:function(t,e,i){"use strict";var n=i("d098"),r=i.n(n);r.a},8283:function(t,e,i){"use strict";var n=i("8338"),r=i.n(n);r.a},8338:function(t,e,i){},"9f81":function(t,e,i){},abdf:function(t,e,i){},be35:function(t,e,i){},c215:function(t,e,i){"use strict";var n=i("315f"),r=i.n(n);r.a},c7bc:function(t,e,i){},c8f4:function(t,e,i){},d098:function(t,e,i){},e240:function(t,e,i){},e4cd:function(t,e,i){"use strict";var n=i("5881"),r=i.n(n);r.a},e8f7:function(t,e,i){"use strict";var n=i("fb1f"),r=i.n(n);r.a},ea68:function(t,e,i){},eb3b:function(t,e,i){},fb1f:function(t,e,i){}});
//# sourceMappingURL=app.d44d1765.js.map