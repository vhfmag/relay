"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[64780,36675],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>p,useMDXComponents:()=>u,withMDXComponents:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){return function(n){var t=u(n.components);return r.createElement(e,i({},n,{components:t}))}},u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,h=c["".concat(o,".").concat(m)]||c[m]||f[m]||i;return t?r.createElement(h,s(s({ref:n},l),{},{components:t})):r.createElement(h,s({ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(39960),a=t(44256),i=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var d=function(){var e=i.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},c=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return i.createElement(s,null,i.createElement(l,null),i.createElement(d,null),i.createElement(c,null))},m=function(){return i.createElement(s,null,i.createElement(d,null),i.createElement(c,null))};const f=function(){return(0,a.fbContent)({internal:i.createElement(u,null),external:i.createElement(m,null)})}},86389:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),o=["components"],s={},d=void 0,l={unversionedId:"guided-tour/refetching/OssAvoidSuspenseNote",id:"version-v12.0.0/guided-tour/refetching/OssAvoidSuspenseNote",title:"OssAvoidSuspenseNote",description:"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending.",source:"@site/versioned_docs/version-v12.0.0/guided-tour/refetching/OssAvoidSuspenseNote.md",sourceDirName:"guided-tour/refetching",slug:"/guided-tour/refetching/OssAvoidSuspenseNote",permalink:"/docs/v12.0.0/guided-tour/refetching/OssAvoidSuspenseNote",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guided-tour/refetching/OssAvoidSuspenseNote.md",tags:[],version:"v12.0.0",lastUpdatedBy:"voideanvalue",lastUpdatedAt:1658504693,formattedLastUpdatedAt:"7/22/2022",frontMatter:{}},c={},u=[],m={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"In future versions of React when concurrent rendering is supported, React will provide an option to support this case and avoid hiding already rendered content with a Suspense fallback when suspending."))))}f.isMDXComponent=!0},89429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),o=t(68629),s=t(44256),d=t(86389),l=["components"],c={id:"refreshing-fragments",title:"Refreshing Fragments",slug:"/guided-tour/refetching/refreshing-fragments/",description:"Relay guide to refreshing fragments",keywords:["refreshing","fragment"]},u=void 0,m={unversionedId:"guided-tour/refetching/refreshing-fragments",id:"version-v12.0.0/guided-tour/refetching/refreshing-fragments",title:"Refreshing Fragments",description:"Relay guide to refreshing fragments",source:"@site/versioned_docs/version-v12.0.0/guided-tour/refetching/refreshing-fragments.md",sourceDirName:"guided-tour/refetching",slug:"/guided-tour/refetching/refreshing-fragments/",permalink:"/docs/v12.0.0/guided-tour/refetching/refreshing-fragments/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guided-tour/refetching/refreshing-fragments.md",tags:[],version:"v12.0.0",lastUpdatedBy:"voideanvalue",lastUpdatedAt:1658504693,formattedLastUpdatedAt:"7/22/2022",frontMatter:{id:"refreshing-fragments",title:"Refreshing Fragments",slug:"/guided-tour/refetching/refreshing-fragments/",description:"Relay guide to refreshing fragments",keywords:["refreshing","fragment"]},sidebar:"version-v12.0.0/docs",previous:{title:"Refetching Queries with Different Data",permalink:"/docs/v12.0.0/guided-tour/refetching/refetching-queries-with-different-data/"},next:{title:"Refetching Fragments with Different Data",permalink:"/docs/v12.0.0/guided-tour/refetching/refetching-fragments-with-different-data/"}},f={},h=[{value:"Using real-time features",id:"using-real-time-features",level:2},{value:"Using <code>useRefetchableFragment</code>",id:"using-userefetchablefragment",level:2},{value:"If you need to avoid Suspense",id:"if-you-need-to-avoid-suspense",level:3}],p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)}},g=p("FbRefreshingUsingRealTimeFeatures"),y=p("FbRefreshingFragments"),v=p("FbAvoidSuspenseCaution"),w={toc:h};function b(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"When referring to ",(0,i.mdx)("strong",{parentName:"p"},'"refreshing a fragment"'),", we mean fetching the ",(0,i.mdx)("em",{parentName:"p"},"exact")," same data that was originally rendered by the fragment, in order to get the most up-to-date version of that data from the server."),(0,i.mdx)("h2",{id:"using-real-time-features"},"Using real-time features"),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(g,{mdxType:"FbRefreshingUsingRealTimeFeatures"})),(0,i.mdx)(s.OssOnly,{mdxType:"OssOnly"},"If we want to keep our data up to date with the latest version from the server, the first thing to consider is if it appropriate to use any real-time features, which can make it easier to automatically keep the data up to date without manually refreshing the data periodically.",(0,i.mdx)("p",null,"One example of this is using ",(0,i.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/guided-tour/updating-data/graphql-subscriptions/"},"GraphQL Subscriptions"),", which will require additional configuration on your server and ",(0,i.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/guided-tour/updating-data/graphql-subscriptions/#configuring-the-network-layer"},"network layer"),".")),(0,i.mdx)("h2",{id:"using-userefetchablefragment"},"Using ",(0,i.mdx)("inlineCode",{parentName:"h2"},"useRefetchableFragment")),(0,i.mdx)("p",null,"In order to manually refresh the data for a fragment, we need a query to refetch the fragment under; remember, ",(0,i.mdx)("em",{parentName:"p"},"fragments can't be fetched by themselves: they need to be part of a query,"),' so we can\'t just "fetch" the fragment again by itself.'),(0,i.mdx)("p",null,"To do so, we can also use the ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/use-refetchable-fragment/"},(0,i.mdx)("inlineCode",{parentName:"a"},"useRefetchableFragment"))," Hook in combination with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@refetchable")," directive, which will automatically generate a query to refetch the fragment under, and which we can fetch using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"refetch")," function:"),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(y,{mdxType:"FbRefreshingFragments"})),(0,i.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {UserComponent_user$key} from 'UserComponent_user.graphql';\n// This type is autogenerated by Relay given @refetchable used below\nimport type {UserComponentRefreshQuery} from 'UserComponentRefreshQuery.graphql';\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const [data, refetch] = useRefetchableFragment<UserComponentRefreshQuery, _>(\n    graphql`\n      fragment UserComponent_user on User\n      # @refetchable makes it so Relay autogenerates a query for\n      # fetching this fragment\n      @refetchable(queryName: \"UserComponentRefreshQuery\") {\n        id\n        name\n        friends {\n          count\n        }\n      }\n    `,\n    props.user,\n  );\n\n  const refresh = useCallback(() => {\n    // We call refetch with empty variables: `{}`,\n    // which will refetch the @refetchable query with the same\n    // original variables the fragment was fetched with, and update\n    // this component with the latest fetched data.\n    // The fetchPolicy ensures we always fetch from the server and skip\n    // the local data cache.\n    refetch({}, {fetchPolicy: 'network-only'})\n  }), [/* ... */];\n\n  return (\n    <>\n      <h1>{data.name}</h1>\n      <div>Friends count: {data.friends?.count}</div>\n      <Button\n        onClick={() => refresh()}>\n        Fetch latest count\n      </Button>\n    </>\n  );\n}\n")),(0,i.mdx)("p",null,"Let's distill what's happening in this example:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"useRefetchableFragment")," behaves similarly to ",(0,i.mdx)("a",{parentName:"li",href:"../../../api-reference/use-fragment/"},(0,i.mdx)("inlineCode",{parentName:"a"},"useFragment"))," (see the ",(0,i.mdx)("a",{parentName:"li",href:"../../rendering/fragments/"},"Fragments")," section), but with a few additions:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"It expects a fragment that is annotated with the ",(0,i.mdx)("inlineCode",{parentName:"li"},"@refetchable")," directive. Note that  ",(0,i.mdx)("inlineCode",{parentName:"li"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are on ',(0,i.mdx)("inlineCode",{parentName:"li"},"Viewer"),", on ",(0,i.mdx)("inlineCode",{parentName:"li"},"Query"),", on any type that implements ",(0,i.mdx)("inlineCode",{parentName:"li"},"Node")," (i.e. a type that has an ",(0,i.mdx)("inlineCode",{parentName:"li"},"id")," field)."))),(0,i.mdx)("li",{parentName:"ul"},"It returns a ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," function, which is already Flow-typed to expect the query variables that the generated query expects"),(0,i.mdx)("li",{parentName:"ul"},"It takes two Flow type parameters: the type of the generated query (in our case  ",(0,i.mdx)("inlineCode",{parentName:"li"},"UserComponentRefreshQuery"),"), and a second type which can always be inferred, so you only need to pass underscore (",(0,i.mdx)("inlineCode",{parentName:"li"},"_"),")."),(0,i.mdx)("li",{parentName:"ul"},"We're calling the ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," function with 2 main inputs:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The first argument is the set of variables to fetch the fragment with. In this case, calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," and passing an empty set of variables will fetch the fragment again ",(0,i.mdx)("em",{parentName:"li"},"with the exact same variables the fragment was originally fetched with,")," which is what we want for a refresh."),(0,i.mdx)("li",{parentName:"ul"},"In the second argument we are passing a ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",(0,i.mdx)("inlineCode",{parentName:"li"},"'network-only'")," to ensure that we always fetch from the network and skip the local data cache."))),(0,i.mdx)("li",{parentName:"ul"},"Calling ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," will re-render the component and cause ",(0,i.mdx)("inlineCode",{parentName:"li"},"useRefetchableFragment")," to suspend (as explained in ",(0,i.mdx)("a",{parentName:"li",href:"../../rendering/loading-states/"},"Loading States with Suspense"),"), since a network request will be required due to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," we are using. This means that you'll need to make sure that there's a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping this component from above in order to show a fallback loading state."))),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Note that this same behavior also applies to using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"refetch")," function from ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/use-pagination-fragment"},(0,i.mdx)("inlineCode",{parentName:"a"},"usePaginationFragment")),"."))),(0,i.mdx)("h3",{id:"if-you-need-to-avoid-suspense"},"If you need to avoid Suspense"),(0,i.mdx)("p",null,"In some cases, you might want to avoid showing a Suspense fallback, which would hide the already rendered content. For these cases, you can use ",(0,i.mdx)("a",{parentName:"p",href:"../../../api-reference/fetch-query/"},(0,i.mdx)("inlineCode",{parentName:"a"},"fetchQuery"))," instead, and manually keep track of a loading state:"),(0,i.mdx)(s.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)(v,{mdxType:"FbAvoidSuspenseCaution"})),(0,i.mdx)(s.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)(d.default,{mdxType:"OssAvoidSuspenseNote"})),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {UserComponent_user$key} from 'UserComponent_user.graphql';\n// This type is autogenerated by Relay given @refetchable used below\nimport type {UserComponentRefreshQuery} from 'UserComponentRefreshQuery.graphql';\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const [data, refetch] = useRefetchableFragment<UserComponentRefreshQuery, _>(\n    graphql`\n      fragment UserComponent_user on User\n      # @refetchable makes it so Relay autogenerates a query for\n      # fetching this fragment\n      @refetchable(queryName: \"UserComponentRefreshQuery\") {\n        id\n        name\n        friends {\n          count\n        }\n      }\n    `,\n    props.user,\n  );\n\n  const [isRefreshing, setIsRefreshing] = useState(false);\n  const refresh = useCallback(() => {\n    if (isRefreshing) { return; }\n    setIsRefreshing(true);\n\n    // fetchQuery will fetch the query and write\n    // the data to the Relay store. This will ensure\n    // that when we re-render, the data is already\n    // cached and we don't suspend\n    fetchQuery(environment, AppQuery, variables)\n      .subscribe({\n        complete: () => {\n          setIsRefreshing(false);\n\n          // *After* the query has been fetched, we call\n          // refetch again to re-render with the updated data.\n          // At this point the data for the query should\n          // be cached, so we use the 'store-only'\n          // fetchPolicy to avoid suspending.\n          refetch({}, {fetchPolicy: 'store-only'});\n        },\n        error: () => {\n          setIsRefreshing(false);\n        }\n      });\n  }, [/* ... */]);\n\n  return (\n    <>\n      <h1>{data.name}</h1>\n      <div>Friends count: {data.friends?.count}</div>\n      <Button\n        disabled={isRefreshing}\n        onClick={() => refresh()}>\n        Fetch latest count {isRefreshing ? <LoadingSpinner /> : null}\n      </Button>\n    </>\n  );\n}\n")),(0,i.mdx)("p",null,"Let's distill what's going on here:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When refreshing, we now keep track of our own ",(0,i.mdx)("inlineCode",{parentName:"li"},"isRefreshing")," loading state, since we are avoiding suspending. We can use this state to render a busy spinner or similar loading UI in our component, ",(0,i.mdx)("em",{parentName:"li"},"without")," hiding the content."),(0,i.mdx)("li",{parentName:"ul"},"In the event handler, we first call ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery"),", which will fetch the query and write the data to the local Relay store. When the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchQuery")," network request completes, we call ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," so that we render the updated data, similar to the previous example."),(0,i.mdx)("li",{parentName:"ul"},"At this point, when ",(0,i.mdx)("inlineCode",{parentName:"li"},"refetch")," is called, the data for the fragment should already be cached in the local Relay store, so we use ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchPolicy")," of ",(0,i.mdx)("inlineCode",{parentName:"li"},"'store-only'")," to avoid suspending and only read the already cached data.")),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}b.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{d(r.next(e))}catch(n){i(n)}}function s(e){try{d(r.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const a=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield a.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{d(r.next(e))}catch(n){i(n)}}function s(e){try{d(r.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,a=0;const i={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in i||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?i[n].resolve(e.data.response):i[n].reject(new Error(e.data.error)),delete i[n]})));const n=a++,t=new Promise(((e,t)=>{i[n]={resolve:e,reject:t}})),o={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},s="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(o,s),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{d(r.next(e))}catch(n){i(n)}}function s(e){try{d(r.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const a=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield a.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield a.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=i(t(47596)),n.uidocs=i(t(17483)),n.feedback=i(t(24855)),n.inpageeditor=i(t(27312));const o=["internal","external"];function s(e){return l(e),c()?"internal"in e?d(e.internal):[]:"external"in e?d(e.external):[]}function d(e){return"function"==typeof e?e():e}function l(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function c(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function u(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=s,n.fbInternalOnly=function(e){return s({internal:e})},n.validateFbContentArgs=l,n.isInternal=c,n.hasEphemeralDiffNumber=function(){return Boolean(u())},n.getEphemeralDiffNumber=u,n.FbInternalOnly=function(e){return c()?e.children:null},n.OssOnly=function(e){return c()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{d(r.next(e))}catch(n){i(n)}}function s(e){try{d(r.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const a=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r,diff_number:i}=e;try{return yield a.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r,diff_number:i}})}catch(o){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${o}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(a,i){function o(e){try{d(r.next(e))}catch(n){i(n)}}function s(e){try{d(r.throw(e))}catch(n){i(n)}}function d(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const a=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield a.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);