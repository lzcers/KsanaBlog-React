!function(e){function t(t){for(var a,l,o=t[0],c=t[1],f=t[2],s=0,d=[];s<o.length;s++)l=o[s],r[l]&&d.push(r[l][0]),r[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(i&&i(t);d.length;)d.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={0:0},u=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="https://ksana.oss-cn-shenzhen.aliyuncs.com/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var f=0;f<o.length;f++)t(o[f]);var i=c;u.push([178,1,2]),n()}({133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(2)),r=o(n(86)),u=o(n(233)),l=n(38);function o(e){return e&&e.__esModule?e:{default:e}}n(234),n(236),n(238);t.default=function(e){var t=e.id,n=e.title,o=e.tags,c=e.publishDate,f=e.content,i=(e.toc,e.mode),s=new Date(c),d=[["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][s.getMonth()],s.getDate()+"TH",s.getFullYear()],m=d[0],p=d[1],v=d[2];return a.default.createElement("article",{className:"article post"},a.default.createElement("h1",{className:"article-title"},i?n:a.default.createElement(l.Link,{to:"/post/"+t},n)),a.default.createElement("div",{className:"article-date"},(m||"")+" "+p+" "+(v||"")),a.default.createElement("div",{className:"article-content"},a.default.createElement("div",{className:"post-body markdown-body",dangerouslySetInnerHTML:{__html:f}})),a.default.createElement("div",{className:"article-info"},i?null:a.default.createElement(l.Link,{to:"/post/"+t},"MORE"),a.default.createElement("div",{className:"article-tags"},a.default.createElement(r.default,{icon:u.default,className:"article-tags-pic"}),o.map(function(e){return a.default.createElement(l.Link,{to:"/archive/tag/"+e,key:e,className:"article-tags-link"},e)}))))}},178:function(e,t,n){"use strict";var a=o(n(2)),r=o(n(180)),u=n(38),l=o(n(191));function o(e){return e&&e.__esModule?e:{default:e}}r.default.render(a.default.createElement(u.HashRouter,null,a.default.createElement(l.default,null)),document.getElementById("app"))},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(2)),r=o(n(192)),u=o(n(195)),l=o(n(199));function o(e){return e&&e.__esModule?e:{default:e}}n(627),n(629);t.default=function(e){return a.default.createElement("div",{className:"wrap"},a.default.createElement(r.default,null),a.default.createElement("div",{className:"content"},a.default.createElement(l.default,null)),a.default.createElement(u.default,null))}},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n(2)),r=n(38);n(193);t.default=function(e){return a.default.createElement("nav",{className:"nav"},a.default.createElement("div",{className:"nav-header"},a.default.createElement("h1",{className:"nav-sitename"},"ksana")),a.default.createElement("ul",{className:"nav-menu"},a.default.createElement("li",{className:"nav-item"},a.default.createElement(r.Link,{to:"/home"},"HOME")),a.default.createElement("li",{className:"nav-item"},a.default.createElement(r.Link,{to:"/archive"},"ARCHIVE")),a.default.createElement("li",{className:"nav-item"},a.default.createElement(r.Link,{to:"/about"},"ABOUT"))))}},193:function(e,t,n){},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(2)),r=l(n(86)),u=l(n(196));function l(e){return e&&e.__esModule?e:{default:e}}n(197);t.default=function(e){return a.default.createElement("footer",null,a.default.createElement("p",null,"Copyright © KSANA 2017 - 2018 ",a.default.createElement(r.default,{icon:u.default})," Powered by React"))}},197:function(e,t,n){},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(n(2)),r=n(38),u=f(n(200)),l=f(n(616)),o=f(n(618)),c=f(n(622));function f(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(r.Switch,null,a.default.createElement(r.Route,{exact:!0,path:"/",component:u.default}),a.default.createElement(r.Route,{exact:!0,path:"/home/page/:pageNumber",component:u.default}),a.default.createElement(r.Route,{path:"/home",component:u.default}),a.default.createElement(r.Route,{path:"/post/:id",component:l.default}),a.default.createElement(r.Route,{path:"/about",component:o.default}),a.default.createElement(r.Route,{path:"/archive/tag/:tag",component:c.default}),a.default.createElement(r.Route,{path:"/archive",component:c.default}))}},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(2)),r=u(n(201));function u(e){return e&&e.__esModule?e:{default:e}}n(614);t.default=function(e){var t=e.match.params.pageNumber||1;return a.default.createElement(r.default,{pageNumber:t})}},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=h(n(46)),r=h(n(49)),u=h(n(50)),l=h(n(51)),o=h(n(55)),c=n(2),f=h(c),i=n(38),s=h(n(86)),d=h(n(231)),m=h(n(232)),p=h(n(133)),v=n(70);function h(e){return e&&e.__esModule?e:{default:e}}var g=function(e,t){var n=t?parseInt(e,10)-1:parseInt(e,10)+1;return f.default.createElement("div",{className:t?"post-left":"post-right"},t&&f.default.createElement(s.default,{icon:d.default}),f.default.createElement(i.Link,{onClick:function(e){return window.scrollTo(0,0)},to:"/home/page/"+n},t?"PREVIOUS":"NEXT"),!t&&f.default.createElement(s.default,{icon:m.default}))},E=function(e){function t(e){(0,r.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={loadingFlag:!0,posts:[]},(0,v.getPosts)().then(function(e){return n.setState({loadingFlag:!1,posts:e})}),n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.pageNumber,t=this.state,n=t.posts,a=t.loadingFlag,r=10*(e-1);return f.default.createElement("div",{className:"articles"},n.sort(function(e,t){return new Date(e.PublishDate)<new Date(t.PublishDate)?1:-1}).slice(r,r+10).map(function(e){return f.default.createElement(p.default,{key:e.ID,id:e.ID,title:e.Title,tags:e.Tags,publishDate:e.PublishDate,content:e.Content,toc:null,mode:!1})}),f.default.createElement("div",{className:"post-nav"},e>1&&g(e,!0),e<n.length/10&&g(e,!1)),!a||f.default.createElement("h3",null,"Loading..."))}}]),t}(c.PureComponent);t.default=E},236:function(e,t,n){},238:function(e,t,n){},289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n(290));t.default={get:function(e){return!!window.sessionStorage&&JSON.parse(window.sessionStorage.getItem(e)||"")},set:function(e,t){return!!window.sessionStorage&&(window.sessionStorage.setItem(e,(0,a.default)(t)),!0)},has:function(e){return window.sessionStorage&&window.sessionStorage.hasOwnProperty(e)}}},292:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(293)),r=l(n(294)),u=l(n(472));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={nodeID:"root",nodeLevel:0,childrenNode:[]};return e.filter(function(e){return"heading"===e.type}).map(function(e){return{nodeID:e.text.replace(/<(?:.|\n)*?>/gm,"").toLowerCase().replace(/[\s\n\t]+/g,"-"),nodeLevel:e.depth,childrenNode:[]}}).forEach(function(e){return function e(t,n){var a=void 0;t.childrenNode.forEach(function(e){n.nodeLevel>e.nodeLevel&&(a=e)}),void 0===a?t.childrenNode.push(n):e(a,n)}(t,e)}),t}var c=new a.default.Renderer;c.heading=function(e,t){return"<h"+t+' id="'+e.replace(/<(?:.|\n)*?>/gm,"").toLowerCase().replace(/[\s\n\t]+/g,"-")+'">'+e+"</h"+t+">"},c.code=function(e,t){return'<pre><code class="lang-'+t+'">'+r.default.highlightAuto(e).value+"</code></pre>"},a.default.setOptions({renderer:c,breaks:!0,gfm:!0}),t.default=function(e){var t=(0,u.default)(e),n=t.attributes,r=t.body,l=n,c=a.default.lexer(r),f=o(c);return{meta:l,html:a.default.parser(c),markdown:r,tocTree:f}}},614:function(e,t,n){},616:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(2)),r=u(n(617));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.match;return a.default.createElement(r.default,{id:t.params.id})}},617:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(46)),r=d(n(49)),u=d(n(50)),l=d(n(51)),o=d(n(55)),c=n(2),f=d(c),i=d(n(133)),s=n(70);function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,r.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={post:{},loadingFlag:!0},(0,s.getPostByID)(e.id).then(function(e){return n.setState({post:e,loadingFlag:!1})}),n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.state,t=e.post;return e.loadingFlag?f.default.createElement("h3",null,"Loading..."):f.default.createElement(i.default,{id:t.ID,title:t.Title,tags:t.Tags,publishDate:t.PublishDate,content:t.Content,toc:t.TOC,mode:!0})}}]),t}(c.PureComponent);t.default=m},618:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(2)),r=u(n(619));function u(e){return e&&e.__esModule?e:{default:e}}n(620);t.default=function(e){return a.default.createElement("div",{className:"about"},a.default.createElement("blockquote",null,a.default.createElement(r.default,{size:300}),a.default.createElement("p",null,"如果说艺术解释了我们的梦想，那么计算机就是以程序的名义执行着它们。",a.default.createElement("br",null)),a.default.createElement("p",null,"带着崇敬和赞美，将本书献给活在计算机中的神灵。"),a.default.createElement("p",{style:{textAlign:"right"}},"——Alan J.Perlis，《计算机程序的结构和解释》序")),a.default.createElement("p",null,"以为人生是连续的，从时光这头到那头，从出生到死亡，像条在时光里蠕动的虫子， 用无常生灭来形容或许更为恰当，岁月携身体流逝而无可挽留，思绪起伏却总是遗忘， 回忆将破碎的自我在时光中串起以维持人生作为一个整体的印象。",a.default.createElement("br",null),a.default.createElement("br",null),"即便如此，时光总会悄然将其斩断，回忆也会被遗忘， 能做的，仅是用文字去挽留那些思绪，在这里，给未来的自己留些东西， 也许能勾起回忆，也许能让回忆更加深刻。"),a.default.createElement("br",null),a.default.createElement("a",{href:"https://github.com/lzcers"},"My GitHub")," ",a.default.createElement("br",null),a.default.createElement("i",null,"Email: lzcers@gmail.com")," ",a.default.createElement("br",null))}},619:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(n(46)),r=f(n(49)),u=f(n(50)),l=f(n(51)),o=f(n(55)),c=f(n(2));function f(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){(0,r.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={canvasSize:0,intervalCode:null,myCanvas:null},n.state.canvasSize=e.size,n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("lifegame"),t=e.getContext("2d");this.state.myCanvas=e;var n=10*Math.round(e.offsetWidth/10);this.state.canvasSize=n;var a=n/10,r=10;if(null!=e){var u=function(e){for(var t=new Array(e),n=0;n<e;n++){t[n]=new Array(e);for(var a=0;a<e;a++)t[n][a]=Math.round(Math.random())}return t}(a);this.mousePassCanvas=i,e.addEventListener("mousemove",i),t.fillRect(0,0,n,n),this.state.intervalCode=setInterval(function(){!function(e){for(var t=e.length,n=0;n<t;n++)for(var a=0;a<t;a++)l(n,a,e)}(function e(t){for(var n=[],a=t.length,r=0;r<a;r++)t[r]instanceof Array?n[r]=e(t[r]):n[r]=t[r];return n}(u)),f(u)},50)}function l(e,t,n){switch(function(e,t,n){for(var a=0,r=e-1;r<=e+1;r++)for(var u=t-1;u<=t+1;u++)r>=0&&r<n.length&&u>=0&&u<n.length&&(r!==e||u!==t)&&(a+=1===n[r][u]?1:0);return a}(e,t,n)){case 3:return u[e][t]=1,1;case 2:return-1;default:return u[e][t]=0,0}}function o(e,n){t.fillStyle="#000000",t.fillRect(e*r,n*r,r,r)}function c(e,n){t.fillStyle="#ffffff",t.fillRect(e*r,n*r,r,r)}function f(e){for(var t=e.length,n=0;n<t;n++)for(var a=0;a<t;a++)1===e[n][a]?o(n,a):c(n,a)}function i(e){var t=e.offsetX,n=e.offsetY,l=Math.floor(t/r),o=Math.floor(n/r);l<=0||o<=0||(l<a&&o<a&&(u[l][o]=1),f(u))}}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.myCanvas,n=e.intervalCode;t.removeEventListener("mousemove",this.mousePassCanvas),clearInterval(n)}},{key:"sizePX",value:function(){var e=this.state.canvasSize;if(0!==e)return{height:e+"px",width:e+"px",margin:"0 auto"}}},{key:"render",value:function(){var e=this.state.canvasSize;return c.default.createElement("div",{className:"lifegame-box",style:this.sizePX()},c.default.createElement("canvas",{id:"lifegame",width:e,height:e}))}}]),t}(c.default.PureComponent);t.default=i},620:function(e,t,n){},622:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(2)),r=l(n(623)),u=l(n(624));function l(e){return e&&e.__esModule?e:{default:e}}n(625);t.default=function(e){var t=e.match;return a.default.createElement("div",{className:"archive"},a.default.createElement("div",{className:"archive-tags"},a.default.createElement("h3",null,"Tags"),a.default.createElement("ul",{className:"archive-tag-items"},a.default.createElement(r.default,{tag:t.params.tag}))),a.default.createElement("div",{className:"archive-list"},a.default.createElement("h3",null,"List"),a.default.createElement("ul",{className:"archive-list-items"},a.default.createElement(u.default,{tag:t.params.tag}))))}},623:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(46)),r=d(n(49)),u=d(n(50)),l=d(n(51)),o=d(n(55)),c=n(2),f=d(c),i=n(38),s=n(70);function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,r.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));n.state={tags:[],selected:""};var u=n.props.tag;return(0,s.getTags)().then(function(e){return n.setState({tags:e,selected:u})}),n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.selected,a=t.tags;return[f.default.createElement("li",{key:"ALL",style:{color:"ALL"===n?"#fff":"",background:"ALL"===n?"#333":""}},f.default.createElement(i.Link,{to:"/archive",onClick:function(t){return e.setState({selected:"ALL"})}},"ALL"))].concat(a.map(function(t){return f.default.createElement("li",{key:t,style:{color:n===t?"#fff":"",background:n===t?"#333":""}},f.default.createElement(i.Link,{to:"/archive/tag/"+t,onClick:function(n){return e.setState({selected:t})}},t))}))}}]),t}(c.PureComponent);t.default=m},624:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(n(46)),r=s(n(49)),u=s(n(50)),l=s(n(51)),o=s(n(55)),c=s(n(2)),f=n(38),i=n(70);function s(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){(0,r.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={posts:[]},(0,i.getPosts)().then(function(e){return n.setState({posts:e})}),n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"dateTransform",value:function(e){var t=new Date(e),n=[["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][t.getMonth()],t.getDate()+"TH",t.getFullYear()];return n[0]+" "+n[1]+" "+n[2]}},{key:"render",value:function(){var e=this,t=this.state.posts,n=this.props.tag;return t.sort(function(e,t){return new Date(e.PublishDate)<new Date(t.PublishDate)?1:-1}).filter(function(e){return!n||!!e.Tags.includes(n)}).map(function(t){return c.default.createElement("li",{key:t.ID},c.default.createElement(f.Link,{to:"/post/"+t.ID},c.default.createElement("span",{className:"item-name"},t.Title),c.default.createElement("span",{className:"item-date"},e.dateTransform(t.PublishDate))))})}}]),t}(c.default.PureComponent);t.default=d},625:function(e,t,n){},629:function(e,t,n){},70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPostByID=t.getTags=t.getPosts=void 0;var a=p(n(240)),r=p(n(243)),u=p(n(250)),l=p(n(265)),o=p(n(134)),c=function(){var e=(0,r.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f().then(function(e){return e.map(function(e){return e.ID=e.fileName,e.Tags=e.Tags.split("|").map(function(e){return e.trim()}),e.Content=(0,m.default)(e.Content).html,e})}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(v);case 2:if(e.t0=e.sent,e.t0){e.next=7;break}return e.next=6,_(h);case 6:e.t0=e.sent;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.default)(a.default.mark(function e(t){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t,g);case 2:if(e.t0=e.sent,e.t0){e.next=7;break}return e.next=6,b(t,E);case 6:e.t0=e.sent;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),s=p(n(270)),d=p(n(289)),m=p(n(292));function p(e){return e&&e.__esModule?e:{default:e}}n(499);var v="https://raw.githubusercontent.com/lzcers/KsanaBlog-React/2ffd6f41367221a4ad6b953332207079e62252ff/docs/articles/tags.json",h="/articles/tags.json",g="https://raw.githubusercontent.com/lzcers/KsanaBlog-React/2ffd6f41367221a4ad6b953332207079e62252ff/docs/articles/",E="/articles/";function _(e){return d.default.has("postList")?o.default.resolve(d.default.get("postList")):s.default.get(e).then(function(e){return e.data}).then(function(e){return d.default.set("postList",e),e}).catch(function(e){return!1})}function b(e,t){return d.default.has(e)?o.default.resolve(d.default.get(e)):s.default.get(t+e).then(function(e){return e.data}).then(function(e){return(0,m.default)(e)}).then(function(t){var n={ID:e,Title:t.meta.Title,Tags:t.meta.Tags.split("|").map(function(e){return e.trim()}),PublishDate:t.meta.PublishDate,Content:t.html,TOC:t.tocTree};return d.default.set(e,n),n}).catch(function(e){return!1})}s.default.defaults.timeout=3500,t.getPosts=c,t.getTags=function(){return f().then(function(e){return[].concat((0,l.default)(new u.default(e.map(function(e){return e.Tags.split("|").map(function(e){return e.trim()})}).reduce(function(e,t){return e.concat(t)}))))})},t.getPostByID=i}});
//# sourceMappingURL=main.build.js.map