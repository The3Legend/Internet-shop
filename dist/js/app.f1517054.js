(function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1985:function(t,e,n){},3004:function(t,e,n){"use strict";n("b70e")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light "}},[n("b-navbar-brand",{attrs:{href:"#"},on:{click:t.onClick}},[t._v("Meclee Test")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("div",{staticClass:"flex"},[n("div",[n("b-navbar-nav",t._l(t.category,(function(e){return n("b-nav-item",{key:e.id,attrs:{href:"#"},on:{click:t.onClick}},[t._v(t._s(e))])})),1)],1),n("div",[n("b-button",{staticClass:"mb-2",attrs:{size:"md",variant:"outline-primary "},on:{click:function(e){t.modalShow=!t.modalShow}}},[n("b-icon",{attrs:{icon:"cart3","aria-label":"Pay"}}),t.ItemInCart.length?n("span",{staticClass:"margin-style"},[t._v(t._s(t.ItemInCart.length))]):t._e(),n("b-modal",{attrs:{title:"Goods in the basket"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[n("div",{staticClass:"w-100"},[n("div",{staticClass:"float-right font-style"},[n("span",[t._v("Total price:")]),n("span",[t._v(" "+t._s(t.allPrice.toFixed(2))+"$")])])])]},proxy:!0}]),model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},t._l(t.ItemInCart,(function(e,r){return n("div",{key:r,staticClass:"parent"},[n("div",{staticClass:"children"},[n("small",[t._v(t._s(r+1)+". ")]),n("img",{staticClass:"imgStyle",attrs:{src:""+e.image,alt:"img"}}),n("small",[t._v(t._s(e.title))])]),n("div",{staticClass:"child"},[n("b-button",{staticClass:"button-style",attrs:{variant:"outline-danger"},on:{click:function(e){return t.productRemove(r)}}},[n("b-icon",{attrs:{icon:"trash-fill","aria-hidden":"true"}})],1)],1)])})),0)],1)],1)])])],1),n("ProductCard",{attrs:{filtredProducts:t.filtredProducts},on:{sendId:t.showClickId}})],1)},c=[],s=(n("d81d"),n("a434"),n("bc3a")),l=n.n(s),u=l.a.create({baseURL:"https://fakestoreapi.com/products/categories"}),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("b-card-group",{attrs:{columns:""}},t._l(t.filtredProducts,(function(e){return n("b-card",{key:e.id,staticClass:"lol",attrs:{"img-src":""+e.image,"img-alt":"Image","img-top":""}},[n("b-card-text",{staticClass:"small text-muted"},[t._v(" $"+t._s(e.price))]),n("b-card-text",[n("h5",[t._v(t._s(e.title))])]),n("b-card-text",{staticClass:"overflow"},[t._v(" "+t._s(e.description)+" ")]),n("div",[n("b-button",{staticClass:"width",attrs:{variant:"outline-primary"},on:{click:function(n){return t.detailedInformation(e.id)}}},[t._v("Подробнее")]),n("b-button",{staticClass:"width",attrs:{variant:"outline-success"},on:{click:function(n){return t.sendIdToParent(e)}}},[t._v("В корзину")])],1)],1)})),1)],1)},f=[],p=(n("a4d3"),n("e01a"),n("fb6a"),{name:"ProductCard",props:{filtredProducts:{type:Array,default:function(){return[]}}},data:function(){return{truncateSortProduct:[],startProduct:[],informationElement:[]}},created:function(){var t=this;u.get("https://fakestoreapi.com/products").then((function(e){return t.startProduct=e.data})).catch((function(t){console.log(t)}))},updated:function(){this.truncateSortProduct=this.filtredProducts,this.truncateSortProduct.map((function(t){t.description.length>185?t.description=t.description.slice(0,184)+"…":t.description}))},methods:{sendIdToParent:function(t){this.$emit("sendId",t)},detailedInformation:function(t){var e=this;this.informationElement=[],this.startProduct.map((function(n){return n.id===t?e.informationElement.push(n):[]}))}},computed:{detailedInformationItem:function(){return this.informationElement}}}),h=p,m=(n("64b4"),n("2877")),v=Object(m["a"])(h,d,f,!1,null,null,null),b=v.exports,g={name:"Header",components:{ProductCard:b},data:function(){return{category:[],value:[],allProducts:[],sortProduct:[],ItemInCart:[],modalShow:!1}},created:function(){var t=this;u.get().then((function(e){return t.category=e.data})).catch((function(t){console.log(t)})),u.get("https://fakestoreapi.com/products").then((function(e){return t.allProducts=e.data})).catch((function(t){console.log(t)}))},methods:{onClick:function(t){var e=this;this.value=[],this.sortProduct=[],this.value.push(t.target.innerText),this.allProducts.map((function(t){e.value[0]===t.category&&e.sortProduct.push(t)}))},showClickId:function(t){this.ItemInCart.push(t),console.log(this.filtredProducts)},productRemove:function(t){this.ItemInCart.splice(t,1)}},computed:{filtredProducts:function(){return this.sortProduct.length?this.sortProduct:this.allProducts},allPrice:function(){return this.ItemInCart.reduce((function(t,e){return t+e.price}),0)}}},P=g,_=(n("3004"),Object(m["a"])(P,i,c,!1,null,null,null)),y=_.exports,C={name:"App",components:{Header:y}},I=C,k=(n("034f"),Object(m["a"])(I,o,a,!1,null,null,null)),w=k.exports,x=n("5f5b"),S=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(x["a"]),r["default"].use(S["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(w)}}).$mount("#app")},"64b4":function(t,e,n){"use strict";n("1985")},"85ec":function(t,e,n){},b70e:function(t,e,n){}});
//# sourceMappingURL=app.f1517054.js.map