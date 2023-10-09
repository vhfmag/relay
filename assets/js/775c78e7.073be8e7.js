"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[36543],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>l});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){return function(t){var n=m(t.components);return a.createElement(e,o({},t,{components:n}))}},m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=m(n),c=r,u=l["".concat(i,".").concat(c)]||l[c]||h[c]||o;return n?a.createElement(u,d(d({ref:t},p),{},{components:n})):a.createElement(u,d({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],d={id:"thinking-in-relay",title:"Thinking In Relay",original_id:"thinking-in-relay"},s=void 0,p={unversionedId:"thinking-in-relay",id:"version-v3.0.0/thinking-in-relay",title:"Thinking In Relay",description:"Relay's approach to data-fetching is heavily inspired by our experience with React. In particular, React breaks complex interfaces into reusable components, allowing developers to reason about discrete units of an application in isolation, and reducing the coupling between disparate parts of an application. Even more important is that these components are declarative: they allow developers to specify what the UI should look like for a given state, and not have to worry about how to show that UI. Unlike previous approaches that used imperative commands to manipulate native views (e.g. the DOM), React uses a UI description to automatically determine the necessary commands.",source:"@site/versioned_docs/version-v3.0.0/PrinciplesAndArchitecture-ThinkingInRelay.md",sourceDirName:".",slug:"/thinking-in-relay",permalink:"/docs/v3.0.0/thinking-in-relay",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v3.0.0/PrinciplesAndArchitecture-ThinkingInRelay.md",tags:[],version:"v3.0.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1696870718,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{id:"thinking-in-relay",title:"Thinking In Relay",original_id:"thinking-in-relay"},sidebar:"version-v3.0.0/docs",previous:{title:"Thinking in GraphQL",permalink:"/docs/v3.0.0/thinking-in-graphql"},next:{title:"Architecture Overview",permalink:"/docs/v3.0.0/architecture-overview"}},l={},m=[{value:"Fetching Data For a View",id:"fetching-data-for-a-view",level:2},{value:"Data Components aka Containers",id:"data-components-aka-containers",level:2},{value:"Rendering",id:"rendering",level:2},{value:"Data Masking",id:"data-masking",level:2}],c={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Relay's approach to data-fetching is heavily inspired by our experience with React. In particular, React breaks complex interfaces into reusable ",(0,o.mdx)("strong",{parentName:"p"},"components"),", allowing developers to reason about discrete units of an application in isolation, and reducing the coupling between disparate parts of an application. Even more important is that these components are ",(0,o.mdx)("strong",{parentName:"p"},"declarative"),": they allow developers to specify ",(0,o.mdx)("em",{parentName:"p"},"what")," the UI should look like for a given state, and not have to worry about ",(0,o.mdx)("em",{parentName:"p"},"how")," to show that UI. Unlike previous approaches that used imperative commands to manipulate native views (e.g. the DOM), React uses a UI description to automatically determine the necessary commands."),(0,o.mdx)("p",null,"Let's look at some product use-cases to understand how we incorporated these ideas into Relay. We'll assume a basic familiarity with React."),(0,o.mdx)("h2",{id:"fetching-data-for-a-view"},"Fetching Data For a View"),(0,o.mdx)("p",null,"In our experience, the overwhelming majority of products want one specific behavior: fetch ",(0,o.mdx)("em",{parentName:"p"},"all")," the data for a view hierarchy while displaying a loading indicator, and then render the ",(0,o.mdx)("em",{parentName:"p"},"entire")," view once the data is ready."),(0,o.mdx)("p",null,"One solution is to have a root component fetch the data for all its children. However, this would introduce coupling: every change to a component would require changing ",(0,o.mdx)("em",{parentName:"p"},"any")," root component that might render it, and often some components between it and the root. This coupling could mean a greater chance for bugs and slow the pace of development. Ultimately, this approach doesn't take advantage of React's component model. The natural place for specifying data-dependencies was in ",(0,o.mdx)("em",{parentName:"p"},"components"),"."),(0,o.mdx)("p",null,"The next logical approach is to use ",(0,o.mdx)("inlineCode",{parentName:"p"},"render()")," as the means of initiating data-fetching. We could simply render the application once, see what data it needed, fetch that data, and render again. This sounds great, but the problem is that ",(0,o.mdx)("em",{parentName:"p"},"components use data to figure out what to render!")," In other words, this would force data-fetching to be staged: first render the root and see what data it needs, then render its children and see what they need, all the way down the tree. If each stage incurs network request, rendering would require slow, serial roundtrips. We needed a way to determine all the data needs up-front or ",(0,o.mdx)("em",{parentName:"p"},"statically"),"."),(0,o.mdx)("p",null,"This is where GraphQL comes into play. Components specify one or multiple GraphQL fragments for some of their props describing their data requirements. Each GraphQL fragment has a unique name within an application which allows us to determine the query needed to fetch the full query tree in a build step and load all the required data in a single network request efficiently at runtime."),(0,o.mdx)("h2",{id:"data-components-aka-containers"},"Data Components aka Containers"),(0,o.mdx)("p",null,"Relay allows developers to annotate their React components with data dependencies by creating ",(0,o.mdx)("strong",{parentName:"p"},"containers"),". These are regular React components that wrap the originals. A key design constraint is that React components are meant to be reusable, so Relay containers must be too. For example, a ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Story />")," component might implement a view for rendering any ",(0,o.mdx)("inlineCode",{parentName:"p"},"Story")," item. The actual story to render would be determined by the data passed to the component: ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Story story={ ... } />"),". The equivalent in GraphQL are ",(0,o.mdx)("strong",{parentName:"p"},"fragments"),": named query snippets that specify what data to fetch ",(0,o.mdx)("em",{parentName:"p"},"for an object of a given type"),". We might describe the data needed by ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Story>")," as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"\nfragment Story_story on Story {\n  text\n  author {\n    name\n    photo\n  }\n}\n")),(0,o.mdx)("p",null,"And this fragment can then be used to define the Story container:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"const {createFragmentContainer, graphql} = require('react-relay');\n\n// Plain React component.\n// Usage: `<Story story={ ... } />`\nclass Story extends React.Component { ... }\n\n// Higher-order component that wraps `<Story />`\nconst StoryContainer = createFragmentContainer(Story, {\n  // Define a fragment with a name matching the `story` prop expected above\n  story: graphql`\n    fragment Story_story on Story {\n      text\n      author {\n        name\n        photo\n      }\n    }\n  `\n})\n\n")),(0,o.mdx)("h2",{id:"rendering"},"Rendering"),(0,o.mdx)("p",null,"In React, rendering a view requires two inputs: the ",(0,o.mdx)("em",{parentName:"p"},"component")," to render, and a ",(0,o.mdx)("em",{parentName:"p"},"root")," DOM (UI) node to render into. Rendering Relay containers is similar: we need a ",(0,o.mdx)("em",{parentName:"p"},"container")," to render, and a ",(0,o.mdx)("em",{parentName:"p"},"root")," in the graph from which to start our query. We also must ensure that the queries for the container are executed and may want to show a loading indicator while data is being fetched. Similar to ",(0,o.mdx)("inlineCode",{parentName:"p"},"ReactDOM.render(component, domNode)"),", Relay provides ",(0,o.mdx)("inlineCode",{parentName:"p"},"<QueryRenderer query={...} variables={...} render={...}>")," for this purpose. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"query")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"variables")," define what data to fetch and ",(0,o.mdx)("inlineCode",{parentName:"p"},"render")," defines what to render. Here's how we might render ",(0,o.mdx)("inlineCode",{parentName:"p"},"<StoryContainer>"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"ReactDOM.render(\n  <QueryRenderer\n    query={graphql`\n      query StoryQuery($storyID: ID!) {\n        node(id: $storyID) {\n          ...Story_story\n        }\n      }\n    `}\n    variables={{\n      storyID: '123',\n    }}\n    render={(props, error) => {\n      if (error) {\n        return <ErrorView />;\n      } else if (props) {\n        return <StoryContainer story={props.story} />;\n      } else {\n        return <LoadingIndicator />;\n      }\n    }}\n  />,\n  rootElement\n)\n\n")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"QueryRenderer")," will then fetch the data and render ",(0,o.mdx)("inlineCode",{parentName:"p"},"StoryContainer")," once the data is available. Just as React allows developers to render views without directly manipulating the underlying view, Relay removes the need to directly communicate with the network."),(0,o.mdx)("h2",{id:"data-masking"},"Data Masking"),(0,o.mdx)("p",null,"With typical approaches to data-fetching we found that it was common for two components to have ",(0,o.mdx)("em",{parentName:"p"},"implicit dependencies"),". For example ",(0,o.mdx)("inlineCode",{parentName:"p"},"<StoryHeader />")," might use some data without directly ensuring that the data was fetched. This data would often be fetched by some other part of the system, such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Story />"),". Then when we changed ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Story />")," and removed that data-fetching logic, ",(0,o.mdx)("inlineCode",{parentName:"p"},"<StoryHeader />")," would suddenly and inexplicably break. These types of bugs are not always immediately apparent, especially in larger applications developed by larger teams. Manual and automated testing can only help so much: this is exactly the type of systematic problem that is better solved by a framework."),(0,o.mdx)("p",null,"We've seen that Relay containers ensure that GraphQL fragments are fetched ",(0,o.mdx)("em",{parentName:"p"},"before")," the component is rendered. But containers also provide another benefit that isn't immediately obvious: ",(0,o.mdx)("strong",{parentName:"p"},"data masking"),". Relay only allows components to access data they specifically ask for in GraphQL fragments \u2014 nothing more. So if one component queries for a Story's ",(0,o.mdx)("inlineCode",{parentName:"p"},"text"),", and another for its ",(0,o.mdx)("inlineCode",{parentName:"p"},"author"),", each can see ",(0,o.mdx)("em",{parentName:"p"},"only")," the field that they asked for. In fact, components can't even see the data requested by their ",(0,o.mdx)("em",{parentName:"p"},"children"),": that would also break encapsulation."),(0,o.mdx)("p",null,"Relay also goes further: it uses opaque identifiers on ",(0,o.mdx)("inlineCode",{parentName:"p"},"props")," to validate that we've explicitly fetched the data for a component before rendering it. If ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Story />")," renders ",(0,o.mdx)("inlineCode",{parentName:"p"},"<StoryHeader />")," but forgets to include its fragment, Relay will warn that the data for ",(0,o.mdx)("inlineCode",{parentName:"p"},"<StoryHeader />")," is missing. In fact, Relay will warn ",(0,o.mdx)("em",{parentName:"p"},"even if")," some other component happened to fetch the same data required by ",(0,o.mdx)("inlineCode",{parentName:"p"},"<StoryHeader />"),". This warning tells us that although things ",(0,o.mdx)("em",{parentName:"p"},"might")," work now they're highly likely to break later."),(0,o.mdx)("h1",{id:"conclusion"},"Conclusion"),(0,o.mdx)("p",null,"GraphQL provides a powerful tool for building efficient, decoupled client applications. Relay builds on this functionality to provide a framework for ",(0,o.mdx)("strong",{parentName:"p"},"declarative data-fetching"),". By separating ",(0,o.mdx)("em",{parentName:"p"},"what")," data to fetch from ",(0,o.mdx)("em",{parentName:"p"},"how")," it is fetched, Relay helps developers build applications that are robust, transparent, and performant by default. It's a great complement to the component-centric way of thinking championed by React. While each of these technologies \u2014 React, Relay, and GraphQL \u2014 are powerful on their own, the combination is a ",(0,o.mdx)("strong",{parentName:"p"},"UI platform")," that allows us to ",(0,o.mdx)("em",{parentName:"p"},"move fast")," and ",(0,o.mdx)("em",{parentName:"p"},"ship high-quality apps at scale"),"."))}h.isMDXComponent=!0}}]);