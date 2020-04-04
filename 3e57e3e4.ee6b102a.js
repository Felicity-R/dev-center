/*! For license information please see 3e57e3e4.ee6b102a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21,42],{131:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var a=r(1),n=r(9),o=(r(0),r(214)),i={},c={id:"mobile/snippets/prereqs",title:"prereqs",description:"Download the [Quick Start](../quick-start.mdx) application and open it in Visual Studio.",source:"@site/docs/mobile/snippets/prereqs.mdx",permalink:"/docs/mobile/snippets/prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/prereqs.mdx"},s=[],l={rightToc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Download the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/quick-start"}),"Quick Start")," application and open it in Visual Studio."))}u.isMDXComponent=!0},170:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return h})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var a=r(1),n=r(9),o=(r(0),r(214)),i=r(223),c=r(221),s=r(220),l=r(131),u={title:"Change Mobile's Default Search Behavior",description:"Geocortex Mobile - Learn how to override Geocortex Mobile's default search behavior with a workflow"},h={id:"mobile/change-default-search-behavior",title:"Change Mobile's Default Search Behavior",description:"Geocortex Mobile - Learn how to override Geocortex Mobile's default search behavior with a workflow",source:"@site/docs/mobile/change-default-search-behavior.mdx",permalink:"/docs/mobile/change-default-search-behavior",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/change-default-search-behavior.mdx",sidebar:"mobile",previous:{title:"Internationalization",permalink:"/docs/mobile/internationalization"},next:{title:"Custom Commands and Operations",permalink:"/docs/mobile/implement-command-operation"}},p=[{value:"What you&#39;re Building",id:"what-youre-building",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Initial Set up",id:"initial-set-up",children:[]},{value:"Set up the Workflow to Run on Search",id:"set-up-the-workflow-to-run-on-search",children:[]},{value:"Extend the Workflow to Filter the Results.",id:"extend-the-workflow-to-filter-the-results",children:[]}],d={rightToc:p};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Geocortex Mobile comes with search functionality out of the box. The default behavior will return results from all enabled layers that can be searched on the map. What if you want to replace the functionality with your own search? Or filter the results returned by the default search? ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/mobileviewer/designer/"}),"Geocortex Mobile Designer")," can't accomplish this, but it can be accomplished by leveraging ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow")," and editing the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/concepts-app-config"}),"app config"),"."),Object(o.b)("h2",{id:"what-youre-building"},"What you're Building"),Object(o.b)("p",null,"We will modify the default search behavior of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/quick-start"}),"Quick Start")," application on the Fire Hydrants layer have have an optional filter that will only show fire hydrants without a hydrants survey."),Object(o.b)("img",{src:Object(i.a)("img/custom-search-workflow-finished.png"),alt:"Search Workflow with Alert"}),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(l.default,{mdxType:"PrereqsSnippet"}),Object(o.b)("h2",{id:"initial-set-up"},"Initial Set up"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run the Quick Start"),Object(o.b)("li",{parentName:"ol"},'Turn off visibility for all Feature Layers except for "Fire Hydrants"'),Object(o.b)("li",{parentName:"ol"},'Run "Return to Default Map View" in the I Want to Menu if you panned or zoomed the map.'),Object(o.b)("li",{parentName:"ol"},"Open the search panel and search for ",Object(o.b)("inlineCode",{parentName:"li"},"active"),".")),Object(o.b)("p",null,"You should see some number of results. If you look at the details for some of the Fire Hydrants, you'll notice some have Fire Hydrant Surveys and some don't. We will build a workflow that will only return the Fire Hydrants without a related survey when you search for ",Object(o.b)("inlineCode",{parentName:"p"},"active filter:nosurveys"),"."),Object(o.b)("h2",{id:"set-up-the-workflow-to-run-on-search"},"Set up the Workflow to Run on Search"),Object(o.b)("p",null,'The first thing we need to do is override the default search behavior. We can do this by editing the "Search" component of the ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/quick-start#editing-the-layout-and-app-config"}),"app config"),". The default behavior for search is a command chain that runs ",Object(o.b)("inlineCode",{parentName:"p"},"tasks.search")," and then ",Object(o.b)("inlineCode",{parentName:"p"},"results.display"),"."),Object(o.b)("h6",{id:"default-search-config"},"Default Search Config"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"{4}","{4}":!0}),'{\n    "$type": "search",\n    "id": "search",\n    "onSearch": ["tasks.search", "results.display"],\n    "onClear": ["search.clear", "results.clear"],\n    "maxResults": 50\n}\n')),Object(o.b)("p",null,"We are going to replace the command chain with a ",Object(o.b)("inlineCode",{parentName:"p"},"workflow.run")," command that replicates this behavior."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open up ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow Designer")," and create and save a new workflow."),Object(o.b)("li",{parentName:"ol"},'Add an "Alert" activity as a test.'),Object(o.b)("li",{parentName:"ol"},"Copy the ID of the the workflow from the URL")),Object(o.b)("img",{src:Object(i.a)("img/custom-search-workflow-url.png"),alt:"Workflow URL with ID"}),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Add the workflow as an app item to your ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/mobile/quick-start#editing-the-layout-and-app-config"}),"app config"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "workflow",\n            "id": "filterSearchWorkflow",\n            "title": "Filter Search Workflow",\n            "portalItem": "<your-workflow-id-here>"\n        },\n        ...\n    ]\n}\n')),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Configure the ",Object(o.b)("inlineCode",{parentName:"li"},"onSearch")," property of the Search Component in the app config to run the workflow.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"{4-11}","{4-11}":!0}),'{\n    "$type": "search",\n    "id": "search",\n    "onSearch": [\n        {\n            "name": "workflow.run",\n            "arguments": {\n                "id": "filterSearchWorkflow"\n            }\n        }\n    ],\n    "onClear": ["search.clear", "results.clear"],\n    "maxResults": 50\n}\n')),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Run the app and test your workflow. You should see your alert pop up when you try to search for something.")),Object(o.b)("img",{src:Object(i.a)("img/custom-search-workflow-alert.png"),alt:"Search Workflow with Alert"}),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Open up your Workflow in the Workflow Designer again. The default behavior we just overode can be recreated with the use of ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-command.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____169"}),"RunCommand")," and ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-operation.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____173"}),"RunOperation")," activities. ",Object(o.b)("inlineCode",{parentName:"li"},"tasks.search")," is an operation, so it needs a RunOperation Activity, and ",Object(o.b)("inlineCode",{parentName:"li"},"results.display")," is a command so it needs a RunCommand Activity. Chain these two activities together, passing the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input%3FTocPath%3DConfiguration%7CAdd%2520a%2520Workflow%2520to%2520an%2520App%7C_____4"}),"workflow context")," to ",Object(o.b)("inlineCode",{parentName:"li"},"tasks.search")," and then passing the output of that operation to ",Object(o.b)("inlineCode",{parentName:"li"},"results.display"),".")),Object(o.b)("img",{src:Object(i.a)("img/custom-search-workflow-recreated.png"),alt:"Search Workflow with Original Operations"}),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"Save the workflow and reload the application. Test the search functionality and ensure it works as it originally did.")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/change-default-behavior"}),"Change Default Application Behavior")," for more ways to override default behavior like search."))),Object(o.b)("h2",{id:"extend-the-workflow-to-filter-the-results"},"Extend the Workflow to Filter the Results."),Object(o.b)("p",null,'At this point, you can choose to extend the search behavior with Geocortex Workflow in whatever way is appropiate for your usecase. You could execute a different search for external results and add them to the set of results displayed, you could filter out specific results from the search, or you could replace the default search operation with an entirely different search operation. For this example, a workflow was created which checks the incoming search text for the text "filter:nosurvey" and then filters results to Fire Hydrants without a survey. The workflow ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://latitudegeo.maps.arcgis.com/home/item.html?id=bc7647d4485743e98ea42cd69ee4aa66"}),"can be found here"),"."),Object(o.b)("h1",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"This pattern of configuring behavior with a workflow can be applied throughout configuration on numerous components. You can use a workflow to control the behavior of the Map, Feature Details, Geolocate, Custom Components, and more. Often, a workflow can be created and used to execute custom behavior instead of a custom command or operation."),Object(o.b)(c.a,{mdxType:"UseCaseContainer"},Object(o.b)(s.a,{title:"Geocortex Workflow",description:"Learn more about Geocortex Workflow",link:"../workflow/overview",mdxType:"UseCaseCard"}),Object(o.b)(s.a,{title:"Change Default Behavior",description:"Learn more about overriding default behaviors",link:"./change-default-behavior",mdxType:"UseCaseCard"}),Object(o.b)(s.a,{title:"SDK Sample for Overriding Default Behaviors",description:"Check out the SDK Sample for overriding default behaviors",link:"https://github.com/geocortex/mobile-sdk-samples/MapAndFeatureCommands",mdxType:"UseCaseCard"}),Object(o.b)(s.a,{title:"Implement Custom Command or Operation",description:"Implement a custom command or operation with the Mobile SDK",link:"./implement-command-operation",mdxType:"UseCaseCard"}),Object(o.b)(s.a,{title:"Custom Search Workflow with Filter",description:"The custom search workflow with a filter used in this example",link:"https://latitudegeo.maps.arcgis.com/home/item.html?id=bc7647d4485743e98ea42cd69ee4aa66#",mdxType:"UseCaseCard"})))}b.isMDXComponent=!0},214:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},h=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(r),d=a,b=h["".concat(i,".").concat(d)]||h[d]||p[d]||o;return r?n.a.createElement(b,c({ref:t},l,{components:r})):n.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},215:function(e,t,r){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=n.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)r.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},216:function(e,t,r){"use strict";var a=r(1),n=r(0),o=r.n(n),i=r(39),c=r(217),s=r(25),l=r.n(s);t.a=function(e){var t,r=e.to,s=e.href,u=r||s,h=Object(c.a)(u),p=Object(n.useRef)(!1),d=l.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!d&&h&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,h]),u&&h?o.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var r,a;d&&e&&h&&(r=e,a=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),a())}))}))).observe(r))},to:u})):o.a.createElement("a",Object(a.a)({},e,{href:u}))}},217:function(e,t,r){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return a}))},218:function(e,t,r){"use strict";r(219)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},219:function(e,t,r){var a=r(12),n=r(13),o=r(24),i=/"/g,c=function(e,t,r,a){var n=String(o(e)),c="<"+t;return""!==r&&(c+=" "+r+'="'+String(a).replace(i,"&quot;")+'"'),c+">"+n+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(c),a(a.P+a.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));r(218);var a=r(216),n=r(0),o=r.n(n),i=r(215),c=r.n(i),s=r(129),l=r.n(s);function u(e){var t=e.title,r=e.description,n=e.link;return o.a.createElement("div",{className:c()("card-demo",l.a.root)},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card__header"},o.a.createElement("h3",null,t)),o.a.createElement("div",{className:"card__body"},o.a.createElement("p",null,r)),o.a.createElement("div",{className:"card__footer"},o.a.createElement(a.a,{className:"button button--secondary button--block",to:n},"Get Started"))))}},221:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r(0),n=r.n(a),o=r(215),i=r.n(o),c=r(130),s=r.n(c);function l(e){var t=e.children;return n.a.createElement("div",{className:i()(s.a.root)},t)}},222:function(e,t,r){"use strict";var a=r(0),n=r(51);t.a=function(){return Object(a.useContext)(n.a)}},223:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(225);var a=r(222);function n(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},225:function(e,t,r){"use strict";var a=r(12),n=r(27),o=r(228),i="".startsWith;a(a.P+a.F*r(229)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),r=n(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return i?i.call(t,a,r):t.slice(r,r+a.length)===a}})},228:function(e,t,r){var a=r(74),n=r(24);e.exports=function(e,t,r){if(a(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(n(e))}},229:function(e,t,r){var a=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,!"/./"[e](t)}catch(n){}}return!0}}}]);