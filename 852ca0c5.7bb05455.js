(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),i=(n(0),n(254)),c={title:"Injecting Services",description:"Geocortex Web - Injecting services into component models and other services."},a={id:"web/sdk-service-injection",title:"Injecting Services",description:"Geocortex Web - Injecting services into component models and other services.",source:"@site/docs/web/sdk-service-injection.mdx",permalink:"/docs/web/sdk-service-injection",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-service-injection.mdx",sidebar:"web",previous:{title:"Deployment",permalink:"/docs/web/sdk-deployment"},next:{title:"Component Hooks",permalink:"/docs/web/sdk-component-hooks"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Geocortex Web uses dependency injection as a way to obtain a reference to Geocortex Web ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/concepts-components-services#services"}),"services")," in your application. Services can be referenced from within a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/concepts-components-services#component-models-and-configuration"}),"component model")," or another service."),Object(i.b)("p",null,"The easiest way to obtain a reference to a service is by using the ",Object(i.b)("inlineCode",{parentName:"p"},"@inject")," decorator from within your component model or service. For example to inject the ",Object(i.b)("inlineCode",{parentName:"p"},"RegionService")," from within a component model:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="ExampleComponentModel.ts"',title:'"ExampleComponentModel.ts"'}),'import { ComponentModelBase } from "@geocortex/web/models";\nimport { RegionService } from "@geocortex/web/region";\n// highlight-next-line\nimport { FrameworkServiceType, inject } from "@geocortex/web/services";\n\nexport default class ExampleComponentModel extends ComponentModelBase {\n    // NOTE: This property isn\'t populated until the model is `initialized`.\n    // It is not available in the constructor of this model.\n    // highlight-next-line\n    @inject(FrameworkServiceType.REGION)\n    // highlight-next-line\n    regionService: RegionService | undefined;\n\n    private _distance = "100";\n\n    get distance(): string {\n        return this.regionService?.measurementSystem === "metric"\n            ? `${this._distance} m`\n            : `${this._distance} ft`;\n    }\n}\n')),Object(i.b)("p",null,"Note that the ",Object(i.b)("inlineCode",{parentName:"p"},"@inject")," decorator will automatically inject a reference to the service only when used from within a component model or service. The property that the ",Object(i.b)("inlineCode",{parentName:"p"},"@inject")," decorator is bound to ",Object(i.b)("strong",{parentName:"p"},"will be populated during the initialization process of the given component model or service")," that the decorator was used in. The property value will be ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," until the component model or service is initialized."))}l.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},m=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,b=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?o.a.createElement(b,a({ref:t},p,{components:n})):o.a.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);