(this["webpackJsonpkatie-king-project-5"]=this["webpackJsonpkatie-king-project-5"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),s=a.n(o),i=(a(23),a(17)),c=a(2),l=a(3),u=a(5),d=a(4),h=a(6),m=a.n(h),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,this.props.currentWord))}}]),a}(n.Component),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{value:this.props.word,onClick:this.props.handleWordSelect,className:this.props.className},this.props.word)}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"scoreCounter"},r.a.createElement("h4",null,"Score: ",this.props.score))}}]),a}(n.Component),w=(a(41),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=function(e){e.target.value===n.state.activeDef?(console.log("You got it right!"),n.setState({score:n.state.score+1,wordsWithDefs:[]}),n.callRandomWordApi()):console.log("You got it wrong!")},n.state={words:[],definitions:{},wordsWithDefs:[],numOfDefs:[],activeDef:"",userChoice:"",score:0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.callRandomWordApi()}},{key:"callRandomWordApi",value:function(){var e=this;m.a.get("https://random-word-api.herokuapp.com/word?number=9").then((function(t){e.setState({words:t.data}),e.callMerriamWebsterApi()}))}},{key:"callMerriamWebsterApi",value:function(){var e=this,t={};this.state.words.forEach((function(a){m.a.get("https://dictionaryapi.com/api/v3/references/collegiate/json/".concat(a,"?key=876ed444-a30f-40ca-9a52-4d2265921d9d")).then((function(n){if(n.data[0].hasOwnProperty("shortdef")){t[a]=n.data[0].shortdef[0];var r=Object(i.a)(e.state.wordsWithDefs);r.push(a),e.setState({wordsWithDefs:r,definitions:t,numOfDefs:Object.keys(e.state.definitions).length})}e.getRandomWord()}))}))}},{key:"getRandomWord",value:function(){for(var e=Math.floor(Math.random()*this.state.numOfDefs),t=this.state.wordsWithDefs[e],a=0;a<=this.state.wordsWithDefs.length;a++)this.state.wordsWithDefs[a]===t&&this.setState({activeDef:t})}},{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"gameBoard show"},r.a.createElement("h1",null,"Word Nerd"),r.a.createElement(v,{score:this.state.score}),r.a.createElement(f,{currentWord:this.state.definitions[this.state.activeDef]}),r.a.createElement("div",{className:"buttonContainer"},this.state.words.map((function(t,a){return r.a.createElement(p,{handleWordSelect:e.handleClick,word:e.state.words[a],className:"button"})})))),r.a.createElement("div",{className:"gameOver hide"},r.a.createElement("h2",null,"Game Over"),r.a.createElement("button",{className:"playAgain"},"Play Again")))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.8e806a56.chunk.js.map