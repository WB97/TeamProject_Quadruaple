import{o as O,c as U,k as w,u as N,j as e,m as a,r as o,R as T,g as H,n as M}from"./index-DI0hZm8z.js";import{a as D,b as Y,c as V}from"./index-DwrwPTWB.js";import{F as P}from"./index-BegNZk4I.js";import{H as $,I as A,c as R,d as G,e as C,f as q,B as W,C as J,g as K}from"./TitleHeader-mS6H-Tmw.js";import{R as Q}from"./index-DEV43A_f.js";import"./tripAtom-BRZLLedy.js";import{s as X}from"./index-Csso9VXn.js";import{a as L}from"./axios-upsvKRUO.js";import{S as v,a as y}from"./swiper-react-CYL2VdRo.js";import{a as k,L as Z,P as ee}from"./pic-Bp3CpqNF.js";import{a as S,b,f as se,g as te,h as ae}from"./index-CrZ0FrIh.js";import{R as le}from"./index-DWZDKYvg.js";import{a as re}from"./index-C3OAnkUv.js";import{I as oe}from"./index-BexzeIK6.js";import"./iconBase-CKNMfARQ.js";import"./button-Buf7o645.js";import"./ContextIsolator-DVleuwTK.js";import"./Keyframes-Czc1jmj8.js";import"./context-BkgmL1_r.js";import"./InfoCircleFilled-S7_yNcJH.js";import"./KeyCode-C0fAa5Qv.js";import"./BaseInput-By1OPDiL.js";const xe=O.memo(()=>{const{userId:l,accessToken:s}=U(w),r=N(),[i,x]=X.useMessage(),n=()=>{console.log("info 작동"),i.open({type:"info",content:"로그인이 필요한 서비스입니다.",style:{marginTop:"20vh"}})};return e.jsxs("div",{className:"flex max-w-3xl w-full h-[100px] sticky bottom-0 left-0 bg-white z-50 shadow-[0px_-4px_8px_0px_rgba(99,99,99,0.05)]",children:[e.jsxs(a,{to:"/search/contents",className:"text-slate-400 flex flex-1 flex-col justify-center items-center gap-1.5",children:[e.jsx(P,{className:"text-4xl"}),"검색"]}),e.jsxs("button",{type:"button",onClick:()=>{l===0?n():r("/search/location")},className:"text-slate-400 flex flex-1 flex-col justify-center items-center gap-1.5",children:[e.jsx($,{className:"text-4xl"}),"일정"]}),e.jsxs(a,{to:"/",className:"bg-primary text-white w-[102px] h-[102px] rounded-full flex flex-col justify-center items-center gap-1.5 relative bottom-5",children:[e.jsx(D,{className:"text-4xl"}),"홈"]}),e.jsxs(a,{to:"/scheduleboard/index",className:"text-slate-400 flex flex-1 flex-col justify-center items-center gap-1.5",children:[e.jsx(A,{className:"text-4xl"}),"여행기"]}),e.jsxs(a,{to:"/user",className:"text-slate-400 flex flex-1 flex-col justify-center items-center gap-1.5",children:[e.jsx(Q,{className:"text-4xl"}),"마이페이지"]})]})}),ce=({festivities:l})=>e.jsx("div",{children:e.jsx(v,{slidesPerView:1.5,spaceBetween:16,className:"mySwiper",children:l.map(s=>e.jsxs(y,{className:"h-[600px] relative text-white rounded-tl-[60px] rounded-br-[60px] overflow-hidden after:absolute after:left-0 after:bottom-0 after:w-full after:h-[50%] after:bg-gradient-to-b after:from-transparent after:to-black after:opacity-70",children:[e.jsx("img",{src:`${k}${s.strfId}/${s.strfPic}`,alt:s.festTitle,className:"h-[600px]"}),e.jsxs("div",{className:"absolute bottom-[60px] right-[30px] text-right z-[99]",children:[s.open&&e.jsx("span",{className:"text-xs inline-block bg-secondary3 px-2.5 py-1 rounded-md font-light mb-1.5",children:"개최중"}),e.jsx("h2",{className:"text-3xl font-medium mb-1.5",style:{wordBreak:"auto-phrase"},children:s.festTitle}),e.jsxs("h4",{className:"text-2xl font-medium mb-1.5",children:[s.startAt.replaceAll("-","."),"~",s.endAt.replaceAll("-",".")]}),e.jsx("p",{className:"text-base font-",children:s.locationTitle})]})]},s.strfId))})}),ie=({recent:l,getMainList:s,setFestivities:r,setLocations:i,setRecent:x,setRecommend:n})=>{N();const[d,f]=o.useState("STAY"),m={STAY:"숙소",RESTAUR:"맛집",TOUR:"관광지"},c=l.find(t=>t.category===d),h=async t=>{const j={strfId:t.strfId};console.log("찜하기 데이터:",j);try{const p=await axios.post("/api/wish-list",{...j},{headers:{Authorization:`Bearer ${accessToken}`}});console.log("찜하기",p.data),p.data.code==="200 성공"&&s()}catch(p){console.log("찜하기",p)}};return!l||l.length===0?null:e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold",children:"최근 본 목록"}),e.jsx("div",{children:l.map(t=>e.jsx("button",{onClick:()=>f(t.category),className:`px-5 py-2 border cursor-pointer mr-2.5 my-8 rounded-2xl ${d===t.category?"bg-primary text-white":"bg-white text-slate-500 border-1 border-slate-300"}`,children:m[t.category]},t.category))}),e.jsx("div",{className:" flex flex-wrap ",children:c==null?void 0:c.recent.slice(0,6).map(t=>e.jsxs("div",{className:"w-[50%] flex items-center gap-5 mb-5 cursor-pointer",children:[e.jsxs("div",{className:"w-[164px] h-[164px] rounded-[16px] relative overflow-hidden flex-1",children:[e.jsx("img",{src:`${k}${t.strfId}/${t.strfPic}`,alt:t.strfTitle,className:"w-full h-full object-cover"}),e.jsx("i",{className:"absolute top-2.5 right-2.5 cursor-pointer",onClick:()=>h(item),children:t.wishIn?e.jsx(S,{className:"text-secondary3 text-xl"}):e.jsx(b,{className:"text-white text-xl"})})]}),e.jsxs("div",{className:"flex-1 pr-4",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-700 break-keep",children:t.strfTitle}),e.jsxs("p",{className:"font-medium text-base text-slate-400",children:[t.locationName," · ",m[d]]}),e.jsx("p",{children:e.jsx(le,{disabled:!0,allowHalf:!0,defaultValue:t.averageRating})}),e.jsxs("div",{className:"flex text-slate-400 text-sm align-middle gap-1",children:[t.wishIn?e.jsx(S,{className:"text-secondary3 text-xl"}):e.jsx(b,{className:"text-slate-400 text-xl"}),t.wishCnt]})]})]},t.strfId))})]})},ne=({recommend:l})=>!l||l.length===0?null:e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold mx-[32px]",children:"회원님에게 추천하는 여행지"}),e.jsx(v,{slidesPerView:1,className:"mySwiper relative mt-5 after:bg-slate-100 after:inline-block after:w-full after:h-72 after:absolute after:top-0 after:left-0 ",children:l.map(s=>e.jsxs(y,{className:"!flex align-middle justify-center gap-8 mt-12 px-8",children:[e.jsx("p",{}),e.jsxs("div",{className:"mt-12 w-[50%]",children:[e.jsx("span",{className:"bg-slate-800 text-white py-1 px-3 rounded-2xl font-light text-xs",children:s.locationTitle}),e.jsx("h2",{className:"text-2xl font-medium break-keep",children:s.strfTitle}),e.jsx("p",{className:"text-lg font-normal text-slate-500 break-keep",children:s.explain}),e.jsxs(a,{to:"",className:"text-slate-400 flex align-middle font-light gap-1",children:["자세히보기 ",e.jsx(R,{className:"text-lg"})]})]}),e.jsx("img",{src:`${k}${s.strfId}/${s.strfPic}`,alt:s.strfTitle,className:"w-[400px] h-[300px] rounded-tr-[36px] rounded-bl-[36px]"})]},s.strfId))})]}),de=({locations:l})=>e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-bold",children:["국내 여행지 ",e.jsx("b",{className:"text-secondary3 font-bold",children:"BEST 10"})]}),e.jsx(v,{slidesPerView:4,spaceBetween:16,className:"mySwiper ",children:l.map((s,r)=>e.jsxs(y,{className:"relative pt-[40px]",children:[e.jsx("p",{className:"absolute z-[999] bg-secondary3 text-white w-[36px] h-[36px] leading-[36px] rounded-full left-1/2 top-[24px] -translate-x-1/2 text-center inline-block text-lg",children:r+1}),e.jsxs("div",{className:"relative bg-black rounded-2xl overflow-hidden h-[226px]",children:[e.jsx("img",{src:`${Z}${s.locationPic}`,alt:s.locationTitle,className:"opacity-70 h-full object-cover"}),e.jsxs("div",{className:"absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center text-white text-base",children:[e.jsx("p",{children:"대한민국"}),e.jsx("h3",{className:"font-semibold text-2xl mt-1",children:s.locationTitle})]})]})]},s.locationId))})]}),me=({isOpen:l,onClose:s})=>{const[r,i]=T(w),[x,n]=o.useState([]),d=H("accessToken"),f=async()=>{try{const t=await L.get("/api/user/userInfo",{headers:{Authorization:`Bearer ${d}`}});n(t.data.data)}catch(t){console.log(t)}};o.useEffect(()=>{r.accessToken&&f()},[]);const m=N(),c=()=>{i({userId:0,accessToken:""}),M("accessToken"),m("/signin")},h=()=>{m("user/useredit",{state:x})};return e.jsxs("div",{className:`overflow-hidden max-w-3xl w-full fixed left-1/2 -translate-x-1/2 inset-0 z-[99] flex justify-end transition-opacity duration-300 ${l?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,onClick:()=>s(),children:[e.jsx("div",{className:"absolute inset-0 bg-black opacity-50 ",onClick:()=>s()}),e.jsxs("div",{className:`z-[999] absolute top-0 right-0 w-[70%]  h-screen bg-white overflow-y-auto shadow-xl transition-transform duration-300 ease-in-out ${l?"translate-x-0":" translate-x-full"}`,onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"px-8 py-8",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(G,{onClick:()=>s(),className:"text-3xl cursor-pointer text-slate-700"}),e.jsxs("h1",{className:"flex gap-5",children:[e.jsx(C,{className:"text-3xl text-slate-700 cursor-pointer"}),e.jsx(se,{className:"text-3xl text-slate-700 cursor-pointer",onClick:()=>h()})]})]}),e.jsxs("div",{children:[r.accessToken?e.jsxs("div",{className:"",children:[e.jsx("div",{className:"mx-auto w-32 h-32 rounded-full overflow-hidden",children:e.jsx("img",{src:x.profilePic?`${ee}${r==null?void 0:r.userId}/${x==null?void 0:x.profilePic}`:"/images/user.png",alt:"User-Profile",className:"w-full h-full object-cover"})}),e.jsx("h1",{className:"text-3xl font-bold text-slate-700 mt-4 text-center",children:x.name}),e.jsxs("div",{className:"flex items-center justify-between bg-slate-100 mt-5 px-5 h-20 rounded-[36px] relative",children:[e.jsx("span",{className:"absolute top-[-16px] left-1/2 -translate-x-1/2 block w-0 h-0 border-transparent border-solid border-l-[12px] border-r-[12px] border-b-[20px] border-b-slate-100 z-[1]"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:"https://picsum.photos/200",alt:"",className:"w-8 h-8 rounded-full mr-3"}),e.jsx("span",{className:"text-xl text-slate-700 font-normal",children:"제주도 여행"})]}),e.jsx("span",{className:"text-xl text-primary font-medium",children:"D-2"})]})]}):e.jsxs(a,{to:"/signin",className:"text-2xl font-bold text-slate-700 flex items-center justify-between py-5",children:[e.jsx("span",{children:"로그인 해주세요"}),e.jsx(R,{className:"text-3xl"})]}),e.jsxs("div",{className:"flex mt-10",children:[e.jsxs(a,{to:"/user/usertrips",className:"w-1/4 text-center text-lg text-slate-500 font-normal relative after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after: after:bg-slate-200 after:w-[1px] after:h-14",children:[e.jsx($,{className:"w-full text-4xl text-slate-700 mb-2"}),"여행"]}),e.jsxs(a,{to:"/user/userwishlist",className:"w-1/4 text-center text-lg text-slate-500 font-normal relative after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after: after:bg-slate-200 after:w-[1px] after:h-14",children:[e.jsx(b,{className:"w-full text-4xl text-slate-700 mb-2"}),"찜하기"]}),e.jsxs(a,{to:"",className:"w-1/4 text-center text-lg text-slate-500 font-normal relative after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after: after:bg-slate-200 after:w-[1px] after:h-14",children:[e.jsx(te,{className:"w-full text-4xl text-slate-700 mb-2"}),"리뷰"]}),e.jsxs(a,{to:"",className:"w-1/4 text-center text-lg text-slate-500 font-normal",children:[e.jsx(A,{className:"w-full text-4xl text-slate-700 mb-2"}),"여행기"]})]})]})]}),e.jsx("p",{className:"w-full h-[10px] bg-slate-100"}),e.jsxs("div",{className:"w-full px-8 py-8",children:[e.jsxs(a,{to:"/user/userbooking",className:"flex items-center py-5 text-2xl text-slate-700 font-normal",children:[e.jsx(re,{className:"text-4xl text-slate-400 mr-4"}),"내예약"]}),e.jsxs(a,{to:"",className:"flex items-center py-5 text-2xl text-slate-700 font-normal",children:[e.jsx(q,{className:"text-4xl text-slate-400 mr-4"}),"쿠폰함",e.jsx("span",{className:"ml-auto w-9 h-6 rounded-2xl text-sm text-center leading-[1.45rem] text-primary3 bg-[#A5EEFE]/50",children:"10"})]}),e.jsxs(a,{to:"",className:"flex items-center py-5 text-2xl text-slate-700 font-normal",children:[e.jsx(Y,{className:"text-4xl text-slate-400 mr-4"}),"지역 상품권"]}),e.jsxs(a,{to:"/user/recentlist",className:"flex items-center py-5 text-2xl text-slate-700 font-normal",children:[e.jsx(W,{className:"text-4xl text-slate-400 mr-4"}),"최근 본 목록"]})]}),e.jsx("p",{className:"w-full h-[10px] bg-slate-100"}),e.jsxs("div",{className:"px-8 pb-8",children:[e.jsx(a,{to:"",className:"flex py-5 text-lg text-slate-500",children:"공지사항"}),e.jsx(a,{to:"",className:"flex text-lg text-slate-500 py-5",children:"자주 묻는 질문"}),e.jsx(a,{to:"",className:"flex  text-lg text-slate-500 py-5",children:"고객센터"}),r.accessToken&&e.jsx("button",{onClick:()=>c(),className:"w-full h-[60px] rounded-lg border border-slate-300 text-2xl font-bold text-slate-500",children:"로그아웃"})]})]})]})},Ee=()=>{const[l,s]=o.useState([]),[r,i]=o.useState([]),[x,n]=o.useState([]),[d,f]=o.useState([]),[m,c]=o.useState(!1),[h,t]=o.useState(0),j=async()=>{try{const g=await L.get("/api/home",{headers:{Authorization:`Bearer ${u.accessToken}`}});console.log(g.data.data);const{festivalList:F,locationList:E,recentList:_,recommendList:z}=g.data.data;s(F),i(E),n(_),f(z)}catch(g){console.log(g)}};o.useEffect(()=>{j()},[]);const p=()=>{window.scrollY>140?t(!0):t(!1)};window.addEventListener("scroll",p);const[u,fe]=T(w),I=N();o.useEffect(()=>{console.log("recoil",u)},[u]);const B=()=>{I("/search/contents")};return e.jsxs("div",{children:[e.jsx(me,{isOpen:m,onClose:()=>c(!1)}),e.jsxs("header",{className:`flex h-[60px] items-center px-[32px] max-w-3xl w-full duration-300 ${h?"fixed top-0 ":"relative"} z-50 bg-white `,children:[e.jsx("h1",{className:"w-[160px] mr-auto",children:e.jsx("img",{src:"/images/logo_1.png",alt:"main_logo",className:"cursor-pointer",onClick:()=>{I("/")}})}),e.jsxs("nav",{className:" flex gap-[16px]",children:[e.jsx(C,{className:"text-3xl text-slate-400 cursor-pointer"}),e.jsx(J,{className:"text-3xl text-slate-400 cursor-pointer",onClick:()=>c(!0)})]})]}),e.jsxs("main",{className:"pb-[60px]",children:[e.jsx("section",{className:"mx-[32px] mt-[30px]",children:e.jsx(oe,{className:"h-[60px] text-lg rounded-lg  !bg-slate-100 !border-slate-300  gap-[5px]",placeholder:"지금 어디로 여행을 떠나고  싶으신가요?",readOnly:!0,prefix:e.jsx(P,{className:"text-slate-400 text-2xl"}),onClick:()=>B()})}),e.jsx("section",{className:"mx-[32px] mt-[70px]",children:e.jsx(ce,{festivities:l})}),e.jsx("section",{className:"mx-[32px] mt-[70px]",children:e.jsx(de,{locations:r})}),e.jsx("section",{className:"mx-[32px] mt-[70px]",children:e.jsx("img",{src:"/images/main-banner.png",alt:""})}),e.jsx("section",{className:"mx-[32px] mt-[70px]",children:e.jsx(ie,{recent:x,getMainList:j,setFestivities:s,setLocations:i,setRecent:n,setRecommend:f})}),e.jsx("section",{className:"mt-[70px]",children:e.jsx(ne,{recommend:d})})]}),e.jsxs("footer",{className:"relative py-10  before:absolute before:top-0 before:w-full before:h-2.5 before:bg-slate-100 before:inline-block",children:[e.jsxs("div",{className:"flex gap-4 text-xl font-bold text-slate-600 mb-5 px-8",children:[e.jsx(a,{to:"",children:"이용약관"}),e.jsx("span",{className:"text-slate-300 font-light",children:"|"}),e.jsx(a,{to:"",children:"개인정보처리방침"}),e.jsx("span",{className:"text-slate-300 font-light",children:"|"}),e.jsx(a,{to:"",children:"서비스 이용약관"}),e.jsx("span",{className:"text-slate-300 font-light",children:"|"}),e.jsx(a,{to:"",children:"위치서비스 이용약관"})]}),e.jsxs("div",{className:"px-8",children:[e.jsxs("div",{className:"flex items-center justify-between ",children:[e.jsx("h4",{className:"text-lg font-bold text-slate-600",children:"(주) 쿼드러플"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(a,{to:"",className:"flex justify-center items-center w-9 h-9 rounded-full border border-slate-300",children:e.jsx(K,{className:"text-slate-400 text-xl"})}),e.jsx(a,{to:"",className:"flex justify-center items-center w-9 h-9 rounded-full border border-slate-300",children:e.jsx(ae,{className:"text-slate-400 text-xl"})}),e.jsx(a,{to:"",className:"flex justify-center items-center w-9 h-9 rounded-full border border-slate-300",children:e.jsx(V,{className:"text-slate-400 text-lg"})})]})]}),e.jsxs("div",{className:"text-lg text-slate-400 font-normal leading-6 mt-5",children:[e.jsx("p",{children:"서울특별시 강남구 테헤란로 123, 45층"}),e.jsx("p",{children:"사업자 등록번호 123-45-67890"}),e.jsx("p",{children:"통신판매업 신고번호: 2025-서울강남-01234"}),e.jsx("p",{children:"이메일: support@quadruple.app"})]}),e.jsxs("div",{className:"text-base font-light text-slate-400 mt-3",children:[e.jsx("p",{children:"여행지 및 콘텐츠 정보는 공공데이터를 기반으로 제작되었습니다."}),e.jsx("p",{children:"© 2025 쿼드러플. All rights reserved."})]}),e.jsx("img",{src:"/images/logo_2.png",alt:"footer-main-logo",className:"w-32 mt-5"})]})]}),e.jsx(xe,{})]})};export{Ee as default};
