import{Q as p}from"./QImg.6f71e2d0.js";import{Q as h}from"./QChip.0e6d3092.js";import{Q as g}from"./QInnerLoading.5a5f006f.js";import{_ as j,o as s,c as i,a as t,F as n,t as d,b as l,r as m,f as _,d as f,w as u,e as y}from"./index.ea955d81.js";import"./use-transition.61aa5725.js";const w={name:"ProjectsViewPage",props:["category","projectId","projectObject"],data(){return{project:{},pImageId:0,loading:!0}},mounted(){typeof this.projectObject!="undefined"?(this.project=this.projectObject,this.loading=!1):typeof this.projectId!="undefined"&&fetch(`/api/projects/${this.category}`).then(c=>c.json()).then(c=>{let r=c.projects.find(a=>a.id==this.projectId);console.log(r),typeof r!="undefined"?(this.project=r,this.loading=!1,document.querySelector("body").classList.remove("loading")):(console.log(),this.$router.push("/404"))})}},v={class:"project-view-page"},x={class:"content-box"},b={class:"project-title"},I={class:"project-image-preview q-py-md flex flex-center"},P={class:"bottom-panel row"},k={class:"project-thumbnails col-md-6 col-sm-12 row"},V={class:"project-tags col-md-6 col-xs-12"},Q={class:"project-item-tags flex justify-end"},q={class:"project-description q-my-xl"},C=["innerHTML"];function L(c,r,a,B,e,N){return s(),i("div",v,[t("div",x,[e.loading?_("",!0):(s(),i(n,{key:0},[t("h3",b,d(e.project.title),1),t("div",I,[l(p,{src:`/images/${e.project.imagesPath}/${e.project.images[e.pImageId]}`,fit:"scale-down",loading:"lazy","spinner-color":"white",height:"100%",width:"100%","img-class":"project-item-image"},null,8,["src"])]),t("div",P,[t("div",k,[(s(!0),i(n,null,m(e.project.images.length,o=>(s(),i("div",{class:"img-thumbnail q-mr-sm",key:o},[l(p,{src:`/images/${e.project.imagesPath}/${e.project.images[o-1]}`,fit:"fill",loading:"lazy","spinner-color":"white",class:"a-box-shadow",height:"100%",width:"100%","img-class":"project-item-image",onClick:z=>e.pImageId=o-1},null,8,["src","onClick"])]))),128))]),t("div",V,[t("div",Q,[(s(!0),i(n,null,m(e.project.tags,o=>(s(),f(h,{key:o,square:"",color:"secondary","text-color":"white"},{default:u(()=>[y(d(o),1)]),_:2},1024))),128))])])]),t("div",q,[t("p",{innerHTML:e.project.description.replaceAll(`
`,"<br>")},null,8,C)])],64)),l(g,{showing:e.loading,"label-style":"font-size: 1.1em"},null,8,["showing"])])])}var S=j(w,[["render",L]]);export{S as default};
