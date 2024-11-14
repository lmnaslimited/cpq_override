import{m as q,i as K,j as P,s as X,k as Z,l as x,r as D,b as o,c as n,d as s,w as r,u as m,F as B,f as O,g as b,n as J,p as v,e as h,t as $,q as W,v as N,I as ee}from"./index-d057f33a.js";import{_ as te}from"./ViewBreadcrumbs-27963285.js";import{_ as oe}from"./CustomActions-fd13eb50.js";import{A as se}from"./ArrowUpRightIcon-f89323ee.js";import{_ as I,d as j,m as S,l as H,b as Y,u as ae,t as le,c as ne}from"./UserAvatar-e49c5291.js";import{E as ie}from"./Email2Icon-e2d51718.js";import{_ as re}from"./LayoutHeader-fe1f254b.js";import{_ as ue}from"./ViewControls-57997287.js";import{_ as de,H as G,a as ce,f as pe,b as me,g as fe,c as _e,d as ke,e as ve}from"./ListBulkActions-4e019d04.js";import{C as ye}from"./CalendarIcon-236853ad.js";import{_ as Q}from"./Dropdown.vue_vue_type_script_setup_true_lang-bf1a1150.js";import{_ as ge}from"./ListFooter-8173dedc.js";import{_ as be}from"./KanbanView-0129a26b.js";import{T as Ce}from"./TaskModal-817b477f.js";import{T as we}from"./views-fe454bb1.js";import"./Icon-b0abef9d.js";import"./Dropdown-ddb0640f.js";import"./settings-0248bbea.js";import"./GroupByIcon-a605d43f.js";import"./NestedPopover-545deb9d.js";import"./EditIcon-a130850d.js";import"./PinIcon-1aaff3df.js";import"./FadedScrollableDiv-9f66556a.js";import"./DetailsIcon-ef5d1277.js";import"./DragVerticalIcon-87005af9.js";import"./AssignmentModal-7b9977f2.js";import"./IndicatorIcon-c103771d.js";const he={key:0},xe={class:"flex items-center gap-2 truncate text-base"},$e={key:0,class:"truncate"},Me={key:0},Ve={key:1},Te={key:2},Le=["onClick"],Ue=["innerHTML"],Ae={key:2},ze={key:3},Re=["onClick"],Be={__name:"TasksListView",props:q({rows:{type:Array,required:!0},columns:{type:Array,required:!0},options:{type:Object,default:()=>({selectable:!0,showTooltip:!0,resizeColumn:!1,totalCount:0,rowCount:0})}},{modelValue:{},modelModifiers:{},list:{},listModifiers:{}}),emits:q(["loadMore","updatePageCount","showTask","columnWidthUpdated","applyFilter","applyLikeFilter","likeDoc"],["update:modelValue","update:list"]),setup(y,{expose:R,emit:E}){const C=E,i=K(y,"modelValue"),T=K(y,"list"),U=P(()=>{var _,k;return!!((k=(_=T.value.params)==null?void 0:_.filters)!=null&&k._liked_by)}),{user:A}=X();function w(_){if(_)return JSON.parse(_).includes(A)}Z(i,(_,k)=>{_!==k&&C("updatePageCount",_)});const a=x(null);return R({customListActions:P(()=>{var _;return(_=a.value)==null?void 0:_.customListActions})}),(_,k)=>{const L=D("Button"),M=D("FormControl");return o(),n(B,null,[s(m(ke),{columns:y.columns,rows:y.rows,options:{onRowClick:u=>C("showTask",u.name),selectable:y.options.selectable,showTooltip:y.options.showTooltip,resizeColumn:y.options.resizeColumn},"row-key":"name"},{default:r(()=>[s(m(de),{class:"mx-3 sm:mx-5",onColumnWidthUpdated:k[1]||(k[1]=u=>C("columnWidthUpdated"))},{default:r(()=>[(o(!0),n(B,null,O(y.columns,u=>(o(),b(m(ce),{key:u.key,item:u,onColumnWidthUpdated:V=>C("columnWidthUpdated",u)},{default:r(()=>[u.key=="_liked_by"?(o(),b(L,{key:0,variant:"ghosted",class:J(["!h-4",U.value?"fill-red-500":"fill-white"]),onClick:k[0]||(k[0]=()=>C("applyLikeFilter"))},{default:r(()=>[s(G,{class:"h-4 w-4"})]),_:1},8,["class"])):v("",!0)]),_:2},1032,["item","onColumnWidthUpdated"]))),128))]),_:1}),s(m(pe),{class:"mx-3 sm:mx-5",id:"list-rows"},{default:r(()=>[(o(!0),n(B,null,O(y.rows,u=>(o(),b(m(fe),{key:u.name,row:u},{default:r(({idx:V,column:g,item:p})=>[g.key==="due_date"?(o(),n("div",he,[s(m(I),{text:p&&m(j)(p,"ddd, MMM D, YYYY | hh:mm a")},{default:r(()=>[h("div",xe,[h("div",null,[s(ye)]),p?(o(),n("div",$e,$(m(j)(p,"D MMM, hh:mm a")),1)):v("",!0)])]),_:2},1032,["text"])])):(o(),b(m(me),{key:1,item:p},{prefix:r(()=>[g.key==="status"?(o(),n("div",Me,[s(S,{status:p},null,8,["status"])])):g.key==="priority"?(o(),n("div",Ve,[s(H,{priority:p},null,8,["priority"])])):g.key==="assigned_to"?(o(),n("div",Te,[p.full_name?(o(),b(m(Y),{key:0,class:"flex items-center",image:p.user_image,label:p.full_name,size:"sm"},null,8,["image","label"])):v("",!0)])):v("",!0)]),default:r(({label:F})=>[["modified","creation"].includes(g.key)?(o(),n("div",{key:0,class:"truncate text-base",onClick:z=>C("applyFilter",{event:z,idx:V,column:g,item:p,firstColumn:y.columns[0]})},[s(m(I),{text:p.label},{default:r(()=>[h("div",null,$(p.timeAgo),1)]),_:2},1032,["text"])],8,Le)):g.type==="Text Editor"?(o(),n("div",{key:1,innerHTML:p,class:"truncate text-base h-4 [&>p]:truncate"},null,8,Ue)):g.type==="Check"?(o(),n("div",Ae,[s(M,{type:"checkbox",modelValue:p,disabled:!0,class:"text-gray-900"},null,8,["modelValue"])])):g.key==="_liked_by"?(o(),n("div",ze,[g.key=="_liked_by"?(o(),b(L,{key:0,variant:"ghosted",class:J(w(p)?"fill-red-500":"fill-white"),onClick:W(()=>C("likeDoc",{name:u.name,liked:w(p)}),["stop","prevent"])},{default:r(()=>[s(G,{class:"h-4 w-4"})]),_:2},1032,["class","onClick"])):v("",!0)])):(o(),n("div",{key:4,class:"truncate text-base",onClick:z=>C("applyFilter",{event:z,idx:V,column:g,item:p,firstColumn:y.columns[0]})},$(F),9,Re))]),_:2},1032,["item"]))]),_:2},1032,["row"]))),128))]),_:1}),s(m(_e),null,{actions:r(({selections:u,unselectAll:V})=>[s(m(Q),{options:a.value.bulkActions(u,V)},{default:r(()=>[s(L,{icon:"more-horizontal",variant:"ghost"})]),_:2},1032,["options"])]),_:1})]),_:1},8,["columns","rows","options"]),s(m(ge),{class:"border-t px-3 py-2 sm:px-5",modelValue:i.value,"onUpdate:modelValue":k[2]||(k[2]=u=>i.value=u),options:{rowCount:y.options.rowCount,totalCount:y.options.totalCount},onLoadMore:k[3]||(k[3]=u=>C("loadMore"))},null,8,["modelValue","options"]),s(ve,{ref_key:"listBulkActionsRef",ref:a,modelValue:T.value,"onUpdate:modelValue":k[4]||(k[4]=u=>T.value=u),doctype:"CRM Task",options:{hideAssign:!0}},null,8,["modelValue"])],64)}}},De={class:"flex items-center gap-2"},Ie={key:0},Ee={key:1},Fe={key:2},Pe={key:3,class:"truncate text-base"},We={key:4,class:"truncate text-base"},je={key:5,class:"text-gray-500"},Se={key:0,class:"truncate flex items-center gap-2"},He={key:0},Ye={key:1},qe={key:2},Ke={key:3,class:"truncate text-base"},Oe={key:4,class:"truncate text-base max-h-44"},Je={key:5,class:"truncate text-base"},Ge={class:"flex gap-2 items-center justify-between"},Qe={key:2,class:"flex h-full items-center justify-center"},Xe={class:"flex flex-col items-center gap-3 text-xl font-medium text-gray-500"},$t={__name:"Tasks",setup(y){const{getUser:R}=ae(),E=N(),C=x(null),i=x({}),T=x(1),U=x(1),A=x(20),w=x(null);function a(l,t){var f;function d(e){return e&&typeof e=="object"?e:{label:e}}return d((f=_.value)==null?void 0:f.find(e=>e.name==l)[t])}const _=P(()=>{var l,t,d;return(t=(l=i.value)==null?void 0:l.data)!=null&&t.data?i.value.data.view_type==="kanban"?k(i.value.data.data):L((d=i.value)==null?void 0:d.data.data):[]});function k(l){let t=[];return l.forEach(d=>{var f;(f=d.data)==null||f.forEach(e=>{t.push(e)})}),L(t)}function L(l){return l.map(t=>{var f;let d={};return(f=i.value)==null||f.data.rows.forEach(e=>{d[e]=t[e],["modified","creation"].includes(e)?d[e]={label:j(t[e],ne),timeAgo:__(le(t[e]))}:e=="assigned_to"&&(d[e]={label:t.assigned_to&&R(t.assigned_to).full_name,...t.assigned_to&&R(t.assigned_to)})}),d})}const M=x(!1),u=x({name:"",title:"",description:"",assigned_to:"",due_date:"",status:"Backlog",priority:"Low",reference_doctype:"CRM Lead",reference_docname:""});function V(l){var d,f;let t=(d=_.value)==null?void 0:d.find(e=>e.name===l);u.value={name:t.name,title:t.title,description:t.description,assigned_to:((f=t.assigned_to)==null?void 0:f.email)||"",due_date:t.due_date,status:t.status,priority:t.priority,reference_doctype:t.reference_doctype,reference_docname:t.reference_docname},M.value=!0}function g(l){var t;if(u.value={name:"",title:"",description:"",assigned_to:"",due_date:"",status:"Backlog",priority:"Low",reference_doctype:"CRM Lead",reference_docname:""},(t=l.column)!=null&&t.name){let d=i.value.params.column_field;d&&(u.value[d]=l.column.name)}M.value=!0}function p(l){return[{label:__("Delete"),icon:"trash-2",onClick:()=>{F(l),i.value.reload()}}]}async function F(l){await ee("frappe.client.delete",{doctype:"CRM Task",name:l})}function z(l,t){if(!t)return;let d=l=="CRM Deal"?"Deal":"Lead",f={leadId:t};d=="Deal"&&(f={dealId:t}),E.push({name:d,params:f})}return(l,t)=>{const d=D("FeatherIcon"),f=D("Button");return o(),n(B,null,[s(re,null,{"left-header":r(()=>[s(te,{modelValue:w.value,"onUpdate:modelValue":t[0]||(t[0]=e=>w.value=e),routeName:"Tasks"},null,8,["modelValue"])]),"right-header":r(()=>{var e;return[(e=C.value)!=null&&e.customListActions?(o(),b(oe,{key:0,actions:C.value.customListActions},null,8,["actions"])):v("",!0),s(f,{variant:"solid",label:l.__("Create"),onClick:g},{prefix:r(()=>[s(d,{name:"plus",class:"h-4"})]),_:1},8,["label"])]}),_:1}),s(ue,{ref_key:"viewControls",ref:w,modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),loadMore:T.value,"onUpdate:loadMore":t[2]||(t[2]=e=>T.value=e),resizeColumn:U.value,"onUpdate:resizeColumn":t[3]||(t[3]=e=>U.value=e),updatedPageCount:A.value,"onUpdate:updatedPageCount":t[4]||(t[4]=e=>A.value=e),doctype:"CRM Task",options:{allowedViews:["list","kanban"]}},null,8,["modelValue","loadMore","resizeColumn","updatedPageCount"]),l.$route.params.viewType=="kanban"&&_.value.length?(o(),b(be,{key:0,modelValue:i.value,"onUpdate:modelValue":t[6]||(t[6]=e=>i.value=e),options:{onClick:e=>V(e.name),onNewClick:e=>g(e)},onUpdate:t[7]||(t[7]=e=>w.value.updateKanbanSettings(e)),onLoadMore:t[8]||(t[8]=e=>w.value.loadMoreKanban(e))},{title:r(({titleField:e,itemName:c})=>[h("div",De,[e==="status"?(o(),n("div",Ie,[s(S,{status:a(c,e).label},null,8,["status"])])):e==="priority"?(o(),n("div",Ee,[s(H,{priority:a(c,e).label},null,8,["priority"])])):e==="assigned_to"?(o(),n("div",Fe,[a(c,e).full_name?(o(),b(m(Y),{key:0,class:"flex items-center",image:a(c,e).user_image,label:a(c,e).full_name,size:"sm"},null,8,["image","label"])):v("",!0)])):v("",!0),["modified","creation"].includes(e)?(o(),n("div",Pe,[s(m(I),{text:a(c,e).label},{default:r(()=>[h("div",null,$(a(c,e).timeAgo),1)]),_:2},1032,["text"])])):a(c,e).label?(o(),n("div",We,$(a(c,e).label),1)):(o(),n("div",je,$(l.__("No Title")),1))])]),fields:r(({fieldName:e,itemName:c})=>[a(c,e).label?(o(),n("div",Se,[e==="status"?(o(),n("div",He,[s(S,{class:"size-3",status:a(c,e).label},null,8,["status"])])):e==="priority"?(o(),n("div",Ye,[s(H,{priority:a(c,e).label},null,8,["priority"])])):e==="assigned_to"?(o(),n("div",qe,[a(c,e).full_name?(o(),b(m(Y),{key:0,class:"flex items-center",image:a(c,e).user_image,label:a(c,e).full_name,size:"sm"},null,8,["image","label"])):v("",!0)])):v("",!0),["modified","creation"].includes(e)?(o(),n("div",Ke,[s(m(I),{text:a(c,e).label},{default:r(()=>[h("div",null,$(a(c,e).timeAgo),1)]),_:2},1032,["text"])])):e=="description"?(o(),n("div",Oe,[a(c,e).label?(o(),b(m(we),{key:0,content:a(c,e).label,editable:!1,"editor-class":"!prose-sm max-w-none focus:outline-none",class:"flex-1 overflow-hidden"},null,8,["content"])):v("",!0)])):(o(),n("div",Je,$(a(c,e).label),1))])):v("",!0)]),actions:r(({itemName:e})=>[h("div",Ge,[h("div",null,[a(e,"reference_docname").label?(o(),b(f,{key:0,class:"-ml-2",variant:"ghost",size:"sm",label:a(e,"reference_doctype").label=="CRM Deal"?l.__("Deal"):l.__("Lead"),onClick:W(c=>z(a(e,"reference_doctype").label,a(e,"reference_docname").label),["stop"])},{suffix:r(()=>[s(se,{class:"h-4 w-4"})]),_:2},1032,["label","onClick"])):v("",!0)]),s(m(Q),{class:"flex items-center gap-2",options:p(e),variant:"ghost",onClick:t[5]||(t[5]=W(()=>{},["stop","prevent"]))},{default:r(()=>[s(f,{icon:"more-horizontal",variant:"ghost"})]),_:2},1032,["options"])])]),_:1},8,["modelValue","options"])):i.value.data&&_.value.length?(o(),b(Be,{key:1,ref_key:"tasksListView",ref:C,modelValue:i.value.data.page_length_count,"onUpdate:modelValue":t[9]||(t[9]=e=>i.value.data.page_length_count=e),list:i.value,"onUpdate:list":t[10]||(t[10]=e=>i.value=e),rows:_.value,columns:i.value.data.columns,options:{showTooltip:!1,resizeColumn:!0,rowCount:i.value.data.row_count,totalCount:i.value.data.total_count},onLoadMore:t[11]||(t[11]=()=>T.value++),onColumnWidthUpdated:t[12]||(t[12]=()=>U.value++),onUpdatePageCount:t[13]||(t[13]=e=>A.value=e),onShowTask:V,onApplyFilter:t[14]||(t[14]=e=>w.value.applyFilter(e)),onApplyLikeFilter:t[15]||(t[15]=e=>w.value.applyLikeFilter(e)),onLikeDoc:t[16]||(t[16]=e=>w.value.likeDoc(e))},null,8,["modelValue","list","rows","columns","options"])):i.value.data?(o(),n("div",Qe,[h("div",Xe,[s(ie,{class:"h-10 w-10"}),h("span",null,$(l.__("No {0} Found",[l.__("Tasks")])),1),s(f,{label:l.__("Create"),onClick:t[17]||(t[17]=e=>M.value=!0)},{prefix:r(()=>[s(d,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])):v("",!0),M.value?(o(),b(Ce,{key:3,modelValue:M.value,"onUpdate:modelValue":t[18]||(t[18]=e=>M.value=e),reloadTasks:i.value,"onUpdate:reloadTasks":t[19]||(t[19]=e=>i.value=e),task:u.value},null,8,["modelValue","reloadTasks","task"])):v("",!0)],64)}}};export{$t as default};
//# sourceMappingURL=Tasks-59f6f9dd.js.map
