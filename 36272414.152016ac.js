/*! For license information please see 36272414.152016ac.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),s=(n(0),n(254)),o=n(266),i=n(265),c={title:"Using and Creating Events",description:"Geocortex Web - Learn how to use existing events and create new ones"},l={id:"web/usecases-implement-event",title:"Using and Creating Events",description:"Geocortex Web - Learn how to use existing events and create new ones",source:"@site/docs/web/usecases-implement-event.mdx",permalink:"/docs/web/usecases-implement-event",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/usecases-implement-event.mdx",sidebar:"web",previous:{title:"Custom Service",permalink:"/docs/web/usecases-implement-service"},next:{title:"SDK Overview",permalink:"/docs/web/sdk-overview"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Subscribing to Existing Events",id:"subscribing-to-existing-events",children:[]},{value:"Publishing Existing Events",id:"publishing-existing-events",children:[]},{value:"Custom Events",id:"custom-events",children:[]}],b={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This article will guide you through how to subscribe and publish events within Geocortex Web"),Object(s.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(s.b)("p",null,"Events can only be published and subscribed to by ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/usecases-implement-component-with-ui"}),"custom components")," and ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/usecases-implement-service"}),"custom services"),", so it is suggested you learn the basics of building custom components before reading this article."),Object(s.b)("h2",{id:"subscribing-to-existing-events"},"Subscribing to Existing Events"),Object(s.b)("p",null,"Geocortex Web has a large suite of ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/api-events"}),"built-in events"),". Any of these events can be subscribed to by any component or service. The events are accessed through the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/api-message-bus"}),Object(s.b)("inlineCode",{parentName:"a"},"MessageBus"))," in the case of a service or model, or the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/sdk-ui-context"}),"UIContext")," in the case of a component."),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Make sure you clean up the subscription handle to avoid dangling references."))),Object(s.b)(o.a,{defaultValue:"component",values:[{label:"Component",value:"component"},{label:"Model",value:"model"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"component",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'import React, { useContext, useState, useEffect } from "react";\nimport { LayoutElement } from "@geocortex/web/components";\nimport { UIContext, useSubscribe } from "@geocortex/web/ui";\nimport { MapEvent } from "@geocortex/viewer-framework/messaging/registry/map";\n\nexport default function CustomComponent(props) {\n    const { events } = useContext(UIContext);\n\n    useSubscribe(events.map.initialized, (e: MapEvent) => {\n        console.log(\n            "Map Initialized, do your map dependent component setup here."\n        );\n    });\n\n    return <LayoutElement {...props}></LayoutElement>;\n}\n'))),Object(s.b)(i.a,{value:"model",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'import { serializable, ComponentModelBase } from "@geocortex/web/models";\nimport { MapEvent } from "@geocortex/viewer-framework/messaging/registry/map";\n\n@serializable\nexport default class CustomModel extends ComponentModelBase {\n    handles: IHandle[] = [];\n\n    protected async _onInitialize(): Promise<void> {\n        await super._onInitialize();\n        this.handles.push(\n            this.messages.events.map.initialized.subscribe((e: MapEvent) => {\n                console.log(\n                    "Map Initialized, do your map dependent model setup here."\n                );\n            })\n            // Equivalent: this.messages.event("map.initialized").subscribe\n        );\n        return;\n    }\n\n    destroy(): void {\n        super.destroy();\n        this.handles.forEach((h) => h.remove());\n    }\n}\n')))),Object(s.b)("h2",{id:"publishing-existing-events"},"Publishing Existing Events"),Object(s.b)("p",null,"Publishing an event is as easy as using the ",Object(s.b)("inlineCode",{parentName:"p"},"publish")," method on an event object."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"export default function CustomComponent(props) {\n    const { events } = useContext(UIContext);\n\n    events.edit.featureUpdated.publish(new Feature(...))\n    ...\n}\n")),Object(s.b)("h2",{id:"custom-events"},"Custom Events"),Object(s.b)("p",null,"Events are created as needed, so implementing new events is as easy as using them."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Event names in Geocortex Web generally take the format ",Object(s.b)("inlineCode",{parentName:"p"},"<category>.<name>"),", with multiple words ",Object(s.b)("inlineCode",{parentName:"p"},"kebab-cased"),"."))),Object(s.b)(o.a,{defaultValue:"pub",values:[{label:"Publisher",value:"pub"},{label:"Subscriber",value:"sub"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"pub",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'@serializable\nexport default class Publisher extends ComponentModelBase {\n    publishCustomEvent(){\n        this.messages.events("my.custom-event").publish({ ... })\n    }\n}\n'))),Object(s.b)(i.a,{value:"sub",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'@serializable\nexport default class Subscriber extends ComponentModelBase {\n    handles: IHandle[] = [];\n\n    protected _onInitialize(): Promise<void> {\n        this.handles.push(\n            this.messages.event("my.custom-event").subscribe((e) => {\n                ...\n            })\n        )\n        return;\n    }\n\n    destroy(): void {\n        super.destroy()\n        this.handles.forEach(h => h.remove());\n    }\n\n}\n')))))}p.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||s;return n?r.a.createElement(d,i({ref:t},l,{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},255:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===s)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},263:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},265:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},266:function(e,t,n){"use strict";n(27),n(21),n(22);var a=n(0),r=n.n(a),s=n(263);var o=function(){return Object(a.useContext)(s.a)},i=n(255),c=n.n(i),l=n(132),u=n.n(l),b=37,p=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,i=e.values,l=e.groupId,m=o(),d=m.tabGroupChoices,v=m.setTabGroupChoices,f=Object(a.useState)(s),h=f[0],g=f[1];if(null!=l){var O=d[l];null!=O&&O!==h&&g(O)}var j=function(e){g(e),null!=l&&v(l,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===t,className:c()("tab-item",u.a.tabItem,{"tab-item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}}}]);