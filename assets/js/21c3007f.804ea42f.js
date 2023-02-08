"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2828],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),c=o,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6672:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const i={slug:"introducing-a-simple-npm-module-with-email-templates",title:"Introducing a Simple NPM Module with Email Templates",authors:{name:"Arthur Tkachenko",title:"Core Team",url:"https://github.com/atherdon",image_url:"https://github.com/atherdon.png"},tags:["hola","docusaurus"]},r=void 0,l={permalink:"/blog/introducing-a-simple-npm-module-with-email-templates",editUrl:"https://github.com/LLazyEmail/documentation/tree/main/blog/2022-04-09-how-i-created-a-simple-npm-package-with-basic-email-templates.md",source:"@site/blog/2022-04-09-how-i-created-a-simple-npm-package-with-basic-email-templates.md",title:"Introducing a Simple NPM Module with Email Templates",description:"A story about the need for a default email template package.",date:"2022-04-09T00:00:00.000Z",formattedDate:"April 9, 2022",tags:[{label:"hola",permalink:"/blog/tags/hola"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:4.18,hasTruncateMarker:!1,authors:[{name:"Arthur Tkachenko",title:"Core Team",url:"https://github.com/atherdon",image_url:"https://github.com/atherdon.png",imageURL:"https://github.com/atherdon.png"}],frontMatter:{slug:"introducing-a-simple-npm-module-with-email-templates",title:"Introducing a Simple NPM Module with Email Templates",authors:{name:"Arthur Tkachenko",title:"Core Team",url:"https://github.com/atherdon",image_url:"https://github.com/atherdon.png",imageURL:"https://github.com/atherdon.png"},tags:["hola","docusaurus"]},prevItem:{title:"Cool resources for sending emails",permalink:"/blog/cool-resources-for-sending-emails"},nextItem:{title:"How To Create a Curated Email Newsletter That Brings Results for Your Business",permalink:"/blog/how-to-create-a-curated-email-newsletter-that-brings-results-for-your-business"}},s={authorsImageUrls:[void 0]},u=[{value:"Linkedin page of LLazyEmail",id:"linkedin-page-of-llazyemail",level:2},{value:"Linkedin page of LLazyEmail",id:"linkedin-page-of-llazyemail-1",level:4}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A story about the need for a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/default-email-template"},"default email template package"),".\nFrom novice developers to experienced ones, most are involved in sending emails programmatically. Sending emails is like building forms: most of the developers involved in building the web did it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are learning nodeJS, then you probably used nodemailer."),(0,o.kt)("li",{parentName:"ul"},"If you are building your product, I bet you are thinking about connecting your code with SendGrid or MailGun and sending some transactional emails."),(0,o.kt)("li",{parentName:"ul"},"If you are trying to make that sign-up form work and send confirmation emails -> I hear you.")),(0,o.kt)("p",null,"We have a lot of resources and simple tutorials online that might help you to do such basic things. It is cool that you can read some tutorials, install a few packages and go! "),(0,o.kt)("p",null,"Even starting with some SAAS boilerplate that removes the first configuration steps and gives you a great jumpstart for your ideas."),(0,o.kt)("p",null,'Now you can send your empty email with "Hello world" from your server and be happy when it is delivered to your inbox. And this is where most developers feel that everything is great and stop doing more.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j75251dyexl69wltd3m0.png",alt:"Image description"})),(0,o.kt)("p",null,"And while my module is written in JS, I don't think that it is a hard task to convert it into other languages if someone wants to contribute -> feel free to jump abroad. I\u2019m always friendly to contributors' pull requests."),(0,o.kt)("h2",{id:"linkedin-page-of-llazyemail"},(0,o.kt)("a",{parentName:"h2",href:"https://www.linkedin.com/company/llazyemail/"},"Linkedin page of LLazyEmail")),(0,o.kt)("p",null,"Ok, let's try to imagine that you are building your email-related functionality, related to emails from scratch -- you will try to organize email messages in a separate folder, maybe even make it translatable into multi-languages, testing your ability to render it with variables received from other sources..."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z0wyf5qjj04719a7svvq.png",alt:"Image description"})),(0,o.kt)("p",null,"But you will probably never try to send an email with a full template from the beginning."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"But you should do it.")," "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a99g4067ltz8jqzao2ay.png",alt:"Image description"})),(0,o.kt)("p",null,"There are a lot of important questions that you have to ask yourself.\n",(0,o.kt)("em",{parentName:"p"},"Does your email template is good and render all necessary thoughts?"),"\n",(0,o.kt)("em",{parentName:"p"},"What about images? Do you have a folder with images that is available from outside?"),"\n",(0,o.kt)("em",{parentName:"p"},"Are all permissions set correctly? (Ie. not only your logo must be visible)"),"\n",(0,o.kt)("em",{parentName:"p"},"What about links?"),"\n",(0,o.kt)("em",{parentName:"p"},"What about supporting different email clients? (Yes there is not only your email app that you update frequently.)")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mhrexk9s1f5jsyk4o1dz.png",alt:"Image description"})),(0,o.kt)("p",null,"Some people use Thunderbird and it disables image rendering by default (just to let you know). "),(0,o.kt)("p",null,"All those things might crash your email. Plus, it\u2019s an old HTML4 code, so everything is so fragile."),(0,o.kt)("p",null,"I was trying to solve our inner coding problem a few months ago. We had an issue with making email templates to be precise --\x3e we split them into partials, but I still didn't like what my stomach was telling me about manipulating with markup emails."),(0,o.kt)("p",null,"But that is a story for another article. And it was time for me to be inspired by other developers."),(0,o.kt)("p",null,"I reviewed a few repositories during one night. I found a few basic, but interesting solutions."),(0,o.kt)("p",null,"While our render method was working well for our needs -> it didn't give you this feeling of quickly understanding what your code is doing."),(0,o.kt)("p",null,"We didn't have it."),(0,o.kt)("p",null,"So I saved links and copied a few methods into temporary files."),(0,o.kt)("p",null,"It was not enough, especially as our problem was not gone anyway. At that moment I realized that a lot of projects might have similar issues. Imagine this situation: you have your monolith application and you need to send a test email via your Email Transport provider."),(0,o.kt)("p",null,"And sending a few blank emails with 2 lines is not enough either. We all need a quick and easy way to do it properly without additional knowledge. One of the best ways is to use a predefined working solution. So I decided to make it an open JS module and easy to use for everyone."),(0,o.kt)("p",null,"And I created two repositories for that :)"),(0,o.kt)("p",null,"The first repository contains 3 files. And it's easy to read. Just a long string aka literal with an email template inside."),(0,o.kt)("p",null,"What's good about this repository is that you can install it via npm, use it a few times, while debugging your project, and then delete it."),(0,o.kt)("p",null,"like ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add javascript-email-templates")," and just use one or a few templates imported."),(0,o.kt)("p",null,"Or you can use a statement like,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"if(NODE_ENV == 'production') {\n    // send a test email to an admin\n}\n")),(0,o.kt)("p",null,"and it will work for a lot of cases"),(0,o.kt)("p",null,"The second repository can be more interesting."),(0,o.kt)("p",null,'Basically, I copy-pasted a render method from other repositories. Yes, they has "free to use and modify" license.'),(0,o.kt)("p",null,"I want to extend and isolate that render method, so it can be an independent package, suit our project needs and be easy to customize, if necessary (there is always a need to customize things. you can't make it work from the first shot)."),(0,o.kt)("p",null,"Show some love if you want more articles like this one! any activity will be appreciated."),(0,o.kt)("h4",{id:"linkedin-page-of-llazyemail-1"},(0,o.kt)("a",{parentName:"h4",href:"https://www.linkedin.com/company/llazyemail/"},"Linkedin page of LLazyEmail")))}m.isMDXComponent=!0}}]);