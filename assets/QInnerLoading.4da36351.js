import{h as v,u as h,v as p,k as u,l as a,T as x,q as w,ao as S}from"./index.858471a5.js";import{u as C,b as B}from"./use-tick.ee1de887.js";let s,l=0;const t=new Array(256);for(let e=0;e<256;e++)t[e]=(e+256).toString(16).substring(1);const I=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return n=>{const r=new Uint8Array(n);return e.getRandomValues(r),r}}return n=>{const r=[];for(let o=n;o>0;o--)r.push(Math.floor(Math.random()*256));return r}})(),d=4096;function E(){(s===void 0||l+16>d)&&(l=0,s=I(d));const e=Array.prototype.slice.call(s,l,l+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,t[e[0]]+t[e[1]]+t[e[2]]+t[e[3]]+"-"+t[e[4]]+t[e[5]]+"-"+t[e[6]]+t[e[7]]+"-"+t[e[8]]+t[e[9]]+"-"+t[e[10]]+t[e[11]]+t[e[12]]+t[e[13]]+t[e[14]]+t[e[15]]}let k=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const n=document.createElement("div");Object.assign(n.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(n),e.scrollLeft=-1e3,k=e.scrollLeft>=0,e.remove()}var L=v({name:"QInnerLoading",props:{...h,...C,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:n}){const r=w(),o=p(e,r.proxy.$q),{transitionProps:c,transitionStyle:f}=B(e),y=u(()=>"q-inner-loading absolute-full column flex-center"+(o.value===!0?" q-inner-loading--dark":"")),b=u(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function g(){const i=[a(S,{size:e.size,color:e.color})];return e.label!==void 0&&i.push(a("div",{class:b.value,style:e.labelStyle},[e.label])),i}function m(){return e.showing===!0?a("div",{class:y.value,style:f.value},n.default!==void 0?n.default():g()):null}return()=>a(x,c.value,m)}});export{L as Q,k as r,E as u};
