(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{1142:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,h=d["".concat(o,".").concat(p)]||d[p]||f[p]||i;return t?a.a.createElement(h,s(s({ref:n},l),{},{components:t})):a.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1143:function(e,n,t){"use strict";(function(e){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.bloks=void 0,n.bloks=i(t(1146));const o=["internal","external"];let s;try{s=t(1144).usePluginData}catch(f){s=null}function c(e){return u(e),d()?"internal"in e?l(e.internal):[]:"external"in e?l(e.external):[]}function l(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function d(){return e.env.FB_INTERNAL||s&&s("internaldocs-fb").FB_INTERNAL}n.fbContent=c,n.fbInternalOnly=function(e){return c({internal:e})},n.validateFbContentArgs=u,n.isInternal=d,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}}).call(this,t(1145))},1144:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a})),t.d(n,"useAllPluginInstancesData",(function(){return i})),t.d(n,"usePluginData",(function(){return o}));var r=t(22);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var n=a()[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return n}function o(e,n){void 0===n&&(n="default");var t=i(e)[n];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+n);return t}},1145:function(e,n){var t,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,l=[],u=!1,d=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&p())}function p(){if(!u){var e=s(f);u=!0;for(var n=l.length;n;){for(c=l,l=[];++d<n;)c&&c[d].run();d=-1,n=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function h(e,n){this.fun=e,this.array=n}function m(){}a.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];l.push(new h(e,n)),1!==l.length||u||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},1146:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(1147);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1147:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let a=!1,i=0;const o={};n.call=function(e){return r(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));a||(a=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in o||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?o[n].resolve(e.data.response):o[n].reject(new Error(e.data.error)),delete o[n]})));const n=i++,t=new Promise(((e,t)=>{o[n]={resolve:e,reject:t}})),r={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},s="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(r,s),t}))}},1148:function(e,n,t){"use strict";t(61);var r=t(1143),a=t(0);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var n=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),n)}var s=function(){var e=a.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},l=function(){return a.createElement(o,null,a.createElement(c,null),a.createElement(s,null))},u=function(){return a.createElement(o,null,a.createElement(s,null))};n.a=function(){return Object(r.fbContent)({internal:a.createElement(l,null),external:a.createElement(u,null)})}},369:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return h}));var r,a=t(3),i=t(8),o=(t(0),t(1142)),s=t(1148),c=t(1143),l={id:"refetching-connections",title:"Refetching Connections (Using and Changing Filters)",slug:"/guided-tour/list-data/refetching-connections/"},u={unversionedId:"guided-tour/list-data/refetching-connections",id:"version-v11.0.0/guided-tour/list-data/refetching-connections",isDocsHomePage:!1,title:"Refetching Connections (Using and Changing Filters)",description:"Often times when querying for a list of data, you can provide different values in the query which serve as filters that change the result set, or sort it differently.",source:"@site/versioned_docs/version-v11.0.0/guided-tour/list-data/refetching-connections.md",slug:"/guided-tour/list-data/refetching-connections/",permalink:"/docs/guided-tour/list-data/refetching-connections/",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/guided-tour/list-data/refetching-connections.md",version:"v11.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1620066231,sidebar:"version-v11.0.0/docs",previous:{title:"Streaming Pagination",permalink:"/docs/guided-tour/list-data/streaming-pagination/"},next:{title:"Updating Connections",permalink:"/docs/guided-tour/list-data/updating-connections/"}},d=[],f=(r="FbRefetchingConnectionsUsingUseTransition",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={toc:d};function h(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Often times when querying for a list of data, you can provide different values in the query which serve as filters that change the result set, or sort it differently."),Object(o.b)("p",null,"Some examples of this are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Building a search typeahead, where the list of results is a list filtered by the search term entered by the user."),Object(o.b)("li",{parentName:"ul"},"Changing the ordering mode of the list comments currently displayed for a post, which could produce a completely different set of comments from the server."),Object(o.b)("li",{parentName:"ul"},"Changing the way News Feed is ranked and sorted.")),Object(o.b)("p",null,"Specifically, in GraphQL, connection fields can accept arguments to sort or filter the set of queried results:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'fragment UserFragment on User {\n  name\n  friends(order_by: DATE_ADDED, search_term: "Alice", first: 10) {\n    edges {\n      node {\n        name\n        age\n      }\n    }\n  }\n}\n')),Object(o.b)("p",null,"In Relay, we can pass those arguments as usual using GraphQL ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../rendering/variables/"}),"variables")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'type Props = {\n  userRef: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  const userRef = props.userRef;\n\n  const {data, ...} = usePaginationFragment(\n    graphql`\n      fragment FriendsListComponent_user on User {\n        name\n        friends(\n          order_by: $orderBy,\n          search_term: $searchTerm,\n          after: $cursor,\n          first: $count,\n        ) @connection(key: "FriendsListComponent_user_friends_connection") {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    userRef,\n  );\n\n  return (...);\n}\n')),Object(o.b)("p",null,"When paginating, the original values for those filters will be preserved:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'type Props = {\n  userRef: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  const userRef = props.userRef;\n\n  const {data, loadNext} = usePaginationFragment(\n    graphql`\n      fragment FriendsListComponent_user on User {\n        name\n        friends(order_by: $orderBy, search_term: $searchTerm)\n          @connection(key: "FriendsListComponent_user_friends_connection") {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    userRef,\n  );\n\n  return (\n    <>\n      <h1>Friends of {data.name}:</h1>\n      <List items={data.friends?.nodes}>{...}</List>\n\n      {/*\n       Loading the next items will use the original order_by and search_term\n       values used for the initial query\n      */ }\n      <Button onClick={() => loadNext(10)}>Load more friends</Button>\n    </>\n  );\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Note that calling ",Object(o.b)("inlineCode",{parentName:"li"},"loadNext")," will use the original ",Object(o.b)("inlineCode",{parentName:"li"},"order_by")," and ",Object(o.b)("inlineCode",{parentName:"li"},"search_term")," values used for the initial query. During pagination, these value won't (",Object(o.b)("em",{parentName:"li"},"and shouldn't"),") change.")),Object(o.b)("p",null,"If we want to refetch the connection with ",Object(o.b)("em",{parentName:"p"},"different")," variables, we can use the ",Object(o.b)("inlineCode",{parentName:"p"},"refetch")," function provided by ",Object(o.b)("inlineCode",{parentName:"p"},"usePaginationFragment"),", similarly to how we do so when ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../refetching/refetching-fragments-with-different-data/"}),"Refetching Fragments with Different Data"),":"),Object(o.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(o.b)(f,{mdxType:"FbRefetchingConnectionsUsingUseTransition"})),Object(o.b)(c.OssOnly,{mdxType:"OssOnly"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/**\n * FriendsListComponent.react.js\n */\nimport type {FriendsListComponent_user$ref} from 'FriendsListComponent_user.graphql';\n\nconst React = require('React');\nconst {useState, useEffect} = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\n\ntype Props = {\n  searchTerm?: string,\n  user: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  const searchTerm = props.searchTerm;\n  const {data, loadNext, refetch} = usePaginationFragment(\n    graphql`\n      fragment FriendsListComponent_user on User {\n        name\n        friends(\n          order_by: $orderBy,\n          search_term: $searchTerm,\n          after: $cursor,\n          first: $count,\n        ) @connection(key: \"FriendsListComponent_user_friends_connection\") {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n  useEffect(() => {\n    // When the searchTerm provided via props changes, refetch the connection\n    // with the new searchTerm\n    refetch({first: 10, search_term: searchTerm}, {fetchPolicy: 'store-or-network'});\n  }, [searchTerm])\n\n  return (\n    <>\n      <h1>Friends of {data.name}:</h1>\n\n      {/* When the button is clicked, refetch the connection but sorted differently */}\n      <Button\n        onClick={() =>\n          refetch({first: 10, orderBy: 'DATE_ADDED'});\n        }>\n        Sort by date added\n      </Button>\n\n      <List items={data.friends?.nodes}>...</List>\n      <Button onClick={() => loadNext(10)}>Load more friends</Button>\n    </>\n  );\n}\n")),Object(o.b)("p",null,"Let's distill what's going on here:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Calling ",Object(o.b)("inlineCode",{parentName:"li"},"refetch")," and passing a new set of variables will fetch the fragment again ",Object(o.b)("em",{parentName:"li"},"with the newly provided variables"),". The variables you need to provide are a subset of the variables that the generated query expects; the generated query will require an ",Object(o.b)("inlineCode",{parentName:"li"},"id"),", if the type of the fragment has an ",Object(o.b)("inlineCode",{parentName:"li"},"id")," field, and any other variables that are transitively referenced in your fragment.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In our case, we need to pass the count we want to fetch as the ",Object(o.b)("inlineCode",{parentName:"li"},"first")," variable, and we can pass different values for our filters, like ",Object(o.b)("inlineCode",{parentName:"li"},"orderBy")," or ",Object(o.b)("inlineCode",{parentName:"li"},"searchTerm"),"."))),Object(o.b)("li",{parentName:"ul"},"This will re-render your component and may cause it to suspend (as explained in ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"../../rendering/loading-states/"}),"Loading States with Suspense"),") if it needs to send and wait for a network request. If ",Object(o.b)("inlineCode",{parentName:"li"},"refetch")," causes the component to suspend, you'll need to make sure that there's a ",Object(o.b)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping this component from above."),Object(o.b)("li",{parentName:"ul"},"Conceptually, when we call refetch, we're fetching the connection ",Object(o.b)("em",{parentName:"li"},"from scratch"),". It other words, we're fetching it again from the ",Object(o.b)("em",{parentName:"li"},"beginning")," and ",Object(o.b)("em",{parentName:"li"},'"resetting"')," our pagination state. For example, if we fetch the connection with a different ",Object(o.b)("inlineCode",{parentName:"li"},"search_term"),", our pagination information for the previous ",Object(o.b)("inlineCode",{parentName:"li"},"search_term")," no longer makes sense, since we're essentially paginating over a new list of items."))),Object(o.b)(s.a,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);