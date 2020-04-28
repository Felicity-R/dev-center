/*! For license information please see 0c5c4f23.511f386c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),a=(r(0),r(254)),i=r(260),c=r(261),s={title:"SDK Overview",description:"Geocortex Workflow - Overview of the SDK"},u={id:"workflow/sdk-overview",title:"SDK Overview",description:"Geocortex Workflow - Overview of the SDK",source:"@site/docs/workflow/sdk-overview.mdx",permalink:"/docs/workflow/sdk-overview",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-overview.mdx",sidebar:"workflow",previous:{title:"Reference a Third Party Library in Geocortex Workflow Server",permalink:"/docs/workflow/usecases-server-reference-third-party-library"},next:{title:"Getting Started with the Web Applications SDK",permalink:"/docs/workflow/sdk-web-getting-started"}},l=[],f={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Geocortex Workflow is a cross platform product, has a number of different SDKs and extension points available for use, depending on which platform is targeted."),Object(a.b)(i.a,{mdxType:"UseCaseContainer"},Object(a.b)(c.a,{title:"Web Applications SDK",description:"Extend Geocortex Workflow for Web Applications",link:"getting-started-web",mdxType:"UseCaseCard"}),Object(a.b)(c.a,{title:"Geocortex Mobile SDK",description:"Extend Geocortex Workflow in Geocortex Mobile",link:"getting-started-mobile",mdxType:"UseCaseCard"}),Object(a.b)(c.a,{title:"Geocortex Workflow Server",description:"Extend Geocortex Workflow Server",link:"getting-started-server",mdxType:"UseCaseCard"})))}p.isMDXComponent=!0},254:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return v}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,v=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return r?o.a.createElement(v,c({ref:t},u,{components:r})):o.a.createElement(v,c({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},255:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},256:function(e,t,r){"use strict";var n=r(1),o=r(0),a=r.n(o),i=r(39),c=r(257),s=r(14),u=r.n(s);t.a=function(e){var t,r=e.to,s=e.href,l=r||s,f=Object(c.a)(l),p=Object(o.useRef)(!1),d=u.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&f&&window.docusaurus.prefetch(l),function(){d&&t&&t.disconnect()}}),[l,d,f]),l&&f?a.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(l),p.current=!0)},innerRef:function(e){var r,n;d&&e&&f&&(r=e,n=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:l})):a.a.createElement("a",Object(n.a)({},e,{href:l}))}},257:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return n}))},258:function(e,t,r){"use strict";r(259)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},259:function(e,t,r){var n=r(12),o=r(13),a=r(26),i=/"/g,c=function(e,t,r,n){var o=String(a(e)),c="<"+t;return""!==r&&(c+=" "+r+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(c),n(n.P+n.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},260:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(0),o=r.n(n),a=r(255),i=r.n(a),c=r(130),s=r.n(c);function u(e){var t=e.children;return o.a.createElement("div",{className:i()(s.a.root)},t)}},261:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r(258);var n=r(256),o=r(0),a=r.n(o),i=r(255),c=r.n(i),s=r(131),u=r.n(s);function l(e){var t=e.title,r=e.description,o=e.link;return a.a.createElement("div",{className:c()("card-demo",u.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,t)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,r)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(n.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}}}]);