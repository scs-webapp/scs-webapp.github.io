(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{303:function(e,t,a){e.exports=a(557)},554:function(e,t,a){},557:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),o=a.n(c),l=a(14),i=a(24),s=a(25),u=a(27),m=a(26),h=a(28),d=r.a.createContext({}),p=a(43),g=a(15),f=a(164),v=a.n(f),E=a(224),b=a(29),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e)))._onChangeInput=function(e){return function(t){var n=t.target.value;a.setState(function(t){var a=t.form;return{form:Object(l.a)({},a,Object(b.a)({},e,n))}})}},a._onSubmit=Object(E.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=a.state.form).email&&t.name&&t.group&&t.name.length>10)){e.next=8;break}return a.setState({loading:!0}),e.next=5,a.props.register(t);case 5:a.setState({loading:!1}),e.next=9;break;case 8:alert("Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin");case 9:case"end":return e.stop()}},e)})),a.state={form:{email:a.props.email||"",name:"",group:"",desc:"",role:0}},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.form,n=t.loading,c={display:this.props.isLocked?"flex":"none"},o={display:this.props.isLocked?"none":"flex"};return r.a.createElement("div",{className:"Register"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card card-body Card",style:c},"T\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n ch\u01b0a \u0111\u01b0\u1ee3c k\xedch ho\u1ea1t.",r.a.createElement("br",null),"B\u1ea1n h\xe3y \u0111\u1ee3i th\xeam ho\u1eb7c th\xf4ng b\xe1o v\u1edbi admin nh\xe9!"),r.a.createElement("div",{className:"card card-body Card",style:o},r.a.createElement("small",{className:"text-muted"},"Tr\u01b0\u1edbc ti\xean, b\u1ea1n ph\u1ea3i \u0111\u0103ng k\xfd th\xf4ng tin t\xe0i kho\u1ea3n tr\u01b0\u1edbc"),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{className:"form-control",id:"email",value:a.email,onChange:this._onChangeInput("email"),disabled:!0}),r.a.createElement("label",{htmlFor:"name"},"T\xean \u0111\u1ea7y \u0111\u1ee7"),r.a.createElement("input",{className:"form-control",value:a.name,id:"name",autoComplete:"off",onChange:this._onChangeInput("name")}),r.a.createElement("label",{htmlFor:"group"},"M\xe3 tr\u01b0\u1eddng"),r.a.createElement("select",{className:"custom-select",value:a.group,id:"group",onChange:this._onChangeInput("group")},r.a.createElement("option",null,"Ch\u1ecdn m\u1ed9t tr\u01b0\u1eddng"),this.props.groups&&Object.keys(this.props.groups).map(function(t,a){return r.a.createElement("option",{key:a,value:t},e.props.groups[t].name)})),r.a.createElement("label",{htmlFor:"desc"},"L\u1eddi ch\xe0o (l\xe0 tin nh\u1eafn s\u1ebd g\u1eedi \u0111\u1ec3 gi\u1edbi thi\u1ec7u b\u1ea3n th\xe2n khi b\u1ea1n b\u1eaft \u0111\u1ea7u tr\u1ea3 l\u1eddi tin nh\u1eafn)"),r.a.createElement("input",{className:"form-control",value:a.desc,placeholder:"VD: Xin ch\xe0o em, anh/ch\u1ecb t\xean l\xe0 ABC, h\u1ecdc \u1edf l\u1edbp DEF tr\u01b0\u1eddng XYZ",id:"desc",autoComplete:"off",onChange:this._onChangeInput("desc")}),r.a.createElement("button",{className:"btn btn-primary mt-3",onClick:this._onSubmit,disabled:n},"\u0110\u0103ng k\xfd"))))}}]),t}(n.Component),k=function(e){return r.a.createElement(d.Consumer,null,function(t){return r.a.createElement(y,Object(l.a)({},t,e))})},C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Register"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card card-body Card"},r.a.createElement("small",{className:"text-muted"},"\u0110ang setup t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n"))))}}]),t}(n.Component),S=a(90),_=a(71),j=a.n(_),O=a(72),N=a.n(O),x=a(53),w=a.n(x),I=a(111),T=a.n(I),R=a(114),U=a.n(R),M=a(225),F=a(236),B=a(237),A=a(235),D=a(166),L=a(46),W=a.n(L),X=a(49),$=a.n(X),P=a(48),K=a.n(P),Y=a(47),Q=a.n(Y),G=a(18),H=a.n(G),Z=a(33),J=a.n(Z),V="nuichatbot.herokuapp.com",z=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).appendToMessageList=function(e){var t=e.val();a.setState(function(e){var a=e.current;return{current:[].concat(Object(S.a)(a),[t])}})},a.updateConversation=function(e){var t=a.props.user,n=e.val()||{};if(n.$tid=e.key,(2===n.status||3===n.status)&&n.group===t.group){var r=a.state.conversations.filter(function(e){return e.$tid!==n.$tid});r.unshift(n),r.sort(function(e,t){return e.lastMsg&&t.lastMsg?e.lastMsg.time>t.lastMsg.time?-1:e.lastMsg.time<t.lastMsg.time?1:0:0}),a.setState(function(e){e.conversations;return{conversations:r}})}},a.onClickConversation=function(e){return function(){if(a.state.open&&a.state.open.$tid===e.$tid)return a.setState({open:null,current:[],text:""}),void(a.messRef&&a.messRef.off("child_added",a.appendToMessageList));a.setState({open:e,current:[],text:""}),a.messRef=g.database().ref(a.props.DB_PREFIX+"/conversations/msg/"+a.props.user.group+"/"+e.$tid).orderByKey().limitToLast(20),a.messRef.on("child_added",a.appendToMessageList)}},a._onSubmit=function(e){return function(t){if(t.preventDefault(),a.state.text)return g.auth().currentUser.getIdToken(!0).then(function(t){var n=a.state.text;U.a.post("https://".concat(V,"/pagetuyensinh/staffSendMessage"),{idToken:t,tid:e.$tid,text:n}).then(function(e){var t=e.data;if(t.error)return alert(t.error);a.setState({text:""})}).catch(function(e){return alert(e.message||e)})}).catch(function(e){return alert(e.message||e)})}},a.toggle=function(){a.setState({dropdown:!a.state.dropdown})},a.out=function(){window.confirm("B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n k\u1ebft th\xfac cu\u1ed9c tr\xf2 chuy\u1ec7n n\xe0y?")&&g.auth().currentUser.getIdToken(!0).then(function(e){return U.a.post("https://".concat(V,"/pagetuyensinh/staffResetStatus"),{idToken:e,tid:a.state.open.$tid}).then(function(e){window.location.reload()}).catch(function(e){return alert(e)})})},a.greet=function(){return g.auth().currentUser.getIdToken(!0).then(function(e){var t=a.state.open;console.log("123"),U.a.post("".concat("nuichatbot.herokuapp.com","/pagetuyensinh/staffSendMessage"),{idToken:e,tid:t.$tid,text:a.props.user.desc}).then(function(e){var t=e.data;if(t.error)return alert(t.error)}).catch(function(e){return alert(e.message||e)})}).catch(function(e){return alert(e.message||e)})},a.renderConversation=function(){var e=a.state,t=e.current,n=e.open,c=e.dropdown;return r.a.createElement("div",{className:"card mt-3 mb-3"},r.a.createElement("div",{className:"card-header Title",onClick:a.onClickConversation(n)},r.a.createElement("b",null,"\u21a9 Quay l\u1ea1i ")," | ",a.state.open.name),r.a.createElement("div",{className:" card-body Card",id:"MESSAGES"},t.map(function(e,t){return r.a.createElement("div",{key:t,className:"Message"},r.a.createElement("div",{className:e.page?"Ours":"Yours"},r.a.createElement("div",{className:"Textt"},e.text)))})),r.a.createElement("div",{className:"Text"},r.a.createElement("form",{className:"FormMessage",onSubmit:a._onSubmit(n)},r.a.createElement("div",{style:{width:"10%"}},r.a.createElement(F.a,{isOpen:c,toggle:a.toggle,style:{width:"10%"}},r.a.createElement(B.a,{color:"primary"},r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement(A.a,null,r.a.createElement(D.a,{onClick:a.greet},"G\u1eedi l\u1eddi ch\xe0o h\u1ecfi"),r.a.createElement(D.a,{onClick:a.out},"K\u1ebft th\xfac chat")))),r.a.createElement("input",{className:"form-control",placeholder:"G\u1eedi tin nh\u1eafn",value:a.state.text,onChange:function(e){return a.setState({text:e.target.value})}}),r.a.createElement("div",{className:"SendIcon"},r.a.createElement("button",{type:"submit",style:{color:"#fff"}},r.a.createElement(T.a,null,"send"))))))},a.editUser=function(e){return function(){a.setState({editUser:e?Object(l.a)({},e):null})}},a.changeInput=function(e){return function(t){var n=t.target.value;a.setState(function(t){var a=t.editUser;return{editUser:Object(l.a)({},a,Object(b.a)({},e,n))}})}},a.handleSaveUser=function(){var e=a.state.editUser;g.database().ref(a.props.DB_PREFIX+"/users/"+e.$uid).set(a.props.removeTempKeys(e),function(e){if(!e)return console.log(123),a.editUser()();alert(e)})};var n=a.props.user.group;return a.convRef=g.database().ref(a.props.DB_PREFIX+"/conversations/group/"+n).orderByChild("status").startAt(2).endAt(3),a.messRef=null,a.convRef.on("child_added",a.updateConversation),a.convRef.on("child_changed",a.updateConversation),a.messagesEnd=r.a.createRef(),a.state={conversations:[],open:null,current:[],text:"",dropdown:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){t.current.length!==this.state.current.length&&M.animateScroll.scrollToBottom({containerId:"MESSAGES"})}},{key:"render",value:function(){var e=this,t=this.props.user,a=this.state,n=a.conversations,c=a.open,o=a.editUser,l={"background-color":"#fff"},i={"background-color":"#eee"};return r.a.createElement("div",{className:"Supporter"},r.a.createElement(j.a,{position:"static",style:{background:"#3E8C33"}},r.a.createElement(N.a,null,r.a.createElement(w.a,{variant:"h6",color:"inherit"},"Welcome to SCS"))),r.a.createElement("div",{className:"container mt-3"},r.a.createElement("span",{className:"text-muted"},"Xin ch\xe0o,"),r.a.createElement("span",{className:"font-weight-bold"}," ",t.name),r.a.createElement(H.a,{onClick:this.editUser(t),color:"primary"},"S\u1eeda l\u1eddi ch\xe0o"),c?this.renderConversation():n.map(function(t,a){return r.a.createElement("div",{className:"card card-body mt-3 Card",key:a,onClick:e.onClickConversation(t),style:3!==t.status?l:i},3!==t.status?r.a.createElement("div",{className:"Title"},r.a.createElement("b",null,t.name)):r.a.createElement("div",{className:"Title"},t.name),r.a.createElement("div",{className:"text-muted Conversation"},t.lastMsg.text.substring(0,100),t.lastMsg.text.length<100?"":"..."))})),r.a.createElement(W.a,{open:o,onClose:this.editUser(null),"aria-labelledby":"form-dialog-title"},r.a.createElement(Q.a,{id:"form-dialog-title"},"S\u1eeda l\u1eddi ch\xe0o"),r.a.createElement(K.a,null,r.a.createElement("p",null,"T\u1ef1 gi\u1edbi thi\u1ec7u (l\xe0 tin nh\u1eafn s\u1ebd g\u1eedi \u0111\u1ec3 gi\u1edbi thi\u1ec7u b\u1ea3n th\xe2n khi b\u1ea1n b\u1eaft \u0111\u1ea7u tr\u1ea3 l\u1eddi tin nh\u1eafn)"),r.a.createElement(J.a,{autoFocus:!0,margin:"dense",id:"desc",onChange:this.changeInput("desc"),placeholder:"VD: Xin ch\xe0o em, anh/ch\u1ecb t\xean l\xe0 ABC, h\u1ecdc \u1edf l\u1edbp DEF tr\u01b0\u1eddng XYZ",value:o?o.desc:"",fullWidth:!0})),r.a.createElement($.a,null,r.a.createElement(H.a,{onClick:this.editUser(null),color:"primary"},"H\u1ee7y"),r.a.createElement(H.a,{variant:"contained",onClick:this.handleSaveUser,color:"primary"},"S\u1eeda th\xf4ng tin"))))}}]),t}(n.Component),q=function(e){return r.a.createElement(d.Consumer,null,function(t){return r.a.createElement(z,Object(l.a)({},t,e))})},ee=a(34),te=a.n(ee),ae=a(41),ne=a.n(ae),re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={form:{name:"",key:"",khoi:{"t\u1ef1_nhi\xean":!1,"x\xe3_h\u1ed9i":!1,"l\u1ef1c_l\u01b0\u1ee3ng_v\u0169_trang":!1,"cao_\u0111\u1eb3ng_ngh\u1ec1":!1}}},a.handleClose=function(){a.props.toggle()},a.handleSave=function(){var e=a.state.form;a.props.school[e.key]&&alert("M\xe3 tr\u01b0\u1eddng tr\xf9ng l\u1eb7p"),g.database().ref(a.props.DB_PREFIX+"/groups/"+e.key).set({name:e.name,khoi:e.khoi}).then(function(){a.setState({form:{name:"",key:"",khoi:{"t\u1ef1_nhi\xean":!1,"x\xe3_h\u1ed9i":!1,"l\u1ef1c_l\u01b0\u1ee3ng_v\u0169_trang":!1,"cao_\u0111\u1eb3ng_ngh\u1ec1":!1}}}),a.props.toggle()})},a.changeInput=function(e){return function(t){var n=t.target.value;a.setState(function(t){var a=t.form;return{form:Object(l.a)({},a,Object(b.a)({},e,n))}})}},a.changeCheckbox=function(e){return function(t){var n=t.target.checked;a.setState(function(t){var a=t.form;return{form:Object(l.a)({},a,{khoi:Object(l.a)({},a.khoi,Object(b.a)({},e,n))})}})}},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,a=e.toggle,n=this.state.form,c=n.khoi;return r.a.createElement("div",{className:"NewSchool"},r.a.createElement(W.a,{open:t,onClose:a,"aria-labelledby":"form-dialog-title",maxWidth:"lg"},r.a.createElement(Q.a,{id:"form-dialog-title"},"Th\xeam tr\u01b0\u1eddng m\u1edbi"),r.a.createElement(K.a,null,r.a.createElement(J.a,{autoFocus:!0,margin:"dense",id:"key",onChange:this.changeInput("key"),label:"M\xe3 tr\u01b0\u1eddng",value:n.key,fullWidth:!0}),r.a.createElement(J.a,{margin:"dense",id:"name",onChange:this.changeInput("name"),value:n.name,label:"T\xean tr\u01b0\u1eddng",fullWidth:!0}),r.a.createElement(te.a,{control:r.a.createElement(ne.a,{checked:c["t\u1ef1_nhi\xean"],onChange:this.changeCheckbox("t\u1ef1_nhi\xean"),color:"primary"}),label:"Kh\u1ed1i t\u1ef1 nhi\xean"}),r.a.createElement(te.a,{control:r.a.createElement(ne.a,{checked:c["x\xe3_h\u1ed9i"],onChange:this.changeCheckbox("x\xe3_h\u1ed9i"),color:"primary"}),label:"Kh\u1ed1i x\xe3 h\u1ed9i"}),r.a.createElement(te.a,{control:r.a.createElement(ne.a,{checked:c["l\u1ef1c_l\u01b0\u1ee3ng_v\u0169_trang"],onChange:this.changeCheckbox("l\u1ef1c_l\u01b0\u1ee3ng_v\u0169_trang"),color:"primary"}),label:"Kh\u1ed1i l\u1ef1c l\u01b0\u1ee3ng v\u0169 trang"}),r.a.createElement(te.a,{control:r.a.createElement(ne.a,{checked:c["cao_\u0111\u1eb3ng_ngh\u1ec1"],onChange:this.changeCheckbox("cao_\u0111\u1eb3ng_ngh\u1ec1"),color:"primary"}),label:"C\xe1c tr\u01b0\u1eddng cao \u0111\u1eb3ng ngh\u1ec1"})),r.a.createElement($.a,null,r.a.createElement(H.a,{onClick:this.handleClose,color:"primary"},"H\u1ee7y"),r.a.createElement(H.a,{variant:"contained",onClick:this.handleSave,color:"primary"},"Th\xeam tr\u01b0\u1eddng"))))}}]),t}(n.Component),ce=a(61),oe=a.n(ce),le=a(73),ie=a.n(le),se=a(112),ue=a.n(se),me=a(75),he=a.n(me),de=a(74),pe=a.n(de),ge=a(62),fe=a.n(ge),ve=a(229),Ee=a.n(ve),be=a(230),ye=a.n(be),ke=a(76),Ce=a.n(ke),Se=a(113),_e=a.n(Se),je=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateUsers=function(e){a.setState({users:a.props.decodeFirebaseArray(e.val()||{},"uid")})},a.editUser=function(e){return function(){a.setState({editUser:e?Object(l.a)({},e):null})}},a.changeInput=function(e){return function(t){var n=t.target.value;a.setState(function(t){var a=t.editUser;return{editUser:Object(l.a)({},a,Object(b.a)({},e,n))}})}},a.changeRadio=function(e){return function(t){var n=t.target.value;a.setState(function(t){var a=t.editUser;return{editUser:Object(l.a)({},a,Object(b.a)({},e,Number(n)))}})}},a.handleSave=function(){var e=a.state.editUser;g.database().ref(a.props.DB_PREFIX+"/users/"+e.$uid).set(a.props.removeTempKeys(e),function(e){if(!e)return console.log(123),a.editUser()();alert(e)})},a.state={users:[]},a.ref=g.database().ref(a.props.DB_PREFIX+"/users").orderByChild("group").equalTo(a.props.school),a.ref.on("value",function(e){return a.updateUsers(e)}),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.ref.off()}},{key:"render",value:function(){var e=this,t=this.state,a=t.users,n=t.editUser;return r.a.createElement("div",{className:"ListSupporters"},r.a.createElement(oe.a,{dense:!1},(!a||!a.length)&&r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"text-muted"},"Kh\xf4ng c\xf3 t\u01b0 v\u1ea5n vi\xean n\xe0o thu\u1ed9c tr\u01b0\u1eddng n\xe0y")),a.map(function(t,a){return r.a.createElement(ie.a,{key:a},r.a.createElement(ue.a,null,r.a.createElement(Ee.a,null)),r.a.createElement(pe.a,{primary:t.role?t.name:r.a.createElement("span",null,t.name," - ",r.a.createElement("span",{className:"text-muted"},"Ch\u01b0a k\xedch ho\u1ea1t"))}),r.a.createElement(he.a,null,r.a.createElement(fe.a,{"aria-label":"Delete",onClick:e.editUser(t)},r.a.createElement(ye.a,null))))})),r.a.createElement(W.a,{open:n,onClose:this.editUser(null),"aria-labelledby":"form-dialog-title"},r.a.createElement(Q.a,{id:"form-dialog-title"},"S\u1eeda th\xf4ng tin t\u01b0 v\u1ea5n vi\xean"),r.a.createElement(K.a,null,r.a.createElement(_e.a,{"aria-label":"role",onChange:this.changeRadio("role"),value:n?n.role:null},r.a.createElement(te.a,{value:500,control:r.a.createElement(Ce.a,{color:"primary"}),label:"T\u01b0 v\u1ea5n vi\xean"}),r.a.createElement(te.a,{value:800,control:r.a.createElement(Ce.a,{color:"primary"}),label:"Bi\xean t\u1eadp vi\xean"}),r.a.createElement(te.a,{value:0,control:r.a.createElement(Ce.a,{color:"primary"}),label:"H\u1ee7y k\xedch ho\u1ea1t"})),r.a.createElement(J.a,{autoFocus:!0,margin:"dense",id:"email",onChange:this.changeInput("email"),label:"Email",value:n?n.email:"",type:"email",fullWidth:!0}),r.a.createElement(J.a,{autoFocus:!0,margin:"dense",id:"name",onChange:this.changeInput("name"),label:"T\xean \u0111\u1ea7y \u0111\u1ee7",value:n?n.name:"",fullWidth:!0}),r.a.createElement(J.a,{autoFocus:!0,margin:"dense",id:"desc",onChange:this.changeInput("desc"),label:"T\u1ef1 gi\u1edbi thi\u1ec7u",value:n?n.desc:"",fullWidth:!0})),r.a.createElement($.a,null,r.a.createElement(H.a,{onClick:this.editUser(null),color:"primary"},"H\u1ee7y"),r.a.createElement(H.a,{variant:"contained",onClick:this.handleSave,color:"primary"},"S\u1eeda th\xf4ng tin"))))}}]),t}(n.Component),Oe=function(e){return r.a.createElement(d.Consumer,null,function(t){return r.a.createElement(je,Object(l.a)({},t,e))})},Ne=a(232),xe=a.n(Ne),we=a(231),Ie=a.n(we),Te=a(167),Re=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateConversation=function(e){var t=e.val()||{};if(t.$tid=e.key,console.log(t),t.psid){var n=!1,r=a.state.conversations.map(function(e){return e.$tid===t.$tid?(n=!0,t):e});a.setState(function(e){var a=e.conversations;return{conversations:n?r:[t].concat(Object(S.a)(a))}})}},a.displayMessage=function(e){return function(){a.setState({c:e}),a.messRef=g.database().ref(a.props.DB_PREFIX+"/conversations/msg/"+a.props.school+"/"+e.$tid),a.setState({current:[]}),a.messRef.on("child_added",a.appendToMessageList)}},a.appendToMessageList=function(e){var t=e.val();a.setState(function(e){var a=e.current;return{current:[].concat(Object(S.a)(a),[t])}})};var n=a.props.school;return console.log(n),a.convRef=g.database().ref(a.props.DB_PREFIX+"/conversations/group/"+n),a.messRef=null,a.state={conversations:[],current:[],c:null},a.convRef.on("child_added",a.updateConversation),a.convRef.on("child_changed",a.updateConversation),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.convRef.off()}},{key:"render",value:function(){var e=this,t=this.state,a=t.c,n=t.current;return r.a.createElement("div",{className:"Messages"},r.a.createElement("div",{className:"text-muted"},"Qu\u1ea3n l\xfd tin nh\u1eafn"),a?r.a.createElement("div",{className:"card card-body"},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(Te.a,null,a.name),r.a.createElement(Te.a,{onClick:function(){e.messRef.off(),e.setState({c:null})}},"Quay l\u1ea1i")),r.a.createElement("div",{className:"MessagesWrapper"},n.map(function(e,t){return r.a.createElement("div",{key:t,className:"Message"},r.a.createElement("div",{className:e.page?"Ours":"Yours"},r.a.createElement("div",{className:"Textt"},e.text)))}))):r.a.createElement(oe.a,null,this.state.conversations.map(function(t,a){return r.a.createElement(ie.a,{key:a},r.a.createElement(pe.a,{primary:t.name,secondary:"T\u01b0 v\u1ea5n vi\xean: ".concat(t.answeredBy," - ").concat(t.lastMsg?"Tin nh\u1eafn cu\u1ed1i: "+Ie()(t.lastMsg.time).format("MMMM Do YYYY, h:mm:ss a"):""," ").concat(t.state<2?" (\u0110\xe3 k\u1ebft th\xfac)":"")}),r.a.createElement(he.a,null,r.a.createElement(fe.a,{"aria-label":"Comments",onClick:e.displayMessage(t)},r.a.createElement(xe.a,null))))})))}}]),t}(n.Component),Ue=function(e){return r.a.createElement(d.Consumer,null,function(t){return r.a.createElement(Re,Object(l.a)({},t,e))})},Me=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={form:{name:"",key:"",khoi:{"t\u1ef1_nhi\xean":!1,"x\xe3_h\u1ed9i":!1,"l\u1ef1c_l\u01b0\u1ee3ng_v\u0169_trang":!1,"cao_\u0111\u1eb3ng_ngh\u1ec1":!1}}},a.handleClose=function(){a.props.toggle()},a.handleSave=function(){var e=a.state.form,t=a.props.school;g.database().ref(a.props.DB_PREFIX+"/groups").set(Object(l.a)({},t,Object(b.a)({},e.key,{name:e.name,khoi:e.khoi}))).then(function(){a.setState({form:{name:"",key:"",khoi:{"t\u1ef1_nhi\xean":!1,"x\xe3_h\u1ed9i":!1,"l\u1ef1c_l\u01b0\u1ee3ng_v\u0169_trang":!1,"cao_\u0111\u1eb3ng_ngh\u1ec1":!1}}}),a.props.toggle()})},a.changeInput=function(e){return function(t){var n=t.target.value;a.setState(function(t){var a=t.form;return{form:Object(l.a)({},a,Object(b.a)({},e,n))}})}},a.changeCheckbox=function(e){return function(t){var n=t.target.checked;a.setState(function(t){var a=t.form;return{form:Object(l.a)({},a,{khoi:Object(l.a)({},a.khoi,Object(b.a)({},e,n))})}})}},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){this.props.open&&(e.open&&e.open.key===this.props.open.key||this.setState({form:Object(l.a)({},this.state.form,this.props.open.school,{key:this.props.open.key})}))}},{key:"render",value:function(){var e=this.props,t=e.open,a=e.toggle,n=this.state.form,c=n.khoi;return r.a.createElement("div",{className:"NewSchool"},r.a.createElement(W.a,{open:t,onClose:a,"aria-labelledby":"form-dialog-title",maxWidth:"lg"},r.a.createElement(Q.a,{id:"form-dialog-title"},"Th\xeam tr\u01b0\u1eddng m\u1edbi"),r.a.createElement(K.a,null,r.a.createElement(J.a,{autoFocus:!0,margin:"dense",id:"key",onChange:this.changeInput("key"),label:"M\xe3 tr\u01b0\u1eddng",value:n.key,fullWidth:!0,disabled:!0}),r.a.createElement(J.a,{margin:"dense",id:"name",onChange:this.changeInput("name"),value:n.name,label:"T\xean tr\u01b0\u1eddng",fullWidth:!0}),r.a.createElement(te.a,{control:r.a.createElement(ne.a,{checked:c["t\u1ef1_nhi\xean"],onChange:this.changeCheckbox("t\u1ef1_nhi\xean"),color:"primary"}),label:"Kh\u1ed1i t\u1ef1 nhi\xean"}),r.a.createElement(te.a,{control:r.a.createElement(ne.a,{checked:c["x\xe3_h\u1ed9i"],onChange:this.changeCheckbox("x\xe3_h\u1ed9i"),color:"primary"}),label:"Kh\u1ed1i x\xe3 h\u1ed9i"}),r.a.createElement(te.a,{control:r.a.createElement(ne.a,{checked:c["l\u1ef1c_l\u01b0\u1ee3ng_v\u0169_trang"],onChange:this.changeCheckbox("l\u1ef1c_l\u01b0\u1ee3ng_v\u0169_trang"),color:"primary"}),label:"Kh\u1ed1i l\u1ef1c l\u01b0\u1ee3ng v\u0169 trang"}),r.a.createElement(te.a,{control:r.a.createElement(ne.a,{checked:c["cao_\u0111\u1eb3ng_ngh\u1ec1"],onChange:this.changeCheckbox("cao_\u0111\u1eb3ng_ngh\u1ec1"),color:"primary"}),label:"C\xe1c tr\u01b0\u1eddng cao \u0111\u1eb3ng ngh\u1ec1"})),r.a.createElement($.a,null,r.a.createElement(H.a,{onClick:this.handleClose,color:"primary"},"H\u1ee7y"),r.a.createElement(H.a,{variant:"contained",onClick:this.handleSave,color:"primary"},"S\u1eeda th\xf4ng tin tr\u01b0\u1eddng"))))}}]),t}(n.Component);function Fe(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g,"a")).replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g,"e")).replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g,"i")).replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g,"o")).replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,"u")).replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g,"y")).replace(/\u0111/g,"d")).replace(/\xc0|\xc1|\u1ea0|\u1ea2|\xc3|\xc2|\u1ea6|\u1ea4|\u1eac|\u1ea8|\u1eaa|\u0102|\u1eb0|\u1eae|\u1eb6|\u1eb2|\u1eb4/g,"A")).replace(/\xc8|\xc9|\u1eb8|\u1eba|\u1ebc|\xca|\u1ec0|\u1ebe|\u1ec6|\u1ec2|\u1ec4/g,"E")).replace(/\xcc|\xcd|\u1eca|\u1ec8|\u0128/g,"I")).replace(/\xd2|\xd3|\u1ecc|\u1ece|\xd5|\xd4|\u1ed2|\u1ed0|\u1ed8|\u1ed4|\u1ed6|\u01a0|\u1edc|\u1eda|\u1ee2|\u1ede|\u1ee0/g,"O")).replace(/\xd9|\xda|\u1ee4|\u1ee6|\u0168|\u01af|\u1eea|\u1ee8|\u1ef0|\u1eec|\u1eee/g,"U")).replace(/\u1ef2|\xdd|\u1ef4|\u1ef6|\u1ef8/g,"Y")).replace(/\u0110/g,"D")}var Be=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateSchool=function(e,t){1e3!==a.props.user.role&&e!==a.props.user.group||a.setState(function(a){var n=a.school;return{school:Object(l.a)({},n,Object(b.a)({},e,t))}})},a.clickSchool=function(e){return function(){a.setState({selectedSchool:e,messages:null})}},a.clickAllMessages=function(e){return function(){a.setState({selectedSchool:null,messages:e})}},a._addNewSchool=function(){a.setState({addNewSchool:!a.state.addNewSchool})},a.editSchool=function(e,t){return function(){if(!e||!t)return a.setState({editSchool:null});a.setState({editSchool:{key:e,school:t}})}},a.state={school:{},addNewSchool:!1,search:""},a.ref=g.database().ref(a.props.DB_PREFIX+"/groups").on("value",function(e){var t=e.val();Object.keys(t).forEach(function(e){a.updateSchool(e,t[e])})}),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.ref.off()}},{key:"render",value:function(){var e=this,t=this.state,a=t.school,n=t.selectedSchool,c=t.addNewSchool,o=t.messages,l=t.editSchool,i={display:1e3===this.props.user.role?"inherit":"none"};return r.a.createElement("div",{className:"Admin"},r.a.createElement(j.a,{position:"static"},r.a.createElement(N.a,null,r.a.createElement(w.a,{variant:"h6",color:"inherit"},"SCS - Admin"))),r.a.createElement("div",{className:"container mt-3"},r.a.createElement(H.a,{variant:"contained",color:"primary",onClick:this._addNewSchool,style:i},"Th\xeam tr\u01b0\u1eddng"),r.a.createElement("br",null),r.a.createElement(J.a,{id:"outlined-name",label:"T\xecm ki\u1ebfm theo t\xean tr\u01b0\u1eddng",margin:"normal",variant:"outlined",fullWidth:!0,value:this.state.search,style:i,onChange:function(t){var a=t.target.value;e.setState({search:a})}}),r.a.createElement(re,Object.assign({open:c,toggle:this._addNewSchool,school:a},this.props)),r.a.createElement(Me,Object.assign({open:l,toggle:this.editSchool(),school:a},this.props)),n?r.a.createElement("div",{className:"card mt-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(H.a,null,a[n].name),r.a.createElement(H.a,{onClick:function(){return e.setState({selectedSchool:null})}},"Quay l\u1ea1i"))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"text-muted"},"Qu\u1ea3n l\xfd danh s\xe1ch t\u01b0 v\u1ea5n vi\xean"),r.a.createElement(Oe,{school:n}))):o?r.a.createElement("div",{className:"card mt-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(H.a,null,a[o].name),r.a.createElement(H.a,{onClick:function(){return e.setState({messages:null})}},"Quay l\u1ea1i"))),r.a.createElement("div",{className:"card-body"},r.a.createElement(Ue,{school:o}))):r.a.createElement("div",{className:"row"},Object.keys(a).filter(function(t){return Fe(a[t].name.toLowerCase()).includes(Fe(e.state.search.toLocaleLowerCase()))}).map(function(t,n){return r.a.createElement("div",{className:"col-12 col-md-6 col-lg-6 col-xl-6",key:n},r.a.createElement("div",{className:"card card-body mt-3 Card"},r.a.createElement("span",{onClick:e.clickSchool(t),className:"Cursor"},a[t].name),r.a.createElement(H.a,{onClick:e.clickAllMessages(t)},"Xem tin nh\u1eafn"),r.a.createElement(H.a,{onClick:e.clickSchool(t)},"Qu\u1ea3n l\xfd t\u01b0 v\u1ea5n vi\xean"),r.a.createElement(H.a,{style:i,onClick:e.editSchool(t,a[t])},"S\u1eeda th\xf4ng tin tr\u01b0\u1eddng")))}))))}}]),t}(n.Component),Ae=function(e){return r.a.createElement(d.Consumer,null,function(t){return r.a.createElement(Be,Object(l.a)({},t,e))})},De="pagetuyensinh",Le={apiKey:"AIzaSyBxBvZZPxo06HQWHWudRGytuJoSNw5LNX8",authDomain:"localhost",databaseURL:"https://page-tuyen-sinh.firebaseio.com",projectId:"page-tuyen-sinh",storageBucket:"page-tuyen-sinh.appspot.com",messagingSenderId:"497060879105"},We=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e)))._doLogin=function(){var e=new URLSearchParams(window.location.search),t=e.get("email"),n=e.get("password");if(!t)return a.setState({appState:"new_user"});a.setState({appState:"loading",email:t,password:n}),g.auth().signInWithEmailAndPassword(t,n).then(function(e){a.setState({uId:e.$uid}),a._getUserInfo(e.user.uid)}).catch(function(e){if("The password is invalid or the user does not have a password."===e.message)return alert("Sai m\u1eadt kh\u1ea9u");a._doRegister(t,n)})},a._getUserInfo=function(e){g.database().ref(De+"/users/"+e).once("value").then(function(t){g.database().ref(De+"/groups").once("value").then(function(n){var r=n.val();console.log(r);var c=t.val()||{};if(c.$uid=e,c.role){var o=c.role;a.setState({appState:o>=800?"admin":"supporter",user:c})}else a.setState({appState:"register",uid:e,groups:r,isLocked:0===c.role})})}).catch(function(e){console.log(e)})},a._doRegister=function(e,t){return a.setState({appState:"init"}),g.auth().createUserWithEmailAndPassword(e,t).then(function(){a._doLogin()}).catch(function(){alert("C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng b\xe1o l\u1ea1i v\u1edbi admin")})},a._register=function(e){var t=a.state.uid;return g.database().ref(De+"/users/"+t).set(a.removeTempKeys(e),function(e){e&&(console.log(e),alert("C\xf3 l\u1ed7i x\u1ea3y ra")),a.setState({isLocked:!0}),alert("\u0110\u0103ng k\xfd th\xe0nh c\xf4ng, h\xe3y ch\u1edd admin duy\u1ec7t t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n")})},a._changeState=function(e){return a.setState(e)},a.decodeFirebaseArray=function(e,t){return!e||Array.isArray(e)?e:Object.keys(e).map(function(a){return e[a]["$"+t]=a,e[a]})},a.removeTempKeys=function(e){var t=Object.assign({},e);return Object.keys(t).forEach(function(e){e.startsWith("$")&&delete t[e]}),t},a.renderApp=function(){var e=a.state.appState,t=Object(l.a)({},a.props,a.state);return"loading"===e?r.a.createElement("p",null,r.a.createElement("center",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:"https://raw.githubusercontent.com/manh16nd/chon-truong/master/loading.gif",alt:"Loading"}))):"init"===e?r.a.createElement(C,null):"register"===e?r.a.createElement(k,t):"supporter"===e?r.a.createElement(q,t):"admin"===e?r.a.createElement(Ae,t):null},g.apps.length||g.initializeApp(Le),a.state={appState:null,DB_PREFIX:De},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this._doLogin()}},{key:"render",value:function(){return r.a.createElement(d.Provider,{value:{app:this.state,changeState:this._changeState,register:this._register,removeTempKeys:this.removeTempKeys,decodeFirebaseArray:this.decodeFirebaseArray,DB_PREFIX:De}},this.renderApp())}}]),t}(n.Component),Xe=Object(p.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(We),$e=a(234);a(554);o.a.render(r.a.createElement($e.a,null,r.a.createElement(Xe,null)),document.getElementById("root"))}},[[303,1,2]]]);
//# sourceMappingURL=main.ea626063.chunk.js.map