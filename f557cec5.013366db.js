(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{138:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(1),o=t(9),i=(t(0),t(210)),c={},a={id:"mobile/snippets/doomsday-cookie-clicker-view-model",title:"doomsday-cookie-clicker-view-model",description:"```csharp",source:"@site/docs/mobile/snippets/doomsday-cookie-clicker-view-model.mdx",permalink:"/dev-center/docs/mobile/snippets/doomsday-cookie-clicker-view-model",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/doomsday-cookie-clicker-view-model.mdx"},p=[],s={rightToc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"using App1.Components;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Views;\n\n[assembly: ViewModel(typeof(HarmlessComponentViewModel))]\nnamespace App1.Components\n{\n    public class HarmlessComponentViewModel : NotifyPropertyBase\n    {\n        private double _progress = 0;\n\n        private bool _isDoomsday = false;\n\n        public double Progress\n        {\n            get => _progress;\n            set => SetProperty(ref _progress, value);\n        }\n\n        public bool IsDoomsday\n        {\n            get => _isDoomsday;\n            set => SetProperty(ref _isDoomsday, value);\n        }\n    }\n}\n\n")))}l.isMDXComponent=!0},210:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a({},n,{},e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?o.a.createElement(f,a({ref:n},s,{components:t})):o.a.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);