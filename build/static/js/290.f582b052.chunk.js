"use strict";(self.webpackChunkdefence_post=self.webpackChunkdefence_post||[]).push([[290,740,367],{1569:(e,t,n)=>{n.d(t,{F:()=>o});const o="https://backend.defencepost.in"},1466:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var o=n(5294),s=n(7689),a=n(1087),l=n(2791),i=n(1986),r=n(824),c=n(2715),x=n(8820),d=n(6355),p=n(1332),u=n(7692),g=n(5112),m=(n(4367),n(1569)),h=n(1660),f=n(7280),v=n(5144),j=n(4735),b=n(5914),S=n(3980),y=n(184);const k=function(){var e,t;const{id:n,courseId:k,param:w}=(0,s.UO)(),[C,N]=(0,a.lr)(),L={token:null===(e=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===e?void 0:e.token,"Content-Type":"application/json"};let[F,D]=(0,l.useState)({}),[O,I]=(0,l.useState)(!1),[z,R]=(0,l.useState)(!1);const[U,P]=(0,l.useState)(0),[A,E]=(0,l.useState)("");let q=(0,i.p)();return(0,l.useEffect)((()=>{!async function(){try{var e;I(!0);let t=await o.Z.get("".concat(m.F,"/mycourse/").concat(n),{headers:L});D(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.data),I(!1)}catch(t){I(!1),console.log(t)}}()}),[]),O?(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(p.E,{})}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(S.default,{}),(0,y.jsxs)(r.xu,{children:[(0,y.jsx)(r.xu,{textAlign:"left",ml:"20px ",fontFamily:"Barlow",mt:{base:"-50px",sm:"70px"},children:(0,y.jsx)(h.U,{allowToggle:!0,children:null===F||void 0===F||null===(t=F.folders)||void 0===t?void 0:t.map(((e,t)=>{var n;return(0,y.jsxs)(f.Q,{children:[(0,y.jsx)("h2",{children:(0,y.jsxs)(v.K,{children:[(0,y.jsxs)(r.xu,{as:"span",flex:"1",textAlign:"left",display:"flex",gap:"20px",alignItems:"center",marginBottom:"20px",position:"relative",children:[(0,y.jsx)(d.$nz,{style:{color:"#F8D775",fontSize:"40px"}}),(0,y.jsxs)(c.x,{fontSize:"20px",children:[" ",null===e||void 0===e?void 0:e.name]})]}),(0,y.jsx)(j.X,{})]})}),(0,y.jsx)(b.H,{pb:4,children:null===e||void 0===e||null===(n=e.contents)||void 0===n?void 0:n.map(((e,t)=>(0,y.jsxs)(r.xu,{display:"flex",gap:"20px",alignItems:"center",marginBottom:"20px",position:"relative",children:[console.log("pdf docs ==> ",e.coursePDF),(0,y.jsx)(a.rU,{style:{fontSize:"19px"},to:"/preview/pdf",state:{name:null===e||void 0===e?void 0:e.coursePDFName},children:(0,y.jsxs)(r.xu,{display:"flex",justifyContent:"center",alignItems:"center",children:[(0,y.jsx)(x.ih9,{style:{color:"red",fontSize:"40px",marginRight:"30px"}}),null===e||void 0===e?void 0:e.coursePDFName]})})]},t)))})]},t)}))})}),(0,y.jsx)(r.xu,{children:z&&(0,y.jsx)(r.xu,{margin:"auto",width:{base:"100%",sm:"100%",md:"60%",lg:"40%"},mb:"0p8x",children:(0,y.jsxs)("form",{onSubmit:e=>{var t,n;e.preventDefault();let s=null===(t=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===t?void 0:t.userName,a=null===(n=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===n?void 0:n.email;const l=new Date,i="".concat(null===l||void 0===l?void 0:l.toLocaleDateString()," ").concat(null===l||void 0===l?void 0:l.toLocaleTimeString());let r={name:s,review:A,rating:U,date:i,courseId:k,email:a};(async()=>{try{200==(await o.Z.post("".concat(m.F,"/review/add"),r)).status?(q({title:"Review Added",status:"success",duration:4e3,isClosable:!0,position:"top"}),P(0),E(""),R(!z)):q({title:"Something is wrong",status:"error",duration:4e3,isClosable:!0,position:"top"})}catch(e){alert(e)}})()},children:[(0,y.jsxs)(r.xu,{textAlign:"left",boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",padding:"20px",backgroundColor:"#e7e8ea",borderRadius:"10px",children:[(0,y.jsx)(c.x,{fontSize:"20px",fontWeight:"bold",marginBottom:"20px",children:"Give Your Feedback"}),(0,y.jsxs)(r.xu,{display:"flex",gap:"20px",alignItems:"center",children:[(0,y.jsxs)(r.xu,{children:[(0,y.jsx)(u.drn,{fontSize:"25px",style:{marginLeft:"3px"}}),(0,y.jsx)(c.x,{children:"Poor"})]}),(0,y.jsx)(r.xu,{display:"flex",alignItems:"center",gap:"20px",children:(0,y.jsx)(g.Z,{count:5,value:U,onChange:e=>P(e),size:45,activeColor:"#daa520",inactiveColor:"#c0bebf",fontSize:"20px"})}),(0,y.jsxs)(r.xu,{children:[(0,y.jsx)(u.uhR,{fontSize:"25px",style:{marginLeft:"3px"}}),(0,y.jsx)(c.x,{children:"Best"})]})]})]}),(0,y.jsxs)(r.xu,{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",padding:"20px",borderRadius:"10px",mt:"15px",backgroundColor:"#e7e8ea",children:[(0,y.jsx)(c.x,{fontSize:"20px",fontWeight:"bold",textAlign:"left",children:"Write-Up"}),(0,y.jsx)("textarea",{name:"",id:"",rows:"3",value:A,onChange:e=>E(e.target.value),placeholder:"Write your review...",style:{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",outline:"none",padding:"20px",fontSize:"19px",width:"100%",borderRadius:"10px",marginTop:"10px"},required:!0})]}),(0,y.jsx)("br",{}),(0,y.jsx)("input",{type:"submit",value:"Submit Feedback",style:{padding:"8px 20px",backgroundColor:"#29a4de",color:"white",borderRadius:"5px",cursor:"pointer",marginBottom:"50px"}})]})})})]})]})}},3980:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var o=n(7689),s=n(1087),a=n(824),l=n(6640),i=n(2715),r=n(9055);const c=n.p+"static/media/Logo-black.39a7ee205721d782af4e.jpeg";var x=n(4368),d=n(4373),p=(n(1752),n(1274),n(4651)),u=n(1022),g=n(5672),m=n(8874),h=n(7849),f=n(634),v=n(6241),j=n(7685),b=n(2791),S=n(5294),y=n(184);var k=n(1569);const w=function(){var e,t,n;const w=(0,o.s0)(),{isOpen:C,onClose:N,onToggle:L}=(0,u.q)(),[F,D]=(0,b.useState)(!1),[O,I]=(0,b.useState)(!1),[z,R]=(0,b.useState)([]),[U,P]=(0,b.useState)([]),[A,E]=(0,b.useState)(!0);let[q,B]=(0,b.useState)(!1),[T,J]=(0,b.useState)(null===(e=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===e?void 0:e.token),[_,M]=(0,b.useState)(null===(t=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===t?void 0:t.userName),[Z,W]=(0,b.useState)(null===(n=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===n?void 0:n.email),H=()=>{let e={token:null,userName:null,email:null};window.confirm("Are you sure you want to logout?")&&(localStorage.setItem("DefencePostUserDetails",JSON.stringify(e)),w("/"))};return(0,b.useEffect)((()=>{(async()=>{try{let e=await S.Z.get("".concat(k.F,"/post/"));const t=Array.from(new Map(e.data.map((e=>[e.category,e]))).values());P(t)}catch(e){alert(e)}})(),(async()=>{try{let e=await S.Z.get("".concat(k.F,"/course/"));R(e.data)}catch(e){alert(e)}})()}),[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(a.xu,{className:"header",display:{base:"none",lg:"grid"},gridTemplateColumns:T?"30% 1fr":"30% 1fr 10%",alignItems:"center",backgroundColor:"white",color:"black",boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",fontFamily:"Barlow",height:"70px",position:"fixed",width:"100%",top:"0px",marginBottom:"50px",zIndex:1e3,paddingRight:"30px",children:[(0,y.jsx)(s.OL,{className:"logo nav-link",to:"/",children:(0,y.jsx)(l.E,{src:c,width:"200px",height:"100%"})}),(0,y.jsxs)(a.xu,{className:"nav",display:"flex",justifyContent:"flex-end",fontSize:"18px",alignItems:"center",children:[(0,y.jsx)(s.OL,{className:"navContent nav-link",to:"/",children:"Home"}),(0,y.jsxs)(a.xu,{display:"flex",className:"navContent",onMouseEnter:()=>{D(!0)},onMouseLeave:()=>{D(!1)},children:[(0,y.jsx)(s.OL,{className:"nav-link",to:"/posts",children:"Posts"})," ",(0,y.jsx)(x.v,{style:{position:"relative",top:"5px",marginLeft:"5px"}}),F&&(0,y.jsx)(a.xu,{className:"dropdown ".concat(A?"animate_animated animate_zoomIn":""),position:"absolute",top:"45px",display:"flex",flexDirection:"column",backgroundColor:"white",textAlign:"left",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"10px 20px",borderRadius:"10px",children:U.map(((e,t)=>(0,y.jsx)(s.OL,{to:"/singlepostpage/".concat(e._id,"/").concat(t,"/").concat(e.category),children:e.category})))})]}),(0,y.jsxs)(a.xu,{display:"flex",className:"navContent",onMouseEnter:()=>{I(!0)},onMouseLeave:()=>{I(!1)},children:[(0,y.jsx)(s.OL,{to:"/course",className:"nav-link",children:"Course"})," ",(0,y.jsx)(x.v,{style:{position:"relative",top:"5px",marginLeft:"5px"}}),O&&(0,y.jsx)(a.xu,{className:"dropdown ".concat(A?"animate_animated animate_zoomIn":""),position:"absolute",top:"45px",display:"flex",flexDirection:"column",backgroundColor:"white",textAlign:"left",padding:"10px 20px",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",children:O&&z.map(((e,t)=>(0,y.jsx)(s.OL,{to:"/viewdetails/".concat(e._id),className:"nav-link",children:e.name})))})]}),T&&(0,y.jsx)(s.OL,{className:"navContent nav-link",to:"/mycourse",children:"My Course"}),(0,y.jsx)(s.OL,{className:"navContent nav-link",to:"/free",children:"Free"}),"masaieducation17@gmail.com"==Z&&(0,y.jsx)(s.OL,{className:"navContent nav-link",to:"/datahub",children:"DataHub"}),!T&&(0,y.jsx)(s.OL,{className:"navContent nav-link",to:"/login",children:"Login"}),T&&(0,y.jsx)(i.x,{backgroundColor:"green.300",borderRadius:"50%",width:"40px",h:"40px",color:"white",ml:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",onClick:()=>{B(!q)},children:_[0].toUpperCase()})]}),(0,y.jsxs)(a.xu,{display:"flex",gap:"10px",children:[!T&&(0,y.jsx)(s.OL,{className:"navContent",style:{marginLeft:"0px"},to:"/signup",children:(0,y.jsx)(r.z,{marginLeft:"30px",backgroundColor:"#28a4de",color:"white",fontWeight:"500",children:"Sign Up"})}),q&&(0,y.jsxs)(a.xu,{boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",position:"absolute",top:"75px",right:"20px",padding:"10px 40px",backgroundColor:"white",children:[(0,y.jsx)(i.x,{fontSize:"15px",children:Z}),(0,y.jsxs)(a.xu,{display:"flex",alignItems:"center",gap:"10px",fontSize:"20px",cursor:"pointer",onClick:H,children:[(0,y.jsx)(i.x,{children:"Logout"}),(0,y.jsx)(d.AGD,{color:"red"})]})]})]})]}),(0,y.jsxs)(a.xu,{display:{base:"flex",lg:"none"},justifyContent:"space-between",color:"#28a4de",marginBottom:"50px",marginTop:"10px",boxShadow:"rgba(17, 17, 26, 0.1) 0px 1px 0px",children:[(0,y.jsx)(l.E,{src:c,width:"180px"}),(0,y.jsx)(a.xu,{className:"ThreeLines",cursor:"pointer",children:(0,y.jsx)(p.QEj,{style:{height:"40px",width:"30px"},onClick:()=>{L()}})})]}),(0,y.jsxs)(g.d,{isOpen:C,placement:"right",onClose:()=>{},children:[(0,y.jsx)(m.Z,{}),(0,y.jsxs)(h.s,{children:[(0,y.jsx)(f.o,{onClick:N}),(0,y.jsx)(v.f,{children:(0,y.jsxs)(a.xu,{display:"grid",gap:"15px",fontSize:"20px",children:[(0,y.jsx)(i.x,{fontSize:"14px",textDecoration:"underline",children:Z}),(0,y.jsx)(s.OL,{className:"nav-link",to:"/",onClick:N,children:"Home"}),(0,y.jsxs)(a.xu,{display:"flex",children:[(0,y.jsx)(s.OL,{to:"/posts",className:"nav-link",children:"Posts"})," "]}),(0,y.jsxs)(a.xu,{display:"flex",children:[(0,y.jsx)(s.OL,{to:"/course",className:"nav-link",children:"Course"})," "]}),T&&(0,y.jsx)(s.OL,{to:"/mycourse",onClick:N,className:"nav-link",children:"My Course"}),(0,y.jsx)(s.OL,{to:"/free",onClick:N,className:"nav-link",children:"Free Resources"}),T?(0,y.jsx)(i.x,{onClick:H,className:"nav-link",children:"Logout"}):(0,y.jsx)(s.OL,{to:"/login",onClick:N,className:"nav-link",children:"Login"}),(0,y.jsx)(s.OL,{to:"/signup",onClick:N,className:"nav-link",children:"Sign Up"})]})}),(0,y.jsx)(j.m,{children:(0,y.jsx)(r.z,{variant:"outline",mr:3,onClick:N,children:"Cancel"})})]})]})]})}},4367:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var o=n(2791),s=n(7689),a=n(824),l=n(9055),i=n(1332),r=n(1569),c=n(5294),x=n(184);const d=()=>{var e;const{link:t}=(0,s.UO)(),[n,d]=(0,o.useState)(!0),[p,u]=(0,o.useState)(),g={token:null===(e=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===e?void 0:e.token,"Content-Type":"application/json"};(0,o.useEffect)((()=>{(async()=>{try{d(!0);let e=await c.Z.get("".concat(r.F,"/file-upload/geturl/").concat(t),{headers:g});u(null===e||void 0===e?void 0:e.data),d(!1)}catch(e){d(!1),console.log(e)}})()}),[]);return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(a.xu,{display:"flex",flexDirection:"column",alignItems:"center",mt:"-50px",position:"relative",children:[n&&(0,x.jsx)(i.E,{position:"absolute",right:"0px",top:"40px",color:"white"}),(0,x.jsx)(l.z,{onClick:()=>{const e=document.getElementById("pdfIframe");e&&(e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen())},variant:"outline",mb:4,position:"absolute",right:"0px",top:"12px",color:"white",bg:"#313131",zIndex:1e3,children:"Fullscreen"}),(0,x.jsx)("iframe",{title:"PDF Viewer",src:"https://defencepost.s3.amazonaws.com/".concat(null===p||void 0===p?void 0:p.fileName,"?AWSAccessKeyId=").concat(null===p||void 0===p?void 0:p.accessKeyId,"&Expires=").concat(null===p||void 0===p?void 0:p.expires,"&Signature=").concat(null===p||void 0===p?void 0:p.signature),width:"100%",height:"800px",allowFullScreen:!0,frameborder:"0",onLoad:()=>{d(!1)},children:"iframe"})]})})}},1752:()=>{}}]);
//# sourceMappingURL=290.f582b052.chunk.js.map