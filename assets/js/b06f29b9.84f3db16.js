"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9524],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=o(a),h=n,g=u["".concat(p,".").concat(h)]||u[h]||c[h]||l;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:n,i[1]=m;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2909:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const l={id:"react-main",title:"React Design System",sidebar_label:"React Design System"},i=void 0,m={unversionedId:"React-Design-System/react-main",id:"React-Design-System/react-main",title:"React Design System",description:"React Design System",source:"@site/docs/React-Design-System/React-Design-System.md",sourceDirName:"React-Design-System",slug:"/React-Design-System/",permalink:"/docs/React-Design-System/",draft:!1,editUrl:"https://github.com/LLazyEmail/documentation/tree/main/docs/React-Design-System/React-Design-System.md",tags:[],version:"current",frontMatter:{id:"react-main",title:"React Design System",sidebar_label:"React Design System"},sidebar:"tutorialSidebar",previous:{title:"1",permalink:"/docs/generator/markdown-to-react/1"},next:{title:"react-table-repository",permalink:"/docs/React-Design-System/react-table-module"}},p={},o=[{value:"React Design System",id:"react-design-system",level:3},{value:"Remix-* templates",id:"remix--templates",level:3},{value:"Links to templates",id:"links-to-templates",level:3},{value:"Major Release steps (stretch goals)",id:"major-release-steps-stretch-goals",level:3},{value:"Inner Template folders structure",id:"inner-template-folders-structure",level:2},{value:"List of Miscellaneous components",id:"list-of-miscellaneous-components",level:2},{value:"Email Template Folders structure",id:"email-template-folders-structure",level:2},{value:"React Templates structure",id:"react-templates-structure",level:2},{value:"Typography Components",id:"typography-components",level:2}],s={toc:o};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"react-design-system"},"React Design System"),(0,n.kt)("p",null,"modules that we developing right now"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/react-email-typography-components"},"Typography"),"\nBasic components, like headings, links, buttons, images with links.\n",(0,n.kt)("a",{parentName:"p",href:"#typography-components"},"Schema"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/nextjs-preview"},"Nextjs-preview"),"\nRepository with nextJS framework for previewing templates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/react-email-miscellaneous-components"},"Miscellaneous"),"\nSmall components, related to email templates, like unsubscribe links, social media panel, etc.\n",(0,n.kt)("a",{parentName:"p",href:"#list-of-miscellaneous-components"},"Components"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/react-email-template"},"Template"),"\nDefault repository with backbone project that you can use as starting point\n",(0,n.kt)("a",{parentName:"p",href:"#email-template-folders-structure"},"Folders structure"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/react-email-table"},"Table"),"\nSet of components, related to basic tables. Can be used for containers.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/email-template-react"},"Email-template-react"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/react-email-letter-components"},"React-email-letter-components"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/react-sendgrid-form"},"Form")))),(0,n.kt)("h3",{id:"remix--templates"},"Remix-* templates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/remix-hn-react-email-template"},"Hn react email template"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/remix-venmo-react-email-template"},"Venmo react email template"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/remix-taskrabbit-react-email-template"},"Taskrabbit react email template"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/remix-uber-react-email-template"},"Uber react email template"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/remix-ecommerce-react-email-template"},"Ecommerce react email template"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/remix-google-billing-email-template"},"Google billing email template"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/remix-amazon-billing-email-template"},"Amazon billing email template"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/remix-stripe-billing-email-template"},"Stripe billing email template")))),(0,n.kt)("h3",{id:"links-to-templates"},"Links to templates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/templates/amazon.html",target:"_parent"},"Billing - Amazon")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/templates/google.html",target:"_parent"},"Billing - Google")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/templates/stripe.html",target:"_parent"},"Billing - Stripe")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/templates/HN1.html",target:"_parent"},"HN 1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/templates/HN2.html",target:"_parent"},"HN 2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/templates/HN3.html",target:"_parent"},"HN 3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/templates/nomoretogo.html",target:"_parent"},"nomoretogo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/templates/taskrabbit.html",target:"_parent"},"taskrabbit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/templates/uber.html",target:"_parent"},"uber")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/templates/venmo.html",target:"_parent"},"venmo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/templates/vouchful.html",target:"_parent"},"vouchful"))),(0,n.kt)("h3",{id:"major-release-steps-stretch-goals"},"Major Release steps (stretch goals)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"complete table repo ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"work on the typography repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"to check what is going on with the NextJS preview repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"to review the current state of the HN template and what is necessary to complete to meet our goals")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'at the same time, maybe it will be easier to complete & release a few "billing" templates that we have.'))),(0,n.kt)("p",null,"I started to organize information on our documentation website."),(0,n.kt)("p",null,"Separating and organizing templates into a better code\nnaming we react templates and organizing repositories"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"My goal a year ago was to clean up our markdown-to-email repository.\nWe have a 2nd branch, packed with react stuff, now it's separated but needs input to finish things."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"A generator is using the outer template and inner components(Interior) separately.",(0,n.kt)("br",{parentName:"p"}),"\n","This is why we split things that way. While the generator is creating content dynamically, the outer template is static."),(0,n.kt)("h2",{id:"inner-template-folders-structure"},"Inner Template folders structure"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/LLazyEmail/documentation/main/static/img/react/interior-components.jpg",alt:"1"})),(0,n.kt)("h2",{id:"list-of-miscellaneous-components"},"List of Miscellaneous components"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/LLazyEmail/documentation/main/static/img/react/miscellaneous.jpg",alt:"2"})),(0,n.kt)("h2",{id:"email-template-folders-structure"},"Email Template Folders structure"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/LLazyEmail/documentation/main/static/img/react/outer-template.jpg",alt:"3"})),(0,n.kt)("h2",{id:"react-templates-structure"},"React Templates structure"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/LLazyEmail/documentation/main/static/img/react/templates-in-progress.jpg",alt:"4"})),(0,n.kt)("h2",{id:"typography-components"},"Typography Components"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/LLazyEmail/documentation/main/static/img/react/typography.jpg",alt:"5"})))}c.isMDXComponent=!0}}]);