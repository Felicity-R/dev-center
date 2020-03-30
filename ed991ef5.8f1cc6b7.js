/*! For license information please see ed991ef5.8f1cc6b7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{199:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(1),i=a(9),o=(a(0),a(210)),c=a(217),r=a(214),l=a(215),s={title:"Layout",description:"Geocortex Mobile - Learn about layout concepts"},p={id:"mobile/concepts-layout",title:"Layout",description:"Geocortex Mobile - Learn about layout concepts",source:"@site/docs/mobile/concepts-layout.mdx",permalink:"/dev-center/docs/mobile/concepts-layout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/concepts-layout.mdx",sidebar:"mobile",previous:{title:"Key Concepts",permalink:"/dev-center/docs/mobile/concepts-key-concepts"},next:{title:"App Config",permalink:"/dev-center/docs/mobile/concepts-app-config"}},b=[{value:"Slotting",id:"slotting",children:[]},{value:"Stacks and Splits",id:"stacks-and-splits",children:[]},{value:"Panels",id:"panels",children:[]},{value:"Device Form factors",id:"device-form-factors",children:[{value:"Fallback Layouts",id:"fallback-layouts",children:[]}]},{value:"Next Steps: Components and App Config",id:"next-steps-components-and-app-config",children:[]}],m={rightToc:b};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Before learning about layout...")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check out the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-key-concepts"}),"Key Concepts"),"."))),Object(o.b)("p",null,"A layout consists of declaritive XML that defines an applications visual structure and data sources. Think of it as the blueprints on which a Geocortex Mobile Application is built."),Object(o.b)("p",null,"Take this example of a layout with a map and a compass."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <map id="myMap">\n        <compass padding="0.5"/>\n    </map>\n</layout>\n')),Object(o.b)("p",null,'The first thing it does is declare a map that is linked to "default" configuration that specifies what content to load.\nNext, a compass is embedded within the map. This does two things:'),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Visually places the element inside the map"),Object(o.b)("li",{parentName:"ol"},"Tells the compass to display a value ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/dev-center/docs/mobile/concepts-advanced-layout#implicit-binding"}),"corresponding to the map it is placed in"))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Want to follow along?")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check out the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start"}),"Quick Start")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start#editing-the-layout-and-app-config"}),"edit the default app layout"),"."))),Object(o.b)("p",null,"The basic example shown above will place a compass inside a map. But what if you want the compass to be in the top right corner? At the bottom center of the map? How does the map know where to place it?"),Object(o.b)("h2",{id:"slotting"},"Slotting"),Object(o.b)("p",null,"The position of a component within it's parent is controlled by what slot it is placed into."),Object(o.b)("p",null,"For example, this configuration will place the compass in the top right of the map."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <map id="myMap">\n        <compass padding="0.5" slot="top-right"/>\n    </map>\n</layout>\n')),Object(o.b)("p",null,"If a slot configuration is not given, the component will slot itself into a default position. Each component defines it's own slots - not every slot will work for every component."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start"}),"Quick Start")," comes with a schema for ",Object(o.b)("inlineCode",{parentName:"p"},"layout.xml")," which can ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-center/docs/mobile/concepts-advanced-layout#autocomplete-properties"}),"autocomplete slot values for a component")))),Object(o.b)("p",null,"Slots control how one element fits into another. But how do we control how sibling elements position themselves? The answer is stacks and splits."),Object(o.b)("h2",{id:"stacks-and-splits"},"Stacks and Splits"),Object(o.b)("p",null,"The basic ",Object(o.b)("inlineCode",{parentName:"p"},"stack")," and ",Object(o.b)("inlineCode",{parentName:"p"},"split")," components form building blocks that layout authors can use to vertically or horizontally partition components and blocks of rich text to form simple and complex user interfaces alike."),Object(o.b)("p",null,"Leveraging these simple primitives correctly also means responsive apps that work on various screen sizes."),Object(o.b)("p",null,"Stacks and splits are used to partition the viewer into rectangular sectors, each filled with whichever components you desire."),Object(o.b)("p",null,"The best way to think of stacks is that every item within them is being ordered top to bottom:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<stack>\n    <text text="item1"/>\n    <text text="item2"/>\n    <text text="item3"/>\n</stack>\n')),Object(o.b)("img",{className:"stackSplitImage",src:Object(c.a)("img/stack-split-1.png")}),Object(o.b)("p",null,"The best way to think of splits is that every item within them is being ordered left to right:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<split>\n    <text text="item1"/>\n    <text text="item2"/>\n    <text text="item3"/>\n</split>\n')),Object(o.b)("img",{className:"stackSplitImage",src:Object(c.a)("img/stack-split-2.png")}),Object(o.b)("p",null,"When creating complex layouts with embedded stacks and splits, it's good to picture building it from the inside out:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<stack>\n    <split>\n        <text text="item1"/>\n        <stack>\n            <text text="item2"/>\n            <text text="item3"/>\n        </stack>\n    </split>\n    <split>\n        <text text="item4"/>\n        <text text="item5"/>\n        <text text="item6"/>\n    </split>\n</stack>\n')),Object(o.b)("p",null,"We start by building the first inner-most stack:"),Object(o.b)("img",{className:"stackSplitImage",src:Object(c.a)("img/stack-split-4.png")}),Object(o.b)("p",null,"Then slot that into the split one level up:"),Object(o.b)("img",{className:"stackSplitImage",src:Object(c.a)("img/stack-split-5.png")}),Object(o.b)("p",null,"We then build the next split:"),Object(o.b)("img",{className:"stackSplitImage",src:Object(c.a)("img/stack-split-6.png")}),Object(o.b)("p",null,"And finally slot those two splits into the outer-most stack:"),Object(o.b)("img",{className:"stackSplitImage",src:Object(c.a)("img/stack-split-3.png")}),Object(o.b)("h2",{id:"panels"},"Panels"),Object(o.b)("p",null,"Another core concept that Geocortex Mobile uses to organize elements in a layout is ",Object(o.b)("strong",{parentName:"p"},"panels"),".\nPanels are a container component that enable hierarchal navigation between different components."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<panel id="search-panel">\n    <stack id="search">\n        <search config="search"/>\n        <results-list config="results" active="false" />\n    </stack>\n    <feature-details config="feature-details"/>\n</panel>\n')),Object(o.b)("p",null,"This ",Object(o.b)("inlineCode",{parentName:"p"},"search-panel")," has two root components:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A stack containing a ",Object(o.b)("inlineCode",{parentName:"li"},"<search>")," and a ",Object(o.b)("inlineCode",{parentName:"li"},"<results-list>")),Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"<feature-details>"))),Object(o.b)("p",null,"When you first open the panel, the first component in the panel that is not explicity set to ",Object(o.b)("inlineCode",{parentName:"p"},'active="false"')," is activated. In this example, it's the ",Object(o.b)("inlineCode",{parentName:"p"},"<search>")," component.\nThe search component will activate the ",Object(o.b)("inlineCode",{parentName:"p"},"<results-list>")," component when a search is completed. Then, when a feature in the results list is opened, the ",Object(o.b)("inlineCode",{parentName:"p"},"<feature-details>"),' component will be activated. At this point, the panel takes over activation of the component. It will display the new component overtop of the existing visible component, and provide a back button to navigate to the previous component. The activation and deactivation algorithms for a panel rely on the concept of a "stack" of components laid on top of eachother, and work as follows;'),Object(o.b)("h4",{id:"activation"},"Activation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the component is in the current navigation stack, then pop from the stack until that component is active",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Else, push the component onto the stack and navigate to it")))),Object(o.b)("h4",{id:"deactivation"},"Deactivation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the component is the top most element in the navigation stack (it is active), then pop it",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Else, the component is already inactive")))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The default ",Object(o.b)("inlineCode",{parentName:"p"},"layout-large.xml")," in the Geocortex Mobile ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start"}),"quick start")," has examples of multiple panels that live in the taskbar."))),Object(o.b)("h2",{id:"device-form-factors"},"Device Form factors"),Object(o.b)("p",null,"Geocortex Mobile has built in support for loading different layouts depending on the form factor of the target device. The three possible form factors are 'small', 'medium', and 'large'. The 'large' layout is intended to target UWP devices, the 'medium' layout is intended to target tablet devices, and the 'small' layout is intended to target phone devices. All three of these layouts are intended to target the same app config, allowing config to be shared when appropiate."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The Geocortex Mobile SDK ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-center/docs/mobile/quick-start"}),"quick start")," includes a large and small layout."))),Object(o.b)("p",null,"In order for the correct layout to be loaded for the correct form factor, the layout needs to be loaded by the app config."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": [ "mobile", "large" ]\n        },\n        {\n            "$type": "layout",\n            "id": "tablet-layout",\n            "url": "resource://layout-medium.xml",\n            "tags": [ "mobile", "medium" ]\n        },\n        ...\n    ]\n}\n')),Object(o.b)("p",null,"This app config will load a large layout for a desktop device, and a medium layout for a tablet device."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ","[quick start]","(Quick Start) does not ship with a medium layout configured. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/dev-center/docs/mobile/add-medium-layout"}),"Add Medium Layout")," for instructions on how to do this."))),Object(o.b)("h3",{id:"fallback-layouts"},"Fallback Layouts"),Object(o.b)("p",null,"If a layout that matches the device form factor is not available, then Geocortex Mobile will attempt to load the layout with the most similar form factor. For the example above, if Geocortex Mobile was loaded on a phone device, ",Object(o.b)("inlineCode",{parentName:"p"},"layout-medium.xml")," would be loaded, as it is the closest form factor to small. If the medium layout was also missing, ",Object(o.b)("inlineCode",{parentName:"p"},"layout-large.xml")," would be loaded instead, and vice versa."),Object(o.b)("h2",{id:"next-steps-components-and-app-config"},"Next Steps: Components and App Config"),Object(o.b)("p",null,"In our examples so far, xml elements like ",Object(o.b)("inlineCode",{parentName:"p"},"<text>")," or ",Object(o.b)("inlineCode",{parentName:"p"},"<stack>")," have been used. Each of these xml elements corresponds to a Component in Mobile. Each component has it's own configuration, such as the ",Object(o.b)("inlineCode",{parentName:"p"},"text")," property for ",Object(o.b)("inlineCode",{parentName:"p"},"<text>")," elements. Most components have required configuration, and this configuration is defined in an App, specifically, in the ",Object(o.b)("inlineCode",{parentName:"p"},"app.json")," file. This allows a separation of the visual structure of how components appear in the viewer, and the functional content these components host. Combining layouts with app configuration allows you to create powerful flexible applications with different layouts for different form factors or use cases."),Object(o.b)(l.a,{mdxType:"UseCaseContainer"},Object(o.b)(r.a,{title:"App Config",description:"Learn about app configuration and it's interaction with layout.",link:"concepts-app-config",mdxType:"UseCaseCard"}),Object(o.b)(r.a,{title:"Advanced Layout Topics",description:"Learn more about what you can accomplish with layouts.",link:"concepts-advanced-layout",mdxType:"UseCaseCard"})))}d.isMDXComponent=!0},210:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,u=b["".concat(c,".").concat(d)]||b[d]||m[d]||o;return a?i.a.createElement(u,r({ref:t},s,{components:a})):i.a.createElement(u,r({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var s=2;s<o;s++)c[s]=a[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},211:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=i.apply(null,n);c&&e.push(c)}else if("object"===o)for(var r in n)a.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},212:function(e,t,a){"use strict";a(213)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},213:function(e,t,a){var n=a(17),i=a(18),o=a(23),c=/"/g,r=function(e,t,a,n){var i=String(o(e)),r="<"+t;return""!==a&&(r+=" "+a+'="'+String(n).replace(c,"&quot;")+'"'),r+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(r),n(n.P+n.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},214:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(212);var n=a(0),i=a.n(n),o=a(211),c=a.n(o),r=a(125),l=a.n(r);function s(e){var t=e.title,a=e.description,n=e.link;return i.a.createElement("div",{className:c()("card-demo",l.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,a)),i.a.createElement("div",{className:"card__footer"},i.a.createElement("a",{className:"button button--secondary button--block",href:n},"Get Started"))))}},215:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),i=a.n(n),o=a(211),c=a.n(o),r=a(126),l=a.n(r);function s(e){var t=e.children;return i.a.createElement("div",{className:c()(l.a.root)},t)}},216:function(e,t,a){"use strict";var n=a(0),i=a(50);t.a=function(){return Object(n.useContext)(i.a)}},217:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(220);var n=a(216);function i(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},220:function(e,t,a){"use strict";var n=a(17),i=a(36),o=a(221),c="".startsWith;n(n.P+n.F*a(222)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),a=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,a):t.slice(a,a+n.length)===n}})},221:function(e,t,a){var n=a(69),i=a(23);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(i(e))}},222:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(i){}}return!0}}}]);