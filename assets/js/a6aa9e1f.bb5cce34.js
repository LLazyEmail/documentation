"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3089],{8665:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(3366),r=a(7294),l=a(6010),i=a(2600),m=a(9960),o="sidebar_a9qW",s="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD",p=a(5999);function E(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=["sidebar","toc","children"];function h(e){var t=e.sidebar,a=e.toc,m=e.children,o=(0,n.Z)(e,v),s=t&&t.items.length>0;return r.createElement(i.Z,o,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(E,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&r.createElement("div",{className:"col col--2"},a))))}},7329:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),r=a(2263),l=a(8665),i=a(8561),m=a(6299),o=a(5979),s=a(4739),c=a(6010);function u(e){var t=e.metadata,a=(0,r.Z)().siteConfig.title,l=t.blogDescription,i=t.blogTitle,m="/"===t.permalink?a:i;return n.createElement(n.Fragment,null,n.createElement(o.d,{title:m,description:l}),n.createElement(s.Z,{tag:"blog_posts_list"}))}function d(e){var t=e.metadata,a=e.items,r=e.sidebar;return n.createElement(l.Z,{sidebar:r},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(m.Z,{metadata:t}))}function g(e){return n.createElement(o.FG,{className:(0,c.Z)(o.kM.wrapper.blogPages,o.kM.page.blogListPage)},n.createElement(u,e),n.createElement(d,e))}},6299:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(5999),l=a(1750);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&n.createElement(l.Z,{permalink:i,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},8561:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7294),r=a(6010),l=a(5999),i=a(9960),m=a(4996),o=a(5979),s=a(8780),c=a(7459),u=a(6753),d="blogPostTitle_rzP5",g="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j",E=a(62),v="image_o0gy";function h(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function b(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL,m=t.email,o=l||m&&"mailto:"+m||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement("span",{className:"avatar__photo-link avatar__photo"},n.createElement(h,{href:o},n.createElement("img",{className:v,src:i,alt:a}))),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(h,{href:o,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}var f="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",Z="imageOnlyAuthorCol_S2np";function N(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",l?_:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,r.Z)(!l&&"col col--6",l?Z:f),key:t},n.createElement(b,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function k(e){var t,a,v=(a=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=(0,m.C)().withBaseUrl,b=e.children,f=e.frontMatter,_=e.assets,Z=e.metadata,k=e.truncated,P=e.isBlogPostPage,T=void 0!==P&&P,w=Z.date,y=Z.formattedDate,I=Z.permalink,L=Z.tags,R=Z.readingTime,A=Z.title,C=Z.editUrl,M=Z.authors,D=null!=(t=_.image)?t:f.image,U=!T&&k,x=L.length>0,F=T?"h1":"h2";return n.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(F,{className:d,itemProp:"headline"},T?A:n.createElement(i.Z,{itemProp:"url",to:I},A)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:w,itemProp:"datePublished"},y),void 0!==R&&n.createElement(n.Fragment,null," \xb7 ",v(R))),n.createElement(N,{authors:M,assets:_})),D&&n.createElement("meta",{itemProp:"image",content:h(D,{absolute:!0})}),n.createElement("div",{id:T?s.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(c.Z,null,b)),(x||k)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",T&&p)},x&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":U})},n.createElement(E.Z,{tags:L})),T&&C&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:C})),U&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":x})},n.createElement(i.Z,{to:Z.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:A})},n.createElement("b",null,n.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(5999),l=a(7462),i=a(3366),m=a(6010),o="iconEdit_dcUD",s=["className"];function c(e){var t=e.className,a=(0,i.Z)(e,s);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var u=a(5979);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(c,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(9960);function l(e){var t=e.permalink,a=e.title,l=e.subLabel;return n.createElement(r.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}},7774:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),l=a(9960),i="tag_hD8n",m="tagRegular_D6E_",o="tagWithCount_i0QQ";function s(e){var t=e.permalink,a=e.name,s=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(i,s?o:m)},a,s&&n.createElement("span",null,s))}},62:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),l=a(5999),i=a(7774),m="tags_XVD_",o="tag_JSN8";function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:o},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);