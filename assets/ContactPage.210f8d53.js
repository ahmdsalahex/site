import{_ as p,g as x,o as s,c as i,b as a,a as e,Q as n,e as m,t as c,w as _,F as h,r as f}from"./index.858471a5.js";import{Q as u}from"./QTooltip.cab79163.js";import{P as g}from"./PageHeader.96797e9e.js";import"./position-engine.fa46eb0d.js";import"./use-tick.ee1de887.js";const v={name:"ContactPage",components:{PageHeader:g},data(){return{email:"ahmdsalah.me@gmail.com",socialLinks:[{text:"linkedin.com/in/ahmdsalah",icon:"img:/icons/linkedin.svg",link:"https://linkedin.com/in/ahmdsalah"}],showEmailTooltip:!1,textEmailTooltip:"Copy E-Mail"}},methods:{copyMail(){navigator.clipboard.writeText(this.email),this.showEmailTooltip=!0,this.textEmailTooltip="Copied!",setTimeout(()=>{this.showEmailTooltip=!1,this.textEmailTooltip="Copy E-Mail"},700)}},mounted(){document.querySelector("body").classList.remove("loading")}},y={class:"contact-page"},b={class:"contanct-section"},w={class:"content-box flex flex-center"},E={class:"contanct-box box-relative q-mx-xl q-my-xl"},T=e("div",{class:"yellow-label a-box-shadow"}," Email: ",-1),k={class:"contact-text-info flex flex-center q-mt-xl q-mb-xl"},C=e("div",{class:"yellow-label a-box-shadow"}," Social Media: ",-1),q={class:"row contact-text-info2 q-mt-xl"},P=["href"];function M(V,l,L,Q,t,r){const d=x("PageHeader");return s(),i("div",y,[a(d,{title:"Contact,Details",image:"contact-banner.jpg"}),e("div",b,[e("div",w,[e("div",E,[T,e("div",k,[a(n,{name:"fa-solid fa-paper-plane",class:"q-mr-xl"}),e("span",{onClick:l[1]||(l[1]=(...o)=>r.copyMail&&r.copyMail(...o)),class:"hover-link"},[m(c(t.email)+" ",1),e("sup",null,[a(n,{size:"3rem",name:"fa-regular fa-copy",class:"q-mr-xl"})]),a(u,{modelValue:t.showEmailTooltip,"onUpdate:modelValue":l[0]||(l[0]=o=>t.showEmailTooltip=o),anchor:"top middle",class:"a-tooltip1 bg-dark",offset:[10,30]},{default:_(()=>[m(c(t.textEmailTooltip),1)]),_:1},8,["modelValue"])])]),C,e("div",q,[(s(!0),i(h,null,f(t.socialLinks,o=>(s(),i("p",{key:o.text,class:"col-12 flex flex-center"},[a(n,{size:"2em",name:o.icon,class:"q-mr-md"},null,8,["name"]),e("a",{target:"_blank",href:o.link,class:"hover-link"},[e("span",null,c(o.text),1)],8,P)]))),128))])])])])])}var D=p(v,[["render",M]]);export{D as default};
