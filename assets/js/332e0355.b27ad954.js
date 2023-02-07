"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7122],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={id:"plain-js-improvements",title:"Plain JS Templates improvements",sidebar_label:"Plain JS Templates"},o=void 0,s={unversionedId:"templates/plain-js-improvements",id:"templates/plain-js-improvements",title:"Plain JS Templates improvements",description:"1. Decide to use functions inside of template or just strings",source:"@site/docs/templates/plain-templates-improvements2.md",sourceDirName:"templates",slug:"/templates/plain-js-improvements",permalink:"/documentation/docs/templates/plain-js-improvements",draft:!1,editUrl:"https://github.com/LLazyEmail/documentation/tree/main/docs/templates/plain-templates-improvements2.md",tags:[],version:"current",frontMatter:{id:"plain-js-improvements",title:"Plain JS Templates improvements",sidebar_label:"Plain JS Templates"},sidebar:"tutorialSidebar",previous:{title:"NMTG template",permalink:"/documentation/docs/templates/nomoretogo-js-template"},next:{title:"React Plain",permalink:"/documentation/docs/templates/template-react-plain-module"}},l={},p=[{value:"1. Decide to use functions inside of template or just strings",id:"1-decide-to-use-functions-inside-of-template-or-just-strings",level:2},{value:"2. Executable commands drives me crazy",id:"2-executable-commands-drives-me-crazy",level:2},{value:"1. I need a command for updating subpackages quickly.",id:"1-i-need-a-command-for-updating-subpackages-quickly",level:3},{value:"2. i want to try to use meow for that, but i think it&#39;s too much for a pretty simple code that we are trying to have",id:"2-i-want-to-try-to-use-meow-for-that-but-i-think-its-too-much-for-a-pretty-simple-code-that-we-are-trying-to-have",level:3},{value:"3. i need to have a script for calling test files separately, when i&#39;m debugging things",id:"3-i-need-to-have-a-script-for-calling-test-files-separately-when-im-debugging-things",level:3},{value:"4. organize validation process correctly and save some space in our methods + line tracing",id:"4-organize-validation-process-correctly-and-save-some-space-in-our-methods--line-tracing",level:3},{value:"try later and see if it simplify the work with &quot;literals&quot;",id:"try-later-and-see-if-it-simplify-the-work-with-literals",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-decide-to-use-functions-inside-of-template-or-just-strings"},"1. Decide to use functions inside of template or just strings"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/207774818-bed47381-0c9c-4d3c-8635-7174b1625803.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/207774888-3d8bd1aa-00c4-4d9c-848c-3392e2a12e53.png",alt:"image"})),(0,r.kt)("h2",{id:"2-executable-commands-drives-me-crazy"},"2. Executable commands drives me crazy"),(0,r.kt)("h3",{id:"1-i-need-a-command-for-updating-subpackages-quickly"},"1. I need a command for updating subpackages quickly."),(0,r.kt)("p",null,"for it i created a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/nomoretogo_email_template/blob/main/bash/update-packages.sh"},"script")," and it works awesome for me"),(0,r.kt)("h3",{id:"2-i-want-to-try-to-use-meow-for-that-but-i-think-its-too-much-for-a-pretty-simple-code-that-we-are-trying-to-have"},"2. i want to try to use meow for that, but i think it's too much for a pretty simple code that we are trying to have"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/207000827-e565c77b-7806-4c3d-9fe6-9a66373f2dd8.png",alt:"image"})),(0,r.kt)("h3",{id:"3-i-need-to-have-a-script-for-calling-test-files-separately-when-im-debugging-things"},"3. i need to have a script for calling test files separately, when i'm debugging things"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/207996499-80ece9c1-84e7-4bb3-bbf6-c08306b11a4c.png",alt:"image"})),(0,r.kt)("h3",{id:"4-organize-validation-process-correctly-and-save-some-space-in-our-methods--line-tracing"},"4. organize validation process correctly and save some space in our methods + line tracing"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/208203452-94a532b3-d3ee-4b19-950b-17c2978cb7c5.png",alt:"image"})),(0,r.kt)("p",null,"Right now i'm testing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/ow"},"OW")),(0,r.kt)("p",null,"something like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const topPanelViewInBrows = (link) => {\n\n  // const error = new Errors('topPanelViewInBrows');\n\n  // if (link == '') {\n  //   error.add('No link');\n  // }\n\n  ow(link, ow.string);\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"try-later-and-see-if-it-simplify-the-work-with-literals"},'try later and see if it simplify the work with "literals"'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/htm"},"https://www.npmjs.com/package/htm")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://preactjs.com/guide/v10/getting-started/#alternatives-to-jsx"},"https://preactjs.com/guide/v10/getting-started/#alternatives-to-jsx")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/developit/699c8d8f180a1e4eed58167f9c6711be"},"https://gist.github.com/developit/699c8d8f180a1e4eed58167f9c6711be")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/motss/lit-ntml"},"https://github.com/motss/lit-ntml")))}m.isMDXComponent=!0}}]);