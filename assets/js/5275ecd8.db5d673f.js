"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9822],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=s(a),d=r,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(y,l(l({ref:e},c),{},{components:a})):n.createElement(y,l({ref:e},c))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1674:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={id:"display-factory",title:"display-factory-73",sidebar_label:'HN template, "\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f" DisplayFactory'},l=void 0,i={unversionedId:"templates/display-factory",id:"templates/display-factory",title:"display-factory-73",description:"with transition our templates into Typescript, i think we are loosing some quality of what we have previously.",source:"@site/docs/templates/display-factory-for-templates.md",sourceDirName:"templates",slug:"/templates/display-factory",permalink:"/documentation/docs/templates/display-factory",draft:!1,editUrl:"https://github.com/LLazyEmail/documentation/tree/main/docs/templates/display-factory-for-templates.md",tags:[],version:"current",frontMatter:{id:"display-factory",title:"display-factory-73",sidebar_label:'HN template, "\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f" DisplayFactory'},sidebar:"tutorialSidebar",previous:{title:"modularity-issue",permalink:"/documentation/docs/research/modularity-issue"},next:{title:"HN Template",permalink:"/documentation/docs/templates/hn-js-template"}},p={},s=[{value:"Linkedin page of LLazyEmail",id:"linkedin-page-of-llazyemail",level:2}],c={toc:s};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"with transition our templates into Typescript, i think we are loosing some quality of what we have previously.\nI was not able to create a few classes, like Factory and Errors class.\nI roll back and focusing on making our template work as it is right now."),(0,r.kt)("p",null,"I removed cool way to collect errors/warnings inside our components."),(0,r.kt)("p",null,'Logic was simple: if i made a mistake and didnt pass all necessary parameters inside - error will be added to an array of errors and will be shown, when i run our "display-*" methods.'),(0,r.kt)("p",null,"So if you trying to make a footer HTML string and it has 4 sub-components inside and one of them get broken, you'll get a notification about that."),(0,r.kt)("p",null,"Before we created a class Errors, which will eat all errors/warnings, that might show some light of what was actually broken."),(0,r.kt)("p",null,"This class was mostly useful when you developing this template. Now sure if it can be used inside of our MTE repository. But if done correctly, I think we can benefit from those kind of errors when we are trying to generate an email template inside MTE."),(0,r.kt)("p",null,"In order to reduce the complexity of our logic i switched to ",(0,r.kt)("strong",{parentName:"p"},"ow")," modules from Sidnre Sorhus. That logic can be extended later, but right now we are going into simplification road and loosing a quality, that i dont like to be honest."),(0,r.kt)("h1",{id:"sub-task-updated-display-factory---hn-template"},"[Sub task]"," updated Display Factory - HN template"),(0,r.kt)("p",null,"trying-lit #1349"),(0,r.kt)("p",null,"\u0441\u0435\u0439\u0447\u0430\u0441 \u0432 trying-lit"),(0,r.kt)("p",null,"\u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439. \u043c\u043d\u0435 \u043e\u043d \u043d\u0443\u0436\u0435\u043d \u0431\u044b\u043b \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u0430\u043b\u0438\u0434\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1469198/180264523-d1f36cec-66c5-41f8-8152-02da6905296b.png",alt:"1",title:"1"})),(0,r.kt)("p",null,"\u0435\u0441\u0442\u044c 2 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043d\u0430\u0448\u0435\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u044b \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u043c \u0441\u0442\u0440\u043e\u043a\u0443 {content} \u0438 \u043d\u0430\u0448 \u0440\u0435\u043f\u043b\u0435\u0439\u0441\u0435\u0440 \u044d\u0442\u043e \u0434\u043e\u043b\u0436\u0435\u043d \u0445\u0430\u0432\u0430\u0442\u044c.\n\u0442.\u0435.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"let addon1 = {\n  footer: FooterHTMLString,\n  logoTop: logoTopComponent(),\n  logoBottom: logoBottomComponent(),\n  content: \"{content}\",\n  // content: '[[THIS IS PLACE FOR A CONTENT INSIDE]',\n  previewText: previewTextComponent('[AMA PREVIEW TEXT]'),\n};")),(0,r.kt)("p",null,"\u0441\u0434\u0435\u043b\u0430\u0435\u0442 \u043f\u043e\u0445\u043e\u0436\u0438\u0439 \u0442\u0435\u043c\u043f\u043b\u0435\u0439\u0442 \u043a\u0430\u043a \u0435\u0441\u0442\u044c \u0443 \u043d\u0430\u0441 \u0441\u0435\u0439\u0447\u0430\u0441."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'\u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u043d\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439. \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u0432\u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u043d\u0430\u0448 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0438 \u0441\u043e\u0431\u0440\u0430\u0442\u044c "display" \u0443 \u043d\u0430\u0441 \u0432 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0435. \u0438\u043b\u0438 \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u043e\u0441\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 \u0432 trying_lit.\n\u0440\u0430\u043d\u043e \u0438\u043b\u0438 \u043f\u043e\u0437\u0434\u043d\u043e \u043d\u0430\u043c \u043f\u0440\u0438\u0439\u0434\u0435\u0442\u0441\u044f \u044d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0432\u043d\u0435 \u043f\u0438\u0445\u0430\u0442\u044c \u043d\u0443\u0436\u043d\u044b\u0435 \u043d\u0430\u043c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435')),(0,r.kt)("p",null,"Originally posted by @atherdon in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/markdown-to-email/issues/1344#issuecomment-1191695447"},"#1344 (comment)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/1469198/180372109-d0e10db9-0765-4d20-9b93-a2993776ff8a.mp4"},(0,r.kt)("img",{parentName:"a",src:"https://user-images.githubusercontent.com/1469198/180372109-d0e10db9-0765-4d20-9b93-a2993776ff8a.png",alt:"Watch the video"}))),(0,r.kt)("p",null,"LLazyEmail/nomoretogo_email_template#116"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/template-object"},"https://github.com/LLazyEmail/template-object")),(0,r.kt)("h1",{id:"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f-displayfactory-116"},'"\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f" DisplayFactory #116'),(0,r.kt)("p",null,'"\u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u043f\u043b\u044e\u0441\u043e\u0432 factory design pattern \u0432 js \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e \u0447\u0442\u043e \u043c\u044b \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u0435\u043c "\u043d\u043e\u0432\u044b\u0439 instance" \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0441 \u043a\u043b\u0430\u0441\u0441\u0430\u043c\u0438. \u0442\u043e\u0435\u0441\u0442\u044c \u043f\u043e\u0441\u043b\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 - \u043c\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u043c \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u043c\u0438. \u043d\u0435\u043b\u044c\u0437\u044f \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c _get, _set \u0438 \u0442.\u0434.'),(0,r.kt)("p",null,"\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0437\u0436\u0435 \u043c\u044b \u043f\u0435\u0440\u0435\u043f\u0438\u0448\u0435\u043c \u0447\u0430\u0441\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430 \u043d\u0430 typescript \u0438 \u0441\u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0445 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u043e \u0441\u0435\u0439\u0447\u0430\u0441 \u0435\u0441\u0442\u044c \u043a\u0430\u043a \u0435\u0441\u0442\u044c."),(0,r.kt)("p",null,"\u044f \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0435\u043b \u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043d\u0443\u0442\u0440\u044c factory \u043c\u0435\u0442\u043e\u0434\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u043b\u0438 \u0431\u044b \u043c\u0435\u043d\u044f\u0442\u044c settings & params."),(0,r.kt)("p",null,"\u0438\u0437 \u0432\u0430\u0436\u043d\u044b\u0445 \u0448\u0442\u0443\u043a \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b \u0445\u043e\u0442\u0435\u043b\u043e\u0441\u044c \u0438\u043c\u0435\u0442\u044c:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u043c\u0430\u0441\u0441\u0438\u0432 \u0441 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430\u043c\u0438 \u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0438( checksArray ), \u0447\u0442\u043e\u0431\u044b \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0445.\n\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u043c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u0442\u0435\u043c\u043b\u043f\u0435\u0439\u0442, \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0444\u0435\u0439\u043b\u0438\u043c \u0432 \u0444\u0443\u0442\u0435\u0440\u0435 \u0438 \u0432 \u0445\u0435\u0430\u0434\u0435. \u0445\u043e\u0447\u0435\u0442\u0441\u044f \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0441\u0431\u043e\u0440\u043a\u0438 \u0442\u0435\u043c\u043b\u0435\u0439\u0442\u0430 \u0443 \u043d\u0430\u0441 \u0432\u044b\u0434\u0430\u0432\u0430\u043b\u0438\u0441\u044c \u043e\u0448\u0438\u0431\u043a\u0438 \u0438\u0437 \u043e\u0431\u043e\u0438\u0445 displays \u0438 \u043f\u0440\u0435\u0440\u044b\u0432\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u043c\u043b\u043f\u0435\u0439\u0442\u0430.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0441\u0435\u0442\u0442\u0438\u043d\u0433\u043e\u0432 \u0432 \u0443\u0436\u0435 \u0433\u043e\u0442\u043e\u0432\u043e\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0435")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"init(\u0442\u043e \u0447\u0442\u043e \u0443 \u043d\u0430\u0441 \u0441\u0435\u0439\u0447\u0430\u0441 \u0434\u0435\u043b\u0430\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),")")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0438 \u043b\u043e\u0433 \u043c\u0435\u0442\u043e\u0434 \u0447\u0442\u043e\u0431\u044b \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u043d\u0435 \u043f\u0438\u0441\u0430\u0442\u044c console.log"))),(0,r.kt)("p",null,"\u0447\u0442\u043e \u0441\u043a\u0430\u0436\u0435\u0442\u0435."),(0,r.kt)("p",null,"\u044f \u0434\u0443\u043c\u0430\u043b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c. \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0431\u0443\u0434\u0443\u0442 \u044d\u0442\u0438 \u043c\u0435\u0442\u043e\u0434\u044b. \u0430 factory \u0431\u0443\u0434\u0435\u0442 \u0432\u0441\u0435 \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0443\u0436\u0435 \u043e\u0431\u044a\u0435\u043a\u0442 \u0441\u043e \u0432\u0441\u0435\u043c\u0438 settings \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u043c"),(0,r.kt)("p",null,"\u044f \u0432\u044b\u043d\u0435\u0441 \u0432\u0441\u0435 factory \u0432 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/template-object"},"https://github.com/LLazyEmail/template-object")),(0,r.kt)("p",null,"\u043f\u043e\u043a\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0431\u0441\u0443\u0436\u0434\u0430\u0435\u043c, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043c \u0412\u0430\u0434\u0438\u043c\u0430 \u0438 \u043e\u0431\u0441\u0443\u0434\u0438\u043c \u0432\u043c\u0435\u0441\u0442\u0435 next steps"),(0,r.kt)("p",null,"sample: ",(0,r.kt)("a",{parentName:"p",href:"https://blog.sessionstack.com/how-javascript-works-the-factory-design-pattern-4-use-cases-7b9f0d22151d"},"https://blog.sessionstack.com/how-javascript-works-the-factory-design-pattern-4-use-cases-7b9f0d22151d")),(0,r.kt)("p",null,'\u0414\u0430, \u0432 \u044d\u0442\u043e\u043c \u0442\u0430\u0441\u043a\u0435 \u043a\u0441\u0442\u0430\u0442\u0438 \u0443\u0434\u043e\u0431\u043d\u043e \u0431\u044b\u043b\u043e \u0431\u044b \u043e\u0431\u0441\u0443\u0434\u0438\u0442\u044c \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u044d\u0442\u043e\u0439 Factory.\n\u0435\u0441\u043b\u0438 \u0447\u0442\u043e, \u044f \u0433\u043e\u0442\u043e\u0432 \u043e\u0431\u0441\u0443\u0436\u0434\u0430\u0442\u044c"'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"web4uartstudio")),(0,r.kt)("p",null,"\u042f \u0432\u0438\u0436\u0443 \u043f\u043e\u043a\u0430 2 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u041e\u0431\u0449\u0438\u0439 factory \u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u0440\u0430\u0437\u043d\u044b\u0435 class \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u043e\u0434 \u0441\u0432\u043e\u0439 display"),(0,r.kt)("li",{parentName:"ol"},"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 class \u0441 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430\u043c\u0438")),(0,r.kt)("p",null,"\u041a\u0430\u043a\u043e\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0431\u0443\u0434\u0435\u043c \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c ?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arthur Tkachenko")),(0,r.kt)("p",null,"\u041c\u044b \u0441\u0435\u0439\u0447\u0430\u0441 \u0443\u0436\u0435 \u0434\u0435\u043b\u0430\u0435\u043c display objects with factory design pattern."),(0,r.kt)("p",null,"\u0410 \u043a\u043e\u0433\u0434\u0430 \u043c\u044b \u0441\u0434\u0435\u043b\u0430\u0435\u043c \u044d\u0442\u043e\u0442 \u0442\u0430\u0441\u043a \u0432 \u043d\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 factory + \u0434\u043e\u043f \u0444\u0438\u0448\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043d\u0435\n\u043d\u0443\u0436\u043d\u044b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arthur Tkachenko")),(0,r.kt)("p",null,"\u0430 \u0432 \u043a\u0430\u0436\u0434\u043e\u0439 \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u0432\u043e\u0439 title, subtitle, \u0441\u0432\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u044b.\n\u043f\u043e\u0438\u0434\u0435\u0435, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u043d\u0430\u0447\u043d\u0435\u0442\u0435 \u0434\u0435\u043b\u0430\u0442\u044c display \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430, \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u0442\u0441\u044f \u0441 \u0442\u0435\u043c, \u0447\u0442\u043e \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043a\u0443\u0447\u0430 \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0441\u0443\u043d\u0443\u0442\u044c \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"factory")," - \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u044d\u0442\u043e\u0442 \u0431\u043b\u043e\u043a \u043c\u043e\u0433 \u0440\u0435\u0430\u043b\u044c\u043d\u043e \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u0441\u044f"),(0,r.kt)("p",null,'\u043f\u0440\u0438 \u044d\u0442\u043e\u043c, \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u043d\u0430\u0447\u0430\u043b\u0435 \u0431\u044b\u0441\u0442\u0440\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442. \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 "\u043a\u043e\u043d\u0442\u0435\u043d\u0442" \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435/\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b - \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e\u0439 display \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u0431\u043e\u0440\u043a\u0438 \u0446\u0435\u043b\u043e\u0433\u043e \u0442\u0435\u043f\u043b\u0435\u0439\u0442\u0430.\n\u043d\u043e \u044f \u0441\u0435\u0439\u0447\u0430\u0441 \u043f\u043e\u043a\u0430 \u0435\u0449\u0435 \u043d\u0435 \u043f\u043e\u043d\u044f\u043b \u0432 \u043a\u0430\u043a\u043e\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0438 \u0443\u043d\u0430\u0441 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f - \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u043d\u0430\u0447\u0430\u043b\u0435 \u0440\u0430\u0437\u0431\u0435\u0440\u0435\u043c\u0441\u044f'),(0,r.kt)("p",null,"\u044f \u0436 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e \u0432\u0441\u0435 \u0432\u0430\u0448\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f. \u0435\u0441\u043b\u0438 \u043a\u0430\u043a\u043e\u0433\u043e \u0442\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043d\u0435\u0442 - \u0442\u0443\u0442 \u044f \u0441\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u043d\u0435 \u0432\u0438\u043d\u043e\u0432\u0430\u0442.\n\u043d\u043e \u0442.\u043a. \u0432 \u043d\u0430\u0448\u0435\u043c \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u0435\u0441\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0432\u0441\u0435\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 - \u043c\u044b \u043b\u0435\u0433\u043a\u043e \u043c\u043e\u0436\u0435\u043c \u043f\u0440\u043e\u0439\u0442\u0438\u0441\u044c \u043f\u043e \u043d\u0435\u0439 \u0438 \u043d\u0430\u0439\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u043c \u043d\u0443\u0436\u0435\u043d"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"linkedin-page-of-llazyemail"},(0,r.kt)("a",{parentName:"h2",href:"https://www.linkedin.com/company/llazyemail/"},"Linkedin page of LLazyEmail")))}m.isMDXComponent=!0}}]);