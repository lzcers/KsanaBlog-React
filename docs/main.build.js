!function(e){function t(t){for(var a,l,o=t[0],c=t[1],i=t[2],f=0,d=[];f<o.length;f++)l=o[f],r[l]&&d.push(r[l][0]),r[l]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(s&&s(t);d.length;)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={0:0},u=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="https://ksana.oss-cn-shenzhen.aliyuncs.com/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var s=c;u.push([178,1,2]),n()}({133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(2)),r=c(n(86)),u=c(n(233)),l=n(38);n(234),n(236),n(238);var o=c(n(240));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.id,n=e.title,c=e.tags,i=e.publishDate,s=e.content,f=e.toc,d=e.mode,m=new Date(i),p=[["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][m.getMonth()],m.getDate()+"TH",m.getFullYear()],v=p[0],h=p[1],g=p[2];return a.default.createElement("article",{className:"article post"},a.default.createElement("h1",{className:"article-title"},d?n:a.default.createElement(l.Link,{to:"/post/"+t},n)),a.default.createElement("div",{className:"article-date"},(v||"")+" "+h+" "+(g||"")),a.default.createElement("div",{className:"article-content"},f&&f.childrenNode.length>=3?a.default.createElement("aside",{className:"article-toc"},a.default.createElement(o.default,{toc:f})):null,a.default.createElement("div",{className:"post-body markdown-body",dangerouslySetInnerHTML:{__html:s}})),a.default.createElement("div",{className:"article-info"},d?null:a.default.createElement(l.Link,{to:"/post/"+t},"MORE"),a.default.createElement("div",{className:"article-tags"},a.default.createElement(r.default,{icon:u.default,className:"article-tags-pic"}),c.map(function(e){return a.default.createElement(l.Link,{to:"/archive/tag/"+e,key:e,className:"article-tags-link"},e)}))))}},178:function(e,t,n){"use strict";var a=o(n(2)),r=o(n(180)),u=n(38),l=o(n(191));function o(e){return e&&e.__esModule?e:{default:e}}r.default.render(a.default.createElement(u.HashRouter,null,a.default.createElement(l.default,null)),document.getElementById("app"))},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(2)),r=o(n(192)),u=o(n(195)),l=o(n(199));function o(e){return e&&e.__esModule?e:{default:e}}n(630),n(632);t.default=function(e){return a.default.createElement("div",{className:"wrap"},a.default.createElement(r.default,null),a.default.createElement("div",{className:"content"},a.default.createElement(l.default,null)),a.default.createElement(u.default,null))}},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n(2)),r=n(38);n(193);t.default=function(e){return a.default.createElement("nav",{className:"nav"},a.default.createElement("div",{className:"nav-header"},a.default.createElement("h1",{className:"nav-sitename"},"ksana")),a.default.createElement("ul",{className:"nav-menu"},a.default.createElement("li",{className:"nav-item"},a.default.createElement(r.Link,{to:"/home"},"HOME")),a.default.createElement("li",{className:"nav-item"},a.default.createElement(r.Link,{to:"/archive"},"ARCHIVE")),a.default.createElement("li",{className:"nav-item"},a.default.createElement(r.Link,{to:"/about"},"ABOUT"))))}},193:function(e,t,n){},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(2)),r=l(n(86)),u=l(n(196));function l(e){return e&&e.__esModule?e:{default:e}}n(197);t.default=function(e){return a.default.createElement("footer",null,a.default.createElement("p",null,"Copyright © KSANA 2017 - 2018 ",a.default.createElement(r.default,{icon:u.default})," Powered by React"))}},197:function(e,t,n){},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(2)),r=n(38),u=i(n(200)),l=i(n(619)),o=i(n(621)),c=i(n(625));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(r.Switch,null,a.default.createElement(r.Route,{exact:!0,path:"/",component:u.default}),a.default.createElement(r.Route,{exact:!0,path:"/home/page/:pageNumber",component:u.default}),a.default.createElement(r.Route,{path:"/home",component:u.default}),a.default.createElement(r.Route,{path:"/post/:id",component:l.default}),a.default.createElement(r.Route,{path:"/about",component:o.default}),a.default.createElement(r.Route,{path:"/archive/tag/:tag",component:c.default}),a.default.createElement(r.Route,{path:"/archive",component:c.default}))}},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(2)),r=u(n(201));function u(e){return e&&e.__esModule?e:{default:e}}n(617);t.default=function(e){var t=e.match.params.pageNumber||1;return a.default.createElement(r.default,{pageNumber:t})}},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=h(n(46)),r=h(n(49)),u=h(n(50)),l=h(n(51)),o=h(n(55)),c=n(2),i=h(c),s=n(38),f=h(n(86)),d=h(n(231)),m=h(n(232)),p=h(n(133)),v=n(70);function h(e){return e&&e.__esModule?e:{default:e}}var g=function(e,t){var n=t?parseInt(e,10)-1:parseInt(e,10)+1;return i.default.createElement("div",{className:t?"post-left":"post-right"},t&&i.default.createElement(f.default,{icon:d.default}),i.default.createElement(s.Link,{onClick:function(e){return window.scrollTo(0,0)},to:"/home/page/"+n},t?"PREVIOUS":"NEXT"),!t&&i.default.createElement(f.default,{icon:m.default}))},E=function(e){function t(e){(0,r.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={loadingFlag:!0,posts:[]},(0,v.getPosts)().then(function(e){return n.setState({loadingFlag:!1,posts:e})}),n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.pageNumber,t=this.state,n=t.posts,a=t.loadingFlag,r=10*(e-1);return i.default.createElement("div",{className:"articles"},n.sort(function(e,t){return new Date(e.PublishDate)<new Date(t.PublishDate)?1:-1}).slice(r,r+10).map(function(e){return i.default.createElement(p.default,{key:e.ID,id:e.ID,title:e.Title,tags:e.Tags,publishDate:e.PublishDate,content:e.Content,toc:null,mode:!1})}),i.default.createElement("div",{className:"post-nav"},e>1&&g(e,!0),e<n.length/10&&g(e,!1)),!a||i.default.createElement("h3",null,"Loading..."))}}]),t}(c.PureComponent);t.default=E},236:function(e,t,n){},238:function(e,t,n){},240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n(2));function r(e,t){var n=e.childrenNode;return a.default.createElement("li",{className:"toc-li",key:t},a.default.createElement("a",{className:"toc-anchor",onClick:function(t){return function(e){var t=document.querySelector("#"+e),n=document.documentElement.scrollTop||document.body.scrollTop,a=t.offsetTop-80;null!=t&&function e(){n+=(a-n)/4,Math.abs(a-n)<1?window.scrollTo(0,a):(window.scrollTo(0,n),requestAnimationFrame(e))}()}(e.nodeID)}},e.nodeID),n.length?a.default.createElement("ol",{className:"toc-li"},n.map(function(e){return r(e,e.nodeID+t)})):null)}n(241),t.default=function(e){var t=e.toc;return t?a.default.createElement("div",{className:"toc"},a.default.createElement("ol",null,t.childrenNode.map(function(e,t){return r(e,e.nodeID+t)}))):null}},241:function(e,t,n){},292:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n(293));t.default={get:function(e){return!!window.sessionStorage&&JSON.parse(window.sessionStorage.getItem(e)||"")},set:function(e,t){return!!window.sessionStorage&&(window.sessionStorage.setItem(e,(0,a.default)(t)),!0)},has:function(e){return window.sessionStorage&&window.sessionStorage.hasOwnProperty(e)}}},295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(296)),r=l(n(297)),u=l(n(475));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={nodeID:"root",nodeLevel:0,childrenNode:[]};return e.filter(function(e){return"heading"===e.type}).map(function(e){return{nodeID:e.text.replace(/<(?:.|\n)*?>/gm,"").toLowerCase().replace(/[\s\n\t]+/g,"-"),nodeLevel:e.depth,childrenNode:[]}}).forEach(function(e){return function e(t,n){var a=void 0;t.childrenNode.forEach(function(e){n.nodeLevel>e.nodeLevel&&(a=e)}),void 0===a?t.childrenNode.push(n):e(a,n)}(t,e)}),t}var c=new a.default.Renderer;c.heading=function(e,t){return"<h"+t+' id="'+e.replace(/<(?:.|\n)*?>/gm,"").toLowerCase().replace(/[\s\n\t]+/g,"-")+'">'+e+"</h"+t+">"},c.code=function(e,t){return'<pre><code class="lang-'+t+'">'+r.default.highlightAuto(e).value+"</code></pre>"},a.default.setOptions({renderer:c,breaks:!0,gfm:!0}),t.default=function(e){var t=(0,u.default)(e),n=t.attributes,r=t.body,l=n,c=a.default.lexer(r),i=o(c);return{meta:l,html:a.default.parser(c),markdown:r,tocTree:i}}},617:function(e,t,n){},619:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(2)),r=u(n(620));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.match;return a.default.createElement(r.default,{id:t.params.id})}},620:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(46)),r=d(n(49)),u=d(n(50)),l=d(n(51)),o=d(n(55)),c=n(2),i=d(c),s=d(n(133)),f=n(70);function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,r.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={post:{},loadingFlag:!0},(0,f.getPostByID)(e.id).then(function(e){return n.setState({post:e,loadingFlag:!1})}),n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.state,t=e.post;return e.loadingFlag?i.default.createElement("h3",null,"Loading..."):i.default.createElement(s.default,{id:t.ID,title:t.Title,tags:t.Tags,publishDate:t.PublishDate,content:t.Content,toc:t.TOC,mode:!0})}}]),t}(c.PureComponent);t.default=m},621:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(2)),r=u(n(622));function u(e){return e&&e.__esModule?e:{default:e}}n(623);t.default=function(e){return a.default.createElement("div",{className:"about"},a.default.createElement("blockquote",null,a.default.createElement(r.default,{size:300}),a.default.createElement("p",null,"如果说艺术解释了我们的梦想，那么计算机就是以程序的名义执行着它们。",a.default.createElement("br",null)),a.default.createElement("p",null,"带着崇敬和赞美，将本书献给活在计算机中的神灵。"),a.default.createElement("p",{style:{textAlign:"right"}},"——Alan J.Perlis，《计算机程序的结构和解释》序")),a.default.createElement("p",null,"以为人生是连续的，从时光这头到那头，从出生到死亡，像条在时光里蠕动的虫子， 用无常生灭来形容或许更为恰当，岁月携身体流逝而无可挽留，思绪起伏却总是遗忘， 回忆将破碎的自我在时光中串起以维持人生作为一个整体的印象。",a.default.createElement("br",null),a.default.createElement("br",null),"即便如此，时光总会悄然将其斩断，回忆也会被遗忘， 能做的，仅是用文字去挽留那些思绪，在这里，给未来的自己留些东西， 也许能勾起回忆，也许能让回忆更加深刻。"),a.default.createElement("br",null),a.default.createElement("a",{style:{textDecoration:"underline"},href:"https://github.com/lzcers"},"My GitHub"),a.default.createElement("br",null),a.default.createElement("i",null,"Email: lzcers@gmail.com")," ",a.default.createElement("br",null))}},622:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(46)),r=i(n(49)),u=i(n(50)),l=i(n(51)),o=i(n(55)),c=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){(0,r.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={canvasSize:0,intervalCode:null,myCanvas:null},n.state.canvasSize=e.size,n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("lifegame"),t=e.getContext("2d");this.state.myCanvas=e;var n=10*Math.round(e.offsetWidth/10);this.state.canvasSize=n;var a=n/10,r=10;if(null!=e){var u=function(e){for(var t=new Array(e),n=0;n<e;n++){t[n]=new Array(e);for(var a=0;a<e;a++)t[n][a]=Math.round(Math.random())}return t}(a);this.mousePassCanvas=s,e.addEventListener("mousemove",s),t.fillRect(0,0,n,n),this.state.intervalCode=setInterval(function(){!function(e){for(var t=e.length,n=0;n<t;n++)for(var a=0;a<t;a++)l(n,a,e)}(function e(t){for(var n=[],a=t.length,r=0;r<a;r++)t[r]instanceof Array?n[r]=e(t[r]):n[r]=t[r];return n}(u)),i(u)},50)}function l(e,t,n){switch(function(e,t,n){for(var a=0,r=e-1;r<=e+1;r++)for(var u=t-1;u<=t+1;u++)r>=0&&r<n.length&&u>=0&&u<n.length&&(r!==e||u!==t)&&(a+=1===n[r][u]?1:0);return a}(e,t,n)){case 3:return u[e][t]=1,1;case 2:return-1;default:return u[e][t]=0,0}}function o(e,n){t.fillStyle="#000000",t.fillRect(e*r,n*r,r,r)}function c(e,n){t.fillStyle="#ffffff",t.fillRect(e*r,n*r,r,r)}function i(e){for(var t=e.length,n=0;n<t;n++)for(var a=0;a<t;a++)1===e[n][a]?o(n,a):c(n,a)}function s(e){var t=e.offsetX,n=e.offsetY,l=Math.floor(t/r),o=Math.floor(n/r);l<=0||o<=0||(l<a&&o<a&&(u[l][o]=1),i(u))}}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.myCanvas,n=e.intervalCode;t.removeEventListener("mousemove",this.mousePassCanvas),clearInterval(n)}},{key:"sizePX",value:function(){var e=this.state.canvasSize;if(0!==e)return{height:e+"px",width:e+"px",margin:"0 auto"}}},{key:"render",value:function(){var e=this.state.canvasSize;return c.default.createElement("div",{className:"lifegame-box",style:this.sizePX()},c.default.createElement("canvas",{id:"lifegame",width:e,height:e}))}}]),t}(c.default.PureComponent);t.default=s},623:function(e,t,n){},625:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(2)),r=l(n(626)),u=l(n(627));function l(e){return e&&e.__esModule?e:{default:e}}n(628);t.default=function(e){var t=e.match;return a.default.createElement("div",{className:"archive"},a.default.createElement("div",{className:"archive-tags"},a.default.createElement("h3",null,"Tags"),a.default.createElement("ul",{className:"archive-tag-items"},a.default.createElement(r.default,{tag:t.params.tag}))),a.default.createElement("div",{className:"archive-list"},a.default.createElement("h3",null,"List"),a.default.createElement("ul",{className:"archive-list-items"},a.default.createElement(u.default,{tag:t.params.tag}))))}},626:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(46)),r=d(n(49)),u=d(n(50)),l=d(n(51)),o=d(n(55)),c=n(2),i=d(c),s=n(38),f=n(70);function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,r.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));n.state={tags:[],selected:""};var u=n.props.tag;return(0,f.getTags)().then(function(e){return n.setState({tags:e,selected:u})}),n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.selected,a=t.tags;return[i.default.createElement("li",{key:"ALL",style:{color:"ALL"===n?"#fff":"",background:"ALL"===n?"#333":""}},i.default.createElement(s.Link,{to:"/archive",onClick:function(t){return e.setState({selected:"ALL"})}},"ALL"))].concat(a.map(function(t){return i.default.createElement("li",{key:t,style:{color:n===t?"#fff":"",background:n===t?"#333":""}},i.default.createElement(s.Link,{to:"/archive/tag/"+t,onClick:function(n){return e.setState({selected:t})}},t))}))}}]),t}(c.PureComponent);t.default=m},627:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(n(46)),r=f(n(49)),u=f(n(50)),l=f(n(51)),o=f(n(55)),c=f(n(2)),i=n(38),s=n(70);function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){(0,r.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={posts:[]},(0,s.getPosts)().then(function(e){return n.setState({posts:e})}),n}return(0,o.default)(t,e),(0,u.default)(t,[{key:"dateTransform",value:function(e){var t=new Date(e),n=[["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][t.getMonth()],t.getDate()+"TH",t.getFullYear()];return n[0]+" "+n[1]+" "+n[2]}},{key:"render",value:function(){var e=this,t=this.state.posts,n=this.props.tag;return t.sort(function(e,t){return new Date(e.PublishDate)<new Date(t.PublishDate)?1:-1}).filter(function(e){return!n||!!e.Tags.includes(n)}).map(function(t){return c.default.createElement("li",{key:t.ID},c.default.createElement(i.Link,{to:"/post/"+t.ID},c.default.createElement("span",{className:"item-name"},t.Title),c.default.createElement("span",{className:"item-date"},e.dateTransform(t.PublishDate))))})}}]),t}(c.default.PureComponent);t.default=d},628:function(e,t,n){},632:function(e,t,n){},70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPostByID=t.getTags=t.getPosts=void 0;var a=p(n(243)),r=p(n(246)),u=p(n(253)),l=p(n(268)),o=p(n(134)),c=function(){var e=(0,r.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i().then(function(e){return e.map(function(e){return e.ID=e.fileName,e.Tags=e.Tags.split("|").map(function(e){return e.trim()}),e.Content=(0,m.default)(e.Content).html,e})}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(v);case 2:if(e.t0=e.sent,e.t0){e.next=7;break}return e.next=6,_(h);case 6:e.t0=e.sent;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.default)(a.default.mark(function e(t){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t,g);case 2:if(e.t0=e.sent,e.t0){e.next=7;break}return e.next=6,b(t,E);case 6:e.t0=e.sent;case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f=p(n(273)),d=p(n(292)),m=p(n(295));function p(e){return e&&e.__esModule?e:{default:e}}n(502);var v="https://raw.githubusercontent.com/lzcers/KsanaBlog-React/master/docs/articles/tags.json",h="/articles/tags.json",g="https://raw.githubusercontent.com/lzcers/KsanaBlog-React/master/docs/articles/",E="/articles/";function _(e){return d.default.has("postList")?o.default.resolve(d.default.get("postList")):f.default.get(e).then(function(e){return e.data}).then(function(e){return d.default.set("postList",e),e}).catch(function(e){return!1})}function b(e,t){return d.default.has(e)?o.default.resolve(d.default.get(e)):f.default.get(t+e).then(function(e){return e.data}).then(function(e){return(0,m.default)(e)}).then(function(t){var n={ID:e,Title:t.meta.Title,Tags:t.meta.Tags.split("|").map(function(e){return e.trim()}),PublishDate:t.meta.PublishDate,Content:t.html,TOC:t.tocTree};return d.default.set(e,n),n}).catch(function(e){return!1})}f.default.defaults.timeout=3500,t.getPosts=c,t.getTags=function(){return i().then(function(e){return[].concat((0,l.default)(new u.default(e.map(function(e){return e.Tags.split("|").map(function(e){return e.trim()})}).reduce(function(e,t){return e.concat(t)}))))})},t.getPostByID=s}});
//# sourceMappingURL=main.build.js.map