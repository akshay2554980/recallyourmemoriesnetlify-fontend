(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{143:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=n(189),o=n(24),s=n(179),l=n(146),u=n(181),d=n(194),p=n(182),j=n(13),b=n(42),m=n.p+"static/media/memory.c12fa9b0.png",h=n(175),f=n(178),g=Object(h.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(f.a[500]),backgroundColor:f.a[500]}}})),v=n(87),x=n(2),O=function(){var e,t,n,r,c=g(),i=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),h=Object(o.a)(i,2),f=h[0],O=h[1],y=Object(j.f)(),w=Object(j.g)(),C=function(){localStorage.clear(),O(null),y.push("/")};return Object(a.useEffect)((function(){var e=null===f||void 0===f?void 0:f.token;e&&(1e3*Object(v.a)(e).exp<(new Date).getTime()&&C());O(JSON.parse(localStorage.getItem("profile")))}),[w]),Object(x.jsxs)(s.a,{className:c.appBar,position:"static",color:"inherit",children:[Object(x.jsxs)("div",{className:c.brandContainer,children:[Object(x.jsx)(l.a,{component:b.b,to:"/",className:c.heading,variant:"h3",align:"center",children:"Recall Your Memories"}),Object(x.jsx)("img",{className:c.image,src:m,alt:"memory",height:"60"})]}),Object(x.jsx)(u.a,{className:c.toolbar,children:f?Object(x.jsxs)("div",{className:c.profile,children:[Object(x.jsx)(d.a,{className:c.purple,src:null===f||void 0===f||null===(e=f.result)||void 0===e?void 0:e.imageUrl,alt:null===f||void 0===f||null===(t=f.result)||void 0===t?void 0:t.name,children:null===f||void 0===f||null===(n=f.result)||void 0===n?void 0:n.name.charAt(0)}),Object(x.jsx)(l.a,{className:c.name,variant:"h6",children:null===f||void 0===f||null===(r=f.result)||void 0===r?void 0:r.name}),Object(x.jsx)(p.a,{className:c.logout,color:"secondary",variant:"contained",onClick:C,children:"Logout"})]}):Object(x.jsx)(p.a,{component:b.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})]})},y=n(193),w=n(188),C=n(183),k=n(184),S=n(185),N=n(186),I=n(91),T=n.n(I),E=n(93),A=n.n(E),D=n(92),L=n.n(D),F=n(88),_=n.n(F),z=Object(h.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),P=n(20),U=n(65),B=n.n(U),W=n(11),M=n.n(W),H=n(21),J=n(90),R=n.n(J).a.create({baseURL:"https://recallyourmemories-akshay01.herokuapp.com/"});R.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var G=function(e,t){return R.patch("/posts/".concat(e),t)},V=function(e){return R.delete("/posts/".concat(e))},Y=function(e){return R.patch("/posts/".concat(e,"/likePost"))},q=function(e){return R.post("/user/signin",e)},K=function(e){return R.post("/user/signup",e)},Z=function(e){return function(){var t=Object(H.a)(M.a.mark((function t(n){var a,r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,R.post("/posts",c);case 3:a=t.sent,r=a.data,n({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},Q=function(e,t){return function(){var n=Object(H.a)(M.a.mark((function n(a){var r,c;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,G(e,t);case 3:r=n.sent,c=r.data,a({type:"UPDATE",payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},X=function(e){var t,n,r,c,i=e.post,s=e.setCurrentId,u=z(),d=Object(P.b)(),j=JSON.parse(localStorage.getItem("profile")),b=Object(a.useState)(!1),m=Object(o.a)(b,2),h=m[0],f=m[1],g=Object(x.jsx)(p.a,{size:"small",color:"default",style:{textDecoration:"underline"},onClick:function(){f((function(e){return!e}))},children:h?"Read Less":"Read More"}),v=function(){var e;return(null===(e=i.likes)||void 0===e?void 0:e.length)>0?i.likes.find((function(e){var t,n;return e===((null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.googleId)||(null===j||void 0===j||null===(n=j.result)||void 0===n?void 0:n._id))}))?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(T.a,{fontSize:"small"}),i.likes.length>2?"You and ".concat(i.likes.length-1," others"):"".concat(i.likes.length," like").concat(i.likes.length>1?"s":"")]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(B.a,{fontSize:"small"}),i.likes.length," ",1===i.likes.length?"Like":"Likes"]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(B.a,{fontSize:"small"}),"\xa0Like"]})};return Object(x.jsxs)(C.a,{className:u.card,children:[Object(x.jsx)(k.a,{className:u.media,image:i.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:i.title}),Object(x.jsxs)("div",{className:u.overlay,children:[Object(x.jsx)(l.a,{variant:"h6",children:i.name}),Object(x.jsx)(l.a,{variant:"body2",children:_()(i.createdAt).fromNow()})]}),Object(x.jsx)("div",{className:u.overlay2,children:((null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.googleId)===(null===i||void 0===i?void 0:i.creator)||(null===j||void 0===j||null===(n=j.result)||void 0===n?void 0:n._id)===(null===i||void 0===i?void 0:i.creator))&&Object(x.jsx)(p.a,{style:{color:"white"},size:"small",onClick:function(){return s(i._id)},children:Object(x.jsx)(L.a,{fontSize:"default"})})}),Object(x.jsx)("div",{className:u.details,children:Object(x.jsx)(l.a,{variant:"body2",color:"textSecondary",component:"h2",children:i.tags.map((function(e){return"#".concat(e," ")}))})}),Object(x.jsx)(l.a,{className:u.title,gutterBottom:!0,variant:"h5",component:"h2",children:i.title}),Object(x.jsx)(S.a,{children:Object(x.jsxs)(l.a,{variant:"body2",color:"textSecondary",component:"p",children:[h?i.message:i.message.substring(0,200),i.message.length>200&&g]})}),Object(x.jsxs)(N.a,{className:u.cardActions,children:[Object(x.jsx)(p.a,{size:"small",color:"primary",onClick:function(){var e;d((e=i._id,function(){var t=Object(H.a)(M.a.mark((function t(n){var a,r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y(e);case 3:a=t.sent,r=a.data,n({type:"LIKE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))},disabled:!(null===j||void 0===j?void 0:j.result),children:Object(x.jsx)(v,{})}),((null===j||void 0===j||null===(r=j.result)||void 0===r?void 0:r.googleId)===(null===i||void 0===i?void 0:i.creator)||(null===j||void 0===j||null===(c=j.result)||void 0===c?void 0:c._id)===(null===i||void 0===i?void 0:i.creator))&&Object(x.jsxs)(p.a,{size:"small",color:"primary",onClick:function(){var e;d((e=i._id,function(){var t=Object(H.a)(M.a.mark((function t(n){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V(e);case 3:n({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},children:[Object(x.jsx)(A.a,{fontSize:"small"})," Delete"]})]})]})},$=Object(h.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),ee=n(187),te=function(e){var t=e.setCurrentId,n=Object(P.c)((function(e){return e.posts})),a=$();return console.log("posts: ",n),n.length?Object(x.jsx)(w.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(x.jsx)(w.a,{item:!0,xs:12,sm:6,md:6,children:Object(x.jsx)(X,{post:e,setCurrentId:t})},e._id)}))}):Object(x.jsx)(ee.a,{})},ne=n(12),ae=Object(h.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),re=n(103),ce=n(192),ie=n(94),oe=n.n(ie),se=function(e){var t,n=e.currentId,r=e.setCurrentId,c=ae(),i=Object(a.useState)({title:"",message:"",tags:"",selectedFile:""}),s=Object(o.a)(i,2),u=s[0],d=s[1],j=Object(P.b)(),b=Object(P.c)((function(e){return n?e.posts.find((function(e){return e._id===n})):null})),m=JSON.parse(localStorage.getItem("profile"));Object(a.useEffect)((function(){b&&d(b)}),[b]);var h=function(){var e=Object(H.a)(M.a.mark((function e(t){var a,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),j(n?Q(n,Object(ne.a)(Object(ne.a)({},u),{},{name:null===m||void 0===m||null===(r=m.result)||void 0===r?void 0:r.name})):Z(Object(ne.a)(Object(ne.a)({},u),{},{name:null===m||void 0===m||null===(a=m.result)||void 0===a?void 0:a.name}))),f();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){r(0),d({title:"",message:"",tags:"",selectedFile:""})};return(null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t.name)?Object(x.jsx)(re.a,{className:c.paper,children:Object(x.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(c.root," ").concat(c.form),onSubmit:h,children:[Object(x.jsx)(l.a,{variant:"h6",children:n?"Editing the Memory":"Creating a Memory"}),Object(x.jsx)(ce.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:u.title,onChange:function(e){return d(Object(ne.a)(Object(ne.a)({},u),{},{title:e.target.value}))}}),Object(x.jsx)(ce.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:u.message,onChange:function(e){return d(Object(ne.a)(Object(ne.a)({},u),{},{message:e.target.value}))}}),Object(x.jsx)(ce.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:u.tags,onChange:function(e){return d(Object(ne.a)(Object(ne.a)({},u),{},{tags:e.target.value.split(",")}))}}),Object(x.jsx)("div",{className:c.fileInput,children:Object(x.jsx)(oe.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return d(Object(ne.a)(Object(ne.a)({},u),{},{selectedFile:t}))}})}),Object(x.jsx)(p.a,{className:c.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(x.jsx)(p.a,{variant:"contained",color:"secondary",size:"small",onClick:f,fullWidth:!0,children:"Clear"})]})}):Object(x.jsx)(re.a,{className:c.paper,children:Object(x.jsx)(l.a,{variant:"h6",align:"center",children:"You are not signed in. To create a post or like other's post please sign in."})})},le=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(P.b)();return Object(a.useEffect)((function(){c(function(){var e=Object(H.a)(M.a.mark((function e(t){var n,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.get("/posts");case 3:n=e.sent,a=n.data,console.log(a),t({type:"FETCH-ALL",payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[n,c]),Object(x.jsx)(y.a,{in:!0,children:Object(x.jsx)(i.a,{children:Object(x.jsxs)(w.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(x.jsx)(w.a,{item:!0,xs:12,sm:7,children:Object(x.jsx)(te,{setCurrentId:r})}),Object(x.jsx)(w.a,{item:!0,xs:12,sm:4,children:Object(x.jsx)(se,{currentId:n,setCurrentId:r})})]})})})},ue=n(58),de=Object(h.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),pe=n(99),je=n.n(pe),be=n(190),me=n(191),he=n(95),fe=n.n(he),ge=n(96),ve=n.n(ge),xe=function(e){var t=e.half,n=e.name,a=e.handleChange,r=e.label,c=e.autoFocus,i=e.type,o=e.handleShowPassword;return Object(x.jsx)(w.a,{item:!0,xs:6,sm:t?6:12,children:Object(x.jsx)(ce.a,{name:n,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:r,autoFocus:c,type:i,InputProps:"password"===n?{endAdornment:Object(x.jsx)(be.a,{position:"end",children:Object(x.jsx)(me.a,{onClick:o,children:"password"===i?Object(x.jsx)(fe.a,{}):Object(x.jsx)(ve.a,{})})})}:null})})},Oe=n(97),ye=function(){return Object(x.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(x.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},we=n(98);n.n(we).a.config();var Ce=function(){var e=de(),t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),u=Object(o.a)(s,2),b=u[0],m=u[1],h=Object(a.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),f=Object(o.a)(h,2),g=f[0],v=f[1],O=Object(P.b)(),y=Object(j.f)(),C=function(e){v(Object(ne.a)(Object(ne.a)({},g),{},Object(ue.a)({},e.target.name,e.target.value)))},k=function(){var e=Object(H.a)(M.a.mark((function e(t){var n,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===t||void 0===t?void 0:t.profileObj,a=null===t||void 0===t?void 0:t.tokenId;try{O({type:"AUTH",data:{result:n,token:a}}),y.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(i.a,{component:"main",maxWidth:"xs",children:Object(x.jsxs)(re.a,{className:e.paper,elevation:3,children:[Object(x.jsx)(d.a,{className:e.avatar,children:Object(x.jsx)(je.a,{})}),Object(x.jsx)(l.a,{variant:"h5",children:r?"Sign Up":"Sign In"}),Object(x.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),O(r?function(e,t){return function(){var n=Object(H.a)(M.a.mark((function n(a){var r,c;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,K(e);case 3:r=n.sent,c=r.data,a({type:"AUTH",data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(g,y):function(e,t){return function(){var n=Object(H.a)(M.a.mark((function n(a){var r,c;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log(q(e)),n.next=4,q(e);case 4:r=n.sent,c=r.data,a({type:"AUTH",data:c}),t.push("/"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(g,y))},children:[Object(x.jsxs)(w.a,{container:!0,spacing:2,children:[r&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(xe,{name:"firstName",label:"First Name",handleChange:C,autoFocus:!0,half:!0}),Object(x.jsx)(xe,{name:"lastName",label:"Last Name",handleChange:C,half:!0})]}),Object(x.jsx)(xe,{name:"email",label:"Email Address",handleChange:C,type:"email"}),Object(x.jsx)(xe,{name:"password",label:"Password",handleChange:C,type:b?"text":"password",handleShowPassword:function(){m((function(e){return!e}))}}),r&&Object(x.jsx)(xe,{name:"confirmPassword",label:"Confirm Password",handleChange:C,type:"password"})]}),Object(x.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,className:e.submit,children:r?"Sign Up":"Sign In"}),Object(x.jsx)(Oe.GoogleLogin,{clientId:"330982893236-rgj132m0kksid10g45pvkk4hse7hr4h1.apps.googleusercontent.com",render:function(t){return Object(x.jsx)(p.a,{variant:"contained",color:"primary",fullWidth:!0,className:e.googleButton,onClick:t.onClick,disabled:t.disabled,startIcon:Object(x.jsx)(ye,{}),children:"Google Sign In"})},onSuccess:k,onFailure:function(e){console.log(e),console.log("Sign in with google was unsuccessfull. Try again later")},cookiePolicy:"single_host_origin"}),Object(x.jsx)(w.a,{container:!0,justify:"flex-end",children:Object(x.jsx)(w.a,{item:!0,children:Object(x.jsx)(p.a,{onClick:function(){v({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),c((function(e){return!e})),m(!1)},children:r?"Already have an account? Sign In":"Don't have an account? Sign Up"})})})]})]})})},ke=function(){return Object(x.jsx)(b.a,{children:Object(x.jsxs)(i.a,{maxWidth:"lg",children:[Object(x.jsx)(O,{}),Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/",exact:!0,component:le}),Object(x.jsx)(j.a,{path:"/auth",component:Ce})]})]})})},Se=n(30),Ne=n(100),Ie=n(101);var Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH-ALL":return t.payload;case"CREATE":return[].concat(Object(Ie.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return e}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(ne.a)({},null===t||void 0===t?void 0:t.data))),Object(ne.a)(Object(ne.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case"LOGOUT":return localStorage.clear(),Object(ne.a)(Object(ne.a)({},e),{},{authData:null});default:return e}},Ae=Object(Se.c)({posts:Te,auth:Ee}),De=(n(143),Object(Se.e)(Ae,Object(Se.d)(Object(Se.a)(Ne.a))));c.a.render(Object(x.jsx)(P.a,{store:De,children:Object(x.jsx)(ke,{})}),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.75e9db00.chunk.js.map