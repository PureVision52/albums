(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),s=(a(23),a(24),a(5)),i=a(4),o=a(3),u=a(45),m=a(14),f=a.n(m);function b(e){return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement("img",{className:"spinner",src:"images/status.png",alt:"Loading Indicator"}))}function E(e){var t,a,c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],i=l[1];return t=function(){return e.onSearch(s)},a=400,Object(n.useEffect)(function(){var e=setTimeout(t,a);return function(){return clearTimeout(e)}},[t,a]),r.a.createElement("section",{className:"search"},r.a.createElement("form",{className:"search__form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{className:"radius",spellCheck:"false",placeholder:"Search Artists",name:"search",type:"text",value:s,onChange:function(e){return i(e.target.value)}})),r.a.createElement(b,{show:e.loading}))}function d(e){return!1===e.show?null:r.a.createElement("section",{className:"error radius",onClick:e.onClose},e.children,r.a.createElement("img",{className:"error__close",src:"images/times.png",alt:"Close"}))}function g(e){var t=Object.keys(e.filters).map(function(t){return r.a.createElement("div",{key:t,className:"filters__form-group"},r.a.createElement("input",{className:"filters__checkbox",type:"checkbox",name:t,id:t,checked:e.filters[t],onChange:function(a){return e.setFilter(t,a.target.checked)}}),r.a.createElement("label",{className:"filters__label",htmlFor:t},t))});return r.a.createElement("section",{className:"filters"},r.a.createElement("form",{className:"filters__form"},t))}var h=a(44),p=a(15),N=a.n(p);function _(e){var t=N()("album__info",{"album__info--explicit":"explicit"===e.collectionExplicitness});return r.a.createElement("article",{className:"album"},r.a.createElement("img",{className:"album__thumbnail",src:e.artworkUrl100,alt:"Album"}),r.a.createElement("div",{className:t},r.a.createElement("div",{className:"album__name"},e.collectionName),r.a.createElement("div",{className:"album__artist"},e.artistName)))}function j(e){var t=e.results,a=e.filters;return t.filter(function(e){return(!1!==a.Explicit||"explicit"!==e.collectionExplicitness)&&(!(!1===a["1900s"]&&Object(h.a)(new Date(e.releaseDate))<2e3)&&(!(!1===a["2000s"]&&Object(h.a)(new Date(e.releaseDate))>=2e3)&&((!1!==a.Single||1!==e.trackCount&&!e.collectionName.endsWith("- Single"))&&((!1!==a.EP||!(e.trackCount>=4&&e.trackCount<=6||e.collectionName.endsWith("- EP")))&&!(e.collectionName.length>127||e.artistName.length>127)))))}).map(function(e){return r.a.createElement(_,Object.assign({key:e.collectionId},e))})}l.a.render(r.a.createElement(function(e){var t=Object(n.useState)({term:"",results:[],loading:!1}),a=Object(o.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)({Explicit:!0,"1900s":!0,"2000s":!0,Single:!1,EP:!1}),b=Object(o.a)(m,2),h=b[0],p=b[1],N=Object(n.useState)(!1),_=Object(o.a)(N,2),O=_[0],v=_[1],k=Object(n.useRef)("");return Object(n.useEffect)(function(){""===k.current&&""===c.term||(l(function(e){return Object(i.a)({},e,{loading:!0})}),k.current=c.term,f.a.get("https://itunes.apple.com/search?term=".concat(c.term,"&country=CA&media=music&entity=album&attribute=artistTerm")).then(function(e){e.data.results.sort(function(e,t){return Object(u.a)(new Date(t.releaseDate),new Date(e.releaseDate))}),l(function(t){return Object(i.a)({},t,{results:e.data.results,loading:!1})})}).catch(function(e){l({term:"",results:[],loading:!1}),v(!0)}))},[c.term]),r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"logo"},r.a.createElement("img",{src:"images/brand.png",alt:"Brand"})),r.a.createElement("main",null,r.a.createElement(E,{loading:c.loading,onSearch:function(e){return l(Object(i.a)({},c,{term:e}))}}),r.a.createElement(d,{show:O,onClose:function(e){return v(!1)}},"The server returned an error."),r.a.createElement(g,{filters:h,setFilter:function(e,t){return p(Object(i.a)({},h,Object(s.a)({},e,t)))}}),r.a.createElement(j,{results:c.results,filters:h})))},null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e99b50b4.chunk.js.map