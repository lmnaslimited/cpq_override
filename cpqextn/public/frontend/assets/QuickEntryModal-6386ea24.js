import{F as O}from"./Fields-6a34413d.js";import{j as F,x as M,k as N,r as h,b as u,c as S,d as o,w as i,e as s,n as L,t as b,X as D,q as E,g as y,p as V,u as d,m as R,i as z,l as w,a as A,Z as I,$ as J,A as U,I as j,z as Q}from"./index-d057f33a.js";import{a as H}from"./views-fe454bb1.js";import{D as B,a as T}from"./DragVerticalIcon-87005af9.js";import{_ as q,u as K}from"./Dropdown.vue_vue_type_script_setup_true_lang-bf1a1150.js";import{_ as G}from"./Switch.vue_vue_type_script_setup_true_lang-3dc67c0d.js";const P={class:"flex flex-col gap-1.5 p-2.5 bg-gray-50 rounded"},X={class:"flex items-center justify-between"},Z={class:"flex h-7 max-w-fit cursor-pointer items-center gap-2 text-base font-medium leading-4"},W={key:1,class:"flex gap-2 items-center"},Y={class:"px-2.5 py-2 border rounded text-base bg-white text-gray-800 flex items-center leading-4 justify-between gap-2"},ee={class:"flex items-center gap-2"},le={class:"gap-2 w-full"},ae={class:"flex flex-col gap-1"},te={class:"text-gray-500 text-sm"},oe={class:"mt-5.5"},se={__name:"QuickEntryLayoutBuilder",props:{sections:Object,doctype:String},setup(f){const c=f,g=["Table","Geolocation","Attach","Attach Image","HTML","Signature"],r=F(()=>({doctype:c.doctype,restricted_fieldtypes:g,as_array:!0})),m=M({url:"crm.api.doc.get_fields_meta",params:r.value,cache:["fieldsMeta",c.doctype],auto:!0});function k(e,a){a&&e.fields.push(a)}function _(e){return[{label:"Edit",icon:"edit",onClick:()=>e.editingLabel=!0,condition:()=>e.editable!==!1},{label:e.hideLabel?"Show Label":"Hide Label",icon:e.hideLabel?"eye":"eye-off",onClick:()=>e.hideLabel=!e.hideLabel},{label:e.hideBorder?"Show Border":"Hide Border",icon:"minus",onClick:()=>e.hideBorder=!e.hideBorder},{label:"Add Column",icon:"columns",onClick:()=>e.columns=e.columns?e.columns+1:4,condition:()=>!e.columns||e.columns<4},{label:"Remove Column",icon:"columns",onClick:()=>e.columns=e.columns?e.columns-1:2,condition:()=>!e.columns||e.columns>1},{label:"Remove Section",icon:"trash-2",onClick:()=>c.sections.splice(c.sections.indexOf(e),1),condition:()=>e.editable!==!1}]}return N(()=>c.doctype,()=>m.fetch(r.value),{immediate:!0}),(e,a)=>{const v=h("Input"),p=h("Button"),n=h("FeatherIcon");return u(),S("div",null,[o(d(B),{list:f.sections,"item-key":"label",class:"flex flex-col gap-5.5"},{item:i(({element:l})=>[s("div",P,[s("div",X,[s("div",Z,[l.editingLabel?(u(),S("div",W,[o(v,{modelValue:l.label,"onUpdate:modelValue":t=>l.label=t,onKeydown:D(t=>l.editingLabel=!1,["enter"]),onBlur:t=>l.editingLabel=!1,onClick:a[0]||(a[0]=E(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue","onKeydown","onBlur"]),l.editingLabel?(u(),y(p,{key:0,icon:"check",variant:"ghost",onClick:t=>l.editingLabel=!1},null,8,["onClick"])):V("",!0)])):(u(),S("div",{key:0,class:L(l.hideLabel?"text-gray-400":"")},b(e.__(l.label)||e.__("Untitled")),3))]),o(d(q),{options:_(l)},{default:i(()=>[o(p,{variant:"ghost"},{default:i(()=>[o(n,{name:"more-horizontal",class:"h-4"})]),_:1})]),_:2},1032,["options"])]),o(d(B),{list:l.fields,group:"fields","item-key":"label",class:L(["grid gap-1.5",l.columns?"grid-cols-"+l.columns:"grid-cols-3"]),handle:".cursor-grab"},{item:i(({element:t})=>[s("div",Y,[s("div",ee,[o(T,{class:"h-3.5 cursor-grab"}),s("div",null,b(t.label),1)]),o(p,{variant:"ghost",class:"!size-4 rounded-sm",icon:"x",onClick:C=>l.fields.splice(l.fields.indexOf(t),1)},null,8,["onClick"])])]),_:2},1032,["list","class"]),d(m).data?(u(),y(H,{key:0,value:"",options:d(m).data,onChange:t=>k(l,t)},{target:i(({togglePopover:t})=>[s("div",le,[o(p,{class:"w-full !h-8 !border-gray-200 hover:!border-gray-300",variant:"outline",onClick:C=>t(),label:e.__("Add Field")},{prefix:i(()=>[o(n,{name:"plus",class:"h-4"})]),_:2},1032,["onClick","label"])])]),"item-label":i(({option:t})=>[s("div",ae,[s("div",null,b(t.label),1),s("div",te,b(`${t.fieldname} - ${t.fieldtype}`),1)])]),_:2},1032,["options","onChange"])):V("",!0)])]),_:1},8,["list"]),s("div",oe,[o(p,{class:"w-full h-8",variant:"subtle",label:e.__("Add Section"),onClick:a[1]||(a[1]=l=>f.sections.push({label:e.__("New Section"),opened:!0,fields:[]}))},{prefix:i(()=>[o(n,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])}}},ne={class:"flex items-center gap-2 text-2xl font-semibold leading-6 text-gray-900"},ie={class:"flex flex-col gap-3"},de={class:"flex justify-between gap-2"},re={key:0},ue={class:"flex flex-row-reverse gap-2"},ge={__name:"QuickEntryModal",props:R({doctype:{type:String,default:"CRM Lead"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(f){const c=f,g=z(f,"modelValue"),r=w(c.doctype),m=w(!1),k=w(!1),_=w(!1);function e(){return{doctype:r.value,type:"Quick Entry"}}const a=M({url:"crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.get_fields_layout",cache:["quick-entry-sections",r.value],params:e(),onSuccess(n){a.originalData=JSON.parse(JSON.stringify(n))}});N(()=>a==null?void 0:a.data,()=>{k.value=JSON.stringify(a==null?void 0:a.data)!==JSON.stringify(a==null?void 0:a.originalData)},{deep:!0}),A(()=>K(v,100)());function v(){U(()=>{a.params=e(),a.reload()})}function p(){let n=JSON.parse(JSON.stringify(a.data));n.forEach(l=>{l.fields&&(l.fields=l.fields.map(t=>t.fieldname||t.name))}),m.value=!0,j("crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.save_fields_layout",{doctype:r.value,type:"Quick Entry",layout:JSON.stringify(n)}).then(()=>{m.value=!1,g.value=!1,Q("quick_entry_layout_builder",{doctype:r.value})})}return(n,l)=>{const t=h("FormControl"),C=h("Button");return u(),y(d(J),{modelValue:g.value,"onUpdate:modelValue":l[2]||(l[2]=x=>g.value=x),options:{size:"3xl"}},{"body-title":i(()=>[s("h3",ne,[s("div",null,b(n.__("Edit Quick Entry Layout")),1),k.value?(u(),y(d(I),{key:0,label:n.__("Not Saved"),variant:"subtle",theme:"orange"},null,8,["label"])):V("",!0)])]),"body-content":i(()=>{var x;return[s("div",ie,[s("div",de,[o(t,{type:"select",class:"w-1/4",modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=$=>r.value=$),options:["CRM Lead","CRM Deal","Contact","CRM Organization","Address"],onChange:v},null,8,["modelValue"]),o(d(G),{modelValue:_.value,"onUpdate:modelValue":l[1]||(l[1]=$=>_.value=$),label:_.value?n.__("Hide preview"):n.__("Show preview"),size:"sm"},null,8,["modelValue","label"])]),(x=d(a))!=null&&x.data?(u(),S("div",re,[_.value?(u(),y(O,{key:1,sections:d(a).data,data:{}},null,8,["sections"])):(u(),y(se,{key:0,sections:d(a).data,doctype:r.value},null,8,["sections","doctype"]))])):V("",!0)])]}),actions:i(()=>[s("div",ue,[o(C,{loading:m.value,label:n.__("Save"),variant:"solid",onClick:p},null,8,["loading","label"]),o(C,{label:n.__("Reset"),onClick:v},null,8,["label"])])]),_:1},8,["modelValue"])}}};export{ge as _};
//# sourceMappingURL=QuickEntryModal-6386ea24.js.map
