(this.webpackJsonpbagjav=this.webpackJsonpbagjav||[]).push([[0],{18:function(e,t,r){e.exports=r(31)},23:function(e,t,r){},24:function(e,t,r){},25:function(e,t,r){},31:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(14),c=r.n(l),o=r(17),u=(r(23),r(3)),i=r(4),s=r(7),p=r(6),y=r(8),f=(r(24),r(1)),d=r(5),h=(r(25),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).makeCards=function(){var t=["Hearts","Spades","Clubs","Diamonds"],r=["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];for(var a in t)for(var l in r)e.state.deck.push(n.a.createElement("button",{className:"cards",value:"".concat(r[l]," of ").concat(t[a]),onClick:function(t){return e.choseCard(t)},key:l+a}," ","".concat(r[l]," of ").concat(t[a])," "));return e.deck},e.shuffle=function(){for(var t,r=e.state.deck,a=r.length;a;){var n=[r[t=Math.floor(Math.random()*a--)],r[a]];r[a]=n[0],r[t]=n[1]}return Object(d.a)(e)},e.deal=function(){e.state.player1.length<1&&(e.setState({player1:e.state.deck.filter((function(e,t){return t<13?e:null}))}),e.setState({player2:e.state.deck.filter((function(e,t){return t>=13&&t<26?e:null}))}),e.setState({player3:e.state.deck.filter((function(e,t){return t>=26&&t<39?e:null}))}),e.setState({player4:e.state.deck.filter((function(e,t){return t>=39&&t<=52?e:null}))}))},e.sort=function(){e.setState({player1:e.state.player1.sort((function(e,t){return e.key-t.key}))}),e.setState({player2:e.state.player2.sort((function(e,t){return e.key-t.key}))}),e.setState({player3:e.state.player3.sort((function(e,t){return e.key-t.key}))}),e.setState({player4:e.state.player4.sort((function(e,t){return e.key-t.key}))})},e.player1Turn=function(){1===e.state.playCard.length&&e.player2turn(),e.player3turn(),e.player4turn()},e.choseCard=function(t){var r=t.currentTarget;console.log(r);var a=t.target.value;e.setState((function(t){var r=t.player1,l=n.a.createElement("button",{className:"cards",key:a}," ",a," "),c=[];if(a){c.push(l);var o=r.filter((function(e){return c.some((function(t){return t.value!==e.props.children[1]}))}));return console.log(c),1===e.state.currentPlayer?{playCard:c,player1:[].concat(Object(f.a)(o),[r.length]),currentPlayer:2}:alert("You already played this set")}})),e.removeCardInPlay()},e.removeCardInPlay=function(){var t=e.state.player1;t.value===e.state.playCard.value&&e.setState({player1:Object(f.a)(t.slice(1,t.length))})},e.player2turn=function(){var t=e.state.player2,r=e.state.playCard,a=t.filter((function(e){return r.some((function(t){return t.props.children[1][0]===e.props.children[1][0]}))})),n=t.filter((function(e){return r.some((function(t){return e.props.children[1][0]!==t.props.children[1][0]}))}));r.length>=1&&e.setState({playCard:[].concat(Object(f.a)(r),Object(f.a)(a)),player2:Object(f.a)(n)})},e.player3turn=function(){var t=e.state.player3,r=e.state.playCard,a=t.filter((function(e){return r.some((function(t){return t.props.children[1][0]===e.props.children[1][0]}))})),n=t.filter((function(e){return r.some((function(t){return e.props.children[1][0]!==t.props.children[1][0]}))}));e.setState({playCard:[].concat(Object(f.a)(r),Object(f.a)(a)),player3:Object(f.a)(n)})},e.player4turn=function(){var t=e.state.player4,r=e.state.playCard,a=t.filter((function(e){return r.some((function(t){return t.props.children[1][0]===e.props.children[1][0]}))})),n=t.filter((function(e){return r.some((function(t){return e.props.children[1][0]!==t.props.children[1][0]}))}));e.setState({playCard:[].concat(Object(f.a)(r),Object(f.a)(a)),player4:Object(f.a)(n),currentPlayer:5})},e.playGame=function(){e.state.playCard.length<4&&(e.choseCard(),e.player2turn(),e.player3turn(),e.player4turn())},e.endSet=function(){setTimeout((function(){4===e.state.playCard.length||5===e.state.currentPlayer?(console.log("set Over"),e.setState({playCard:[],currentPlayer:1})):console.log("still playing")}),500)},e.endGame=function(){var t=e.state.player1,r=e.state.playCard;0===t.length&&1===r.length&&setTimeout((function(){alert("Player 1 wins this hand")}),500)},e.state={deck:[],player1:[],player2:[],player3:[],player4:[],playCard:[],currentPlayer:1},e.makeCards(),e.shuffle(),e}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.endSet(),this.endGame(),n.a.createElement("div",null,n.a.createElement("p",{id:"player1"},this.state.player1),n.a.createElement("p",{id:"player2"},this.state.player2),n.a.createElement("p",{id:"player3"},this.state.player3),n.a.createElement("p",{id:"player4"},this.state.player4),n.a.createElement("button",{onClick:function(){return e.deal()}},"Deal"),n.a.createElement("button",{onClick:function(){return e.sort()}},"sort"),n.a.createElement("button",{onClick:function(){return e.player2turn()}},"Player 2"),n.a.createElement("button",{onClick:function(){return e.player3turn()}},"Player 3"),n.a.createElement("button",{onClick:function(){return e.player4turn()}},"Player 4"),n.a.createElement("p",{id:"playCard"},"Card in play:",this.state.playCard))}}]),t}(a.Component)),m=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(o.a,null,n.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.8f4acc90.chunk.js.map