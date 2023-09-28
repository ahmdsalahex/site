import{h as g,k as y,l as v,m as T,_ as x,o as a,c,a as p,d as k,w as o,e as _,t as d,f as V,F as b,r as S,b as e,Q as j,g as f,a6 as C}from"./index.af3adaee.js";import{Q as L,a as h,b as q,c as w}from"./QTabPanels.9264c861.js";import{Q as B}from"./QPage.d8d3878f.js";import{P as J}from"./PageHeader.b19b3a94.js";import{J as N}from"./JumpSection.10e62310.js";import{Q as z}from"./QChip.4581a979.js";import{Q as E}from"./QInnerLoading.049f784b.js";import"./use-tick.ba8f203e.js";import"./use-transition.9826068d.js";var H=g({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:n}){const i=y(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>v("div",{class:i.value},T(n.default))}});const I=v("div",{class:"q-space"});var F=g({name:"QSpace",setup(){return()=>I}});const M={name:"SkillsPanel",props:["api","icon","chip"],data(){return{allSkills:[],loading:!0}},mounted(){fetch(`/api/skills/${this.api}`).then(t=>t.json()).then(t=>{this.allSkills=t,this.loading=!1,document.querySelector("body").classList.remove("loading")})}},U={class:"skills-panel"},$={class:"skills-container"},D={class:"skills-section-title"};function O(t,n,i,Q,s,m){return a(),c("div",U,[p("div",$,[i.chip?(a(),k(z,{key:0,class:"glossy q-mb-lg",color:"accent","text-color":"dark"},{default:o(()=>[_(d(i.chip),1)]),_:1})):V("",!0),(a(!0),c(b,null,S(s.allSkills,r=>(a(),c("div",{class:"skills-section",key:r.title},[p("div",D,d(r.title),1),p("ul",null,[(a(!0),c(b,null,S(r.skills,u=>(a(),c("li",{key:u,class:"skill-list-item"},[e(j,{name:`fa-solid ${i.icon}`,size:"1.5rem",class:"q-pr-sm"},null,8,["name"]),_(" "+d(u),1)]))),128))])]))),128)),e(E,{showing:s.loading,"label-style":"font-size: 1.1em"},null,8,["showing"])])])}var R=x(M,[["render",O]]);const W={name:"SkillsPage",components:{PageHeader:J,JumpSection:N,SkillsPanel:R},data(){return{tab:"tech",tabs:[{name:"tech",api:"technical",icon:"fa-bolt"},{name:"soft",api:"soft",icon:"fa-check"},{name:"exp",api:"experience",icon:"fa-chevron-right",chip:"I've Worked On:"}]}},computed:{tabLabels(){return this.$q.screen.width<=495?{techSkils:"Technical",softSkils:"Soft",expSkils:"Exp"}:{techSkils:"Technical Skills",softSkils:"Soft Skills",expSkils:"Technical Exp"}}}},A={class:"content-box flex"},G={class:"page-content"};function K(t,n,i,Q,s,m){const r=f("PageHeader"),u=f("skills-panel"),P=f("JumpSection");return a(),k(B,{class:"skills-page"},{default:o(()=>[e(r,{title:"My Technical,& Soft Skills",image:"skills-banner.jpg"}),p("div",A,[p("div",G,[e(C,{class:"bg-secondary text-white rounded-borders"},{default:o(()=>[e(H,null,{default:o(()=>[_("Qualifications & Courses")]),_:1}),e(F),e(L,{modelValue:s.tab,"onUpdate:modelValue":n[0]||(n[0]=l=>s.tab=l),class:"","inline-label":""},{default:o(()=>[e(h,{name:"tech",icon:"fa-solid fa-laptop-code",label:m.tabLabels.techSkils,alert:"accent"},null,8,["label"]),e(h,{name:"soft",icon:"fa-solid fa-tree",label:m.tabLabels.softSkils},null,8,["label"]),e(h,{name:"exp",icon:"fa-solid fa-hands",label:m.tabLabels.expSkils},null,8,["label"])]),_:1},8,["modelValue"])]),_:1}),e(w,{modelValue:s.tab,"onUpdate:modelValue":n[1]||(n[1]=l=>s.tab=l),animated:"",horizontal:"","transition-prev":"jump-up","transition-next":"jump-up"},{default:o(()=>[(a(!0),c(b,null,S(s.tabs,l=>(a(),k(q,{key:l.name,name:l.name},{default:o(()=>[e(u,{api:l.api,icon:l.icon,chip:l.chip},null,8,["api","icon","chip"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])])]),e(P,{title:"Projects",caption:"Check My Recent Projects",page:"Projects"})]),_:1})}var oe=x(W,[["render",K]]);export{oe as default};
