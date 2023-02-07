"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8206],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=r.createContext({}),p=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=l,k=u["".concat(m,".").concat(h)]||u[h]||c[h]||n;return a?r.createElement(k,o(o({ref:t},s),{},{components:a})):r.createElement(k,o({ref:t},s))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9147:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(7462),l=(a(7294),a(3905));const n={id:"Documentation",title:"LLazyEmail Documentation",sidebar_label:"Documentation, Main project, Markdown-regex module"},o=void 0,i={unversionedId:"generator/test/Documentation",id:"generator/test/Documentation",title:"LLazyEmail Documentation",description:"Hi there \ud83d\udc4b",source:"@site/docs/generator/test/LLazyEmail Documentation.md",sourceDirName:"generator/test",slug:"/generator/test/Documentation",permalink:"/documentation/docs/generator/test/Documentation",draft:!1,editUrl:"https://github.com/LLazyEmail/documentation/tree/main/docs/generator/test/LLazyEmail Documentation.md",tags:[],version:"current",frontMatter:{id:"Documentation",title:"LLazyEmail Documentation",sidebar_label:"Documentation, Main project, Markdown-regex module"},sidebar:"tutorialSidebar",previous:{title:"ifferent tasks",permalink:"/documentation/docs/generator/organized-tasks"},next:{title:"errors",permalink:"/documentation/docs/generator/test/errors"}},m={},p=[{value:"Hi there \ud83d\udc4b",id:"hi-there-",level:2},{value:"Documentation: LLazyEmail Documentation",id:"documentation-llazyemail-documentation",level:3},{value:"Main project",id:"main-project",level:2},{value:"Generator Module",id:"generator-module",level:3},{value:"Markdown-regex module",id:"markdown-regex-module",level:2},{value:"Plain JS Template aka <code>atherdon-old-newsletter-js-outertemplate</code>",id:"plain-js-template-aka-atherdon-old-newsletter-js-outertemplate",level:3},{value:"<code>React DOM</code> Template",id:"react-dom-template",level:3},{value:"Factory object for Display Classes",id:"factory-object-for-display-classes",level:3},{value:"Example repository for cloning",id:"example-repository-for-cloning",level:3},{value:"React One Template",id:"react-one-template",level:3},{value:"React Design System",id:"react-design-system",level:3},{value:"Cool projects to see",id:"cool-projects-to-see",level:3},{value:"Arthur Tkachenko articles",id:"arthur-tkachenko-articles",level:3},{value:"Awesome-email-marketing",id:"awesome-email-marketing",level:2},{value:"Linkedin page of LLazyEmail",id:"linkedin-page-of-llazyemail",level:2}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"hi-there-"},"Hi there \ud83d\udc4b"),(0,l.kt)("h3",{id:"documentation-llazyemail-documentation"},"Documentation: ",(0,l.kt)("a",{parentName:"h3",href:"https://llazyemail.github.io/documentation/"},"LLazyEmail Documentation")),(0,l.kt)("p",null,"Email Generator Template Universe"),(0,l.kt)("h2",{id:"main-project"},"Main project"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/markdown-to-email"},"Markdown-to-email")),(0,l.kt)("p",null,"Modules for Markdown-to-Email project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"atherdon-callbacks": "^1.10.0",\n"atherdon-newsletter-html-replacer": "^0.4.0",\n"atherdon-newsletter-js-layouts": "^1.5.1",\n"atherdon-newsletter-react": "^1.0.11",\n"atherdon-newsletter-react-replacer": "^0.4.0",\n"atherdon-old-newsletter-js-outertemplate": "^2.4.0",\n"markup-generator": "^0.4.0",\n')),(0,l.kt)("h3",{id:"generator-module"},"Generator Module"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/generator-markdown-to-html"},"Generator-markdown-to-html")),(0,l.kt)("h2",{id:"markdown-regex-module"},"Markdown-regex module"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/markdown-regex"},"Markdown-regex")),(0,l.kt)("h3",{id:"plain-js-template-aka-atherdon-old-newsletter-js-outertemplate"},"Plain JS Template aka ",(0,l.kt)("inlineCode",{parentName:"h3"},"atherdon-old-newsletter-js-outertemplate")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/_trying-lit"},"Trying-lit")),(0,l.kt)("h3",{id:"react-dom-template"},(0,l.kt)("inlineCode",{parentName:"h3"},"React DOM")," Template"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/react-plain-template-example"},"React-plain-template-example")),(0,l.kt)("h3",{id:"factory-object-for-display-classes"},"Factory object for Display Classes"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/template-object"},"Template-object")),(0,l.kt)("h3",{id:"example-repository-for-cloning"},"Example repository for cloning"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/default-email-template"},"Default-email-template")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/generator-module"},"Generator-module"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/replacer"},"Replacer"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/pixel-email-cli"},"Pixel-email-cli")))),(0,l.kt)("h3",{id:"react-one-template"},"React One Template"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/react-email-template"},"React-email-template")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/atherdon/markdown-to-email/blob/main/MindMap1.png?raw=true",alt:"mindmap"})),(0,l.kt)("h3",{id:"react-design-system"},"React Design System"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/LLazyEmail/react-email-typography-components"},"React-email-typography-components")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/LLazyEmail/nextjs-preview"},"Nextjs-preview")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/LLazyEmail/react-email-miscellaneous-components"},"React-email-miscellaneous-components")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/LLazyEmail/react-sendgrid-form"},"React-sendgrid-form")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/LLazyEmail/react-email-template"},"React-email-template")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/LLazyEmail/react-email-table"},"React-email-table")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/LLazyEmail/email-template-react"},"Email-template-react")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/LLazyEmail/react-email-letter-components"},"React-email-letter-components"))),(0,l.kt)("h3",{id:"cool-projects-to-see"},"Cool projects to see"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Slicejack/bojler"},"Bojler")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/maizzle/maizzle"},"Maizzle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/sglazov/pechkin"},"Pechkin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/5t3ph/11ty-email-generator/blob/main/src/_data/meta.js"},"11ty-email-generator"))),(0,l.kt)("h3",{id:"arthur-tkachenko-articles"},"Arthur Tkachenko articles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/5-reasons-why-newsletters-should-be-part-of-your-business-strategy"},"5 Reasons Why Newsletters Should Be Part Of Your Business Strategy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/organizing-an-advanced-structure-for-html-email-template"},"Organizing an Advanced Structure for HTML Email Template")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/how-i-started-to-build-react-components-for-email-templates"},"How I Started to Build React Components for Email Templates")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/introducing-a-simple-npm-module-with-email-templates"},"Introducing a Simple NPM Module with Email Templates")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/glossary-for-non-technies"},"Glossary for Non Technies")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/email-marketing-and-how-to-curate-an-effective-business-newsletter"},"Email Marketing and How to Curate an Effective Business Newsletter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/exploring-substack-for-building-your-newsletter"},"Exploring Substack for Building Your Newsletter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/building-a-design-system-for-email-templates-react"},"Building a Design System for Email Templates (React)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/together4victory-list-of-email-marketing-tools"},"#Together4Victory: List of Email Marketing Tools")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/cool-newsletters-for-developers-part-1"},"Cool Newsletters for developers [Part 1]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/cool-resources-for-sending-emails"},"Cool resources for sending emails")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/businesses-have-messy-emails"},"Businesses Have Messy Emails")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hackernoon.com/businesses-have-messy-emails-the-relationship-between-security-and-sales"},"Businesses Have Messy Emails: The Relationship between Security and Sales"))),(0,l.kt)("h2",{id:"awesome-email-marketing"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/LLazyEmail/awesome-email-marketing"},"Awesome-email-marketing")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/ovrsea/build-your-email-templates-with-react-ea530ba6b010"},"Build your email templates with React")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://assertible.com/blog/creating-email-templates-with-react-components"},"Creating email templates with React components")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://templates.mailchimp.com/getting-started/html-email-basics/"},"HTML Email Basics")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://building.lang.ai/how-to-build-emails-with-react-fcf941b125d1"},"How to build emails with React")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://code.tutsplus.com/tutorials/build-a-reusable-design-system-with-react--cms-29954"},"Build a Reusable Design System With React")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://bestofreactjs.com/repo/chromakode-react-html-email-react-renderers"},"Create elegant HTML email templates using React")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/unlayer/react-email-editor"},"React-email-editor"))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.appsignal.com/2021/11/03/designing-error-messages-and-a-logging-strategy-in-nodejs.html"},"Designing Error Messages and a Logging Strategy in Node.js")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/npmlog"},"Npmlog")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.tabnine.com/code/javascript/functions/npmlog/Logger/levels"},"How to use levels function in Logger")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/comparing-node-js-logging-tools/"},"Comparing Node.js logging tools")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/72506435/how-to-handle-log-events-with-the-npmlog-library"},"How to handle log events with the npmlog library?"))),(0,l.kt)("h2",{id:"linkedin-page-of-llazyemail"},(0,l.kt)("a",{parentName:"h2",href:"https://www.linkedin.com/company/llazyemail/"},"Linkedin page of LLazyEmail")))}c.isMDXComponent=!0}}]);