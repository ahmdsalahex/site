import{_ as r,o as i,c as l,a as e,e as a,t as s,a5 as d}from"./index.af3adaee.js";const o={name:"PageHeader",props:{title:{type:String,required:!0,default:"Title"},image:{type:String,required:!0}},computed:{bgBannerStyle(){return`background-image: linear-gradient(45deg, #ffeb3b30, #37bece30), url(/banners/${this.image})`}}},c={class:"page-header"},_={class:"content-box row"},g={class:"page-header-title col-md-4 col-xs-12"},u={class:"font-heading"},p=e("br",null,null,-1),h={class:"page-header-banner col-md-8 xs-hidden"};function m(b,f,t,v,y,n){return i(),l("div",c,[e("div",_,[e("div",g,[e("h2",u,[a(s(t.title.split(",")[0]),1),p,a(s(t.title.split(",")[1]),1)])]),e("div",h,[e("div",{class:"banner-image",style:d(n.bgBannerStyle)},null,4)])])])}var S=r(o,[["render",m]]);export{S as P};