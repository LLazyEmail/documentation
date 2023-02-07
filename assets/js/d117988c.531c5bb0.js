"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[566],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),m=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(r),d=n,k=c["".concat(i,".").concat(d)]||c[d]||s[d]||l;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var m=2;m<l;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1698:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const l={},o=void 0,p={unversionedId:"templates/gray-matter",id:"templates/gray-matter",title:"gray-matter",description:"Connecting NMTG template with MTE",source:"@site/docs/templates/gray-matter.md",sourceDirName:"templates",slug:"/templates/gray-matter",permalink:"/documentation/docs/templates/gray-matter",draft:!1,editUrl:"https://github.com/LLazyEmail/documentation/tree/main/docs/templates/gray-matter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:'HN template, "\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f" DisplayFactory',permalink:"/documentation/docs/templates/display-factory"},next:{title:"HN Template",permalink:"/documentation/docs/templates/hn/hn-js-template"}},i={},m=[{value:"Connecting NMTG template with MTE",id:"connecting-nmtg-template-with-mte",level:2},{value:"what we have for markdown parser?",id:"what-we-have-for-markdown-parser",level:3},{value:"Template TS class Link",id:"template-ts-class-link",level:3},{value:"<strong>\u0427\u0442\u043e \u0441\u0442\u043e\u0438\u0442 \u043d\u0430\u043c \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 React?</strong>",id:"\u0447\u0442\u043e-\u0441\u0442\u043e\u0438\u0442-\u043d\u0430\u043c-\u043f\u0435\u0440\u0435\u0439\u0442\u0438-\u0432-react",level:3},{value:"Generator v3.",id:"generator-v3",level:2},{value:"Generator V3",id:"generator-v3-1",level:2},{value:"Templates",id:"templates",level:2}],u={toc:m};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"connecting-nmtg-template-with-mte"},"Connecting NMTG template with MTE"),(0,n.kt)("p",null,"What must be done?"),(0,n.kt)("p",null,"NMTG template must work for the first place"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"typography + nmtg")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"display stuff")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432 \u0434\u043e\u043a\u0441")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u0432\u0441\u0435\u0445 \u043c\u0434. \u0412\u0441\u0435 \u0432\u0456\u0432\u043e\u0434\u0438\u0442\u0441\u044f, \u0432\u0441\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432\u0438\u0434\u0435\u043e \u0441 \u0442\u0435\u043c, \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 gray-matter. \u0435\u0433\u043e \u043c\u0438 \u0442\u043e\u0447\u043d\u043e \u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u041c\u0422\u0415, \u043d\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0438 mdx-node-loader \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u0443\u043c\u0435\u044c\u0448\u0438\u0442\u0441\u044f \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u0438\u0445 \u0431\u043b\u043e\u043a\u043e\u0432 \u0438 \u0438\u0445 \u043b\u043e\u0433\u0438\u043a\u0430.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u0435\u0441\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441 \u043f\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044e replacer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"in nmtg \u0432\u043e\u043e\u0431\u0449\u0435 \u043b\u0435\u0433\u043a\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0442\u0430\u043c \u0446\u0435\u043b\u0456\u0435 \u0441\u0435\u043a\u0446\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0437 config."))),(0,n.kt)("hr",null),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"what-we-have-for-markdown-parser"},"what we have for markdown parser?"),(0,n.kt)("p",null,"Can we upgrade MTE stuff like ...."),(0,n.kt)("h3",{id:"template-ts-class-link"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/LLazyEmail/documentation/blob/main/docs/templates/template-class-typescript.md"},"Template TS class Link")),(0,n.kt)("h3",{id:"\u0447\u0442\u043e-\u0441\u0442\u043e\u0438\u0442-\u043d\u0430\u043c-\u043f\u0435\u0440\u0435\u0439\u0442\u0438-\u0432-react"},(0,n.kt)("strong",{parentName:"h3"},"\u0427\u0442\u043e \u0441\u0442\u043e\u0438\u0442 \u043d\u0430\u043c \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 React?")),(0,n.kt)("p",null,"\u041d\u0430\u0447\u0430\u0442\u044c \u0441 \u043f\u0440\u043e\u0441\u0442\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432, \u043e\u0431\u0457\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0438\u0445 \u0432 \u043e\u0434\u0438\u043d repository?"),(0,n.kt)("p",null,"\u0426\u0435\u043b\u044c: \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043b\u0443\u0447\u0448\u0435, \u0447\u0435\u043c \u0441\u0434\u0435\u043b\u0430\u0442\u044c react-email repo?"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/documentation/blob/main/docs/templates/yaml-config.md"},"Gray-Matter")),(0,n.kt)("p",null,"=========="),(0,n.kt)("h2",{id:"generator-v3"},"Generator v3."),(0,n.kt)("p",null,"Goals:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"more templates"),(0,n.kt)("li",{parentName:"ul"},"easy next steps"),(0,n.kt)("li",{parentName:"ul"},"better debugging"),(0,n.kt)("li",{parentName:"ul"},"-better error reporting"),(0,n.kt)("li",{parentName:"ul"},"better modularity")),(0,n.kt)("p",null,"Features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"API"),(0,n.kt)("li",{parentName:"ul"},"React integration for templates production"),(0,n.kt)("li",{parentName:"ul"},"React for template Preview")),(0,n.kt)("p",null,"\u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u0456 replacer\nmoving into MDX"),(0,n.kt)("p",null,"\u0443\u0441\u043b\u043e\u0436\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u0434\u0430, \u043d\u043e \u043f\u0440\u0438 \u0454\u0442\u043e\u043c \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 CI/CD, testing, etc."),(0,n.kt)("p",null,"\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0432 \u0431\u043e\u043b\u0435\u0435 \u0443\u0434\u043e\u0431\u043d\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435."),(0,n.kt)("p",null,"\u0421\u041e\u0437\u0434\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 Indexes, \u043c\u0435\u043d\u044c\u0448\u0435 \u043f\u0430\u043f\u043e\u043a, \u0447\u0442\u043e\u0431\u0456 \u0443\u0434\u043e\u0431\u043d\u0435\u0435 \u0431\u0456\u043b\u043e \u0434\u0435\u043b\u0430\u0442\u044c. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0435\u043c\u043f\u043b\u0435\u0439\u0442\u0456, \u0447\u0442\u043e\u0431\u0438 \u0443\u043b\u0443\u0447\u0448\u0430\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435."),(0,n.kt)("p",null,"====="),(0,n.kt)("h2",{id:"generator-v3-1"},"Generator V3"),(0,n.kt)("p",null,"small fixes, \u043a\u043e\u0442\u043e\u0440\u0438\u0435 \u0443\u0436\u0435 \u0431\u0456\u043b\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u0438, \u043e\u043f\u0438\u0441\u0430\u043d\u0438 \u0456 \u043f\u0440\u0456\u043e\u0440\u0456\u0442\u0456\u0437\u043e\u0432\u0430\u043d\u043d\u0456."),(0,n.kt)("p",null,"integration MTE with nmtg-template"),(0,n.kt)("p",null,"nx vs nodejs vs Nextjs"),(0,n.kt)("p",null,"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 routes, API urls."),(0,n.kt)("h2",{id:"templates"},"Templates"),(0,n.kt)("p",null,"now we have 3 repositories."),(0,n.kt)("p",null,"2 of them works, old version, integrated with MTE\n1 not working, updated version, can cause updates @ old templates, but it's not necessary."))}s.isMDXComponent=!0}}]);