(this["webpackJsonpexpense-manager-react-java"]=this["webpackJsonpexpense-manager-react-java"]||[]).push([[0],{249:function(e,t,n){},251:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){},283:function(e,t,n){},284:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);n(222),n(223);var a=n(2),c=n.n(a),r=n(19),s=n.n(r),i=(n(249),n(13)),o=n(8),l=n(3),d=n.n(l),u=n(9),j=n(5),b=n(24),m=n.p+"static/media/login.63e8918f.gif",h=n(105),x=(n(251),"https://mysterious-lowlands-08309.herokuapp.com/api/v1/expenses/"),p=function(e){return{method:"GET",url:e}},f=function(e,t){return{method:"POST",url:e,data:t}},g=n(11),O=n.n(g),v="/expense-manager-react-java/",N="".concat(v,"add"),y="".concat(v,"recurring"),w="".concat(v,"analysis"),k="".concat(v,"report"),S="".concat(v,"dashboard"),C=n(1),D=function(){var e=Object(o.e)(),t=Object(a.useState)(!1),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(null),i=Object(j.a)(s,2),l=i[0],x=i[1];Object(a.useEffect)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("1074246000478-2tek9c04sv7l8o6otjui0bdjk2bkhobt.apps.googleusercontent.com"),e.next=3,Object(b.b)(b.a,"1074246000478-2tek9c04sv7l8o6otjui0bdjk2bkhobt.apps.googleusercontent.com","");case 3:(t=e.sent).isSignedIn.get()||t.attachClickHandler(document.getElementById("customBtn"),{},(function(e){r(!0),p(e)}),(function(e){console.log(JSON.stringify(e))}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){l||function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)(b.a,"1074246000478-2tek9c04sv7l8o6otjui0bdjk2bkhobt.apps.googleusercontent.com","");case 2:e.sent.attachClickHandler(document.getElementById("customBtn"),{},(function(e){r(!0),p(e)}),(function(e){console.log(JSON.stringify(e))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[l]);var p=function(t){var n=t.getBasicProfile().getName(),a=t.getBasicProfile().getImageUrl(),c=t.getAuthResponse(!0).access_token,s=t.getBasicProfile().getEmail();console.log(n,c),x({name:n,profileImg:a,accessToken:c}),function(e){var t=e.user,n=e.token;sessionStorage.setItem("user",t),sessionStorage.setItem("token",n)}({user:n,token:c}),function(t){var n=t.name,a=t.emailId,c=f("https://mysterious-lowlands-08309.herokuapp.com/api/v1/authenticateUser/",{name:n,emailId:a});O()(c).then((function(t){r(!1),e.push(S)}))}({name:n,emailId:s})};return Object(C.jsxs)("div",{className:"login-container",children:[c&&Object(C.jsxs)("div",{className:"d-flex justify-content-center m-auto preloader",children:[Object(C.jsx)("div",{className:"spinner-grow spinner-grow-sm text-light",role:"status",children:Object(C.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(C.jsx)("div",{className:"spinner-grow spinner-grow-sm text-light",role:"status",children:Object(C.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),Object(C.jsx)("div",{className:"spinner-grow spinner-grow-sm text-light",role:"status",children:Object(C.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]}),Object(C.jsxs)("main",{className:"d-flex flex-row main",children:[Object(C.jsx)("div",{className:"left-panel bg-dark",children:Object(C.jsx)("img",{src:m,alt:"Login"})}),Object(C.jsxs)("div",{className:"right-panel",children:[Object(C.jsx)("div",{className:"text-dark h3 login-header",children:"We have designed a super smooth login so you can get started with your expense management really fast!"}),Object(C.jsx)("div",{className:"text-dark login-info",children:"Simply click the below button to login using your gmail account and start tracking your expenses!"}),Object(C.jsxs)("button",{id:"customBtn",type:"button",className:"btn btn-light text-secondary sign-in text-dark","data-onsuccess":"onSignIn",children:[Object(C.jsx)(h.a,{className:"google-icon"}),Object(C.jsx)("i",{className:"text-primary bi bi-google"}),Object(C.jsx)("span",{children:"Sign in with Google"})]})]})]})]})},E=n(15),z=n(17),I=function(e){var t=e.enableSubmit,n=e.handleChange,c=e.handleSubmit,r=e.redirectToReport,s=Object(a.useState)(""),i=Object(j.a)(s,2),o=i[0],l=(i[1],Object(a.useState)("")),d=Object(j.a)(l,2),u=d[0],b=(d[1],Object(a.useState)("")),m=Object(j.a)(b,2),h=m[0],x=(m[1],Object(a.useState)(!1)),p=Object(j.a)(x,2),f=p[0],g=(p[1],Object(a.useRef)(null)),O=function(e,t){e.preventDefault(),n(Object(z.a)({},t.id,t.value))},v=function(e){e.preventDefault(),c({expense:o,amount:u,expenseDate:h}),setTimeout((function(){!function(){var e;null===g||void 0===g||null===(e=g.current)||void 0===e||e.reset()}()}),1e3)};return Object(C.jsx)("div",{children:Object(C.jsxs)("form",{ref:g,onSubmit:v,children:[Object(C.jsx)("div",{className:"type row justify-content-center g-3 align-items-center m-2",children:Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Expense Name"}),Object(C.jsx)("input",{type:"text",id:"expense",className:"form-control",autoComplete:"off",onChange:function(e){return O(e,e.target)}})]})}),Object(C.jsx)("div",{className:"amount row justify-content-center g-3 align-items-center m-2",children:Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Expense Amt"}),Object(C.jsx)("input",{type:"number",id:"amount",className:"form-control",autoComplete:"off",onChange:function(e){return O(e,e.target)}})]})}),Object(C.jsx)("div",{className:"type row justify-content-center g-3 align-items-center m-2",children:Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Expense Date"}),Object(C.jsx)("input",{type:"date",id:"expenseDate",className:"form-control",autoComplete:"off",onChange:function(e){return O(e,e.target)}})]})}),Object(C.jsx)("div",{className:"action row justify-content-center g-3 align-items-center m-2",children:Object(C.jsxs)("div",{className:o&&u&&h?"":"disabled-button",children:[f&&Object(C.jsx)("button",{className:"btn btn-primary",type:"button",disabled:!0,children:Object(C.jsx)("div",{class:"spinner-border",role:"status",children:Object(C.jsx)("span",{class:"visually-hidden",children:"Loading..."})})}),Object(C.jsx)("button",{type:"button",disabled:!t,className:"m-2 btn btn-primary",id:"liveToastBtn",onClick:v,children:"Submit"}),Object(C.jsx)("button",{type:"button",className:"m-2 btn btn-primary",onClick:r,children:"Report"})]})})]})})},R=n.p+"static/media/sad.708c7be5.gif",A=n.p+"static/media/straight.f9bf6746.gif",B=n.p+"static/media/smile.63a86e09.gif",T="Congratulations!",L="Your expense record has been added",F=function(e,t){return{severity:"success",summary:e,detail:t}},G=n(21),M=(n(42),n(43),function(){var e=Object(o.e)(),t=Object(a.useState)({expense:"",amount:"",expenseDate:""}),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),l=Object(j.a)(s,2),d=l[0],u=l[1],b=Object(a.useState)(""),m=Object(j.a)(b,2),h=m[0],p=m[1],g=Object(a.useState)(!1),v=Object(j.a)(g,2),N=v[0],y=v[1],w=Object(a.useRef)(null);return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"d-flex flex-row m-5 rounded card",children:[Object(C.jsxs)("div",{className:"card add-container w-50",children:[Object(C.jsx)("h5",{className:"card-header bg-dark",children:Object(C.jsx)("div",{className:"flex-column",children:Object(C.jsx)("nav",{"aria-label":"row justify-content-center breadcrumb ",children:Object(C.jsxs)("ol",{className:"column justify-content-start g-3 breadcrumb",children:[Object(C.jsx)("li",{className:"breadcrumb-item text-light",children:Object(C.jsx)(i.b,{to:S,children:"Dashboard"})}),Object(C.jsx)("li",{className:"breadcrumb-item active text-light","aria-current":"page",children:"Add expense"})]})})})}),Object(C.jsx)("div",{className:"add-container",children:Object(C.jsx)("div",{className:"card-body",children:Object(C.jsx)(I,{enableSubmit:N,handleChange:function(e){if(e){var t=Object(E.a)(Object(E.a)({},c),e);if(e.expense||""===e.expense)r(Object(E.a)({},t));else if(e.amount||""===e.amount){var n=Number(e.amount);r(Object(E.a)(Object(E.a)({},c),{},{amount:n})),function(e){e>5e3?(p("Gosh, you spent too much! We should really check on our expenses going forward.."),u(R)):e>1e3?(p("May be we should strategize more on the spendings, what do you think?"),u(A)):(p("Hurray! we are on the way to more savings!!! Keep it up, you are going to be rich soon"),u(B))}(n)}else(e.expenseDate||""===e.expenseDate)&&r(Object(E.a)({},t));t.expense&&t.amount&&t.expenseDate?y(!0):y(!1)}},handleSubmit:function(){var e=f(x,{expense:c.expense,amount:Number(c.amount),expenseDate:c.expenseDate});O()(e).then((function(e){w.current.show(F(T,L)),r({expense:"",amount:"",expenseDate:""}),y(!1)}))},redirectToReport:function(){e.push(k)}})})})]}),Object(C.jsxs)("div",{className:"card add-container w-50",children:[Object(C.jsx)("h5",{className:"card-header bg-dark text-light",children:" Summary "}),Object(C.jsx)("div",{className:"card-body summary-body justify-content-center",children:c.expense&&c.amount&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("img",{src:d,alt:"mood illustrator"}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{className:"message",children:h}),Object(C.jsxs)("div",{children:[c.amount," for ",c.expense]})]})]})||"Please enter complete data in the form on your left!"})]})]}),Object(C.jsx)("div",{className:"position-fixed bottom-0 end-0 p-3",style:{zIndex:5},children:Object(C.jsx)(G.Toast,{ref:w,position:"bottom-right"})})]})}),P=(n(281),n(25)),J=n.p+"static/media/no-data.76691128.gif",W=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(j.a)(r,2),o=s[0],l=s[1],b=Object(a.useRef)(null),m=Object(a.useState)({edit:!1,index:null}),h=Object(j.a)(m,2),g=h[0],v=h[1],N=Object(a.useState)(null),y=Object(j.a)(N,2),w=y[0],k=y[1],D=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()(p(x));case 2:t=e.sent,l(!1),c(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(!0),D();case 2:case"end":return e.stop()}}),e)}))),[]);var I=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()((n=t,{method:"DELETE",url:"".concat(x).concat(n)}));case 2:e.sent,D(),b.current.show(F("Record delete successful!","Your expense record has been deleted"));case 5:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()(f(x,w));case 2:e.sent,D(),v({edit:!1,index:null}),b.current.show(F("Record edited successful!","Your expense record has been edited"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e,t,a){if(a="amount"===t?Number(a):a,n[e][t]!==a){var c=Object(E.a)(Object(E.a)({},n[e]),{},Object(z.a)({},t,a));k(c)}else k(null)};return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"d-flex flex-row m-5 rounded card",children:Object(C.jsxs)("div",{className:"card report-container",children:[Object(C.jsx)("h5",{className:"card-header bg-dark",children:Object(C.jsx)("div",{className:"flex-column",children:Object(C.jsx)("nav",{"aria-label":"row justify-content-center breadcrumb ",children:Object(C.jsxs)("ol",{className:"column justify-content-start g-3 breadcrumb",children:[Object(C.jsx)("li",{className:"breadcrumb-item text-light",children:Object(C.jsx)(i.b,{to:S,children:"Dashboard"})}),Object(C.jsx)("li",{className:"breadcrumb-item active text-light","aria-current":"page",children:"Report"})]})})})}),Object(C.jsx)("div",{className:"add-container",children:Object(C.jsx)("div",{className:"card-body",children:o?Object(C.jsx)("div",{className:"d-flex justify-content-center",children:Object(C.jsx)("div",{className:"spinner-border text-dark",role:"status",children:Object(C.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(C.jsx)("div",{children:n.length>0?Object(C.jsx)("form",{children:Object(C.jsxs)("table",{className:"table",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{scope:"col",children:"#"}),Object(C.jsx)("th",{scope:"col",children:"Expense name"}),Object(C.jsx)("th",{scope:"col",children:"Amount"}),Object(C.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(C.jsx)("tbody",{children:n.map((function(e,t){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{scope:"row",children:t+1}),!g.edit||g.edit&&g.index!==t?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("td",{children:e.expense}),Object(C.jsx)("td",{children:e.amount})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("td",{children:Object(C.jsx)("input",{defaultValue:(null===e||void 0===e?void 0:e.expense)||"",onChange:function(e){return A(t,"expense",e.target.value)}})}),Object(C.jsx)("td",{children:Object(C.jsx)("input",{defaultValue:(null===e||void 0===e?void 0:e.amount)||"",onChange:function(e){return A(t,"amount",e.target.value)}})})]}),!g.edit||g.edit&&g.index!==t?Object(C.jsxs)("td",{children:[Object(C.jsx)(P.d,{className:"clickable-data",onClick:function(){return function(e){k(null),v({edit:!0,index:e})}(t)}}),Object(C.jsx)(P.b,{className:"clickable-data",onClick:function(){return I(e.id)}})]}):Object(C.jsxs)("td",{children:[Object(C.jsx)(P.c,{className:w?"clickable-data":"disabled",onClick:function(){return R(e.id)}}),Object(C.jsx)(P.a,{className:"clickable-data",onClick:function(){return v({edit:!1,index:null})}})]})]},t)}))})]})}):Object(C.jsx)("img",{src:J})})})})]})}),Object(C.jsx)("div",{className:"position-fixed bottom-0 end-0 p-3",style:{zIndex:5},children:Object(C.jsx)(G.Toast,{ref:b,position:"bottom-right"})})]})},Y=n(26),H=function(){var e=sessionStorage.getItem("user"),t=Object(o.e)();return Object(C.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark w-100",children:Object(C.jsx)("div",{className:"container-fluid w-100",children:Object(C.jsxs)("div",{className:"collapse navbar-collapse d-flex w-100",children:[Object(C.jsxs)("span",{className:"text-light p-top-2 h3 w-100 d-flex justify-content-center",children:["Welcome ",e]}),Object(C.jsx)("button",{className:"btn btn-secondary",onClick:function(){sessionStorage.clear(),t.push(v)},children:"Logout"})]})})})},V=n.p+"static/media/dashboard.ae7c174b.png",q=(n(282),function(){var e=Object(o.e)();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(H,{}),Object(C.jsxs)("div",{className:"dashboard-container",style:{backgroundImage:"linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)),url(".concat(V,")")},children:[Object(C.jsx)("h1",{className:"display-1",children:"Expense Manager"}),Object(C.jsx)("h4",{className:"display-9",children:"Manage your expenses with us!"}),Object(C.jsxs)("div",{className:"container-fluid d-flex align-items-center justify-content-center w-50 dashboard-items",children:[Object(C.jsxs)("div",{className:"flex-row",children:[Object(C.jsxs)("div",{className:"rounded card m-5 card-containers",children:[Object(C.jsx)("h5",{className:"card-header bg-dark text-light",children:" Add expenses "}),Object(C.jsxs)("div",{className:"card-body",children:[Object(C.jsx)("p",{className:"card-text",children:"Just click the below button to add your expenses for the day/month/year"}),Object(C.jsxs)("button",{className:"btn dashboard-btn",onClick:function(){e.push(N)},children:[Object(C.jsx)(Y.a,{style:{fontSize:"1.5rem"}}),Object(C.jsx)("span",{children:" Add expense"})]})]})]}),Object(C.jsxs)("div",{className:"rounded card m-5 card-containers",children:[Object(C.jsx)("h5",{className:"card-header bg-dark text-light",children:"Expense analysis"}),Object(C.jsxs)("div",{className:"card-body",children:[Object(C.jsx)("p",{className:"card-text",children:"Just click the below button to analyse your expense trend"}),Object(C.jsxs)("button",{className:"btn dashboard-btn",onClick:function(){e.push(w)},children:[Object(C.jsx)(Y.a,{style:{fontSize:"1.5rem"}}),Object(C.jsx)("span",{children:" Expense analysis"})]})]})]})]}),Object(C.jsxs)("div",{className:"flex-row",children:[Object(C.jsxs)("div",{className:"rounded card m-5 card-containers",children:[Object(C.jsx)("h5",{className:"card-header bg-dark text-light",children:"Recurring expenses"}),Object(C.jsxs)("div",{className:"card-body",children:[Object(C.jsx)("p",{className:"card-text",children:"Just add the expense once, and then forget about adding it repetitively"}),Object(C.jsxs)("button",{className:"btn dashboard-btn",onClick:function(){e.push(y)},children:[Object(C.jsx)(Y.a,{style:{fontSize:"1.5rem"}}),Object(C.jsx)("span",{children:" Add Recurring expenses"})]})]})]}),Object(C.jsxs)("div",{className:"rounded card m-5 card-containers",children:[Object(C.jsxs)("h5",{className:"card-header bg-dark text-light",children:[" ","Expense report"," "]}),Object(C.jsxs)("div",{className:"card-body",children:[Object(C.jsx)("p",{className:"card-text",children:"View your past expenses from this report"}),Object(C.jsxs)("button",{className:"btn dashboard-btn",onClick:function(){e.push(k)},children:[Object(C.jsx)(Y.a,{style:{fontSize:"1.5rem"}}),Object(C.jsx)("span",{children:" Expense report"})]})]})]})]})]})]})]})}),U=(n(283),n(284),function(){var e=Object(a.useState)({expense:"",amount:"",duration:""}),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useRef)(null),s=Object(a.useRef)(null),o=function(e){c(Object(E.a)(Object(E.a)({},n),{},Object(z.a)({},e.id,e.value)))};return Object(C.jsxs)("div",{className:"d-flex flex-row m-5 rounded card",children:[Object(C.jsxs)("div",{className:"card recurring-container",children:[Object(C.jsx)("h5",{className:"card-header bg-dark",children:Object(C.jsx)("div",{className:"flex-column",children:Object(C.jsx)("nav",{"aria-label":"row justify-content-center breadcrumb ",children:Object(C.jsxs)("ol",{className:"column justify-content-start g-3 breadcrumb",children:[Object(C.jsx)("li",{className:"breadcrumb-item text-light",children:Object(C.jsx)(i.b,{to:S,children:"Dashboard"})}),Object(C.jsx)("li",{className:"breadcrumb-item active text-light","aria-current":"page",children:"Recurring Expenses"})]})})})}),Object(C.jsx)("div",{className:"recurring-container",children:Object(C.jsx)("div",{className:"card-body d-flex justify-content-center",children:Object(C.jsxs)("form",{ref:s,children:[Object(C.jsx)("div",{className:"type row justify-content-center g-3 align-items-center m-2",children:Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Expense"}),Object(C.jsx)("input",{type:"text",id:"expense",className:"form-control",autoComplete:"off",onChange:function(e){return o(e.target)}})]})}),Object(C.jsx)("div",{className:"amount row justify-content-center g-3 align-items-center m-2",children:Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Amount"}),Object(C.jsx)("input",{type:"number",id:"amount",className:"form-control",autoComplete:"off",onChange:function(e){return o(e.target)}})]})}),Object(C.jsx)("div",{className:"amount row justify-content-center g-3 align-items-center m-2",children:Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Duration"}),Object(C.jsx)("select",{className:"form-select",id:"duration",onChange:function(e){return o(e.target)},children:["Weekly","Monthly","Yearly"].map((function(e){return Object(C.jsx)("option",{value:e,children:e},e)}))})]})}),Object(C.jsx)("div",{className:"amount row justify-content-center g-3 align-items-center m-2",children:Object(C.jsx)("div",{children:Object(C.jsx)("button",{type:"button",className:"m-2 btn btn-primary",disabled:!(n.expense&&n.amount&&n.duration),onClick:function(){var e=f("https://mysterious-lowlands-08309.herokuapp.com/api/v1/recurringexpenses/",{recurringExpense:n.expense,recurringAmount:Number(n.amount),duration:n.duration.toLowerCase()});O()(e).then((function(e){var t;r.current.show(F(T,L)),null===s||void 0===s||null===(t=s.current)||void 0===t||t.reset(),c({expense:"",amount:"",duration:"Weekly"})})).catch((function(e){}))},children:"Submit"})})})]})})})]}),Object(C.jsx)("div",{className:"position-fixed bottom-0 end-0 p-3",style:{zIndex:5},children:Object(C.jsx)(G.Toast,{ref:r,position:"bottom-right"})})]})}),K=n(4),Q=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()(p(x));case 2:t=e.sent,c(t.data),setTimeout((function(){o(t.data),l(t.data),b(t.data),h(t.data)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r();case 1:case"end":return e.stop()}}),e)}))),[]);var s=function(e){var t=[];return t.push({name:"1000-5000",value:e.filter((function(e){return e.amount>1e3&&e.amount<5e3})).length}),t.push({name:">25000",value:e.filter((function(e){return e.amount>25e3})).length}),t},o=function(e){var t=s(e);if(t.length>0){var n=K.o().domain(t.map((function(e){return e.name}))).range(K.l((function(e){return K.g(.8*e+.1)}),t.length).reverse()),a=300,c=Math.min(a,300),r=K.a().innerRadius(0).outerRadius(Math.min(a,c)/2-1),i={},o=Math.min(a,c)/2*.8;i=K.a().innerRadius(o).outerRadius(o);var l=K.k().sort(null).value((function(e){return e.value})),d={arcs:void 0,svg:void 0};d.arcs=l(t),d.svg=K.r(".pie").attr("viewBox",[-150,-c/2,a,c]),d.svg.append("g").attr("stroke","white").selectAll("path").data(d.arcs).join("path").attr("fill",(function(e){return n(e.data.name)})).attr("d",r).append("title").text((function(e){return"".concat(e.data.name,": ").concat(e.data.value.toLocaleString())})),d.svg.append("g").attr("font-family","sans-serif").attr("font-size",12).attr("text-anchor","middle").selectAll("text").data(d.arcs).join("text").attr("transform",(function(e){return"translate(".concat(i.centroid(e),")")})).call((function(e){return e.append("tspan").attr("y","-0.4em").attr("font-weight","bold").text((function(e){return e.data.name}))})).call((function(e){return e.filter((function(e){return e.endAngle-e.startAngle>.25})).append("tspan").attr("x",0).attr("y","0.7em").attr("fill-opacity",.7).text((function(e){return e.data.value.toLocaleString()}))})),d=d.svg.node()}},l=function(e){var t=s(e);if(t.length>0){var n={},a={top:20,right:0,bottom:30,left:40};n.svg=K.r(".bar").attr("viewBox",[0,0,300,300]);var c=K.m().domain(t.map((function(e){return e.name}))).range([a.left,300-a.right]).padding(.1),r=K.n().domain([0,K.i(t,(function(e){return e.value}))]).nice().range([300-a.bottom,a.top]);n.bar=n.svg.append("g").attr("fill","steelblue").selectAll("rect").data(t).join("rect").style("mix-blend-mode","multiply").attr("x",(function(e){return c(e.name)})).attr("y",(function(e){return r(e.value)})).attr("height",(function(e){return r(0)-r(e.value)})).attr("width",c.bandwidth());var i=function(e){return e.attr("transform","translate(0,".concat(300-a.bottom,")")).call(K.c(c).tickSizeOuter(0))};n.gx=n.svg.append("g").call(i),n.gy=n.svg.append("g").call((function(e){return e.attr("transform","translate(".concat(a.left,",0)")).call(K.d(r)).call((function(e){return e.select(".domain").remove()}))})),n=n.svg.node()&&Object.assign(n.svg.node(),{update:function(e){c.domain(t.sort(e).map((function(e){return e.name})));var a=n.svg.transition().duration(750);n.bar.data(t,(function(e){return e.name})).order().transition(a).delay((function(e,t){return 20*t})).attr("x",(function(e){return c(e.name)})),n.gx.transition(a).call(i).selectAll(".tick").delay((function(e,t){return 20*t}))}})}},b=function(e){var t=m(e);if(t.length>0){var n={top:20,right:30,bottom:30,left:40},a=K.h().defined((function(e){return!isNaN(e.value)})).x((function(e){return c(new Date(e.date))})).y((function(e){return r(e.value)})),c=K.q().domain(K.f(t,(function(e){return new Date(e.date)}))).range([n.left,300-n.right]),r=K.n().domain([0,K.i(t,(function(e){return e.value}))]).nice().range([300-n.bottom,n.top]),s={};s.svg=K.r(".line").attr("viewBox",[0,0,300,300]),s.svg.append("g").call((function(e){return e.attr("transform","translate(0,".concat(300-n.bottom,")")).call(K.c(c).ticks(3.75).tickSizeOuter(0))})),s.svg.append("g").call((function(e){return e.attr("transform","translate(".concat(n.left,",0)")).call(K.d(r)).call((function(e){return e.select(".domain").remove()})).call((function(e){return e.select(".tick:last-of-type text").clone().attr("x",3).attr("text-anchor","start").attr("font-weight","bold").text(t.y)}))})),s.svg.append("path").datum(t).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",1.5).attr("stroke-linejoin","round").attr("stroke-linecap","round").attr("d",a),s=s.svg.node()}},m=function(e){var t=[];return e.forEach((function(e){new Date(e.expenseDate)<=new Date&&t.push({date:e.expenseDate,value:e.amount})})),t},h=function(e){var t={},n=20,a=20,c=30,r=50,s=(K.s("%Y%m%d"),f(e));if(s.length>0){var i=K.p().domain(K.f(s,(function(e){return new Date(e.date)}))).range([r,300-a]),o=K.n().domain([K.j(s,(function(e){return e.low})),K.i(s,(function(e){return e.high}))]).nice(5).range([300-c,n]),l=K.b().curve(K.e).x((function(e){return i(new Date(e.date))})).y0((function(e){return o(e.low)})).y1((function(e){return o(e.high)}));t.svg=K.r(".average").attr("viewBox",[0,0,300,300]),t.svg.append("path").datum(s).attr("fill","steelblue").attr("d",l),t.svg.append("g").call((function(e){return e.attr("transform","translate(0,".concat(300-c,")")).call(K.c(i).ticks(3.75).tickSizeOuter(0)).call((function(e){return e.select(".domain").remove()}))})),t.svg.append("g").call((function(e){return e.attr("transform","translate(".concat(r,",0)")).call(K.d(o)).call((function(e){return e.select(".domain").remove()})).call((function(e){return e.select(".tick:last-of-type text").clone().attr("x",3).attr("text-anchor","start").attr("font-weight","bold")}))})),t=t.svg.node()}},f=function(e){var t=[];return e.forEach((function(e){new Date(e.expenseDate)<=new Date&&t.push({date:e.expenseDate,high:e.amount,low:e.amount/10})})),t};return Object(C.jsxs)("div",{className:"rounded card m-5",children:[Object(C.jsx)("h5",{className:"card-header bg-dark text-light",children:Object(C.jsx)("nav",{"aria-label":"breadcrumb",children:Object(C.jsxs)("ol",{className:"breadcrumb",children:[Object(C.jsx)("li",{className:"breadcrumb-item text-light",children:Object(C.jsx)(i.b,{to:S,children:"Dashboard"})}),Object(C.jsx)("li",{className:"breadcrumb-item active text-light","aria-current":"page",children:"Expense analysis"})]})})}),Object(C.jsx)("div",{className:"card-body",children:0===(null===n||void 0===n?void 0:n.length)?Object(C.jsx)("img",{src:J}):Object(C.jsxs)("div",{className:"container-fluid d-flex align-items-center justify-content-center",children:[Object(C.jsxs)("div",{className:"flex-row w-50",children:[Object(C.jsxs)("div",{className:"rounded card m-5",children:[Object(C.jsx)("h5",{className:"card-header bg-dark text-light",children:"Weekly"}),Object(C.jsx)("div",{className:"card-body",children:Object(C.jsx)("svg",{className:"pie"})})]}),Object(C.jsxs)("div",{className:"rounded card m-5",children:[Object(C.jsx)("h5",{className:"card-header bg-dark text-light",children:"Monthly"}),Object(C.jsx)("div",{className:"card-body",children:Object(C.jsx)("svg",{className:"bar"})})]})]}),Object(C.jsxs)("div",{className:"flex-row w-50",children:[Object(C.jsxs)("div",{className:"rounded card m-5",children:[Object(C.jsx)("h5",{className:"card-header bg-dark text-light",children:"Quarterly"}),Object(C.jsx)("div",{className:"card-body",children:Object(C.jsx)("svg",{className:"line"})})]}),Object(C.jsxs)("div",{className:"rounded card m-5",children:[Object(C.jsx)("h5",{className:"card-header bg-dark text-light",children:"Yearly"}),Object(C.jsx)("div",{className:"card-body",children:Object(C.jsx)("svg",{className:"average"})})]})]})]})})]})};var _=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(i.a,{children:[Object(C.jsx)(o.a,{path:"/expense-manager-react-java/dashboard",component:q}),Object(C.jsx)(o.a,{path:"/expense-manager-react-java/add",component:M}),Object(C.jsx)(o.a,{path:"/expense-manager-react-java/recurring",component:U}),Object(C.jsx)(o.a,{path:"/expense-manager-react-java/analysis",component:Q}),Object(C.jsx)(o.a,{path:"/expense-manager-react-java/report",component:W}),Object(C.jsx)(o.a,{path:"/expense-manager-react-java/",exact:!0,component:D})]})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,286)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};O.a.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(sessionStorage.getItem("token")),e}),(function(e){return Promise.reject(e)})),s.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(_,{className:"w-100"})}),document.getElementById("root")),X()}},[[285,1,2]]]);
//# sourceMappingURL=main.e9b58988.chunk.js.map