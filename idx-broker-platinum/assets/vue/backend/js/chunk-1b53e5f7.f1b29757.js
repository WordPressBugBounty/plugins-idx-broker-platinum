(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b53e5f7"],{"0ec8":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("import-page-template",{attrs:{cardType:"agents",action:"delete",masterList:e.agents,description:e.description,imported:!0,clearSelections:e.clearSelections,loading:e.loading},on:{"bulk-action":function(t){return e.unimportItems(t,"agents")},"remove-agent":function(t){return e.unimportItems(t,"agents")}}})},r=[],i=(n("a4d3"),n("e01a"),n("5530")),o=n("2f62"),s=n("12e8"),c=n("52cb"),l=n("3844"),d={name:"imported-agents",mixins:[c["a"]],inject:[s["a"].importContent.repo],components:{importPageTemplate:l["a"]},computed:Object(i["a"])({},Object(o["d"])({agents:function(e){return e.importContent.agents.imported}})),created:function(){this.description="Select the imported agents to be deleted from IMPress"}},u=d,p=n("2877"),m=Object(p["a"])(u,a,r,!1,null,null,null);t["default"]=m.exports},"178e":function(e,t,n){"use strict";n("c90d")},"20fd":function(e,t,n){},"255c":function(e,t,n){},"2b29":function(e,t,n){},3844:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("idx-block",{attrs:{className:{"import-page-template":!0,"import-page-template--loading":e.loading||e.mainLoading}}},[n("bulk-action",{attrs:{action:e.action,selected:e.selected,description:e.description,disabled:0===e.itemsSelected.length,loading:e.loading||e.mainLoading},on:{"select-all":function(t){return e.selectAll(e.masterList)},"bulk-action":function(t){return e.$emit("bulk-action",e.itemsSelected)}}}),e.mainLoading?n("idx-block",{attrs:{className:"import-card__group"}},[n("idx-block",{attrs:{className:"spinner-border",role:"status"}},[n("idx-block",{attrs:{tag:"span",className:"visually-hidden"}},[e._v("Loading...")])],1)],1):e.masterList.length?n("idx-block",{attrs:{className:["import-card__group","import-card__group-"+e.cardType]}},["listings"===e.cardType?e._l(e.masterList,(function(t){return n("listings-card",{key:t.listingID,ref:"card-checkbox",refInFor:!0,attrs:{listing:t},on:{"listing-selected":function(t){return e.updateSelected(t)}}})})):e._l(e.masterList,(function(t){return n("agent-card",{key:t.agentID,ref:"card-checkbox",refInFor:!0,attrs:{agent:t,imported:e.imported},on:{"agent-selected":function(t){return e.updateSelected(t)},"remove-agent":function(t){return e.$emit("remove-agent",t)}}})})),e.loading?n("idx-block",{attrs:{className:"spinner-border",role:"status"}},[n("idx-block",{attrs:{tag:"span",className:"visually-hidden"}},[e._v("Loading...")])],1):e._e()],2):n("idx-block",[n("idx-block",[e._v(" There are no "+e._s(e.cardType)+" available. ")])],1)],1)},r=[],i=n("5530"),o=n("2f62"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("idx-block",{attrs:{className:"import-header__description"}},[e._v(e._s(e.description))]),n("idx-block",{attrs:{className:"import-header__actions-bar"}},[n("idx-block",{attrs:{className:{"import-header__select-all":!0,"import-header__select-all--loading":e.loading}},on:{click:function(t){!e.loading&&e.$emit("select-all",e.selected)}}},[e._v(" "+e._s(e.selected?"Deselect All":"Select All")+" ")]),n("idx-button",{attrs:{customClass:"import-header__action",disabled:e.disabled||e.loading},on:{click:function(t){return e.$emit("bulk-action")}}},[e._v(" "+e._s(e.action)+" Selected ")])],1)],1)},c=[],l={name:"bulk-action",props:{selected:{type:Boolean,default:!1},action:{type:String,default:"Import"},description:{type:String,default:""},disabled:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}}},d=l,u=(n("bdd8"),n("2877")),p=Object(u["a"])(d,s,c,!1,null,null,null),m=p.exports,g=(n("c975"),n("a434"),{data:function(){return{selected:!1,itemsSelected:[]}},watch:{clearSelections:function(e,t){if(e){for(var n=this.$refs["card-checkbox"],a=0;a<n.length;a++)n[a].$children[0].changeActions(this.masterList[a],!1);this.selected=!1}}},methods:{updateSelected:function(e){var t=this.itemsSelected.indexOf(e[1]);e[0]?-1===t&&this.itemsSelected.push(e[1]):this.itemsSelected.splice(t,1)},selectAll:function(e){for(var t=this.$refs["card-checkbox"],n=0;n<t.length;n++)t[n].$children[0].changeActions(e[n],!this.selected);this.selected=!this.selected}}}),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("checkbox-label",{attrs:{customClass:"import-listings",option:e.option},on:{checked:function(t){return e.$emit("listing-selected",[t.data,e.listing])}},scopedSlots:e._u([{key:"content",fn:function(){return[n("idx-single-property-card",e._b({attrs:{customClass:"import-listing__card"},scopedSlots:e._u([{key:"propertyCardImage",fn:function(){return[n("img",{staticClass:"property-card__image",attrs:{src:e.listing.image,alt:"image of "+e.listing.address}})]},proxy:!0}])},"idx-single-property-card",e.listing,!1))]},proxy:!0}])})},h=[],b={name:"listings-card",props:{listing:{type:Object,default:function(){}}},created:function(){this.option={value:"selected",label:"selected"}}},_=b,k=(n("467d"),Object(u["a"])(_,f,h,!1,null,null,null)),v=k.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("checkbox-label",{attrs:{option:e.option,customClass:"agent-card"},on:{checked:function(t){return e.$emit("agent-selected",[t.data,e.agent])}},scopedSlots:e._u([{key:"content",fn:function(){return[n("idx-block",{attrs:{className:{"agent-card__image-wrap":!0,"agent-card__image--placeholder":!e.agent.image}}},[e.agent.image?n("img",{attrs:{src:e.agent.image,alt:"Image of "+e.agent.name}}):n("div",[e._v(" "+e._s(e.agentInitials)+" ")])]),n("idx-block",{attrs:{className:"agent-card__content"}},[n("idx-block",{attrs:{className:"agent-card__name"}},[e._v(e._s(e.agent.name))]),n("idx-block",{attrs:{className:"agent-card__title"}},[e._v(e._s(e.agent.title))]),n("idx-block",{attrs:{className:"agent-card__email"}},[e._v(e._s(e.agent.email))]),n("idx-block",{attrs:{className:"agent-card__id"}},[e._v("#"+e._s(e.agent.agentId))])],1),e.imported?n("idx-block",{attrs:{className:"agent-card__import-flag"}},[n("idx-block",{attrs:{className:"agent-card__imported"}},[e._v(" Imported "),n("img",{attrs:{src:e.check}})]),n("idx-block",{attrs:{className:"agent-card__delete"},nativeOn:{click:function(t){return t.stopPropagation(),e.$emit("remove-agent",[e.agent])}}},[n("img",{attrs:{src:e.deleteIcon,alt:"Remove Agent"}})])],1):e._e()]},proxy:!0}])})},y=[],I=(n("a15b"),n("b0c0"),n("ac1f"),n("466d"),n("bacc")),S=n.n(I),w=n("3bae"),$=n.n(w),N={name:"agent-card",props:{agent:{type:Object,default:function(){}},imported:{type:Boolean,default:!1}},computed:{agentInitials:function(){var e=this.agent.name.match(/\b(\w)/g);return e.join("")}},created:function(){this.option={value:"selected",label:"selected"},this.deleteIcon=S.a,this.check=$.a}},C=N,j=(n("178e"),Object(u["a"])(C,x,y,!1,null,null,null)),O=j.exports,L={name:"imported-templated",mixins:[g],components:{BulkAction:m,listingsCard:v,agentCard:O},props:{description:{type:String,default:""},masterList:{type:Array,required:!0},action:{type:String,default:"Import"},cardType:{type:String,required:!0},imported:{type:Boolean,default:!1},clearSelections:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:Object(i["a"])({},Object(o["d"])({mainLoading:function(e){return e.importContent.mainLoading}}))},P=L,T=(n("72c0"),Object(u["a"])(P,a,r,!1,null,null,null));t["a"]=T.exports},"3bae":function(e,t,n){e.exports=n.p+"img/check-light-white.63d4b2d5.svg"},"467d":function(e,t,n){"use strict";n("2b29")},"52cb":function(e,t,n){"use strict";n("d81d"),n("96cf");var a=n("1da1");t["a"]={data:function(){return{checkProgress:"",clearSelections:!1,loading:!1}},methods:{scrollToTop:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},importItems:function(e,t){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var i,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.clearSelections=!1,n.loading=!0,n.scrollToTop(),n.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!0,error:!1,text:"Your Import Is In Progress"}}),i=e.map((function(e){return"listings"===t?e.listingId:e.agentId})),r.prev=5,r.next=8,n.importContentRepository.post({ids:i},"".concat(t,"/import"));case 8:return r.next=10,n.importContentRepository.get(t);case 10:o=r.sent,s=o.data,s.inProgress?n.checkProgress=setInterval(Object(a["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!s.inProgress){e.next=8;break}return e.next=3,n.importContentRepository.get(t);case 3:a=e.sent,s=a.data,n.clearSelections=!0,e.next=12;break;case 8:clearInterval(n.checkProgress),n.$store.dispatch("importContent/setItem",{key:t,value:s}),n.loading=!1,n.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!1,error:!1,text:"Your Import Is In Progress"}});case 12:case"end":return e.stop()}}),e)}))),5e3):(n.clearSelections=!0,n.$store.dispatch("importContent/setItem",{key:t,value:s}),n.loading=!1,n.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!1,error:!1,text:"Your Import Is In Progress"}})),r.next=18;break;case 15:r.prev=15,r.t0=r["catch"](5),n.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!0,error:!0,text:"We're experiencing a problem, please try again"}});case 18:case"end":return r.stop()}}),r,null,[[5,15]])})))()},unimportItems:function(e,t){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){var r,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.clearSelections=!1,n.loading=!0,n.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!0,error:!1,text:"Your Deletion Is In Progress"}}),r=e.map((function(e){return e.postId})),a.prev=4,n.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!1,error:!1,text:"Your Deletion Is In Progress"}}),a.next=8,n.importContentRepository.delete({ids:r},"".concat(t,"/delete"));case 8:i=a.sent,o=i.data,n.$store.dispatch("".concat(n.module,"/setItem"),{key:t,value:o}),n.clearSelections=!0,n.loading=!1,a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](4),n.$store.dispatch("alerts/setItem",{key:"notification",value:{show:!0,error:!0,text:"We're experiencing a problem, please try again"}});case 18:case"end":return a.stop()}}),a,null,[[4,15]])})))()}},created:function(){this.module="importContent"}}},"72c0":function(e,t,n){"use strict";n("255c")},bacc:function(e,t,n){e.exports=n.p+"img/trash-light.54cb33ed.svg"},bdd8:function(e,t,n){"use strict";n("20fd")},c90d:function(e,t,n){}}]);
//# sourceMappingURL=chunk-1b53e5f7.f1b29757.js.map