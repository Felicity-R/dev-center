(window.webpackJsonp=window.webpackJsonp||[]).push([[47,53],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),i=n(9),o=(n(0),n(210)),a={},c={id:"workflow/snippets/prereqs-web",title:"prereqs-web",description:"Follow the instructions in the [Web Applications SDK](../getting-started-web.mdx) page to setup your development enviroment.",source:"@site/docs/workflow/snippets/prereqs-web.mdx",permalink:"/dev-center/docs/workflow/snippets/prereqs-web",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-web.mdx"},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Follow the instructions in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/workflow/getting-started-web"}),"Web Applications SDK")," page to setup your development enviroment."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"A working knowledge of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," is reccomended before extending Workflow for web-based hosts."))))}l.isMDXComponent=!0},185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),i=n(9),o=(n(0),n(210)),a=n(130),c={title:"Integrating the ArcGIS API for JavaScript",description:"Geocortex Workflow - Integrate the ArcGIS API for JavaScript into custom activities for web applications"},s={id:"workflow/integrating-the-esri-api-web",title:"Integrating the ArcGIS API for JavaScript",description:"Geocortex Workflow - Integrate the ArcGIS API for JavaScript into custom activities for web applications",source:"@site/docs/workflow/integrating-the-esri-api-web.mdx",permalink:"/dev-center/docs/workflow/integrating-the-esri-api-web",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/integrating-the-esri-api-web.mdx",sidebar:"workflow",previous:{title:"Getting Started with the Web Applications SDK",permalink:"/dev-center/docs/workflow/getting-started-web"},next:{title:"TypeScript Activity Block Tags",permalink:"/dev-center/docs/workflow/typescript-activity-block-tags"}},p=[{value:"Scope",id:"scope",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"Example: Custom Activity for Expanding a Polygon",id:"example-custom-activity-for-expanding-a-polygon",children:[]}]},{value:"Using Alternate ArcGIS API for JavaScript Versions",id:"using-alternate-arcgis-api-for-javascript-versions",children:[{value:"Change the API Version used by the Activity SDK",id:"change-the-api-version-used-by-the-activity-sdk",children:[]},{value:"Build Activities to work with both ArcGIS API Versions",id:"build-activities-to-work-with-both-arcgis-api-versions",children:[]},{value:"Example: ExpandPolygon Custom Activity that is 4.x and 3.x ArcGIS API Compatible",id:"example-expandpolygon-custom-activity-that-is-4x-and-3x-arcgis-api-compatible",children:[]}]}],l={rightToc:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/designer/"}),"Geocortex Workflow")," was designed to be a flexible tool for implementing business logic for mapping applications, and tightly integrates with ArcGIS API for JavaScript. You may want to use the ArcGIS API in your own custom activities; this article will explain how to reference ArcGIS API types in your custom activity or custom form element for web applications."),Object(o.b)("h2",{id:"scope"},"Scope"),Object(o.b)("p",null,"This article applies to building workflow activities and form elements that will be run in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/workflow/concepts-key-concepts#geocortex-workflow-hosts"}),"web application workflow hosts"),"."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(a.default,{mdxType:"WebPrereqs"}),Object(o.b)("p",null,"Follow the instructions in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/workflow/implement-custom-activity-web"}),"Implement a Custom Activity")," to create a custom workflow activity. You can then import ArcGIS API types with a ",Object(o.b)("inlineCode",{parentName:"p"},"require")," call."),Object(o.b)("h3",{id:"example-custom-activity-for-expanding-a-polygon"},"Example: Custom Activity for Expanding a Polygon"),Object(o.b)("p",null,"This is a custom activity which imports types from the ArcGIS API for JavaScript to expand a polygon by a given factor and returns the new extent bounds."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"activity-sdk")," uses the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.arcgis.com/javascript/3/"}),"ArcGIS API for JavaScript 3.x")," by default. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/workflow/integrating-the-esri-api-web#using-alternate-arcgis-api-for-javascript-versions"}),"Using Alternate ArcGIS API Versions")," for details."))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'// Import the desired type\nimport * as Extent from "esri/geometry/Extent";\nimport * as Polygon from "esri/geometry/Polygon";\n\nexport interface ExpandPolygonInputs {\n    // @description The polygon to Expand.\n    // @required\n    polygon: Polygon;\n\n    // @description The factor to expand the polygon extent by.\n    // @required\n    factor: number;\n}\n\nexport interface ExpandPolygonOutputs {\n    // @description The extent bounds for the expanded polygon.\n    extent: Extent;\n}\n\n// @category Custom Activities\n// @description An activity that calculates the extent a polygon would cover if it was expanded by a given factor.\nexport class ExpandPolygon {\n    static action = "uuid:a1c505cb-c725-465c-9ca1-f11a5316dfec::ExpandPolygon";\n\n    static suite = "uuid:a1c505cb-c725-465c-9ca1-f11a5316dfec";\n\n    async execute(inputs: ExpandPolygonInputs): Promise<ExpandPolygonOutputs> {\n        return {\n            extent: inputs.polygon.getExtent().expand(inputs.factor)\n        };\n    }\n}\n')),Object(o.b)("h2",{id:"using-alternate-arcgis-api-for-javascript-versions"},"Using Alternate ArcGIS API for JavaScript Versions"),Object(o.b)("p",null,"Geocortex Workflow is designed to be able to be used with the 4.x or 3.x ArcGIS API for JavaScript. Each workflow host uses a specific version:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.geocortex.com/products/gxw/"}),"Geocortex Web")," - 4.x ArcGIS API"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.geocortex.com/products/geocortex-essentials/"}),"Geocortex Viewer for HTML5")," - 3.x ArcGIS API"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.esri.com/en-us/arcgis/products/web-appbuilder/overview"}),"ArcGIS Web AppBuilder")," - 3.x ArcGIS API for 2D View, 4.x ArcGIS API for scene view.")),Object(o.b)("p",null,"If you decide to use the API, you should ensure you are using the right version for your application."),Object(o.b)("h3",{id:"change-the-api-version-used-by-the-activity-sdk"},"Change the API Version used by the Activity SDK"),Object(o.b)("p",null,"The ArcGIS API version for the activity SDK can be changed by updating the ",Object(o.b)("inlineCode",{parentName:"p"},"@types/arcgis-js-api")," version in the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file and then running ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," again."),Object(o.b)("p",null,"For example, a ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file in an activity SDK that uses the 4.x ArcGIS API might look like this;"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "devDependencies": {\n    "@types/arcgis-js-api": "4.14.0",\n    ...\n  },\n  ...\n}\n')),Object(o.b)("h3",{id:"build-activities-to-work-with-both-arcgis-api-versions"},"Build Activities to work with both ArcGIS API Versions"),Object(o.b)("p",null,"If you need to support both ArcGIS API versions, then you may need to account for differences between the API's. For more details, see the developer documentation for the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.arcgis.com/javascript/"}),"4.x JavaScript API")," and the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.arcgis.com/javascript/3/"}),"3.x JavaScript API")," respectively.\nYou can structure your activity to be compatible with differences between versions by using the ",Object(o.b)("inlineCode",{parentName:"p"},"esri/kernel")," module to determine the API version that the activity is running in."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import * as kernel from "esri/kernel";\n\nenum ArcGisApiVersion {\n    Unknown,\n    v3,\n    v4\n}\n\nconst getArcGISApiVersion = (): ArcGisApiVersion => {\n    const prefix = kernel.version.substr(0, 2);\n    if (prefix === "4.") {\n        return ArcGisApiVersion.v4;\n    } else if (prefix === "3.") {\n        return ArcGisApiVersion.v3;\n    } else {\n        return ArcGisApiVersion.Unknown;\n    }\n};\n')),Object(o.b)("h3",{id:"example-expandpolygon-custom-activity-that-is-4x-and-3x-arcgis-api-compatible"},"Example: ExpandPolygon Custom Activity that is 4.x and 3.x ArcGIS API Compatible"),Object(o.b)("p",null,"This example builds on the ExpandPolygon activity to make it work with both the 3.x and 4.x versions of the ArcGIS API. The ",Object(o.b)("inlineCode",{parentName:"p"},"execute")," method of the activity checks the ArcGIS API version and executes the appropiate code for the given API."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Since the SDK can only reference one version of the ArcGIS JavaScript API at time, you will have to cast to ",Object(o.b)("inlineCode",{parentName:"p"},"any")," for the other API version types when neccesary to override TypeScript errors."))),Object(o.b)("p",null,"In this example, the way the Extent of a polygon is retrieved is the difference between the APIs. In 4.x, ",Object(o.b)("inlineCode",{parentName:"p"},"extent")," is a property, while in 3.x extent is retrieved using the ",Object(o.b)("inlineCode",{parentName:"p"},"getExtent()")," method. The API's converge after this, with both supporting the ",Object(o.b)("inlineCode",{parentName:"p"},"expand(factor)")," method."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'// Import the desired type\nimport * as Extent from "esri/geometry/Extent";\nimport * as Polygon from "esri/geometry/Polygon";\nimport * as kernel from "esri/kernel";\n\nenum ArcGisApiVersion {\n    Unknown,\n    v3,\n    v4\n}\n\nconst getArcGISApiVersion = (): ArcGisApiVersion => {\n    const prefix = kernel.version.substr(0, 2);\n    if (prefix === "4.") {\n        return ArcGisApiVersion.v4;\n    } else if (prefix === "3.") {\n        return ArcGisApiVersion.v3;\n    } else {\n        return ArcGisApiVersion.Unknown;\n    }\n};\n\nexport interface ExpandPolygonInputs {\n    // @description The polygon to Expand.\n    // @required\n    polygon: Polygon;\n\n    // @description The factor to expand the polygon extent by.\n    // @required\n    factor: number;\n}\n\nexport interface ExpandPolygonOutputs {\n    // @description The extent bounds for the expanded polygon.\n    extent: Extent;\n}\n\n// @category Custom Activities\n// @description An activity that calculates the extent a polygon would cover if it was expanded by a given factor.\nexport class ExpandPolygon {\n    static action = "uuid:a1c505cb-c725-465c-9ca1-f11a5316dfec::ExpandPolygon";\n\n    static suite = "uuid:a1c505cb-c725-465c-9ca1-f11a5316dfec";\n\n    async execute(inputs: ExpandPolygonInputs): Promise<ExpandPolygonOutputs> {\n        const apiVersion = getArcGISApiVersion();\n        let extent;\n        if (apiVersion == ArcGisApiVersion.v4) {\n            extent = (inputs.polygon as any).extent;\n        } else if (apiVersion == ArcGisApiVersion.v3) {\n            extent = inputs.polygon.getExtent();\n        } else {\n            throw new Error(`ArcGIS JS API Version version \'${apiVersion}\' not recognized.`);\n        }\n\n        return {\n            extent: extent.expand(inputs.factor)\n        };\n    }\n}\n')))}b.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(a,".").concat(u)]||b[u]||d[u]||o;return n?i.a.createElement(m,c({ref:t},p,{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);