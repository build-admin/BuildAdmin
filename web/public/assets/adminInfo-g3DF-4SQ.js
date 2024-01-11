import{f as X,N as Y,s as G,r as P,p as m,X as H,o as p,j as U,m as n,P as i,i as J,w as t,l as s,O as b,W as Q,U as c,a8 as w,a7 as z,V as k,Z as ee,Y as ae,_ as ne}from"./vue-Y_0NT09C.js";import{c as y,t as oe,v as F,f as te,C as le,Z as ie,a2 as de,_ as me}from"./index-r2_r-mqm.js";import{b as v}from"./validate-GlLPtrul.js";const S="/admin/routine.AdminInfo/",C=new Map([["index",S+"index"],["edit",S+"edit"],["log","/admin/auth.AdminLog/index"]]);function re(){return y({url:C.get("index"),method:"get"})}function se(g={}){return y({url:C.get("log"),method:"get",params:g})}function D(g){return y({url:C.get("edit"),method:"post",data:g},{showSuccessMessage:!0})}const ue={class:"default-main"},fe={class:"admin-info"},pe={class:"image-slot"},ce={class:"admin-info-base"},ge={class:"admin-nickname"},_e={class:"admin-other"},Ie={class:"admin-info-form"},be=X({name:"routine/adminInfo",__name:"adminInfo",setup(g){const{t:o}=Y(),_=G(),I=oe(),e=P({adminInfo:{},formKey:F(),buttonLoading:!1,log:[],logFilter:{limit:12},logCurrentPage:1,logPageSize:12,logTotal:100,logLoading:!0});re().then(d=>{e.adminInfo=d.data.info,e.formKey=F(),e.logFilter.search=[{field:"admin_id",val:d.data.info.id,operator:"eq"}],h()});const h=()=>{se(e.logFilter).then(d=>{e.log=d.data.list,e.logTotal=d.data.total,e.logLoading=!1}).catch(()=>{e.logLoading=!1})},K=d=>{e.logPageSize=d,e.logFilter.limit=d,h()},N=d=>{e.logCurrentPage=d,e.logFilter.page=d,h()},$=P({nickname:[v({name:"required",title:o("routine.adminInfo.User nickname")})],email:[v({name:"email",title:o("routine.adminInfo.e-mail address")})],mobile:[v({name:"mobile",message:o("Please enter the correct field",{field:o("routine.adminInfo.phone number")})})],password:[v({name:"password"})]}),A=d=>{let a=new FormData;a.append("file",d.raw),de(a).then(u=>{u.code==1&&D({id:e.adminInfo.id,avatar:u.data.file.url}).then(()=>{I.dataFill({...I.$state,avatar:u.data.file.full_url}),e.adminInfo.avatar=u.data.file.full_url})})},V=()=>{_.value&&_.value.validate(d=>{if(d){let a={...e.adminInfo};delete a.last_login_time,delete a.username,delete a.avatar,e.buttonLoading=!0,D(a).then(()=>{I.dataFill({...I.$state,nickname:e.adminInfo.nickname}),e.buttonLoading=!1}).catch(()=>{e.buttonLoading=!1})}})};return(d,a)=>{const u=m("Icon"),B=m("el-image"),T=m("el-upload"),f=m("el-input"),r=m("el-form-item"),x=m("el-button"),j=m("el-form"),L=m("el-col"),R=m("el-timeline-item"),M=m("el-timeline"),q=m("el-pagination"),E=m("el-card"),O=m("el-row"),Z=H("loading");return p(),U("div",ue,[n(O,{gutter:30},{default:i(()=>[n(L,{class:"lg-mb-20",xs:24,sm:24,md:24,lg:10},{default:i(()=>[s("div",fe,[t(J)(e.adminInfo)?Q("",!0):(p(),b(T,{key:0,class:"avatar-uploader",action:"","show-file-list":!1,onChange:A,"auto-upload":!1,accept:"image/gif, image/jpg, image/jpeg, image/bmp, image/png, image/webp"},{default:i(()=>[n(B,{src:t(te)(e.adminInfo.avatar),class:"avatar"},{error:i(()=>[s("div",pe,[n(u,{size:"30",color:"#c0c4cc",name:"el-icon-Picture"})])]),_:1},8,["src"])]),_:1})),s("div",ce,[s("div",ge,c(e.adminInfo.nickname),1),s("div",_e,[s("div",null,c(t(o)("routine.adminInfo.Last logged in on"))+" "+c(e.adminInfo.last_login_time),1)])]),s("div",Ie,[(p(),b(j,{onKeyup:a[10]||(a[10]=w(l=>V(),["enter"])),key:e.formKey,"label-position":"top",rules:$,ref_key:"formRef",ref:_,model:e.adminInfo},{default:i(()=>[n(r,{label:t(o)("routine.adminInfo.user name")},{default:i(()=>[n(f,{disabled:"",modelValue:e.adminInfo.username,"onUpdate:modelValue":a[0]||(a[0]=l=>e.adminInfo.username=l)},null,8,["modelValue"])]),_:1},8,["label"]),n(r,{label:t(o)("routine.adminInfo.User nickname"),prop:"nickname"},{default:i(()=>[n(f,{placeholder:t(o)("routine.adminInfo.Please enter a nickname"),modelValue:e.adminInfo.nickname,"onUpdate:modelValue":a[1]||(a[1]=l=>e.adminInfo.nickname=l)},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),n(r,{label:t(o)("routine.adminInfo.e-mail address"),prop:"email"},{default:i(()=>[n(f,{placeholder:t(o)("Please input field",{field:t(o)("routine.adminInfo.e-mail address")}),modelValue:e.adminInfo.email,"onUpdate:modelValue":a[2]||(a[2]=l=>e.adminInfo.email=l)},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),n(r,{label:t(o)("routine.adminInfo.phone number"),prop:"mobile"},{default:i(()=>[n(f,{placeholder:t(o)("Please input field",{field:t(o)("routine.adminInfo.phone number")}),modelValue:e.adminInfo.mobile,"onUpdate:modelValue":a[3]||(a[3]=l=>e.adminInfo.mobile=l)},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),n(r,{label:t(o)("routine.adminInfo.autograph"),prop:"motto"},{default:i(()=>[n(f,{onKeyup:[a[4]||(a[4]=w(z(()=>{},["stop"]),["enter"])),a[5]||(a[5]=w(z(l=>V(),["ctrl"]),["enter"]))],placeholder:t(o)("routine.adminInfo.This guy is lazy and doesn write anything"),type:"textarea",modelValue:e.adminInfo.motto,"onUpdate:modelValue":a[6]||(a[6]=l=>e.adminInfo.motto=l)},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),n(r,{label:t(o)("routine.adminInfo.New password"),prop:"password"},{default:i(()=>[n(f,{type:"password",placeholder:t(o)("routine.adminInfo.Please leave blank if not modified"),modelValue:e.adminInfo.password,"onUpdate:modelValue":a[7]||(a[7]=l=>e.adminInfo.password=l)},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),n(r,null,{default:i(()=>[n(x,{type:"primary",loading:e.buttonLoading,onClick:a[8]||(a[8]=l=>V())},{default:i(()=>[k(c(t(o)("routine.adminInfo.Save changes")),1)]),_:1},8,["loading"]),n(x,{onClick:a[9]||(a[9]=l=>t(le)(_.value))},{default:i(()=>[k(c(t(o)("Reset")),1)]),_:1})]),_:1})]),_:1},8,["rules","model"]))])])]),_:1}),ne((p(),b(L,{xs:24,sm:24,md:24,lg:12},{default:i(()=>[n(E,{header:t(o)("routine.adminInfo.Operation log"),shadow:"never"},{default:i(()=>[n(M,null,{default:i(()=>[(p(!0),U(ee,null,ae(e.log,(l,W)=>(p(),b(R,{key:W,size:"large",timestamp:t(ie)(l.create_time)},{default:i(()=>[k(c(l.title),1)]),_:2},1032,["timestamp"]))),128))]),_:1}),n(q,{currentPage:e.logCurrentPage,"page-size":e.logPageSize,"page-sizes":[12,22,52,100],background:"",layout:"prev, next, jumper",total:e.logTotal,onSizeChange:K,onCurrentChange:N},null,8,["currentPage","page-size","total"])]),_:1},8,["header"])]),_:1})),[[Z,e.logLoading]])]),_:1})])}}}),we=me(be,[["__scopeId","data-v-c6ef27c5"]]);export{we as default};
