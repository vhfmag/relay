"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[55502],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){return function(t){var n=c(t.components);return r.createElement(e,o({},t,{components:n}))}},c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},36048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={},l="Arrays and Lists",d={unversionedId:"tutorial/arrays-lists",id:"tutorial/arrays-lists",title:"Arrays and Lists",description:"So far we\u2019ve only dealt with components that have a single instance of the components they\u2019re composed from. For example, we\u2019re only showing a single Newsfeed story, and within that story there\u2019s just a single author with a single profile picture. Let\u2019s look at how to handle more than one of something.",source:"@site/docs/tutorial/arrays-lists.md",sourceDirName:"tutorial",slug:"/tutorial/arrays-lists",permalink:"/docs/next/tutorial/arrays-lists",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/tutorial/arrays-lists.md",tags:[],version:"current",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1712084965,formattedLastUpdatedAt:"Apr 2, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Fragments",permalink:"/docs/next/tutorial/fragments-1"},next:{title:"Queries for Interactions",permalink:"/docs/next/tutorial/queries-2"}},p={},c=[{value:"Step 1 \u2014 Select a list in the fragment",id:"step-1--select-a-list-in-the-fragment",level:3},{value:"Step 2 \u2014 Map over the list in the component",id:"step-2--map-over-the-list-in-the-component",level:3},{value:"Step 3 \u2014 Add a React key based on the node ID",id:"step-3--add-a-react-key-based-on-the-node-id",level:3}],m={toc:c};function u(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"arrays-and-lists"},"Arrays and Lists"),(0,o.mdx)("p",null,"So far we\u2019ve only dealt with components that have a single instance of the components they\u2019re composed from. For example, we\u2019re only showing a single Newsfeed story, and within that story there\u2019s just a single author with a single profile picture. Let\u2019s look at how to handle more than one of something."),(0,o.mdx)("p",null,"GraphQL includes support for arrays, which in GraphQL are called ",(0,o.mdx)("em",{parentName:"p"},"lists.")," A field can be not only a single scalar value but an array of them, or not only a single edge but an array of edges. The schema specifies whether each field is a list or not, but, oddly, the GraphQL query syntax doesn\u2019t distinguish between selecting a singular field and selecting a list \u2014 a quirky exception to the design principle that a GraphQL response should have the same shape as the query."),(0,o.mdx)("p",null,"Request:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"query MyQuery {\n  viewer {\n    contacts { // List of edges\n      id // field on a single item\n      name\n    }\n  }\n}\n")),(0,o.mdx)("p",null,"Response:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'{\n  viewer: {\n    contacts: [ // array in response\n      {\n        id: "123",\n        name: "Chris",\n      },\n      {\n        id: "789",\n        name: "Sue",\n      }\n    ]\n  }\n}\n')),(0,o.mdx)("p",null,"As it happens, the schema in our example app has a ",(0,o.mdx)("inlineCode",{parentName:"p"},"topStories")," field that returns a list of Stories, as opposed to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"topStory")," field we're currently using that returns just one."),(0,o.mdx)("p",null,"To show multiple stories on our newsfeed, we just need to modify ",(0,o.mdx)("inlineCode",{parentName:"p"},"Newsfeed.tsx")," to use ",(0,o.mdx)("inlineCode",{parentName:"p"},"topStories"),"."),(0,o.mdx)("h3",{id:"step-1--select-a-list-in-the-fragment"},"Step 1 \u2014 Select a list in the fragment"),(0,o.mdx)("p",null,"Open ",(0,o.mdx)("inlineCode",{parentName:"p"},"Newsfeed.tsx")," and find ",(0,o.mdx)("inlineCode",{parentName:"p"},"NewsfeedQuery"),". Replace ",(0,o.mdx)("inlineCode",{parentName:"p"},"topStory")," with ",(0,o.mdx)("inlineCode",{parentName:"p"},"topStories"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"const NewsfeedQuery = graphql`\n  query NewsfeedQuery {\n    // change-line\n    topStories {\n      ...StoryFragment\n    }\n  }\n`;\n")),(0,o.mdx)("h3",{id:"step-2--map-over-the-list-in-the-component"},"Step 2 \u2014 Map over the list in the component"),(0,o.mdx)("p",null,"In the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Newsfeed")," component, ",(0,o.mdx)("inlineCode",{parentName:"p"},"data.topStories")," will now be an array of fragment refs, each of which can be passed to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Story")," child component to render that story:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'export default function Newsfeed({}) {\n  const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});\n  // change-line\n  const stories = data.topStories;\n  return (\n    <div className="newsfeed">\n      // change-line\n      {stories.map(story => <Story story={story} />)}\n    </div>\n  );\n}\n')),(0,o.mdx)("h3",{id:"step-3--add-a-react-key-based-on-the-node-id"},"Step 3 \u2014 Add a React key based on the node ID"),(0,o.mdx)("p",null,"At this point, you should see multiple stories on the screen! It's beginning to look like a proper newsfeed app."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Multiple stories",src:n(50906).Z,width:"1066",height:"1780"})),(0,o.mdx)("p",null,"However, we're also getting a React warning that we're rendering an array of components without ",(0,o.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/lists-and-keys.html"},"providing a key attribute"),"."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"React missing key warning",src:n(77790).Z,width:"1418",height:"180"})),(0,o.mdx)("p",null,"It's always important to heed this warning, and more specifically to base keys on the identity of the things being displayed, rather than simply their indices in the array. This allows React to handle reordering and deleting items from the list correctly, since it knows which items are which even if their order changes."),(0,o.mdx)("p",null,"Luckily, GraphQL nodes generally have IDs. We can simply select the ",(0,o.mdx)("inlineCode",{parentName:"p"},"id")," field of ",(0,o.mdx)("inlineCode",{parentName:"p"},"story")," and use it as a key:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'const NewsfeedQuery = graphql`\n  query NewsfeedQuery {\n    topStories {\n      // change-line\n      id\n      ...StoryFragment\n    }\n  }\n`;\n\n...\n\nexport default function Newsfeed({}) {\n  const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {});\n  const stories = data.topStories;\n  return (\n    <div className="newsfeed">\n      {stories.map(story => (\n        <Story\n          // change-line\n          key={story.id}\n          story={story}\n        />\n      )}\n    </div>\n  );\n}\n')),(0,o.mdx)("p",null,"With that, we've got a collection of Stories on the screen. It's worth pointing out that here we're mixing individual fields with fragment spreads in the same place in our query. This means that Newsfeed can read the fields it cares about (directly from ",(0,o.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery"),") while Story can read the fields it cares about (via ",(0,o.mdx)("inlineCode",{parentName:"p"},"useFragment"),"). The ",(0,o.mdx)("em",{parentName:"p"},"same object")," both contains Newsfeed's selected field ",(0,o.mdx)("inlineCode",{parentName:"p"},"id")," and is also a fragment key for ",(0,o.mdx)("inlineCode",{parentName:"p"},"StoryFragment"),"."),(0,o.mdx)("admonition",{type:"tip"},(0,o.mdx)("p",{parentName:"admonition"},"GraphQL Lists are only the most basic way of dealing with collections of things. We\u2019ll build on them to do pagination and infinite scrolling later in the tutorial, using a special system called Connections. You\u2019ll want to use Connections in most situations where you have a collection of items \u2014 although you\u2019ll still use GraphQL Lists as a building block.")),(0,o.mdx)("p",null,"Onward!"))}u.isMDXComponent=!0},77790:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/arrays-keys-warning-screenshot-4e615af12bcb73307b06f9fcb09bf6e2.png"},50906:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/arrays-top-stories-screenshot-ba4541cbe06c7d58e74097e07d065508.png"}}]);