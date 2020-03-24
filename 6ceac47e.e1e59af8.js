/*! For license information please see 6ceac47e.e1e59af8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21,9,25],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(1),i=n(9),o=(n(0),n(186)),r={},s={id:"mobile/snippets/prereqs",title:"prereqs",description:"## Prerequisites",source:"@site/docs/mobile/snippets/prereqs.mdx",permalink:"/dev-center/docs/mobile/snippets/prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/prereqs.mdx"},c=[{value:"Prerequisites",id:"prerequisites",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Download the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start"}),"Quick Start")," application and open it in Visual Studio."))}l.isMDXComponent=!0},129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(1),i=n(9),o=(n(0),n(186)),r={},s={id:"mobile/snippets/autofac",title:"autofac",description:":::note",source:"@site/docs/mobile/snippets/autofac.mdx",permalink:"/dev-center/docs/mobile/snippets/autofac",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/autofac.mdx"},c=[],p={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Geocortex Mobile uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://autofaccn.readthedocs.io/en/latest/index.html"}),"autofac")," to register, locate, and inject components and services. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/dependency-injection"}),"dependency injection")," for more info."))))}l.isMDXComponent=!0},159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return g}));var a=n(1),i=n(9),o=(n(0),n(186)),r=n(193),s=n(197),c=n(198),p=n(204),l=n(129),m=n(126),u={title:"Custom Event",description:"Geocortex Mobile - Learn how to implement a custom event"},b={id:"mobile/implement-event",title:"Custom Event",description:"Geocortex Mobile - Learn how to implement a custom event",source:"@site/docs/mobile/implement-event.mdx",permalink:"/dev-center/docs/mobile/implement-event",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/implement-event.mdx",sidebar:"mobile",previous:{title:"Custom Service",permalink:"/dev-center/docs/mobile/implement-service"},next:{title:"Key Concepts",permalink:"/dev-center/docs/mobile/concepts-key-concepts"}},d=[{value:"Create Skeleton Events Container",id:"create-skeleton-events-container",children:[]},{value:"Defining an Event",id:"defining-an-event",children:[]},{value:"Using the Event",id:"using-the-event",children:[]}],v={rightToc:d};function g(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Geocortex Mobile has many built in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-events"}),"Events")," that can be used to hook into various changes that occur in the application. Check out the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/api-events"}),"Events API")," to see if the event you need already exists."))),Object(o.b)("p",null,"This article will walk you through implementing a custom event in Geocortex Mobile that runs every five seconds."),Object(o.b)(m.default,{mdxType:"PrereqsSnippet"}),Object(o.b)("h2",{id:"create-skeleton-events-container"},"Create Skeleton Events Container"),Object(o.b)("p",null,"Create a new file ",Object(o.b)("inlineCode",{parentName:"p"},"Events\\CustomEvents")," in the platform agnostic project.\nAdd a new class ",Object(o.b)("inlineCode",{parentName:"p"},"CustomEvents")," that implement Mobile's ",Object(o.b)("inlineCode",{parentName:"p"},"EventsBase")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"using App1.Events;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Messaging;\nusing Geocortex.Mobile.Infrastructure.Messaging;\n\n[assembly: Export(typeof(CustomEvents), SingleInstance = true, AsImplementedInterfaces = false, AsSelf = true, PropertiesAutowired = true)]\nnamespace App1.Events\n{\n    public class CustomEvents : EventsBase\n    {\n        public CustomEvents(IEventRegistry eventRegistry)\n            : base(eventRegistry)\n        {\n        }\n    }\n}\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The two key components of this snippet are the ",Object(o.b)("inlineCode",{parentName:"p"},"[assembly: Export(typeof(CustomEvents), SingleInstance = true, ...")," tag and the class extension ",Object(o.b)("inlineCode",{parentName:"p"},"AlertService: EventsBase"),". These two pieces register the class with Geocortex Mobile and allow it to be injected with ",Object(o.b)("strong",{parentName:"p"},"autofac")))),Object(o.b)(l.default,{mdxType:"AutofacSnippet"}),Object(o.b)("h2",{id:"defining-an-event"},"Defining an Event"),Object(o.b)("p",null,"Event definitions live in classes that subclass ",Object(o.b)("inlineCode",{parentName:"p"},"EventsBase"),", like ",Object(o.b)("inlineCode",{parentName:"p"},"CustomEvents"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'public class CustomEvents : EventsBase\n{\n    public IEvent IntervalEvent => GetEvent("custom.interval-event");\n\n    public CustomEvents(IEventRegistry eventRegistry)\n        : base(eventRegistry)\n    {\n    }\n}\n')),Object(o.b)("p",null,"Events can either have no arguments, simple arguments, or a complex type argument. The type of argument will be the type of the object passed to subscribers."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"No Argument")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'public IEvent IntervalEvent => GetEvent("custom.interval-event");\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Simple Argument")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'public IEvent<string> MessageReceivedEvent => GetEvent<string>("chat.message-received");\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Complex Argument")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'public IEvent<SecurityCameraArgs> IntruderDetectedEvent => GetEvent<SecurityCameraArgs>("security.intruder-detected");\n')),Object(o.b)("h2",{id:"using-the-event"},"Using the Event"),Object(o.b)("p",null,"Since the ",Object(o.b)("inlineCode",{parentName:"p"},"CustomEvents")," class was registered with autofac as a singleton, any other component, service, or view that injects it can publish or subscribe to the event. The example below but demonstrates how events could be used to tell views and services that rely on shared data that it has changed."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-component-with-ui"}),"Implementing Custom Components")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/implement-service"}),"Implementing a Custom Background Service")," before diving into this example"))),Object(o.b)(s.a,{defaultValue:"events",values:[{label:"Events Container",value:"events"},{label:"Component (Publisher)",value:"component"},{label:"View - XAML",value:"view"},{label:"View - Code Behind (Subscriber)",value:"code-behind"},{label:"Service (Subscriber)",value:"service"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"events",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'using App1.Events;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Messaging;\nusing Geocortex.Mobile.Infrastructure.Messaging;\n\n[assembly: Export(typeof(CustomDataSourceEvents), SingleInstance = true, AsImplementedInterfaces = false, AsSelf = true, PropertiesAutowired = true)]\nnamespace App1.Events\n{\n    public class CustomDataSourceEvents : EventsBase\n    {\n        public IEvent<DataSourceChangedArgs> Changed => GetEvent<DataSourceChangedArgs>("custom-data.changed");\n\n        public CustomDataSourceEvents(IEventRegistry eventRegistry)\n            : base(eventRegistry)\n        {\n        }\n    }\n\n    public class DataSourceChangedArgs : EventArgsBase\n    {\n        public int OldData { get; set; }\n        public int NewData { get; set; }\n    }\n}\n'))),Object(o.b)(c.a,{value:"component",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'using App1;\nusing App1.Components;\nusing App1.Events;\nusing App1.Views;\nusing Geocortex.Mobile.Composition.Layout;\nusing System;\nusing System.Threading;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(CustomUIComponent), "custom-ui-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    internal class CustomUIComponent : ComponentBase\n    {\n        private int data = 100;\n        private View _view;\n        private Timer _timer;\n        public CustomUIComponent(CustomUIComponentView customUIComponentView, CustomDataSourceEvents customDataSourceEvents)\n        {\n            _view = customUIComponentView;\n\n            // fake the data being changed every second. This event could actually be powered by a data stream, or web hook, etc\n            _timer = new Timer((e) =>\n            {\n                int oldData = data;\n                data += 1;\n                customDataSourceEvents.Changed.Publish(new DataSourceChangedArgs()\n                {\n                    OldData = oldData,\n                    NewData = data\n                });\n\n            }, null, TimeSpan.FromSeconds(1), TimeSpan.FromSeconds(1));\n        }\n\n        protected override VisualElement Create(XNode node)\n        {\n            return _view;\n        }\n    }\n}\n'))),Object(o.b)(c.a,{value:"view",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<ContentView xmlns="http://xamarin.com/schemas/2014/forms"\n             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"\n             xmlns:d="http://xamarin.com/schemas/2014/forms/design"\n             xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"\n             mc:Ignorable="d"\n             x:Class="App1.Views.CustomUIComponentView">\n  <ContentView.Content>\n        <StackLayout Orientation="Horizontal">\n            <Label Text="{Binding DisplayString}" FontSize="Medium" />\n      </StackLayout>\n  </ContentView.Content>\n</ContentView>\n'))),Object(o.b)(c.a,{value:"code-behind",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'using App1.Events;\nusing App1.Views;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Messaging;\nusing Geocortex.Mobile.Composition.Utilities;\nusing System;\nusing System.Collections.Generic;\nusing System.ComponentModel;\nusing Xamarin.Forms;\nusing Xamarin.Forms.Xaml;\n\n[assembly: View(typeof(CustomUIComponentView))]\nnamespace App1.Views\n{\n    [XamlCompilation(XamlCompilationOptions.Compile)]\n    public partial class CustomUIComponentView : ContentView, INotifyPropertyChanged, IDisposable, IDisposableTracker\n    {\n        private IList<IDisposable> _disposables = new List<IDisposable>();\n        private int _currentData = 0;\n\n        public string DisplayString => $"Current data is {_currentData}";\n\n        public CustomUIComponentView(CustomDataSourceEvents customDataSourceEvents)\n        {\n            BindingContext = this;\n            InitializeComponent();\n\n            customDataSourceEvents.Changed.Subscribe(CustomDataSourceChanged, this);\n        }\n\n        private void CustomDataSourceChanged(DataSourceChangedArgs args)\n        {\n            _currentData = args.NewData;\n            OnPropertyChanged(nameof(DisplayString));\n        }\n\n        public IList<IDisposable> Disposables => _disposables;\n\n        public void Dispose()\n        {\n            Dispose(true);\n            GC.SuppressFinalize(this);\n        }\n\n        protected virtual void Dispose(bool disposing)\n        {\n            if (disposing)\n            {\n                this.DisposeTrackers();\n            }\n        }\n    }\n}\n'))),Object(o.b)(c.a,{value:"service",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'using App1.Events;\nusing App1.Services;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Logging;\nusing Geocortex.Mobile.Composition.Messaging;\nusing Geocortex.Mobile.Composition.Services;\nusing System.Threading.Tasks;\n\n[assembly: Service(typeof(CustomBackgroundService), PropertiesAutowired = true)]\nnamespace App1.Services\n{\n    public class CustomBackgroundService : ServiceBase\n    {\n        private CustomDataSourceEvents _customDataSourceEvents;\n        public CustomBackgroundService(CustomDataSourceEvents customDataSourceEvents)\n        {\n            _customDataSourceEvents = customDataSourceEvents;\n        }\n        protected override Task DoInitialize()\n        {\n            _customDataSourceEvents.Changed.Subscribe(OnDataSourceChanged, this);\n            return Task.CompletedTask;\n        }\n\n        private void OnDataSourceChanged(DataSourceChangedArgs args)\n        {\n            this.DoSomeAction(args.NewData);\n        }\n\n        public void DoSomeAction(int newData)\n        {\n            Logger.Info($"This is where you would do some action with the new Data: {newData}");\n        }\n    }\n}\n'))),Object(o.b)(c.a,{value:"ui",mdxType:"TabItem"},Object(o.b)(p.a,{src:Object(r.a)("video/event-timer.webm"),mdxType:"DemoVideo"}))),Object(o.b)("p",null,"::important\nOne thing to note about this example is the use of ",Object(o.b)("inlineCode",{parentName:"p"},"IDisposable")," and ",Object(o.b)("inlineCode",{parentName:"p"},"IDisposableTracker")," to clean up event handlers in the View code behind and Service. Implementing these interfaces correctly is essentially to preventing ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dev-center/docs/mobile/memory-leaks"}),"Memory Leaks in your Mobile Application"),"."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}))))}g.isMDXComponent=!0},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},m=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),b=a,d=m["".concat(r,".").concat(b)]||m[b]||u[b]||o;return n?i.a.createElement(d,s({ref:t},p,{components:n})):i.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},187:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var r=i.apply(null,a);r&&e.push(r)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},188:function(e,t,n){"use strict";var a=n(0),i=n(50);t.a=function(){return Object(a.useContext)(i.a)}},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(194);var a=n(188);function i(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},194:function(e,t,n){"use strict";var a=n(17),i=n(36),o=n(195),r="".startsWith;a(a.P+a.F*n(196)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return r?r.call(t,a,n):t.slice(n,n+a.length)===a}})},195:function(e,t,n){var a=n(69),i=n(23);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},196:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(i){}}return!0}},197:function(e,t,n){"use strict";n(24),n(19),n(20);var a=n(0),i=n.n(a),o=n(187),r=n.n(o),s=n(131),c=n.n(s),p=37,l=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,s=e.values,m=Object(a.useState)(o),u=m[0],b=m[1],d=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:r()("tabs",{"tabs--block":t})},s.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:r()("tab-item",c.a.tabItem,{"tab-item--active":u===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return b(t)},onClick:function(){return b(t)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===u}))[0]))}},198:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),i=n.n(a);function o(e){var t=e.src;return i.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},i.a.createElement("source",{src:t,type:"video/webm"}),"Your browser does not support the video tag.")}}}]);