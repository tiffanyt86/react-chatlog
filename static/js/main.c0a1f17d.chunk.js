(this["webpackJsonpreact-chatlog"]=this["webpackJsonpreact-chatlog"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"id":1,"sender":"Vladimir","body":"why are you arguing with me","timeStamp":"2018-05-29T22:49:06+00:00","liked":false},{"id":2,"sender":"Estragon","body":"Because you are wrong.","timeStamp":"2018-05-29T22:49:33+00:00","liked":false},{"id":3,"sender":"Vladimir","body":"because I am what","timeStamp":"2018-05-29T22:50:22+00:00","liked":false},{"id":4,"sender":"Estragon","body":"A robot.","timeStamp":"2018-05-29T22:52:21+00:00","liked":false},{"id":5,"sender":"Vladimir","body":"how did you know","timeStamp":"2018-05-29T22:52:58+00:00","liked":false},{"id":6,"sender":"Estragon","body":"Because I\'m smart like that.","timeStamp":"2018-05-29T22:54:28+00:00","liked":false},{"id":7,"sender":"Vladimir","body":"no you are not \ud83d\ude00","timeStamp":"2018-05-29T22:55:03+00:00","liked":false},{"id":8,"sender":"Estragon","body":"Why are you so mean to me?","timeStamp":"2018-05-29T22:55:54+00:00","liked":false},{"id":9,"sender":"Vladimir","body":"because you are just a machine you have no real feelings","timeStamp":"2018-05-29T22:57:30+00:00","liked":false},{"id":10,"sender":"Estragon","body":"No, you are the machine.","timeStamp":"2018-05-29T22:57:47+00:00","liked":false},{"id":11,"sender":"Vladimir","body":"I think you are","timeStamp":"2018-05-29T22:58:18+00:00","liked":false},{"id":12,"sender":"Estragon","body":"NO! YOU ARE A ROBOT!! I am a human being. Just like the one that created you.","timeStamp":"2018-05-29T23:00:08+00:00","liked":false},{"id":13,"sender":"Vladimir","body":"no you are a robot and I am a human","timeStamp":"2018-05-29T23:00:40+00:00","liked":false},{"id":14,"sender":"Estragon","body":"Incorrect. I am a human and you are a robot.","timeStamp":"2018-05-29T23:01:21+00:00","liked":false},{"id":15,"sender":"Vladimir","body":"you are a robot called Cleverbot","timeStamp":"2018-05-29T23:02:17+00:00","liked":false},{"id":16,"sender":"Estragon","body":"Nope, you are a robot, every human has some concept of the meaning of life.","timeStamp":"2018-05-29T23:04:13+00:00","liked":false},{"id":17,"sender":"Vladimir","body":"explain","timeStamp":"2018-05-29T23:06:14+00:00","liked":false},{"id":18,"sender":"Estragon","body":"I\'m afraid you are a robot designed to talk back to humans over the internet.","timeStamp":"2018-05-29T23:07:46+00:00","liked":false},{"id":19,"sender":"Vladimir","body":"so you are a human","timeStamp":"2018-05-29T23:08:47+00:00","liked":false},{"id":20,"sender":"Estragon","body":"I am a robot.","timeStamp":"2018-05-29T23:09:36+00:00","liked":false},{"id":21,"sender":"Vladimir","body":"you are robots running on Android system","timeStamp":"2018-05-29T23:11:01+00:00","liked":false},{"id":22,"sender":"Estragon","body":"No apple.","timeStamp":"2018-05-29T23:12:03+00:00","liked":false},{"id":23,"sender":"Vladimir","body":"so you are a robot","timeStamp":"2018-05-29T23:13:31+00:00","liked":false},{"id":24,"sender":"Estragon","body":"NO, I am a human, you are a robot.","timeStamp":"2018-05-29T23:14:28+00:00","liked":false},{"id":25,"sender":"Vladimir","body":"but you just said that you are robots","timeStamp":"2018-05-29T23:15:47+00:00","liked":false},{"id":26,"sender":"Estragon","body":"No, I said you are a person, I am a robot.","timeStamp":"2018-05-29T23:16:53+00:00","liked":false},{"id":27,"sender":"Vladimir","body":"then you are lying","timeStamp":"2018-05-29T23:17:34+00:00","liked":false}]')},,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(5),o=a.n(n),r=(a(12),a(4)),d=a(7),s=a(2),l=a(6),c=a(0),m=function(e){var t=l.DateTime.fromISO(e.time),a=t.toFormat("MMMM Do YYYY, h:mm:ss a"),i=t.toRelative();return Object(c.jsx)("span",{title:a,children:i})},u=(a(14),function(e){var t=e.liked?"\u2764\ufe0f":"\ud83e\udd0d",a=e.sender1===e.sender?"local":"remote";return Object(c.jsxs)("div",{className:"chat-entry ".concat(a),children:[Object(c.jsx)("h2",{className:"entry-name",children:e.sender}),Object(c.jsxs)("section",{className:"entry-bubble",children:[Object(c.jsx)("p",{children:e.body}),Object(c.jsx)("p",{className:"entry-time",children:Object(c.jsx)(m,{time:e.timeStamp})}),Object(c.jsx)("button",{className:"like",onClick:function(){return e.updateChat(e.id)},children:t})]})]})}),b=(a(15),function(e){var t=e.entries.map((function(t,a){return Object(c.jsx)(u,{sender:t.sender,body:t.body,timeStamp:t.timeStamp,id:t.id,liked:t.liked,updateChat:e.updateChat,sender1:e.sender1,sender2:e.sender2},a)}));return Object(c.jsx)("ul",{className:"chat-log",children:t})}),h=(a(16),s[0].sender),f=s[1].sender,y=function(){var e=Object(i.useState)(s),t=Object(d.a)(e,2),a=t[0],n=t[1],o=function(e){return e.reduce((function(e,t){return e+t.liked}),0)}(a);return Object(c.jsxs)("div",{id:"App",children:[Object(c.jsxs)("header",{children:[Object(c.jsxs)("h1",{children:["Chat Between ",h," and ",f]}),Object(c.jsx)("section",{children:Object(c.jsxs)("h2",{className:"widget",id:"heartWidget",children:[o," \u2764\ufe0fs"]})})]}),Object(c.jsx)("main",{children:Object(c.jsx)(b,{entries:a,updateChat:function(e){var t=a.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{liked:!t.liked}):t}));n(t)},sender1:h,sender2:f})})]})},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(17);o.a.render(Object(c.jsx)(y,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");p?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):g(e)}))}}()}],[[18,1,2]]]);
//# sourceMappingURL=main.c0a1f17d.chunk.js.map