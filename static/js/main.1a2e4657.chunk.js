(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={component:"TypingIndicator_component__zJe-E",dots:"TypingIndicator_dots__fwZnf","ball-beat":"TypingIndicator_ball-beat__-PO6d"}},13:function(e,t,n){e.exports={component:"UserList_component__3wRjv",online:"UserList_online__34X0u"}},14:function(e,t,n){e.exports={component:"MessageList_component__38GGZ",empty:"MessageList_empty__2fgfw"}},15:function(e,t,n){e.exports={component:"Message_component__3-DsD",online:"Message_online__3QiE_"}},16:function(e,t,n){e.exports={container:"FileInput_container___tE11",component:"FileInput_component__13FhR"}},23:function(e,t,n){e.exports={component:"UserHeader_component__14mC3",pulse:"UserHeader_pulse__2gTzf"}},25:function(e,t,n){e.exports={component:"CreateMessageForm_component__3S1hD"}},26:function(e,t,n){e.exports={component:"RoomList_component__2734B"}},27:function(e,t,n){e.exports={component:"RoomHeader_component__2Xs8F"}},28:function(e,t,n){e.exports={component:"CreateRoomForm_component__3qxlM"}},29:function(e,t,n){e.exports={component:"WelcomeScreen_component__2O8DZ",pulse:"WelcomeScreen_pulse__QGuDP"}},30:function(e,t,n){e.exports={component:"JoinRoomScreen_component__3uiTn",pulse:"JoinRoomScreen_pulse__2ZHKw"}},35:function(e,t,n){e.exports=n(73)},42:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(12),o=n(8),r=n(2),s=n(3),i=n(7),c=n(4),l=n(6),u=n(0),m=n.n(u),d=n(22),p=n.n(d),h=n(11),f=(n(42),n(23)),g=n.n(f),v=function(e){var t=e.user,n=void 0===t?{}:t;return m.a.createElement("header",{className:g.a.component},m.a.createElement("img",{src:n.avatarURL||"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",alt:n.name}),m.a.createElement("div",null,m.a.createElement("h3",null,n.name),m.a.createElement("h5",null,n.id&&"".concat(n.id))))},E=n(13),b=n.n(E),k=function(e){var t=e.room,n=(e.current,e.createConvo);e.removeUser;return m.a.createElement("ul",{className:b.a.component},t.users.map(function(e){return m.a.createElement("li",{key:e.id,className:"online"===e.presence.state?b.a.online:null,onClick:function(t){return n({user:e})},style:{order:"online"===e.presence.state&&-1}},m.a.createElement("img",{src:e.avatarURL,alt:e.name}),m.a.createElement("p",null,e.name))}))},_=n(14),y=n.n(_),O=n(15),j=n.n(O),I=n(24),C=n.n(I),L=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return"image"===this.props.type?m.a.createElement("img",{controls:!0,src:this.props.link,alt:this.props.name}):"video"===this.props.type?m.a.createElement("video",{controls:!0,src:this.props.link}):"audio"===this.props.type?m.a.createElement("audio",{controls:!0,src:this.props.link}):m.a.createElement("a",{href:this.props.link,download:!0},"Download File")}}]),t}(m.a.Component),R=function(e){var t=e.user,n=e.createConvo;return function(e){return e.sender?m.a.createElement("li",{key:e.id,className:j.a.component},m.a.createElement("img",{onClick:function(t){return n({user:e.sender})},src:e.sender.avatarURL,alt:e.sender.name}),m.a.createElement("div",null,m.a.createElement("span",{className:e.sender.id===t.id||e.sender.presence&&"online"===e.sender.presence.state?j.a.online:null},"".concat(e.sender.name," | ").concat(function(e){var t=new Date(e),n=t.getMinutes();return"".concat(t.getHours(),":").concat(n<10?"0"+n:n)}(e.createdAt))),m.a.createElement("p",null,m.a.createElement(C.a,{properties:{target:"_blank"}},e.text)),e.attachment?m.a.createElement(L,{link:e.attachment.link,type:e.attachment.type,name:e.attachment.name}):null)):null}},A=m.a.createElement("div",{className:y.a.empty},m.a.createElement("span",{role:"img","aria-label":"post"},"\ud83d\udcdd"),m.a.createElement("h2",null,"No Messages Yet"),m.a.createElement("p",null,"Be the first to post in this room or invite someone to join the room")),T=function(e){var t=e.messages,n=void 0===t?{}:t,a=e.user,o=e.createConvo;return m.a.createElement("ul",{id:"messages",className:y.a.component},Object.keys(n).length>0?m.a.createElement("wrapper-",null,Object.keys(n).reverse().map(function(e){return R({user:a,createConvo:o})(n[e])})):A)},w=n(10),x=n.n(w),U=m.a.createElement("div",{className:x.a.dots},[0,1,2].map(function(e){return m.a.createElement("div",{key:e})})),S=function(e){var t=e.typing,n=void 0===t?{}:t;return Object.keys(n).length?m.a.createElement("div",{className:x.a.component},m.a.createElement("div",null,U),m.a.createElement("div",null,"".concat(Object.keys(n).slice(0,2).join(" and ")," is typing"))):null},M=n(25),F=n.n(M),N=n(16),H=n.n(N),D=function(e){var t=e.state,n=t.user,a=t.message,o=t.room;return o.id?m.a.createElement("div",{className:H.a.container},m.a.createElement("svg",null,m.a.createElement("use",{xlinkHref:"index.svg#attach"})),m.a.createElement("input",{className:H.a.component,type:"file",onChange:function(e){var t=e.target.files[0];t&&n.sendMessage({text:a||t.name,roomId:o.id,attachment:{name:t.name.replace(/[^A-Za-z0-9._-]/g,"--"),file:t}})}})):null},V=function(e){var t=e.state,n=t.user,a=void 0===n?{}:n,o=t.room,r=void 0===o?{}:o,s=t.message,i=void 0===s?"":s,c=e.actions.runCommand;return r.id?m.a.createElement("form",{className:F.a.component,onSubmit:function(e){e.preventDefault();var t=e.target[0].value;e.target[0].value="",t.startsWith("/")?c(t.slice(1)):t.length>0&&a.sendMessage({text:t,roomId:r.id})}},m.a.createElement("input",{placeholder:"Type a Message..",onInput:function(e){return a.isTypingIn({roomId:r.id})}}),m.a.createElement(D,{state:{user:a,room:r,message:i}}),m.a.createElement("button",{type:"submit"},m.a.createElement("svg",null,m.a.createElement("use",{xlinkHref:"index.svg#send"})))):null},Z=n(26),P=n.n(Z),B=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.readCursor({roomId:t.id});return a&&Object.keys(n).filter(function(e){return e>a.position}).length||void 0},J=function(e){var t=e.rooms,n=void 0===t?[]:t,a=e.user,o=e.messages,r=e.current,s=e.typing,i=e.actions;return m.a.createElement("ul",{className:P.a.component},n.map(function(e){var t,n=Object.keys(o[e.id]||{}),c=n.length>0&&o[e.id][n.pop()],l=e.users.find(function(e){return e.id!==a.id}),u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=B(e,t,n)||0,o=Object.keys(n).pop()||0;return-1*(10*a+parseInt(o))}(a,e,o[e.id]),d=B(a,e,o[e.id]);return m.a.createElement("li",{key:e.id,disabled:e.id===r.id,onClick:function(t){return i.joinRoom(e)},style:{order:u}},e.name.match(a.id)&&l?m.a.createElement("img",{src:l.avatarURL,alt:l.id}):(t=e.isPrivate?"lock":"public",m.a.createElement("svg",null,m.a.createElement("use",{xlinkHref:"index.svg#".concat(t)}))),m.a.createElement("col-",null,m.a.createElement("p",null,e.name.includes(a.id)?l.name:e.name),m.a.createElement("span",null,c&&c.text)),e.id!==r.id&&d?m.a.createElement("label",null,d):Object.keys(s[e.id]||{}).length>0?m.a.createElement("div",{className:w.dots},[0,1,2].map(function(e){return m.a.createElement("div",{key:e})})):null)}))},z=n(27),W=n.n(z),G=function(e){var t=e.state,n=t.room,a=t.user,o=t.sidebarOpen,r=t.userListOpen,s=e.actions,i=s.setSidebar,c=s.setUserList;return m.a.createElement("header",{className:W.a.component},m.a.createElement("button",{onClick:function(e){return i(!o)}},m.a.createElement("svg",null,m.a.createElement("use",{xlinkHref:"index.svg#menu"}))),m.a.createElement("h1",null,n.name&&n.name.replace(a.id,"")),n.users&&m.a.createElement("div",{onClick:function(e){return c(!r)}},m.a.createElement("span",null,n.users.length),m.a.createElement("svg",null,m.a.createElement("use",{xlinkHref:"index.svg#members"}))))},Q=n(28),q=n.n(Q),K=function(e){var t=e.submit;return m.a.createElement("form",{className:q.a.component,onSubmit:function(e){e.preventDefault(),t({name:e.target[0].value,private:e.target.elements[2].checked}),e.target[0].value=""}},m.a.createElement("input",{placeholder:"Create a Room"}),m.a.createElement("button",null,m.a.createElement("input",{type:"checkbox"}),m.a.createElement("svg",null,m.a.createElement("use",{xlinkHref:"index.svg#lock"}))),m.a.createElement("button",{type:"submit"},m.a.createElement("svg",null,m.a.createElement("use",{xlinkHref:"index.svg#add"}))))},X=n(29),Y=n.n(X),$=function(){return m.a.createElement("section",null,m.a.createElement("div",{className:Y.a.component},m.a.createElement("span",{role:"img","aria-label":"post"},m.a.createElement("svg",{width:"27",height:"29",viewBox:"0 0 27 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m.a.createElement("path",{d:"M10.6067 0L7.95502 1.52249L13.2584 4.56748L18.5617 1.52249L15.91 0L13.2584 1.52249L10.6067 0Z",fill:"#FF8473"}),m.a.createElement("path",{d:"M2.65167 4.56748L5.30335 3.04498L13.2584 7.61246L21.2134 3.04498L23.8651 4.56748L13.2584 10.6574L2.65167 4.56748Z",fill:"#FF8473"}),m.a.createElement("path",{d:"M7.95502 16.7474L5.30335 15.2249V18.2699L7.95502 19.7924V16.7474Z",fill:"#FF8473"}),m.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 6.08997V21.3149L13.2584 28.9274V13.7024L0 6.08997ZM10.6067 15.2249V24.3599L2.65167 19.7924V10.6574L10.6067 15.2249Z",fill:"#FF8473"}),m.a.createElement("path",{d:"M15.91 12.1799V15.2249L26.5167 9.13495V6.08997L15.91 12.1799Z",fill:"#FF8473"}),m.a.createElement("path",{d:"M15.91 18.2699V21.3149L26.5167 15.2249V12.1799L15.91 18.2699Z",fill:"#FF8473"}),m.a.createElement("path",{d:"M15.91 24.3599V27.4049L26.5167 21.3149V18.2699L15.91 24.3599Z",fill:"#FF8473"}))),m.a.createElement("p",null,"Authenticating, subscribing to rooms",m.a.createElement("br",null),"and fetching messages.")))},ee=n(30),te=n.n(ee),ne=function(){return m.a.createElement("section",null,m.a.createElement("div",{className:te.a.component},m.a.createElement("span",{role:"img","aria-label":"post"},m.a.createElement("svg",{viewBox:"0 0 59 80"},m.a.createElement("g",null,m.a.createElement("path",{d:"M48.417 49.444L38.585 73.229 36.012 71.394 41.802 56.726 31.211 59.519C31.211 59.519 26.022 42.42 26.513 30.837 26.218 22.744 27.644 16.96 30.167 13.6 34.274 8.408 42.099 3.953 49.793 7.645 54.701 9.869 57.658 13.889 58.107 17.824 59.479 34.859 38.498 41.817 38.498 41.817L38.085 38.191C38.085 38.191 44.945 35.464 49.105 29.553 53.266 23.643 51.245 15.88 46.569 14.464 42.061 13.577 37.34 18.757 36.516 27.966 34.721 41.776 39.393 52.006 39.393 52.006L48.417 49.444M0 62.396L15.402 74.372 16.522 71.783 8.26 65.71 16.853 63.305C16.853 63.305 10.998 47.535 10.597 32.251 10.229 27.354 9.896 11.684 15.924 8.975 16.976 7.213 18.743 5.903 18.743 5.903 18.743 5.903 3.467 4.584 4.184 32.453 5.706 51.166 9.451 59.821 9.451 59.821L0 62.396"}),m.a.createElement("path",{d:"M29.91,61.761 L38.969,59.263 L30.045,80 L11.998,66.538 L19.098,64.644 C19.098,64.644 3.276,20.694 21.128,5.095 C32.325,-3.789 43.164,3.999 42.965,4.872 C40.203,4.812 37.842,5.844 37.842,5.844 C37.842,5.844 31.789,3.265 27.475,12.503 C23.719,20.705 22.048,34.474 29.91,61.761"}),m.a.createElement("path",{d:"M41.806,17.606 C42.599,24.356 38.244,27.206 38.244,27.206 L37.819,30.659 C37.819,30.659 47.709,25.549 45.669,15.819 C44.566,15.913 42.212,17.242 41.806,17.606"})))),m.a.createElement("p",null,"Join a room, create a room or click on a user avatar and start a conversation.")))},ae=n(76),oe=n(75),re=n(31),se=n.n(re),ie=n(17),ce="pusher-chatkit-demo.auth0.com",le="VF0kHM9szMj0aQGEfqafrdAKVwRb2a3Q",ue="http://localhost:3000",me="v1:us1:7954c374-f491-4c08-b71e-5abfc0a3dc89",de=function(e){return"".concat("https://zmarkan-chatkit-sample-server.glitch.me/token","?token=").concat(e)},pe=n(32),he=n(33),fe=n.n(he),ge=function(){function e(){Object(r.a)(this,e),this.auth0=new pe.a.WebAuth({domain:ce,clientID:le,redirectUri:ue,responseType:"token id_token",scope:"openid email profile"}),this.login=this.login.bind(this),this.logout=this.logout.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getAuthToken=this.getAuthToken.bind(this),this.getUserId=this.getUserId.bind(this)}return Object(s.a)(e,[{key:"isAuthenticated",value:function(){var e=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<e}},{key:"login",value:function(){this.auth0.authorize()}},{key:"getAuthToken",value:function(){return localStorage.getItem("access_token")}},{key:"getUserId",value:function(){var e=localStorage.getItem("id_token");return fe()(e).email}},{key:"handleAuthentication",value:function(e){var t=this;this.auth0.parseHash(function(n,a){if(a&&a.accessToken&&a.idToken){t.setSession(a);var o=t.getUserId(a.idToken);e(a,o)}else n&&(console.log(n),alert("Error: ".concat(n.error,". Check the console for further details.")))})}},{key:"setSession",value:function(e){var t=JSON.stringify(1e3*e.expiresIn+(new Date).getTime());localStorage.setItem("access_token",e.accessToken),localStorage.setItem("id_token",e.idToken),localStorage.setItem("expires_at",t)}},{key:"logout",value:function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),localStorage.removeItem("chatkit_user")}}]),e}(),ve=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return m.a.createElement(_e,this.props)}}]),t}(m.a.Component),Ee=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.auth.handleAuthentication(this.props.authCallback),m.a.createElement("h1",null,"Loading...")}}]),t}(m.a.Component),be=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.auth.login(),m.a.createElement("h1",null,"Authorizing...")}}]),t}(m.a.Component),ke=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(c.a)(t).call(this))).auth=new ge,e.authCallback=e.authCallback.bind(Object(o.a)(Object(o.a)(e))),e.hasHashToken=e.hasHashToken.bind(Object(o.a)(Object(o.a)(e))),e}return Object(l.a)(t,e),Object(s.a)(t,[{key:"hasHashToken",value:function(e){var t=e.location;return/access_token|id_token|error/.test(t.hash)}},{key:"authCallback",value:function(e){this.setState(e)}},{key:"render",value:function(){return this.props.auth.isAuthenticated()?m.a.createElement(ve,{userId:this.auth.getUserId()}):this.hasHashToken(this.props)?m.a.createElement(Ee,{auth:this.props.auth,authCallback:this.authCallback}):m.a.createElement(be,{auth:this.props.auth,authCallback:this.authCallback})}}]),t}(m.a.Component),_e=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={user:{},room:{},messages:{},typing:{},sidebarOpen:!1,userListOpen:window.innerWidth>1e3},n.actions={setSidebar:function(e){return n.setState({sidebarOpen:e})},setUserList:function(e){return n.setState({userListOpen:e})},setUser:function(e){return n.setState({user:e})},setRoom:function(e){n.setState({room:e,sidebarOpen:!1}),n.actions.scrollToEnd()},removeRoom:function(e){return n.setState({room:{}})},joinRoom:function(e){n.actions.setRoom(e),n.actions.subscribeToRoom(e),n.state.messages[e.id]&&n.actions.setCursor(e.id,Object.keys(n.state.messages[e.id]).pop())},subscribeToRoom:function(e){return!n.state.user.roomSubscriptions[e.id]&&n.state.user.subscribeToRoom({roomId:e.id,hooks:{onMessage:n.actions.addMessage}})},createRoom:function(e){return n.state.user.createRoom(e).then(n.actions.joinRoom)},createConvo:function(e){if(e.user.id!==n.state.user.id){var t=n.state.user.rooms.find(function(t){return t.name===e.user.id+n.state.user.id||t.name===n.state.user.id+e.user.id});t?n.actions.joinRoom(t):n.actions.createRoom({name:n.state.user.id+e.user.id,addUserIds:[e.user.id],private:!0})}},addUserToRoom:function(e){var t=e.userId,a=e.roomId,o=void 0===a?n.state.room.id:a;return n.state.user.addUserToRoom({userId:t,roomId:o}).then(n.actions.setRoom)},removeUserFromRoom:function(e){var t=e.userId,a=e.roomId,o=void 0===a?n.state.room.id:a;return t===n.state.user.id?n.state.user.leaveRoom({roomId:o}):n.state.user.removeUserFromRoom({userId:t,roomId:o}).then(n.actions.setRoom)},setCursor:function(e,t){return n.state.user.setReadCursor({roomId:e,position:parseInt(t)}).then(function(e){return n.forceUpdate()})},addMessage:function(e){var t=e.room.id,a=e.id;(n.setState(Object(h.set)(n.state,["messages",t,a],e)),t===n.state.room.id)&&(((n.state.user.readCursor({roomId:t})||{}).position||0)<a&&n.actions.setCursor(t,a),n.actions.scrollToEnd());n.actions.showNotification(e)},runCommand:function(e){var t={invite:function(e){var t=Object(a.a)(e,1)[0];return n.actions.addUserToRoom({userId:t})},remove:function(e){var t=Object(a.a)(e,1)[0];return n.actions.removeUserFromRoom({userId:t})},leave:function(e){Object(a.a)(e,1)[0];return n.actions.removeUserFromRoom({userId:n.state.user.id})}},o=e.split(" ")[0],r=e.split(" ").slice(1),s=t[o];s&&s(r).catch(console.log)},scrollToEnd:function(e){return setTimeout(function(){var e=document.querySelector("#messages");e&&(e.scrollTop=1e5)},0)},isTyping:function(e,t){return n.setState(Object(h.set)(n.state,["typing",e.id,t.id],!0))},notTyping:function(e,t){return n.setState(Object(h.del)(n.state,["typing",e.id,t.id]))},setUserPresence:function(){return n.forceUpdate()},showNotification:function(e){"Notification"in window&&n.state.user.id&&n.state.user.id!==e.senderId&&"hidden"===document.visibilityState&&new Notification("New Message from ".concat(e.sender.id),{body:e.text,icon:e.sender.avatarURL}).addEventListener("click",function(t){n.actions.joinRoom(e.room),window.focus()})}},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){"Notification"in window&&Notification.requestPermission(),function(e,t){e.state;var n=e.actions,a=t.id,o=t.accessToken;console.log("id: ".concat(a)),new ie.ChatManager({tokenProvider:new ie.TokenProvider({url:de(o)}),instanceLocator:me,userId:a}).connect({onUserStartedTyping:n.isTyping,onUserStoppedTyping:n.notTyping,onAddedToRoom:n.subscribeToRoom,onRemovedFromRoom:n.removeRoom,onUserCameOnline:n.setUserPresence,onUserWentOffline:n.setUserPresence}).then(function(e){console.log("subscribe to rooms"),Promise.all(e.rooms.map(function(t){return console.log(t),e.subscribeToRoom({roomId:t.id,hooks:{onMessage:n.addMessage}})})).then(function(t){console.log(t),n.setUser(e),e.rooms.length>0&&n.joinRoom(e.rooms[0])})}).catch(function(e){return console.log("Error on connection",e)})}(this,{id:this.props.userId,accessToken:localStorage.getItem("access_token")})}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.room,a=e.messages,o=e.typing,r=e.sidebarOpen,s=e.userListOpen,i=this.actions,c=i.createRoom,l=i.createConvo,u=i.removeUserFromRoom;return m.a.createElement("main",null,m.a.createElement("aside",{"data-open":r},m.a.createElement(v,{user:t}),m.a.createElement(J,{user:t,rooms:t.rooms,messages:a,typing:o,current:n,actions:this.actions}),t.id&&m.a.createElement(K,{submit:c})),m.a.createElement("section",null,m.a.createElement(G,{state:this.state,actions:this.actions}),n.id?m.a.createElement("row-",null,m.a.createElement("col-",null,m.a.createElement(T,{user:t,messages:a[n.id],createConvo:l}),m.a.createElement(S,{typing:o[n.id]}),m.a.createElement(V,{state:this.state,actions:this.actions})),s&&m.a.createElement(k,{room:n,current:t.id,createConvo:l,removeUser:u})):t.id?m.a.createElement(ne,null):m.a.createElement($,null)))}}]),t}(m.a.Component),ye=new ge;p.a.render(m.a.createElement(ae.a,{history:se()()},m.a.createElement(oe.a,{path:"/",render:function(e){return m.a.createElement(ke,Object.assign({auth:ye},e))}})),document.getElementById("root"))}},[[35,2,1]]]);
//# sourceMappingURL=main.1a2e4657.chunk.js.map