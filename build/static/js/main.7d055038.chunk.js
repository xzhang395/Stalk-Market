(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/daisy.aeebe057.png"},19:function(e,t,a){e.exports=a.p+"static/media/timmy.d1b67101.png"},20:function(e,t,a){e.exports=a.p+"static/media/tommy.d84e4be2.png"},27:function(e,t,a){e.exports=a(44)},32:function(e,t,a){},33:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(17),s=a.n(i),c=(a(32),a(14)),l=a(5),o=a(6),m=a(7),u=a(8);function d(e){var t=new Date(e);return t.getHours()<12?t.setHours(12):t.getHours()<22?t.setHours(22):(t=function(e,t){var a=new Date(e);return a.setDate(a.getDate()+t),a}(t,1)).setHours(12),t.setMinutes(0,0,0),console.log("ISO date: "+t.toISOString()),t}function p(e){var t=function(e){var t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+a+"-"+t}(e);return e.getHours()<12?t+"-0":t+"-1"}Date.prototype.addHours=function(e){return this.setTime(this.getTime()+60*e*60*1e3),this};a(33);var h=a(18),b=a.n(h),v=a(19),f=a.n(v),g=a(20),E=a.n(g),y=a(21),D=a(11),k=a(22),N=a.n(k).a.initializeApp({apiKey:"AIzaSyAI2G1hIMEqkk9B7dAIVQfbJiDjdv-MHxI",authDomain:"stalk-market-4dc91.fsirebaseapp.com",databaseURL:"https://stalk-market-4dc91.firebaseio.com",projectId:"stalk-market-4dc91",storageBucket:"stalk-market-4dc91.appspot.com",messagingSenderId:"458780571277",appId:"1:458780571277:web:4cac1c4df036eb5a6054c4",measurementId:"G-2RG24TVT9X"}),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).writeUserData=function(){var e=new Date;N.database().ref("market/"+p(e)+"/").push({name:n.state.ownerName,island:n.state.islandName,price:n.state.price,createdAtTimestamp:e.toISOString(),expiringAtTimestamp:d(e).toISOString()}),console.log("DATA SAVED")},n.state={isSubmitted:!1,price:0,islandName:"",ownerName:""},n.handleChange=n.handleChange.bind(Object(D.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(D.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState(Object(y.a)({},e.target.name,t))}},{key:"handleSubmit",value:function(e){this.writeUserData(),this.setState({isSubmitted:!0}),e.preventDefault()}},{key:"render",value:function(){return this.state.isSubmitted?r.a.createElement("div",{className:"submitted"},r.a.createElement("div",{className:"submitted-confirm"},"Submitted, Thank you!")):r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"question"},r.a.createElement("label",{htmlFor:"basic"},"What's the current Stalk price on your island?"),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"price",value:this.state.price,onChange:this.handleChange})),r.a.createElement("div",{className:"question"},r.a.createElement("label",{htmlFor:"basic"},"What's the name of your island?"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"islandName",value:this.state.islandName,onChange:this.handleChange})),r.a.createElement("div",{className:"question"},r.a.createElement("label",{htmlFor:"basic"},"What's your name?"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"ownerName",value:this.state.ownerName,onChange:this.handleChange})),r.a.createElement("input",{id:"myBtn",type:"submit"}))}}]),a}(r.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"renderTableData",value:function(){return this.props.data.map((function(e,t){var a=e.price,n=e.island,i=e.name;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,i))}))}},{key:"render",value:function(){return r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Island"),r.a.createElement("th",null,"Owner")),this.renderTableData()))}}]),a}(n.Component),O=a(23),j=a(24),I=a(25),T=a(26),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.render()}),6e4)}},{key:"render",value:function(){var e,t=new Date,a=new Date(this.props.expirationTime)-t;Number.isNaN(a)?e="-":e=Math.floor(a%864e5/36e5)+"h "+Math.floor(a%36e5/6e4)+"mins";return r.a.createElement("div",{id:"expiration"},"Price expires in ",e)}}]),a}(n.Component),C=function(e){Object(T.a)(a,e);var t=Object(I.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("span",{id:"max-price"},this.props.data[0].price),r.a.createElement("br",null),r.a.createElement("span",{id:"best-island"},"at ",this.props.data[0].island),r.a.createElement(x,{expirationTime:this.props.data[0].expiringAtTimestamp}))}}]),a}(n.Component);function A(e,t){return 0!=(new Date).getDay()?Number(e.price)>Number(t.price)?-1:Number(t.price)>Number(e.price)?1:0:Number(e.price)<Number(t.price)?-1:Number(t.price)<Number(e.price)?1:0}function H(e){for(var t,a,n=[],r=new Date,i=e.val(),s=Object.keys(i),c=0;c<s.length;c++){t=i[s[c]],a=new Date(t.expiringAtTimestamp),r.getTime()<a.getTime()&&n.push(t)}return n}var M=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getUserData=function(){var e=n.state.now,t=p(e),a=p(e.addHours(-12)),r=N.database();r.ref("market/"+t+"/").on("value",(function(e){var t=H(e);r.ref("market/"+a+"/").once("value").then((function(e){var a=[].concat(Object(c.a)(t),Object(c.a)(H(e)));a.sort(A),0===a.length?n.setState({userData:[{price:"-",name:"-",island:"-"}]}):n.setState({userData:a})}))}),(function(e){console.log("Error: "+e.code)}))},n.state={now:new Date,isSunday:0==(new Date).getDay(),userData:[{price:0,island:"",name:""}]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getUserData(),this.setState({now:new Date})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.isSunday&&r.a.createElement("div",{className:"banner"},"It's Turnip Day!"),r.a.createElement("div",{className:"container"},this.state.isSunday?r.a.createElement("img",{className:"pig",src:b.a}):r.a.createElement("div",null,r.a.createElement("img",{className:"timmy",src:f.a})," ",r.a.createElement("img",{className:"tommy",src:E.a})),r.a.createElement(C,{data:this.state.userData}),r.a.createElement(S,null)),r.a.createElement("div",{className:"ranking"},r.a.createElement("span",{className:"rank-title"},"Current price around the world"),r.a.createElement(w,{data:this.state.userData})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.7d055038.chunk.js.map