import{m as B,i as K,j as y,r as D,b as r,c as m,g as F,w as u,e as s,d as n,n as R,F as j,f as E,t as b,u as g,G as U,C as I,R as C,S as z,U as S,p as _,q as H}from"./index-d057f33a.js";import{a as J}from"./views-fe454bb1.js";import{_ as Q}from"./NestedPopover-545deb9d.js";import{I as L}from"./IndicatorIcon-c103771d.js";import{r as P}from"./UserAvatar-e49c5291.js";import{D as A}from"./DragVerticalIcon-87005af9.js";import{_ as W}from"./Dropdown.vue_vue_type_script_setup_true_lang-bf1a1150.js";const X={class:"flex overflow-x-auto h-full"},Y={key:0,class:"flex flex-col gap-2.5 min-w-72 w-72 hover:bg-gray-100 rounded-lg p-2.5"},Z={class:"flex gap-2 items-center group justify-between"},ee={class:"flex items-center text-base"},te={class:"flex flex-col gap-3 px-3 py-2.5 rounded-lg border border-gray-100 bg-white shadow-xl"},le={class:"flex gap-1"},oe={class:"flex flex-row-reverse"},ae={class:"flex"},ne={class:"overflow-y-auto flex flex-col gap-2 h-full"},se={class:"h-5 flex items-center"},ie={key:0},re={key:1,class:"text-gray-500"},ue={class:"flex flex-col gap-3.5"},me={key:0,class:"truncate"},ce={class:"flex gap-2 items-center justify-between"},de={key:0,class:"flex items-center justify-center"},fe={key:1,class:"shrink-0 min-w-64"},xe={__name:"KanbanView",props:B({options:{type:Object,default:()=>({getRoute:null,onClick:null,onNewClick:null})}},{modelValue:{},modelModifiers:{}}),emits:B(["update","loadMore"],["update:modelValue"]),setup(d,{emit:O}){const w=O,h=K(d,"modelValue"),k=y(()=>{var e,o;return(o=(e=h.value)==null?void 0:e.data)==null?void 0:o.title_field}),f=y(()=>{var a,c;if(!((c=(a=h.value)==null?void 0:a.data)!=null&&c.data)||h.value.data.view_type!="kanban")return[];let e=h.value.data.data;return e.some(t=>{var l;return(l=t.column)==null?void 0:l.color})||e.forEach((t,l)=>{t.column.color=x[l%x.length]}),e}),$=y(()=>f.value.filter(e=>e.column.delete).map(e=>({label:e.column.name,value:e.column.name})));function T(e){return[{group:__("Options"),hideLabel:!0,items:[{label:__("Delete"),icon:"trash-2",onClick:()=>{e.column.delete=!0,p()}}]}]}function q(e){let o=f.value.find(a=>a.column.name==e.value);o.column.delete=!1,p()}function p(e){var i,M,V;let o=(i=e==null?void 0:e.to)==null?void 0:i.dataset.column,a=(M=e==null?void 0:e.from)==null?void 0:M.dataset.column,c=(V=e==null?void 0:e.item)==null?void 0:V.dataset.name,t=[];f.value.forEach(v=>{v.column.order=v.data.map(G=>G.name),v.column.page_length&&delete v.column.page_length,t.push(v.column)});let l={kanban_columns:t};o!=a&&(l={item:c,to:o,kanban_columns:t}),w("update",l)}function N(e,o=!1){let a=`!text-${e}-600`;e=="black"?a="!text-gray-900":["gray","green"].includes(e)&&(a=`!text-${e}-700`);let c=`!bg-${e}-100 hover:!bg-${e}-200 active:!bg-${e}-300`;return[a,o?"":c]}const x=["gray","blue","green","red","pink","orange","amber","yellow","cyan","teal","violet","purple","black"];return(e,o)=>{const a=D("Button"),c=D("FeatherIcon");return r(),m("div",X,[f.value?(r(),F(g(A),{key:0,list:f.value,"item-key":"column",onEnd:p,delay:g(P)()?200:0,class:"flex sm:mx-2.5 mx-2 pb-3.5"},{item:u(({element:t})=>[t.column.delete?_("",!0):(r(),m("div",Y,[s("div",Z,[s("div",ee,[n(Q,null,{target:u(()=>[n(a,{variant:"ghost",size:"sm",class:"hover:!bg-gray-100"},{default:u(()=>[n(L,{class:R(N(t.column.color,!0))},null,8,["class"])]),_:2},1024)]),body:u(({close:l})=>[s("div",te,[s("div",le,[(r(),m(j,null,E(x,i=>n(a,{class:R(N(i)),variant:"ghost",key:i,onClick:()=>t.column.color=i},{default:u(()=>[n(L)]),_:2},1032,["class","onClick"])),64))]),s("div",oe,[n(a,{variant:"solid",label:e.__("Apply"),onClick:p},null,8,["label"])])])]),_:2},1024),s("div",null,b(t.column.name),1)]),s("div",ae,[n(g(W),{options:T(t)},{default:u(()=>[n(a,{class:"hidden group-hover:flex",icon:"more-horizontal",variant:"ghost"})]),_:2},1032,["options"]),n(a,{icon:"plus",variant:"ghost",onClick:l=>d.options.onNewClick(t)},null,8,["onClick"])])]),s("div",ne,[n(g(A),{list:t.data,group:"fields","item-key":"name",class:"flex flex-col gap-3.5 flex-1",onEnd:p,delay:g(P)()?200:0,"data-column":t.column.name},{item:u(({element:l})=>[(r(),F(U(d.options.getRoute?"router-link":"div"),I({class:"pt-3 px-3.5 pb-2.5 rounded-lg border bg-white text-base flex flex-col","data-name":l.name},{to:d.options.getRoute?d.options.getRoute(l):void 0,onClick:d.options.onClick?()=>d.options.onClick(l):void 0}),{default:u(()=>[C(e.$slots,"title",z(S({fields:l,titleField:k.value,itemName:l.name})),()=>[s("div",se,[l[k.value]?(r(),m("div",ie,b(l[k.value]),1)):(r(),m("div",re,b(e.__("No Title")),1))])]),o[3]||(o[3]=s("div",{class:"border-b h-px my-2.5"},null,-1)),s("div",ue,[(r(!0),m(j,null,E(t.fields,i=>C(e.$slots,"fields",I({key:i,ref_for:!0},{fields:l,fieldName:i,itemName:l.name}),()=>[l[i]?(r(),m("div",me,b(l[i]),1)):_("",!0)])),128))]),o[4]||(o[4]=s("div",{class:"border-b h-px mt-2.5 mb-2"},null,-1)),C(e.$slots,"actions",z(S({itemName:l.name})),()=>[s("div",ce,[o[2]||(o[2]=s("div",null,null,-1)),n(a,{icon:"plus",variant:"ghost",onClick:o[0]||(o[0]=H(()=>{},["stop","prevent"]))})])])]),_:2},1040,["data-name"]))]),_:2},1032,["list","delay","data-column"]),t.column.count<t.column.all_count?(r(),m("div",de,[n(a,{label:e.__("Load More"),onClick:l=>w("loadMore",t.column.name)},null,8,["label","onClick"])])):_("",!0)])]))]),_:3},8,["list","delay"])):_("",!0),$.value.length?(r(),m("div",fe,[n(J,{value:"",options:$.value,onChange:o[1]||(o[1]=t=>q(t))},{target:u(({togglePopover:t})=>[n(a,{class:"w-full mt-2.5 mb-1 mr-5",onClick:l=>t(),label:e.__("Add Column")},{prefix:u(()=>[n(c,{name:"plus",class:"h-4"})]),_:2},1032,["onClick","label"])]),_:1},8,["options"])])):_("",!0)])}}};export{xe as _};
//# sourceMappingURL=KanbanView-0129a26b.js.map