(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{244:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,p=d["".concat(c,".").concat(b)]||d[b]||f[b]||a;return n?o.a.createElement(p,s(s({ref:t},u),{},{components:n})):o.a.createElement(p,s({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},245:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},247:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},248:function(e,t,n){"use strict";var r=n(0),o=n(247);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},249:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(248),c=n(245),s=n(47),i=n.n(s),u=37,l=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,d=e.values,f=e.groupId,b=Object(a.a)(),p=b.tabGroupChoices,m=b.setTabGroupChoices,g=Object(r.useState)(s),y=g[0],v=g[1],O=Object(r.useState)(!1),w=O[0],j=O[1];if(null!=f){var h=p[f];null!=h&&h!==y&&d.some((function(e){return e.value===h}))&&v(h)}var C=function(e){v(e),null!=f&&m(f,e)},k=[],P=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},x=function(){j(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",P),window.addEventListener("mousedown",x)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":y===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),P(e)},onFocus:function(){return C(t)},onClick:function(){C(t),j(!1)},onPointerDown:function(){return j(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},250:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}},329:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cloud-modeler-e020a97d25f52cd232defeb503c9df62.png"},330:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cloud-modeler-new-diagram-cd9c1d63bda60ff8d2a6f783486e8592.png"},331:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cloud-modeler-new-diagram-with-name-0d2f79d65f6223e11c72b0cb8241af37.png"},332:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/gettingstarted_quickstart-d4217a8991dcc5bac354926936a665d3.bpmn"},333:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/zeebe-modeler-44effbb9119cb065ae3ff7a081f953be.png"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(2),o=n(6),a=(n(0),n(244)),c=n(249),s=n(250),i={id:"model-your-first-process",title:"Model your first Process"},u={unversionedId:"guides/getting-started/model-your-first-process",id:"guides/getting-started/model-your-first-process",isDocsHomePage:!1,title:"Model your first Process",description:"In Camunda Cloud you have two options to design and deploy a workflow: the Zeebe Modeler and the Console Modeler.",source:"@site/docs/guides/getting-started/model-your-first-process.md",slug:"/guides/getting-started/model-your-first-process",permalink:"/docs/guides/getting-started/model-your-first-process",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/guides/getting-started/model-your-first-process.md",version:"current",sidebar:"camundaCloud",previous:{title:"Connect to your Cluster",permalink:"/docs/guides/getting-started/connect-to-your-cluster"},next:{title:"Deploy your process and start a process instance",permalink:"/docs/guides/getting-started/deploy-your-process-and-start-process-instance"}},l=[],d={rightToc:l};function f(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In Camunda Cloud you have two options to design and deploy a workflow: the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe-modeler/releases"}),"Zeebe Modeler")," and the Console Modeler."),Object(a.b)(c.a,{groupId:"modeler",defaultValue:"console",values:[{label:"Console Modeler",value:"console"},{label:"Zeebe Modeler",value:"desktop"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"console",mdxType:"TabItem"},'Using the Console Modeler, workflows can be designed and deployed, and new instances can be created directly from the console. You can find all your saved models under the "BPMN Diagrams" tab',Object(a.b)("p",null,Object(a.b)("img",{alt:"console-modeler",src:n(329).default})),Object(a.b)("p",null,"Just create a new diagram"),Object(a.b)("p",null,Object(a.b)("img",{alt:"console-modeler-new-diagram",src:n(330).default})),Object(a.b)("p",null,"and give it a name"),Object(a.b)("p",null,Object(a.b)("img",{alt:"console-modeler-new-diagram",src:n(331).default})),Object(a.b)("p",null,"The Save button should now appear.")),Object(a.b)(s.a,{value:"desktop",mdxType:"TabItem"},Object(a.b)("p",null,"Using the Zeebe Modeler, workflows can be designed and deployed, and new instances can be created."),Object(a.b)("p",null,"Design a simple workflow with one start event and one end event or download this ",Object(a.b)("a",{target:"_blank",href:n(332).default},"BPMN model"),"."),Object(a.b)("p",null,Object(a.b)("img",{alt:"zeebe-modeler",src:n(333).default})))))}f.isMDXComponent=!0}}]);