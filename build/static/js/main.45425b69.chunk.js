(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{139:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=n(185),o=n(24),s=n(175),l=n(142),u=n(177),d=n(190),p=n(178),j=n(13),b=n(42),m=n.p+"static/media/memory.c12fa9b0.png",h=n(171),f=n(174),g=Object(h.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(f.a[500]),backgroundColor:f.a[500]}}})),v=n(86),O=n(2),x=function(){var e,t,n,r,c=g(),i=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),h=Object(o.a)(i,2),f=h[0],x=h[1],y=Object(j.f)(),C=Object(j.g)(),w=function(){localStorage.clear(),x(null),y.push("/")};return Object(a.useEffect)((function(){var e=null===f||void 0===f?void 0:f.token;e&&(1e3*Object(v.a)(e).exp<(new Date).getTime()&&w());x(JSON.parse(localStorage.getItem("profile")))}),[C]),Object(O.jsxs)(s.a,{className:c.appBar,position:"static",color:"inherit",children:[Object(O.jsxs)("div",{className:c.brandContainer,children:[Object(O.jsx)(l.a,{component:b.b,to:"/",className:c.heading,variant:"h3",align:"center",children:"Recall Your Memories"}),Object(O.jsx)("img",{className:c.image,src:m,alt:"memory",height:"60"})]}),Object(O.jsx)(u.a,{className:c.toolbar,children:f?Object(O.jsxs)("div",{className:c.profile,children:[Object(O.jsx)(d.a,{className:c.purple,src:null===f||void 0===f||null===(e=f.result)||void 0===e?void 0:e.imageUrl,alt:null===f||void 0===f||null===(t=f.result)||void 0===t?void 0:t.name,children:null===f||void 0===f||null===(n=f.result)||void 0===n?void 0:n.name.charAt(0)}),Object(O.jsx)(l.a,{className:c.name,variant:"h6",children:null===f||void 0===f||null===(r=f.result)||void 0===r?void 0:r.name}),Object(O.jsx)(p.a,{className:c.logout,color:"secondary",variant:"contained",onClick:w,children:"Logout"})]}):Object(O.jsx)(p.a,{component:b.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})]})},y=n(189),C=n(184),w=n(179),S=n(180),k=n(181),N=n(182),I=n(90),T=n.n(I),E=n(92),_=n.n(E),D=n(91),A=n.n(D),L=n(87),F=n.n(L),P=Object(h.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),U=n(20),W=n(64),z=n.n(W),B=n(11),H=n.n(B),R=n(21),M=n(89),J=n.n(M).a.create({baseURL:"https://recallyourmemories-akshay01.herokuapp.com/"});J.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var K=function(e,t){return J.patch("/posts/".concat(e),t)},V=function(e){return J.delete("/posts/".concat(e))},G=function(e){return J.patch("/posts/".concat(e,"/likePost"))},Y=function(e){return J.post("/user/signin",e)},q=function(e){return J.post("/user/signup",e)},Z=function(e){return function(){var t=Object(R.a)(H.a.mark((function t(n){var a,r;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,J.post("/posts",c);case 3:a=t.sent,r=a.data,n({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},Q=function(e,t){return function(){var n=Object(R.a)(H.a.mark((function n(a){var r,c;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,K(e,t);case 3:r=n.sent,c=r.data,a({type:"UPDATE",payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},X=function(e){var t,n,r,c,i=e.post,s=e.setCurrentId,u=P(),d=Object(U.b)(),j=JSON.parse(localStorage.getItem("profile")),b=Object(a.useState)(!1),m=Object(o.a)(b,2),h=m[0],f=m[1],g=Object(O.jsx)(p.a,{size:"small",color:"default",style:{textDecoration:"underline"},onClick:function(){f((function(e){return!e}))},children:h?"Read Less":"Read More"}),v=function(){var e;return(null===(e=i.likes)||void 0===e?void 0:e.length)>0?i.likes.find((function(e){var t,n;return e===((null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.googleId)||(null===j||void 0===j||null===(n=j.result)||void 0===n?void 0:n._id))}))?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T.a,{fontSize:"small"}),i.likes.length>2?"You and ".concat(i.likes.length-1," others"):"".concat(i.likes.length," like").concat(i.likes.length>1?"s":"")]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(z.a,{fontSize:"small"}),i.likes.length," ",1===i.likes.length?"Like":"Likes"]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(z.a,{fontSize:"small"}),"\xa0Like"]})};return Object(O.jsxs)(w.a,{className:u.card,children:[Object(O.jsx)(S.a,{className:u.media,image:i.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:i.title}),Object(O.jsxs)("div",{className:u.overlay,children:[Object(O.jsx)(l.a,{variant:"h6",children:i.name}),Object(O.jsx)(l.a,{variant:"body2",children:F()(i.createdAt).fromNow()})]}),Object(O.jsx)("div",{className:u.overlay2,children:((null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.googleId)===(null===i||void 0===i?void 0:i.creator)||(null===j||void 0===j||null===(n=j.result)||void 0===n?void 0:n._id)===(null===i||void 0===i?void 0:i.creator))&&Object(O.jsx)(p.a,{style:{color:"white"},size:"small",onClick:function(){return s(i._id)},children:Object(O.jsx)(A.a,{fontSize:"default"})})}),Object(O.jsx)("div",{className:u.details,children:Object(O.jsx)(l.a,{variant:"body2",color:"textSecondary",component:"h2",children:i.tags.map((function(e){return"#".concat(e," ")}))})}),Object(O.jsx)(l.a,{className:u.title,gutterBottom:!0,variant:"h5",component:"h2",children:i.title}),Object(O.jsx)(k.a,{children:Object(O.jsxs)(l.a,{variant:"body2",color:"textSecondary",component:"p",children:[h?i.message:i.message.substring(0,200),i.message.length>200&&g]})}),Object(O.jsxs)(N.a,{className:u.cardActions,children:[Object(O.jsx)(p.a,{size:"small",color:"primary",onClick:function(){var e;d((e=i._id,function(){var t=Object(R.a)(H.a.mark((function t(n){var a,r;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G(e);case 3:a=t.sent,r=a.data,n({type:"LIKE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},disabled:!(null===j||void 0===j?void 0:j.result),children:Object(O.jsx)(v,{})}),((null===j||void 0===j||null===(r=j.result)||void 0===r?void 0:r.googleId)===(null===i||void 0===i?void 0:i.creator)||(null===j||void 0===j||null===(c=j.result)||void 0===c?void 0:c._id)===(null===i||void 0===i?void 0:i.creator))&&Object(O.jsxs)(p.a,{size:"small",color:"primary",onClick:function(){var e;d((e=i._id,function(){var t=Object(R.a)(H.a.mark((function t(n){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V(e);case 3:n({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(O.jsx)(_.a,{fontSize:"small"})," Delete"]})]})]})},$=Object(h.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),ee=n(183),te=function(e){var t=e.setCurrentId,n=Object(U.c)((function(e){return e.posts})),a=$();return console.log("posts: ",n),n.length?Object(O.jsx)(C.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(O.jsx)(C.a,{item:!0,xs:12,sm:6,md:6,children:Object(O.jsx)(X,{post:e,setCurrentId:t})},e._id)}))}):Object(O.jsx)(ee.a,{})},ne=n(12),ae=Object(h.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),re=n(101),ce=n(188),ie=n(93),oe=n.n(ie),se=function(e){var t,n=e.currentId,r=e.setCurrentId,c=ae(),i=Object(a.useState)({title:"",message:"",tags:"",selectedFile:""}),s=Object(o.a)(i,2),u=s[0],d=s[1],j=Object(U.b)(),b=Object(U.c)((function(e){return n?e.posts.find((function(e){return e._id===n})):null})),m=JSON.parse(localStorage.getItem("profile"));Object(a.useEffect)((function(){b&&d(b)}),[b]);var h=function(){var e=Object(R.a)(H.a.mark((function e(t){var a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),j(n?Q(n,Object(ne.a)(Object(ne.a)({},u),{},{name:null===m||void 0===m||null===(r=m.result)||void 0===r?void 0:r.name})):Z(Object(ne.a)(Object(ne.a)({},u),{},{name:null===m||void 0===m||null===(a=m.result)||void 0===a?void 0:a.name}))),f();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){r(0),d({title:"",message:"",tags:"",selectedFile:""})};return(null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t.name)?Object(O.jsx)(re.a,{className:c.paper,children:Object(O.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(c.root," ").concat(c.form),onSubmit:h,children:[Object(O.jsx)(l.a,{variant:"h6",children:n?"Editing the Memory":"Creating a Memory"}),Object(O.jsx)(ce.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:u.title,onChange:function(e){return d(Object(ne.a)(Object(ne.a)({},u),{},{title:e.target.value}))}}),Object(O.jsx)(ce.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:u.message,onChange:function(e){return d(Object(ne.a)(Object(ne.a)({},u),{},{message:e.target.value}))}}),Object(O.jsx)(ce.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:u.tags,onChange:function(e){return d(Object(ne.a)(Object(ne.a)({},u),{},{tags:e.target.value.split(",")}))}}),Object(O.jsx)("div",{className:c.fileInput,children:Object(O.jsx)(oe.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return d(Object(ne.a)(Object(ne.a)({},u),{},{selectedFile:t}))}})}),Object(O.jsx)(p.a,{className:c.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(O.jsx)(p.a,{variant:"contained",color:"secondary",size:"small",onClick:f,fullWidth:!0,children:"Clear"})]})}):Object(O.jsx)(re.a,{className:c.paper,children:Object(O.jsx)(l.a,{variant:"h6",align:"center",children:"You are not signed in. To create a post or like other's post please sign in."})})},le=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(U.b)();return Object(a.useEffect)((function(){c(function(){var e=Object(R.a)(H.a.mark((function e(t){var n,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.get("/posts");case 3:n=e.sent,a=n.data,console.log(a),t({type:"FETCH-ALL",payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[n,c]),Object(O.jsx)(y.a,{in:!0,children:Object(O.jsx)(i.a,{children:Object(O.jsxs)(C.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(O.jsx)(C.a,{item:!0,xs:12,sm:7,children:Object(O.jsx)(te,{setCurrentId:r})}),Object(O.jsx)(C.a,{item:!0,xs:12,sm:4,children:Object(O.jsx)(se,{currentId:n,setCurrentId:r})})]})})})},ue=n(58),de=Object(h.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),pe=n(97),je=n.n(pe),be=n(186),me=n(187),he=n(94),fe=n.n(he),ge=n(95),ve=n.n(ge),Oe=function(e){var t=e.half,n=e.name,a=e.handleChange,r=e.label,c=e.autoFocus,i=e.type,o=e.handleShowPassword;return Object(O.jsx)(C.a,{item:!0,xs:6,sm:t?6:12,children:Object(O.jsx)(ce.a,{name:n,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:r,autoFocus:c,type:i,InputProps:"password"===n?{endAdornment:Object(O.jsx)(be.a,{position:"end",children:Object(O.jsx)(me.a,{onClick:o,children:"password"===i?Object(O.jsx)(fe.a,{}):Object(O.jsx)(ve.a,{})})})}:null})})},xe=n(96),ye=function(){return Object(O.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(O.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},Ce=function(){var e=de(),t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),u=Object(o.a)(s,2),b=u[0],m=u[1],h=Object(a.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),f=Object(o.a)(h,2),g=f[0],v=f[1],x=Object(U.b)(),y=Object(j.f)(),w=function(e){v(Object(ne.a)(Object(ne.a)({},g),{},Object(ue.a)({},e.target.name,e.target.value)))},S=function(){var e=Object(R.a)(H.a.mark((function e(t){var n,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===t||void 0===t?void 0:t.profileObj,a=null===t||void 0===t?void 0:t.tokenId;try{x({type:"AUTH",data:{result:n,token:a}}),y.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(i.a,{component:"main",maxWidth:"xs",children:Object(O.jsxs)(re.a,{className:e.paper,elevation:3,children:[Object(O.jsx)(d.a,{className:e.avatar,children:Object(O.jsx)(je.a,{})}),Object(O.jsx)(l.a,{variant:"h5",children:r?"Sign Up":"Sign In"}),Object(O.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),x(r?function(e,t){return function(){var n=Object(R.a)(H.a.mark((function n(a){var r,c;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q(e);case 3:r=n.sent,c=r.data,a({type:"AUTH",data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(g,y):function(e,t){return function(){var n=Object(R.a)(H.a.mark((function n(a){var r,c;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log(Y(e)),n.next=4,Y(e);case 4:r=n.sent,c=r.data,a({type:"AUTH",data:c}),t.push("/"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(g,y))},children:[Object(O.jsxs)(C.a,{container:!0,spacing:2,children:[r&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Oe,{name:"firstName",label:"First Name",handleChange:w,autoFocus:!0,half:!0}),Object(O.jsx)(Oe,{name:"lastName",label:"Last Name",handleChange:w,half:!0})]}),Object(O.jsx)(Oe,{name:"email",label:"Email Address",handleChange:w,type:"email"}),Object(O.jsx)(Oe,{name:"password",label:"Password",handleChange:w,type:b?"text":"password",handleShowPassword:function(){m((function(e){return!e}))}}),r&&Object(O.jsx)(Oe,{name:"confirmPassword",label:"Confirm Password",handleChange:w,type:"password"})]}),Object(O.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,className:e.submit,children:r?"Sign Up":"Sign In"}),Object(O.jsx)(xe.GoogleLogin,{clientId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).clientId,render:function(t){return Object(O.jsx)(p.a,{variant:"contained",color:"primary",fullWidth:!0,className:e.googleButton,onClick:t.onClick,disabled:t.disabled,startIcon:Object(O.jsx)(ye,{}),children:"Google Sign In"})},onSuccess:S,onFailure:function(e){console.log(e),console.log("Sign in with google was unsuccessfull. Try again later")},cookiePolicy:"single_host_origin"}),Object(O.jsx)(C.a,{container:!0,justify:"flex-end",children:Object(O.jsx)(C.a,{item:!0,children:Object(O.jsx)(p.a,{onClick:function(){v({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),c((function(e){return!e})),m(!1)},children:r?"Already have an account? Sign In":"Don't have an account? Sign Up"})})})]})]})})},we=function(){return Object(O.jsx)(b.a,{children:Object(O.jsxs)(i.a,{maxWidth:"lg",children:[Object(O.jsx)(x,{}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/",exact:!0,component:le}),Object(O.jsx)(j.a,{path:"/auth",component:Ce})]})]})})},Se=n(30),ke=n(98),Ne=n(99);var Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH-ALL":return t.payload;case"CREATE":return[].concat(Object(Ne.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return e}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(ne.a)({},null===t||void 0===t?void 0:t.data))),Object(ne.a)(Object(ne.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case"LOGOUT":return localStorage.clear(),Object(ne.a)(Object(ne.a)({},e),{},{authData:null});default:return e}},Ee=Object(Se.c)({posts:Ie,auth:Te}),_e=(n(139),Object(Se.e)(Ee,Object(Se.d)(Object(Se.a)(ke.a))));c.a.render(Object(O.jsx)(U.a,{store:_e,children:Object(O.jsx)(we,{})}),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.45425b69.chunk.js.map