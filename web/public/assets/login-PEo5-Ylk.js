var W=Object.defineProperty;var j=(t,s,u)=>s in t?W(t,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[s]=u;var h=(t,s,u)=>(j(t,typeof s!="symbol"?s+"":s,u),u);import{f as O,s as b,r as v,N as Y,A as Z,n as G,D as J,p as d,o as x,j as E,l as r,m as a,P as i,Z as Q,Y as X,O as ee,V as z,U as P,w as m,a7 as te,a8 as oe,a1 as ae,a2 as se}from"./vue-Y_0NT09C.js";import{_ as ne}from"./login-header-lUkE0zAh.js";import{e as le,t as ie,v as re,g as ce,f as de,r as ue,w as me,_ as pe}from"./index-r2_r-mqm.js";import{l as B}from"./index-VtKI_0j_.js";import{b as g}from"./validate-GlLPtrul.js";import{c as he}from"./index-ns4BiNql.js";import{t as fe}from"./useDark-CYLFEts0.js";const e={width:0,height:0,bubbleEl:null,canvas:null,ctx:{},circles:[],animate:!0,requestId:null},_e=function(){e.width=window.innerWidth,e.height=window.innerHeight,e.bubbleEl=document.getElementById("bubble"),e.bubbleEl.style.height=e.height+"px",e.canvas=document.getElementById("bubble-canvas"),e.canvas.width=e.width,e.canvas.height=e.height,e.ctx=e.canvas.getContext("2d"),e.circles=[];for(let t=0;t<e.width*.5;t++){const s=new ge;e.circles.push(s)}S(),we()};function M(){e.animate=!(document.body.scrollTop>e.height)}function R(){e.width=window.innerWidth,e.height=window.innerHeight,e.bubbleEl.style.height=e.height+"px",e.canvas.width=e.width,e.canvas.height=e.height}function S(){if(e.animate){e.ctx.clearRect(0,0,e.width,e.height);for(const t in e.circles)e.circles[t].draw()}e.requestId=requestAnimationFrame(S)}class ge{constructor(){h(this,"pos");h(this,"alpha");h(this,"scale");h(this,"velocity");h(this,"draw");this.pos={x:Math.random()*e.width,y:e.height+Math.random()*100},this.alpha=.1+Math.random()*.3,this.scale=.1+Math.random()*.3,this.velocity=Math.random(),this.draw=function(){this.pos.y-=this.velocity,this.alpha-=5e-4,e.ctx.beginPath(),e.ctx.arc(this.pos.x,this.pos.y,this.scale*10,0,2*Math.PI,!1),e.ctx.fillStyle="rgba(255,255,255,"+this.alpha+")",e.ctx.fill()}}}function we(){window.addEventListener("scroll",M),window.addEventListener("resize",R)}function be(){window.removeEventListener("scroll",M),window.removeEventListener("resize",R),cancelAnimationFrame(e.requestId)}const q=t=>(ae("data-v-c1b5ba12"),t=t(),se(),t),ve={class:"switch-language"},xe=q(()=>r("canvas",{id:"bubble-canvas",class:"bubble-canvas"},null,-1)),ye=[xe],ke={class:"login"},Ie={class:"login-box"},Ce=q(()=>r("div",{class:"head"},[r("img",{src:ne,alt:""})],-1)),Ve={class:"form"},Le=["src"],Ee={class:"content"},ze=O({__name:"login",setup(t){let s;const u=le(),D=ie();fe(u.layout.isDark);const y=b(),k=b(),I=b(),f=v({showCaptcha:!1,submitLoading:!1}),n=v({username:"",password:"",keep:!1,captchaId:re(),captchaInfo:""}),{t:p}=Y(),U=v({username:[g({name:"required",message:p("login.Please enter an account")}),g({name:"account"})],password:[g({name:"required",message:p("login.Please input a password")}),g({name:"password"})]}),A=()=>{n.username===""?k.value.focus():n.password===""&&I.value.focus()};Z(()=>{s=window.setTimeout(()=>{_e()},1e3),B("get").then(c=>{f.showCaptcha=c.data.captcha,G(()=>A())}).catch(c=>{console.log(c)})}),J(()=>{clearTimeout(s),be()});const C=()=>{var c;(c=y.value)==null||c.validate(o=>{o&&(f.showCaptcha?he(n.captchaId,_=>V(_)):V())})},V=(c="")=>{f.submitLoading=!0,n.captchaInfo=c,B("post",n).then(o=>{D.dataFill(o.data.userInfo),ue.push({path:me})}).finally(()=>{f.submitLoading=!1})};return(c,o)=>{const _=d("Icon"),T=d("el-dropdown-item"),F=d("el-dropdown-menu"),N=d("el-dropdown"),L=d("el-input"),w=d("el-form-item"),$=d("el-checkbox"),H=d("el-button"),K=d("el-form");return x(),E("div",null,[r("div",ve,[a(N,{size:"large","hide-timeout":50,placement:"bottom-end","hide-on-click":!0},{dropdown:i(()=>[a(F,{class:"chang-lang"},{default:i(()=>[(x(!0),E(Q,null,X(m(u).lang.langArray,l=>(x(),ee(T,{key:l.name,onClick:Pe=>m(ce)(l.name)},{default:i(()=>[z(P(l.value),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:i(()=>[a(_,{name:"fa fa-globe",color:"var(--el-text-color-secondary)",size:"28"})]),_:1})]),r("div",{onContextmenu:o[0]||(o[0]=te(()=>{},["stop"])),id:"bubble",class:"bubble"},ye,32),r("div",ke,[r("div",Ie,[Ce,r("div",Ve,[r("img",{class:"profile-avatar",src:m(de)("/static/images/avatar.png"),alt:""},null,8,Le),r("div",Ee,[a(K,{onKeyup:o[5]||(o[5]=oe(l=>C(),["enter"])),ref_key:"formRef",ref:y,rules:U,size:"large",model:n},{default:i(()=>[a(w,{prop:"username"},{default:i(()=>[a(L,{ref_key:"usernameRef",ref:k,type:"text",clearable:"",modelValue:n.username,"onUpdate:modelValue":o[1]||(o[1]=l=>n.username=l),placeholder:m(p)("login.Please enter an account")},{prefix:i(()=>[a(_,{name:"fa fa-user",class:"form-item-icon",size:"16",color:"var(--el-input-icon-color)"})]),_:1},8,["modelValue","placeholder"])]),_:1}),a(w,{prop:"password"},{default:i(()=>[a(L,{ref_key:"passwordRef",ref:I,modelValue:n.password,"onUpdate:modelValue":o[2]||(o[2]=l=>n.password=l),type:"password",placeholder:m(p)("login.Please input a password"),"show-password":""},{prefix:i(()=>[a(_,{name:"fa fa-unlock-alt",class:"form-item-icon",size:"16",color:"var(--el-input-icon-color)"})]),_:1},8,["modelValue","placeholder"])]),_:1}),a($,{modelValue:n.keep,"onUpdate:modelValue":o[3]||(o[3]=l=>n.keep=l),label:m(p)("login.Hold session"),size:"default"},null,8,["modelValue","label"]),a(w,null,{default:i(()=>[a(H,{loading:f.submitLoading,class:"submit-button",round:"",type:"primary",size:"large",onClick:o[4]||(o[4]=l=>C())},{default:i(()=>[z(P(m(p)("login.Sign in")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["rules","model"])])])])])])}}}),Te=pe(ze,[["__scopeId","data-v-c1b5ba12"]]);export{Te as default};