/*! For license information please see d49dccc5.c1de3684.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[54,39,50],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),i=n(9),r=(n(0),n(210)),o={},c={id:"mobile/snippets/prereqs",title:"prereqs",description:"## Prerequisites",source:"@site/docs/mobile/snippets/prereqs.mdx",permalink:"/dev-center/docs/mobile/snippets/prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/prereqs.mdx"},s=[{value:"Prerequisites",id:"prerequisites",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"Download the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start"}),"Quick Start")," application and open it in Visual Studio."))}l.isMDXComponent=!0},129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),i=n(9),r=(n(0),n(210)),o={},c={id:"snippets/autofac-mobile",title:"autofac-mobile",description:":::note",source:"@site/docs/snippets/autofac-mobile.mdx",permalink:"/dev-center/docs/snippets/autofac-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/snippets/autofac-mobile.mdx"},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Geocortex Mobile uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://autofaccn.readthedocs.io/en/latest/index.html"}),"autofac")," to register, locate, and inject components, services and other classes. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/dependency-injection"}),"dependency injection")," for more info."))))}l.isMDXComponent=!0},191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(1),i=n(9),r=(n(0),n(210)),o=n(129),c=n(127),s=n(215),p=n(214),l={title:"Custom Commands and Operations",description:"Geocortex Mobile - Learn how to implement a custom command or operation"},m={id:"mobile/implement-command-operation",title:"Custom Commands and Operations",description:"Geocortex Mobile - Learn how to implement a custom command or operation",source:"@site/docs/mobile/implement-command-operation.mdx",permalink:"/dev-center/docs/mobile/implement-command-operation",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/implement-command-operation.mdx",sidebar:"mobile",previous:{title:"Change Mobile's Default Search Behaviour",permalink:"/dev-center/docs/mobile/change-default-search-behaviour"},next:{title:"Custom Component with a Visual Interface",permalink:"/dev-center/docs/mobile/implement-component-with-ui"}},b=[{value:"Create the Backing Service",id:"create-the-backing-service",children:[]},{value:"Implementing the Operation",id:"implementing-the-operation",children:[{value:"Define the Operation",id:"define-the-operation",children:[]},{value:"Register an Implementation for the Operation",id:"register-an-implementation-for-the-operation",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],d={rightToc:b};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Geocortex Mobile has many built in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-commands-operations"}),"Commands and Operations")," which can be chained together to build custom behaviours with. If these Command and Operations are not enough to accomplish your goal, you can use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/change-default-search-behaviour"}),"Geocortex Workflow")," to take custom behaviour even further without writing custom code. If Workflow is still not enough to accomplish your needs, then it might be time to implement a Custom Command / Operation."))),Object(r.b)("p",null,"This article will walk you through implementing a custom command in Geocortex Mobile that displays an alert."),Object(r.b)(c.default,{mdxType:"PrereqsSnippet"}),Object(r.b)("h2",{id:"create-the-backing-service"},"Create the Backing Service"),Object(r.b)("p",null,"Every Command or operation in Geocortex Mobile needs to be registered and implemented by a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-components-services"}),"service or component"),", so the first thing we will do is create a service."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a new file ",Object(r.b)("inlineCode",{parentName:"li"},"Services/AlertService.cs")," under the platform agnostic project."),Object(r.b)("li",{parentName:"ol"},"In the file, add a new service class ",Object(r.b)("inlineCode",{parentName:"li"},"AlertService")," and register it with ",Object(r.b)("strong",{parentName:"li"},"autofac"))),Object(r.b)(o.default,{mdxType:"AutofacSnippet"}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"using App1.Services.AlertService;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Services;\nusing System.Threading.Tasks;\n\n[assembly: Service(typeof(Service), PropertiesAutowired = true)]\nnamespace App1.Services.AlertService\n{\n    class AlertService : ServiceBase\n    {\n        protected override Task DoInitialize()\n        {\n            return Task.CompletedTask;\n        }\n    }\n}\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The two key components of this snippet are the ",Object(r.b)("inlineCode",{parentName:"p"},"[assembly: Service(...)]")," tag and the class extension ",Object(r.b)("inlineCode",{parentName:"p"},"AlertService: ServiceBase"),". These two pieces register the service with autofac and Geocortex Mobile and cause it to be initialized on startup."))),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Create a class ",Object(r.b)("inlineCode",{parentName:"li"},"Services/AlertOperations")," under the platform agnostic project"),Object(r.b)("li",{parentName:"ol"},"In the file, add a new class ",Object(r.b)("inlineCode",{parentName:"li"},"AlertOperations")," and register it with autofac")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"using App1.Services.AlertOperations;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Messaging;\nusing Geocortex.Mobile.Infrastructure.Messaging;\n\n[assembly: Export(typeof(AlertOperations), SingleInstance = true)]\nnamespace App1.Services.AlertOperations\n{\n    class AlertOperations : OperationsBase\n    {\n        public AlertOperations(IOperationRegistry operationRegistry)\n            : base(operationRegistry)\n        {\n        }\n    }\n}\n")),Object(r.b)("h2",{id:"implementing-the-operation"},"Implementing the Operation"),Object(r.b)("p",null,"Creating a new Operation in mobile consists of two pieces."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Defining the Operation's name, inputs, and outputs"),Object(r.b)("li",{parentName:"ul"},'Registering an "Execution" function for the operation.',Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"This function will be the actual code that executes when the operation is called.")))),Object(r.b)("h3",{id:"define-the-operation"},"Define the Operation"),Object(r.b)("p",null,"An Operation is defined in the class that extends ",Object(r.b)("inlineCode",{parentName:"p"},"OperationsBase"),". In our example, it's ",Object(r.b)("inlineCode",{parentName:"p"},"AlertOperations"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("inlineCode",{parentName:"li"},"IVoidOperation")," produces no output, and optionally takes an input")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'public IVoidOperation NoInputNoOutput => GetVoidOperation("fire.phasers");\npublic IVoidOperation<Temperature> SomeInputNoOutput => GetVoidOperation<Temperature>("tea.earl-grey");\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("inlineCode",{parentName:"li"},"IOperation")," produces an output, and optionally takes an input")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'public IOperation<Mischief> NoInputSomeOutput => GetOperation<Mischief>("q.appear");\npublic IOperation<Deuterium, WarpSpeed> SomeInputSomeOutput => GetOperation<Deuterium, WarpSpeed>("warpdrive.engage");\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Operation names in mobile generally take the format ",Object(r.b)("inlineCode",{parentName:"p"},"<category>.<name>"),", with multiple words ",Object(r.b)("inlineCode",{parentName:"p"},"kebab-cased"),"."))),Object(r.b)("p",null,"For this example, let's define a operation with some input and no output."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'class AlertOperations : OperationsBase\n{\n    public IVoidOperation<string> DisplayCustomAlert => GetVoidOperation<string>("custom-alert.display");\n\n    public AlertOperations(IOperationRegistry operationRegistry)\n        : base(operationRegistry)\n    {\n    }\n}\n')),Object(r.b)("h3",{id:"register-an-implementation-for-the-operation"},"Register an Implementation for the Operation"),Object(r.b)("p",null,"Next, we need to register an implementation for our operation in the ",Object(r.b)("inlineCode",{parentName:"p"},"AlertService"),"."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Add a public property ",Object(r.b)("inlineCode",{parentName:"li"},"AlertOperations")," to the Service.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"    [assembly: Service(typeof(Service), PropertiesAutowired = true)]\n    class AlertService : ServiceBase\n    {\n        public AlertOperations AlertOperations { get; set; }\n        ...\n    }\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We never have to explicity set this property because of some ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://autofaccn.readthedocs.io/en/latest/register/prop-method-injection.html"}),"autofac autowiring magic")," in the assembly attribute."))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Create an implementation for displaying a custom alert and register it as an execution for the operation.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'class AlertService : ServiceBase\n{\n    public AlertOperations AlertOperations { get; set; }\n\n    protected override Task DoInitialize()\n    {\n        this.AlertOperations.DisplayCustomAlert.RegisterExecute(\n            (args) =>\n            {\n                Application.Current.MainPage.DisplayAlert("Custom Alert", args, "OK");\n                return Task.FromResult((object)null);\n            }, this);\n\n        return Task.CompletedTask;\n    }\n}\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Multiple implementations can be registered for an Command or Operation."))),Object(r.b)("p",null,"Congradulations! You just created your first custom operation. You can easily test your new operation by setting it to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/change-default-behaviour"}),"run it on map initialization"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "map-extension",\n            "id": "map1",\n            "webMap": "c6008288a95247428fc55d9aaa72b670",\n            "onClick": [ "tasks.identify", "highlights.pulse", "results.display" ],\n            "onInitialized": [\n                {\n                    "name": "custom-alert.display",\n                    "arguments": "This is a custom operation!"\n                }\n            ]\n        },\n        ...\n    ]\n}\n')),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"Commands and operations are the logical building blocks of executing custom behaviour in Geocortex Mobile, but sometimes you need to take things a bit further. Creating custom components can allow you to design completely custom UI for Gecortex Mobile, and creating background services can enable the execution of tasks on an arbitrary schedule."),Object(r.b)(s.a,{mdxType:"UseCaseContainer"},Object(r.b)(p.a,{title:"Commands and Operations",description:"Learn more about commands and operations",link:"concepts-commands-operations",mdxType:"UseCaseCard"}),Object(r.b)(p.a,{title:"Implement a Custom Component with UI",description:"Learn how to implement a custom component using the Geocortex Mobile SDK",link:"./implement-component-with-ui",mdxType:"UseCaseCard"}),Object(r.b)(p.a,{title:"Implement a Custom Service",description:"Learn how to implement a custom service using the Geocortex Mobile SDK",link:"./implement-service",mdxType:"UseCaseCard"})))}u.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,u=m["".concat(o,".").concat(d)]||m[d]||b[d]||r;return n?i.a.createElement(u,c({ref:t},p,{components:n})):i.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},211:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=i.apply(null,a);o&&e.push(o)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},212:function(e,t,n){"use strict";n(213)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},213:function(e,t,n){var a=n(17),i=n(18),r=n(23),o=/"/g,c=function(e,t,n,a){var i=String(r(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(212);var a=n(0),i=n.n(a),r=n(211),o=n.n(r),c=n(125),s=n.n(c);function p(e){var t=e.title,n=e.description,a=e.link;return i.a.createElement("div",{className:o()("card-demo",s.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,n)),i.a.createElement("div",{className:"card__footer"},i.a.createElement("a",{className:"button button--secondary button--block",href:a},"Get Started"))))}},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(0),i=n.n(a),r=n(211),o=n.n(r),c=n(126),s=n.n(c);function p(e){var t=e.children;return i.a.createElement("div",{className:o()(s.a.root)},t)}}}]);