(this["webpackJsonpnews-portal"]=this["webpackJsonpnews-portal"]||[]).push([[0],{42:function(e,t,a){e.exports=a(71)},47:function(e,t,a){},52:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),c=a.n(s),i=(a(47),a(8)),o=a(14),l=(a(52),a(3)),u=a(10),m=a(11),d=a(13),p=a(12),h=a(21),E=a.n(h),f="https://mysterious-reef-29460.herokuapp.com/api/v1",b=function(e){var t=e.item,a=t.title,n=t.text;return r.a.createElement("article",{className:"media"},r.a.createElement("div",{className:"content"},r.a.createElement("h3",null,a),r.a.createElement("p",null,n)))},g=function(e){return e.news.news},v=function(e){return e.news.isLoading},y=function(e){return e.news.errorMessage},O=function(e){return e.auth.isAuthed},j=function(e){return e.auth.isLoading},N=function(e){return e.auth.errorMessage},_=function(e){return e.profile.profile},w=function(e){return e.profile.isLoading},S=function(e){return e.profile.errorMessage},A=function(e){return e.auth.userId},C=function(){return r.a.createElement("progress",{className:"progress is-primary",max:"100"})},T={wrong_email_or_password:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",user_not_found:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",other:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d"},L=function(e){var t=e.errorMessage;return r.a.createElement("p",{className:"has-text-danger"},T[t]||T.other)},F=function(e){var t=e.children,a=e.type,n=e.text;return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},"textOnly"===a?r.a.createElement("p",{className:"title is-size-4 has-text-centered"},n):t))};F.defaultProps={children:"",type:"",text:""};var U=F,M=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).renderContent=function(e){return 0===e.length?r.a.createElement("p",{className:"title"},"\u041d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u043d\u0435\u0442"):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title"},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),e.map((function(e){return r.a.createElement(b,{key:e.id,item:e})})),r.a.createElement("p",{className:"mt-3 is-size-5"},"\u0412\u0441\u0435\u0433\u043e \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439: ",e.length))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.fetchNews)()}},{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.news,n=e.errorMessage;return r.a.createElement(U,null,a&&this.renderContent(a),t&&r.a.createElement(C,null),n&&r.a.createElement(L,{errorMessage:n}))}}]),a}(n.Component);M.defaultProps={news:[]};var x=Object(i.b)((function(e){return{news:g(e),isLoading:v(e),errorMessage:y(e)}}),{fetchNews:function(){return function(e){e({type:"FETCH_NEWS_START"}),E()({method:"get",url:f+"/news"}).then((function(t){var a=t.data;"err"!==a.status?e({type:"FETCH_NEWS_SUCCESS",payload:a.data}):e({type:"FETCH_NEWS_FAILURE",payload:a.message})})).catch((function(t){e({type:"FETCH_NEWS_FAILURE",payload:t.message})}))}}})(M),R=a(20),I=a(2),k=function(e){var t=e.name,a=e.type,n=e.change,s=e.isRequired,c=e.value,i=e.text,o=e.placeholder;return r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:t,className:"label"},i,r.a.createElement("span",{className:"is-size-7 is-block"},"(\u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435: ",o,")")),r.a.createElement("div",{className:"control"},r.a.createElement("input",{type:a,id:t,value:c,name:t,onChange:n,required:s,placeholder:"".concat(i,"\u2026"),className:"input is-primary"})))},H=[{type:"email",name:"username",isRequired:!0,text:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",testData:"max@test.com"},{type:"password",name:"password",isRequired:!0,text:"\u041f\u0430\u0440\u043e\u043b\u044c",testData:"12345"}],D=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={user:{username:"",password:""}},e.onInputChange=function(t){var a=t.currentTarget.name,n=t.currentTarget.value;e.setState((function(e){return{user:Object(I.a)(Object(I.a)({},e.user),{},Object(R.a)({},a,n))}}))},e.onSubmit=function(t){t.preventDefault();var a=e.state.user;(0,e.props.auth)(a)},e.renderInputs=function(t){var a=e.state.user;return t.map((function(t){return r.a.createElement(k,{key:t.name,name:t.name,value:a[t.name],type:t.type,change:e.onInputChange,isRequired:t.isRequired,text:t.text,placeholder:t.testData})}))},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.errorMessage;a!==e.errorMessage&&"wrong_email_or_password"===a&&this.setState({user:Object(I.a)(Object(I.a)({},t.user),{},{password:""})})}},{key:"render",value:function(){var e=this.props,t=e.isAuthed,a=e.isLoading,n=e.errorMessage,s=this.state.user,c=s.username,i=s.password,o=0===c.trim().length||0===i.trim().length;return r.a.createElement(U,null,r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"column is-half"},r.a.createElement("h2",{className:"title"},"\u0412\u0445\u043e\u0434 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),n&&r.a.createElement(L,{errorMessage:n}),t?r.a.createElement(l.a,{to:"/profile"}):r.a.createElement("form",{onSubmit:this.onSubmit},this.renderInputs(H),r.a.createElement("button",{className:"button is-primary",type:"submit",disabled:a||o},a?"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430\u2026":"\u0412\u043e\u0439\u0442\u0438")))))}}]),a}(n.Component);D.defaultProps={isLoading:!1};var z=Object(i.b)((function(e){return{isAuthed:O(e),isLoading:j(e),errorMessage:N(e)}}),{auth:function(e){return function(t){var a;t({type:"AUTH_START"}),(a=e,E()({method:"post",url:f+"/validate",headers:{"content-type":"application/json"},data:{email:a.username,password:a.password}})).then((function(e){if(200!==e.status)throw Error(e.statusText);return e})).then((function(e){var a=e.data;"err"!==a.status?t({type:"AUTH_SUCCESS",payload:a.data}):t({type:"AUTH_FAILURE",payload:a.message,error:!0})})).catch((function(e){return t({type:"AUTH_FAILURE",payload:e.message,error:!0})}))}}})(D),W=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).renderContent=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"title"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),r.a.createElement("p",{className:"is-size-5 mb-3"},"\u0413\u043e\u0440\u043e\u0434: ",e.city),r.a.createElement("div",{className:"mb-3"},r.a.createElement("h3",{className:"is-size-5 has-text-weight-semibold"},"\u0417\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u043e\u0432"),r.a.createElement("ul",null,e.languages.map((function(e){return r.a.createElement("li",{key:e},e)})))),r.a.createElement("div",{className:"mb-3"},r.a.createElement("h3",{className:"is-size-5 has-text-weight-semibold"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),r.a.createElement("ul",null,e.social.map((function(e){return r.a.createElement("li",{key:e.label},r.a.createElement("a",{href:e.link,className:"has-text-primary is-capitalized"},e.label))})))))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.id;(0,e.fetchUserInfo)(t)}},{key:"render",value:function(){var e=this.props,t=e.profile,a=e.isLoading,n=e.errorMessage;return r.a.createElement(U,null,t&&this.renderContent(t),a&&r.a.createElement(C,null),n&&r.a.createElement(L,{errorMessage:n}))}}]),a}(n.Component);W.defaultProps={profile:null};var q=Object(i.b)((function(e){return{profile:_(e),isLoading:w(e),id:A(e),errorMessage:S(e)}}),{fetchUserInfo:function(e){return function(t){t({type:"FETCH_USER_INFO_START"}),function(e){return E()({method:"get",url:"".concat(f+"/user-info","/").concat(e)})}(e).then((function(e){var a=e.data;"err"!==a.status?t({type:"FETCH_USER_INFO_SUCCESS",payload:a.data}):t({type:"FETCH_USER_INFO_FAILURE",payload:a.message})})).catch((function(e){return t({type:"FETCH_USER_INFO_FAILURE",error:e.message})}))}}})(W),P=function(){return r.a.createElement(U,{type:"textOnly",text:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"})},G=a(41),J=function(e){var t=e.component,a=e.auth,n=Object(G.a)(e,["component","auth"]);return r.a.createElement(l.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(l.a,{to:"/login"})}}))},B=function(e){var t=e.isAuthed,a=e.logout;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("button",{type:"button",className:"button is-primary",onClick:a},"\u0412\u044b\u0439\u0442\u0438"):r.a.createElement(o.b,{className:"button is-primary",to:"/login"},"\u0412\u043e\u0439\u0442\u0438"))},K=[{id:"home",name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:"/",isExact:!0,isAuthed:!1},{id:"news",name:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438",path:"/news",isExact:!1,isAuthed:!1},{id:"profile",name:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",path:"/profile",isExact:!1,isAuthed:!0}],Q=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isClosed:!0},e.menuHandler=function(){var t=e.state.isClosed;e.setState({isClosed:!t})},e.renderLinks=function(t){var a=e.props,n=a.isAuthed,s=a.location.pathname;return t.map((function(e){return e.path===s?r.a.createElement("p",{key:e.id,className:"navbar-item"},e.name):!n&&e.isAuthed?"":r.a.createElement(o.c,{key:e.id,className:"navbar-item",exact:e.isExact,to:e.path},e.name)}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.isAuthed,a=e.logout,n=this.state.isClosed;return r.a.createElement("header",{className:"has-background-light"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar has-background-light",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("h2",{className:"navbar-item is-size-4 is-uppercase has-text-weight-semibold"},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),r.a.createElement("button",{type:"button",className:"navbar-burger button is-text is-radiusless".concat(n?"":" is-active"),"aria-label":"menu","aria-expanded":"false","data-target":"navbarMenu",onClick:this.menuHandler},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"navbar-menu".concat(n?"":" is-active"),id:"navbarMenu"},r.a.createElement("div",{className:"navbar-start"},this.renderLinks(K)),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(B,{isAuthed:t,logout:a})))))))}}]),a}(n.Component);Q.defaultProps={location:{pathname:""}};var V=Object(i.b)((function(e){return{isAuthed:O(e)}}),{logout:function(){return function(e){e({type:"LOGOUT"})}}})(Object(l.g)(Q)),X=function(){return r.a.createElement(U,{type:"textOnly",text:"\u042d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u0434\u0435\u043b\u0430\u043d\u043e \u043d\u0430 React"})};var Y=Object(i.b)((function(e){return{isAuthed:O(e)}}))((function(e){var t=e.isAuthed;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement(l.d,null,r.a.createElement(J,{auth:t,path:"/profile",component:function(){return r.a.createElement(q,null)}}),r.a.createElement(l.b,{exact:!0,path:"/",component:X}),r.a.createElement(l.b,{path:"/news",component:x}),r.a.createElement(l.b,{path:"/login",component:z}),r.a.createElement(l.b,{component:P})))})),Z=a(15),$=a(38),ee=a(39),te=a(40),ae=a.n(te),ne={news:null,isLoading:!1,errorMessage:""},re={userId:null,isLoading:!1,isAuthed:!1,errorMessage:""},se=a(27),ce={profile:null,isLoading:!1,errorMessage:""},ie=Object(Z.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"AUTH_START":return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0,errorMessage:""});case"AUTH_SUCCESS":return{userId:n.id,isLoading:!1,isAuthed:!0,errorMessage:""};case"AUTH_FAILURE":return{userId:null,isLoading:!1,isAuthed:!1,errorMessage:n};case"LOGOUT":return{userId:null,isAuthed:!1,errorMessage:""};default:return e}},news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_NEWS_START":return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0,errorMessage:""});case"FETCH_NEWS_SUCCESS":return Object(I.a)(Object(I.a)({},e),{},{news:n,isLoading:!1,errorMessage:""});case"FETCH_NEWS_FAILURE":return Object(I.a)(Object(I.a)({},e),{},{news:null,isLoading:!1,errorMessage:n});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_USER_INFO_START":return Object(I.a)(Object(I.a)({},e),{},{isLoading:!0,errorMessage:""});case"FETCH_USER_INFO_SUCCESS":var r=n.social.find((function(e){return"web"===e.label})),s=Object(se.a)(n.social);return r.label!==n.social[0].label&&(s=Object(se.a)(n.social.filter((function(e){return"web"!==e.label})))).unshift(r),Object(I.a)(Object(I.a)({},e),{},{profile:Object(I.a)(Object(I.a)({},n),{},{social:s}),isLoading:!1,errorMessage:""});case"FETCH_USER_INFO_FAILURE":return Object(I.a)(Object(I.a)({},e),{},{profile:null,isLoading:!1,errorMessage:n});case"LOGOUT":return Object(I.a)(Object(I.a)({},e),{},{profile:null,isLoading:!1,errorMessage:""});default:return e}}}),oe=Object(Z.createStore)(ie,Object($.composeWithDevTools)(Object(Z.applyMiddleware)(ee.a,ae.a))),le=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?r.a.createElement(U,{type:"textOnly",text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a."}):t}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(n.Component);c.a.render(r.a.createElement(i.a,{store:oe},r.a.createElement(le,null,r.a.createElement(o.a,{basename:"/news-portal-react"},r.a.createElement(Y,null)))),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.2d5a5c5e.chunk.js.map