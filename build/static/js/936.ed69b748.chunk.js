"use strict";(self.webpackChunkdefence_post=self.webpackChunkdefence_post||[]).push([[936,740],{1569:(e,n,t)=>{t.d(n,{F:()=>s});const s="https://backend.defencepost.in"},41:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var s=t(824),a=t(2791),o=(t(1332),t(3980)),l=t(1569),i=t(5294),r=t(184);const c=function(){const[e,n]=(0,a.useState)([]),[t,c]=(0,a.useState)("");return(0,a.useEffect)((()=>{!async function(){try{var e,t;let s=await i.Z.get("".concat(l.F,"/payment/paymentDetails"));n(s.data.details);let a=null===s||void 0===s||null===(e=s.data)||void 0===e||null===(t=e.details)||void 0===t?void 0:t.reduce(((e,n)=>e+4*n.amount/100),0);c(a)}catch(s){console.error("Error fetching payment data:",s)}}()}),[]),console.log(e),(0,r.jsxs)(s.xu,{mt:"70px",children:[(0,r.jsx)(o.default,{}),(0,r.jsxs)(s.xu,{pt:"50px",fontSize:"30px",pb:"50px",fontWeight:"bold",children:["Total Amount:   ",(0,r.jsx)("span",{style:{color:"green"},children:t})]}),null===e||void 0===e?void 0:e.map(((e,n)=>(0,r.jsxs)(s.xu,{pl:"50px",children:[(0,r.jsxs)(s.xu,{textAlign:"left",children:[(0,r.jsxs)(s.xu,{children:[(0,r.jsx)("span",{style:{fontWeight:"bold",color:"teal",marginRight:"10px"},children:"User Name:"})," ",e.userName]}),(0,r.jsxs)(s.xu,{children:[(0,r.jsx)("span",{style:{fontWeight:"bold",color:"teal",marginRight:"10px"},children:"Amount"})," ",e.amount]}),(0,r.jsxs)(s.xu,{children:[(0,r.jsx)("span",{style:{fontWeight:"bold",color:"teal",marginRight:"10px"},children:"My Amount"})," ",4*e.amount/100]}),(0,r.jsxs)(s.xu,{children:[(0,r.jsx)("span",{style:{fontWeight:"bold",color:"teal",marginRight:"10px"},children:"Date:"})," ",e.date]}),(0,r.jsxs)(s.xu,{children:[(0,r.jsx)("span",{style:{fontWeight:"bold",color:"teal",marginRight:"10px"},children:"User Email Id:"})," ",e.userEmailId]}),(0,r.jsxs)(s.xu,{children:[(0,r.jsx)("span",{style:{fontWeight:"bold",color:"teal",marginRight:"10px"},children:"CourseId:"})," ",e.courseId]}),(0,r.jsxs)(s.xu,{children:[(0,r.jsx)("span",{style:{fontWeight:"bold",color:"teal",marginRight:"10px"},children:"Course Name:"})," ",e.courseName]})]}),(0,r.jsx)("hr",{style:{marginTop:"30px",marginBottom:"30px"}})]})))]})}},3980:(e,n,t)=>{t.r(n),t.d(n,{default:()=>N});var s=t(7689),a=t(1087),o=t(824),l=t(6640),i=t(2715),r=t(9055);const c=t.p+"static/media/Logo-black.39a7ee205721d782af4e.jpeg";var x=t(4368),d=t(4373),p=(t(1752),t(1274),t(4651)),u=t(1022),h=t(5672),g=t(8874),m=t(7849),j=t(634),f=t(6241),v=t(7685),y=t(2791),b=t(5294),k=t(184);var C=t(1569);const N=function(){var e,n,t;const N=(0,s.s0)(),{isOpen:S,onClose:w,onToggle:L}=(0,u.q)(),[O,D]=(0,y.useState)(!1),[I,R]=(0,y.useState)(!1),[z,E]=(0,y.useState)([]),[A,U]=(0,y.useState)([]),[W,F]=(0,y.useState)(!0);let[M,_]=(0,y.useState)(!1),[P,T]=(0,y.useState)(null===(e=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===e?void 0:e.token),[B,J]=(0,y.useState)(null===(n=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===n?void 0:n.userName),[Z,H]=(0,y.useState)(null===(t=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===t?void 0:t.email),q=()=>{let e={token:null,userName:null,email:null};window.confirm("Are you sure you want to logout?")&&(localStorage.setItem("DefencePostUserDetails",JSON.stringify(e)),N("/"))};return(0,y.useEffect)((()=>{(async()=>{try{let e=await b.Z.get("".concat(C.F,"/post/"));const n=Array.from(new Map(e.data.map((e=>[e.category,e]))).values());U(n)}catch(e){alert(e)}})(),(async()=>{try{let e=await b.Z.get("".concat(C.F,"/course/"));E(e.data)}catch(e){alert(e)}})()}),[]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(o.xu,{className:"header",display:{base:"none",lg:"grid"},gridTemplateColumns:P?"30% 1fr":"30% 1fr 10%",alignItems:"center",backgroundColor:"white",color:"black",boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",fontFamily:"Barlow",height:"70px",position:"fixed",width:"100%",top:"0px",marginBottom:"50px",zIndex:1e3,paddingRight:"30px",children:[(0,k.jsx)(a.OL,{className:"logo nav-link",to:"/",children:(0,k.jsx)(l.E,{src:c,width:"200px",height:"100%"})}),(0,k.jsxs)(o.xu,{className:"nav",display:"flex",justifyContent:"flex-end",fontSize:"18px",alignItems:"center",children:[(0,k.jsx)(a.OL,{className:"navContent nav-link",to:"/",children:"Home"}),(0,k.jsxs)(o.xu,{display:"flex",className:"navContent",onMouseEnter:()=>{D(!0)},onMouseLeave:()=>{D(!1)},children:[(0,k.jsx)(a.OL,{className:"nav-link",to:"/posts",children:"Posts"})," ",(0,k.jsx)(x.v,{style:{position:"relative",top:"5px",marginLeft:"5px"}}),O&&(0,k.jsx)(o.xu,{className:"dropdown ".concat(W?"animate_animated animate_zoomIn":""),position:"absolute",top:"45px",display:"flex",flexDirection:"column",backgroundColor:"white",textAlign:"left",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"10px 20px",borderRadius:"10px",children:A.map(((e,n)=>(0,k.jsx)(a.OL,{to:"/singlepostpage/".concat(e._id,"/").concat(n,"/").concat(e.category),children:e.category})))})]}),(0,k.jsxs)(o.xu,{display:"flex",className:"navContent",onMouseEnter:()=>{R(!0)},onMouseLeave:()=>{R(!1)},children:[(0,k.jsx)(a.OL,{to:"/course",className:"nav-link",children:"Course"})," ",(0,k.jsx)(x.v,{style:{position:"relative",top:"5px",marginLeft:"5px"}}),I&&(0,k.jsx)(o.xu,{className:"dropdown ".concat(W?"animate_animated animate_zoomIn":""),position:"absolute",top:"45px",display:"flex",flexDirection:"column",backgroundColor:"white",textAlign:"left",padding:"10px 20px",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",children:I&&z.map(((e,n)=>(0,k.jsx)(a.OL,{to:"/viewdetails/".concat(e._id),className:"nav-link",children:e.name})))})]}),P&&(0,k.jsx)(a.OL,{className:"navContent nav-link",to:"/mycourse",children:"My Course"}),(0,k.jsx)(a.OL,{className:"navContent nav-link",to:"/free",children:"Free"}),"masaieducation17@gmail.com"==Z&&(0,k.jsx)(a.OL,{className:"navContent nav-link",to:"/datahub",children:"DataHub"}),!P&&(0,k.jsx)(a.OL,{className:"navContent nav-link",to:"/login",children:"Login"}),P&&(0,k.jsx)(i.x,{backgroundColor:"green.300",borderRadius:"50%",width:"40px",h:"40px",color:"white",ml:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",onClick:()=>{_(!M)},children:B[0].toUpperCase()})]}),(0,k.jsxs)(o.xu,{display:"flex",gap:"10px",children:[!P&&(0,k.jsx)(a.OL,{className:"navContent",style:{marginLeft:"0px"},to:"/signup",children:(0,k.jsx)(r.z,{marginLeft:"30px",backgroundColor:"#28a4de",color:"white",fontWeight:"500",children:"Sign Up"})}),M&&(0,k.jsxs)(o.xu,{boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",position:"absolute",top:"75px",right:"20px",padding:"10px 40px",backgroundColor:"white",children:[(0,k.jsx)(i.x,{fontSize:"15px",children:Z}),(0,k.jsxs)(o.xu,{display:"flex",alignItems:"center",gap:"10px",fontSize:"20px",cursor:"pointer",onClick:q,children:[(0,k.jsx)(i.x,{children:"Logout"}),(0,k.jsx)(d.AGD,{color:"red"})]})]})]})]}),(0,k.jsxs)(o.xu,{display:{base:"flex",lg:"none"},justifyContent:"space-between",color:"#28a4de",marginBottom:"50px",marginTop:"10px",boxShadow:"rgba(17, 17, 26, 0.1) 0px 1px 0px",children:[(0,k.jsx)(l.E,{src:c,width:"180px"}),(0,k.jsx)(o.xu,{className:"ThreeLines",cursor:"pointer",children:(0,k.jsx)(p.QEj,{style:{height:"40px",width:"30px"},onClick:()=>{L()}})})]}),(0,k.jsxs)(h.d,{isOpen:S,placement:"right",onClose:()=>{},children:[(0,k.jsx)(g.Z,{}),(0,k.jsxs)(m.s,{children:[(0,k.jsx)(j.o,{onClick:w}),(0,k.jsx)(f.f,{children:(0,k.jsxs)(o.xu,{display:"grid",gap:"15px",fontSize:"20px",children:[(0,k.jsx)(i.x,{fontSize:"14px",textDecoration:"underline",children:Z}),(0,k.jsx)(a.OL,{className:"nav-link",to:"/",onClick:w,children:"Home"}),(0,k.jsxs)(o.xu,{display:"flex",children:[(0,k.jsx)(a.OL,{to:"/posts",className:"nav-link",children:"Posts"})," "]}),(0,k.jsxs)(o.xu,{display:"flex",children:[(0,k.jsx)(a.OL,{to:"/course",className:"nav-link",children:"Course"})," "]}),P&&(0,k.jsx)(a.OL,{to:"/mycourse",onClick:w,className:"nav-link",children:"My Course"}),(0,k.jsx)(a.OL,{to:"/free",onClick:w,className:"nav-link",children:"Free Resources"}),P?(0,k.jsx)(i.x,{onClick:q,className:"nav-link",children:"Logout"}):(0,k.jsx)(a.OL,{to:"/login",onClick:w,className:"nav-link",children:"Login"}),(0,k.jsx)(a.OL,{to:"/signup",onClick:w,className:"nav-link",children:"Sign Up"})]})}),(0,k.jsx)(v.m,{children:(0,k.jsx)(r.z,{variant:"outline",mr:3,onClick:w,children:"Cancel"})})]})]})]})}},1752:()=>{}}]);
//# sourceMappingURL=936.ed69b748.chunk.js.map