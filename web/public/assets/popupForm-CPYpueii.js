import{f as $,s as x,aq as q,N as A,r as w,C as G,p as i,X as c,o as f,O as p,P as r,w as e,U as g,V as h,j as L,_ as y,k as K,m as u,l as R,$ as T,a7 as W,a8 as H}from"./vue-Y_0NT09C.js";import{c as M,e as O,v as V,_ as X}from"./index-r2_r-mqm.js";import{F as J}from"./index-3QkJ1XDU.js";import{b as Q}from"./validate-GlLPtrul.js";import"./index-fgu_EUqb.js";import"./index-VpFBqr7Z.js";function Y(){return M({url:"/admin/user.Rule/index",method:"get"})}const Z={class:"title"},ee=$({__name:"popupForm",setup(te,{expose:S}){const v=O(),_=x(),b=x(),t=q("baTable"),{t:l}=A(),a=w({treeKey:V(),defaultCheckedKeys:[],menuRules:[]}),N=w({name:[Q({name:"required",title:l("user.group.Group name")})],auth:[{required:!0,validator:(s,o,n)=>k().length<=0?n(new Error(l("Please select field",{field:l("user.group.jurisdiction")}))):n()}]});Y().then(s=>{a.menuRules=s.data.list});const k=()=>b.value.getCheckedKeys().concat(b.value.getHalfCheckedKeys()),F=(s,o)=>{if(o.isLeaf)return"";let n=!0;for(const m in o.childNodes)o.childNodes[m].isLeaf||(n=!1);return n?"penultimate-node":""};return S({getCheckeds:k}),G(()=>t.form.items.rules,()=>{if(t.form.items.rules&&t.form.items.rules.length)if(t.form.items.rules.includes("*")){let s=[];for(const o in a.menuRules)s.push(a.menuRules[o].id);a.defaultCheckedKeys=s}else a.defaultCheckedKeys=t.form.items.rules;else a.defaultCheckedKeys=[];a.treeKey=V()}),(s,o)=>{const n=i("el-input"),m=i("el-form-item"),D=i("el-tree"),I=i("el-form"),j=i("el-scrollbar"),C=i("el-button"),z=i("el-dialog"),B=c("drag"),E=c("zoom"),P=c("loading"),U=c("blur");return f(),p(z,{class:"ba-operate-dialog",top:"10vh","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(t).form.operate),onClose:e(t).toggleForm,"destroy-on-close":!0},{header:r(()=>[y((f(),L("div",Z,[h(g(e(t).form.operate?e(l)(e(t).form.operate):""),1)])),[[B,[".ba-operate-dialog",".el-dialog__header"]],[E,".ba-operate-dialog"]])]),footer:r(()=>[R("div",{style:K("width: calc(100% - "+e(t).form.labelWidth/1.8+"px)")},[u(C,{onClick:o[4]||(o[4]=d=>e(t).toggleForm(""))},{default:r(()=>[h(g(e(l)("Cancel")),1)]),_:1}),y((f(),p(C,{loading:e(t).form.submitLoading,onClick:o[5]||(o[5]=d=>e(t).onSubmit(_.value)),type:"primary"},{default:r(()=>[h(g(e(t).form.operateIds&&e(t).form.operateIds.length>1?e(l)("Save and edit next item"):e(l)("Save")),1)]),_:1},8,["loading"])),[[U]])],4)]),default:r(()=>[y((f(),p(j,{class:"ba-table-form-scrollbar"},{default:r(()=>[R("div",{class:T(["ba-operate-form","ba-"+e(t).form.operate+"-form"]),style:K(e(v).layout.shrink?"":"width: calc(100% - "+e(t).form.labelWidth/2+"px)")},[u(I,{ref_key:"formRef",ref:_,onSubmit:o[2]||(o[2]=W(()=>{},["prevent"])),onKeyup:o[3]||(o[3]=H(d=>e(t).onSubmit(_.value),["enter"])),model:e(t).form.items,"label-position":e(v).layout.shrink?"top":"right","label-width":e(t).form.labelWidth+"px",rules:N},{default:r(()=>[u(m,{prop:"name",label:e(l)("user.group.Group name")},{default:r(()=>[u(n,{modelValue:e(t).form.items.name,"onUpdate:modelValue":o[0]||(o[0]=d=>e(t).form.items.name=d),type:"string",placeholder:e(l)("Please input field",{field:e(l)("user.group.Group name")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),u(m,{prop:"auth",label:e(l)("user.group.jurisdiction")},{default:r(()=>[(f(),p(D,{ref_key:"treeRef",ref:b,key:a.treeKey,"default-checked-keys":a.defaultCheckedKeys,"default-expand-all":!0,"show-checkbox":"","node-key":"id",props:{children:"children",label:"title",class:F},data:a.menuRules},null,8,["default-checked-keys","props","data"]))]),_:1},8,["label"]),u(J,{label:e(l)("State"),modelValue:e(t).form.items.status,"onUpdate:modelValue":o[1]||(o[1]=d=>e(t).form.items.status=d),type:"radio",data:{content:{0:e(l)("Disable"),1:e(l)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-position","label-width","rules"])],6)]),_:1})),[[P,e(t).form.loading]])]),_:1},8,["model-value","onClose"])}}}),ie=X(ee,[["__scopeId","data-v-40c82358"]]);export{ie as default};