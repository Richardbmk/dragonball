(this["webpackJsonpdragon-ball"]=this["webpackJsonpdragon-ball"]||[]).push([[0],[,,,,,,,function(e,a,n){e.exports=n(17)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(2),o=n.n(c),s=(n(12),n(3)),i=n(4),l=n(5),u=n(6),d=(n(13),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"caracters",src:"https://cdn6.dibujos.net/images/listas/117/".concat(e.caracters.jpgname,".jpg")}),r.a.createElement("h2",null," Name: ",e.caracters.name," "),r.a.createElement("h3",null," score: ",e.caracters.puntos," "))}),m=(n(14),function(e){return r.a.createElement("div",{className:"card-list"},e.caracters.map((function(e){return r.a.createElement(d,{key:e.id,caracters:e})})))}),p=(n(15),function(e){var a=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:a,onChange:n})}),h=(n(16),function(e){Object(u.a)(n,e);var a=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=a.call(this)).handleChange=function(a){e.setState({searchField:a.target.value})},e.state={caracters:[{name:"A18",jpgname:"a18",puntos:2841,id:"a12893"},{name:"Dios Shenron",jpgname:"dios-shenron",puntos:2800,id:"asleo1"},{name:"Trunks",jpgname:"trunks",puntos:2737,id:"893der"},{name:"Goku S\xfaper Saiyan Dios 2",jpgname:"goku-super-saiyan-dios-2",puntos:4542,id:"893desder"},{name:"Vegeta S\xfaper Saiyan",jpgname:"vegeta-super-saiyan",puntos:3535,id:"8934g3der"},{name:"Gotenks",jpgname:"gotenks",puntos:2904,id:"893d3frter"},{name:"Bulma",jpgname:"bulma",puntos:2742,id:"893derrt"},{name:"Piccolo",jpgname:"piccolo",puntos:2653,id:"893dehytr"},{name:"Pan",jpgname:"pan",puntos:2573,id:"893d567er"},{name:"Freezer",jpgname:"freezer",puntos:2619,id:"893deryth32"},{name:"Krilin",jpgname:"krilin",puntos:2476,id:"erd893der"},{name:"Videl",jpgname:"videl",puntos:2414,id:"834393desder"}],searchField:""},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,a=e.caracters,n=e.searchField,t=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Dragon Ball Caracters"),r.a.createElement(p,{placeholder:"search caracter",handleChange:this.handleChange}),r.a.createElement(m,{caracters:t}))}}]),n}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.b15d584e.chunk.js.map