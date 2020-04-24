/*! For license information please see 72f94b9b.9433e1ca.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[41,59,80],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(9),r=(n(0),n(254)),i={},c={id:"mobile/snippets/prereqs",title:"prereqs",description:"Download the [Quickstart](../sdk-quick-start.mdx) application and open it in Visual Studio.",source:"@site/docs/mobile/snippets/prereqs.mdx",permalink:"/docs/mobile/snippets/prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/prereqs.mdx"},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Download the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-quick-start"}),"Quickstart")," application and open it in Visual Studio."))}l.isMDXComponent=!0},135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(9),r=(n(0),n(254)),i={},c={id:"snippets/autofac-mobile",title:"autofac-mobile",description:":::note",source:"@site/docs/snippets/autofac-mobile.mdx",permalink:"/docs/snippets/autofac-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/autofac-mobile.mdx"},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Geocortex Mobile uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://autofaccn.readthedocs.io/en/latest/index.html"}),"Autofac")," to register, locate, and inject components, services and other classes. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection"}),"dependency injection")," for more info."))))}l.isMDXComponent=!0},196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(9),r=(n(0),n(254)),i=n(135),c=n(133),s=n(266),p=n(265),l={title:"Custom Service",description:"Geocortex Mobile - Implement a custom Service"},u={id:"mobile/usecases-implement-service",title:"Custom Service",description:"Geocortex Mobile - Implement a custom Service",source:"@site/docs/mobile/usecases-implement-service.mdx",permalink:"/docs/mobile/usecases-implement-service",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/usecases-implement-service.mdx",sidebar:"mobile",previous:{title:"App Config for a Component",permalink:"/docs/mobile/usecases-implement-component-participate-app-config"},next:{title:"Custom Event",permalink:"/docs/mobile/usecases-implement-event"}},m=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create a New Service",id:"create-a-new-service",children:[]},{value:"Example",id:"example",children:[]}],d={rightToc:m};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When extending Geocortex Mobile, you may find yourself creating multiple ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/concepts-components-services#components"}),"components")," that have a shared concern, like a data source, or a REST endpoint call. Shared concerns like this present a good use case for creating a custom ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/concepts-components-services#services"}),"service"),".\nImplementing a custom service in Geocortex Mobile allows you to implement logic and shared resources that are available on startup to any component. Custom Services are also the recommended way of registering implementations for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/usecases-implement-command-operation"}),"custom commands and operations"),"."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)(c.default,{mdxType:"PrereqsSnippet"}),Object(r.b)("h2",{id:"create-a-new-service"},"Create a New Service"),Object(r.b)("p",null,"Create a new file ",Object(r.b)("inlineCode",{parentName:"p"},"Components/CustomService.cs")," under the platform agnostic project.\nIn the file, add a new component class ",Object(r.b)("inlineCode",{parentName:"p"},"CustomService")," and register it with ",Object(r.b)("strong",{parentName:"p"},"Autofac"),"."),Object(r.b)(i.default,{mdxType:"AutofacSnippet"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"using App1.Services;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Services;\nusing System.Threading.Tasks;\n\n[assembly: Service(typeof(CustomService), PropertiesAutowired = true)]\nnamespace App1.Services\n{\n    class CustomService : ServiceBase\n    {\n        public CustomService()\n            :base()\n        {\n            // on creation logic here\n        }\n        protected override Task DoInitialize()\n        {\n            // on initialization logic here\n            return Task.CompletedTask;\n        }\n    }\n}\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The two key components of this snippet are the ",Object(r.b)("inlineCode",{parentName:"p"},"[assembly: Service(...)]")," tag and the class extension ",Object(r.b)("inlineCode",{parentName:"p"},"CustomService : ServiceBase"),". These two pieces register the service with Geocortex Mobile and cause it to be initialized on startup."))),Object(r.b)("p",null,"Congratulations! You've created your first working service. This service is available to be injected with Autofac into any custom component. For inspiration with what you can do with services, check out the example below."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"This custom service mimics a fetch of new data every five seconds, and implements an operation which allows components to access the data. If you run this custom service, you can see each fetch of data logged at a debug level."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"All services should dispose of long held memory or other resources by implementing ",Object(r.b)("inlineCode",{parentName:"p"},"Dispose"),". For more information, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-memory-leaks"}),"memory leaks"),"."))),Object(r.b)(s.a,{defaultValue:"service",values:[{label:"Service",value:"service"},{label:"Operations",value:"operations"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"service",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'using App1.Operations;\nusing App1.Services;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Logging;\nusing Geocortex.Mobile.Composition.Messaging;\nusing Geocortex.Mobile.Composition.Services;\nusing System.Threading;\nusing System.Threading.Tasks;\n\n[assembly: Service(typeof(CustomService), PropertiesAutowired = true)]\nnamespace App1.Services\n{\n    class CustomService : ServiceBase\n    {\n        private Thread dataUpdater;\n        private int data = 0;\n        private async void _dataUpdater()\n        {\n            try\n            {\n                while (true)\n                {\n                    // Fetch data from a rest enpoint\n                    await Task.Run(() =>\n                    {\n                        // await data.fetch()\n                        data = data + 1;\n                        Logger.Debug($"Custom Service fetched new data. Current Value: {data}");\n                    });\n                    Thread.Sleep(3000);\n                }\n            }\n            catch (ThreadAbortException)\n            {\n                return;\n            }\n\n        }\n\n        private async Task<int> FetchData()\n        {\n            return data;\n        }\n\n        public CustomService(CustomOperations customOperations)\n            :base()\n        {\n            // on creation logic here\n            customOperations.FetchCustomData.RegisterExecute(FetchData, this);\n            dataUpdater = new Thread(new ThreadStart(_dataUpdater));\n        }\n        protected override Task DoInitialize()\n        {\n            // on initialization logic here\n            dataUpdater.Start();\n            return Task.CompletedTask;\n        }\n\n        protected override void Dispose(bool disposing)\n        {\n            // dispose of any held resources here\n            dataUpdater.Abort();\n            base.Dispose(disposing);\n\n        }\n\n\n    }\n}\n'))),Object(r.b)(p.a,{value:"operations",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'using App1.Operations;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Messaging;\nusing Geocortex.Mobile.Infrastructure.Messaging;\n\n[assembly: Export(typeof(CustomOperations), SingleInstance = true)]\nnamespace App1.Operations\n{\n    class CustomOperations : OperationsBase\n    {\n        public IOperation<int> FetchCustomData=> GetOperation<int>("custom-data.fetch");\n\n        public CustomOperations(IOperationRegistry operationRegistry)\n            : base(operationRegistry)\n        {\n        }\n    }\n}\n\n')))))}b.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?o.a.createElement(b,c({ref:t},p,{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},255:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},263:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=o},265:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},266:function(e,t,n){"use strict";n(27),n(21),n(22);var a=n(0),o=n.n(a),r=n(263);var i=function(){return Object(a.useContext)(r.a)},c=n(255),s=n.n(c),p=n(132),l=n.n(p),u=37,m=39;t.a=function(e){var t=e.block,n=e.children,r=e.defaultValue,c=e.values,p=e.groupId,d=i(),b=d.tabGroupChoices,v=d.setTabGroupChoices,f=Object(a.useState)(r),h=f[0],O=f[1];if(null!=p){var g=b[p];null!=g&&g!==h&&O(g)}var j=function(e){O(e),null!=p&&v(p,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===t,className:s()("tab-item",l.a.tabItem,{"tab-item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case m:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}}}]);