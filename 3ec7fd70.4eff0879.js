/*! For license information please see 3ec7fd70.4eff0879.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32,81],{147:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return p}));var r=o(1),n=o(9),a=(o(0),o(254)),i={},c={id:"workflow/snippets/designer-callout",title:"designer-callout",description:":::note Have you explored the Geocortex Workflow Designer?",source:"@site/docs/workflow/snippets/designer-callout.mdx",permalink:"/docs/workflow/snippets/designer-callout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/designer-callout.mdx"},s=[],l={rightToc:s};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Have you explored the Geocortex Workflow Designer?")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow Designer")," has a wide range of built-in activities you can use to satisfy your business case. You can take the behavior of workflow even farther by running the commands and operations available in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/concepts-commands-operations"}),"Geocortex Web")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/concepts-commands-operations"}),"Geocortex Mobile"),"."))))}p.isMDXComponent=!0},189:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return p})),o.d(t,"rightToc",(function(){return f})),o.d(t,"default",(function(){return u}));var r=o(1),n=o(9),a=(o(0),o(254)),i=o(261),c=o(260),s=o(147),l={title:"Concepts",description:"Geocortex Workflow - Learn about key concepts."},p={id:"workflow/concepts-key-concepts",title:"Concepts",description:"Geocortex Workflow - Learn about key concepts.",source:"@site/docs/workflow/concepts-key-concepts.mdx",permalink:"/docs/workflow/concepts-key-concepts",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/concepts-key-concepts.mdx",sidebar:"workflow",previous:{title:"Overview",permalink:"/docs/workflow/overview"},next:{title:"Implement a Custom Activity for Web Applications",permalink:"/docs/workflow/usecases-web-implement-custom-activity"}},f=[{value:"Workflow",id:"workflow",children:[]},{value:"Activities",id:"activities",children:[]},{value:"Form Elements",id:"form-elements",children:[]},{value:"Geocortex Workflow Designer and Runtime",id:"geocortex-workflow-designer-and-runtime",children:[]},{value:"Geocortex Workflow Hosts",id:"geocortex-workflow-hosts",children:[]},{value:"Activity Packs",id:"activity-packs",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:f};function u(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s.default,{mdxType:"DesignerCallout"}),Object(a.b)("p",null,"Geocortex Workflow is a flexible tool for automating business processes. It allows you to create ",Object(a.b)("strong",{parentName:"p"},"workflows"),", which are composed of various ",Object(a.b)("strong",{parentName:"p"},"activities"),", control flow elements such as loops, and forms that enable user interaction. Workflows can run on different platforms, including ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.geocortex.com/products/gxw/"}),"Geocortex Web"),", ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.geocortex.com/products/gxm/"}),"Geocortex Mobile"),", on a business server, or in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.esri.com/en-us/arcgis/products/web-appbuilder/overview"}),"Web AppBuilder for ArcGIS"),"."),Object(a.b)("h2",{id:"workflow"},"Workflow"),Object(a.b)("p",null,"A ",Object(a.b)("strong",{parentName:"p"},"workflow")," is a collection of connected activities and forms, and is created using Geocortex Workflow Designer. Workflows are generic and not tied to a platform by default, but certain activities and features will only work in certain platforms."),Object(a.b)("h2",{id:"activities"},"Activities"),Object(a.b)("p",null,"Activities are the building blocks of a workflow. Each activity represents a unit of work. For example, Geocortex Workflow provides activities to set the map extent, perform geocoding, and gather input from the user. In all, Geocortex Workflow ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"}),"provides over 200 activities")," for building workflows."),Object(a.b)("p",null,"Most activities have inputs - the values that the activity operates on, and outputs - the results of the activity's operations. When you add an activity to a workflow, you customize the activity by configuring the activity's inputs. The outputs are computed when the workflow runs."),Object(a.b)("p",null,"Activities have metadata that Geocortex Workflow Designer presents to an end user for easy workflow creation. This metadata can be defined in an ",Object(a.b)("strong",{parentName:"p"},"activity pack"),". They also have an implementation, which powers the behavior of the activity. This implementation is defined in the appropriate language for the target platform; activities for web applications are defined in TypeScript, and activities for Geocortex Mobile applications are defined in C#."),Object(a.b)("h2",{id:"form-elements"},"Form Elements"),Object(a.b)("p",null,"Some platforms have UI, like Geocortex Web or Geocortex Mobile, and can use forms to facilitate end user interaction. Geocortex Workflow ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activity-reference.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____0"}),"provides over twenty configurable ",Object(a.b)("strong",{parentName:"a"},"form elements"))," for building forms, like the Auto Complete, Geometry Picker, Date Picker, Number Slider, and Text Area elements. Just as activities are the building blocks of workflows, form elements are the building blocks of forms."),Object(a.b)("h2",{id:"geocortex-workflow-designer-and-runtime"},"Geocortex Workflow Designer and Runtime"),Object(a.b)("p",null,"Geocortex Workflow includes a powerful tool for building workflows, Geocortex Workflow Designer. Designer's drag-and-drop interface and library of predefined activities simplify the process of creating custom functionality for your web mapping applications, without programming. Geocortex Workflow Designer uses activity definitions to produce workflows."),Object(a.b)("p",null,"When a workflow is run, the workflow definition is read and executed by the ",Object(a.b)("strong",{parentName:"p"},"workflow runtime"),". The runtime is responsible for locating the activity implementation definitions, and executing them with the inputs defined in the workflow definitions. Each ",Object(a.b)("strong",{parentName:"p"},"workflow host")," has a different runtime:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Geocortex Web and Web AppBuilder for ArcGIS use the TypeScript workflow runtime"),Object(a.b)("li",{parentName:"ul"},"Geocortex Mobile and Geocortex Workflow Server use the .NET workflow runtime")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Types of Workflows")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Another distinction between workflows is ",Object(a.b)("strong",{parentName:"p"},"client")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"}),Object(a.b)("strong",{parentName:"a"},"server workflows")),". Client workflows can be run in an interface that uses visual elements, such as Geocortex Web or Mobile, while server workflows can only be run on Geocortex Workflow Server (which has no visual interface)."))),Object(a.b)("h2",{id:"geocortex-workflow-hosts"},"Geocortex Workflow Hosts"),Object(a.b)("p",null,"Geocortex Workflow, is a cross platform product. If an environment supports a version of the workflow runtime it, is called a ",Object(a.b)("strong",{parentName:"p"},"workflow host"),"."),Object(a.b)("p",null,"The current existing workflow hosts are:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Web Applications")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Geocortex Web (client)"),Object(a.b)("li",{parentName:"ul"},"Geocortex Viewer for HTML5 (client)"),Object(a.b)("li",{parentName:"ul"},"Web AppBuilder for ArcGIS (client)")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},".NET Applications")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Geocortex Mobile (client)"),Object(a.b)("li",{parentName:"ul"},"Geocortex Workflow Server (server)")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/hosting.htm%3FTocPath%3DConfigure%2520Host%2520Applications%7C_____0"}),"Learn more about the different workflow hosts")," or about ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/run-in-different-environments.htm#Run_a_Workflow_in_Different_Environments%3FTocPath%3DRun%2520a%2520Workflow%2520in%2520Different%2520Environments%7C_____0"}),"adapting workflows to different environments"),"."),Object(a.b)("h2",{id:"activity-packs"},"Activity Packs"),Object(a.b)("p",null,"An activity pack defines a collection of activities that Geocortex Workflow Designer is aware of. An activity pack defines the metadata for one or more activities so that it can participate in the Geocortex Workflow Designer interface."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If the activities are targeted for web platforms, the activity pack can also define activity implementations and form elements otherwise, activity implementations and form elements are defined on the target platform."))),Object(a.b)("p",null,"Activity packs must be registered as an ArcGIS item, and this makes them ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/sdk-web-getting-started#sharing-the-activity-pack"}),"shareable with other workflow authors"),"."),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)(c.a,{mdxType:"UseCaseContainer"},Object(a.b)(i.a,{title:"Get Started with the Web Applications SDK",description:"Build custom activities and form elements with the Web Applications SDK",link:"getting-started-web",mdxType:"UseCaseCard"}),Object(a.b)(i.a,{title:"Get Started with the Geocortex Mobile SDK",description:"Build custom activities and form elements with the Geocortex Mobile SDK",link:"getting-started-mobile",mdxType:"UseCaseCard"}),Object(a.b)(i.a,{title:"Get Started with Geocortex Workflow Server",description:"Build custom activities for a server environment with Geocortex Workflow Server",link:"getting-started-server",mdxType:"UseCaseCard"})))}u.isMDXComponent=!0},254:function(e,t,o){"use strict";o.d(t,"a",(function(){return f})),o.d(t,"b",(function(){return d}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c({},t,{},e)),o},f=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(o),u=r,d=f["".concat(i,".").concat(u)]||f[u]||b[u]||a;return o?n.a.createElement(d,c({ref:t},l,{components:o})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},255:function(e,t,o){var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)o.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},256:function(e,t,o){"use strict";var r=o(1),n=o(0),a=o.n(n),i=o(39),c=o(257),s=o(14),l=o.n(s);t.a=function(e){var t,o=e.to,s=e.href,p=o||s,f=Object(c.a)(p),b=Object(n.useRef)(!1),u=l.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!u&&f&&window.docusaurus.prefetch(p),function(){u&&t&&t.disconnect()}}),[p,u,f]),p&&f?a.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(p),b.current=!0)},innerRef:function(e){var o,r;u&&e&&f&&(o=e,r=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){o===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(o),t.disconnect(),r())}))}))).observe(o))},to:p})):a.a.createElement("a",Object(r.a)({},e,{href:p}))}},257:function(e,t,o){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}o.d(t,"a",(function(){return r}))},258:function(e,t,o){"use strict";o(259)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},259:function(e,t,o){var r=o(12),n=o(13),a=o(26),i=/"/g,c=function(e,t,o,r){var n=String(a(e)),c="<"+t;return""!==o&&(c+=" "+o+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+n+"</"+t+">"};e.exports=function(e,t){var o={};o[e]=t(c),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",o)}},260:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var r=o(0),n=o.n(r),a=o(255),i=o.n(a),c=o(130),s=o.n(c);function l(e){var t=e.children;return n.a.createElement("div",{className:i()(s.a.root)},t)}},261:function(e,t,o){"use strict";o.d(t,"a",(function(){return p}));o(258);var r=o(256),n=o(0),a=o.n(n),i=o(255),c=o.n(i),s=o(131),l=o.n(s);function p(e){var t=e.title,o=e.description,n=e.link;return a.a.createElement("div",{className:c()("card-demo",l.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,t)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,o)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(r.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}}}]);