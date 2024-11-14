import{_ as j}from"./QuickEntryModal-6386ea24.js";import{F as Q}from"./Fields-6a34413d.js";import{E as $}from"./EditIcon-a130850d.js";import{u as z}from"./UserAvatar-e49c5291.js";import{m as J,i as C,l as n,j as P,x as k,z as q,k as L,A as B,r as S,b as u,c as b,d as i,w as h,e as r,t as R,u as c,g as w,p as x,D as T,av as G,F as N,f as H,C as K}from"./index-d057f33a.js";const W={class:"bg-white px-4 pb-6 pt-5 sm:px-6"},X={class:"mb-5 flex items-center justify-between"},Y={class:"text-2xl font-semibold leading-6 text-gray-900"},Z={class:"flex items-center gap-1"},ee={key:0},se={class:"px-4 pb-7 pt-4 sm:px-6"},ae={class:"space-y-2"},de={__name:"AddressModal",props:J({options:{type:Object,default:{afterInsert:()=>{}}}},{modelValue:{},modelModifiers:{},address:{},addressModifiers:{}}),emits:["update:modelValue","update:address"],setup(p){const A=p,{isManager:F}=z(),t=C(p,"modelValue"),V=C(p,"address"),d=n(!1),v=n(null);n(null);const m=n(!1);let l=n({name:"",address_title:"",address_type:"Billing",address_line1:"",address_line2:"",city:"",county:"",state:"",country:"",pincode:""});const _=P(()=>{let e=m.value?__(l.value.address_title):__("New Address"),s="xl",o=[{label:m.value?__("Save"):__("Create"),variant:"solid",onClick:()=>m.value?D():O.submit()}];return{title:e,size:s,actions:o}}),E=k({url:"crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.get_fields_layout",cache:["quickEntryFields","Address"],params:{doctype:"Address",type:"Quick Entry"},auto:!0});let y=n({});function D(){v.value=null;const e={...y.value},s={...l.value},o=JSON.stringify(e)!==JSON.stringify(s),g=s;if(!o){t.value=!1;return}d.value=!0,I.submit({doctype:"Address",name:l.value.name,fieldname:g})}const I=k({url:"frappe.client.set_value",onSuccess(e){d.value=!1,e.name&&M(e)},onError(e){d.value=!1,v.value=e}}),O=k({url:"frappe.client.insert",makeParams(){return{doc:{doctype:"Address",...l.value}}},onSuccess(e){d.value=!1,e.name&&(q("address_created"),M(e))},onError(e){d.value=!1,v.value=e}});function M(e){t.value=!1,A.options.afterInsert&&A.options.afterInsert(e)}L(()=>t.value,e=>{e&&(m.value=!1,B(()=>{var s;y.value=((s=V.value)==null?void 0:s.doc)||V.value||{},l.value={...y.value},l.value.name&&(m.value=!0)}))});const f=n(!1);function U(){f.value=!0,B(()=>{t.value=!1})}return(e,s)=>{const o=S("Button"),g=S("Dialog");return u(),b(N,null,[i(g,{modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=a=>t.value=a),options:_.value},{body:h(()=>[r("div",W,[r("div",X,[r("div",null,[r("h3",Y,R(e.__(_.value.title)||e.__("Untitled")),1)]),r("div",Z,[c(F)()?(u(),w(o,{key:0,variant:"ghost",class:"w-7",onClick:U},{default:h(()=>[i($,{class:"h-4 w-4"})]),_:1})):x("",!0),i(o,{variant:"ghost",class:"w-7",onClick:s[0]||(s[0]=a=>t.value=!1)},{default:h(()=>[i(c(T),{name:"x",class:"h-4 w-4"})]),_:1})])]),c(E).data?(u(),b("div",ee,[i(Q,{sections:c(E).data,data:c(l)},null,8,["sections","data"]),i(c(G),{class:"mt-2",message:v.value},null,8,["message"])])):x("",!0)]),r("div",se,[r("div",ae,[(u(!0),b(N,null,H(_.value.actions,a=>(u(),w(o,K({class:"w-full",key:a.label,ref_for:!0},a,{label:e.__(a.label),loading:d.value}),null,16,["label","loading"]))),128))])])]),_:1},8,["modelValue","options"]),f.value?(u(),w(j,{key:0,modelValue:f.value,"onUpdate:modelValue":s[2]||(s[2]=a=>f.value=a),doctype:"Address"},null,8,["modelValue"])):x("",!0)],64)}}};export{de as _};
//# sourceMappingURL=AddressModal-ced65781.js.map