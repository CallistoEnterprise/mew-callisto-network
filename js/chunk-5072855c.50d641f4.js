(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5072855c"],{"6c15":function(t,e,n){t.exports=n.p+"img/domain.5194defa.svg"},"8d27":function(t,e,n){"use strict";var a=n("b398"),i=n.n(a);i.a},b398:function(t,e,n){},c847:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return C}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"stripe-container"},[n("div",{staticClass:"domain-header"},[n("div",{staticClass:"items-container"},t._l(t.cart,(function(e){return n("h4",{key:e.label+"."+e.extension},[t._v(" "+t._s(e.label+"."+e.extension)+" - $"+t._s(e.price)+" ")])})),0),n("h4",{staticClass:"domain-price"},[n("span",{staticClass:"eth-text"},[t._v(t._s(t.convertedEthPrice)+" "+t._s(t.$t("common.currency.eth")))]),n("span",{staticClass:"price-text"},[t._v("($"+t._s(t.cartTotal)+")")])])]),n("div",{staticClass:"stripe-form-container"},[n("div",{staticClass:"stripe-form-header"},[n("h3",[t._v(t._s(t.$t("unstoppable.pay-with-credit-card")))]),n("h5",{staticClass:"pay-with-crypto",on:{click:t.handlePayWithCryptoClick}},[t._v(" "+t._s(t.$t("unstoppable.pay-with-crypto"))+" ")])]),n("div",{staticClass:"stripe-form-body"},[n("div",{staticClass:"stripe-form-field-container"},[n("span",{staticClass:"form-title"},[t._v(t._s(t.$t("unstoppable.stripe-card-prompt")))]),n("div",{staticClass:"stripe-card-input"},[n("card",{class:{complete:t.complete},attrs:{stripe:t.publishableKey,options:t.stripeOptions},on:{change:function(e){t.complete=e.complete}}})],1)]),n("div",{staticClass:"stripe-form-field-container"},[n("h6",{staticClass:"secured-by-stripe"},[t._v(" "+t._s(t.$t("unstoppable.secured-by-stripe"))+" ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.paymentError,expression:"paymentError"}]},[n("h5",{staticClass:"error-message"},[t._v(" "+t._s(t.$t("unstoppable.error.stripe-payment"))+" ")])]),n("div",{staticClass:"stripe-form-field-container btn-container"},[n("button",{staticClass:"back-btn",on:{click:function(e){return t.goBack()}}},[n("span",[t._v(" "+t._s(t.$t("common.back"))+" ")])]),n("button",{class:[t.complete?"":"disabled","large-round-button-green-filled clickable pay-button"],attrs:{disabled:!t.complete||t.loading},on:{click:t.submit}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v(" "+t._s(t.$t("unstoppable.continue"))+" ")]),n("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])])])])])},i=[],s=(n("13d5"),n("b680"),n("d3b7"),n("53ca")),r=(n("96cf"),n("1da1")),c=n("5530"),o=n("6c15"),p=n.n(o),l=n("b2f0"),u=n("901e"),d=n.n(u),h=n("2f62"),f=n("ce96"),m={components:{Card:l["Card"]},props:{cart:{type:Array,default:function(){return[]}},setTokenId:{type:Function,default:function(){}}},data:function(){return{complete:!1,stripeOptions:{},stripeImg:p.a,publishableKey:"pk_live_HAPE6Nv5bfhCJYKe6Nfaaj4P",token:null,charge:null,loading:!1,paymentError:!1,ethPrice:0}},computed:Object(c["a"])(Object(c["a"])({},Object(h["c"])("main",["online"])),{},{cartTotal:function(){return this.cart.reduce((function(t,e){return t+e.price}),0)},convertedEthPrice:function(){var t=0;return this.cartTotal>0&&(t=new d.a(this.cartTotal).dividedBy(this.ethPrice).toFixed(8)),t}}),mounted:function(){this.online&&this.getEthPrice()},beforeMount:function(){this.cart.length&&this.cartTotal||this.$router.push({name:"unstoppableInitialState"})},methods:{getEthPrice:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cryptorates.mewapi.io/ticker?filter=ETH").then((function(t){return t.json()})).catch((function(t){f["e"].responseHandler(t,f["e"].ERROR)}));case 2:n=e.sent,t.ethPrice="object"===Object(s["a"])(n)?n.data.ETH.quotes.USD.price:0;case 4:case"end":return e.stop()}}),e)})))()},goBack:function(){this.$router.push({name:"unstoppableInitialState"})},handlePayWithCryptoClick:function(){this.$router.push({name:"payWithCrypto"})},submit:function(){var t=this;this.loading=!0,Object(l["createToken"])().then((function(e){t.setTokenId(e.token.id),t.$router.push({name:"confirmPayment"})})).catch((function(){t.paymentError=!0}))}}},b=m,v=(n("8d27"),n("2877")),y=Object(v["a"])(b,a,i,!1,null,"2c56aaac",null),C=y.exports}}]);
//# sourceMappingURL=../sourcemaps/js/chunk-5072855c.50d641f4.js.map