"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[446],{446:(e,s,a)=>{a.r(s),a.d(s,{default:()=>_});var l=a(821),t=a(534),n=a(575),i=a(583),d=a(119),r={class:"min-h-screen mx-auto text-neutral-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 max-w-xl"},m=(0,l._)("label",{for:"email",class:"block text-sm font-medium leading-5"}," Email address ",-1),o={class:"mt-1 rounded-md shadow-sm"},u={class:"mt-6"},c=(0,l._)("label",{for:"password",class:"block text-sm font-medium leading-5"}," Password ",-1),p={class:"mt-1 rounded-md shadow-sm"},f={class:"mt-6"},w={class:"flex justify-between items-center"},x={key:0,class:"text-red-600"};const _={__name:"LoginView",setup:function(e){var s=(0,l.qj)({email:"admin@example.com",password:"admin"}),a=(0,i.tN)(),_=(0,n.Jk)(a).errors,b=((0,d.tv)(),function(){a.login(s.email,s.password).catch((function(){}))});return function(e,a){return(0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)((0,l.SU)(t.Z),{class:"h-9 mb-8"}),(0,l._)("div",null,[m,(0,l._)("div",o,[(0,l.wy)((0,l._)("input",{id:"email",type:"email","onUpdate:modelValue":a[0]||(a[0]=function(e){return s.email=e}),required:"",class:"form-input w-full"},null,512),[[l.nr,s.email]])])]),(0,l._)("div",u,[c,(0,l._)("div",p,[(0,l.wy)((0,l._)("input",{id:"password",type:"password","onUpdate:modelValue":a[1]||(a[1]=function(e){return s.password=e}),required:"",class:"form-input w-full"},null,512),[[l.nr,s.password]])])]),(0,l._)("div",f,[(0,l._)("div",w,[(0,l._)("button",{type:"submit",onClick:b,class:"btn-primary"},"Login"),(0,l.SU)(_).message?((0,l.wg)(),(0,l.iD)("div",x,(0,l.zw)((0,l.SU)(_).message),1)):(0,l.kq)("",!0)])])])}}}}}]);