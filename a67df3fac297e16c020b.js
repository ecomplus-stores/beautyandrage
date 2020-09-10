(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{234:function(t,s,e){var r=e(244);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(172).default)("5d75423d",r,!0,{})},236:function(t,s,e){"use strict";var r=e(29),a=e(39),i=e(79),n={name:"ShippingLine",props:{shippingLine:{type:Object,required:!0}},computed:{deadlineStr(){const t=this.shippingLine,s=t.posting_deadline&&t.posting_deadline.working_days||t.delivery_time&&t.delivery_time.working_days;let e=t.posting_deadline?t.posting_deadline.days:0;return t.delivery_time&&(e+=t.delivery_time.days),"".concat(Object(a.a)(r.wd)," ").concat(e," ").concat(Object(a.a)(s?r.Cd:r.T))},freightValueStr(){const t="number"==typeof this.shippingLine.total_price?this.shippingLine.total_price:this.shippingLine.price;return t?Object(i.a)(t):Object(a.a)(r.lb)}}},o=e(53),c=Object(o.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shipping-line"},[e("strong",[t._v(" "+t._s(t.deadlineStr)+" ")]),e("span",{staticClass:"mx-2"},[t._v(" "+t._s(t.freightValueStr)+" ")])])}),[],!1,null,null,null);s.a=c.exports},243:function(t,s,e){"use strict";var r=e(234);e.n(r).a},244:function(t,s,e){(s=e(171)(!0)).push([t.i,".order-info__new{text-align:center;color:var(--success);font-size:1.4rem;margin-bottom:2rem}.order-info__orders-link{margin-top:1.5rem}.order-info__number{color:var(--gray)}.order-info__number span{display:block;color:var(--secondary)}.order-info__details{margin-top:.75rem;margin-bottom:1.5rem}.order-info__financial-status,.order-info__status{font-weight:700;font-size:1.15rem;margin:1rem 0}.order-info__status--open{color:var(--info)}.order-info__status--cancelled{color:var(--danger)}.order-info__status--closed{color:var(--success)}.order-info__financial-status--pending{color:var(--warning)}.order-info__financial-status--under_analysis{color:var(--info)}.order-info__financial-status--in_dispute,.order-info__financial-status--unauthorized,.order-info__financial-status--voided{color:var(--danger)}.order-info__financial-status--paid{color:var(--success)}.order-info__summary{background:var(--light)}.order-info__buy-again,.order-info__toggle{display:block;margin-left:auto;margin-top:var(--spacer-4)}","",{version:3,sources:["EcOrderInfo.scss"],names:[],mappings:"AAKE,iBACE,iBAAkB,CAClB,oBAAqB,CACrB,gBAAiB,CACjB,kBAAmB,CACpB,yBAGC,iBAAkB,CACnB,oBAGC,iBAAkB,CADnB,yBAIG,aAAc,CACd,sBAAuB,CACxB,qBAID,iBAAkB,CAClB,oBAAqB,CACtB,kDAIC,eAAiB,CACjB,iBAAkB,CAClB,aAAc,CACf,0BAIG,iBAAkB,CACnB,+BAGC,mBAAoB,CACrB,4BAGC,oBAAqB,CACtB,uCAKC,oBAAqB,CACtB,8CAGC,iBAAkB,CACnB,4HAKC,mBAAoB,CACrB,oCAGC,oBAAqB,CACtB,qBAID,uBAAwB,CACzB,2CAIC,aAAc,CACd,gBAAiB,CACjB,0BAA2B",file:"EcOrderInfo.scss",sourcesContent:["$primary: #000000; $secondary: #000000; $settings-theme: (\n  bootswatch: _,\n  custom: _\n); \n.order-info {\n  &__new {\n    text-align: center;\n    color: var(--success);\n    font-size: 1.4rem;\n    margin-bottom: 2rem;\n  }\n\n  &__orders-link {\n    margin-top: 1.5rem;\n  }\n\n  &__number {\n    color: var(--gray);\n\n    span {\n      display: block;\n      color: var(--secondary);\n    }\n  }\n\n  &__details {\n    margin-top: .75rem;\n    margin-bottom: 1.5rem;\n  }\n\n  &__status,\n  &__financial-status {\n    font-weight: bold;\n    font-size: 1.15rem;\n    margin: 1rem 0;\n  }\n\n  &__status {\n    &--open {\n      color: var(--info);\n    }\n\n    &--cancelled {\n      color: var(--danger);\n    }\n\n    &--closed {\n      color: var(--success);\n    }\n  }\n\n  &__financial-status {\n    &--pending {\n      color: var(--warning);\n    }\n\n    &--under_analysis {\n      color: var(--info);\n    }\n\n    &--unauthorized,\n    &--in_dispute,\n    &--voided {\n      color: var(--danger);\n    }\n\n    &--paid {\n      color: var(--success);\n    }\n  }\n\n  &__summary {\n    background: var(--light);\n  }\n\n  &__toggle,\n  &__buy-again {\n    display: block;\n    margin-left: auto;\n    margin-top: var(--spacer-4);\n  }\n}\n"]}]),t.exports=s},246:function(t,s,e){"use strict";e(49);var r=e(39),a=e(79),i=e(4),n=e(54),o=e(236),c=e(250),d=e(9),l=e(29),_={name:"EcOrderInfo",components:{ShippingLine:o.a,EcSummary:c.a},props:{ecomPassport:{type:Object,default:()=>n.a},order:{type:Object,required:!0},isNew:{type:Boolean},skipDataLoad:{type:Boolean},skipFirstDataLoad:{type:Boolean},skipCustomerUpdate:{type:Boolean},accountOrdersUrl:{type:String,default:"/app/#/account/orders"},cartUrl:{type:String,default:"/app/#/cart"}},data(){return{loaded:this.skipDataLoad||this.skipFirstDataLoad,isUpdating:!1,reloadInterval:null,orderBody:this.order}},computed:{i19buyAgain:()=>Object(r.a)(l.q),i19cancelOrder:()=>Object(r.a)(l.v),i19codeCopied:()=>Object(r.a)(l.G),i19copyCode:()=>Object(r.a)(l.P),i19copyErrorMsg:()=>Object(r.a)(l.Q),i19doPaymentMsg:()=>Object(r.a)(l.Y),i19freight:()=>Object(r.a)(l.ob),i19myOrders:()=>Object(r.a)(l.Qb),i19of:()=>Object(r.a)(l.dc),i19orderConfirmationMsg:()=>Object(r.a)(l.kc),i19orderNumber:()=>Object(r.a)(l.lc),i19printBillet:()=>Object(r.a)(l.wc),i19redirectToPayment:()=>Object(r.a)(l.Cc),i19referenceCode:()=>Object(r.a)(l.Ec),i19reopenOrder:()=>Object(r.a)(l.Kc),i19shippingAddress:()=>Object(r.a)(l.gd),i19transactionCode:()=>Object(r.a)(l.rd),i19ticketCode:()=>Object(r.a)(l.od),localOrder:{get(){return this.orderBody},set(t){this.orderBody=t,this.$emit("update:order",t),this.saveCustomerOrder()}},transaction(){const{transactions:t}=this.localOrder;return t&&t.length?t[0]:{}},shippingAddress(){const{localOrder:t}=this;if(t.shipping_lines&&t.shipping_lines.length)return t.shipping_lines[0].to},status(){return this.localOrder.status},financialStatus(){const{localOrder:t,transaction:s}=this;if(t.payments_history){let s;if(t.payments_history.forEach(t=>{t&&(!s||!t.date_time||t.date_time>=s.date_time)&&(s=t)}),s)return s.status}const e=t.financial_status&&t.financial_status.current;return e||(s&&s.status?s.status.current:"pending")},fulfillmentStatus(){const{localOrder:t}=this,s=t.fulfillment_status&&t.fulfillment_status.current;if(s)return s;{const s=t.shipping_lines&&t.shipping_lines[0];if(s&&s.status)return s.status.current}return null}},methods:{formatMoney:a.a,i19FinancialStatus:t=>Object(r.a)(l.a)[t],i19FulfillmentStatus:t=>Object(r.a)(l.b)[t],i19OrderStatus:t=>Object(r.a)(l.d)[t],toClipboard(t){this.$copyText(t).then(()=>{this.$toast({title:this.i18n("CodeCopied"),body:t,variant:"success",delay:2e3})},s=>{console.error(s),this.$toast({title:"Oops",body:"".concat(this.i18n("copyErrorMsg"),": <i>").concat(t,"</i>"),variant:"warning",delay:3e3})})},saveCustomerOrder(){const{localOrder:t,ecomPassport:s}=this;!this.skipCustomerUpdate&&t.number&&s.checkAuthorization()&&s.requestApi("/me.json").then(({data:e})=>{const r=e.orders||[],a={};["_id","created_at","number","currency_id","currency_symbol","amount","payment_method_label","shipping_method_label"].forEach(s=>{t[s]&&(a[s]=t[s])});const i=r.findIndex(({_id:s,number:e})=>s===t._id||e===t.number);i>-1?Object.assign(r[i],a):r.push(a),s.requestApi("/me.json","patch",{orders:r})})},buyAgain(){const{localOrder:t}=this;if(t.items){const{items:s}=t;s.forEach((t,e)=>{d.a.addItem(t),e+1===s.length&&(d.a.save(),window.location=this.cartUrl)})}},toggle(){this.isUpdating=!0;const t="open"===this.localOrder.status?{status:"cancelled",cancel_reason:"customer"}:{status:"open"};n.a.requestApi("/orders/".concat(this.order._id,".json"),"patch",t).then(()=>{this.localOrder={...this.localOrder,...t}}).finally(()=>{this.isUpdating=!1})}},created(){if(this.order._id&&(this.isNew&&this.saveCustomerOrder(),!this.skipDataLoad)){const t="/orders/".concat(this.order._id,".json"),s=()=>(this.ecomPassport.checkAuthorization()?this.ecomPassport.requestApi(t):Object(i.g)({url:t})).then(({data:t})=>{this.localOrder={...this.localOrder,...t}}).catch(t=>{console.error(t)});this.reloadInterval=setInterval(s,9e3),this.skipFirstDataLoad||setTimeout(()=>{s().finally(()=>{this.loaded=!0})},this.isNew?1e3:3e3)}},beforeDestroy(){clearInterval(this.reloadInterval)}},u=(e(243),e(53)),p=Object(u.a)(_,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"order-info py-4"},[t.isNew?e("div",{staticClass:"order-info__new"},[t._v(" "+t._s(t.i19orderConfirmationMsg)+"! ")]):t._e(),e("transition-group",{attrs:{"enter-active-class":"animated fadeInDown slower"}},[t.loaded?e("div",{key:"loaded"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-lg-7"},[e("p",{staticClass:"order-info__number"},[t._v(" "+t._s(t.i19orderNumber)+": "),e("span",{staticClass:"h4"},[t._v(t._s(t.localOrder.number))])]),e("transition-group",{attrs:{"enter-active-class":"animated fadeIn"}},[t.isUpdating?e("div",{key:"updating"},[e("div",{staticClass:"spinner-grow",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])]):e("article",{key:"uptodate"},[t.status?e("div",{staticClass:"order-info__status",class:"order-info__status--"+t.status},[t._v(" "+t._s(t.i19OrderStatus(t.status))+" ")]):t._e(),t.transaction.status&&"pending"===t.transaction.status.current?[t.transaction.banking_billet?e("div",{staticClass:"order-info__billet"},[e("p",{staticClass:"lead"},[t._v(t._s(t.i19doPaymentMsg))]),t.transaction.banking_billet.code?[e("p",[t._v(" "+t._s(t.i19ticketCode)+": "),e("br"),e("samp",[t._v(t._s(t.transaction.banking_billet.code))])]),e("button",{staticClass:"btn btn-outline-primary mr-3",on:{click:function(){return t.toClipboard(t.transaction.banking_billet.code)}}},[e("i",{staticClass:"fas fa-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]:t._e(),t.transaction.banking_billet.link?e("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.transaction.banking_billet.link}},[e("i",{staticClass:"fas fa-print mr-1"}),t._v(" "+t._s(t.i19printBillet)+" ")]):t._e()],2):t.transaction.payment_link?e("div",{staticClass:"order-info__redirect"},[e("p",{staticClass:"lead"},[t._v(t._s(t.i19doPaymentMsg))]),e("a",{staticClass:"btn btn-lg btn-success",attrs:{target:"_blank",href:t.transaction.payment_link}},[e("i",{staticClass:"fas fa-arrow-right mr-1"}),t._v(" "+t._s(t.i19redirectToPayment)+" ")])]):t._e()]:t._e(),e("div",{staticClass:"row order-info__details"},[e("div",{staticClass:"col-12 col-md-6"},[t._t("payment",[e("div",{staticClass:"order-info__payment"},[e("div",{staticClass:"order-info__financial-status",class:"order-info__financial-status--"+t.financialStatus},[t._v(" "+t._s(t.i19FinancialStatus(t.financialStatus))+" ")]),t._l(t.localOrder.transactions,(function(s){return e("div",[e("p",{staticClass:"order-info__payment-value"},[t._v(" "+t._s(s.payment_method.name||t.localOrder.payment_method_label)+": "),s.installments&&s.installments.value?e("strong",[t._v(" "+t._s(s.installments.number)+"x "+t._s(t.i19of.toLowerCase())+" "+t._s(t.formatMoney(s.installments.value))+" ")]):e("strong",[t._v(" "+t._s(t.formatMoney(s.amount||t.localOrder.amount.total))+" ")])]),s.credit_card?e("p",{staticClass:"order-info__credit-card"},[t._v(" "+t._s(s.credit_card.company)+" "),s.credit_card.last_digits?e("span",[s.credit_card.company?t._e():e("span",[t._v(" "+t._s(t.i19cardNumber)+" ")]),t._v(" **** "+t._s(s.credit_card.last_digits)+" ")]):t._e()]):t._e(),s.intermediator?[s.intermediator.transaction_code?e("div",{staticClass:"order-info__transaction-code"},[e("small",[t._v(t._s(t.i19transactionCode))]),e("br"),t._v(" "+t._s(s.intermediator.transaction_code)+" ")]):t._e(),s.intermediator.transaction_reference?e("div",{staticClass:"order-info__transaction-reference"},[e("small",[t._v(t._s(t.i19referenceCode))]),e("br"),t._v(" "+t._s(s.intermediator.transaction_reference)+" ")]):t._e()]:t._e()],2)}))],2)],null,{order:t.localOrder,transaction:t.transaction})],2),e("div",{staticClass:"col-12 col-md-6"},[t._t("shipping",[e("div",{staticClass:"order-info__shipping"},[t.fulfillmentStatus?e("div",{staticClass:"order-info__fulfillment-status",class:"order-info__fulfillment-status--"+t.fulfillmentStatus},[t._v(" "+t._s(t.i19FulfillmentStatus(t.fulfillmentStatus))+" ")]):t._e(),t.shippingAddress&&t.shippingAddress.street?e("div",{staticClass:"order-info__shipping-address"},[e("div",{staticClass:"text-muted"},[e("i",{staticClass:"fas fa-map-marked-alt mr-1"}),t._v(" "+t._s(t.i19shippingAddress)+" ")]),e("address",[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),e("br"),t._l(["borough","city","province_code"],(function(s,r){return t.shippingAddress[s]?e("span",{key:s},[t._v(" "+t._s(t.shippingAddress[s]+(2===r?".":","))+" ")]):t._e()})),e("br"),e("mark",{staticClass:"small"},[t._v(" "+t._s(t.shippingAddress.zip)+" ")])],2)]):t._e(),t.localOrder.shipping_lines?t._l(t.localOrder.shipping_lines,(function(s){return e("div",{key:s._id},[e("div",{staticClass:"text-muted"},[e("i",{staticClass:"fas fa-truck mr-1"}),t._v(" "+t._s(t.i19freight)+" ")]),e("shipping-line",{attrs:{"shipping-line":s}})],1)})):t._e()],2)],null,{order:t.localOrder,shippingAddress:t.shippingAddress})],2)])],2)])],1),t.localOrder.amount?e("div",{staticClass:"col-12 col-lg-5"},[e("div",{staticClass:"order-info__summary card"},[e("div",{staticClass:"card-body"},[e("ec-summary",{attrs:{amount:t.localOrder.amount,items:t.localOrder.items,buyer:t.localOrder.buyer&&t.localOrder.buyer[0],shippingAddress:t.shippingAddress}})],1)]),t.isUpdating?t._e():["open"===t.status?[t.fulfillmentStatus?t._e():e("button",{staticClass:"order-info__toggle btn btn-danger btn-sm",on:{click:t.toggle}},[e("i",{staticClass:"fas fa-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19cancelOrder)+" ")])]:"closed"!==t.status||"delivered"!==t.fulfillmentStatus?e("button",{staticClass:"order-info__toggle btn btn-sm",class:"cancelled"===t.status?"btn-success":"btn-info",on:{click:t.toggle}},[e("i",{staticClass:"fas fa-check-circle mr-1"}),t._v(" "+t._s(t.i19reopenOrder)+" ")]):t._e()],t._t("buy",[e("button",{staticClass:"order-info__buy-again btn",class:t.isNew?"btn-outline-secondary btn-sm":"btn-primary",attrs:{type:"button"},on:{click:t.buyAgain}},[e("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.i19buyAgain)+" ")])])],2):t._e()])]):e("div",{key:"loading"},[e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])])]),t.accountOrdersUrl?e("a",{staticClass:"order-info__orders-link btn btn-sm btn-light",attrs:{href:t.accountOrdersUrl}},[t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1)}),[],!1,null,null,null);s.a=p.exports},366:function(t,s,e){"use strict";e.r(s);var r=e(118),a=e(9),i=e(54),n=e(169),o={name:"confirmation",components:{EcOrderInfo:e(246).a},data:()=>({canUpsertCart:!0}),computed:{...Object(r.c)(["orders","customer"]),orderId(){return this.$route.params.id},order:{get(){return this.orders.find(({_id:t})=>t===this.orderId)||{_id:this.orderId}},set(t){if(t&&t._id===this.orderId){const s=this.orders.concat(),e=s.find(({_id:s})=>s===t._id);e?Object.assign(e,t):s.push(t),this.setOrders(s),this.$route.params.json||this.$router.push({params:{json:encodeURIComponent(JSON.stringify(t))}})}}}},methods:{...Object(r.d)(["addOrder","setOrders","resetCart"]),...Object(r.b)(["saveCustomer"]),handleUpsertCart(){if(this.canUpsertCart){this.canUpsertCart=!1;const{status:t}=this.order;t&&"cancelled"!==t&&(a.a.data.completed=!0,this.orderId&&(a.a.data.orders||(a.a.data.orders=[]),a.a.data.orders.push(this.orderId)),Object(n.c)().then(this.resetCart))}}},created(){const{customer:t}=this;i.a.checkAuthorization()||t.main_email&&t.doc_number&&i.a.fetchLogin(t.main_email,t.doc_number).then(()=>{this.saveCustomer({ecomPassport:i.a}),this.handleUpsertCart()})},mounted(){i.a.checkAuthorization()&&this.handleUpsertCart()}},c=e(53),d=Object(c.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"confirmation"}},[e("ec-order-info",{attrs:{order:t.order,isNew:!0},on:{"update:order":function(s){t.order=s}}})],1)}),[],!1,null,null,null);s.default=d.exports}}]);
//# sourceMappingURL=a67df3fac297e16c020b.js.map