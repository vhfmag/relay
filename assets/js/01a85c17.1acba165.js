"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[64013],{39058:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(80102),n=a(67294),l=a(34334),s=a(34660),c=a(87524),i=a(39960),m=a(95999);const o="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",g="sidebarItem__DBe",b="sidebarItemLink_mo7H",E="sidebarItemLinkActive_I1ZP";function p(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,m.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(i.default,{isNavLink:!0,to:e.permalink,className:b,activeClassName:E},e.title))})))))}var v=a(13102);function f(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function h(e){return n.createElement(v.Zo,{component:f,props:e})}function k(e){var t=e.sidebar,a=(0,c.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(h,{sidebar:t}):n.createElement(p,{sidebar:t}):null}var N=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,c=e.children,i=(0,r.Z)(e,N),m=t&&t.items.length>0;return n.createElement(s.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(k,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&n.createElement("div",{className:"col col--2"},a))))}},20472:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var r=a(67294),n=a(34334),l=a(35155),s=a(10833),c=a(35281),i=a(39058),m=a(13008);const o="tag_Nnez";function u(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:o},r.createElement(m.Z,e))}))),r.createElement("hr",null))}function d(e){var t=e.tags,a=(0,l.P)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(u,{key:e.letter,letterEntry:e})})))}var g=a(90197);function b(e){var t=e.tags,a=e.sidebar,m=(0,l.M)();return r.createElement(s.FG,{className:(0,n.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},r.createElement(s.d,{title:m}),r.createElement(g.Z,{tag:"blog_tags_list"}),r.createElement(i.Z,{sidebar:a},r.createElement("h1",null,m),r.createElement(d,{tags:t})))}},13008:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(67294),n=a(34334),l=a(39960);const s="tag_zVej",c="tagRegular_sFm0",i="tagWithCount_h2kH";function m(e){var t=e.permalink,a=e.label,m=e.count;return r.createElement(l.default,{href:t,className:(0,n.Z)(s,m?i:c)},a,m&&r.createElement("span",null,m))}},35155:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>l});var r=a(95999),n=function(){return(0,r.translate)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function l(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],r=t[0];return a.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}}}]);