import{m as k,i as b,r as m,b as o,c as f,d as s,w as n,H as C,t as h,e as r,g as l,n as x,G as V,p as i,q as B}from"./index-d057f33a.js";import{_ as N}from"./Icon-b0abef9d.js";import{_ as g}from"./Dropdown-ddb0640f.js";const z={class:"flex items-center"},M=["onClick"],D={class:"flex items-center"},$={class:"whitespace-nowrap"},q={key:0,class:"flex flex-row-reverse gap-2 items-center min-w-11"},A={__name:"ViewBreadcrumbs",props:k({routeName:{type:String,required:!0}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(c){const t=b(c,"modelValue"),v=a=>a.name===t.value.currentView.name;return(a,d)=>{const w=m("router-link"),u=m("FeatherIcon"),p=m("Button");return o(),f("div",z,[s(w,{to:{name:c.routeName},class:"px-0.5 py-1 text-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 text-gray-600 hover:text-gray-700"},{default:n(()=>[C(h(a.__(c.routeName)),1)]),_:1},8,["to"]),d[0]||(d[0]=r("span",{class:"mx-0.5 text-base text-gray-500","aria-hidden":"true"}," / ",-1)),t.value?(o(),l(g,{key:0,options:t.value.viewsDropdownOptions},{default:n(({open:e})=>[s(p,{variant:"ghost",class:"text-lg font-medium text-nowrap",label:a.__(t.value.currentView.label)},{prefix:n(()=>[s(N,{icon:t.value.currentView.icon,class:"h-4"},null,8,["icon"])]),suffix:n(()=>[s(u,{name:e?"chevron-up":"chevron-down",class:"h-4 text-gray-800"},null,8,["name"])]),_:2},1032,["label"])]),item:n(({item:e,active:_})=>[r("button",{class:x([_?"bg-gray-100":"text-gray-800","group flex gap-4 h-7 w-full justify-between items-center rounded px-2 text-base"]),onClick:e.onClick},[r("div",D,[e.icon&&typeof e.icon=="string"?(o(),l(u,{key:0,name:e.icon,class:"mr-2 h-4 w-4 flex-shrink-0 text-gray-700","aria-hidden":"true"},null,8,["name"])):e.icon?(o(),l(V(e.icon),{key:1,class:"mr-2 h-4 w-4 flex-shrink-0 text-gray-700"})):i("",!0),r("span",$,h(e.label),1)]),e.name?(o(),f("div",q,[s(g,{class:x(_?"block":"hidden"),placement:"right-start",options:t.value.viewActions(e)},{default:n(({togglePopover:y})=>[s(p,{variant:"ghost",class:"!size-5",icon:"more-horizontal",onClick:B(F=>y(),["stop"])},null,8,["onClick"])]),_:2},1032,["class","options"]),v(e)?(o(),l(u,{key:0,name:"check",class:"size-4 text-gray-700"})):i("",!0)])):i("",!0)],10,M)]),_:1},8,["options"])):i("",!0)])}}};export{A as _};
//# sourceMappingURL=ViewBreadcrumbs-27963285.js.map
