import{s}from"./store--Zh0gsXI.js";import{g as I,m as D,c as v,i as B}from"./index-5NOOKC46.js";import{f as L,_ as S}from"./index-r2_r-mqm.js";import{f as U,p as n,X as $,o,j as t,_ as z,w as a,O as r,P as i,Z as p,m as g,U as c,V as u,Y as m,W as E,l}from"./vue-Y_0NT09C.js";const j=["onClick"],A={class:"goods-footer"},F={key:0,class:"goods-tag"},O={class:"goods-title"},P={class:"goods-data"},W={class:"download-count"},X={key:0,class:"goods-price"},Y={class:"original-price"},Z={class:"current-price"},q={key:1,class:"goods-price"},G=U({__name:"tabs",setup(H){const h=()=>{B()};return(b,f)=>{const k=n("el-image"),y=n("el-tag"),T=n("Icon"),w=n("el-empty"),V=n("el-tab-pane"),C=n("el-tabs"),N=$("loading");return o(),t("div",null,[z((o(),r(C,{"element-loading-text":b.$t("module.Loading"),modelValue:a(s).table.params.activeTab,"onUpdate:modelValue":f[0]||(f[0]=d=>a(s).table.params.activeTab=d),type:"border-card",class:"store-tabs",onTabChange:h},{default:i(()=>[(o(!0),t(p,null,m(a(s).table.category,d=>(o(),r(V,{name:d.id.toString(),key:d.id,label:d.name,class:"store-tab-pane"},{default:i(()=>[a(s).table.modules[a(s).table.params.activeTab]&&a(s).table.modules[a(s).table.params.activeTab].length>0?(o(!0),t(p,{key:0},m(a(s).table.modules[a(s).table.params.activeTab],e=>(o(),t("div",{class:"goods",key:e.uid},[l("div",{onClick:_=>a(I)(e.uid),class:"goods-item suspension"},[g(k,{loading:"lazy",fit:"contain",class:"goods-img",src:e.logo?e.logo:a(L)("/static/images/local-module-logo.png")},null,8,["src"]),l("div",A,[e.tags&&e.tags.length>0?(o(),t("div",F,[(o(!0),t(p,null,m(e.tags,(_,x)=>(o(),r(y,{type:_.type,key:x},{default:i(()=>[u(c(_.name),1)]),_:2},1032,["type"]))),128))])):E("",!0),l("div",O,c(e.title),1),l("div",P,[l("span",W,[g(T,{name:"fa fa-download",color:"#c0c4cc",size:"13"}),u(" "+c(e.downloads?e.downloads:"-"),1)]),e.state===a(D).UNINSTALLED?(o(),t("span",X,[l("span",Y,c(a(v)(e.original_price,e.currency_select)),1),l("span",Z,c(a(v)(e.present_price,e.currency_select)),1)])):(o(),t("div",q,[g(y,{effect:"dark",type:e.stateTag.type},{default:i(()=>[u(c(e.stateTag.text),1)]),_:2},1032,["type"])]))])])],8,j)]))),128)):(o(),r(w,{key:1,class:"modules-empty",description:b.$t("module.No more")},null,8,["description"]))]),_:2},1032,["name","label"]))),128))]),_:1},8,["element-loading-text","modelValue"])),[[N,a(s).loading.table]])])}}}),R=S(G,[["__scopeId","data-v-2df99a09"]]);export{R as default};
