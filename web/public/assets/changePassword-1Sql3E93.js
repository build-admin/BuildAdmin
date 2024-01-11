import{f as b,N as v,s as V,r as y,p as w,o as C,j as S,m as t,P as l,a8 as N,w as r,U as f,V as c,l as $}from"./vue-Y_0NT09C.js";import{b as I,C as L,a6 as U,_ as R}from"./index-r2_r-mqm.js";import{b as u}from"./validate-GlLPtrul.js";import{F as i}from"./index-3QkJ1XDU.js";import"./index-fgu_EUqb.js";import"./index-VpFBqr7Z.js";const k={class:"user-views"},q={class:"change-password"},x=b({__name:"changePassword",setup(B){const{t:s}=v(),P=I(),m=V(),e=y({formSubmitLoading:!1,form:{oldPassword:"",newPassword:"",confirmPassword:""},rules:{oldPassword:[u({name:"required",title:s("user.account.changePassword.Old password")})],newPassword:[u({name:"required",title:s("user.account.changePassword.New password")}),u({name:"password"})],confirmPassword:[u({name:"required",title:s("user.account.changePassword.Confirm new password")}),u({name:"password"}),{validator:(d,o,n)=>{(e.form.newPassword||e.form.confirmPassword)&&(e.form.newPassword==e.form.confirmPassword?n():n(new Error(s("user.account.changePassword.The duplicate password does not match the new password")))),n()},trigger:"blur"}]}}),p=()=>{m.value&&m.value.validate(d=>{d&&(e.formSubmitLoading=!0,U(e.form).then(o=>{e.formSubmitLoading=!1,o.code==1&&P.logout()}).catch(()=>{e.formSubmitLoading=!1}))})};return(d,o)=>{const n=w("el-button"),g=w("el-form-item"),h=w("el-form"),_=w("el-card");return C(),S("div",k,[t(_,{class:"user-views-card",shadow:"hover",header:r(s)("user.account.changePassword.Change Password")},{default:l(()=>[$("div",q,[t(h,{model:e.form,rules:e.rules,"label-position":"top",ref_key:"formRef",ref:m,onKeyup:o[5]||(o[5]=N(a=>p(),["enter"]))},{default:l(()=>[t(i,{label:r(s)("user.account.changePassword.Old password"),type:"password",modelValue:e.form.oldPassword,"onUpdate:modelValue":o[0]||(o[0]=a=>e.form.oldPassword=a),prop:"oldPassword","input-attr":{"show-password":!0},placeholder:r(s)("user.account.changePassword.Please enter your current password")},null,8,["label","modelValue","placeholder"]),t(i,{label:r(s)("user.account.changePassword.New password"),type:"password",modelValue:e.form.newPassword,"onUpdate:modelValue":o[1]||(o[1]=a=>e.form.newPassword=a),prop:"newPassword","input-attr":{"show-password":!0},placeholder:r(s)("Please input field",{field:r(s)("user.account.changePassword.New password")})},null,8,["label","modelValue","placeholder"]),t(i,{label:r(s)("user.account.changePassword.Confirm new password"),type:"password",modelValue:e.form.confirmPassword,"onUpdate:modelValue":o[2]||(o[2]=a=>e.form.confirmPassword=a),prop:"confirmPassword","input-attr":{"show-password":!0},placeholder:r(s)("Please input field",{field:r(s)("user.account.changePassword.Confirm new password")})},null,8,["label","modelValue","placeholder"]),t(g,{class:"submit-buttons"},{default:l(()=>[t(n,{onClick:o[3]||(o[3]=a=>r(L)(m.value))},{default:l(()=>[c(f(d.$t("Reset")),1)]),_:1}),t(n,{type:"primary",loading:e.formSubmitLoading,onClick:o[4]||(o[4]=a=>p())},{default:l(()=>[c(f(d.$t("Save")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["header"])])}}}),j=R(x,[["__scopeId","data-v-c46cf517"]]);export{j as default};