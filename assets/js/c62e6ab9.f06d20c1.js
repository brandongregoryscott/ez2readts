"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[913],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7894:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],p={},i="No Inline Export",c={unversionedId:"rules/no-inline-export",id:"rules/no-inline-export",title:"No Inline Export",description:"Name",source:"@site/docs/rules/no-inline-export.md",sourceDirName:"rules",slug:"/rules/no-inline-export",permalink:"/docs/rules/no-inline-export",editUrl:"https://github.com/brandongregoryscott/eslint-plugin-collation/tree/main/documentation/docs/rules/no-inline-export.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"No Default Export",permalink:"/docs/rules/no-default-export"},next:{title:"Sort Dependency List",permalink:"/docs/rules/sort-dependency-list"}},s=[{value:"Name",id:"name",children:[],level:2},{value:"Description",id:"description",children:[],level:2},{value:"Example",id:"example",children:[{value:"Named exports",id:"named-exports",children:[],level:3},{value:"Default export",id:"default-export",children:[],level:3},{value:"Statements in between",id:"statements-in-between",children:[],level:3}],level:2},{value:"Notes",id:"notes",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"no-inline-export"},"No Inline Export"),(0,a.kt)("h2",{id:"name"},"Name"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"no-inline-export")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Enforces exports to appear at the end of the file"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"named-exports"},"Named exports"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const noop = () => {};\n")),(0,a.kt)("p",null,"will be transformed to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const noop = () => {};\nexport { noop };\n")),(0,a.kt)("h3",{id:"default-export"},"Default export"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default function noop() {}\n")),(0,a.kt)("p",null,"will be transformed to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function noop() {}\nexport default noop;\n")),(0,a.kt)("h3",{id:"statements-in-between"},"Statements in between"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const noop = () => {};\n\nconst foo = () => {};\n\nconst bar = () => {};\n")),(0,a.kt)("p",null,"will be transformed to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const noop = () => {};\n\nconst foo = () => {};\n\nconst bar = () => {};\nexport { noop };\n")),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"In an effort to keep the fix small, this rule will generate a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," statement each. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const noop = () => {};\n\nexport const foo = () => {};\n\nexport const bar = () => {};\n")),(0,a.kt)("p",null,"will be transformed to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const noop = () => {};\n\nconst foo = () => {};\n\nconst bar = () => {};\nexport { noop };\nexport { foo };\nexport { bar };\n")),(0,a.kt)("p",null,"Since this is generally undesirable, the ",(0,a.kt)("a",{parentName:"p",href:"./group-exports"},(0,a.kt)("inlineCode",{parentName:"a"},"group-exports"))," rule can be turned on to consolidate these."))}d.isMDXComponent=!0}}]);