"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[446],{446:(e,s,l)=>{l.r(s),l.d(s,{default:()=>x});var a=l(821),t=l(931),i=l(575),n=l(583),r=l(119),d={class:"min-h-screen mx-auto text-neutral-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 max-w-xl"},m=(0,a._)("label",{for:"email",class:"block text-sm font-medium leading-5"}," Email address ",-1),o={class:"mt-1 rounded-md shadow-sm"},u={class:"mt-6"},c=(0,a._)("label",{for:"password",class:"block text-sm font-medium leading-5"}," Password ",-1),p={class:"mt-1 rounded-md shadow-sm"},f={class:"mt-6"},w={class:"flex justify-between items-center"},_={key:0,class:"text-red-600"};const x={__name:"LoginView",setup:function(e){var s=(0,a.qj)({email:"admin@mailerlite.com",password:"admin"}),l=(0,n.tN)(),x=(0,i.Jk)(l).errors,b=((0,r.tv)(),function(){l.login(s.email,s.password).catch((function(){}))});return function(e,l){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a.Wm)((0,a.SU)(t.Z),{class:"h-8 mb-8"}),(0,a._)("div",null,[m,(0,a._)("div",o,[(0,a.wy)((0,a._)("input",{id:"email",type:"email","onUpdate:modelValue":l[0]||(l[0]=function(e){return s.email=e}),required:"",class:"form-input w-full"},null,512),[[a.nr,s.email]])])]),(0,a._)("div",u,[c,(0,a._)("div",p,[(0,a.wy)((0,a._)("input",{id:"password",type:"password","onUpdate:modelValue":l[1]||(l[1]=function(e){return s.password=e}),required:"",class:"form-input w-full"},null,512),[[a.nr,s.password]])])]),(0,a._)("div",f,[(0,a._)("div",w,[(0,a._)("button",{type:"submit",onClick:b,class:"btn-primary"},"Login"),(0,a.SU)(x).message?((0,a.wg)(),(0,a.iD)("div",_,(0,a.zw)((0,a.SU)(x).message),1)):(0,a.kq)("",!0)])])])}}}}}]);