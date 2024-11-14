import{m as $,h as q,i as x,j as V,s as T,k as N,l as P,r as h,b as t,c as r,d as i,w as d,u,F as B,f as S,g as m,n as p,p as f,q as j,e as H,t as F}from"./index-d057f33a.js";import{_ as O,H as M,a as E,b as J,c as G,d as K,e as Q}from"./ListBulkActions-4e019d04.js";import{_ as X}from"./MultipleAvatar-9bfce769.js";import{I as Y}from"./IndicatorIcon-c103771d.js";import{P as Z}from"./PhoneIcon-d45a62b6.js";import{_ as ee}from"./ListRows-b9dc126d.js";import{b as z,_ as te}from"./UserAvatar-e49c5291.js";import{_ as se}from"./Dropdown.vue_vue_type_script_setup_true_lang-bf1a1150.js";import{_ as le}from"./ListFooter-8173dedc.js";const oe={key:0,class:"flex items-center"},ae={key:0},ie={key:1},ne={key:2},re={key:3},ue={key:4},de=["onClick"],ce={key:1,class:"truncate text-base"},me={key:2},fe=["onClick"],ge={__name:"DealsListView",props:$({rows:{type:Array,required:!0},columns:{type:Array,required:!0},options:{type:Object,default:()=>({selectable:!0,showTooltip:!0,resizeColumn:!1,totalCount:0,rowCount:0})}},{modelValue:{},modelModifiers:{},list:{},listModifiers:{}}),emits:$(["loadMore","updatePageCount","columnWidthUpdated","applyFilter","applyLikeFilter","likeDoc"],["update:modelValue","update:list"]),setup(a,{expose:L,emit:A}){const c=A,w=q(),y=x(a,"modelValue"),_=x(a,"list"),U=V(()=>{var n,o;return!!((o=(n=_.value.params)==null?void 0:n.filters)!=null&&o._liked_by)}),{user:D}=T();function g(n){if(n)return JSON.parse(n).includes(D)}N(y,(n,o)=>{n!==o&&c("updatePageCount",n)});const C=P(null);return L({customListActions:V(()=>{var n;return(n=C.value)==null?void 0:n.customListActions})}),(n,o)=>{const v=h("Button"),I=h("Badge"),R=h("FormControl");return t(),r(B,null,[i(u(K),{class:p(n.$attrs.class),columns:a.columns,rows:a.rows,options:{getRowRoute:s=>({name:"Deal",params:{dealId:s.name},query:{view:u(w).query.view,viewType:u(w).params.viewType}}),selectable:a.options.selectable,showTooltip:a.options.showTooltip,resizeColumn:a.options.resizeColumn},"row-key":"name"},{default:d(()=>[i(u(O),{class:"sm:mx-5 mx-3",onColumnWidthUpdated:o[1]||(o[1]=s=>c("columnWidthUpdated"))},{default:d(()=>[(t(!0),r(B,null,S(a.columns,s=>(t(),m(u(E),{key:s.key,item:s,onColumnWidthUpdated:l=>c("columnWidthUpdated",s)},{default:d(()=>[s.key=="_liked_by"?(t(),m(v,{key:0,variant:"ghosted",class:p(["!h-4",U.value?"fill-red-500":"fill-white"]),onClick:o[0]||(o[0]=()=>c("applyLikeFilter"))},{default:d(()=>[i(M,{class:"h-4 w-4"})]),_:1},8,["class"])):f("",!0)]),_:2},1032,["item","onColumnWidthUpdated"]))),128))]),_:1}),i(ee,{rows:a.rows},{default:d(({idx:s,column:l,item:e,row:W})=>[l.key==="_assign"?(t(),r("div",oe,[i(X,{avatars:e,size:"sm",onClick:b=>c("applyFilter",{event:b,idx:s,column:l,item:e,firstColumn:a.columns[0]})},null,8,["avatars","onClick"])])):(t(),m(u(J),{key:1,item:e},{prefix:d(()=>[l.key==="status"?(t(),r("div",ae,[i(Y,{class:p(e.color)},null,8,["class"])])):l.key==="organization"?(t(),r("div",ie,[e.label?(t(),m(u(z),{key:0,class:"flex items-center",image:e.logo,label:e.label,size:"sm"},null,8,["image","label"])):f("",!0)])):l.key==="deal_owner"?(t(),r("div",ne,[e.full_name?(t(),m(u(z),{key:0,class:"flex items-center",image:e.user_image,label:e.full_name,size:"sm"},null,8,["image","label"])):f("",!0)])):l.key==="mobile_no"?(t(),r("div",re,[i(Z,{class:"h-4 w-4"})])):l.key==="_liked_by"?(t(),r("div",ue,[l.key=="_liked_by"?(t(),m(v,{key:0,variant:"ghosted",class:p(g(e)?"fill-red-500":"fill-white"),onClick:j(()=>c("likeDoc",{name:W.name,liked:g(e)}),["stop","prevent"])},{default:d(()=>[i(M,{class:"h-4 w-4"})]),_:2},1032,["class","onClick"])):f("",!0)])):f("",!0)]),default:d(({label:b})=>[["modified","creation","first_response_time","first_responded_on","response_by"].includes(l.key)?(t(),r("div",{key:0,class:"truncate text-base",onClick:k=>c("applyFilter",{event:k,idx:s,column:l,item:e,firstColumn:a.columns[0]})},[i(u(te),{text:e.label},{default:d(()=>[H("div",null,F(e.timeAgo),1)]),_:2},1032,["text"])],8,de)):l.key==="sla_status"?(t(),r("div",ce,[e.value?(t(),m(I,{key:0,variant:"subtle",theme:e.color,size:"md",label:e.value,onClick:k=>c("applyFilter",{event:k,idx:s,column:l,item:e,firstColumn:a.columns[0]})},null,8,["theme","label","onClick"])):f("",!0)])):l.type==="Check"?(t(),r("div",me,[i(R,{type:"checkbox",modelValue:e,disabled:!0,class:"text-gray-900"},null,8,["modelValue"])])):(t(),r("div",{key:3,class:"truncate text-base",onClick:k=>c("applyFilter",{event:k,idx:s,column:l,item:e,firstColumn:a.columns[0]})},F(b),9,fe))]),_:2},1032,["item"]))]),_:1},8,["rows"]),i(u(G),null,{actions:d(({selections:s,unselectAll:l})=>[i(u(se),{options:C.value.bulkActions(s,l)},{default:d(()=>[i(v,{icon:"more-horizontal",variant:"ghost"})]),_:2},1032,["options"])]),_:1})]),_:1},8,["class","columns","rows","options"]),y.value?(t(),m(u(le),{key:0,class:"border-t sm:px-5 px-3 py-2",modelValue:y.value,"onUpdate:modelValue":o[2]||(o[2]=s=>y.value=s),options:{rowCount:a.options.rowCount,totalCount:a.options.totalCount},onLoadMore:o[3]||(o[3]=s=>c("loadMore"))},null,8,["modelValue","options"])):f("",!0),i(Q,{ref_key:"listBulkActionsRef",ref:C,modelValue:_.value,"onUpdate:modelValue":o[4]||(o[4]=s=>_.value=s),doctype:"CRM Deal"},null,8,["modelValue"])],64)}}};export{ge as _};
//# sourceMappingURL=DealsListView-e9610059.js.map
