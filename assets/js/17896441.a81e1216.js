"use strict";(self.webpackChunkfu_rong_jiang=self.webpackChunkfu_rong_jiang||[]).push([[8401],{1243:(e,n,t)=>{t.d(n,{A:()=>p});t(6540);var s=t(4164),a=t(7559),i=t(1754),o=t(9169),l=t(8774),r=t(1312),c=t(6025),d=t(4848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:n,href:t,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,d.jsx)(l.A,{className:a,href:t,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:n})}):(0,d.jsx)("span",{className:a,children:n})}function b(e){let{children:n,active:t,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function p(){const e=(0,i.OF)(),n=(0,o.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,d.jsx)(h,{}),e.map(((n,t)=>{const s=t===e.length-1,a="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,d.jsx)(b,{active:s,index:t,addMicrodata:!!a,children:(0,d.jsx)(x,{href:a,isLast:s,children:n.label})},t)}))]})}):null}},6011:(e,n,t)=>{t.r(n),t.d(n,{default:()=>P});var s=t(6540),a=t(1213),i=t(9532),o=t(4848);const l=s.createContext(null);function r(e){let{children:n,content:t}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,o.jsx)(l.Provider,{value:a,children:n})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:n,assets:t}=c();return(0,o.jsx)(a.be,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var u=t(4164),m=t(4581),h=t(7719);function v(){const{metadata:e}=c();return(0,o.jsx)(h.A,{previous:e.previous,next:e.next})}var x=t(1878),b=t(4267),p=t(7559),f=t(8046),g=t(4336);function j(){const{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:a}=e,i=a.length>0,l=!!(n||t||s);return i||l?(0,o.jsxs)("footer",{className:(0,u.A)(p.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,u.A)("row margin-top--sm",p.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(f.A,{tags:a})})}),l&&(0,o.jsx)(g.A,{className:(0,u.A)("margin-top--sm",p.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var A=t(1422),C=t(5195),L=t(1312);const N={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function _(e){let{collapsed:n,...t}=e;return(0,o.jsx)("button",{type:"button",...t,className:(0,u.A)("clean-btn",N.tocCollapsibleButton,!n&&N.tocCollapsibleButtonExpanded,t.className),children:(0,o.jsx)(L.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const T={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function k(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,A.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.A)(T.tocCollapsible,!i&&T.tocCollapsibleExpanded,t),children:[(0,o.jsx)(_,{collapsed:i,onClick:l}),(0,o.jsx)(A.N,{lazy:!0,className:T.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(C.A,{toc:n,minHeadingLevel:s,maxHeadingLevel:a})})]})}const H={tocMobile:"tocMobile_ITEo"};function M(){const{toc:e,frontMatter:n}=c();return(0,o.jsx)(k,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.A)(p.G.docs.docTocMobile,H.tocMobile)})}var y=t(7763);function I(){const{toc:e,frontMatter:n}=c();return(0,o.jsx)(y.A,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:p.G.docs.docTocDesktop})}var w=t(1107),E=t(6462);function B(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=c();return n.hide_title||void 0!==t?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.A)(p.G.docs.docMarkdown,"markdown"),children:[t&&(0,o.jsx)("header",{children:(0,o.jsx)(w.A,{as:"h1",children:t})}),(0,o.jsx)(E.A,{children:n})]})}var O=t(1243),V=t(996);const S={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function G(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=c(),t=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&n.length>0;return{hidden:s,mobile:a?(0,o.jsx)(M,{}):void 0,desktop:!a||"desktop"!==t&&"ssr"!==t?void 0:(0,o.jsx)(I,{})}}(),{metadata:{unlisted:s}}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!t.hidden&&S.docItemCol),children:[s&&(0,o.jsx)(V.A,{}),(0,o.jsx)(x.A,{}),(0,o.jsxs)("div",{className:S.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(O.A,{}),(0,o.jsx)(b.A,{}),t.mobile,(0,o.jsx)(B,{children:n}),(0,o.jsx)(j,{})]}),(0,o.jsx)(v,{})]})]}),t.desktop&&(0,o.jsx)("div",{className:"col col--3",children:t.desktop})]})}function P(e){const n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(a.e3,{className:n,children:[(0,o.jsx)(d,{}),(0,o.jsx)(G,{children:(0,o.jsx)(t,{})})]})})}},7719:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var s=t(1312),a=t(9022),i=t(4848);function o(e){const{previous:n,next:t}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,i.jsx)(a.A,{...n,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,i.jsx)(a.A,{...t,subLabel:(0,i.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var s=t(4164),a=t(1312),i=t(7559),o=t(2252),l=t(4848);function r(e){let{className:n}=e;const t=(0,o.r)();return t.badge?(0,l.jsx)("span",{className:(0,s.A)(n,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}},1878:(e,n,t)=>{t.d(n,{A:()=>b});t(6540);var s=t(4164),a=t(4586),i=t(8774),o=t(1312),l=t(4070),r=t(7559),c=t(5597),d=t(2252),u=t(4848);const m={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const n=m[e.versionMetadata.banner];return(0,u.jsx)(n,{...e})}function v(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,u.jsx)(o.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:t,onClick:s,children:(0,u.jsx)(o.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:i}}=(0,a.A)(),{pluginId:o}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(o),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,l.HW)(o),b=m??(p=x).docs.find((e=>e.id===p.mainDocId));var p;return(0,u.jsxs)("div",{className:(0,s.A)(n,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:t})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:x.label,to:b.path,onClick:()=>d(x.name)})})]})}function b(e){let{className:n}=e;const t=(0,d.r)();return t.banner?(0,u.jsx)(x,{className:n,versionMetadata:t}):null}},5195:(e,n,t)=>{t.d(n,{A:()=>x});var s=t(6540),a=t(6342);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):s.push(a)})),s}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>l(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),c=r(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(8774),m=t(4848);function h(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const x=(0,a.p)(),b=c??x.tableOfContents.minHeadingLevel,p=u??x.tableOfContents.maxHeadingLevel,f=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>o({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:b,maxHeadingLevel:p});return d((0,s.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:b,maxHeadingLevel:p}}),[l,r,b,p])),(0,m.jsx)(v,{toc:f,className:t,linkClassName:l,...h})}},7763:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var s=t(4164),a=t(5195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=t(4848);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,o.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(a.A,{...t,linkClassName:l,linkActiveClassName:r})})}},996:(e,n,t)=>{t.d(n,{A:()=>h});t(6540);var s=t(4164),a=t(1312),i=t(5260),o=t(4848);function l(){return(0,o.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,o.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(i.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(7559),u=t(7293);function m(e){let{className:n}=e;return(0,o.jsx)(u.A,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,s.A)(n,d.G.common.unlistedBanner),children:(0,o.jsx)(r,{})})}function h(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{...e})]})}},6462:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var s=t(8478),a=t(5243),i=t(4848);const o=["\u4f60\u778e\u4e86\uff1f\u8bd5\u8bd5\u6df1\u8272\u6a21\u5f0f","\u6b22\u8fce\u6765\u5230\u5357\u5eb7\u4e8c\u4e2d\u6587\u5b66\u793e","\u6587\u5b66\u793e\u6210\u7acb\u4e8e 2020 \u5e74","\u90fd\u51e0\u70b9\u4e86\uff0c\u8fd8\u5728\u770b\uff0c\u8d76\u5feb\u7761\u89c9","\u4f60\u662f\u8fc7\u6765\u770b\u6587\u7ae0\u7684\u8fd8\u662f\u770b Tip \u7684","Loading... \u662f\u505c\u4e0d\u4e0b\u6765\u7684","\u4e0d\u8981\u505c\u4e0b\u6765\u554a\uff08\u6307\u5199\u6587\u7ae0\uff09","\u5982\u679c\u6587\u7ae0\u770b\u4e0d\u61c2\uff0c\u90a3\u4e48\u4f60\u6ca1\u6709\u770b\u61c2\u6587\u7ae0","\u6ca1\u6709\u66f4\u591a\u4e86......","\u4f60\u731c\u731c\u5237\u65b0\u51e0\u6b21\u624d\u80fd\u518d\u770b\u5230\u8fd9\u6761 Tip\uff1f","\u8fd9\u662f\u4e00\u6761 Tip","\u6b22\u8fce\u5927\u5bb6\u6295\u7a3f\uff01","\u300a\u8299\u84c9\u6c5f\u300b\u8fd9\u4e48\u96be\u542c\u7684\u540d\u5b57\u5230\u5e95\u662f\u8c01\u53d6\u7684\u554a","\u300a\u8299\u84c9\u6c5f\u300b\u636e\u8bf4\u662f\u5b66\u6821\u67d0\u4f4d\u8001\u524d\u8f88\u4eec\u7559\u4e0b\u7684\u540d\u5b57\uff1f","\u73b0\u5728\u7684\u6587\u5b66\u793e\u662f liutailin \u5efa\u7acb\u8d77\u6765\u7684","\u65e9\u4e0a\u597d\uff0c\u4e2d\u5348\u597d\uff0c\u4e0b\u5348\u597d\uff0c\u665a\u4e0a\u597d\uff01","\u6587\u5b66\u793e\u6bcf\u4e00\u5c4a\u7684\u6210\u5458\u90fd\u7279\u522b\u7684\u5c11\uff08\u624d\u4e0d\u662f\u56e0\u4e3a\u6ca1\u4eba\u62a5\u540d\u5462\uff01\uff09","\u7f51\u7ad9\u57df\u540d\u4ee5 J \u5f00\u5934\u662f\u4e3a\u4e86\u7eaa\u5ff5\u4e00\u4f4d\u5b66\u59d0","\u6587\u5b66\u793e\u5f00\u59cb\u662f\u7531\u5b66\u751f\u4f1a\u8d1f\u8d23\uff0c\u7b2c\u4e8c\u5c4a\u540e\u72ec\u7acb\u6210\u4e3a\u4e86\u793e\u56e2","\u5f53\u5e74\u7684\u56e2\u59d4\u4ee5\u53ca\u6821\u957f\u5bf9\u4e8e\u6587\u5b66\u793e\u7684\u6210\u7acb\u4ea7\u751f\u7740\u6df1\u8fdc\u7684\u5f71\u54cd","2020 \u5e74\u793e\u56e2\u4ee5\u53ca\u300a\u8299\u84c9\u6c5f\u300b\u9884\u5907\u5efa\u7acb","\u5b9e\u9645\u4e0a\u5728 2021 \u5e74\u8d77\u6587\u5b66\u793e\u624d\u6b63\u5f0f\u5bf9\u5916\u62db\u52df\u6210\u5458","\u300a\u8299\u84c9\u6c5f\u300b\u636e\u8bf4\u662f\u6cbf\u7528\u4e86\u524d\u8f88\u7684\u540d\u5b57","\u4f60\u597d\uff0c\u4e16\u754c\uff01","Crtl + K \u53ef\u4ee5\u5feb\u901f\u641c\u7d22\u54e6","F5 \u53ef\u4ee5\u5feb\u901f\u5237\u65b0\u9875\u9762\u54e6","\u6587\u7ae0\u672c\u5929\u6210\uff0c\u5999\u624b\u5076\u5f97\u4e4b","\u8bda\u631a\u7684\u9080\u8bf7\u60a8\u52a0\u5165\u6587\u5b66\u793e","\u9009\u62e9\u6587\u5b66\u793e\uff0c\u9009\u62e9\u6210\u529f\uff08\uff09"],l=()=>{const e=o[Math.floor(Math.random()*o.length)];return(0,i.jsxs)("p",{style:{textAlign:"center",marginTop:"1rem"},children:[(0,i.jsx)("b",{children:"Tip: "}),e]})},r=()=>(0,i.jsx)(l,{}),c=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{...e}),(0,i.jsx)(s.A,{fallback:(0,i.jsx)("div",{style:{textAlign:"center",marginTop:"1rem"},children:"Loading..."}),children:()=>(0,i.jsx)(r,{})})]})}}]);