import{f as S,N as G,s as K,r as A,p as c,X as C,o as m,j as v,m as t,P as n,w as e,l as r,U as u,V as f,O as z,_ as w,a8 as L}from"./vue-Y_0NT09C.js";import{F as B}from"./index-3QkJ1XDU.js";import{b as _}from"./validate-GlLPtrul.js";import{v as U,_ as M}from"./index-r2_r-mqm.js";import{u as O,s as g,b as j,c as E}from"./store--Zh0gsXI.js";import"./index-fgu_EUqb.js";import"./index-VpFBqr7Z.js";const T={key:0,class:"userinfo"},X={class:"user-avatar-box"},H=["src"],J={class:"username"},Q={class:"user-integral"},W={class:"userinfo-buttons"},Y={key:1,class:"ba-login"},Z={class:"ba-title"},ee=["src"],oe={target:"_blank",class:"ba-account-register",href:"https://uni.buildadmin.com/user/login?type=register",rel:"noopener noreferrer"},ae=S({__name:"baAccount",setup(te){const{t:s}=G(),i=O(),b=K(),a=A({loading:!1,form:{tab:"login",username:"",password:"",captcha:"",captchaId:U(),keep:!1}}),$=A({username:[_({name:"required",title:s("module.User name")})],captcha:[_({name:"required",title:s("module.Verification Code")})],password:[_({name:"required",title:s("module.Password")}),_({name:"password"})]}),F=d=>{window.open(d)},V=()=>{b.value&&b.value.validate(d=>{d?(a.loading=!0,E("post",a.form).then(o=>{g.dialog.baAccount=!1,a.loading=!1,i.dataFill(o.data.userInfo)}).catch(()=>{a.loading=!1,h()})):h()})},h=()=>{a.form.captcha="",a.form.captchaId=U()};return(d,o)=>{const P=c("Icon"),p=c("el-button"),D=c("el-input"),y=c("el-col"),N=c("el-row"),k=c("el-form-item"),R=c("el-form"),q=c("el-dialog"),I=C("blur"),x=C("loading");return m(),v("div",null,[t(q,{modelValue:e(g).dialog.baAccount,"onUpdate:modelValue":o[7]||(o[7]=l=>e(g).dialog.baAccount=l),class:"ba-account-dialog",width:"25%",title:e(s)("module.Member information")},{default:n(()=>[e(i).token?w((m(),v("div",T,[r("div",X,[r("img",{class:"user-avatar",src:e(i).avatar,alt:""},null,8,H),t(P,{class:"user-avatar-gender",name:e(i).getGenderIcon().name,size:"14",color:e(i).getGenderIcon().color},null,8,["name","color"])]),r("p",J,u(e(i).nickname),1),r("p",Q,[r("span",null,u(d.$t("module.Integral")+" "+e(i).score),1),r("span",null,u(d.$t("module.Balance")+" "+e(i).money),1)]),r("div",W,[w((m(),z(p,{onClick:o[0]||(o[0]=l=>F("https://uni.buildadmin.com/user/account/moduleOrders")),size:"default",type:"primary"},{default:n(()=>[f(u(d.$t("module.My module")),1)]),_:1})),[[I]]),w((m(),z(p,{onClick:o[1]||(o[1]=l=>e(i).logout()),size:"default",type:"warning"},{default:n(()=>[f(u(d.$t("module.Logout login")),1)]),_:1})),[[I]])])])),[[x,e(g).loading.common]]):(m(),v("div",Y,[r("h3",Z,u(e(s)("module.Log in to the buildadmin module marketplace")),1),t(R,{onKeyup:o[6]||(o[6]=L(l=>V(),["enter"])),ref_key:"baAccountFormRef",ref:b,rules:$,class:"ba-account-login-form",model:a.form},{default:n(()=>[t(B,{modelValue:a.form.username,"onUpdate:modelValue":o[2]||(o[2]=l=>a.form.username=l),type:"string",prop:"username",placeholder:e(s)("module.Please enter buildadmin account name or email"),"input-attr":{size:"large"}},null,8,["modelValue","placeholder"]),t(B,{modelValue:a.form.password,"onUpdate:modelValue":o[3]||(o[3]=l=>a.form.password=l),type:"password",prop:"password",placeholder:e(s)("module.Please enter the buildadmin account password"),"input-attr":{size:"large"}},null,8,["modelValue","placeholder"]),t(k,{prop:"captcha"},{default:n(()=>[t(N,{class:"w100"},{default:n(()=>[t(y,{span:16},{default:n(()=>[t(D,{modelValue:a.form.captcha,"onUpdate:modelValue":o[4]||(o[4]=l=>a.form.captcha=l),size:"large",clearable:"",autocomplete:"off",placeholder:e(s)("module.Please enter the login verification code")},null,8,["modelValue","placeholder"])]),_:1}),t(y,{class:"captcha-box",span:8},{default:n(()=>[r("img",{onClick:h,class:"captcha-img",src:e(j)()+"&id="+a.form.captchaId},null,8,ee)]),_:1})]),_:1})]),_:1}),t(k,{class:"form-buttons"},{default:n(()=>[t(p,{onClick:o[5]||(o[5]=l=>V()),loading:a.loading,round:"",type:"primary",size:"large"},{default:n(()=>[f(u(e(s)("module.Sign in")),1)]),_:1},8,["loading"]),r("a",oe,[t(p,{round:"",plain:"",type:"info",size:"large"},{default:n(()=>[f(u(e(s)("module.Register")),1)]),_:1})])]),_:1})]),_:1},8,["rules","model"])]))]),_:1},8,["modelValue","title"])])}}}),ue=M(ae,[["__scopeId","data-v-2975ba4d"]]);export{ue as default};