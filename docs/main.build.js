!function(e){function t(t){for(var n,l,o=t[0],c=t[1],s=t[2],f=0,d=[];f<o.length;f++)l=o[f],r[l]&&d.push(r[l][0]),r[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(i&&i(t);d.length;)d.shift()();return u.push.apply(u,s||[]),a()}function a(){for(var e,t=0;t<u.length;t++){for(var a=u[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(u.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={2:0},u=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="https://ksana.oss-cn-shenzhen.aliyuncs.com/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var i=c;u.push([638,1,0]),a()}({165:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(2)),r=o(a(115)),u=o(a(583)),l=a(36);function o(e){return e&&e.__esModule?e:{default:e}}a(582),a(580),a(578);t.default=function(e){var t=e.id,a=e.title,o=e.tags,c=e.publishDate,s=e.content,i=(e.toc,e.mode),f=new Date(c),d=[["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][f.getMonth()],f.getDate()+"TH",f.getFullYear()],m=d[0],p=d[1],h=d[2];return n.default.createElement("article",{className:"article post"},n.default.createElement("h1",{className:"article-title"},i?a:n.default.createElement(l.Link,{to:"/post/"+t},a)),n.default.createElement("div",{className:"article-date"},(m||"")+" "+p+" "+(h||"")),n.default.createElement("div",{className:"article-content"},n.default.createElement("div",{className:"post-body markdown-body",dangerouslySetInnerHTML:{__html:s}})),n.default.createElement("div",{className:"article-info"},i?null:n.default.createElement(l.Link,{to:"/post/"+t},"MORE"),n.default.createElement("div",{className:"article-tags"},n.default.createElement(r.default,{icon:u.default,className:"article-tags-pic"}),o.map(function(e){return n.default.createElement(l.Link,{to:"/archive/tag/"+e,key:e,className:"article-tags-link"},e)}))))}},187:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=f(a(63)),r=f(a(60)),u=f(a(59)),l=f(a(58)),o=f(a(54)),c=f(a(2)),s=a(36),i=a(75);function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){(0,r.default)(this,t);var a=(0,l.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={posts:[]},(0,i.getPosts)().then(function(e){return a.setState({posts:e})}),a}return(0,o.default)(t,e),(0,u.default)(t,[{key:"dateTransform",value:function(e){var t=new Date(e),a=[["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][t.getMonth()],t.getDate()+"TH",t.getFullYear()];return a[0]+" "+a[1]+" "+a[2]}},{key:"render",value:function(){var e=this,t=this.state.posts,a=this.props.tag;return t.sort(function(e,t){return new Date(e.PublishDate)<new Date(t.PublishDate)?1:-1}).filter(function(e){return!a||!!e.Tags.includes(a)}).map(function(t){return c.default.createElement("li",{key:t.ID},c.default.createElement(s.Link,{to:"/post/"+t.ID},c.default.createElement("span",{className:"item-name"},t.Title),c.default.createElement("span",{className:"item-date"},e.dateTransform(t.PublishDate))))})}}]),t}(c.default.PureComponent);t.default=d},193:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(63)),r=d(a(60)),u=d(a(59)),l=d(a(58)),o=d(a(54)),c=a(2),s=d(c),i=a(36),f=a(75);function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,r.default)(this,t);var a=(0,l.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));a.state={tags:[],selected:""};var u=a.props.tag;return(0,f.getTags)().then(function(e){return a.setState({tags:e,selected:u})}),a}return(0,o.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.selected,n=t.tags;return[s.default.createElement("li",{key:"ALL",style:{color:"ALL"===a?"#fff":"",background:"ALL"===a?"#333":""}},s.default.createElement(i.Link,{to:"/archive",onClick:function(t){return e.setState({selected:"ALL"})}},"ALL"))].concat(n.map(function(t){return s.default.createElement("li",{key:t,style:{color:a===t?"#fff":"",background:a===t?"#333":""}},s.default.createElement(i.Link,{to:"/archive/tag/"+t,onClick:function(a){return e.setState({selected:t})}},t))}))}}]),t}(c.PureComponent);t.default=m},194:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(2)),r=l(a(193)),u=l(a(192));function l(e){return e&&e.__esModule?e:{default:e}}a(191);t.default=function(e){var t=e.match;return n.default.createElement("div",{className:"archive"},n.default.createElement("div",{className:"archive-tags"},n.default.createElement("h3",null,"Tags"),n.default.createElement("ul",{className:"archive-tag-items"},n.default.createElement(r.default,{tag:t.params.tag}))),n.default.createElement("div",{className:"archive-list"},n.default.createElement("h3",null,"List"),n.default.createElement("ul",{className:"archive-list-items"},n.default.createElement(u.default,{tag:t.params.tag}))))}},196:function(e,t,a){},197:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(a(63)),r=s(a(60)),u=s(a(59)),l=s(a(58)),o=s(a(54)),c=s(a(2));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){(0,r.default)(this,t);var a=(0,l.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={canvasSize:0,intervalCode:null,myCanvas:null},a.state.canvasSize=e.size,a}return(0,o.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("lifegame"),t=e.getContext("2d");this.state.myCanvas=e;var a=10*Math.round(e.offsetWidth/10);this.state.canvasSize=a;var n=a/10,r=10;if(null!=e){var u=function(e){for(var t=new Array(e),a=0;a<e;a++){t[a]=new Array(e);for(var n=0;n<e;n++)t[a][n]=Math.round(Math.random())}return t}(n);this.mousePassCanvas=s,e.addEventListener("mousemove",s),t.fillRect(0,0,a,a),this.state.intervalCode=setInterval(function(){!function(e){for(var t=e.length,a=0;a<t;a++)for(var n=0;n<t;n++)l(a,n,e)}(function e(t){for(var a=[],n=t.length,r=0;r<n;r++)t[r]instanceof Array?a[r]=e(t[r]):a[r]=t[r];return a}(u)),c(u)},50)}function l(e,t,a){switch(function(e,t,a){for(var n=0,r=e-1;r<=e+1;r++)for(var u=t-1;u<=t+1;u++)r>=0&&r<a.length&&u>=0&&u<a.length&&(r!==e||u!==t)&&(n+=1===a[r][u]?1:0);return n}(e,t,a)){case 3:return u[e][t]=1,1;case 2:return-1;default:return u[e][t]=0,0}}function o(e,a){t.fillStyle="#ffffff",t.fillRect(e*r,a*r,r,r)}function c(e){for(var a,n,u=e.length,l=0;l<u;l++)for(var c=0;c<u;c++)1===e[l][c]?(a=l,n=c,t.fillStyle="#000000",t.fillRect(a*r,n*r,r,r)):o(l,c)}function s(e){var t=e.offsetX,a=e.offsetY,l=Math.floor(t/r),o=Math.floor(a/r);l<=0||o<=0||(l<n&&o<n&&(u[l][o]=1),c(u))}}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.myCanvas,a=e.intervalCode;t.removeEventListener("mousemove",this.mousePassCanvas),clearInterval(a)}},{key:"sizePX",value:function(){var e=this.state.canvasSize;if(0!==e)return{height:e+"px",width:e+"px",margin:"0 auto"}}},{key:"render",value:function(){var e=this.state.canvasSize;return c.default.createElement("div",{className:"lifegame-box",style:this.sizePX()},c.default.createElement("canvas",{id:"lifegame",width:e,height:e}))}}]),t}(c.default.PureComponent);t.default=i},198:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(2)),r=u(a(197));function u(e){return e&&e.__esModule?e:{default:e}}a(196);t.default=function(e){return n.default.createElement("div",{className:"about"},n.default.createElement("blockquote",null,n.default.createElement(r.default,{size:300}),n.default.createElement("p",null,"如果说艺术解释了我们的梦想，那么计算机就是以程序的名义执行着它们。",n.default.createElement("br",null)),n.default.createElement("p",null,"带着崇敬和赞美，将本书献给活在计算机中的神灵。"),n.default.createElement("p",{style:{textAlign:"right"}},"——Alan J.Perlis，《计算机程序的结构和解释》序")),n.default.createElement("p",null,"以为人生是连续的，从时光这头到那头，从出生到死亡，像条在时光里蠕动的虫子， 用无常生灭来形容或许更为恰当，岁月携身体流逝而无可挽留，思绪起伏却总是遗忘， 回忆将破碎的自我在时光中串起以维持人生作为一个整体的印象。",n.default.createElement("br",null),n.default.createElement("br",null),"即便如此，时光总会悄然将其斩断，回忆也会被遗忘， 能做的，仅是用文字去挽留那些思绪，在这里，给未来的自己留些东西， 也许能勾起回忆，也许能让回忆更加深刻。"),n.default.createElement("br",null),n.default.createElement("a",{href:"https://github.com/lzcers"},"My GitHub")," ",n.default.createElement("br",null),n.default.createElement("i",null,"Email: lzcers@gmail.com")," ",n.default.createElement("br",null))}},199:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(63)),r=d(a(60)),u=d(a(59)),l=d(a(58)),o=d(a(54)),c=a(2),s=d(c),i=d(a(165)),f=a(75);function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,r.default)(this,t);var a=(0,l.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={post:{},loadingFlag:!0},(0,f.getPostByID)(e.id).then(function(e){return a.setState({post:e,loadingFlag:!1})}),a}return(0,o.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.state,t=e.post;return e.loadingFlag?s.default.createElement("h3",null,"Loading..."):s.default.createElement(i.default,{id:t.ID,title:t.Title,tags:t.Tags,publishDate:t.PublishDate,content:t.Content,toc:t.TOC,mode:!0})}}]),t}(c.PureComponent);t.default=m},200:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(2)),r=u(a(199));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.match;return n.default.createElement(r.default,{id:t.params.id})}},202:function(e,t,a){},524:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(523)),r=l(a(522)),u=l(a(344));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={nodeID:"root",nodeLevel:0,childrenNode:[]};return e.filter(function(e){return"heading"===e.type}).map(function(e){return{nodeID:e.text.replace(/<(?:.|\n)*?>/gm,"").toLowerCase().replace(/[\s\n\t]+/g,"-"),nodeLevel:e.depth,childrenNode:[]}}).forEach(function(e){return function e(t,a){var n=void 0;t.childrenNode.forEach(function(e){a.nodeLevel>e.nodeLevel&&(n=e)}),void 0===n?t.childrenNode.push(a):e(n,a)}(t,e)}),t}var c=new n.default.Renderer;c.heading=function(e,t){return"<h"+t+' id="'+e.replace(/<(?:.|\n)*?>/gm,"").toLowerCase().replace(/[\s\n\t]+/g,"-")+'">'+e+"</h"+t+">"},c.code=function(e,t){return'<pre><code class="lang-'+t+'">'+r.default.highlightAuto(e).value+"</code></pre>"},n.default.setOptions({renderer:c,breaks:!0,gfm:!0}),t.default=function(e){var t=(0,u.default)(e),a=t.attributes,r=t.body,l=a,c=n.default.lexer(r),s=o(c);return{meta:l,html:n.default.parser(c),markdown:r,tocTree:s}}},527:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(526),u=(n=r)&&n.__esModule?n:{default:n};t.default={get:function(e){return!!window.sessionStorage&&JSON.parse(window.sessionStorage.getItem(e)||"")},set:function(e,t){return!!window.sessionStorage&&(window.sessionStorage.setItem(e,(0,u.default)(t)),!0)},has:function(e){return window.sessionStorage&&window.sessionStorage.hasOwnProperty(e)}}},578:function(e,t,a){},580:function(e,t,a){},615:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=v(a(63)),r=v(a(60)),u=v(a(59)),l=v(a(58)),o=v(a(54)),c=a(2),s=v(c),i=a(36),f=v(a(115)),d=v(a(585)),m=v(a(584)),p=v(a(165)),h=a(75);function v(e){return e&&e.__esModule?e:{default:e}}var g=function(e,t){var a=t?parseInt(e,10)-1:parseInt(e,10)+1;return s.default.createElement("div",{className:t?"post-left":"post-right"},t&&s.default.createElement(f.default,{icon:d.default}),s.default.createElement(i.Link,{onClick:function(e){return window.scrollTo(0,0)},to:"/home/page/"+a},t?"PREVIOUS":"NEXT"),!t&&s.default.createElement(f.default,{icon:m.default}))},E=function(e){function t(e){(0,r.default)(this,t);var a=(0,l.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={loadingFlag:!0,posts:[]},(0,h.getPosts)().then(function(e){return a.setState({loadingFlag:!1,posts:e})}),a}return(0,o.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.pageNumber,t=this.state,a=t.posts,n=t.loadingFlag,r=10*(e-1);return s.default.createElement("div",{className:"articles"},a.sort(function(e,t){return new Date(e.PublishDate)<new Date(t.PublishDate)?1:-1}).slice(r,r+10).map(function(e){return s.default.createElement(p.default,{key:e.ID,id:e.ID,title:e.Title,tags:e.Tags,publishDate:e.PublishDate,content:e.Content,toc:null,mode:!1})}),s.default.createElement("div",{className:"post-nav"},e>1&&g(e,!0),e<a.length/10&&g(e,!1)),!n||s.default.createElement("h3",null,"Loading..."))}}]),t}(c.PureComponent);t.default=E},616:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(2)),r=u(a(615));function u(e){return e&&e.__esModule?e:{default:e}}a(202);t.default=function(e){var t=e.match.params.pageNumber||1;return n.default.createElement(r.default,{pageNumber:t})}},617:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(a(2)),r=a(36),u=s(a(616)),l=s(a(200)),o=s(a(198)),c=s(a(194));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return n.default.createElement(r.Switch,null,n.default.createElement(r.Route,{exact:!0,path:"/",component:u.default}),n.default.createElement(r.Route,{exact:!0,path:"/home/page/:pageNumber",component:u.default}),n.default.createElement(r.Route,{path:"/home",component:u.default}),n.default.createElement(r.Route,{path:"/post/:id",component:l.default}),n.default.createElement(r.Route,{path:"/about",component:o.default}),n.default.createElement(r.Route,{path:"/archive/tag/:tag",component:c.default}),n.default.createElement(r.Route,{path:"/archive",component:c.default}))}},619:function(e,t,a){},621:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a(2)),r=l(a(115)),u=l(a(620));function l(e){return e&&e.__esModule?e:{default:e}}a(619);t.default=function(e){return n.default.createElement("footer",null,n.default.createElement("p",null,"Copyright © KSANA 2017 - 2018 ",n.default.createElement(r.default,{icon:u.default})," Powered by React"))}},623:function(e,t,a){},624:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(2),u=(n=r)&&n.__esModule?n:{default:n},l=a(36);a(623);t.default=function(e){return u.default.createElement("nav",{className:"nav"},u.default.createElement("div",{className:"nav-header"},u.default.createElement("h1",{className:"nav-sitename"},"ksana")),u.default.createElement("ul",{className:"nav-menu"},u.default.createElement("li",{className:"nav-item"},u.default.createElement(l.Link,{to:"/home"},"HOME")),u.default.createElement("li",{className:"nav-item"},u.default.createElement(l.Link,{to:"/archive"},"ARCHIVE")),u.default.createElement("li",{className:"nav-item"},u.default.createElement(l.Link,{to:"/about"},"ABOUT"))))}},625:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(2)),r=o(a(624)),u=o(a(621)),l=o(a(617));function o(e){return e&&e.__esModule?e:{default:e}}a(189),a(187);t.default=function(e){return n.default.createElement("div",{className:"wrap"},n.default.createElement(r.default,null),n.default.createElement("div",{className:"content"},n.default.createElement(l.default,null)),n.default.createElement(u.default,null))}},638:function(e,t,a){"use strict";var n=o(a(2)),r=o(a(636)),u=a(36),l=o(a(625));function o(e){return e&&e.__esModule?e:{default:e}}r.default.render(n.default.createElement(u.HashRouter,null,n.default.createElement(l.default,null)),document.getElementById("app"))},75:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPostByID=t.getTags=t.getPosts=void 0;var n,r,u,l=g(a(576)),o=g(a(573)),c=g(a(566)),s=g(a(551)),i=g(a(164)),f=(n=(0,o.default)(l.default.mark(function e(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d().then(function(e){return e.map(function(e){return e.ID=e.fileName,e.Tags=e.Tags.split("|").map(function(e){return e.trim()}),e.Content=(0,v.default)(e.Content).html,e})}));case 1:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)}),d=(r=(0,o.default)(l.default.mark(function e(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(E);case 2:if(e.t0=e.sent,e.t0){e.next=7;break}return e.next=6,P(_);case 6:e.t0=e.sent;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)}),m=(u=(0,o.default)(l.default.mark(function e(t){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t,b);case 2:if(e.t0=e.sent,e.t0){e.next=7;break}return e.next=6,M(t,y);case 6:e.t0=e.sent;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e,this)})),function(e){return u.apply(this,arguments)}),p=g(a(546)),h=g(a(527)),v=g(a(524));function g(e){return e&&e.__esModule?e:{default:e}}a(317);var E="https://raw.githubusercontent.com/lzcers/KsanaBlog-React/master/docs/articles/tags.json",_="/articles/tags.json",b="https://raw.githubusercontent.com/lzcers/KsanaBlog-React/master/docs/articles/",y="/articles/";function P(e){return h.default.has("postList")?i.default.resolve(h.default.get("postList")):p.default.get(e).then(function(e){return e.data}).then(function(e){return h.default.set("postList",e),e}).catch(function(e){return!1})}function M(e,t){return h.default.has(e)?i.default.resolve(h.default.get(e)):p.default.get(t+e).then(function(e){return e.data}).then(function(e){return(0,v.default)(e)}).then(function(t){var a={ID:e,Title:t.meta.Title,Tags:t.meta.Tags.split("|").map(function(e){return e.trim()}),PublishDate:t.meta.PublishDate,Content:t.html,TOC:t.tocTree};return h.default.set(e,a),a}).catch(function(e){return!1})}p.default.defaults.timeout=3500,t.getPosts=f,t.getTags=function(){return d().then(function(e){return[].concat((0,s.default)(new c.default(e.map(function(e){return e.Tags.split("|").map(function(e){return e.trim()})}).reduce(function(e,t){return e.concat(t)}))))})},t.getPostByID=m}});
//# sourceMappingURL=main.build.js.map