(this["webpackJsonppremier-react"]=this["webpackJsonppremier-react"]||[]).push([[0],{38:function(e,t,a){e.exports=a(67)},43:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),c=a.n(s),l=(a(43),a(3)),o=a(4),i=a(6),m=a(5),p=a(7),u=a(2),d=a(16),h=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{className:"z-depth-0"},r.a.createElement("div",{className:"nav-wrapper white"},r.a.createElement(u.b,{to:"/",style:{fontFamily:"monospace"},className:"col s5 brand-logo center black-text"},r.a.createElement("i",{className:"material-icons"},"code"),"Inlaw"))))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"Reporte")," suas criptomoedas para a receita utilizando nossas APIs"),r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"N\xe3o se preocupe com a declara\xe7\xe3o de suas criptos fazemos o trabalho chato para voc\xea."),r.a.createElement("br",null),r.a.createElement("div",{className:"col s6"},r.a.createElement(u.b,{to:"/register",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Register")),r.a.createElement("div",{className:"col s6"},r.a.createElement(u.b,{to:"/login",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large btn-flat waves-effect white black-text"},"Log In")))))}}]),t}(n.Component),f=a(18),g=a(13),v=a.n(g),E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(f.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2};a.password===a.password2&&v.a.post("https://fierce-dawn-85986.herokuapp.com/auth/register",a).then((function(t){return e.props.history.push("/login")}))},e.state={name:"",email:"",password:"",password2:"",errors:{}},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement(u.b,{to:"/dashboard",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back"),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Register")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",r.a.createElement(u.b,{to:"/login"},"Log in"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text"}),r.a.createElement("label",{htmlFor:"name"},"Name")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email"}),r.a.createElement("label",{htmlFor:"email"},"Email")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password"}),r.a.createElement("label",{htmlFor:"password"},"Password")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password"}),r.a.createElement("label",{htmlFor:"password2"},"Confirm Password")),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Sign up"))))))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(f.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};v.a.post("https://fierce-dawn-85986.herokuapp.com/auth/login",a).then((function(t){localStorage.setItem("token",t.data.token),e.props.history.push("/dashboard")})).catch((function(e){e.mesage}))},e.state={email:"",password:"",errors:{}},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement(u.b,{to:"/",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Login")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",r.a.createElement(u.b,{to:"/register"},"Register"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email"}),r.a.createElement("label",{htmlFor:"email"},"Email")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password"}),r.a.createElement("label",{htmlFor:"password"},"Password")),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Login"))))))}}]),t}(n.Component),y=a(23),x=a.n(y),N=a(36),k=a(37),O=a(69),S=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onLogoutClick=function(t){t.preventDefault(),localStorage.removeItem("token"),e.props.history.push("/")},e.onAddClick=function(t){t.preventDefault(),e.props.history.push("/inside")},e.componentDidMount=function(t){var a=localStorage.getItem("token"),n=[];v.a.post("https://fierce-dawn-85986.herokuapp.com/account/list-account",{token:a}).then((function(t){for(var a in t.data.data)n.push({label:t.data.data[a].id,value:a});e.setState({account:n}),console.log(e.state.account)})).catch((function(t){localStorage.removeItem("token"),e.props.history.push("/login")}))},e.onDropdownChange=function(){var t=Object(N.a)(x.a.mark((function t(a){var n,r,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.label,r=[],s=localStorage.getItem("token"),console.log(s),t.next=6,v.a.post("https://fierce-dawn-85986.herokuapp.com/trades/report-trades",{accountId:n,token:s}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 6:v.a.post("https://fierce-dawn-85986.herokuapp.com/trades/list-trades",{accountId:n,token:s}).then((function(t){for(var a in t.data.data)r.push(t.data.data[a]);e.setState({trades:r}),console.log(e.state.trades)})).catch((function(e){console.log(e)}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={account:[],trades:[]},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement(k.a,{options:this.state.account,onChange:this.onDropdownChange}),r.a.createElement("h4",null,r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"Voc\xea est\xe1 logado na plataforma de "," ",r.a.createElement("span",{style:{fontFamily:"monospace"}},"APIs")," \ud83d\udc4f")),r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onLogoutClick,className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Logout"),r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onAddClick,className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Adicionar Exchanges"),r.a.createElement("div",{className:".submissionfield"},r.a.createElement(O.a,{"aria-label":"eefkmvlkefnvlefnvlfnv",value:JSON.stringify(this.state.trades),style:{width:"900px",lenght:"10px",fontSize:"15",borderRadius:"10px",letterSpacing:"1.5px",marginTop:"5rem"}})))))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(f.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={exchange:e.state.name,apiKey:e.state.ApiKey,apiSecret:e.state.ApiSecret,token:localStorage.getItem("token")};v.a.post("https://fierce-dawn-85986.herokuapp.com/account/create-account",a).then((function(t){return e.props.history.push("/dashboard")}))},e.state={name:"",ApiKey:"",ApiSecret:"",errors:{}},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement(u.b,{to:"/dashboard",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back"),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Registre sua exchange")," abaixo")),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text"}),r.a.createElement("label",{htmlFor:"name"},"Exchange")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.ApiKey,error:e.ApiKey,id:"ApiKey",type:"text"}),r.a.createElement("label",{htmlFor:"ApiKey"},"ApiKey")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.ApiSecret,error:e.ApiSecret,id:"ApiSecret",type:"password"}),r.a.createElement("label",{htmlFor:"ApiSecret"},"ApiSecret")),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Sign up"))))))}}]),t}(n.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(d.a,{exact:!0,path:"/",component:b}),r.a.createElement(d.a,{exact:!0,path:"/register",component:E}),r.a.createElement(d.a,{exact:!0,path:"/login",component:w}),r.a.createElement(d.a,{exact:!0,path:"/dashboard",component:S}),r.a.createElement(d.a,{exact:!0,path:"/inside",component:j})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.4f7b2c4e.chunk.js.map