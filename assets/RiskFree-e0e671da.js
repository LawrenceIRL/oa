import{h as y,N as _}from"./style-f384abad.js";import{_ as k,o as c,c as f,a as s,t as l,n as g,r as m,d as h,w as r,v as A,f as u,g as B,b as v,h as R,T as S}from"./index-6c48d27a.js";const U={name:"CardRiskFree",mixins:[y],props:{play:Object}},C={class:"card risk-free"},$={class:"util"},N=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[s("path",{fill:"currentColor",d:"M352 320c-25.6 0-48.9 10-66.1 26.4l-98.3-61.5c5.9-18.8 5.9-39.1 0-57.8l98.3-61.5C303.1 182 326.4 192 352 192c53 0 96-43 96-96S405 0 352 0s-96 43-96 96c0 9.8 1.5 19.6 4.4 28.9l-98.3 61.5C144.9 170 121.6 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.6 0 48.9-10 66.1-26.4l98.3 61.5c-2.9 9.4-4.4 19.1-4.4 28.9 0 53 43 96 96 96s96-43 96-96-43-96-96-96zm0-272c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM96 304c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm256 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"})],-1),w=[N],x={key:0,class:"card-body"},F=s("p",null,"Place risk-free bet on positive odds and hedge on negative",-1),D=[F],V={key:1,class:"card-body"},L={class:"flex split"},K={class:"amount"},M={class:"number"},Q=s("small",null,"risk-free",-1),z={class:"amount"},I={class:"number"},P=s("small",null,"stake",-1),T={class:"flex-center mt-15 mb-25"},q={class:"amount"},O={class:"number sunk color-orange"},E=s("small",null,"sunk",-1),j={class:"flex split card-bottom flex-bottom"},G={class:"amount"},H={class:"number color-green"},J=s("span",{class:"or"},"or",-1),W={class:"amount"},X={class:"number color-red small"},Y={class:"number color-blue small mt-10"},Z={class:"number color-green mt-10"},ss=s("small",null,"after conversion",-1);function ts(e,t,o,a,i,d){return c(),f("div",C,[s("div",{class:g([{show:e.copyConfirmation},"copy-confirmation flex"])},l(e.copyConfirmation),3),s("div",$,[s("button",{onClick:t[0]||(t[0]=p=>e.copyToClipboard("shareLink")),class:"ml-10 copy-to-clipboard"},w)]),s("h2",null,l(o.play.safe?"Safe":"Risky"),1),o.play.safe&&o.play.oddsB>0?(c(),f("div",x,D)):(c(),f("div",V,[s("div",L,[s("div",K,[s("label",null,l(this.$parent.labelA)+" ("+l(this.play.oddsA)+")",1),s("div",M,l(e.formatUSD(o.play.stakeA)),1),Q]),s("div",z,[s("label",null,l(this.$parent.labelB)+" ("+l(this.play.oddsB)+")",1),s("div",I,l(e.formatUSD(o.play.stakeB)),1),P])]),s("div",T,[s("div",q,[s("div",O,l(e.formatUSD(Number(o.play.stakeA)+Number(o.play.stakeB))),1),E])]),s("div",j,[s("div",G,[s("div",H,l(e.formatUSD(o.play.profitA)),1),s("small",null,l(e.formatUSD(o.play.payoutA))+" payout",1)]),J,s("div",W,[s("div",X,l(e.formatUSD(o.play.profitB)),1),s("small",null,l(e.formatUSD(o.play.payoutB))+" payout",1),s("div",Y,"+"+l(e.formatUSD(o.play.conversion)),1),s("small",null,l(o.play.conversionRate)+"% conversion",1),s("div",Z,l(e.formatUSD(o.play.profitAfterConversion)),1),ss])])]))])}const es=k(U,[["render",ts]]),os={name:"RiskFree",mixins:[y],components:{CardRiskFree:es,Navigation:_},data(){return{viewingBookmark:!1,stakeA:"",oddsA:"",oddsB:"",loading:!1,freshInput:!0,hasSearched:!1,rfbSafe:!1,rfbRisky:!1,conversionRate:75}},created(){this.calcFromUrl()},computed:{},methods:{calcFromUrl(){const e=this.getQueryString("oddsa"),t=this.getQueryString("booka"),o=this.getQueryString("bookb"),a=this.getQueryString("stakea"),i=this.getQueryString("oddsb"),d=this.getQueryString("cr");this.oddsA=e,this.stakeA=a,this.oddsB=i,d&&(this.conversionRate=d),t&&(this.labelA=decodeURIComponent(t)),o&&(this.labelB=decodeURIComponent(o)),this.calculate()},calculate(){!this.oddsA||!this.stakeA||!this.oddsB||(this.calculateRisky(),this.calculateSafe())},calculateRisky(){const e=Number(this.stakeA*(this.conversionRate/100)),t=this.getPayout(this.oddsA,this.stakeA),o=t-this.stakeA,a=Number(this.getPayout(this.oddsB,o)),i=a-o-this.stakeA;this.rfbRisky={safe:!1,stakeA:this.stakeA,oddsA:this.oddsA,payoutA:t,profitA:0,stakeB:o,oddsB:this.oddsB,payoutB:a,profitB:Number(i.toFixed(2)),conversion:e,profitAfterConversion:Number((i+e).toFixed(2)),conversionRate:this.conversionRate}},calculateSafe(){const e=Number(this.stakeA*(this.conversionRate/100)),t=this.getPayout(Number(this.oddsA),Number(this.stakeA)),o=this.oddsB*-1/100;let a=Number(((t-e)/(1+1/o)).toFixed(2));this.round&&(a=Math.round(a));const i=Number(this.getPayout(this.oddsB,a)),d=Number(i-this.stakeA-a);this.rfbSafe={safe:!0,stakeA:this.stakeA,oddsA:this.oddsA,payoutA:t,profitA:t-this.stakeA-a,stakeB:a,oddsB:this.oddsB,payoutB:i,profitB:d,conversion:e,profitAfterConversion:Number((d+e).toFixed(2)),conversionRate:this.conversionRate}},editLabel(e){const t=`isEditingLabel${e}`,o=`labelInput${e}`;this[t]=!0,this.$nextTick(()=>{this.$refs[o].focus()})}},watch:{round(){this.freshInput=!0,this.calculate()}}},ns={class:"page legacy risk-free"},is=["value"],ls={class:"settings"},as=s("label",{for:"",style:{display:"block"}},"Rounding",-1),ds={class:"toggle toggle-round"},rs=s("label",{for:"round"},null,-1),us=s("div",{class:"knob"},null,-1),cs={class:"field mt-5"},fs=s("label",{for:""},"Conversion %",-1),hs={class:"book"},ps={class:"field-wrap flex-center"},bs={class:"field"},ms=s("label",{for:"",class:"color-rfb"},"Risk-free stake",-1),vs={class:"field"},ys=s("label",{for:""},"Odds",-1),ks={class:"book"},_s={class:"field-wrap flex-center"},gs={class:"field"},As=s("label",{for:""},"Odds",-1),Bs=s("div",{class:"flex-center button-wrap"},[s("button",{class:"btn btn-calculate",type:"submit",tabindex:"6",name:"button"},"Calculate hedge")],-1),Rs={key:0,class:"loading flex-center"},Ss=s("div",{class:"spinner"},null,-1),Us=[Ss],Cs={class:"card-section alt"},$s={key:0,class:"card-wrap"};function Ns(e,t,o,a,i,d){const p=m("Navigation"),b=m("CardRiskFree");return c(),f("div",ns,[h(p),s("input",{id:"shareLink",class:"copy-input",type:"text",value:e.shareLink},null,8,is),s("form",{onSubmit:t[15]||(t[15]=B((...n)=>d.calculate&&d.calculate(...n),["prevent"]))},[s("div",ls,[s("div",null,[as,s("div",ds,[r(s("input",{id:"round","onUpdate:modelValue":t[0]||(t[0]=n=>e.round=n),type:"checkbox",value:"true"},null,512),[[A,e.round]]),rs,us])]),s("div",cs,[fs,r(s("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=n=>i.conversionRate=n),onKeyup:t[2]||(t[2]=n=>e.onKeyUp("cr"))},null,544),[[u,i.conversionRate]])])]),s("div",hs,[r(s("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=n=>e.labelA=n),class:"label-input",tabindex:"1",onFocus:t[4]||(t[4]=n=>e.editingLabel=!0),onBlur:t[5]||(t[5]=n=>e.editingLabel=!1)},null,544),[[u,e.labelA]]),s("div",ps,[s("div",bs,[ms,r(s("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=n=>i.stakeA=n),tabindex:"3",required:"",onKeyup:t[7]||(t[7]=n=>e.onKeyUp("xa"))},null,544),[[u,i.stakeA]])]),s("div",vs,[ys,r(s("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=n=>i.oddsA=n),tabindex:"4",required:"",onKeyup:t[9]||(t[9]=n=>e.onKeyUp("oa"))},null,544),[[u,i.oddsA]])])])]),s("div",ks,[r(s("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=n=>e.labelB=n),class:"label-input",tabindex:"2",onFocus:t[11]||(t[11]=n=>e.editingLabel=!0),onBlur:t[12]||(t[12]=n=>e.editingLabel=!1)},null,544),[[u,e.labelB]]),s("div",_s,[s("div",gs,[As,r(s("input",{type:"text","onUpdate:modelValue":t[13]||(t[13]=n=>i.oddsB=n),tabindex:"5",required:"",onKeyup:t[14]||(t[14]=n=>e.onKeyUp("ob"))},null,544),[[u,i.oddsB]])])])]),Bs],32),i.loading?(c(),f("section",Rs,Us)):v("",!0),s("section",Cs,[h(S,null,{default:R(()=>[i.rfbSafe&&i.rfbRisky?(c(),f("div",$s,[h(b,{play:i.rfbRisky},null,8,["play"]),h(b,{play:i.rfbSafe},null,8,["play"])])):v("",!0)]),_:1})])])}const Fs=k(os,[["render",Ns]]);export{Fs as default};
