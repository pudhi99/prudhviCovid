(this["webpackJsonpcovid19-dashboard"]=this["webpackJsonpcovid19-dashboard"]||[]).push([[0],{207:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},308:function(e,t,a){},360:function(e,t,a){},379:function(e,t,a){},380:function(e,t,a){},381:function(e,t,a){},382:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(75),r=a.n(n),o=a(77),i=a(22),d=a(4),l=a(7),j=a(11),h=a(12),m=(a(207),a(1)),b=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"nav",children:[Object(m.jsxs)("h1",{className:"heading",children:["COVID19",Object(m.jsx)("span",{className:"heading-span",children:"INDIA"})]}),Object(m.jsxs)("div",{className:"links",children:[Object(m.jsx)(o.b,{className:"link1",to:"/",children:"Home"}),Object(m.jsx)(o.b,{className:"link2",to:"/about",children:"About"})]})]})}}]),a}(s.Component),u=a(33),p=a.n(u),O=a(61),x=(a(214),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.eachState,a=e.updateSearchInput,s={stateCode:t.state_code,stateName:t.state_name};return Object(m.jsxs)("li",{className:"each-state",onClick:function(){a(s.stateName,s.stateCode)},children:[Object(m.jsx)("p",{className:"state-name",children:s.stateName}),Object(m.jsxs)("div",{className:"state-code-dec",children:[Object(m.jsx)("p",{className:"state-code",children:s.stateCode}),Object(m.jsx)("div",{className:"symbol-border",children:Object(m.jsx)("p",{className:"symbol",children:">"})})]})]})}}]),a}(s.Component)),f=(a(215),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.homeData;(0,e.counting)(t.total.confirmed,t.total.confirmed-t.total.recovered,t.total.recovered,t.total.deceased)}},{key:"render",value:function(){var e=this.props,t=e.homeData,a=e.each;return Object(m.jsx)("li",{className:"each-state",children:Object(m.jsxs)("div",{className:"column",children:[Object(m.jsxs)("p",{className:"state-name",children:[a.state_name," "]}),Object(m.jsx)("span",{className:"p-column-first2 Confirmed ",children:Intl.NumberFormat("en-IN").format(t.total.confirmed)}),Object(m.jsx)("span",{className:"p-column2 Active",children:Intl.NumberFormat("en-IN").format(t.total.confirmed-t.total.recovered)}),Object(m.jsx)("span",{className:"p-column2 Recovered",children:Intl.NumberFormat("en-IN").format(t.total.recovered)}),Object(m.jsxs)("span",{className:"p-column2 Deceased",children:[" ",Intl.NumberFormat("en-IN").format(t.total.deceased)]}),Object(m.jsx)("span",{className:"p-column2 Population",children:Intl.NumberFormat("en-IN").format(t.meta.population)})]})})}}]),a}(s.Component)),v=(a(216),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"footer-bg",children:[Object(m.jsxs)("h1",{className:"heading2",children:["COVID19",Object(m.jsx)("span",{className:"heading-span2",children:"INDIA"})]}),Object(m.jsx)("p",{className:"footer-para",children:"we stand with everyone fighting on the front lines"})]})}}]),a}(s.Component)),N=(a(217),a(24)),g=(a(218),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.one;return Object(m.jsxs)("li",{className:"top-districts-li",children:[Object(m.jsx)("p",{className:"top-districts-values",children:Intl.NumberFormat("en-IN").format(e.conformed)}),Object(m.jsx)("p",{className:"top-districts-name",children:e.district})]})}}]),a}(s.Component)),y=a(197),_=(a(308),a(384)),I=a(385),k=a(389),D=a(193),C=a(194),A=a(87),w=a(198),F=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={lineData:[{date:"Page A",uv:4e3,pv:2400,amt:2400},{date:"Page B",uv:3e3,pv:1398,amt:2210}],data:{labels:["January","February","March","April","May"],datasets:[{label:"Rainfall",fill:!0,lineTension:.6,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[65,59,80,81,56]}]}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.dates;console.log(e);var t=e.length;console.log(t);var a={labels:[e[9].date,e[8].date,e[7].date,e[6].date,e[5].date,e[4].date,e[3].date,e[2].date,e[1].date,e[0].date],datasets:[{label:"Confirmed",fill:!0,lineTension:.8,backgroundColor:"#9A0E31",borderColor:"rgba(0,0,0,1)",borderWidth:0,borderRadius:10,data:[e[9].conformed,e[8].conformed,e[7].conformed,e[6].conformed,e[5].conformed,e[4].conformed,e[3].conformed,e[2].conformed,e[1].conformed,e[0].conformed]}]};e.reverse(),this.setState({data:a,lineData:e})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.lineData;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"bar-graph",children:Object(m.jsx)(y.a,{data:t,options:{title:{display:!0,text:"Average Rainfall per month",fontSize:20},legend:{display:!0,position:"right"},maintainAspectRatio:!0}})}),Object(m.jsxs)("div",{style:{width:"100%"},children:[Object(m.jsxs)("div",{className:"chart chart-conformed",children:[Object(m.jsx)("p",{className:"graph-name graph-conformed",children:"Confirmed"}),Object(m.jsx)(_.a,{width:"100%",height:260,children:Object(m.jsxs)(I.a,{width:1e3,height:260,data:a,syncId:"anyId",margin:{top:10,right:30,left:0,bottom:0},children:[Object(m.jsx)(k.a,{strokeDasharray:"3 3",style:{display:"none"}}),Object(m.jsx)(D.a,{dataKey:"date"}),Object(m.jsx)(C.a,{}),Object(m.jsx)(A.a,{}),Object(m.jsx)(w.a,{type:"monotone",dataKey:"conformed",stroke:"#FF073A",fill:"#FF073A"})]})})]}),Object(m.jsxs)("div",{className:"chart chart-recovered",children:[Object(m.jsx)("p",{className:"graph-name graph-recovered",children:"Recovered"}),Object(m.jsx)(_.a,{width:"100%",height:260,children:Object(m.jsxs)(I.a,{width:1e3,height:260,data:a,syncId:"anyId",margin:{top:10,right:30,left:0,bottom:0},children:[Object(m.jsx)(k.a,{strokeDasharray:"3 3",style:{display:"none"}}),Object(m.jsx)(D.a,{dataKey:"date"}),Object(m.jsx)(C.a,{}),Object(m.jsx)(A.a,{}),Object(m.jsx)(w.a,{type:"monotone",dataKey:"recovered",stroke:"#27A243",fill:"#27A243"})]})})]}),Object(m.jsxs)("div",{className:"chart chart-deceased",children:[Object(m.jsx)("p",{className:"graph-name graph-deceased",children:"Deceased"}),Object(m.jsx)(_.a,{width:"100%",height:260,children:Object(m.jsxs)(I.a,{width:1e3,height:260,data:a,syncId:"anyId",margin:{top:10,right:30,left:0,bottom:0},children:[Object(m.jsx)(k.a,{strokeDasharray:"3 3",style:{display:"none"}}),Object(m.jsx)(D.a,{dataKey:"date"}),Object(m.jsx)(C.a,{}),Object(m.jsx)(A.a,{}),Object(m.jsx)(w.a,{type:"monotone",dataKey:"deceased",stroke:"#6C757D",fill:"#6C757D"})]})})]}),Object(m.jsxs)("div",{className:"chart chart-tested",children:[Object(m.jsx)("p",{className:"graph-name graph-tested",children:"Tested"}),Object(m.jsx)(_.a,{width:"100%",height:260,children:Object(m.jsxs)(I.a,{width:1e3,height:260,data:a,syncId:"anyId",margin:{top:10,right:30,left:0,bottom:0},children:[Object(m.jsx)(k.a,{strokeDasharray:"3 3",style:{display:"none"}}),Object(m.jsx)(D.a,{dataKey:"date"}),Object(m.jsx)(C.a,{}),Object(m.jsx)(A.a,{}),Object(m.jsx)(w.a,{type:"monotone",dataKey:"tested",stroke:"#9673B9",fill:"#9673B9"})]})})]}),Object(m.jsxs)("div",{className:"chart chart-vaccinated1",children:[Object(m.jsx)("p",{className:"graph-name graph-vaccinated1",children:"Vaccinated"}),Object(m.jsx)(_.a,{width:"100%",height:260,children:Object(m.jsxs)(I.a,{width:1e3,height:260,data:a,syncId:"anyId",margin:{top:10,right:30,left:0,bottom:0},children:[Object(m.jsx)(k.a,{strokeDasharray:"3 3",style:{display:"none"}}),Object(m.jsx)(D.a,{dataKey:"date"}),Object(m.jsx)(C.a,{}),Object(m.jsx)(A.a,{}),Object(m.jsx)(w.a,{type:"monotone",dataKey:"vaccinated1",stroke:"#F95581",fill:"#F95581"})]})})]})]})]})}}]),a}(s.Component),S=(a(360),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={districts:[],dates:[],go:!1},e.fetchAboutData=Object(O.a)(p.a.mark((function t(){var a,s,c,n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.stateCode,t.next=3,fetch("https://api.covid19india.org/v4/min/timeseries-".concat(a,".min.json"));case 3:return s=t.sent,t.next=6,s.json();case 6:c=t.sent,n=[],90,Object(N.a)(Array(90)).map((function(e,t){return n.push(Object.entries(c[a].dates)[Object.entries(c[a].dates).length-t])})),n.shift(),n.shift(),r=n.map((function(e){return{date:e[0],conformed:e[1].delta.confirmed,deceased:e[1].delta.deceased,recovered:e[1].delta.recovered,tested:e[1].delta.tested,vaccinated1:e[1].delta.vaccinated1}})),e.setState({dates:r,go:!0});case 14:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchAboutData();var e=this.props.stateData.districts,t=Object.entries(e).map((function(e){return{district:e[0],conformed:e[1].total.confirmed}}));t.sort((function(e,t){return t.conformed>e.conformed?1:-1})),this.setState({districts:t})}},{key:"render",value:function(){var e=this.state,t=e.districts,a=e.dates,s=e.go,c=this.props,n=c.stateData,r=c.searchInput,o=c.backPage,i=function(){o(!0)};return Object(m.jsxs)("div",{className:"bg-container",children:[Object(m.jsx)("button",{className:"button",type:"button",onClick:i,children:"Back"}),Object(m.jsxs)("div",{className:"Each-state-stateName",children:[Object(m.jsxs)("div",{className:"each-state-name",children:[Object(m.jsx)("div",{className:"name-back",children:Object(m.jsx)("p",{className:"Each-state-state-name",children:r})}),Object(m.jsxs)("p",{className:"each-state-para",children:["Last update on",Object(m.jsx)("span",{className:"last-update",children:n.meta.tested.date})]})]}),Object(m.jsxs)("div",{className:"each-state-name2",children:[Object(m.jsx)("p",{className:"Each-state-tested",children:"Tested"}),Object(m.jsx)("p",{className:"each-state-tested-number",children:Intl.NumberFormat("en-IN").format(n.total.tested)})]})]}),Object(m.jsxs)("div",{className:"stats",children:[Object(m.jsxs)("div",{className:"confirmed card",children:[Object(m.jsx)("p",{className:"p1",children:"Confirmed"}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/deqohhami/image/upload/v1624008273/check-mark_1-5_uij39a.png",alt:"Confirmed"}),Object(m.jsx)("p",{className:"p2",children:Intl.NumberFormat("en-IN").format(n.total.confirmed)})]}),Object(m.jsxs)("div",{className:"active card",children:[Object(m.jsx)("p",{className:"p1",children:"Active"}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/deqohhami/image/upload/v1624008278/protection_1_dv4xk0.png",alt:"Active"}),Object(m.jsx)("p",{className:"p2",children:Intl.NumberFormat("en-IN").format(n.total.confirmed-n.total.recovered)})]}),Object(m.jsxs)("div",{className:"recovered card",children:[Object(m.jsx)("p",{className:"p1",children:"Recovered"}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/deqohhami/image/upload/v1624008279/recovered_1-4_k4rujs.png",alt:"Recovered"}),Object(m.jsx)("p",{className:"p2",children:Intl.NumberFormat("en-IN").format(n.total.recovered)})]}),Object(m.jsxs)("div",{className:"deceased card",children:[Object(m.jsx)("p",{className:"p1",children:"Deceased"}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/deqohhami/image/upload/v1624008272/breathing_1-5_ouqpcv.png",alt:"Deceased"}),Object(m.jsx)("p",{className:"p2",children:Intl.NumberFormat("en-IN").format(n.total.deceased)})]})]}),Object(m.jsxs)("div",{className:"top-districts",children:[Object(m.jsx)("p",{className:"top-districts-heading",children:"Top Districts"}),Object(m.jsx)("ul",{className:"top-districts-ul",children:t.map((function(e){return Object(m.jsx)(g,{one:e},e.district)}))})]}),s?Object(m.jsx)("div",{className:"",children:Object(m.jsx)(F,{dates:a})}):null,Object(m.jsx)("button",{className:"button",type:"button",onClick:i,children:"Back"})]})}}]),a}(s.Component)),R=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={searchInput:"",stateCode:"",suggestions:!1,box:!1,homeData:"",totalConfirmed:0,totalActive:0,totalRecovered:0,totalDeceased:0,state:!0},e.fetchingData=Object(O.a)(p.a.mark((function t(){var a,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.covid19india.org/v4/min/data.min.json");case 2:return a=t.sent,t.next=5,a.json();case 5:s=t.sent,e.setState({homeData:s,box:!0});case 7:case"end":return t.stop()}}),t)}))),e.onChangeSearchInput=function(t){e.setState({searchInput:t.target.value}),t.target.value.length>0?e.setState({suggestions:!0}):e.setState({suggestions:!1})},e.updateSearchInput=function(t,a){e.setState({searchInput:t,suggestions:!1,stateCode:a,state:!1})},e.counting=function(t,a,s,c){e.setState((function(e){return{totalConfirmed:e.totalConfirmed+t,totalActive:e.totalActive+a,totalRecovered:e.totalRecovered+s,totalDeceased:e.totalDeceased+c}}))},e.backPage=function(t){e.setState({state:t,searchInput:""})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchingData()}},{key:"render",value:function(){var e=this,t=this.props.statesList,a=this.state,s=a.searchInput,c=a.suggestions,n=a.stateCode,r=a.homeData,o=a.box,i=a.totalConfirmed,d=a.totalActive,l=a.totalRecovered,j=a.totalDeceased,h=a.state,b=t.filter((function(e){return e.state_name.toLowerCase().startsWith(s.toLowerCase())}));return console.log(n),console.log(Intl.NumberFormat().format(i)),Object(m.jsx)(m.Fragment,{children:h?Object(m.jsxs)("div",{className:"bg-container",children:[Object(m.jsxs)("div",{className:"input-bar",children:[Object(m.jsx)("img",{src:"https://res.cloudinary.com/deqohhami/image/upload/v1624025781/search-3_lihgsr.png",alt:"search",className:"color"}),Object(m.jsx)("input",{type:"search",className:"search-bar",name:"search-bar",placeholder:"Enter The State",autoComplete:"off",onChange:this.onChangeSearchInput,value:s})]}),c?Object(m.jsx)("ul",{className:"searching-states",children:b.map((function(t){return Object(m.jsx)(x,{eachState:t,updateSearchInput:e.updateSearchInput},t.state_code)}))}):null,Object(m.jsxs)("div",{className:"stats",children:[Object(m.jsxs)("div",{className:"confirmed card",children:[Object(m.jsx)("p",{className:"p1",children:"Confirmed"}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/deqohhami/image/upload/v1624008273/check-mark_1-5_uij39a.png",alt:"Confirmed"}),Object(m.jsx)("p",{className:"p2",children:Intl.NumberFormat("en-IN").format(i)})]}),Object(m.jsxs)("div",{className:"active card",children:[Object(m.jsx)("p",{className:"p1",children:"Active"}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/deqohhami/image/upload/v1624008278/protection_1_dv4xk0.png",alt:"Active"}),Object(m.jsx)("p",{className:"p2",children:Intl.NumberFormat("en-IN").format(d)})]}),Object(m.jsxs)("div",{className:"recovered card",children:[Object(m.jsx)("p",{className:"p1",children:"Recovered"}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/deqohhami/image/upload/v1624008279/recovered_1-4_k4rujs.png",alt:"Recovered"}),Object(m.jsx)("p",{className:"p2",children:Intl.NumberFormat("en-IN").format(l)})]}),Object(m.jsxs)("div",{className:"deceased card",children:[Object(m.jsx)("p",{className:"p1",children:"Deceased"}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/deqohhami/image/upload/v1624008272/breathing_1-5_ouqpcv.png",alt:"Deceased"}),Object(m.jsx)("p",{className:"p2",children:Intl.NumberFormat("en-IN").format(j)})]})]}),Object(m.jsxs)("div",{className:"box",children:[Object(m.jsxs)("div",{className:"column",children:[Object(m.jsx)("p",{className:"column-name",children:"States/UT "}),Object(m.jsx)("span",{className:"p-column-first",children:" Confirmed"}),Object(m.jsx)("span",{className:"p-column",children:" Active"}),Object(m.jsx)("span",{className:"p-column",children:" Recovered"}),Object(m.jsx)("span",{className:"p-column",children:" Deceased"}),Object(m.jsx)("span",{className:"p-column",children:" Population"})]}),Object(m.jsx)("hr",{className:"hr"}),o?Object(m.jsx)("ul",{className:"box-data",children:t.map((function(t){return Object(m.jsx)(f,{each:t,homeData:r[t.state_code],counting:e.counting},t.state_code)}))}):null]}),Object(m.jsx)(v,{})]}):Object(m.jsx)(S,{stateData:r[n],searchInput:s,stateCode:n,backPage:this.backPage})})}}]),a}(s.Component),P=a(195),M=a.n(P),K=(a(379),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.all;return console.log(e),Object(m.jsxs)("li",{className:"About-li",children:[Object(m.jsx)("p",{className:"question",children:e.question}),Object(m.jsx)("p",{className:"answer",children:e.answer})]})}}]),a}(s.Component)),L=(a(380),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={AboutData:[],isLoading:!0},e.fetchAboutData=Object(O.a)(p.a.mark((function t(){var a,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.covid19india.org/website_data.json");case 2:return a=t.sent,t.next=5,a.json();case 5:s=t.sent,e.setState({AboutData:s.faq,isLoading:!1});case 7:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchAboutData()}},{key:"render",value:function(){var e=this.state,t=e.AboutData,a=e.isLoading;return Object(m.jsx)("div",{className:"about-bg-container",children:a?Object(m.jsx)("div",{testid:"loader",className:"loader",children:Object(m.jsx)(M.a,{type:"TailSpin",color:"#00BFFF",height:50,width:50})}):Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"about-heading",children:"About"}),Object(m.jsx)("p",{className:"about-para",children:"COVID-19 vaccines be ready for distribution"}),Object(m.jsx)("ul",{className:"about-ul",children:t.map((function(e){return Object(m.jsx)(K,{all:e},e.question)}))})]})})}}]),a}(s.Component)),T=(a(381),[{state_code:"AN",state_name:"Andaman and Nicobar Islands"},{state_code:"AP",state_name:"Andhra Pradesh"},{state_code:"AR",state_name:"Arunachal Pradesh"},{state_code:"AS",state_name:"Assam"},{state_code:"BR",state_name:"Bihar"},{state_code:"CH",state_name:"Chandigarh"},{state_code:"CT",state_name:"Chhattisgarh"},{state_code:"DN",state_name:"Dadra and Nagar Haveli and Daman and Diu"},{state_code:"DL",state_name:"Delhi"},{state_code:"GA",state_name:"Goa"},{state_code:"GJ",state_name:"Gujarat"},{state_code:"HR",state_name:"Haryana"},{state_code:"HP",state_name:"Himachal Pradesh"},{state_code:"JK",state_name:"Jammu and Kashmir"},{state_code:"JH",state_name:"Jharkhand"},{state_code:"KA",state_name:"Karnataka"},{state_code:"KL",state_name:"Kerala"},{state_code:"LA",state_name:"Ladakh"},{state_code:"LD",state_name:"Lakshadweep"},{state_code:"MH",state_name:"Maharashtra"},{state_code:"MP",state_name:"Madhya Pradesh"},{state_code:"MN",state_name:"Manipur"},{state_code:"ML",state_name:"Meghalaya"},{state_code:"MZ",state_name:"Mizoram"},{state_code:"NL",state_name:"Nagaland"},{state_code:"OR",state_name:"Odisha"},{state_code:"PY",state_name:"Puducherry"},{state_code:"PB",state_name:"Punjab"},{state_code:"RJ",state_name:"Rajasthan"},{state_code:"SK",state_name:"Sikkim"},{state_code:"TN",state_name:"Tamil Nadu"},{state_code:"TG",state_name:"Telangana"},{state_code:"TR",state_name:"Tripura"},{state_code:"UP",state_name:"Uttar Pradesh"},{state_code:"UT",state_name:"Uttarakhand"},{state_code:"WB",state_name:"West Bengal"}]),q=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(b,{}),Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/",component:function(){return Object(m.jsx)(R,{statesList:T})}}),Object(m.jsx)(i.a,{exact:!0,path:"/about",component:L})]})]})})};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(q,{})}),document.getElementById("root"))}},[[382,1,2]]]);
//# sourceMappingURL=main.2f281c12.chunk.js.map