(window.webpackJsonpmtnmemories=window.webpackJsonpmtnmemories||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"assets/images/mountain1.jpeg","clicked":false},{"id":2,"image":"assets/images/mountain2.jpeg","clicked":false},{"id":3,"image":"assets/images/mountain3.jpeg","clicked":false},{"id":4,"image":"assets/images/mountain4.jpeg","clicked":false},{"id":5,"image":"assets/images/mountain5.jpeg","clicked":false},{"id":6,"image":"assets/images/mountain6.jpeg","clicked":false},{"id":7,"image":"assets/images/mountain7.jpeg","clicked":false},{"id":8,"image":"assets/images/mountain8.jpeg","clicked":false},{"id":9,"image":"assets/images/mountain9.jpeg","clicked":false},{"id":10,"image":"assets/images/mountain10.jpeg","clicked":false},{"id":11,"image":"assets/images/mountain11.jpeg","clicked":false},{"id":12,"image":"assets/images/mountain12.jpeg","clicked":false}]')},,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(2),c=t.n(i),o=(t(14),t(3)),r=t(4),m=t(7),l=t(5),u=t(8),d=(t(15),function(e){return s.a.createElement("div",{onClick:function(){return e.setClicked(e.id)},className:"card col-md-3"},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:e.name,src:e.image})))}),g=(t(16),function(e){return s.a.createElement("div",{className:"wrapper"},e.children)}),f=(t(17),function(e){return s.a.createElement("h1",{className:"title"},e.children)}),h=t(6),p=(t(18),0),k=0,v="To win, you must climb each mountain once and only once.";var b=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={mountains:h,correctGuesses:p,bestScore:k,userMessage:v},t.setClicked=function(e){var a=!1,n=t.state.mountains,s=n.filter((function(a){return a.id===e}));if(s[0].clicked?(v="Sorry, you already clicked on that one.  Back down to the bottom!",a=!0):p<n.length-1?(s[0].clicked=!0,v="Keep Climbing!",++p>k&&(k=p,t.setState({bestScore:k}))):(v="CONGRATULATIONS - You climbed every mountain!",k=12,t.setState({bestScore:k}),a=!0),a){for(var i=0;i<n.length;i++)n[i].clicked=!1;p=0}!function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}}(n),t.setState({mountains:n}),t.setState({correctGuesses:p}),t.setState({userMessage:v})},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(g,null,s.a.createElement(f,null,"Mountain Memories"),s.a.createElement("h3",{className:"stats"},this.state.userMessage),s.a.createElement("h3",{className:"stats"},s.a.createElement("span",{className:"climbed"},"Mountains Climbed: ",this.state.correctGuesses),s.a.createElement("span",{className:"best"},"Best Score: ",this.state.bestScore)),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},this.state.mountains.map((function(a){return s.a.createElement(d,{setClicked:e.setClicked,id:a.id,key:a.id,image:a.image})})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.edc1da9d.chunk.js.map