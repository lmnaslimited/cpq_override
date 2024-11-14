import{l as x,b as n,c as g,R as I,S as U,U as A,e as s,n as V,V as J,j as P,x as O,k as D,r as L,d as i,w as y,t as k,u as f,W as T,X as q,q as F,g as S,p as C,N as K,Y as X,m as M,i as H,a as G,Z as Y,F as Z,f as Q,$ as ee,A as te,I as le,z as ae}from"./index-d057f33a.js";import{_ as se}from"./Section-1565df09.js";import{S as oe}from"./useActiveTabManager-eb58b00a.js";import{E as ie}from"./EditIcon-a130850d.js";import{a as ne}from"./views-fe454bb1.js";import{D as R,a as de}from"./DragVerticalIcon-87005af9.js";import{_ as re}from"./Switch.vue_vue_type_script_setup_true_lang-3dc67c0d.js";import{u as ue}from"./Dropdown.vue_vue_type_script_setup_true_lang-bf1a1150.js";const Ie={__name:"Resizer",props:{defaultWidth:{type:Number,default:352},minWidth:{type:Number,default:16*16},maxWidth:{type:Number,default:30*16},side:{type:String,default:"left"},parent:{type:Object,default:null}},setup(_){const a=_,h=x(!1),o=x(a.defaultWidth);function b(){document.addEventListener("mousemove",r),document.addEventListener("mouseup",()=>{document.body.classList.remove("select-none"),document.body.classList.remove("cursor-col-resize"),document.querySelectorAll(".select-text1").forEach(l=>{l.classList.remove("select-text1"),l.classList.add("select-text")}),localStorage.setItem("sidebarWidth",o.value),h.value=!1,document.removeEventListener("mousemove",r)})}function r(l){h.value=!0,document.body.classList.add("select-none"),document.body.classList.add("cursor-col-resize"),document.querySelectorAll(".select-text").forEach(t=>{t.classList.remove("select-text"),t.classList.add("select-text1")}),o.value=a.side=="left"?l.clientX:window.innerWidth-l.clientX;let p=a.parent?d():0;o.value=o.value-p;let u=[a.defaultWidth-10,a.defaultWidth+10];o.value>u[0]&&o.value<u[1]&&(o.value=a.defaultWidth),o.value<a.minWidth&&(o.value=a.minWidth),o.value>a.maxWidth&&(o.value=a.maxWidth)}function d(){if(!a.parent)return 0;const l=a.parent.getBoundingClientRect();return window.innerWidth-l[a.side]}return(l,p)=>(n(),g("div",{class:"relative",style:J({width:`${o.value}px`})},[I(l.$slots,"default",U(A({sidebarResizing:h.value,sidebarWidth:o.value}))),s("div",{class:V(["absolute left-0 z-10 h-full w-1 cursor-col-resize bg-gray-300 opacity-0 transition-opacity hover:opacity-100",{"opacity-100":h.value}]),onMousedown:b},null,34)],4))}},ce={class:"flex flex-col gap-3"},me={class:"flex items-center justify-between rounded px-2.5 py-2 bg-gray-50"},fe=["onClick"],pe={key:0},ve={key:1,class:"flex gap-2 items-center"},ye={class:"flex gap-1 items-center"},_e={class:"px-2.5 py-2 border rounded text-base leading-4 text-gray-800 flex items-center justify-between gap-2"},ge={class:"flex items-center gap-2"},be={class:"flex flex-col gap-1"},he={class:"text-gray-500 text-sm"},xe={key:1,class:"flex justify-center items-center border rounded border-dashed p-3"},ke={class:"text-sm text-gray-500"},Se={class:"mt-5.5"},we={__name:"SidePanelLayoutBuilder",props:{sections:Object,doctype:String},setup(_){const a=_,h=["Table","Geolocation","Attach","Attach Image","HTML","Signature"],o=P(()=>({doctype:a.doctype,restricted_fieldtypes:h,as_array:!0})),b=O({url:"crm.api.doc.get_fields_meta",params:o.value,cache:["fieldsMeta",a.doctype],auto:!0});function r(d,l){l&&d.fields.push(l)}return D(()=>a.doctype,()=>b.fetch(o.value),{immediate:!0}),(d,l)=>{const p=L("FeatherIcon"),u=L("Button");return n(),g("div",null,[i(f(R),{list:_.sections,"item-key":"label",class:"flex flex-col gap-5.5"},{item:y(({element:t})=>[s("div",ce,[s("div",me,[s("div",{class:"flex max-w-fit cursor-pointer items-center gap-2 text-base leading-4",onClick:e=>t.opened=!t.opened},[i(p,{name:"chevron-right",class:V(["h-4 text-gray-900 transition-all duration-300 ease-in-out",{"rotate-90":t.opened}])},null,8,["class"]),t.editingLabel?(n(),g("div",ve,[i(f(T),{modelValue:t.label,"onUpdate:modelValue":e=>t.label=e,onKeydown:q(e=>t.editingLabel=!1,["enter"]),onBlur:e=>t.editingLabel=!1,onClick:l[0]||(l[0]=F(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue","onKeydown","onBlur"]),t.editingLabel?(n(),S(u,{key:0,icon:"check",class:"!size-4 rounded-sm",variant:"ghost",onClick:F(e=>t.editingLabel=!1,["stop"])},null,8,["onClick"])):C("",!0)])):(n(),g("div",pe,k(d.__(t.label)||d.__("Untitled")),1))],8,fe),s("div",ye,[t.editingLabel?C("",!0):(n(),S(u,{key:0,class:"!size-4 rounded-sm",variant:"ghost",onClick:e=>t.editingLabel=!0},{default:y(()=>[i(ie,{class:"h-3.5"})]),_:2},1032,["onClick"])),t.editable!==!1?(n(),S(u,{key:1,class:"!size-4 rounded-sm",icon:"x",variant:"ghost",onClick:e=>_.sections.splice(_.sections.indexOf(t),1)},null,8,["onClick"])):C("",!0)])]),K(s("div",null,[i(f(R),{list:t.fields,group:"fields","item-key":"label",class:"flex flex-col gap-1.5",handle:".cursor-grab"},{item:y(({element:e})=>[s("div",_e,[s("div",ge,[i(de,{class:"h-3.5 cursor-grab"}),s("div",null,k(e.label),1)]),i(u,{variant:"ghost",icon:"x",class:"!size-4 rounded-sm",onClick:w=>t.fields.splice(t.fields.indexOf(e),1)},null,8,["onClick"])])]),_:2},1032,["list"]),f(b).data&&t.editable!==!1?(n(),S(ne,{key:0,value:"",options:f(b).data,onChange:e=>r(t,e)},{target:y(({togglePopover:e})=>[i(u,{class:"w-full h-8 mt-1.5 !border-gray-200 hover:!border-gray-300",variant:"outline",onClick:w=>e(),label:d.__("Add Field")},{prefix:y(()=>[i(p,{name:"plus",class:"h-4"})]),_:2},1032,["onClick","label"])]),"item-label":y(({option:e})=>[s("div",be,[s("div",null,k(e.label),1),s("div",he,k(`${e.fieldname} - ${e.fieldtype}`),1)])]),_:2},1032,["options","onChange"])):(n(),g("div",xe,[s("div",ke,k(d.__("This section is not editable")),1)]))],512),[[X,t.opened]])])]),_:1},8,["list"]),s("div",Se,[i(u,{class:"w-full h-8",variant:"subtle",label:d.__("Add Section"),onClick:l[1]||(l[1]=t=>_.sections.push({label:d.__("New Section"),opened:!0,fields:[]}))},{prefix:y(()=>[i(p,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])}}},Ce={class:"flex items-center gap-2 text-2xl font-semibold leading-6 text-gray-900"},$e={class:"flex flex-col gap-5.5"},Le={class:"flex justify-between gap-2"},Ve={key:0,class:"flex gap-4"},ze={key:0,class:"flex flex-1 flex-col border rounded"},We={key:1,class:"flex flex-1 justify-center items-center text-gray-600 bg-gray-50 rounded border border-gray-50"},Ne={class:"flex flex-row-reverse gap-2"},Ue={__name:"SidePanelModal",props:M({doctype:{type:String,default:"CRM Lead"}},{modelValue:{},modelModifiers:{}}),emits:M(["reload"],["update:modelValue"]),setup(_,{emit:a}){const h=_,o=a,b=H(_,"modelValue"),r=x(h.doctype),d=x(!1),l=x(!1),p=x(!1),u=x({});function t(){return{doctype:r.value,type:"Side Panel"}}const e=O({url:"crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.get_fields_layout",cache:["sidebar-sections",r.value],params:t(),onSuccess(c){e.originalData=JSON.parse(JSON.stringify(c))}});D(()=>e==null?void 0:e.data,()=>{l.value=JSON.stringify(e==null?void 0:e.data)!==JSON.stringify(e==null?void 0:e.originalData)},{deep:!0}),G(()=>ue(w,100)());function w(){te(()=>{e.params=t(),e.reload()})}function E(){let c=JSON.parse(JSON.stringify(e.data));c.forEach(m=>{m.fields&&(m.fields=m.fields.map($=>$.fieldname||$.name).filter(Boolean))}),d.value=!0,le("crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.save_fields_layout",{doctype:r.value,type:"Side Panel",layout:JSON.stringify(c)}).then(()=>{d.value=!1,b.value=!1,ae("side_panel_layout_builder",{doctype:r.value}),o("reload")})}return(c,m)=>{const $=L("FormControl"),z=L("Button");return n(),S(f(ee),{modelValue:b.value,"onUpdate:modelValue":m[3]||(m[3]=v=>b.value=v),options:{size:"3xl"}},{"body-title":y(()=>[s("h3",Ce,[s("div",null,k(c.__("Edit Field Layout")),1),l.value?(n(),S(f(Y),{key:0,label:c.__("Not Saved"),variant:"subtle",theme:"orange"},null,8,["label"])):C("",!0)])]),"body-content":y(()=>[s("div",$e,[s("div",Le,[i($,{type:"select",class:"w-1/4",modelValue:r.value,"onUpdate:modelValue":m[0]||(m[0]=v=>r.value=v),options:["CRM Lead","CRM Deal"],onChange:w},null,8,["modelValue"]),i(f(re),{modelValue:p.value,"onUpdate:modelValue":m[1]||(m[1]=v=>p.value=v),label:p.value?c.__("Hide preview"):c.__("Show preview"),size:"sm"},null,8,["modelValue","label"])]),f(e).data?(n(),g("div",Ve,[i(we,{class:"flex flex-1 flex-col pr-2",sections:f(e).data,doctype:r.value},null,8,["sections","doctype"]),p.value?(n(),g("div",ze,[(n(!0),g(Z,null,Q(f(e).data,(v,W)=>{var N;return n(),g("div",{key:v.label,class:V(["flex flex-col py-1.5 px-1",{"border-b":W!==((N=f(e).data)==null?void 0:N.length)-1}])},[i(se,{"is-opened":v.opened,label:v.label},{default:y(()=>{var B;return[i(oe,{fields:v.fields,isLastSection:W==((B=v.data)==null?void 0:B.length)-1,modelValue:u.value,"onUpdate:modelValue":m[2]||(m[2]=j=>u.value=j)},null,8,["fields","isLastSection","modelValue"])]}),_:2},1032,["is-opened","label"])],2)}),128))])):(n(),g("div",We,k(c.__("Toggle on for preview")),1))])):C("",!0)])]),actions:y(()=>[s("div",Ne,[i(z,{loading:d.value,label:c.__("Save"),variant:"solid",onClick:E},null,8,["loading","label"]),i(z,{label:c.__("Reset"),onClick:w},null,8,["label"])])]),_:1},8,["modelValue"])}}};export{Ie as _,Ue as a};
//# sourceMappingURL=SidePanelModal-05261a36.js.map
