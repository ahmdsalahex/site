import{c as C,Q as L,a as j,b as V}from"./QTabPanels.9264c861.js";import{_ as b,g as _,o as c,c as d,a as e,b as t,w as i,e as f,t as v,F as h,r as y,d as u,Q as k,ao as Q,a8 as w,ap as x,f as q,aq as S,$ as I,T,ar as O,a6 as z}from"./index.af3adaee.js";import{P as D}from"./PageHeader.b19b3a94.js";import{Q as B}from"./QInnerLoading.049f784b.js";import{Q as N}from"./QImg.ce381040.js";import{Q as R}from"./QChip.4581a979.js";import{J as U}from"./JumpSection.10e62310.js";import"./use-tick.ba8f203e.js";import"./use-transition.9826068d.js";const J={name:"ProjectsItem",props:["category","project"],emits:["preview"]},M={class:"project-item text-white q-my-lg"},E={class:"project-item-content row"},H={class:"project-item-title-mobile q-px-lg q-mt-md col-12"},A={class:"col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-lg flex flex-center"},F={class:"box-relative col-lg-9 col-md-8 q-px-lg"},Y={class:"project-item-content"},G={class:"project-item-title q-mt-lg q-mb-md col-12"},K={class:"project-item-description"},W={class:"project-item-tags flex q-mb-lg"},X={class:"project-item-btn button-container row justify-end"},Z=e("span",{class:"btn-yellow-caption"}," Show More Details ",-1),$={class:"btn-yellow-icon"},ee=e("div",{class:"blob2"},null,-1),te=e("div",{class:"blob"},null,-1);function oe(r,a,o,P,s,l){const m=_("router-link");return c(),d("div",M,[e("div",E,[e("div",H,[e("span",{onClickCapture:a[0]||(a[0]=n=>r.$emit("preview",n,o.project))},[t(m,{to:{name:"Project",params:{category:o.category,projectId:o.project.id}}},{default:i(()=>[f(" Pizzaiko - Restaurant Management System ")]),_:1},8,["to"])],32)]),e("div",A,[t(N,{src:"/images/"+o.project.images[0],fit:"fill",loading:"lazy","spinner-color":"white",class:"q-pa-lg a-box-shadow",height:"100%",width:"100%","img-class":"project-item-image"},null,8,["src"])]),e("div",F,[e("div",Y,[e("div",G,[e("span",{onClickCapture:a[1]||(a[1]=n=>r.$emit("preview",n,o.project))},[t(m,{to:{name:"Project",params:{category:o.category,projectId:o.project.id}}},{default:i(()=>[f(v(o.project.title),1)]),_:1},8,["to"])],32)]),e("p",K,v(o.project.description.substring(0,250)+".."),1),e("div",W,[(c(!0),d(h,null,y(o.project.tags,n=>(c(),u(R,{key:n,outline:"",square:"",color:"accent","text-color":"white"},{default:i(()=>[f(v(n),1)]),_:2},1024))),128))]),e("div",X,[e("span",{onClickCapture:a[2]||(a[2]=n=>r.$emit("preview",n,o.project))},[t(m,{to:{name:"Project",params:{category:o.category,projectId:o.project.id}},class:"btn-yellow flex flex-center"},{default:i(()=>[Z,e("span",$,[t(k,{size:"1.5em",name:"fa-solid fa-arrow-right"})])]),_:1},8,["to"])],32)])]),ee])]),te])}var se=b(J,[["render",oe]]);const re={name:"ProjectsPanel",props:["category"],components:{ProjectsItem:se,ProjectViewPage:Q(()=>O(()=>import("./ProjectsViewPage.161449bd.js"),["assets/ProjectsViewPage.161449bd.js","assets/ProjectsViewPage.9b6364ec.css","assets/QImg.ce381040.js","assets/index.af3adaee.js","assets/index.93f906e8.css","assets/QChip.4581a979.js","assets/QInnerLoading.049f784b.js","assets/use-transition.9826068d.js"]))},data(){return{brief:"",projects:[],previewedProject:{},loading:!0,previewOverlay:!1,previewProject:!1}},methods:{preview(r,a){this.previewedProject=a,r.preventDefault(),this.previewOverlay?(this.previewProject=!1,setTimeout(()=>{this.previewOverlay=!1,document.querySelector("body").classList.remove("body-show-overlay")},400)):(document.querySelector("body").classList.add("body-show-overlay"),this.previewOverlay=!0,this.previewProject=!0)}},mounted(){fetch(`/api/projects/${this.$props.category}`).then(r=>r.json()).then(r=>{this.brief=r.brief,this.projects=r.projects,this.loading=!1,document.querySelector("body").classList.remove("loading")})}},ae={class:"projects-panel"},ne={class:"brief-section bg-dark text-white"},ce=e("h4",{class:"text-uppercase font-heading q-ma-none q-mb-lg"},"Brief",-1),ie={key:0,class:"text-center text-white"},le={class:"preview-overlay flex flex-center"},me={class:"top-corner text-right"};function pe(r,a,o,P,s,l){const m=_("ProjectsItem"),n=_("ProjectViewPage");return c(),d("div",ae,[e("div",ne,[ce,e("p",null,v(s.brief),1)]),e("div",{class:S(["project-list-contaniner flex q-pt-lg",{"flex-center":!s.projects.length}])},[(c(!0),d(h,null,y(s.projects,g=>w((c(),u(m,{key:g.id,category:o.category,onPreview:l.preview,project:g},null,8,["category","onPreview","project"])),[[x,!s.loading]])),128)),s.projects.length?q("",!0):(c(),d("p",ie," No Projects Yet, but They're Comming Soon!! ")),t(B,{showing:s.loading,"label-style":"font-size: 1.1em"},null,8,["showing"])],2),(c(),u(T,{to:"#q-app"},[w(e("div",le,[e("div",me,[t(k,{onClick:l.preview,name:"fa-solid fa-xmark",size:"40px",color:"primary"},null,8,["onClick"])]),t(I,{name:"slide-fade"},{default:i(()=>[s.previewProject?(c(),u(n,{key:0,projectObject:s.previewedProject},null,8,["projectObject"])):q("",!0)]),_:1})],512),[[x,s.previewOverlay]])]))])}var de=b(re,[["render",pe]]);const _e={name:"ProjectsListPage",props:["category"],components:{PageHeader:D,JumpSection:U,ProjectsPanel:de},data(){return{tab:"devops",tabs:["devops","scenarios","programming"]}},computed:{tabLabels(){return this.$q.screen.width<=495?{devops:"DevOps",scenarios:"Scenarios",programming:"Programming"}:{devops:"DevOps Projects",scenarios:"Scenarios",programming:"Programming Projects"}}},methods:{updateURL(r){this.$router.replace({name:"Projects",params:{category:r}})}},mounted(){this.tabs.includes(this.category)&&(this.tab=this.category)}},ue={class:"projects-page"};function ge(r,a,o,P,s,l){const m=_("PageHeader"),n=_("ProjectsPanel"),g=_("JumpSection");return c(),d("div",ue,[t(m,{title:"My Recent,Projects",image:"projects-banner.jpg"}),t(z,{class:"bg-accent text-dark flex-center"},{default:i(()=>[t(L,{"onUpdate:modelValue":[l.updateURL,a[0]||(a[0]=p=>s.tab=p)],modelValue:s.tab,class:"","inline-label":""},{default:i(()=>[t(j,{name:"devops",label:l.tabLabels.devops},null,8,["label"]),t(j,{name:"scenarios",label:l.tabLabels.scenarios},null,8,["label"]),t(j,{name:"programming",label:l.tabLabels.programming},null,8,["label"])]),_:1},8,["onUpdate:modelValue","modelValue"])]),_:1}),t(C,{modelValue:s.tab,"onUpdate:modelValue":a[1]||(a[1]=p=>s.tab=p),animated:"",horizontal:""},{default:i(()=>[(c(!0),d(h,null,y(s.tabs,p=>(c(),u(V,{key:p,name:p,class:"q-pa-none"},{default:i(()=>[t(n,{category:p},null,8,["category"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),t(g,{title:"Contact",caption:"Contact Me",page:"Contact"})])}var qe=b(_e,[["render",ge]]);export{qe as default};
