!function(e){function t(t){for(var a,o,l=t[0],i=t[1],u=t[2],m=0,f=[];m<l.length;m++)o=l[m],r[o]&&f.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(s&&s(t);f.length;)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={1:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://ksana.oss-cn-shenzhen.aliyuncs.com/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=i;c.push([308,0,2]),n()}({300:function(e,t,n){},301:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){},304:function(e,t,n){},305:function(e,t,n){},307:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(40),o=n.n(c),l=n(3),i=n(10),u=n(6),s=n.n(u),m=function(){var e=Object(a.useState)(),t=s()(e,2),n=t[0],c=t[1];return Object(a.useEffect)(function(){var e=document.getElementById("lifegame"),t=10*Math.round(e.offsetWidth/10),n=e.getContext("2d"),a=t/10,r=10;n.fillStyle="#eeeeee";var o=function(e){for(var t=new Array(e),n=0;n<e;n++){t[n]=new Array(e);for(var a=0;a<e;a++)t[n][a]=Math.round(Math.random())}return t}(a),l=e.addEventListener("mousemove",function(e){var t=e.offsetX,n=e.offsetY,c=Math.floor(t/r),l=Math.floor(n/r);if(c<=0||l<=0)return;c<a&&l<a&&(o[c][l]=1);m(o)});function i(e){!function(e){for(var t=e.length,n=0;n<t;n++)for(var a=0;a<t;a++)u(n,a,e)}(function e(t){var n=[];var a=t.length;for(var r=0;r<a;r++)t[r]instanceof Array?n[r]=e(t[r]):n[r]=t[r];return n}(e)),m(e)}function u(e,t,n){switch(function(e,t,n){for(var a=0,r=e-1;r<=e+1;r++)for(var c=t-1;c<=t+1;c++)r>=0&&r<n.length&&c>=0&&c<n.length&&(r!==e||c!==t)&&(a+=1===n[r][c]?1:0);return a}(e,t,n)){case 3:return o[e][t]=1,1;case 2:return-1;default:return o[e][t]=0,0}}function s(e,t){n.fillStyle="#ffffff",n.fillRect(e*r,t*r,r,r)}function m(e){for(var t,a,c=e.length,o=0;o<c;o++)for(var l=0;l<c;l++)1===e[o][l]?(t=o,a=l,n.fillStyle="#000000",n.fillRect(t*r,a*r,r,r)):s(o,l)}c(t);var f=null;return requestAnimationFrame(function e(t){f||(f=t),t-f>60&&(f=t,i(o)),window.requestAnimationFrame(e)}),function(){return e.removeEventListener("mousemove",l)}}),r.a.createElement("div",{className:"lifegame-box",style:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300;if(0!==e)return{height:e+"px",width:e+"px",margin:"0 auto"}}(n)},r.a.createElement("canvas",{id:"lifegame",width:n,height:n}))},f=(n(59),function(){return r.a.createElement("div",{className:"guide"},r.a.createElement(m,{size:300}),r.a.createElement("blockquote",{className:"quotoSICP"},r.a.createElement("p",null,"如果说艺术解释了我们的梦想，",r.a.createElement("br",null),"那么计算机就是以程序的名义执行着它们。"),r.a.createElement("i",{style:{textAlign:"center",fontStyle:"italic",fontSize:"14px"}},"—— Alan J.Perlis《计算机程序的构造与解释》")),r.a.createElement("div",{className:"link"},r.a.createElement("h3",null,r.a.createElement("a",{href:"/#/home"},"HOME")),r.a.createElement("h3",null,r.a.createElement("a",{href:"/#/about"},"ABOUT"))))}),h=n(11),d=n(41),p=n.n(d),E=n(42),v=n.n(E),g=n(43),b=n.n(g);n(62),n(63),n(64),n(65);function y(e,t){var n=e.childrenNode;return r.a.createElement("li",{className:"toc-li",key:t},r.a.createElement("a",{className:"toc-anchor",onClick:function(t){return n=e.nodeID,a=document.querySelector("#"+n),r=document.documentElement.scrollTop||document.body.scrollTop,c=a.offsetTop-80,void(null!=a&&function e(){r+=(c-r)/4,Math.abs(c-r)<1?window.scrollTo(0,c):(window.scrollTo(0,r),requestAnimationFrame(e))}());var n,a,r,c}},e.nodeID),n.length?r.a.createElement("ol",{className:"toc-li"},n.map(function(e){return y(e,e.nodeID+t)})):null)}var N=function(e){var t=e.toc;return t?r.a.createElement("div",{className:"toc"},r.a.createElement("ol",null,t.childrenNode.map(function(e,t){return y(e,e.nodeID+t)}))):null},w=function(e){var t=e.id,n=e.title,a=e.tags,c=e.publishDate,o=e.content,i=e.toc,u=e.mode,s=new Date(c),m=[["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][s.getMonth()],s.getDate()+"TH",s.getFullYear()],f=m[0],d=m[1],p=m[2];return r.a.createElement("article",{className:"article post"},r.a.createElement("h1",{className:"article-title"},u?n:r.a.createElement(l.b,{to:"/post/"+t},n)),r.a.createElement("div",{className:"article-date"},"".concat(f||""," ").concat(d," ").concat(p||"")),r.a.createElement("div",{className:"article-content"},i&&i.childrenNode.length>=3&&r.a.createElement("aside",{className:"article-toc"},r.a.createElement(N,{toc:i})),r.a.createElement("div",{className:"post-body markdown-body",dangerouslySetInnerHTML:{__html:o}})),r.a.createElement("div",{className:"article-info"},u?null:r.a.createElement(l.b,{to:"/post/"+t},"MORE"),r.a.createElement("div",{className:"article-tags"},r.a.createElement(h.a,{icon:b.a,className:"article-tags-pic"}),a.map(function(e){return r.a.createElement(l.b,{to:"/archive/tag/"+e,key:e,className:"article-tags-link"},e)}))))},O=n(46),D=n.n(O),S=n(47),T=n.n(S),P=n(25),A=n.n(P),j={get:function(e){return!!window.sessionStorage&&JSON.parse(window.sessionStorage.getItem(e)||"")},set:function(e,t){return!!window.sessionStorage&&(window.sessionStorage.setItem(e,JSON.stringify(t)),!0)},has:function(e){return window.sessionStorage&&window.sessionStorage.hasOwnProperty(e)}},k=n(18),L=n.n(k),I=n(48),M=n.n(I),C=n(49),x=n.n(C);function R(e){var t=e.filter(function(e){return"heading"===e.type}).map(function(e){return{nodeID:e.text.replace(/<(?:.|\n)*?>/gm,"").toLowerCase().replace(/[\s\n\t]+/g,"-"),nodeLevel:e.depth,childrenNode:[]}}),n={nodeID:"root",nodeLevel:0,childrenNode:[]};return t.forEach(function(e){return function e(t,n){var a;t.childrenNode.forEach(function(e){n.nodeLevel>e.nodeLevel&&(a=e)}),void 0===a?t.childrenNode.push(n):e(a,n)}(n,e)}),n}var J=new L.a.Renderer;J.heading=function(e,t){var n=e.replace(/<(?:.|\n)*?>/gm,"").toLowerCase().replace(/[\s\n\t]+/g,"-");return"<h".concat(t,' id="').concat(n,'">').concat(e,"</h").concat(t,">")},J.code=function(e,t){var n=M.a.highlightAuto(e).value;return'<pre><code class="lang-'.concat(t,'">').concat(n,"</code></pre>")},L.a.setOptions({renderer:J,breaks:!0,gfm:!0});var U=function(e){var t=x()(e),n=t.attributes,a=t.body,r=n,c=L.a.lexer(a),o=R(c);return{meta:r,html:L.a.parser(c),markdown:a,tocTree:o}},_=n(26),z=n.n(_),B=n(50),F=n.n(B),H=function(e){var t=new Map;return n=F()(z.a.mark(function n(a){var r;return z.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(a||(a="void"),!t.has(a)){n.next=3;break}return n.abrupt("return",t.get(a));case 3:return n.next=5,e(a);case 5:return r=n.sent,t.set(a,r),n.abrupt("return",r);case 8:case"end":return n.stop()}},n)})),function(e){return n.apply(this,arguments)};var n};function q(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}var Y=H(function(e){return A.a.get(e).then(function(e){return e.data})}),V=H(function(){return K().then(function(e){return T()(new Set(e.map(function(e){return e.Tags.split("|").map(function(e){return e.trim()})}).reduce(function(e,t){return e.concat(t)})))})}),G=H(function(){return K().then(function(e){return e.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(n,!0).forEach(function(t){D()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{ID:e.fileName,Tags:e.Tags.split("|").map(function(e){return e.trim()}),Content:U(e.Content).html})})})});var K=H(function(){return Y("https://ksana.oss-cn-shenzhen.aliyuncs.com/articles/tags.json")}),X=H(function(e){return function(e,t){return j.has(e)?Promise.resolve(j.get(e)):A.a.get(t+e).then(function(e){return e.data}).then(function(e){return U(e)}).then(function(t){var n={ID:e,Title:t.meta.Title,Tags:t.meta.Tags.split("|").map(function(e){return e.trim()}),PublishDate:t.meta.PublishDate,Content:t.html,TOC:t.tocTree};return j.set(e,n),n}).catch(function(e){return!1})}(e,"https://raw.githubusercontent.com/lzcers/KsanaBlog-React/master/docs/articles/")}),W=function(e,t){var n=t?parseInt(e,10)-1:parseInt(e,10)+1;return r.a.createElement("div",{className:t?"post-left":"post-right"},t&&r.a.createElement(h.a,{icon:p.a}),r.a.createElement(l.b,{onClick:function(e){return window.scrollTo(0,0)},to:"/home/page/"+n},t?"PREVIOUS":"NEXT"),!t&&r.a.createElement(h.a,{icon:v.a}))},Q=function(e){var t=Object(a.useState)([]),n=s()(t,2),c=n[0],o=n[1],l=Object(a.useState)(!0),i=s()(l,2),u=i[0],m=i[1],f=e.pageNumber,h=10*(f-1);return G().then(function(e){o(e),m(!1)}),r.a.createElement("div",{className:"articles"},c.sort(function(e,t){return new Date(e.PublishDate)<new Date(t.PublishDate)?1:-1}).slice(h,h+10).map(function(e){return r.a.createElement(w,{key:e.ID,id:e.ID,title:e.Title,tags:e.Tags,publishDate:e.PublishDate,content:e.Content,toc:null,mode:!1})}),r.a.createElement("div",{className:"post-nav"},f>1&&W(f,!0),f<c.length/10&&W(f,!1)),!u||r.a.createElement("h3",null,"Loading..."))},Z=(n(300),function(e){var t=e.match.params.pageNumber||1;return r.a.createElement(Q,{pageNumber:t})}),$=function(e){var t=Object(a.useState)([]),n=s()(t,2),c=n[0],o=n[1],l=Object(a.useState)(!0),i=s()(l,2),u=i[0],m=i[1];return X(e.id).then(function(e){o(e),m(!1)}),u?r.a.createElement("h3",null,"Loading..."):r.a.createElement(w,{id:c.ID,title:c.Title,tags:c.Tags,publishDate:c.PublishDate,content:c.Content,toc:c.TOC,mode:!0})},ee=function(e){var t=e.match;return r.a.createElement($,{id:t.params.id})},te=(n(301),function(){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"aboutmePic"}),r.a.createElement("p",null,"从时光这头到那头，从出生到死亡，",r.a.createElement("br",null),"岁月携身体流逝无可挽留，思绪起伏却总是遗忘，",r.a.createElement("br",null),"回忆将破碎的自我在时光中串起以维持人生作为一个整体的印象。",r.a.createElement("br",null),"即便如此，时光总会悄然将其斩断，回忆也会被遗忘，",r.a.createElement("br",null),"能做的，仅是用文字去挽留那些思绪，在这里，",r.a.createElement("br",null),"给未来的自己留些东西，也许能勾起回忆，也许能让回忆更加深刻。"),r.a.createElement("br",null),r.a.createElement("a",{style:{textDecoration:"underline"},href:"https://github.com/lzcers"},"My GitHub"),r.a.createElement("br",null),r.a.createElement("i",null,"Email: lzcers@gmail.com")," ",r.a.createElement("br",null))}),ne=function(e){var t=Object(a.useState)([]),n=s()(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),u=s()(i,2),m=u[0],f=u[1],h=e.tag;return V().then(function(e){o(e),f(h)}),[r.a.createElement("li",{key:"ALL",style:{color:"ALL"===m?"#fff":"",background:"ALL"===m?"#333":""}},r.a.createElement(l.b,{to:"/archive",onClick:function(e){return f({selected:"ALL"})}},"ALL"))].concat(c.map(function(e){return r.a.createElement("li",{key:e,style:{color:m===e?"#fff":"",background:m===e?"#333":""}},r.a.createElement(l.b,{to:"/archive/tag/"+e,onClick:function(t){return f({selected:e})}},e))}))},ae=function(e){var t=Object(a.useState)([]),n=s()(t,2),c=n[0],o=n[1],i=e.tag;G().then(function(e){return o(e)});return c.sort(function(e,t){return new Date(e.PublishDate)<new Date(t.PublishDate)?1:-1}).filter(function(e){return!i||!!e.Tags.includes(i)}).map(function(e){return r.a.createElement("li",{key:e.ID},r.a.createElement(l.b,{to:"/post/"+e.ID},r.a.createElement("span",{className:"item-name"},e.Title),r.a.createElement("span",{className:"item-date"},(t=e.PublishDate,n=new Date(t),a=[["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][n.getMonth()],n.getDate()+"TH",n.getFullYear()],c=a[1],o=a[2],"".concat(a[0]," ").concat(c," ").concat(o)))));var t,n,a,c,o})},re=(n(302),function(e){var t=e.match;return r.a.createElement("div",{className:"archive"},r.a.createElement("div",{className:"archive-tags"},r.a.createElement("h3",null,"Tags"),r.a.createElement("ul",{className:"archive-tag-items"},r.a.createElement(ne,{tag:t.params.tag}))),r.a.createElement("div",{className:"archive-list"},r.a.createElement("h3",null,"List"),r.a.createElement("ul",{className:"archive-list-items"},r.a.createElement(ae,{tag:t.params.tag}))))}),ce=(n(303),function(e){return r.a.createElement("div",{className:"aranya"},r.a.createElement("h3",null))}),oe=(n(304),function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav-header"},r.a.createElement("h1",{className:"nav-sitename"},"刹那")),r.a.createElement("ul",{className:"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/home"},"HOME")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/archive"},"ARCHIVE")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/about"},"ABOUT"))))}),le=n(51),ie=n.n(le),ue=(n(305),function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright © KSANA 2017 - 2019 ",r.a.createElement(h.a,{icon:ie.a})," Powered by React"))}),se=function(e){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/home/page/:pageNumber",component:Z}),r.a.createElement(i.a,{path:"/home",component:Z}),r.a.createElement(i.a,{path:"/post/:id",component:ee}),r.a.createElement(i.a,{path:"/about",component:te}),r.a.createElement(i.a,{path:"/archive/tag/:tag",component:re}),r.a.createElement(i.a,{path:"/archive",component:re}),r.a.createElement(i.a,{path:"/aranya",component:ce}))},me=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"wrap"},r.a.createElement(oe,null),r.a.createElement("div",{className:"content"},r.a.createElement(se,null)),r.a.createElement(ue,null)))},fe=function(e){return r.a.createElement(f,null)},he=function(e){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:fe}),r.a.createElement(i.a,{path:"/",component:me}))};n(306),n(307);setTimeout(function(){return G()},1);o.a.render(r.a.createElement(l.a,null,r.a.createElement(function(e){return r.a.createElement(he,null)},null)),document.getElementById("app"))},59:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){}});
//# sourceMappingURL=main.build.js.map