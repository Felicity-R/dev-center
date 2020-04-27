/*! For license information please see c18616c8.015252a3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[73,89],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return m}));var o=n(1),a=n(9),r=(n(0),n(254)),i={},c={id:"workflow/snippets/prereqs-mobile",title:"prereqs-mobile",description:":::important",source:"@site/docs/workflow/snippets/prereqs-mobile.mdx",permalink:"/docs/workflow/snippets/prereqs-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-mobile.mdx"},s=[],l={rightToc:s};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-quick-start"}),"Geocortex Mobile SDK")))),Object(r.b)("p",null,"Follow the instructions in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/sdk-net-getting-started-mobile"}),"Geocortex Mobile SDK")," page to set up the environment for extending Workflow for Geocortex Mobile."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"A working knowledge of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://dotnet.microsoft.com/"}),"C# and the .NET platform")," is recommended before extending Workflow for Geocortex Mobile"))))}m.isMDXComponent=!0},222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(1),a=n(9),r=(n(0),n(254)),i=n(263),c=n(266),s=n(265),l=n(137),m={title:"Implement a Custom Form Element for Geocortex Mobile",sidebar_label:"Implement a Custom Form Element",description:"Geocortex Workflow - Implement custom form elements for Geocortex Mobile"},p={id:"workflow/usecases-mobile-implement-custom-form-elements",title:"Implement a Custom Form Element for Geocortex Mobile",description:"Geocortex Workflow - Implement custom form elements for Geocortex Mobile",source:"@site/docs/workflow/usecases-mobile-implement-custom-form-elements.mdx",permalink:"/docs/workflow/usecases-mobile-implement-custom-form-elements",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/usecases-mobile-implement-custom-form-elements.mdx",sidebar_label:"Implement a Custom Form Element",sidebar:"workflow",previous:{title:"Access App Properties in an Activity",permalink:"/docs/workflow/usecases-mobile-access-app-properties"},next:{title:"Reference a Third Party Library through the Geocortex Mobile SDK",permalink:"/docs/workflow/usecases-mobile-reference-third-party-library"}},u=[{value:"Scope",id:"scope",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Set up the Custom Form Element Skeleton",id:"set-up-the-custom-form-element-skeleton",children:[]},{value:"Set up a Form Element Registration Activity",id:"set-up-a-form-element-registration-activity",children:[]},{value:"Register the Form Element Registration Activity",id:"register-the-form-element-registration-activity",children:[]},{value:"Example: Enhanced Activity Indicator Form Element",id:"example-enhanced-activity-indicator-form-element",children:[]},{value:"Raising Form Events",id:"raising-form-events",children:[{value:"Example: Custom Form Element that Raises Events",id:"example-custom-form-element-that-raises-events",children:[]}]},{value:"Get Properties of Custom Form Elements at Runtime",id:"get-properties-of-custom-form-elements-at-runtime",children:[]},{value:"Relevant SDK Sample",id:"relevant-sdk-sample",children:[]}],b={rightToc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Implementing a custom ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/concepts-key-concepts#form-elements"}),"form element")," allows you to augment the existing ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/form-elements/auto-complete.htm%3FTocPath%3DForms%7CForm%2520Element%2520Reference%7C_____0"}),"form elements that come with Geocortex Workflow"),"."),Object(r.b)("h2",{id:"scope"},"Scope"),Object(r.b)("p",null,"This article applies to building workflow form elements that will be run on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.geocortex.com/products/gxm/"}),"Geocortex Mobile"),"."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)(l.default,{mdxType:"MobilePrereqs"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"Implementing a custom form element in Geocortex Mobile consists of three steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Creating the custom form element and implementing the UI."),Object(r.b)("li",{parentName:"ol"},"Creating an activity which will register this form component with Geocortex Workflow."),Object(r.b)("li",{parentName:"ol"},"Registering the activity with Geocortex Workflow and running it using the custom form element.")),Object(r.b)("h2",{id:"set-up-the-custom-form-element-skeleton"},"Set up the Custom Form Element Skeleton"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a new file ",Object(r.b)("inlineCode",{parentName:"li"},"CustomFormElement")," in the platform agnostic project of the Geocortex Mobile ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/mobile/sdk-quick-start"}),"Quickstart"),"."),Object(r.b)("li",{parentName:"ol"},"Add a new skeleton form element that implements ",Object(r.b)("inlineCode",{parentName:"li"},"FormComponent"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using Geocortex.Workflow.Forms.Components;\nusing Xamarin.Forms;\n\nnamespace App1.Workflow\n{\n    public class CustomFormElement : FormComponent\n    {\n        private readonly View _view;\n\n        public CustomFormElement(Geocortex.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base(element, name)\n        {\n            _view = new Label() { Text = "I\'m a custom form component!" };\n\n            Add(new GenericComponent(_view));\n        }\n\n        public override void Render()\n        {\n            base.Render();\n            _view.IsEnabled = IsEnabled;\n        }\n    }\n}\n')),Object(r.b)("h2",{id:"set-up-a-form-element-registration-activity"},"Set up a Form Element Registration Activity"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a new file ",Object(r.b)("inlineCode",{parentName:"li"},"FormElementRegistrationActivity")," in the platform agnostic project of the Geocortex Mobile ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/mobile/sdk-quick-start"}),"Quickstart"),"."),Object(r.b)("li",{parentName:"ol"},"Add a new form registration activity that implements ",Object(r.b)("inlineCode",{parentName:"li"},"RegisterCustomFormElementBase"),".")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Only one form element registration activity is needed per app, as it can register multiple custom form elements.\nLearn more about ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/usecases-mobile-implement-custom-activity"}),"implementing custom activities"),"."))),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using Geocortex.Workflow.Runtime;\nusing Geocortex.Workflow.Runtime.Activities.App;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow\n{\n    class FormElementRegistrationActivity : RegisterCustomFormElementBase\n    {\n        public static string Action { get; } = "your:unique:namespace::FormElementRegistrationActivity";\n\n        public override Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            IDictionary<string, object> result = new Dictionary<string, object>();\n            Register("CustomFormElement", typeof(CustomFormElement), context);\n            return Task.FromResult(result);\n        }\n    }\n}\n')),Object(r.b)("h2",{id:"register-the-form-element-registration-activity"},"Register the Form Element Registration Activity"),Object(r.b)("p",null,"Register the ",Object(r.b)("inlineCode",{parentName:"p"},"RegisterCustomFormElementBase")," class in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/workflow/usecases-mobile-implement-custom-activity#register-the-activity-with-the-iactivityhandlerfactory"}),Object(r.b)("inlineCode",{parentName:"a"},"IActivityHandlerFactory")," for the application"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),"public class ActivityLoader : IActivityHandlerFactory\n{\n    public ActivityLoader()\n    {\n        ...\n        RegisteredActivities[FormElementRegistrationActivity.Action] = () => new FormElementRegistrationActivity();\n        ...\n    }\n    ...\n}\n")),Object(r.b)("p",null,"Now you can ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/mobileviewer/latest/admin-help/Default.htm#gmv/designer/add-a-workflow-to-an-app.htm"}),"build a workflow for Geocortex Mobile")," that uses your new custom form element!"),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It is ",Object(r.b)("strong",{parentName:"p"},"essential")," that this custom activity be run before the custom form element is used. It is best practice to run the form element registration activity at the start of a workflow."))),Object(r.b)("p",null,"Next you need to run the workflow you just created in your Geocortex Mobile SDK project. You will need to add the workflow content to a file named ",Object(r.b)("inlineCode",{parentName:"p"},"custom-form-component-workflow.json")," in the platform agnostic project, and then ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://andrewlock.net/including-linked-files-from-outside-the-project-directory-in-asp-net-core/#adding-files-from-outside-the-project-by-linking"}),"link the workflow file")," in each of the target platform projects."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",null,"You can"," ",Object(r.b)("a",{href:Object(i.a)("workflows/mobile-custom-form-element.json"),download:"custom-form-element.json"},"download this demo workflow")," ","that registers and displays the custom form element."))),Object(r.b)(c.a,{defaultValue:"ui",values:[{label:"UI",value:"ui"},{label:"App Config",value:"config"},{label:"Layout",value:"layout"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(r.b)("img",{src:Object(i.a)("img/workflow-mobile-custom-form-element-basic.png")})),Object(r.b)(s.a,{value:"config",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "workflow",\n            "id": "custom-workflow",\n            "title": "Custom Workflow",\n            "target": "#taskbar",\n            // highlight-next-line\n            "url": "resource://custom-form-component-workflow.json"\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Run Custom Workflow",\n                    "isEnabled": true,\n                    "iconId": "workflow",\n                    "action": {\n                        "name": "workflow.run",\n                        "arguments": {\n                            "id": "custom-workflow"\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n}\n'))),Object(r.b)(s.a,{value:"layout",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/layout.xml"',title:'"App1/App1/layout.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerFramework/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n    \x3c!-- Taskbar main content --\x3e\n    <map id="page1-map1" slot="main">\n      <stack margin="0.8" slot="top-right" halign="end">\n        <iwtm config="iwtm" id="IWTM">\n          <user slot="bottom"/>\n        </iwtm>\n      </stack>\n    </map>\n  </gxm:taskbar>\n</layout>\n')))),Object(r.b)("h2",{id:"example-enhanced-activity-indicator-form-element"},"Example: Enhanced Activity Indicator Form Element"),Object(r.b)("p",null,"This example demonstrates a form element that displays an enhanced activity indicator. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomFormComponent"}),"Check it out")," in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-samples"}),"Geocortex Mobile SDK Samples"),"."),Object(r.b)(c.a,{defaultValue:"custom-form-element",values:[{label:"Custom Form Element",value:"custom-form-element"},{label:"Form Element Registration Activity",value:"form-element-registration"},{label:"IActivityHandlerFactor",value:"activity-loader"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"custom-form-element",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),"using Geocortex.Mobile.Infrastructure.UI;\nusing Geocortex.Workflow.Forms.Components;\n\nnamespace App1.Workflow\n{\n    class EnhancedActivityIndicatorElement : FormComponent\n    {\n        private readonly EnhancedActivityIndicator _view;\n\n        public EnhancedActivityIndicatorElement(Geocortex.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base (element, name)\n        {\n            _view = new EnhancedActivityIndicator()\n            {\n                IsRunning = true,\n                HeightRequest = 75,\n                WidthRequest = 75,\n                Margin = 10\n            };\n\n            Add(new GenericComponent(_view));\n        }\n\n        public override void Render()\n        {\n            base.Render();\n            _view.IsEnabled = IsEnabled;\n        }\n    }\n}\n"))),Object(r.b)(s.a,{value:"form-element-registration",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using Geocortex.Workflow.Runtime;\nusing Geocortex.Workflow.Runtime.Activities.App;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow\n{\n    class FormElementRegistrationActivity : RegisterCustomFormElementBase\n    {\n        public static string Action { get; } = "your:unique:namespace::FormElementRegistrationActivity";\n\n        public override Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            IDictionary<string, object> result = new Dictionary<string, object>();\n            Register("EnhancedActivityIndicatorElement", typeof(EnhancedActivityIndicatorElement), context);\n            return Task.FromResult(result);\n        }\n    }\n}\n'))),Object(r.b)(s.a,{value:"activity-loader",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using System;\nusing System.Collections.Generic;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing App1.Workflow;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Workflow.Runtime;\nusing Geocortex.Workflow.Runtime.Definition;\nusing Geocortex.Workflow.Runtime.Execution;\n\n[assembly: Export(typeof(ActivityLoader), SingleInstance = true, AsImplementedInterfaces = true)]\nnamespace App1.Workflow\n{\n    public class ActivityLoader : IActivityHandlerFactory\n    {\n        /// <summary>\n        /// Gets a mapping of action names to implementations of <see cref="IActivityHandler"/>s.\n        /// </summary>\n        private Dictionary<string, Func<IActivityHandler>> RegisteredActivities { get; } = new Dictionary<string, Func<IActivityHandler>>();\n\n        public ActivityLoader()\n        {\n            RegisteredActivities[FormElementRegistrationActivity.Action] = () => new FormElementRegistrationActivity();\n        }\n\n        /// <summary>\n        /// Creates an <see cref="IActivityHandler"/>.\n        /// </summary>\n        /// <param name="action">The name of the action to create.</param>\n        /// <param name="token">The cancellation token.</param>\n        /// <param name="inspector">The <see cref="ProgramInspector"/> for the program.</param>\n        /// <returns>The activity handler for the given action.</returns>\n        public Task<IActivityHandler> Create(string action, CancellationToken token, ProgramInspector inspector = null)\n        {\n            if (action == null || token.IsCancellationRequested)\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n\n            if (RegisteredActivities.TryGetValue(action, out Func<IActivityHandler> handlerType))\n            {\n                return Task.FromResult(handlerType());\n            }\n            else\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n        }\n    }\n}\n'))),Object(r.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(r.b)("img",{src:Object(i.a)("img/workflow-mobile-custom-form-element-activity-indicator.png")}))),Object(r.b)("h2",{id:"raising-form-events"},"Raising Form Events"),Object(r.b)("p",null,"Built-in Geocortex Workflow Form elements can raise ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/forms.htm#Events%3FTocPath%3DForms%7COverview%2520of%2520Forms%7CEvents%7C_____0"}),"events"),". A custom form element can also raise events, including a custom event type."),Object(r.b)("h3",{id:"example-custom-form-element-that-raises-events"},"Example: Custom Form Element that Raises Events"),Object(r.b)("p",null,"The follow custom form element demonstrates how various form events can be raised."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using Geocortex.Workflow.Forms.Components;\nusing Xamarin.Forms;\n\nnamespace App1.Workflow\n{\n    class RaisingEventsFormComponent : FormComponent\n    {\n        private readonly View _view;\n\n        public RaisingEventsFormComponent(Geocortex.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base (element, name)\n        {\n            var layout = new StackLayout();\n            layout.Children.Add(new Button() {\n                Text = "Raise Click",\n                Command = new Command(() =>\n                {\n                    OnEventRaised(new Geocortex.Workflow.Runtime.Forms.Event()\n                    {\n                        Value = "OnClick Event button",\n                        Type = Geocortex.Workflow.Runtime.Forms.Event.CLICKED\n                    });\n                })\n            });\n\n            layout.Children.Add(new Button()\n            {\n                Text = "Raise Changed",\n                Command = new Command(() =>\n                {\n                    OnEventRaised(new Geocortex.Workflow.Runtime.Forms.Event()\n                    {\n                        Value = "OnChange Event button",\n                        Type = Geocortex.Workflow.Runtime.Forms.Event.CHANGED\n                    });\n                })\n            });\n\n            layout.Children.Add(new Button()\n            {\n                Text = "Raise Custom",\n                Command = new Command(() =>\n                {\n                    OnEventRaised(new Geocortex.Workflow.Runtime.Forms.Event()\n                    {\n                        Type = Geocortex.Workflow.Runtime.Forms.Event.CUSTOM\n                    });\n                })\n            });\n\n            _view = layout;\n\n            Add(new GenericComponent(_view));\n        }\n\n        public override void Render()\n        {\n            base.Render();\n            _view.IsEnabled = IsEnabled;\n        }\n    }\n}\n')),Object(r.b)("h2",{id:"get-properties-of-custom-form-elements-at-runtime"},"Get Properties of Custom Form Elements at Runtime"),Object(r.b)("p",null,"A custom form element may produce a value that a workflow needs to access at runtime. You can set a property on the ",Object(r.b)("inlineCode",{parentName:"p"},"props.element")," object to expose that value to the form."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'class CustomFormElement : FormComponent\n{\n    ...\n    public CustomFormElement(Geocortex.Workflow.Runtime.Definition.Forms.Element element, string name)\n            : base (element, name)\n    {\n        var layout = new Button()\n        {\n            Text = "Set Form Element Value",\n            Command = new Command(() =>\n            {\n                this.Element.Value = "Some Output Value";\n            })\n        };\n\n        _view = layout;\n\n        Add(new GenericComponent(_view));\n    }\n    ...\n}\n')),Object(r.b)("p",null,"You can then use an ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/expressions.htm"}),"expression")," in Geocortex Workflow Designer to access the custom property of the form element. For example, to access the ",Object(r.b)("inlineCode",{parentName:"p"},"value")," property you can use an expression like ",Object(r.b)("inlineCode",{parentName:"p"},"=$form1.state.custom1.value"),"."),Object(r.b)("h2",{id:"relevant-sdk-sample"},"Relevant SDK Sample"),Object(r.b)("p",null,"Check out the relevant Geocortex Mobile SDK Sample:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomFormComponent"}),"Custom Workflow Form Element"))))}d.isMDXComponent=!0},254:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(n),b=o,d=p["".concat(i,".").concat(b)]||p[b]||u[b]||r;return n?a.a.createElement(d,c({ref:t},l,{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},255:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var i=a.apply(null,o);i&&e.push(i)}else if("object"===r)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},262:function(e,t,n){"use strict";var o=n(0),a=n(51);t.a=function(){return Object(o.useContext)(a.a)}},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(267);var o=n(262);function a(e){var t=(Object(o.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},264:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},265:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}},266:function(e,t,n){"use strict";n(27),n(21),n(22);var o=n(0),a=n.n(o),r=n(264);var i=function(){return Object(o.useContext)(r.a)},c=n(255),s=n.n(c),l=n(132),m=n.n(l),p=37,u=39;t.a=function(e){var t=e.block,n=e.children,r=e.defaultValue,c=e.values,l=e.groupId,b=i(),d=b.tabGroupChoices,f=b.setTabGroupChoices,v=Object(o.useState)(r),h=v[0],g=v[1];if(null!=l){var w=d[l];null!=w&&w!==h&&g(w)}var j=function(e){g(e),null!=l&&f(l,e)},O=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===t,className:s()("tab-item",m.a.tabItem,{"tab-item--active":h===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},267:function(e,t,n){"use strict";var o=n(12),a=n(28),r=n(268),i="".startsWith;o(o.P+o.F*n(269)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return i?i.call(t,o,n):t.slice(n,n+o.length)===o}})},268:function(e,t,n){var o=n(75),a=n(26);e.exports=function(e,t,n){if(o(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},269:function(e,t,n){var o=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);