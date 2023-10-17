import{c as C,Q as V,a as P,b as L}from"./QTabPanels.7129b1a1.js";import{_ as f,g as _,o as c,c as d,a as e,b as s,w as i,e as v,t as j,F as h,r as b,d as u,Q as k,ao as Q,a8 as w,ap as x,f as q,aq as S,$ as I,T,ar as O,a6 as z}from"./index.ea955d81.js";import{P as D}from"./PageHeader.a99ddee2.js";import{Q as U}from"./QInnerLoading.5a5f006f.js";import{Q as B}from"./QImg.6f71e2d0.js";import{Q as N}from"./QChip.0e6d3092.js";import{J as R}from"./JumpSection.91897825.js";import"./use-tick.94559502.js";import"./use-transition.61aa5725.js";const J={name:"ProjectsItem",props:["category","project"],emits:["preview"]},M={class:"project-item text-white q-my-lg"},A={class:"project-item-content row"},E={class:"project-item-title-mobile q-px-lg q-mt-md col-12"},H={class:"col-lg-3 col-md-4 col-sm-12 col-xs-12 q-pa-lg flex flex-center"},F={class:"box-relative col-lg-9 col-md-8 q-px-lg"},Y={class:"project-item-content"},G={class:"project-item-title q-mt-lg q-mb-md col-12"},K={class:"project-item-description"},W={class:"project-item-tags flex q-mb-lg"},X={class:"project-item-btn button-container row justify-end"},Z=e("span",{class:"btn-yellow-caption"}," Show More Details ",-1),$={class:"btn-yellow-icon"},ee=e("div",{class:"blob2"},null,-1),te=e("div",{class:"blob"},null,-1);function oe(r,a,t,y,o,l){const p=_("router-link");return c(),d("div",M,[e("div",A,[e("div",E,[e("span",{onClickCapture:a[0]||(a[0]=n=>r.$emit("preview",n,t.project))},[s(p,{to:{name:"Project",params:{category:t.category,projectId:t.project.id}}},{default:i(()=>[v(" Pizzaiko - Restaurant Management System ")]),_:1},8,["to"])],32)]),e("div",H,[s(B,{src:`/images/${t.project.imagesPath}/${t.project.images[0]}`,fit:"fill",loading:"lazy","spinner-color":"white",class:"q-pa-lg a-box-shadow",height:"100%",width:"100%","img-class":"project-item-image"},null,8,["src"])]),e("div",F,[e("div",Y,[e("div",G,[e("span",{onClickCapture:a[1]||(a[1]=n=>r.$emit("preview",n,t.project))},[s(p,{to:{name:"Project",params:{category:t.category,projectId:t.project.id}}},{default:i(()=>[v(j(t.project.title),1)]),_:1},8,["to"])],32)]),e("p",K,j(t.project.description.replaceAll("-","").substring(0,250)+".."),1),e("div",W,[(c(!0),d(h,null,b(t.project.tags,n=>(c(),u(N,{key:n,outline:"",square:"",color:"accent","text-color":"white"},{default:i(()=>[v(j(n),1)]),_:2},1024))),128))]),e("div",X,[e("span",{onClickCapture:a[2]||(a[2]=n=>r.$emit("preview",n,t.project))},[s(p,{to:{name:"Project",params:{category:t.category,projectId:t.project.id}},class:"btn-yellow flex flex-center"},{default:i(()=>[Z,e("span",$,[s(k,{size:"1.5em",name:"fa-solid fa-arrow-right"})])]),_:1},8,["to"])],32)])]),ee])]),te])}var se=f(J,[["render",oe]]);const re={name:"ProjectsPanel",props:["category"],components:{ProjectsItem:se,ProjectViewPage:Q(()=>O(()=>import("./ProjectsViewPage.17cd2de6.js"),["assets/ProjectsViewPage.17cd2de6.js","assets/ProjectsViewPage.9b6364ec.css","assets/QImg.6f71e2d0.js","assets/index.ea955d81.js","assets/index.93f906e8.css","assets/QChip.0e6d3092.js","assets/QInnerLoading.5a5f006f.js","assets/use-transition.61aa5725.js"]))},data(){return{brief:"",projects:[],previewedProject:{},loading:!0,previewOverlay:!1,previewProject:!1}},methods:{preview(r,a){this.previewedProject=a,r.preventDefault(),this.previewOverlay?(this.previewProject=!1,setTimeout(()=>{this.previewOverlay=!1,document.querySelector("body").classList.remove("body-show-overlay")},400)):(document.querySelector("body").classList.add("body-show-overlay"),this.previewOverlay=!0,this.previewProject=!0)}},mounted(){fetch(`/api/projects/${this.$props.category}`).then(r=>r.json()).then(r=>{this.brief=r.brief,this.projects=r.projects,this.loading=!1,document.querySelector("body").classList.remove("loading")})}},ae={class:"projects-panel"},ne={class:"brief-section bg-dark text-white"},ce=e("h4",{class:"text-uppercase font-heading q-ma-none q-mb-lg"},"Brief",-1),ie={key:0,class:"text-center text-white"},le={class:"preview-overlay flex flex-center"},pe={class:"top-corner text-right"};function me(r,a,t,y,o,l){const p=_("ProjectsItem"),n=_("ProjectViewPage");return c(),d("div",ae,[e("div",ne,[ce,e("p",null,j(o.brief),1)]),e("div",{class:S(["project-list-contaniner flex q-pt-lg",{"flex-center":!o.projects.length}])},[(c(!0),d(h,null,b(o.projects,g=>w((c(),u(p,{key:g.id,category:t.category,onPreview:l.preview,project:g},null,8,["category","onPreview","project"])),[[x,!o.loading]])),128)),o.projects.length?q("",!0):(c(),d("p",ie," No Projects Yet, but They'll be Uploaded Soon!! ")),s(U,{showing:o.loading,"label-style":"font-size: 1.1em"},null,8,["showing"])],2),(c(),u(T,{to:"#q-app"},[w(e("div",le,[e("div",pe,[s(k,{onClick:l.preview,name:"fa-solid fa-xmark",size:"40px",color:"primary"},null,8,["onClick"])]),s(I,{name:"slide-fade"},{default:i(()=>[o.previewProject?(c(),u(n,{key:0,projectObject:o.previewedProject},null,8,["projectObject"])):q("",!0)]),_:1})],512),[[x,o.previewOverlay]])]))])}var de=f(re,[["render",me]]);const _e={name:"ProjectsListPage",props:["category"],components:{PageHeader:D,JumpSection:R,ProjectsPanel:de},data(){return{tab:"devops",tabs:["devops","scenarios","programming"]}},computed:{tabLabels(){return this.$q.screen.width<=495?{devops:"DevOps",scenarios:"Scenarios",programming:"Programming"}:{devops:"DevOps Projects",scenarios:"Scenarios",programming:"Programming Projects"}}},methods:{updateURL(r){history.replaceState({},"",`/projects/${r}`)}},mounted(){this.tabs.includes(this.category)&&(this.tab=this.category)}},ue={class:"projects-page"};function ge(r,a,t,y,o,l){const p=_("PageHeader"),n=_("ProjectsPanel"),g=_("JumpSection");return c(),d("div",ue,[s(p,{title:"My Recent,Projects",image:"projects-banner.jpg"}),s(z,{class:"bg-accent text-dark flex-center"},{default:i(()=>[s(V,{"onUpdate:modelValue":[l.updateURL,a[0]||(a[0]=m=>o.tab=m)],modelValue:o.tab,class:"","inline-label":""},{default:i(()=>[s(P,{name:"devops",label:l.tabLabels.devops},null,8,["label"]),s(P,{name:"programming",label:l.tabLabels.programming},null,8,["label"])]),_:1},8,["onUpdate:modelValue","modelValue"])]),_:1}),s(C,{modelValue:o.tab,"onUpdate:modelValue":a[1]||(a[1]=m=>o.tab=m),animated:"",horizontal:""},{default:i(()=>[(c(!0),d(h,null,b(o.tabs,m=>(c(),u(L,{key:m,name:m,class:"q-pa-none"},{default:i(()=>[s(n,{category:m},null,8,["category"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),s(g,{title:"Contact",caption:"Contact Me",page:"Contact"})])}var qe=f(_e,[["render",ge]]);export{qe as default};