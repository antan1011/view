import{_ as u,j as y,k,u as C,l as $,b as s,c as d,d as a,h as c,n as r,F as w,f as g,t as x,m as I,p as S,i as B,q as v,a as H,r as L,g as h,w as i,e as f,s as V}from"./index-84d9b340.js";import{k as b}from"./code-8cbe7868.js";import{n as A}from"./list-e2b6135d.js";const M=e=>(S("data-v-dc42a05e"),e=e(),B(),e),N={class:"header-top"},R=["onClick"],D=M(()=>a("a",null,"发布",-1)),F=[D],P={__name:"Header",setup(e){const l=b(),p=y().isAdmin,t=k(),o=C();return $(()=>l.code,(m,n)=>{t.value=m}),(m,n)=>(s(),d("div",N,[a("div",{onClick:n[0]||(n[0]=_=>c(o).push({name:"Home"})),class:r({selected:t.value===1})},"Atan's website",2),a("ul",null,[(s(!0),d(w,null,g(c(A),_=>(s(),d("li",{onClick:Q=>c(o).push({name:_.name})},[a("a",{class:r({selected:_.code===t.value})},x(_.display),3)],8,R))),256)),c(p)?(s(),d("li",{key:0,onClick:n[1]||(n[1]=_=>c(o).push({name:"Publish"})),class:r({selected:t.value===1599})},F,2)):I("",!0)])]))}},j=u(P,[["__scopeId","data-v-dc42a05e"]]);const q={},z={class:"layout-top"},E={class:"layout-header"},J={class:"layout-content"};function K(e,l){return s(),d("div",z,[a("div",E,[v(e.$slots,"header",{},void 0,!0)]),a("div",J,[v(e.$slots,"default",{},void 0,!0)])])}const G=u(q,[["render",K],["__scopeId","data-v-e0779a92"]]);const O={__name:"Main",setup(e){return H(),(l,p)=>{const t=L("router-view");return s(),h(G,null,{header:i(()=>[f(j)]),default:i(()=>[f(t,null,{default:i(({Component:o})=>[(s(),h(V(o),{class:"in-animate1 animate__fadeInRight"}))]),_:1})]),_:1})}}},X=u(O,[["__scopeId","data-v-0ce33834"]]);export{X as default};
