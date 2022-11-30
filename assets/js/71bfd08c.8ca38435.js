"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[39e3],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),m=function(e){return function(r){var n=s(r.components);return t.createElement(e,o({},r,{components:n}))}},s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,y=m["".concat(i,".").concat(u)]||m[u]||c[u]||o;return n?t.createElement(y,d(d({ref:r},p),{},{components:n})):t.createElement(y,d({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},32997:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>d,metadata:()=>p,toc:()=>s});var t=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],d={id:"query-renderer",title:"QueryRenderer",original_id:"query-renderer"},l=void 0,p={unversionedId:"query-renderer",id:"version-v10.1.0/query-renderer",title:"QueryRenderer",description:"A QueryRenderer is a React Component at the root of a Relay component tree. It takes a query, fetches the given query, and uses the render prop to render the resulting data.",source:"@site/versioned_docs/version-v10.1.0/Modern-QueryRenderer.md",sourceDirName:".",slug:"/query-renderer",permalink:"/docs/v10.1.0/query-renderer",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.1.0/Modern-QueryRenderer.md",tags:[],version:"v10.1.0",lastUpdatedBy:"Mat Hostetter",lastUpdatedAt:1669826238,formattedLastUpdatedAt:"Nov 30, 2022",frontMatter:{id:"query-renderer",title:"QueryRenderer",original_id:"query-renderer"},sidebar:"version-v10.1.0/docs",previous:{title:"Network Layer",permalink:"/docs/v10.1.0/network-layer"},next:{title:"Fragment Container",permalink:"/docs/v10.1.0/fragment-container"}},m={},s=[{value:"Props",id:"props",level:2},{value:"Example",id:"example",level:2}],u={toc:s};function c(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"A ",(0,o.mdx)("inlineCode",{parentName:"p"},"QueryRenderer")," is a React Component at the root of a Relay component tree. It takes a query, fetches the given query, and uses the ",(0,o.mdx)("inlineCode",{parentName:"p"},"render")," prop to render the resulting data."),(0,o.mdx)("p",null,"As React components, ",(0,o.mdx)("inlineCode",{parentName:"p"},"QueryRenderer"),"s can be rendered anywhere that a React component can be rendered, i.e. not just at the top level but ",(0,o.mdx)("em",{parentName:"p"},"within")," other components or containers; for example, to lazily fetch additional data for a popover."),(0,o.mdx)("p",null,"However, a ",(0,o.mdx)("inlineCode",{parentName:"p"},"QueryRenderer")," will not start loading its data until it is mounted, so nested ",(0,o.mdx)("inlineCode",{parentName:"p"},"QueryRenderer")," components can lead to request waterfalls if used unnecessarily."),(0,o.mdx)("h2",{id:"props"},"Props"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"environment"),": The ",(0,o.mdx)("a",{parentName:"li",href:"/docs/v10.1.0/relay-environment"},"Relay Environment")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"query"),": The ",(0,o.mdx)("inlineCode",{parentName:"li"},"graphql")," tagged query. ",(0,o.mdx)("strong",{parentName:"li"},"Note:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"relay-compiler")," enforces the query to be named as ",(0,o.mdx)("inlineCode",{parentName:"li"},"<FileName>Query"),". Optional, if not provided, an empty ",(0,o.mdx)("inlineCode",{parentName:"li"},"props")," object is passed to the ",(0,o.mdx)("inlineCode",{parentName:"li"},"render")," callback."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"cacheConfig?"),": Optional object containing a set of cache configuration options, i.e. ",(0,o.mdx)("inlineCode",{parentName:"li"},"force: true")," requires the fetch to be issued regardless of the state of any configured response cache."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"fetchPolicy?"),": Optional prop to indicate if data already present in the store should be used to render immediately and updated from the network afterwards using the ",(0,o.mdx)("inlineCode",{parentName:"li"},"store-and-network")," key. Using the ",(0,o.mdx)("inlineCode",{parentName:"li"},"network-only")," key, which is the default behavior, ignores data already present in the store and waits for the network results to come back."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"variables"),": Object containing set of variables to pass to the GraphQL query, i.e. a mapping from variable name to value. ",(0,o.mdx)("strong",{parentName:"li"},"Note:")," If a new set of variables is passed, the ",(0,o.mdx)("inlineCode",{parentName:"li"},"QueryRenderer")," will re-fetch the query."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"render"),": Function of type ",(0,o.mdx)("inlineCode",{parentName:"li"},"({error, props, retry}) => React.Node"),". The output of this function will be rendered by the ",(0,o.mdx)("inlineCode",{parentName:"li"},"QueryRenderer"),".",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"props"),": Object containing data obtained from the query; the shape of this object will match the shape of the query. If this object is not defined, it means that the data is still being fetched."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"error"),": Error will be defined if an error has occurred while fetching the query."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"retry"),": Reload the data. It is null if ",(0,o.mdx)("inlineCode",{parentName:"li"},"query")," was not provided.")))),(0,o.mdx)("h2",{id:"example"},"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Example.js\nimport React from 'react';\nimport { QueryRenderer, graphql } from 'react-relay';\n\nconst renderQuery = ({error, props}) => {\n  if (error) {\n    return <div>{error.message}</div>;\n  } else if (props) {\n    return <div>{props.page.name} is great!</div>;\n  }\n  return <div>Loading</div>;\n}\n\nconst Example = (props) => {\n  return (\n    <QueryRenderer\n      environment={environment}\n      query={graphql`\n        query ExampleQuery($pageID: ID!) {\n          page(id: $pageID) {\n            name\n          }\n        }\n      `}\n      variables={{\n        pageID: '110798995619330',\n      }}\n      render={renderQuery}\n    />\n  );\n}\n")))}c.isMDXComponent=!0}}]);