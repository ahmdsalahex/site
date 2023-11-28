import{Q as q}from"./QPage.3ee75165.js";import{_ as l,o as n,c as o,a as e,b as s,Q as r,F as v,r as f,d as b,w as p,e as h,t as g,f as k,g as a}from"./index.a2e53939.js";import{Q as x}from"./QChip.bf3fa23e.js";import{Q as j}from"./QTooltip.95324e3b.js";import{J as C}from"./JumpSection.652d8522.js";import"./position-engine.5a388518.js";import"./use-tick.26acf775.js";const O={name:"HeroSection",data(){return{tags:["Microservice","Containers","DevOps","Kubernetes","Systems","Linux","Windows","Azure","AWS","Programming","Software_Implementation","Software_Delivery","Automation","Security","Logging","Traditional"]}},computed:{tagsCount(){return this.$q.screen.height<680?10:20}}},I={class:"hero-section"},M={class:"content-box row"},P={class:"hero-content"},A=e("h2",{class:"font-heading text-primary q-mb-md"},[h(" Hello! I'm Ahmed Salah, "),e("br"),h(" a platform engineer ")],-1),E=e("h5",{class:"title-label text-uppercase q-pa-xs q-ma-none q-mb-lg"}," IT Infrastructure Engineer with a Programming Mindset ",-1),H=e("p",{class:"hero-description text-justify q-mb-lg"}," with a passion for designing and building robust, scalable, and efficient software systems. I have a background in computer science and engineering, and I've spent years honing my skills in creating and maintaining platforms that enable businesses to deliver their products and services effectively. ",-1),Q={class:"hero-experience-box column q-pa-sm q-mb-lg"},T={class:"hero-experience-row row no-wrap items-center q-mb-sm"},B=e("p",{class:"q-pl-md q-ma-none"}," More than +4 Years in Freelancing, Programming ",-1),D={class:"hero-experience-row row no-wrap items-center"},K=e("p",{class:"q-pl-md q-ma-none"}," More than +4 Years in IT/DevOps ",-1),z={class:"hero-tags"},W=e("h3",{class:"font-heading text-primary q-ma-none q-mb-md"}," # Tags ",-1),F={class:"tags-container"},N=e("span",null,"...",-1),G=e("br",null,null,-1),J=e("div",{class:"hero-vector"},null,-1);function L(d,_,m,u,i,c){return n(),o("div",I,[e("div",M,[e("div",P,[A,E,H,e("div",Q,[e("div",T,[s(r,{size:"2em",name:"img:/icons/star-icon.svg"}),B]),e("div",D,[s(r,{size:"2em",name:"img:/icons/star-icon.svg"}),K])]),e("div",z,[W,e("div",F,[(n(!0),o(v,null,f(i.tags.slice(0,c.tagsCount),t=>(n(),b(x,{key:t,class:"",outline:"",square:"",color:"accent","text-color":"white"},{default:p(()=>[h("#"+g(t),1)]),_:2},1024))),128)),c.tagsCount==10?(n(),b(x,{key:0,class:"",outline:"",square:"",color:"accent","text-color":"white"},{default:p(()=>[N,s(j,{anchor:"top right",class:"bg-dark",offset:[10,30]},{default:p(()=>[(n(!0),o(v,null,f(i.tags.slice(c.tagsCount),t=>(n(),o("span",{key:t},[h(g(t)+" ",1),G]))),128))]),_:1})]),_:1})):k("",!0)])])]),J])])}var V=l(O,[["render",L]]);const Y={name:"PersonalSection",data(){return{cards:[{label:"Education",icon:"img:/icons/educatoin-icon.svg",text:"Faculty of Computer Science"},{label:"Birthday",icon:"img:/icons/birthday-icon.svg",text:"24 Yrs Old"},{label:"Address",icon:"img:/icons/address-icon.svg",text:"Cairo, Egypt"},{label:"Military Status",icon:"img:/icons/military-icon.svg",text:"Exempted"}]}}},R={class:"personal-section home-section"},U={class:"content-box box-relative"},X=e("h3",{class:"font-heading style-heading style-heading-cyan text-uppercase q-mb-xl"}," Who's Ahmed Salah! ",-1),Z={class:"cards-container row justify-around"},ee={class:"card-title text-uppercase text-center q-mb-lg"},te={class:"card-box"},ne={class:"card-content flex justify-center items-center"},se={class:"card-title text-center q-mt-xl"},oe=e("div",{class:"circle-center-bg-1"},null,-1),ie=e("div",{class:"circle-center-bg-2"},null,-1);function ce(d,_,m,u,i,c){return n(),o("div",R,[e("div",U,[X,e("div",Z,[(n(!0),o(v,null,f(i.cards,t=>(n(),o("div",{key:t.label,class:"card"},[e("div",ee,g(t.label),1),e("div",te,[e("div",ne,[s(r,{size:"85px",name:t.icon},null,8,["name"])])]),e("div",se,g(t.text),1)]))),128))])]),oe,ie])}var ae=l(Y,[["render",ce]]);const re={name:"ObjectiveSection"},le={class:"objective-section home-section"},de={class:"content-box"},_e=e("h3",{class:"font-heading style-heading style-heading-yellow text-uppercase q-mb-xl"}," Objective ",-1),me={class:"objective-text box-relative q-mb-xl"},ue={class:"quotes-top-left"},pe=e("p",{class:"objective-paragraph text-justify q-mb-lg"},"T-shaped DevOps Engineer, CKA certified with 4+ years of hands-on experience in the Infrastructure/DevOps field, coming from a Software Engineering background, I have successfully collaborated with clients globally to deliver cutting-edge solutions. Computer Science graduate passionate about designing and implementing robust, scalable, and efficient software systems, open to relocation for new opportunities and experiences.",-1),he=e("p",{class:"objective-paragraph text-justify"},"I have successfully contributed to 50+ large-scale, standard-scale, and confidential projects focusing on Platforming, Microservices, and DevOps across diverse industries, including Oil and Gas, Governments, FinTech, and Insurance. My extensive experience includes collaborations with major enterprises such as Armco, Network International, Mashreq Bank, Credit Agricole Bank, and Saudi Government entities including GOSI, MOC, and MOMRA, ...etc.",-1),ge={class:"quotes-bottom-right"};function ve(d,_,m,u,i,c){return n(),o("div",le,[e("div",de,[_e,e("div",me,[e("div",ue,[s(r,{size:"2em",name:"img:/icons/quotes-icon.svg"})]),pe,he,e("div",ge,[s(r,{size:"2em",name:"img:/icons/quotes-icon.svg"})])])])])}var fe=l(re,[["render",ve]]);const be={name:"KnowledgeSection"},xe={class:"knowledge-section home-section"},ye=e("div",{class:"content-box box-relative"},[e("h3",{class:"font-heading style-heading style-heading-cyan text-uppercase q-mb-xl"}," Technical knowledge "),e("div",{class:"avatar-skills-illustration-bg"})],-1),$e=[ye];function Se(d,_,m,u,i,c){return n(),o("div",xe,$e)}var we=l(be,[["render",Se]]);const qe={name:"HomePage",components:{HeroSection:V,PersonalSection:ae,ObjectiveSection:fe,KnowledgeSection:we,JumpSection:C},mounted(){document.querySelector("body").classList.remove("loading")}};function ke(d,_,m,u,i,c){const t=a("HeroSection"),y=a("PersonalSection"),$=a("ObjectiveSection"),S=a("KnowledgeSection"),w=a("JumpSection");return n(),b(q,null,{default:p(()=>[s(t),s(y),s($),s(S),s(w,{title:"Work Experience",caption:"Check My Work Experience",page:"WorkExperience"})]),_:1})}var Ee=l(qe,[["render",ke]]);export{Ee as default};