import{l as P,r as a,x as Z,R,g as A,j as t,B as G,a as J,c as Q}from"./index-YXlYzo5D.js";import{d as S,a as U,b as V,m as X,c as Y,e as ee,F as te}from"./match-C9ZeGoa4.js";import{K as se,u as D,b as E,c as I,d as le,e as ne}from"./MarkerClusterer-gnOPwhky.js";import"./jwt-B7E1_7hB.js";import{t as K}from"./tripAtom-GNgWvRM8.js";import{a as z}from"./axios-upsvKRUO.js";import{I as ae}from"./index-21tJCDdo.js";import{a as oe}from"./pic-Bp3CpqNF.js";import{a as re}from"./index-CkEQ-2Ql.js";import{R as ce}from"./index-CSA0D24L.js";const ie=P.forwardRef(function(b,x){let{position:p,children:m,clickable:f,xAnchor:M,yAnchor:g,zIndex:N,onCreate:y}=b;const i=a.useContext(se),d=D("CustomOverlayMap"),h=a.useMemo(()=>new kakao.maps.LatLng(p.lat,p.lng),[p.lat,p.lng]),l=a.useMemo(()=>{const j=document.createElement("div");return j.style.display="none",new kakao.maps.CustomOverlay({clickable:f,xAnchor:M,yAnchor:g,zIndex:N,position:h,content:j})},[f,M,g]),r=a.useMemo(()=>l.getContent(),[l]);return a.useImperativeHandle(x,()=>l,[l]),a.useLayoutEffect(()=>{if(d)return i?i.addMarker(l,!0):l.setMap(d),()=>{i?i.removeMarker(l,!0):l.setMap(null)}},[d,i,l]),a.useLayoutEffect(()=>{y&&y(l)},[l,y]),E(l,"setPosition",h),E(l,"setZIndex",N),r.parentElement&&Z.createPortal(m,r.parentElement)}),xe=P.forwardRef(function(b,x){let{path:p,endArrow:m,onClick:f,onMousedown:M,onMousemove:g,onMouseout:N,onMouseover:y,onCreate:i,strokeColor:d,strokeOpacity:h,strokeStyle:l,strokeWeight:r,zIndex:j}=b;const w=D("Polyline"),C=a.useMemo(()=>p.every(c=>c instanceof Array)?p.map(c=>c.map(u=>new kakao.maps.LatLng(u.lat,u.lng))):p.map(c=>new kakao.maps.LatLng(c.lat,c.lng)),[p]),n=a.useMemo(()=>new kakao.maps.Polyline({path:C,endArrow:m,strokeColor:d,strokeOpacity:h,strokeStyle:l,strokeWeight:r,zIndex:j}),[]);return a.useImperativeHandle(x,()=>n,[n]),a.useLayoutEffect(()=>(n.setMap(w),()=>n.setMap(null)),[w,n]),a.useLayoutEffect(()=>{i&&i(n)},[n,i]),a.useLayoutEffect(()=>{n.setOptions({endArrow:m,strokeColor:d,strokeOpacity:h,strokeStyle:l,strokeWeight:r})},[n,m,d,h,l,r]),E(n,"setPath",C),E(n,"setZIndex",j),I(n,"mouseover",y),I(n,"mouseout",N),I(n,"mousemove",g),I(n,"mousedown",M),I(n,"click",f),null}),pe=({setMemoModal:s,tripId:b,data:x,getTrip:p,setTripData:m})=>{const[f,M]=R(K),g=A("accessToken"),[N,y]=a.useState(""),i=()=>{s(!1)},d=r=>{r.stopPropagation()},h=r=>{y(r.target.value)},l=async r=>{var C;const j=((C=x==null?void 0:x.schedules)==null?void 0:C.length)>0?x.schedules[x.schedules.length-1].seq:0,w={trip_id:f.nowTripId,day:x.day,seq:j+1,content:r};console.log("메모 데이터",w);try{(await z.post("/api/memo/post",w,{headers:{Authorization:`Bearer ${g}`}})).data.code==="200 성공"&&p()}catch(n){console.log("메모 추가",n)}};return t.jsx("div",{className:`fixed top-0 left-[50%] translate-x-[-50%] z-10\r
                max-w-3xl w-full mx-auto h-full\r
                flex items-center justify-center\r
                bg-[rgba(0,0,0,0.5)]`,onClick:()=>{i()},children:t.jsxs("div",{className:`bg-white w-[630px] \r
                    rounded-2xl px-[60px] py-[55px]\r
                    flex items-center justify-center`,onClick:d,children:[t.jsx(ae,{placeholder:"메모를 입력해주세요.",variant:"borderless",allowClear:!0,onChange:r=>{h(r)}}),t.jsx(G,{type:"Outline",onClick:()=>{l(N),s(!1)},className:"text-slate-600",children:"확인"})]})})},Ne=({data:s,showMap:b=!0,newTrip:x=!1,startAt:p,tripId:m,getTrip:f,setTripData:M,index:g,date:N,readOnly:y=!1})=>{const[i,d]=R(K),h=A("accessToken");a.useEffect(()=>{},[i]);const l=J(),r=()=>{l(`/search/trip?tripId=${m}`),console.log(s)},[j,w]=a.useState(!1);a.useState({lat:35.868475,lng:128.593743}),a.useState();const[C,n]=a.useState(!1);a.useEffect(()=>{},[C]);const c=(s==null?void 0:s.schedules)||[],u=c.filter(e=>e.scheOrMemo==="SCHE"),L=u==null?void 0:u.map((e,o)=>({title:e.strfTitle,latlng:{lat:e.lat,lng:e.lng}})),B=[L.map(e=>e.latlng)],q=e=>{if(!e.length)return{lat:37.5665,lng:126.978};const o=e.filter(k=>k.latlng&&parseFloat(k.latlng.lat)!=null&&k.latlng.lng!=null);if(!o.length)return{lat:37.5665,lng:126.978};const v=o.reduce((k,O)=>(k.lat+=parseFloat(O.latlng.lat),k.lng+=parseFloat(O.latlng.lng),k),{lat:0,lng:0});return{lat:v.lat/o.length,lng:v.lng/o.length}},$=c.filter(e=>e.distance!==null).map(e=>e.distance),T=$.length>0?$.reduce((e,o)=>e+o,0)/$.length:0;console.log("평균 거리:",T);const F=e=>e>2e4?10:e>1e4?9:e>5e3?8:5;if(a.useEffect(()=>{const e=document.createElement("script");return e.async=!0,e.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=1227efa5c91b2ace09ab915e643a15c9&autoload=false",e.addEventListener("load",()=>{window.kakao.maps.load(()=>{w(!0)})}),document.head.appendChild(e),()=>{document.head.removeChild(e)}},[]),!j)return t.jsx("div",{children:"지도를 불러오는 중입니다..."});const H=()=>{var v;const e=u[u.length-1],o=((v=c[c.length-1])==null?void 0:v.seq)||0;console.log("lastSche",e),console.log("lastSeq",o),d({...i,lastSeq:o,nowTripId:m,day:s.day,prevScheName:u.length>0?e.strfTitle:"",prevSchelat:u.length>0?e.lat:"",prevSchelng:u.length>0?e.lng:""}),r()},W=async e=>{console.log(e);try{const o=await z.delete(`/api/memo/delete?memoId=${e.scheduleMemoId}`,{headers:{Authorization:`Bearer ${h}`}});console.log(o.data),o.data.code==="200 성공"&&f()}catch(o){console.log(o)}},_=e=>{console.log(e),l(`/contents/index?strfId=${e.strfId}`)};return t.jsxs("div",{className:"flex flex-col gap-[30px]",children:[t.jsx("div",{className:"h-[10px] bg-slate-100"}),b?t.jsx("div",{className:"h-[292px] px-[32px]",children:t.jsxs(le,{center:q(L),style:{width:"100%",height:"100%",borderRadius:"8px"},level:F(T),children:[L.map((e,o)=>t.jsx(ie,{position:e.latlng,children:t.jsxs("div",{className:`label text-white w-[20px] h-[20px]
                  flex items-center justify-center rounded-full
                  
                  ${S(s==null?void 0:s.day)}`,children:[t.jsx("span",{className:"center font-medium text-white text-[12px]",children:o+1})," "]})},`${e.title}-${o}`)),t.jsx(xe,{path:B,strokeWeight:3,strokeColor:U(s==null?void 0:s.day),strokeOpacity:.7,strokeStyle:"solid"})]})}):null,t.jsxs("div",{className:"flex flex-col gap-[20px] px-[32px]",children:[t.jsxs("div",{className:"flex gap-[10px] items-center",children:[t.jsxs("h3",{className:`font-work-sans text-[24px] font-bold ${V(s.day||g+1)} `,children:["Day ",s.day||g+1]}),t.jsx("span",{className:"text-[18px] text-slate-700",children:N}),t.jsx("div",{className:"w-[30px] h-[30px] flex items-center justify-center text-[30px]",children:X(s==null?void 0:s.weather)})]}),t.jsxs("ul",{className:"relative flex flex-col gap-[30px]",children:[c==null?void 0:c.map((e,o)=>{const v=u.findIndex(k=>k.scheduleMemoId===e.scheduleMemoId);return t.jsxs("li",{className:"flex flex-col gap-[30px] justify-center ",children:[e.scheOrMemo==="SCHE"?t.jsxs("div",{className:"flex gap-[30px] items-center cursor-pointer",onClick:()=>{_(e)},children:[t.jsx("div",{className:`w-[30px] h-[30px]
                                  flex items-center justify-center  
                                  rounded-full
                                  text-[16px] text-white font-medium
                                  ${S(s==null?void 0:s.day)}`,children:v!==-1?v+1:"없음"}),t.jsxs("div",{className:"flex gap-[20px] items-center",children:[t.jsx("div",{className:"w-[60px] h-[60px] bg-slate-200 rounded-lg overflow-hidden",children:t.jsx("img",{src:`${oe}${e.strfId}/${e.picName}`,alt:"thum",className:"w-full h-full object-cover"})}),t.jsxs("div",{children:[t.jsx("h4",{className:"font-semibold text-[20px] text-slate-700",children:e.strfTitle}),t.jsxs("div",{className:"flex gap-[10px] items-center",children:[t.jsx("p",{className:"text-[14px] text-slate-500",children:Y(e.category)}),t.jsx("div",{className:"flex gap-[10px] items-center",children:t.jsx("div",{className:"flex gap-[5px] items-center",children:t.jsx(ce,{disabled:!0,count:1,value:e.reviewed?1:0,style:{width:"16px",height:"16px",display:"flex",alignItems:"center",justifyContent:"center"}})})})]})]})]})]}):y?null:t.jsxs("div",{className:"flex gap-[30px] items-center",children:[t.jsx("div",{className:"w-[30px] h-[30px] flex items-center justify-center",children:t.jsx("div",{className:`w-[10px] h-[10px] flex items-center justify-center rounded-full  text-[16px] text-white font-medium ${S(s==null?void 0:s.day)}`})}),t.jsxs("div",{className:`flex  gap-[10px] justify-between\r
                  px-[40px] py-[20px] w-full rounded-2xl\r
                  bg-slate-50 `,children:[t.jsxs("div",{className:"flex flex-col gap-[10px]",children:[t.jsxs("p",{className:"flex gap-[5px] text-slate-700",children:[t.jsx(Q,{className:"text-slate-300 text-[18px]"}),e.title]}),t.jsx("p",{className:"text-[14px]",children:e.content})]}),t.jsx("button",{type:"button",onClick:()=>W(e),children:t.jsx(re,{className:"text-slate-500"})})]})]}),e.scheOrMemo==="SCHE"?t.jsxs("div",{className:"flex items-center",children:[t.jsx("div",{className:"w-[30px] h-[30px] flex items-center justify-center",children:t.jsx("div",{className:`w-[10px] h-[10px] flex items-center justify-center rounded-full  text-[16px] text-white font-medium ${S(s==null?void 0:s.day)}`})}),t.jsxs("div",{className:`${e.pathType===null?"h-[38px] flex gap-[10px] items-center px-[10px] bg-slate-50 rounded-2xl cursor-pointer":"h-[38px] flex gap-[10px] items-center px-[10px] bg-white rounded-2xl"}`,onClick:()=>{console.log(e)},children:[t.jsx("div",{className:`${e.pathType===null?"text-slate-600 h-[18px]":"text-slate-400 h-[18px]"}`,children:ee(e.pathType)}),t.jsxs("div",{className:`${e.pathType===null?"text-[14px] text-slate-600 h-[18px]":"text-[14px] text-slate-400 h-[18px]"}`,children:[e.duration,e.pathType>0?"분":""]})]})]}):null]},o)}),t.jsx("div",{className:`border-l border-slate-200\r
                                absolute left-[14px] top-1/2 -translate-y-1/2\r
                                h-[90%] -z-10`})]}),x?t.jsxs("div",{className:"flex gap-[20px] items-center",children:[t.jsxs("button",{type:"button",className:`flex items-center justify-center gap-[10px]\r
              py-[10px] rounded-lg\r
              w-full\r
              border border-slate-300\r
              text-slate-700 text-[22px] font-medium`,onClick:H,children:[t.jsx(te,{className:"text-slate-400 text-[18px]"}),"일정 추가"]}),t.jsxs("button",{type:"button",className:`flex items-center justify-center gap-[10px]\r
              py-[10px] rounded-lg\r
              w-full\r
              border border-slate-300\r
              text-slate-700 text-[22px] font-medium`,onClick:()=>{n(!0)},children:[t.jsx(ne,{className:"text-slate-400 text-[18px]"}),"메모 추가"]})]}):null]}),C?t.jsx(pe,{setMemoModal:n,tripId:m,data:s,getTrip:f,setTripData:M}):null]})};export{Ne as S};
