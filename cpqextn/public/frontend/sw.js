if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-78e2cf90"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddressModal-ced65781.js",revision:null},{url:"assets/ArrowUpRightIcon-f89323ee.js",revision:null},{url:"assets/AssignmentModal-7b9977f2.js",revision:null},{url:"assets/Breadcrumbs.vue_vue_type_script_setup_true_lang-7b2c30ed.js",revision:null},{url:"assets/CalendarIcon-236853ad.js",revision:null},{url:"assets/callLog-55eb7109.js",revision:null},{url:"assets/CallLogs-278b3491.js",revision:null},{url:"assets/CallLogs-452f60e3.css",revision:null},{url:"assets/CallUI-9e306b4a.css",revision:null},{url:"assets/CallUI-ba52b7b2.js",revision:null},{url:"assets/CameraIcon-766fa774.js",revision:null},{url:"assets/CommentIcon-2f8212cd.js",revision:null},{url:"assets/Contact-2c79f963.js",revision:null},{url:"assets/Contact-761b5ac1.css",revision:null},{url:"assets/ContactModal-53eff54c.js",revision:null},{url:"assets/ContactModal-fc56286b.css",revision:null},{url:"assets/Contacts-0e04a83f.js",revision:null},{url:"assets/contacts-62bb23c5.js",revision:null},{url:"assets/ContactsIcon-f7db653d.js",revision:null},{url:"assets/ContactsListView-141c98a3.js",revision:null},{url:"assets/CustomActions-fd13eb50.js",revision:null},{url:"assets/Dashboard-7fadfbce.js",revision:null},{url:"assets/Deal-19ede425.css",revision:null},{url:"assets/Deal-939e5388.js",revision:null},{url:"assets/Deals-76d685e1.js",revision:null},{url:"assets/DealsIcon-15068e15.js",revision:null},{url:"assets/DealsListView-e9610059.js",revision:null},{url:"assets/Design-1a9fc2fa.js",revision:null},{url:"assets/Designs-4d0095c0.css",revision:null},{url:"assets/Designs-9693ab71.js",revision:null},{url:"assets/DesktopLayout-ae01dd71.js",revision:null},{url:"assets/DetailsIcon-ef5d1277.js",revision:null},{url:"assets/DragVerticalIcon-87005af9.js",revision:null},{url:"assets/Dropdown-ddb0640f.js",revision:null},{url:"assets/Dropdown.vue_vue_type_script_setup_true_lang-bf1a1150.js",revision:null},{url:"assets/EditIcon-a130850d.js",revision:null},{url:"assets/Email2Icon-e2d51718.js",revision:null},{url:"assets/EmailAtIcon-5f694637.js",revision:null},{url:"assets/EmailTemplate-357a7b46.js",revision:null},{url:"assets/EmailTemplateModal-9954264c.js",revision:null},{url:"assets/EmailTemplates-0f490d13.js",revision:null},{url:"assets/FadedScrollableDiv-9f66556a.js",revision:null},{url:"assets/Fields-6a34413d.js",revision:null},{url:"assets/Fields-d783473b.css",revision:null},{url:"assets/FileUploader-1f4a7957.js",revision:null},{url:"assets/FontColor-648ee1c5.js",revision:null},{url:"assets/GroupByIcon-a605d43f.js",revision:null},{url:"assets/Icon-b0abef9d.js",revision:null},{url:"assets/index-50633265.css",revision:null},{url:"assets/index-d057f33a.js",revision:null},{url:"assets/IndicatorIcon-c103771d.js",revision:null},{url:"assets/InsertImage-9f71003f.js",revision:null},{url:"assets/InsertLink-40c781b3.js",revision:null},{url:"assets/InsertVideo-2e827243.js",revision:null},{url:"assets/InvalidPage-fb61f72f.js",revision:null},{url:"assets/Item-ccd4967b.js",revision:null},{url:"assets/Items-0731c657.js",revision:null},{url:"assets/KanbanView-0129a26b.js",revision:null},{url:"assets/LayoutHeader-fe1f254b.js",revision:null},{url:"assets/Lead-938b5f84.js",revision:null},{url:"assets/Leads-a06a9d62.js",revision:null},{url:"assets/LeadsIcon-520efb00.js",revision:null},{url:"assets/LinkIcon-0f36a04b.js",revision:null},{url:"assets/ListBulkActions-4e019d04.js",revision:null},{url:"assets/ListFooter-8173dedc.js",revision:null},{url:"assets/ListRows-b9dc126d.js",revision:null},{url:"assets/MarkAsDoneIcon-90d7583e.js",revision:null},{url:"assets/MobileDeal-42cd5ed0.js",revision:null},{url:"assets/MobileDesign-311b3e78.js",revision:null},{url:"assets/MobileLayout-15eb3f05.js",revision:null},{url:"assets/MobileLead-ab3d2456.js",revision:null},{url:"assets/MobileNotification-5b04a0e6.js",revision:null},{url:"assets/MultipleAvatar-9bfce769.js",revision:null},{url:"assets/NestedPopover-545deb9d.js",revision:null},{url:"assets/NoteModal-46cc4fb1.js",revision:null},{url:"assets/Notes-4ad94236.js",revision:null},{url:"assets/notifications-53bb9738.js",revision:null},{url:"assets/Organization-f5ec1475.js",revision:null},{url:"assets/OrganizationModal-b81f6dbb.js",revision:null},{url:"assets/organizations-30571208.js",revision:null},{url:"assets/Organizations-b402eacf.js",revision:null},{url:"assets/OrganizationsIcon-321405d1.js",revision:null},{url:"assets/PhoneIcon-d45a62b6.js",revision:null},{url:"assets/PinIcon-1aaff3df.js",revision:null},{url:"assets/QuickEntryModal-6386ea24.js",revision:null},{url:"assets/Section-1565df09.js",revision:null},{url:"assets/SectionFieldCpq-0621bddb.css",revision:null},{url:"assets/SectionFieldCpq-942892b4.js",revision:null},{url:"assets/settings-0248bbea.js",revision:null},{url:"assets/SidePanelModal-05261a36.js",revision:null},{url:"assets/SLASection-51b98e40.js",revision:null},{url:"assets/statuses-72592e37.js",revision:null},{url:"assets/Switch.vue_vue_type_script_setup_true_lang-3dc67c0d.js",revision:null},{url:"assets/TaskModal-50dd9ecc.css",revision:null},{url:"assets/TaskModal-817b477f.js",revision:null},{url:"assets/Tasks-59f6f9dd.js",revision:null},{url:"assets/useActiveTabManager-eb58b00a.js",revision:null},{url:"assets/useActiveTabManager-f5ad3e34.css",revision:null},{url:"assets/UserAvatar-e49c5291.js",revision:null},{url:"assets/view-66caf033.js",revision:null},{url:"assets/ViewBreadcrumbs-27963285.js",revision:null},{url:"assets/ViewControls-57997287.js",revision:null},{url:"assets/views-fe454bb1.js",revision:null},{url:"assets/WhatsAppIcon-3fd08937.js",revision:null},{url:"index.html",revision:"62ed1c6195cafdbfd37ce2d7a10512ad"},{url:"registerSW.js",revision:"069e8ace11579bbd4c2adb8bfdded063"},{url:"manifest.webmanifest",revision:"0638b1b80ea01b3668f2cce8d69e8922"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map