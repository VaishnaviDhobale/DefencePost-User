(self.webpackChunkdefence_post=self.webpackChunkdefence_post||[]).push([[469,740],{1569:(e,t,o)=>{"use strict";o.d(t,{F:()=>n});const n="https://backend.defencepost.in"},4177:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>L});var n=o(1986),a=o(824),i=o(6640),s=o(9055),l=o(2715),r=o(1660),c=o(7280),d=o(5144),x=o(4735),p=o(5914),u=o(7689),m=o(1087),h=o(184);var g=o(2791),v=o(7692),f=(o(9504),o(5294)),j=o(5112),b=(o(7358),o(1332)),y=o(1569),w=o(1213),S=o(9126),k=o(6355),C=o(3980);const N=o(9704),z=(0,g.lazy)((()=>Promise.all([o.e(820),o.e(71),o.e(490)]).then(o.bind(o,3490)))),D=(0,g.lazy)((()=>o.e(821).then(o.bind(o,2821))));const L=function(){var e,t,o,L,F;let P=null===(e=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===e?void 0:e.token,I=null===(t=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===t?void 0:t.userName,O=null===(o=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===o?void 0:o.email;const _={token:P,"Content-Type":"application/json"},A=(0,u.s0)();let R=(0,n.p)(),[B,T]=(0,g.useState)(!0),[U,Z]=(0,g.useState)(!1),[E,W]=(0,g.useState)(!1),[H,J]=(0,g.useState)({}),[M,q]=(0,g.useState)(!1);const[G,K]=(0,g.useState)(0),[Q,V]=(0,g.useState)(""),[Y,$]=(0,g.useState)([]);let[X,ee]=(0,g.useState)(!1),[te,oe]=(0,g.useState)(!1),[ne,ae]=(0,g.useState)(""),[ie,se]=(0,g.useState)([]),[le,re]=(0,g.useState)([]),[ce,de]=(0,g.useState)(!1),[xe,pe]=(0,g.useState)(!1),ue=!1,{courseId:me}=(0,u.UO)();(0,g.useEffect)((()=>{(async()=>{try{pe(!0);let e=await f.Z.get("".concat(y.F,"/course/").concat(me));J(null===e||void 0===e?void 0:e.data),pe(!1)}catch(e){pe(!1),alert(e)}})()}),[window.location.href]);let he=async()=>{try{var e;pe(!0);let t=await f.Z.get("".concat(y.F,"/review/")),o=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.filter(((e,t)=>(null===e||void 0===e?void 0:e.courseId)==me));$(o),pe(!1)}catch(t){pe(!1),alert(t)}},ge=async e=>{var t;if(null!==(t=JSON.parse(localStorage.getItem("DefencePostUserDetails")))&&void 0!==t&&t.token)try{var o,n;let t=await f.Z.get("".concat(y.F,"/payment/getKey")),a=await f.Z.post("".concat(y.F,"/payment/checkout"),{amount:e||(null===H||void 0===H?void 0:H.sellPrice)});const i={key:t.data,amount:e||(null===H||void 0===H?void 0:H.sellPrice),currency:"INR",name:"Defence Post",description:"Notes",image:"https://media.licdn.com/dms/image/D4D03AQFY0t-eh4N4UQ/profile-displayphoto-shrink_800_800/0/1696600343127?e=1709769600&v=beta&t=6WiaqygVjAbwnn4LeFF7mbv5q7TrZ8U2xR6dxJML2VI",order_id:null===a||void 0===a||null===(o=a.data)||void 0===o||null===(n=o.order)||void 0===n?void 0:n.id,handler:async function(t){if(console.log(t),(async e=>{try{let t=await f.Z.get("".concat(y.F,"/payment/getSecretKey"));const o=null===t||void 0===t?void 0:t.data,n=(null===e||void 0===e?void 0:e.razorpay_order_id)+"|"+(null===e||void 0===e?void 0:e.razorpay_payment_id),a=N.HmacSHA256(n,o);return N.enc.Hex.stringify(a)===(null===e||void 0===e?void 0:e.razorpay_signature)}catch(t){console.log(t)}})(t)){if(alert("Payment Successful!"),ve(t,e||(null===H||void 0===H?void 0:H.sellPrice),me),ne){let e=ie.find((e=>e.coupon===ne));ie.map((async(t,o)=>{!async function(e,t,o,n,a){console.log("comming here");try{let i={promoterAmount:Number(o)+n/100*e,studentsCount:a+1},s=await f.Z.patch("".concat(y.F,"/coupon/patch/").concat(t),i);console.log(s)}catch(i){console.log(i)}}(Number(null===H||void 0===H?void 0:H.sellPrice),null===e||void 0===e?void 0:e._id,Number(null===e||void 0===e?void 0:e.promoterAmount),Number(null===e||void 0===e?void 0:e.promoterCommission),null===e||void 0===e?void 0:e.studentsCount)}))}!async function(){try{let e={CourseName:H.name,title:H.title,price:H.price,discount:H.discount,sellPrice:H.sellPrice,thumbnail:H.thumbnail,previewPDF:H.previewPDF,previewPDFName:H.previewPDFName,folders:H.folders,courseId:H._id};await f.Z.post("".concat(y.F,"/mycourse/add"),e,{headers:_})}catch(e){console.log(e)}}(),A("/mycourse")}else console.error("Payment verification failed!"),alert("Payment verification failed. Please try again")},prefill:{name:"Gaurav Kumar",email:"gauravsmitawa@gmail.com",contact:"9671381579"},notes:{address:"Razorpay Corporate Office"},theme:{color:"#489cdb"}};return new window.Razorpay(i).open(),1}catch(a){alert(a)}else A("/login")},ve=async(e,t,o)=>{let n={razorpay_payment_id:e.razorpay_payment_id,razorpay_order_id:e.razorpay_order_id,razorpay_signature:e.razorpay_signature,amount:t,currency:e.currency,status:e.status,method:e.method,bank:e.bank,userName:I,userEmailId:O,courseName:H.name,courseId:o,coupon:ne};try{await f.Z.post("".concat(y.F,"/payment/addDetails"),{detailsObj:n})}catch(a){console.log(a)}};function fe(e){let{jsxString:t}=e;return(0,h.jsx)(a.xu,{children:(0,h.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})})}return(0,g.useEffect)((()=>{sessionStorage.setItem("prevPage",null),he(),(async()=>{try{pe(!0);let e=await f.Z.get("".concat(y.F,"/coupon/"));se(null===e||void 0===e?void 0:e.data),pe(!1)}catch(e){pe(!1),alert(e)}})(),async function(){try{var e,t;pe(!0);let o=await f.Z.get("".concat(y.F,"/mycourse/"),{headers:_}),n=null===o||void 0===o||null===(e=o.data)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.some((e=>e.courseId===me));de(!!n),pe(!1)}catch(o){pe(!1),console.log(o)}}()}),[]),console.log(H,"current"),xe?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(b.E,{})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(C.default,{}),(0,h.jsxs)(a.xu,{position:"relative",bottom:"50px",fontFamily:"Barlow",mt:{base:"20px",sm:"120px"},children:[(0,h.jsx)(a.xu,{children:(0,h.jsx)(a.xu,{h:"500px",children:(0,h.jsx)("iframe",{width:"100%",height:"65%",src:"https://www.youtube.com/embed/".concat(function(e){if(!e)return null;const t=e.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);return t?t[1]:null}(H.introVideo)),title:"YouTube video player",frameborder:"0",allowfullscreen:!0})})}),(0,h.jsx)(i.E,{borderRadius:"5px",position:"absolute",w:{base:"150px",sm:"320px"},h:{base:"100px",sm:"210px"},top:{base:"265px",sm:"210px"},left:{base:"20px",sm:"60px"},src:H.thumbnail}),(0,h.jsxs)(a.xu,{position:"relative",bottom:"60px",children:[(0,h.jsxs)(a.xu,{textAlign:"right",marginTop:"-50px",marginRight:"10px",children:[(0,h.jsx)(s.z,{backgroundColor:"#29a4de",color:"white",fontWeight:"500",isDisabled:ce,onClick:()=>ee(!X),children:ce?"Already Taken":"Buy Course"}),X&&(0,h.jsxs)(a.xu,{position:"absolute",right:{base:"10",md:"160px"},top:{base:"60px",md:"20px"},boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"20px",borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",backgroundColor:"white",zIndex:1e3,children:[(0,h.jsx)(l.x,{onClick:()=>{ee(!1)},mb:"15px",cursor:"pointer",textAlign:"right",position:"relative",children:(0,h.jsx)(w.$iT,{style:{position:"absolute",right:"-15px",top:"-15px",color:"white",backgroundColor:"red",fontWeight:"bold",borderRadius:"50%",padding:"2px",fontSize:"20px"}})}),(0,h.jsxs)(a.xu,{width:"250px",textAlign:"center",children:[(0,h.jsxs)(a.xu,{display:te?"block":"flex",justifyContent:"space-around",alignItems:"center",children:[te?(0,h.jsx)("input",{required:!0,type:"text",placeholder:"Coupon",style:{border:"1.5px solid #29a4de",marginBottom:"20px",outline:"none",padding:"10px",width:"100%",fontSize:"17.5px",borderRadius:"10px",color:"#29a4de"},onChange:e=>{ae(e.target.value)}}):(0,h.jsxs)(l.x,{fontSize:"25px",fontWeight:"bold",color:"green",display:"flex",justifyContent:"center",alignItems:"center",children:[(0,h.jsx)(S._4u,{style:{color:"green.300",fontSize:"21px",position:"relative",top:"1px"}})," ",H.sellPrice]}),!te&&(0,h.jsx)(s.z,{backgroundColor:"#29a4de",color:"white",fontWeight:"500",onClick:()=>{ee(!1),ge()},children:"Continue"}),te&&(0,h.jsx)(s.z,{backgroundColor:"#29a4de",color:"white",fontWeight:"500",onClick:()=>{ie.map((async(e,t)=>{if(e.coupon==ne){let t=e.studentDiscount/100*H.sellPrice,o=Number(H.sellPrice)-t;ue=!0,ee(!1);await ge(o)}})),ue||R({title:"Please check your coupon",status:"error",duration:4e3,isClosable:!0,position:"top"})},children:"Add Coupon"})]}),(0,h.jsx)(a.xu,{mt:"15px",children:(0,h.jsxs)(l.x,{children:[te?"Don't have coupon?":" Do you have coupon?",(0,h.jsxs)("span",{style:{color:"blue",fontSize:"15px",cursor:"pointer"},onClick:()=>{oe(!te)},children:[" ","Click Here"]})]})})]})]})]}),(0,h.jsxs)(a.xu,{margin:{base:"20px 20px",sm:"30px 60px"},children:[(0,h.jsxs)(a.xu,{textAlign:"left",children:[(0,h.jsx)(l.x,{fontWeight:"bold",fontSize:"30px",children:H.title}),(0,h.jsxs)(a.xu,{display:"flex",marginTop:"10px",alignItems:"center",children:[(0,h.jsxs)(l.x,{fontSize:"27px",children:[(0,h.jsx)("span",{style:{fontSize:"16px",position:"relative",bottom:"5px"},children:"\u20b9"}),H.sellPrice," "]}),(0,h.jsxs)(l.x,{color:"Gray",marginLeft:"10px",children:[(0,h.jsxs)("del",{children:["\u20b9",H.price]})," "]}),(0,h.jsxs)(l.x,{marginLeft:"10px",color:"green",children:["( ",H.discount,"% OFF )"]})]})]}),(0,h.jsxs)(a.xu,{textAlign:"left",marginTop:"25px",width:{base:"100%",lg:"25%"},display:"flex",justifyContent:"space-between",paddingBottom:"10px",className:"view",fontWeight:"bold",fontSize:"20px",gap:{sm:"40px",sm:"50px"},children:[(0,h.jsx)(l.x,{onClick:()=>{T(!0),W(!1),Z(!1)},children:(0,h.jsx)(l.x,{color:B?"#29a4de":"black",children:"Description"})}),(0,h.jsx)(l.x,{color:U?"#29a4de":"black",onClick:()=>{Z(!0),W(!1),T(!1)},children:"Preview"}),(0,h.jsx)(l.x,{color:E?"#29a4de":"black",onClick:()=>{W(!0),T(!1),Z(!1)},children:"Feedback"})]}),(0,h.jsx)("hr",{style:{marginBottom:"40px"}}),(0,h.jsxs)(a.xu,{marginBottom:"50px",children:[B&&(0,h.jsxs)(a.xu,{children:[" ",(0,h.jsx)(l.x,{textAlign:"left",marginTop:"20px",children:(0,h.jsx)("h3",{children:(0,h.jsx)(fe,{jsxString:null===H||void 0===H?void 0:H.description})})})]}),U&&(0,h.jsxs)(a.xu,{children:[null===H||void 0===H||null===(L=H.previewPDF)||void 0===L?void 0:L.map(((e,t)=>(0,h.jsx)(g.Suspense,{fallback:(0,h.jsx)(b.E,{}),children:(0,h.jsx)(z,{link:e,name:H.name,tag:"free",courseName:H.previewPDFName[t]})}))),(0,h.jsx)(m.rU,{to:ce&&"/mycourse",children:(0,h.jsx)(a.xu,{mt:"-21px",children:(0,h.jsx)(r.U,{allowToggle:!0,children:null===H||void 0===H||null===(F=H.folders)||void 0===F?void 0:F.map(((e,t)=>{var o;return(0,h.jsxs)(c.Q,{children:[(0,h.jsx)("h2",{children:(0,h.jsxs)(d.K,{children:[(0,h.jsxs)(a.xu,{as:"span",flex:"1",textAlign:"left",display:"flex",gap:"20px",alignItems:"center",marginBottom:"20px",position:"relative",borderBottom:"none",children:[(0,h.jsx)(k.$nz,{style:{color:"#F8D775",fontSize:"40px"}}),(0,h.jsxs)(l.x,{fontSize:"20px",children:[" ",null===e||void 0===e?void 0:e.name]})]}),(0,h.jsx)(x.X,{})]})}),(0,h.jsx)(p.H,{pb:4,children:null===e||void 0===e||null===(o=e.contents)||void 0===o?void 0:o.map(((t,o)=>(0,h.jsx)(a.xu,{gap:"20px",alignItems:"center",marginBottom:"20px",position:"relative",children:(0,h.jsx)(g.Suspense,{fallback:(0,h.jsx)(b.E,{}),children:(0,h.jsx)(z,{link:e,name:H.name,tag:"paid",courseName:null===t||void 0===t?void 0:t.coursePDFName})})},o)))})]},t)}))})})})]}),E&&(0,h.jsxs)(a.xu,{children:[(0,h.jsx)(s.z,{marginBottom:"30px",backgroundColor:"#29a4de",color:"white",fontWeight:"500",onClick:()=>{var e;null!==(e=JSON.parse(localStorage.getItem("DefencePostUserDetails")))&&void 0!==e&&e.token||A("/login"),q(!M)},children:M?"Hide Feedback":"Add Feedback"}),M&&(0,h.jsx)(a.xu,{margin:"auto",width:{base:"100%",sm:"100%",md:"60%",lg:"40%"},mb:"0p8x",children:(0,h.jsxs)("form",{onSubmit:e=>{e.preventDefault();const t=new Date,o="".concat(t.toLocaleDateString()," ").concat(t.toLocaleTimeString());let n={name:I,review:Q,rating:G,date:o,courseId:me,email:O};(async()=>{try{200==(await f.Z.post("".concat(y.F,"/review/add"),n)).status?(R({title:"Review Added",status:"success",duration:4e3,isClosable:!0,position:"top"}),he(),K(0),V(""),q(!M)):R({title:"Something is wrong",status:"error",duration:4e3,isClosable:!0,position:"top"})}catch(e){alert(e)}})()},children:[(0,h.jsxs)(a.xu,{textAlign:"left",boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",padding:"20px",backgroundColor:"#e7e8ea",borderRadius:"10px",children:[(0,h.jsx)(l.x,{fontSize:"20px",fontWeight:"bold",marginBottom:"20px",children:"Give Your Feedback"}),(0,h.jsxs)(a.xu,{display:"flex",gap:"20px",alignItems:"center",children:[(0,h.jsxs)(a.xu,{children:[(0,h.jsx)(v.drn,{fontSize:"25px",style:{marginLeft:"3px"}}),(0,h.jsx)(l.x,{children:"Poor"})]}),(0,h.jsx)(a.xu,{display:"flex",alignItems:"center",gap:"20px",children:(0,h.jsx)(j.Z,{count:5,value:G,onChange:e=>K(e),size:45,activeColor:"#daa520",inactiveColor:"#c0bebf",fontSize:"20px"})}),(0,h.jsxs)(a.xu,{children:[(0,h.jsx)(v.uhR,{fontSize:"25px",style:{marginLeft:"3px"}}),(0,h.jsx)(l.x,{children:"Best"})]})]})]}),(0,h.jsxs)(a.xu,{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",padding:"20px",borderRadius:"10px",mt:"15px",backgroundColor:"#e7e8ea",children:[(0,h.jsx)(l.x,{fontSize:"20px",fontWeight:"bold",textAlign:"left",children:"Write-Up"}),(0,h.jsx)("textarea",{name:"",id:"",rows:"3",value:Q,onChange:e=>V(e.target.value),placeholder:"Write your review...",style:{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",outline:"none",padding:"20px",fontSize:"19px",width:"100%",borderRadius:"10px",marginTop:"10px"},required:!0})]}),(0,h.jsx)("br",{}),(0,h.jsx)("input",{type:"submit",value:"Submit Feedback",style:{padding:"8px 20px",backgroundColor:"#29a4de",color:"white",borderRadius:"5px",cursor:"pointer",marginBottom:"50px"}})]})}),(0,h.jsx)(a.xu,{children:Y.reverse().map(((e,t)=>(0,h.jsx)(g.Suspense,{fallback:(0,h.jsx)(b.E,{}),children:(0,h.jsx)(D,{data:e})})))})]})]})]})]})]})]})}},3980:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>k});var n=o(7689),a=o(1087),i=o(824),s=o(6640),l=o(2715),r=o(9055);const c=o.p+"static/media/Logo-black.39a7ee205721d782af4e.jpeg";var d=o(4368),x=o(4373),p=(o(1752),o(1274),o(4651)),u=o(1022),m=o(5672),h=o(8874),g=o(7849),v=o(634),f=o(6241),j=o(7685),b=o(2791),y=o(5294),w=o(184);var S=o(1569);const k=function(){var e,t,o;const k=(0,n.s0)(),{isOpen:C,onClose:N,onToggle:z}=(0,u.q)(),[D,L]=(0,b.useState)(!1),[F,P]=(0,b.useState)(!1),[I,O]=(0,b.useState)([]),[_,A]=(0,b.useState)([]),[R,B]=(0,b.useState)(!0);let[T,U]=(0,b.useState)(!1),[Z,E]=(0,b.useState)(null===(e=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===e?void 0:e.token),[W,H]=(0,b.useState)(null===(t=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===t?void 0:t.userName),[J,M]=(0,b.useState)(null===(o=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===o?void 0:o.email),q=()=>{let e={token:null,userName:null,email:null};window.confirm("Are you sure you want to logout?")&&(localStorage.setItem("DefencePostUserDetails",JSON.stringify(e)),k("/"))};return(0,b.useEffect)((()=>{(async()=>{try{let e=await y.Z.get("".concat(S.F,"/post/"));const t=Array.from(new Map(e.data.map((e=>[e.category,e]))).values());A(t)}catch(e){alert(e)}})(),(async()=>{try{let e=await y.Z.get("".concat(S.F,"/course/"));O(e.data)}catch(e){alert(e)}})()}),[]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(i.xu,{className:"header",display:{base:"none",lg:"grid"},gridTemplateColumns:Z?"30% 1fr":"30% 1fr 10%",alignItems:"center",backgroundColor:"white",color:"black",boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",fontFamily:"Barlow",height:"70px",position:"fixed",width:"100%",top:"0px",marginBottom:"50px",zIndex:1e3,paddingRight:"30px",children:[(0,w.jsx)(a.OL,{className:"logo nav-link",to:"/",children:(0,w.jsx)(s.E,{src:c,width:"200px",height:"100%"})}),(0,w.jsxs)(i.xu,{className:"nav",display:"flex",justifyContent:"flex-end",fontSize:"18px",alignItems:"center",children:[(0,w.jsx)(a.OL,{className:"navContent nav-link",to:"/",children:"Home"}),(0,w.jsxs)(i.xu,{display:"flex",className:"navContent",onMouseEnter:()=>{L(!0)},onMouseLeave:()=>{L(!1)},children:[(0,w.jsx)(a.OL,{className:"nav-link",to:"/posts",children:"Posts"})," ",(0,w.jsx)(d.v,{style:{position:"relative",top:"5px",marginLeft:"5px"}}),D&&(0,w.jsx)(i.xu,{className:"dropdown ".concat(R?"animate_animated animate_zoomIn":""),position:"absolute",top:"45px",display:"flex",flexDirection:"column",backgroundColor:"white",textAlign:"left",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"10px 20px",borderRadius:"10px",children:_.map(((e,t)=>(0,w.jsx)(a.OL,{to:"/singlepostpage/".concat(e._id,"/").concat(t,"/").concat(e.category),children:e.category})))})]}),(0,w.jsxs)(i.xu,{display:"flex",className:"navContent",onMouseEnter:()=>{P(!0)},onMouseLeave:()=>{P(!1)},children:[(0,w.jsx)(a.OL,{to:"/course",className:"nav-link",children:"Course"})," ",(0,w.jsx)(d.v,{style:{position:"relative",top:"5px",marginLeft:"5px"}}),F&&(0,w.jsx)(i.xu,{className:"dropdown ".concat(R?"animate_animated animate_zoomIn":""),position:"absolute",top:"45px",display:"flex",flexDirection:"column",backgroundColor:"white",textAlign:"left",padding:"10px 20px",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",children:F&&I.map(((e,t)=>(0,w.jsx)(a.OL,{to:"/viewdetails/".concat(e._id),className:"nav-link",children:e.name})))})]}),Z&&(0,w.jsx)(a.OL,{className:"navContent nav-link",to:"/mycourse",children:"My Course"}),(0,w.jsx)(a.OL,{className:"navContent nav-link",to:"/free",children:"Free"}),"masaieducation17@gmail.com"==J&&(0,w.jsx)(a.OL,{className:"navContent nav-link",to:"/datahub",children:"DataHub"}),!Z&&(0,w.jsx)(a.OL,{className:"navContent nav-link",to:"/login",children:"Login"}),Z&&(0,w.jsx)(l.x,{backgroundColor:"green.300",borderRadius:"50%",width:"40px",h:"40px",color:"white",ml:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",onClick:()=>{U(!T)},children:W[0].toUpperCase()})]}),(0,w.jsxs)(i.xu,{display:"flex",gap:"10px",children:[!Z&&(0,w.jsx)(a.OL,{className:"navContent",style:{marginLeft:"0px"},to:"/signup",children:(0,w.jsx)(r.z,{marginLeft:"30px",backgroundColor:"#28a4de",color:"white",fontWeight:"500",children:"Sign Up"})}),T&&(0,w.jsxs)(i.xu,{boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",position:"absolute",top:"75px",right:"20px",padding:"10px 40px",backgroundColor:"white",children:[(0,w.jsx)(l.x,{fontSize:"15px",children:J}),(0,w.jsxs)(i.xu,{display:"flex",alignItems:"center",gap:"10px",fontSize:"20px",cursor:"pointer",onClick:q,children:[(0,w.jsx)(l.x,{children:"Logout"}),(0,w.jsx)(x.AGD,{color:"red"})]})]})]})]}),(0,w.jsxs)(i.xu,{display:{base:"flex",lg:"none"},justifyContent:"space-between",color:"#28a4de",marginBottom:"50px",marginTop:"10px",boxShadow:"rgba(17, 17, 26, 0.1) 0px 1px 0px",children:[(0,w.jsx)(s.E,{src:c,width:"180px"}),(0,w.jsx)(i.xu,{className:"ThreeLines",cursor:"pointer",children:(0,w.jsx)(p.QEj,{style:{height:"40px",width:"30px"},onClick:()=>{z()}})})]}),(0,w.jsxs)(m.d,{isOpen:C,placement:"right",onClose:()=>{},children:[(0,w.jsx)(h.Z,{}),(0,w.jsxs)(g.s,{children:[(0,w.jsx)(v.o,{onClick:N}),(0,w.jsx)(f.f,{children:(0,w.jsxs)(i.xu,{display:"grid",gap:"15px",fontSize:"20px",children:[(0,w.jsx)(l.x,{fontSize:"14px",textDecoration:"underline",children:J}),(0,w.jsx)(a.OL,{className:"nav-link",to:"/",onClick:N,children:"Home"}),(0,w.jsxs)(i.xu,{display:"flex",children:[(0,w.jsx)(a.OL,{to:"/posts",className:"nav-link",children:"Posts"})," "]}),(0,w.jsxs)(i.xu,{display:"flex",children:[(0,w.jsx)(a.OL,{to:"/course",className:"nav-link",children:"Course"})," "]}),Z&&(0,w.jsx)(a.OL,{to:"/mycourse",onClick:N,className:"nav-link",children:"My Course"}),(0,w.jsx)(a.OL,{to:"/free",onClick:N,className:"nav-link",children:"Free Resources"}),Z?(0,w.jsx)(l.x,{onClick:q,className:"nav-link",children:"Logout"}):(0,w.jsx)(a.OL,{to:"/login",onClick:N,className:"nav-link",children:"Login"}),(0,w.jsx)(a.OL,{to:"/signup",onClick:N,className:"nav-link",children:"Sign Up"})]})}),(0,w.jsx)(j.m,{children:(0,w.jsx)(r.z,{variant:"outline",mr:3,onClick:N,children:"Cancel"})})]})]})]})}},1752:()=>{},9504:(e,t,o)=>{"use strict";e.exports=o.p+"static/media/mba.761a093b071d851e0e3e.pdf"},7358:(e,t,o)=>{"use strict";e.exports=o.p+"static/media/img.6d00fbbdea68965c23e9.jpg"},2480:()=>{}}]);
//# sourceMappingURL=469.f7642409.chunk.js.map