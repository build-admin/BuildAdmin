import{f as q,s as N,aq as P,N as z,r as B,p as m,X as d,o as i,O as c,P as r,w as e,U as y,V as b,j as W,_ as g,k as V,m as s,l as h,$,a8 as E,W as L}from"./vue-Y_0NT09C.js";import{F as n}from"./index-3QkJ1XDU.js";import{b as p}from"./validate-GlLPtrul.js";import{e as j,ah as K,_ as A}from"./index-r2_r-mqm.js";import"./index-fgu_EUqb.js";import"./index-VpFBqr7Z.js";const O={class:"title"},X=q({__name:"popupForm",props:{formData:{default:()=>({})}},setup(C){const _=C,k=j(),u=N(),a=P("baTable"),{t}=z(),R=B({name:[p({name:"required",title:t("security.dataRecycle.Rule name")})],controller:[p({name:"required",trigger:"change",message:t("Please select field",{field:t("security.dataRecycle.controller")})})],data_table:[p({name:"required",trigger:"change",message:t("Please select field",{field:t("security.dataRecycle.data sheet")})})],primary_key:[p({name:"required",trigger:"change",title:t("security.dataRecycle.Data table primary key")})]}),D=f=>{f&&K(f).then(l=>{a.form.items.primary_key=l.data.pk,a.form.defaultItems.primary_key=l.data.pk})};return(f,l)=>{const w=m("el-form"),x=m("el-scrollbar"),v=m("el-button"),S=m("el-dialog"),T=d("drag"),F=d("zoom"),I=d("loading"),U=d("blur");return i(),c(S,{class:"ba-operate-dialog","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(a).form.operate),onClose:e(a).toggleForm},{header:r(()=>[g((i(),W("div",O,[b(y(e(a).form.operate?e(t)(e(a).form.operate):""),1)])),[[T,[".ba-operate-dialog",".el-dialog__header"]],[F,".ba-operate-dialog"]])]),footer:r(()=>[h("div",{style:V("width: calc(100% - "+e(a).form.labelWidth/1.8+"px)")},[s(v,{onClick:l[6]||(l[6]=o=>e(a).toggleForm(""))},{default:r(()=>[b(y(e(t)("Cancel")),1)]),_:1}),g((i(),c(v,{loading:e(a).form.submitLoading,onClick:l[7]||(l[7]=o=>e(a).onSubmit(u.value)),type:"primary"},{default:r(()=>[b(y(e(a).form.operateIds&&e(a).form.operateIds.length>1?e(t)("Save and edit next item"):e(t)("Save")),1)]),_:1},8,["loading"])),[[U]])],4)]),default:r(()=>[g((i(),c(x,{class:"ba-table-form-scrollbar"},{default:r(()=>[h("div",{class:$(["ba-operate-form","ba-"+e(a).form.operate+"-form"]),style:V(e(k).layout.shrink?"":"width: calc(100% - "+e(a).form.labelWidth/2+"px)")},[e(a).form.loading?L("",!0):(i(),c(w,{key:0,ref_key:"formRef",ref:u,onKeyup:l[5]||(l[5]=E(o=>e(a).onSubmit(u.value),["enter"])),model:e(a).form.items,"label-position":e(k).layout.shrink?"top":"right","label-width":e(a).form.labelWidth+"px",rules:R},{default:r(()=>[s(n,{label:e(t)("security.dataRecycle.Rule name"),type:"string",modelValue:e(a).form.items.name,"onUpdate:modelValue":l[0]||(l[0]=o=>e(a).form.items.name=o),prop:"name",placeholder:e(t)("security.dataRecycle.The rule name helps to identify deleted data later")},null,8,["label","modelValue","placeholder"]),s(n,{label:e(t)("security.dataRecycle.controller"),type:"select",modelValue:e(a).form.items.controller,"onUpdate:modelValue":l[1]||(l[1]=o=>e(a).form.items.controller=o),prop:"controller",data:{content:_.formData.controllerList},placeholder:e(t)("security.dataRecycle.The data collection mechanism will monitor delete operations under this controller")},null,8,["label","modelValue","data","placeholder"]),s(n,{label:e(t)("security.dataRecycle.Corresponding data sheet"),type:"select",modelValue:e(a).form.items.data_table,"onUpdate:modelValue":l[2]||(l[2]=o=>e(a).form.items.data_table=o),prop:"data_table",data:{content:_.formData.tableList},"input-attr":{onChange:D}},null,8,["label","modelValue","data","input-attr"]),s(n,{label:e(t)("security.dataRecycle.Data table primary key"),type:"string",modelValue:e(a).form.items.primary_key,"onUpdate:modelValue":l[3]||(l[3]=o=>e(a).form.items.primary_key=o),prop:"primary_key"},null,8,["label","modelValue"]),s(n,{label:e(t)("State"),type:"radio",modelValue:e(a).form.items.status,"onUpdate:modelValue":l[4]||(l[4]=o=>e(a).form.items.status=o),prop:"status",data:{content:{0:e(t)("Disable"),1:e(t)("Enable")}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-position","label-width","rules"]))],6)]),_:1})),[[I,e(a).form.loading]])]),_:1},8,["model-value","onClose"])}}}),Z=A(X,[["__scopeId","data-v-44623b36"]]);export{Z as default};