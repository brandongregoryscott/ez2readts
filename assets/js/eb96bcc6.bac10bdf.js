"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5593:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:1},u="Rules",p={unversionedId:"rules/index",id:"rules/index",title:"Rules",description:"This plugin implements various different rules to make your code more consistent and easier to read, with the idea that all rules should be fixable.",source:"@site/docs/rules/index.md",sourceDirName:"rules",slug:"/rules/",permalink:"/docs/rules/",editUrl:"https://github.com/brandongregoryscott/eslint-plugin-collation/tree/main/documentation/docs/rules/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"Group Exports",permalink:"/docs/rules/group-exports"}},s=[],c={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rules"},"Rules"),(0,a.kt)("p",null,"This plugin implements various different rules to make your code more consistent and easier to read, with the idea that ",(0,a.kt)("strong",{parentName:"p"},"all rules should be fixable"),"."),(0,a.kt)("p",null,"\ud83d\udd27 if some problems reported by the rule are automatically fixable by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--fix")," command line option"),(0,a.kt)("p",null,"\u26a0\ufe0f if some problems reported by the rule are manually fixable by editor suggestions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Rule"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Fixable"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://eslint-plugin-collation.brandonscott.me/docs/rules/group-exports"},"collation/group-exports")),(0,a.kt)("td",{parentName:"tr",align:null},"Consolidates multiple export statements"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udd27")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://eslint-plugin-collation.brandonscott.me/docs/rules/no-inline-export"},"collation/no-default-export")),(0,a.kt)("td",{parentName:"tr",align:null},"Enforces exports to be named"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udd27")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://eslint-plugin-collation.brandonscott.me/docs/rules/no-inline-export"},"collation/no-inline-export")),(0,a.kt)("td",{parentName:"tr",align:null},"Enforces exports to appear at the end of the file"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udd27")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://eslint-plugin-collation.brandonscott.me/docs/rules/sort-dependency-list"},"collation/sort-dependency-list")),(0,a.kt)("td",{parentName:"tr",align:null},"Sorts React dependency lists"),(0,a.kt)("td",{parentName:"tr",align:null},"\ud83d\udd27")))))}d.isMDXComponent=!0}}]);