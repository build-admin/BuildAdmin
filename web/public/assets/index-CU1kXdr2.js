import{b as k,d as _,T as y,a as x}from"./index-fgu_EUqb.js";import{t as w,a0 as C,W as I}from"./index-r2_r-mqm.js";import T from"./popupForm-hLhIsvkQ.js";import{f as v,s as b,N as A,at as D,al as G,A as N,p as O,o as i,j as B,w as n,O as f,W as g,m as u}from"./vue-Y_0NT09C.js";import"./index-VpFBqr7Z.js";import"./index-3QkJ1XDU.js";import"./validate-GlLPtrul.js";const L={class:"default-main ba-table-box"},K=v({name:"auth/group",__name:"index",setup(R){const d=b(),c=b(),{t}=A(),h=w(),e=new k(new C("/admin/auth.Group/"),{expandAll:!0,dblClickNotEditColumn:[void 0],column:[{type:"selection",align:"center"},{label:t("auth.group.Group name"),prop:"name",align:"left",width:"200"},{label:t("auth.group.jurisdiction"),prop:"rules",align:"center"},{label:t("State"),prop:"status",align:"center",render:"tag",custom:{0:"danger",1:"success"},replaceValue:{0:t("Disable"),1:t("Enable")}},{label:t("Update time"),prop:"update_time",align:"center",width:"160",render:"datetime"},{label:t("Create time"),prop:"create_time",align:"center",width:"160",render:"datetime"},{label:t("Operate"),align:"center",width:"130",render:"buttons",buttons:_(["edit","delete"])}]},{defaultItems:{status:"1"}},{onSubmit:({formEl:a,operate:l,items:r})=>{var r=D(r);r.rules=d.value.getCheckeds();for(const o in r)r[o]===null&&delete r[o];l=l.replace(l[0],l[0].toLowerCase());let m=()=>{e.form.submitLoading=!0,e.api.postData(l,r).then(o=>{var p;e.onTableHeaderAction("refresh",{}),e.form.submitLoading=!1,(p=e.form.operateIds)==null||p.shift(),e.form.operateIds.length>0?e.toggleForm("Edit",e.form.operateIds):e.toggleForm(),e.runAfter("onSubmit",{res:o})}).catch(()=>{e.form.submitLoading=!1})};return a?(e.form.ref=a,a.validate(o=>{o&&m()})):m(),!1},onTableDblclick:({row:a})=>e.table.extend.adminGroup.indexOf(a.id)===-1},{getIndex:({res:a})=>{e.table.extend.adminGroup=a.data.group;let l=I(e.table.column,"render","buttons");e.table.column[l].buttons.forEach(s=>{s.display=r=>a.data.group.indexOf(r.id)===-1})}});return G("baTable",e),N(()=>{e.table.ref=c.value,e.mount(),e.getIndex()}),(a,l)=>{const s=O("el-alert");return i(),B("div",L,[n(h).super?g("",!0):(i(),f(s,{key:0,class:"ba-table-alert",title:n(t)("auth.group.Manage subordinate role groups here"),type:"info","show-icon":""},null,8,["title"])),n(e).table.remark?(i(),f(s,{key:1,class:"ba-table-alert",title:n(e).table.remark,type:"info","show-icon":""},null,8,["title"])):g("",!0),u(y,{buttons:["refresh","add","edit","delete","unfold","quickSearch","columnDisplay"],"quick-search-placeholder":n(t)("Quick search placeholder",{fields:n(t)("auth.group.GroupName")})},null,8,["quick-search-placeholder"]),u(x,{ref_key:"tableRef",ref:c,pagination:!1},null,512),u(T,{ref_key:"formRef",ref:d},null,512)])}}});export{K as default};
