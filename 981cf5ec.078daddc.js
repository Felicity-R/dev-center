/*! For license information please see 981cf5ec.078daddc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[58,104],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),r=(n(0),n(254)),i={},c={id:"web/snippets/prereqs-layout-config-editing",title:"prereqs-layout-config-editing",description:"-   Follow along by setting up the [Geocortex Web SDK](../sdk-overview.mdx) and editing the minimal layout and app config provided.",source:"@site/docs/web/snippets/prereqs-layout-config-editing.mdx",permalink:"/docs/web/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-layout-config-editing.mdx"},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Follow along by setting up the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK")," and editing the minimal layout and app config provided."),Object(r.b)("li",{parentName:"ul"},"Check out the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#modifying-layout-and-app-config-using-the-geocortex-web-designer"}),"deployment instructions")," to learn about how to deploy layout and app config to an application.")))}p.isMDXComponent=!0},210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return f}));var a=n(1),o=n(9),r=(n(0),n(254)),i=n(264),c=n(266),l=n(265),s=(n(260),n(261),n(140)),p={title:"Change Default Map Click Behavior",description:"Geocortex Web - Learn how to configure Geocortex Web to change the default map click behavior"},u={id:"web/usecases-change-default-map-click-behavior",title:"Change Default Map Click Behavior",description:"Geocortex Web - Learn how to configure Geocortex Web to change the default map click behavior",source:"@site/docs/web/usecases-change-default-map-click-behavior.mdx",permalink:"/docs/web/usecases-change-default-map-click-behavior",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/usecases-change-default-map-click-behavior.mdx",sidebar:"web",previous:{title:"Implement a Custom Activity",permalink:"/docs/web/usecases-implement-custom-activity"},next:{title:"Custom Commands and Operations",permalink:"/docs/web/usecases-implement-command-operation"}},b=[{value:"What you&#39;re Building",id:"what-youre-building",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Initial Set up",id:"initial-set-up",children:[]},{value:"Set up a Workflow to Run on Map Click",id:"set-up-a-workflow-to-run-on-map-click",children:[]},{value:"Extend the Workflow to Create a Graphic Buffering the Click Geometry",id:"extend-the-workflow-to-create-a-graphic-buffering-the-click-geometry",children:[]}],d={rightToc:b};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Geocortex Web comes with default behavior that runs on a map click. The default behavior will identify and display details for results in the nearby area. But what if you want to replace the functionality with your own behavior? This can be accomplished by leveraging ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow")," and editing the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/concepts-app-config"}),"app config"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It's actually possible to configure the Map's ",Object(r.b)("inlineCode",{parentName:"p"},"onClick")," event in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web Designer"),", by setting a workflow as the action for the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/component-settings.htm%3FTocPath%3DConfiguration%7CComponent%2520Settings%7C_____0"}),"Maps click event"),". However, the point of this use case is to demonstrate the concept of configuring actions using the app config."))),Object(r.b)("h2",{id:"what-youre-building"},"What you're Building"),Object(r.b)("p",null,"We will modify the default map on click behavior to buffer the click geometry by a user provided distance and create a graphic which visualizes this buffer."),Object(r.b)("img",{src:Object(i.a)("img/web-custom-map-click-workflow-finished.png"),alt:"Map Click Workflow with Buffer Behavior"}),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)(s.default,{mdxType:"PrereqsLayoutConfigEditingSnippet"}),Object(r.b)("h2",{id:"initial-set-up"},"Initial Set up"),Object(r.b)("p",null,"Start the Geocortex Web SDK with the following layout and app json. You should see a simple application with one layer, Fire Hydrants, which has a related table Fire Hydrant Surveys."),Object(r.b)("p",null,"Try clicking the map. It should return results for the point you clicked in the results list."),Object(r.b)(c.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"config",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="app/app.json"',title:'"app/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": [\n                "geometry.add-pixel-tolerance",\n                "tasks.identify",\n                "results.display-details"\n            ],\n            "webMap": "https://www.arcgis.com/home/item.html?id=0ba877a4185448cb832af9a661031e31"\n        },\n        {\n            "$type": "results",\n            "id": "results-list-config",\n            "onFeatureClick": ["results.display-details"]\n        }\n    ]\n}\n'))),Object(r.b)(l.a,{value:"layout",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1">\n  <split resizable="true">\n    <panel show-close-button="false" width="26">\n      <layer-list models="#map-primary"/>\n      <results-list active="false" config="results-list-config"/>\n      <feature-details active="true" />\n      <workflow active="false"/>\n    </panel>\n    <stack>\n      <map id="map-primary" config="default"/>\n    </stack>\n  </split>\n</layout>\n')))),Object(r.b)("h2",{id:"set-up-a-workflow-to-run-on-map-click"},"Set up a Workflow to Run on Map Click"),Object(r.b)("p",null,"The first thing we need to do is override the default map click behavior. We can do this by ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/usecases-change-default-behavior"}),"editing the default behavior")," for the ",Object(r.b)("inlineCode",{parentName:"p"},"<map/>")," component in the app config. The default behavior for the map's ",Object(r.b)("inlineCode",{parentName:"p"},"onClick")," event is a command chain that runs ",Object(r.b)("inlineCode",{parentName:"p"},"geometry.add-pixel-tolerance")," and then ",Object(r.b)("inlineCode",{parentName:"p"},"tasks.identify"),", and finally, ",Object(r.b)("inlineCode",{parentName:"p"},"results.display-details"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "map-extension",\n            "id": "default",\n            // highlight-start\n            "onClick": [\n                "geometry.add-pixel-tolerance",\n                "tasks.identify",\n                "results.display-details"\n            ],\n            // highlight-end\n            ...\n        }\n        ...\n    ]\n}\n')),Object(r.b)("p",null,"First, we are going to replace the command chain with a ",Object(r.b)("inlineCode",{parentName:"p"},"workflow.run")," command that replicates this behavior."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open up ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow Designer")," and create and save a new workflow."),Object(r.b)("li",{parentName:"ol"},'Add an "Alert" activity as a test.'),Object(r.b)("li",{parentName:"ol"},"Copy the ID of the the workflow from the URL")),Object(r.b)("img",{src:Object(i.a)("img/custom-map-click-workflow-url.png"),alt:"Workflow URL with ID"}),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Add the workflow as an app item to your app config.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "workflow",\n            "id": "map-click-workflow",\n            "title": "Map Click Workflow",\n            "commandArgumentInput": "context",\n            "portalItem": "<your-workflow-id-here>"\n        },\n        ...\n    ]\n}\n')),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Next, configure the ",Object(r.b)("inlineCode",{parentName:"li"},"onClick")," property of the Map Component in the app config to run the workflow.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "map-extension",\n            "id": "default",\n            "onClick": "workflow.run-map-click-workflow",\n            ...\n        }\n    ]\n}\n')),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Run the app and test your workflow. You should see your alert pop up when you try to click on the map.")),Object(r.b)("img",{src:Object(i.a)("img/web-custom-map-click-workflow-alert.png"),alt:"Map Click Workflow with Alert"}),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Open up your workflow in the Workflow Designer again. The default behavior we just overrode can be recreated with the use of ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-command.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____169"}),"RunCommand")," and ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-operation.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____173"}),"RunOperation")," activities. ",Object(r.b)("inlineCode",{parentName:"li"},"geometry.add-pixel-tolerance")," and ",Object(r.b)("inlineCode",{parentName:"li"},"tasks.identify")," are operations, so they need RunOperation activities, and ",Object(r.b)("inlineCode",{parentName:"li"},"results.display-details")," is a command so it needs a RunCommand Activity. Chain these three activities together, passing the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input%3FTocPath%3DConfiguration%7CAdd%2520a%2520Workflow%2520to%2520an%2520App%7C_____4"}),"workflow context")," to ",Object(r.b)("inlineCode",{parentName:"li"},"geometry.add-pixel-tolerance")," and then passing the output of that operation to ",Object(r.b)("inlineCode",{parentName:"li"},"tasks.identify"),", and finally passing the output of ",Object(r.b)("inlineCode",{parentName:"li"},"tasks.identify")," to ",Object(r.b)("inlineCode",{parentName:"li"},"results.display-details"),".")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",null,"You can"," ",Object(r.b)("a",{href:Object(i.a)("workflows/web-map-click-behavior-recreated.json"),download:"map-click-behavior-recreated.json"},"download this workflow")," ","and then"," ",Object(r.b)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"},"import it into workflow designer.")))),Object(r.b)("img",{src:Object(i.a)("img/web-custom-map-click-workflow-recreated.png"),alt:"Map Click Workflow with Original Operations"}),Object(r.b)("ol",{start:8},Object(r.b)("li",{parentName:"ol"},"Save the workflow and reload the application. Test the map click functionality and ensure it works as it originally did.")),Object(r.b)("h2",{id:"extend-the-workflow-to-create-a-graphic-buffering-the-click-geometry"},"Extend the Workflow to Create a Graphic Buffering the Click Geometry"),Object(r.b)("p",null,'At this point, you can choose to extend the map click behavior with Geocortex Workflow in whatever way is appropriate for your use case. You could execute a different "identify" for external results and add them to the set of results displayed, or zoom the map to a specific orientation and scale, or display a form for the user to fill out with relevant information to that location. For this example, a workflow was created which asks a user for a buffer distance, and creates a graphic showing the buffer around the click location.'),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",null,"You can"," ",Object(r.b)("a",{href:Object(i.a)("workflows/web-map-click-behavior-buffer.json"),download:"map-click-behavior-buffer.json"},"download this buffer geometry workflow")," ","and then"," ",Object(r.b)("a",{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/import-export-workflows.htm",target:"_blank"},"import it into workflow designer.")))),Object(r.b)("img",{src:Object(i.a)("img/web-custom-map-click-workflow-finished.png"),alt:"Map Click Workflow with Buffer Behavior"}))}f.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return n?o.a.createElement(f,c({ref:t},s,{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},255:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},256:function(e,t,n){"use strict";var a=n(1),o=n(0),r=n.n(o),i=n(39),c=n(257),l=n(14),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,p=n||l,u=Object(c.a)(p),b=Object(o.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(p),function(){d&&t&&t.disconnect()}}),[p,d,u]),p&&u?r.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(p),b.current=!0)},innerRef:function(e){var n,a;d&&e&&u&&(n=e,a=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:p})):r.a.createElement("a",Object(a.a)({},e,{href:p}))}},257:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},258:function(e,t,n){"use strict";n(259)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},259:function(e,t,n){var a=n(12),o=n(13),r=n(26),i=/"/g,c=function(e,t,n,a){var o=String(r(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},260:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),o=n.n(a),r=n(255),i=n.n(r),c=n(130),l=n.n(c);function s(e){var t=e.children;return o.a.createElement("div",{className:i()(l.a.root)},t)}},261:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(258);var a=n(256),o=n(0),r=n.n(o),i=n(255),c=n.n(i),l=n(131),s=n.n(l);function p(e){var t=e.title,n=e.description,o=e.link;return r.a.createElement("div",{className:c()("card-demo",s.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(a.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},262:function(e,t,n){"use strict";var a=n(0),o=n(51);t.a=function(){return Object(a.useContext)(o.a)}},263:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=o},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(267);var a=n(262);function o(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},265:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},266:function(e,t,n){"use strict";n(27),n(21),n(22);var a=n(0),o=n.n(a),r=n(263);var i=function(){return Object(a.useContext)(r.a)},c=n(255),l=n.n(c),s=n(132),p=n.n(s),u=37,b=39;t.a=function(e){var t=e.block,n=e.children,r=e.defaultValue,c=e.values,s=e.groupId,d=i(),f=d.tabGroupChoices,m=d.setTabGroupChoices,h=Object(a.useState)(r),w=h[0],g=h[1];if(null!=s){var v=f[s];null!=v&&v!==w&&g(v)}var O=function(e){g(e),null!=s&&m(s,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":w===t,className:l()("tab-item",p.a.tabItem,{"tab-item--active":w===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e)},onFocus:function(){return O(t)},onClick:function(){return O(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===w}))[0]))}},267:function(e,t,n){"use strict";var a=n(12),o=n(28),r=n(268),i="".startsWith;a(a.P+a.F*n(269)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return i?i.call(t,a,n):t.slice(n,n+a.length)===a}})},268:function(e,t,n){var a=n(75),o=n(26);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},269:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);