import{p as c,c as r,n as i,u as n,j as e,L as t}from"./index-DIxnD1JS.js";import{b as x}from"./index-gG4Lsbwo.js";import{F as m}from"./index-Ces5SpNx.js";import{I as f}from"./TitleHeader-serYiGmW.js";import{R as p}from"./index-Cn6zzcDW.js";import{G as d}from"./iconBase-CW5Yvc9x.js";import{s as h}from"./index-UhA8VVa1.js";function u(s){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"8",r:"2"},child:[]},{tag:"path",attr:{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"},child:[]}]})(s)}const R=c.memo(()=>{const{userId:s,accessToken:g}=r(i),a=n(),[l,j]=h.useMessage(),o=()=>{console.log("info 작동"),l.open({type:"info",content:"로그인이 필요한 서비스입니다.",style:{marginTop:"20vh"}})};return e.jsxs("div",{className:"flex max-w-3xl w-full h-[100px] sticky bottom-0 left-0 bg-white z-50 shadow-[0px_-4px_8px_0px_rgba(99,99,99,0.05)]",children:[e.jsxs(t,{to:"/search/contents",className:"text-slate-400 flex flex-1 flex-col justify-center items-center gap-1.5",children:[e.jsx(m,{className:"text-4xl"}),"검색"]}),e.jsxs("button",{type:"button",onClick:()=>{s===0?o():a("/search/location")},className:"text-slate-400 flex flex-1 flex-col justify-center items-center gap-1.5",children:[e.jsx(u,{className:"text-4xl"}),"일정"]}),e.jsxs(t,{to:"/",className:"bg-primary text-white w-[102px] h-[102px] rounded-full flex flex-col justify-center items-center gap-1.5 relative bottom-5",children:[e.jsx(x,{className:"text-4xl"}),"홈"]}),e.jsxs(t,{to:"/scheduleboard/index",className:"text-slate-400 flex flex-1 flex-col justify-center items-center gap-1.5",children:[e.jsx(f,{className:"text-4xl"}),"여행기"]}),e.jsxs(t,{to:"/user",className:"text-slate-400 flex flex-1 flex-col justify-center items-center gap-1.5",children:[e.jsx(p,{className:"text-4xl"}),"마이페이지"]})]})});export{R as D};
