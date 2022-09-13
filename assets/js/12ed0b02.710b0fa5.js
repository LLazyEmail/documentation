"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},s="GitOps infrastructure implementation",o={unversionedId:"devops/DevOps",id:"devops/DevOps",title:"GitOps infrastructure implementation",description:"Task #1027",source:"@site/docs/devops/DevOps.md",sourceDirName:"devops",slug:"/devops/",permalink:"/documentation/docs/devops/",draft:!1,editUrl:"https://github.com/LLazyEmail/documentation/tree/main/docs/devops/DevOps.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"improvements",permalink:"/documentation/docs/improvements/entitie"},next:{title:"tasks",permalink:"/documentation/docs/devops/tasks"}},l={},p=[{value:"1. All Modules Now Back",id:"1-all-modules-now-back",level:3},{value:"2. ESLint GitHub Action",id:"2-eslint-github-action",level:3},{value:"3. Default methds with errors handle for protection",id:"3-default-methds-with-errors-handle-for-protection",level:3},{value:"4. Separate file just for organizing output warnings",id:"4-separate-file-just-for-organizing-output-warnings",level:3},{value:"5. Issue with jest because babel is not updated.",id:"5-issue-with-jest-because-babel-is-not-updated",level:3},{value:"6. Long range of tests",id:"6-long-range-of-tests",level:3},{value:"7. Templates",id:"7-templates",level:3},{value:"Linkedin page of LLazyEmail",id:"linkedin-page-of-llazyemail",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitops-infrastructure-implementation"},"GitOps infrastructure implementation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/markdown-to-email/discussions/1027"},"Task #1027")),(0,a.kt)("h3",{id:"1-all-modules-now-back"},"1. All Modules Now Back"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/175816083-189ed2cd-9ef0-4d11-8096-ca03b15351df.png",alt:"1",title:"1"})),(0,a.kt)("p",null,"submodules confusion"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/175816256-6200c620-ad78-437c-aa80-44a9e7aa5e71.png",alt:"2",title:"2"})),(0,a.kt)("h3",{id:"2-eslint-github-action"},"2. ESLint GitHub Action"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/175816189-8fe46acf-67ff-40ee-825d-9ce5a4957025.png",alt:"3",title:"3"})),(0,a.kt)("h3",{id:"3-default-methds-with-errors-handle-for-protection"},"3. Default methds with errors handle for protection"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/175816199-b6e7dc35-82f0-4b8c-b5e7-b8b7bd0b304b.png",alt:"4",title:"4"})),(0,a.kt)("h3",{id:"4-separate-file-just-for-organizing-output-warnings"},"4. Separate file just for organizing output warnings"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/175816215-42e78e62-25a2-423f-93af-ed63afbfce0d.png",alt:"5",title:"5"})),(0,a.kt)("h3",{id:"5-issue-with-jest-because-babel-is-not-updated"},"5. Issue with jest because babel is not updated."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/175816233-7d99a2ef-191e-490b-bb3e-3e6f8450f4b1.png",alt:"6",title:"6"})),(0,a.kt)("h3",{id:"6-long-range-of-tests"},"6. Long range of tests"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/175816238-061ff0c2-d4e2-4fb6-8263-870b07309d20.png",alt:"7",title:"7"})),(0,a.kt)("p",null,"can be a great illustration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    "test": "npm run checkFolders && jest ./src/tests",\n    "test:typography": "npm run ./src/tests/typography",\n    "test:methods": "npm run ./src/tests/methods",\n    "test:custom": "npm run ./src/tests/custom",\n    "test:watch": "npm run checkFolders && jest --watch ./src/tests"\n')),(0,a.kt)("h3",{id:"7-templates"},"7. Templates"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/175816250-8c47e05a-ebfd-490b-9dec-ff298b1245ce.png",alt:"8",title:"8"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/175816251-9cb9b541-bbbf-4f5a-8906-ae882175d8e0.png",alt:"9",title:"9"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/175816252-07976768-48c1-4037-bb22-453c6c9c3acb.png",alt:"10",title:"10"})),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"NPM publish workflow")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/175816381-5ad355cb-304d-457c-a0d6-aab53a8af71f.png",alt:"11",title:"11"})),(0,a.kt)("h4",{id:"linkedin-page-of-llazyemail"},(0,a.kt)("a",{parentName:"h4",href:"https://www.linkedin.com/company/llazyemail/"},"Linkedin page of LLazyEmail")))}u.isMDXComponent=!0}}]);