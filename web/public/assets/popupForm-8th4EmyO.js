import{f as D,s as $,aq as B,N as L,r as q,p as d,X as g,o as i,O as s,P as u,w as e,U as n,V as f,j as K,_ as v,k as R,m as a,l as c,$ as j,a8 as k,W as _,a7 as C}from"./vue-Y_0NT09C.js";import{F as h}from"./index-3QkJ1XDU.js";import{b as w}from"./validate-GlLPtrul.js";import{e as H,_ as O}from"./index-r2_r-mqm.js";import"./index-fgu_EUqb.js";import"./index-VpFBqr7Z.js";const X={class:"title"},G={class:"block-help"},J={class:"block-help"},Q={class:"block-help"},Y=D({__name:"popupForm",setup(Z){const x=H(),y=$(),l=B("baTable"),{t}=L(),I=q({title:[w({name:"required",title:t("auth.rule.Rule title")})],pid:[{validator:(P,o,m)=>o&&parseInt(o)==parseInt(l.form.items.id)?m(new Error(t("auth.rule.The superior menu rule cannot be the rule itself"))):m(),trigger:"blur"}],name:[w({name:"required",title:t("auth.rule.Rule name")})],url:[w({name:"url",message:t("auth.rule.Please enter the correct URL")})]});return(P,o)=>{const m=d("el-radio"),S=d("el-radio-group"),p=d("el-form-item"),b=d("el-input"),V=d("el-option"),T=d("el-select"),A=d("el-form"),E=d("el-scrollbar"),U=d("el-button"),F=d("el-dialog"),M=g("drag"),N=g("zoom"),W=g("loading"),z=g("blur");return i(),s(F,{class:"ba-operate-dialog",top:"5vh","close-on-click-modal":!1,"model-value":["Add","Edit"].includes(e(l).form.operate),onClose:e(l).toggleForm,"destroy-on-close":!0},{header:u(()=>[v((i(),K("div",X,[f(n(e(l).form.operate?e(t)(e(l).form.operate):""),1)])),[[M,[".ba-operate-dialog",".el-dialog__header"]],[N,".ba-operate-dialog"]])]),footer:u(()=>[c("div",{style:R("width: calc(100% - "+e(l).form.labelWidth/1.8+"px)")},[a(U,{onClick:o[17]||(o[17]=r=>e(l).toggleForm(""))},{default:u(()=>[f(n(e(t)("Cancel")),1)]),_:1}),v((i(),s(U,{loading:e(l).form.submitLoading,onClick:o[18]||(o[18]=r=>e(l).onSubmit(y.value)),type:"primary"},{default:u(()=>[f(n(e(l).form.operateIds&&e(l).form.operateIds.length>1?e(t)("Save and edit next item"):e(t)("Save")),1)]),_:1},8,["loading"])),[[z]])],4)]),default:u(()=>[v((i(),s(E,{class:"ba-table-form-scrollbar"},{default:u(()=>[c("div",{class:j(["ba-operate-form","ba-"+e(l).form.operate+"-form"]),style:R(e(x).layout.shrink?"":"width: calc(100% - "+e(l).form.labelWidth/2+"px)")},[e(l).form.loading?_("",!0):(i(),s(A,{key:0,ref_key:"formRef",ref:y,onKeyup:o[16]||(o[16]=k(r=>e(l).onSubmit(y.value),["enter"])),model:e(l).form.items,"label-position":e(x).layout.shrink?"top":"right","label-width":e(l).form.labelWidth+"px",rules:I},{default:u(()=>[a(h,{type:"remoteSelect",prop:"pid",label:e(t)("auth.rule.Superior menu rule"),modelValue:e(l).form.items.pid,"onUpdate:modelValue":o[0]||(o[0]=r=>e(l).form.items.pid=r),placeholder:e(t)("Click select"),"input-attr":{params:{isTree:!0},field:"title","remote-url":e(l).api.actionUrl.get("index")}},null,8,["label","modelValue","placeholder","input-attr"]),a(p,{label:e(t)("auth.rule.Rule type")},{default:u(()=>[a(S,{modelValue:e(l).form.items.type,"onUpdate:modelValue":o[1]||(o[1]=r=>e(l).form.items.type=r)},{default:u(()=>[a(m,{class:"ba-el-radio",label:"route",border:!0},{default:u(()=>[f(n(e(t)("user.rule.Normal routing")),1)]),_:1}),a(m,{class:"ba-el-radio",label:"menu_dir",border:!0},{default:u(()=>[f(n(e(t)("user.rule.Member center menu contents")),1)]),_:1}),a(m,{class:"ba-el-radio",label:"menu",border:!0},{default:u(()=>[f(n(e(t)("user.rule.Member center menu items")),1)]),_:1}),a(m,{class:"ba-el-radio",label:"nav",border:!0},{default:u(()=>[f(n(e(t)("user.rule.Top bar menu items")),1)]),_:1}),a(m,{class:"ba-el-radio",label:"button",border:!0},{default:u(()=>[f(n(e(t)("user.rule.Page button")),1)]),_:1}),a(m,{class:"ba-el-radio",label:"nav_user_menu",border:!0},{default:u(()=>[f(n(e(t)("user.rule.Top bar user dropdown")),1)]),_:1})]),_:1},8,["modelValue"]),c("div",G,n(e(t)("user.rule.Type "+e(l).form.items.type+" tips")),1)]),_:1},8,["label"]),a(p,{prop:"title",label:e(t)("auth.rule.Rule title")},{default:u(()=>[a(b,{modelValue:e(l).form.items.title,"onUpdate:modelValue":o[2]||(o[2]=r=>e(l).form.items.title=r),type:"string",placeholder:e(t)("Please input field",{field:e(t)("auth.rule.Rule title")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(p,{prop:"name",label:e(t)("auth.rule.Rule name")},{default:u(()=>[a(b,{modelValue:e(l).form.items.name,"onUpdate:modelValue":o[3]||(o[3]=r=>e(l).form.items.name=r),type:"string",placeholder:e(t)("user.rule.English name")},null,8,["modelValue","placeholder"]),c("div",J,n(e(t)("auth.rule.It will be registered as the web side routing name and used as the server side API authentication")),1)]),_:1},8,["label"]),a(p,{label:e(t)("auth.rule.Routing path")},{default:u(()=>[a(b,{modelValue:e(l).form.items.path,"onUpdate:modelValue":o[4]||(o[4]=r=>e(l).form.items.path=r),type:"string",placeholder:e(t)("user.rule.Web side routing path")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(l).form.items.type!="button"?(i(),s(h,{key:0,type:"icon",label:e(t)("auth.rule.Rule Icon"),modelValue:e(l).form.items.icon,"onUpdate:modelValue":o[5]||(o[5]=r=>e(l).form.items.icon=r),"input-attr":{"show-icon-name":!0}},null,8,["label","modelValue"])):_("",!0),["menu_dir","button","route"].includes(e(l).form.items.type)?_("",!0):(i(),s(h,{key:1,label:e(t)("auth.rule.Menu type"),modelValue:e(l).form.items.menu_type,"onUpdate:modelValue":o[6]||(o[6]=r=>e(l).form.items.menu_type=r),type:"radio",data:{content:{tab:e(t)("auth.rule.Menu type tab"),link:e(t)("auth.rule.Menu type link (offsite)"),iframe:"Iframe"},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])),!["menu_dir","button","route"].includes(e(l).form.items.type)&&e(l).form.items.menu_type!="tab"?(i(),s(p,{key:2,prop:"url",label:e(t)("auth.rule.Link address")},{default:u(()=>[a(b,{modelValue:e(l).form.items.url,"onUpdate:modelValue":o[7]||(o[7]=r=>e(l).form.items.url=r),type:"string",placeholder:e(t)("auth.rule.Please enter the URL address of the link or iframe")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):_("",!0),e(l).form.items.type=="route"||!["menu_dir","button"].includes(e(l).form.items.type)&&e(l).form.items.menu_type=="tab"?(i(),s(p,{key:3,label:e(t)("auth.rule.Component path")},{default:u(()=>[a(b,{modelValue:e(l).form.items.component,"onUpdate:modelValue":o[8]||(o[8]=r=>e(l).form.items.component=r),type:"string",placeholder:e(t)("user.rule.For example, if you add account/overview as a route only")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):_("",!0),!["menu_dir","button"].includes(e(l).form.items.type)&&e(l).form.items.menu_type=="tab"?(i(),s(p,{key:4,label:e(t)("auth.rule.Extended properties")},{default:u(()=>[a(T,{class:"w100",modelValue:e(l).form.items.extend,"onUpdate:modelValue":o[9]||(o[9]=r=>e(l).form.items.extend=r),placeholder:e(t)("Please select field",{field:e(t)("auth.rule.Extended properties")})},{default:u(()=>[a(V,{label:e(t)("auth.rule.none"),value:"none"},null,8,["label"]),a(V,{label:e(t)("auth.rule.Add as route only"),value:"add_rules_only"},null,8,["label"]),a(V,{label:e(t)("auth.rule.Add as menu only"),value:"add_menu_only"},null,8,["label"])]),_:1},8,["modelValue","placeholder"]),c("div",Q,n(e(t)("user.rule.Web side component path, please start with /src, such as: /src/views/frontend/index")),1)]),_:1},8,["label"])):_("",!0),["menu_dir","menu","nav_user_menu"].includes(e(l).form.items.type)?_("",!0):(i(),s(h,{key:5,label:e(t)("user.rule.no_login_valid"),modelValue:e(l).form.items.no_login_valid,"onUpdate:modelValue":o[10]||(o[10]=r=>e(l).form.items.no_login_valid=r),type:"radio",data:{content:{0:e(t)("user.rule.no_login_valid 0"),1:e(t)("user.rule.no_login_valid 1")},childrenAttr:{border:!0}},attr:{blockHelp:e(t)("user.rule.no_login_valid tips")}},null,8,["label","modelValue","data","attr"])),a(p,{label:e(t)("auth.rule.Rule comments")},{default:u(()=>[a(b,{onKeyup:[o[11]||(o[11]=k(C(()=>{},["stop"]),["enter"])),o[12]||(o[12]=k(C(r=>e(l).onSubmit(y.value),["ctrl"]),["enter"]))],modelValue:e(l).form.items.remark,"onUpdate:modelValue":o[13]||(o[13]=r=>e(l).form.items.remark=r),type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:e(t)("Please input field",{field:e(t)("auth.rule.Rule comments")})},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(p,{label:e(t)("auth.rule.Rule weight")},{default:u(()=>[a(b,{modelValue:e(l).form.items.weigh,"onUpdate:modelValue":o[14]||(o[14]=r=>e(l).form.items.weigh=r),type:"number",placeholder:e(t)("auth.rule.Please enter the weight of menu rule (sort by)")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(h,{label:e(t)("State"),modelValue:e(l).form.items.status,"onUpdate:modelValue":o[15]||(o[15]=r=>e(l).form.items.status=r),type:"radio",data:{content:{0:e(t)("Disable"),1:e(t)("Enable")},childrenAttr:{border:!0}}},null,8,["label","modelValue","data"])]),_:1},8,["model","label-position","label-width","rules"]))],6)]),_:1})),[[W,e(l).form.loading]])]),_:1},8,["model-value","onClose"])}}}),ue=O(Y,[["__scopeId","data-v-c11d519b"]]);export{ue as default};
