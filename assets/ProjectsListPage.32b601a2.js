import{c as C,Q as V,a as P,b as I}from"./QTabPanels.8594db4c.js";import{_ as f,g as _,o as i,c as d,a as e,b as r,w as n,e as v,t as g,F as h,r as b,d as u,Q as k,ao as L,a8 as w,ap as x,f as q,aq as Q,$ as S,T,ar as O,a6 as D}from"./index.7e301834.js";import{P as z}from"./PageHeader.c138a9e8.js";import{Q as U}from"./QInnerLoading.02999a13.js";import{Q as B}from"./QImg.dea2ae84.js";import{Q as N}from"./QChip.8f5a266b.js";import{J as F}from"./JumpSection.dc638da2.js";import"./use-tick.659b6f71.js";import"./use-transition.12a06349.js";const J={name:"ProjectsItem",props:["category","project"],emits:["preview"]},R={class:"project-item text-white q-my-lg"},A={class:"project-item-content row"},E={class:"project-item-title-mobile q-px-lg q-mt-md col-12"},H={class:"col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-lg flex flex-center"},M={class:"box-relative col-lg-9 col-md-8 q-px-lg"},Y={class:"project-item-content"},G={class:"project-item-title q-mt-lg q-mb-md col-12"},K={class:"project-item-description"},W={class:"project-item-tags flex q-mb-lg"},X={class:"project-item-btn button-container row justify-end"},Z=e("span",{class:"btn-yellow-caption"}," Show More Details ",-1),$={class:"btn-yellow-icon"},ee=e("div",{class:"blob2"},null,-1),te=e("div",{class:"blob"},null,-1);function oe(s,a,t,y,o,l){const p=_("router-link");return i(),d("div",R,[e("div",A,[e("div",E,[e("span",{onClickCapture:a[0]||(a[0]=c=>s.$emit("preview",c,t.project))},[r(p,{to:{name:"Project",params:{category:t.category,projectId:t.project.id}}},{default:n(()=>[v(g(t.project.title),1)]),_:1},8,["to"])],32)]),e("div",H,[r(B,{src:`/images/${t.project.imagesPath}/${t.project.images[0]}`,fit:t.project.previewImageFit?t.project.previewImageFit:"cover",loading:"lazy","spinner-color":"white",class:"q-pa-lg a-box-shadow",height:"100%",width:"100%","img-class":"project-item-image"},null,8,["src","fit"])]),e("div",M,[e("div",Y,[e("div",G,[e("span",{onClickCapture:a[1]||(a[1]=c=>s.$emit("preview",c,t.project))},[r(p,{to:{name:"Project",params:{category:t.category,projectId:t.project.id}}},{default:n(()=>[v(g(t.project.title),1)]),_:1},8,["to"])],32)]),e("p",K,g(t.project.description.replaceAll("-","").replace(/(<([^>]+)>)/ig,"").substring(0,250)+".."),1),e("div",W,[(i(!0),d(h,null,b(t.project.tags,c=>(i(),u(N,{key:c,outline:"",square:"",color:"accent","text-color":"white"},{default:n(()=>[v(g(c),1)]),_:2},1024))),128))]),e("div",X,[e("span",{onClickCapture:a[2]||(a[2]=c=>s.$emit("preview",c,t.project))},[r(p,{to:{name:"Project",params:{category:t.category,projectId:t.project.id}},class:"btn-yellow flex flex-center"},{default:n(()=>[Z,e("span",$,[r(k,{size:"1.5em",name:"fa-solid fa-arrow-right"})])]),_:1},8,["to"])],32)])]),ee])]),te])}var re=f(J,[["render",oe]]);const se={name:"ProjectsPanel",props:["category"],components:{ProjectsItem:re,ProjectViewPage:L(()=>O(()=>import("./ProjectsViewPage.4191b54b.js"),["assets/ProjectsViewPage.4191b54b.js","assets/ProjectsViewPage.be4fe2cb.css","assets/QImg.dea2ae84.js","assets/index.7e301834.js","assets/index.93f906e8.css","assets/QChip.8f5a266b.js","assets/QInnerLoading.02999a13.js","assets/use-transition.12a06349.js"]))},data(){return{brief:"",projects:[],previewedProject:{},loading:!0,previewOverlay:!1,previewProject:!1}},methods:{preview(s,a){this.previewedProject=a,s.preventDefault(),this.previewOverlay?(this.previewProject=!1,setTimeout(()=>{this.previewOverlay=!1,document.querySelector("body").classList.remove("body-show-overlay")},400)):(document.querySelector("body").classList.add("body-show-overlay"),this.previewOverlay=!0,this.previewProject=!0)}},mounted(){fetch(`/api/projects/${this.$props.category}`).then(s=>s.json()).then(s=>{this.brief=s.brief,this.projects=s.projects,this.loading=!1,document.querySelector("body").classList.remove("loading")})}},ae={class:"projects-panel"},ce={class:"brief-section bg-dark text-white"},ie=e("h4",{class:"text-uppercase font-heading q-ma-none q-mb-lg"},"Brief",-1),ne={key:0,class:"text-center text-white"},le={class:"preview-overlay flex flex-center"},pe={class:"top-corner text-right"};function me(s,a,t,y,o,l){const p=_("ProjectsItem"),c=_("ProjectViewPage");return i(),d("div",ae,[e("div",ce,[ie,e("p",null,g(o.brief),1)]),e("div",{class:Q(["project-list-contaniner flex q-pt-lg",{"flex-center":!o.projects.length}])},[(i(!0),d(h,null,b(o.projects,j=>w((i(),u(p,{key:j.id,category:t.category,onPreview:l.preview,project:j},null,8,["category","onPreview","project"])),[[x,!o.loading]])),128)),o.projects.length?q("",!0):(i(),d("p",ne," No Projects Yet, but They'll be Uploaded Soon!! ")),r(U,{showing:o.loading,"label-style":"font-size: 1.1em"},null,8,["showing"])],2),(i(),u(T,{to:"#q-app"},[w(e("div",le,[e("div",pe,[r(k,{onClick:l.preview,name:"fa-solid fa-xmark",size:"40px",color:"primary"},null,8,["onClick"])]),r(S,{name:"slide-fade"},{default:n(()=>[o.previewProject?(i(),u(c,{key:0,projectObject:o.previewedProject},null,8,["projectObject"])):q("",!0)]),_:1})],512),[[x,o.previewOverlay]])]))])}var de=f(se,[["render",me]]);const _e={name:"ProjectsListPage",props:["category"],components:{PageHeader:z,JumpSection:F,ProjectsPanel:de},data(){return{tab:"devops",tabs:["devops","scenarios","programming"]}},computed:{tabLabels(){return this.$q.screen.width<=495?{devops:"DevOps",scenarios:"Scenarios",programming:"Programming"}:{devops:"DevOps Projects",scenarios:"Scenarios",programming:"Programming Projects"}}},methods:{updateURL(s){history.replaceState({},"",`/projects/${s}`)}},mounted(){this.tabs.includes(this.category)&&(this.tab=this.category)}},ge={class:"projects-page"};function ue(s,a,t,y,o,l){const p=_("PageHeader"),c=_("ProjectsPanel"),j=_("JumpSection");return i(),d("div",ge,[r(p,{title:"My Recent,Projects",image:"projects-banner.jpg"}),r(D,{class:"bg-accent text-dark flex-center"},{default:n(()=>[r(V,{"onUpdate:modelValue":[l.updateURL,a[0]||(a[0]=m=>o.tab=m)],modelValue:o.tab,class:"","inline-label":""},{default:n(()=>[r(P,{name:"devops",label:l.tabLabels.devops},null,8,["label"]),r(P,{name:"programming",label:l.tabLabels.programming},null,8,["label"])]),_:1},8,["onUpdate:modelValue","modelValue"])]),_:1}),r(C,{modelValue:o.tab,"onUpdate:modelValue":a[1]||(a[1]=m=>o.tab=m),animated:"",horizontal:""},{default:n(()=>[(i(!0),d(h,null,b(o.tabs,m=>(i(),u(I,{key:m,name:m,class:"q-pa-none"},{default:n(()=>[r(c,{category:m},null,8,["category"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),r(j,{title:"Contact",caption:"Contact Me",page:"Contact"})])}var qe=f(_e,[["render",ue]]);export{qe as default};
