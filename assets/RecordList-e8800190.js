import{I as R}from"./iconify-32b3913c.js";import{_ as f,r as S,b as a,c,d as s,t as u,h as o,x as m,F as g,f as h,e as k,g as v,p as I,i as A,y as w,a as z,k as B,j as L,o as N,G as P}from"./index-09f2b84b.js";import{k as U}from"./code-4c9503e9.js";const C=n=>(I("data-v-06733ac5"),n=n(),A(),n),V={class:"recordcard-top"},b=["textContent"],F={style:{color:"#000","font-size":"small","margin-bottom":"1em"}},T=C(()=>s("span",null,"发布于",-1)),$=["textContent"],j=C(()=>s("span",null,"|",-1)),D=["textContent"],E={style:{margin:".8em 2em"}},G={__name:"RecordCard",props:["record","isAdmin"],emits:["update-record"],setup(n,{emit:x}){const i=n,t=i.record;return i.isAdmin,(l,p)=>{const _=S("el-image");return a(),c("div",V,[s("h3",{textContent:u(o(t).title)},null,8,b),s("div",F,[s("span",null,[T,s("span",{textContent:u(o(t).createTime)},null,8,$),m("    "),j]),(a(!0),c(g,null,h(o(t).status,d=>(a(),c("span",null,[m("   "),k(o(R),{icon:d,color:"#1769aa",style:{"vertical-align":"-10%"}},null,8,["icon"]),m("   ")]))),256))]),s("p",{textContent:u(o(t).content)},null,8,D),s("div",E,[(a(!0),c(g,null,h(o(t).images,(d,e)=>(a(),v(_,{style:{width:"100px",height:"100px"},src:d,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":o(t).images,"initial-index":e,fit:"cover"},null,8,["src","preview-src-list","initial-index"]))),256))])])}}},J=f(G,[["__scopeId","data-v-06733ac5"]]);const K={class:"recordlist-top"},M={__name:"RecordList",setup(n){const x=U(),i=w(),t=z(),l=B([]),p=e=>{P({currentPage:e,pageSize:5}).then(r=>{l.value=r.data.result.list,i.pageConfig.pageSize=r.data.result.pageSize*1,i.pageConfig.totalNum=r.data.result.totalNum*1})},_=()=>{let e=t.params.page;e==null&&(e=1),p(e)},d=L().isAdmin;return N(()=>{let e=t.params.page;e==null&&(e=1),p(e),x.code=t.meta.code}),(e,y)=>(a(),c("div",K,[(a(!0),c(g,null,h(l.value,r=>(a(),v(J,{key:r,onUpdateRecord:_,isAdmin:o(d),record:r},null,8,["isAdmin","record"]))),128))]))}},O=f(M,[["__scopeId","data-v-a9517e86"]]);export{O as default};
