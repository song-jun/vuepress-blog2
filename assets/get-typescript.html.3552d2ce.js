import{_ as r,o as n,c as i,a as e,b as s,e as c,d as t,r as a}from"./app.edc3ba14.js";const l={},d=c(`<p>TypeScript \u7684\u547D\u4EE4\u884C\u5DE5\u5177\u5B89\u88C5\u65B9\u6CD5\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u547D\u4EE4\u4F1A\u5728\u5168\u5C40\u73AF\u5883\u4E0B\u5B89\u88C5 <code>tsc</code> \u547D\u4EE4\uFF0C\u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u4EFB\u4F55\u5730\u65B9\u6267\u884C <code>tsc</code> \u547D\u4EE4\u4E86\u3002</p><p>\u7F16\u8BD1\u4E00\u4E2A TypeScript \u6587\u4EF6\u5F88\u7B80\u5355:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tsc hello.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u7EA6\u5B9A\u4F7F\u7528 TypeScript \u7F16\u5199\u7684\u6587\u4EF6\u4EE5 <code>.ts</code> \u4E3A\u540E\u7F00\uFF0C\u7528 TypeScript \u7F16\u5199 React \u65F6\uFF0C\u4EE5 <code>.tsx</code> \u4E3A\u540E\u7F00\u3002</p><h2 id="\u7F16\u8F91\u5668" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u5668" aria-hidden="true">#</a> \u7F16\u8F91\u5668</h2><p>TypeScript \u6700\u5927\u7684\u4F18\u52BF\u4FBF\u662F\u589E\u5F3A\u4E86\u7F16\u8F91\u5668\u548C IDE \u7684\u529F\u80FD\uFF0C\u5305\u62EC\u4EE3\u7801\u8865\u5168\u3001\u63A5\u53E3\u63D0\u793A\u3001\u8DF3\u8F6C\u5230\u5B9A\u4E49\u3001\u91CD\u6784\u7B49\u3002</p>`,8),p=t("\u4E3B\u6D41\u7684\u7F16\u8F91\u5668\u90FD\u652F\u6301 TypeScript\uFF0C\u8FD9\u91CC\u6211\u63A8\u8350\u4F7F\u7528 "),_={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},h=t("Visual Studio Code"),u=t("\u3002"),m=e("p",null,"\u5B83\u662F\u4E00\u6B3E\u5F00\u6E90\uFF0C\u8DE8\u7EC8\u7AEF\u7684\u8F7B\u91CF\u7EA7\u7F16\u8F91\u5668\uFF0C\u5185\u7F6E\u4E86 TypeScript \u652F\u6301\u3002",-1),f=t("\u53E6\u5916\u5B83\u672C\u8EAB\u4E5F\u662F"),b={href:"https://github.com/Microsoft/vscode/",target:"_blank",rel:"noopener noreferrer"},g=t("\u7528 TypeScript \u7F16\u5199\u7684"),v=t("\u3002"),k=t("\u4E0B\u8F7D\u5B89\u88C5: "),S={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},y=t("https://code.visualstudio.com/"),T=e("p",null,"\u83B7\u53D6\u5176\u4ED6\u7F16\u8F91\u5668\u6216 IDE \u5BF9 TypeScript \u7684\u652F\u6301:",-1),w={href:"https://github.com/Microsoft/TypeScript-Sublime-Plugin",target:"_blank",rel:"noopener noreferrer"},x=t("Sublime Text"),E={href:"https://atom.io/packages/atom-typescript",target:"_blank",rel:"noopener noreferrer"},V=t("Atom"),I={href:"https://www.jetbrains.com/webstorm/",target:"_blank",rel:"noopener noreferrer"},N=t("WebStorm"),B={href:"https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim",target:"_blank",rel:"noopener noreferrer"},M=t("Vim"),C={href:"https://github.com/ananthakumaran/tide",target:"_blank",rel:"noopener noreferrer"},D=t("Emacs"),L={href:"https://github.com/palantir/eclipse-typescript",target:"_blank",rel:"noopener noreferrer"},j=t("Eclipse"),A={href:"https://www.microsoft.com/en-us/download/details.aspx?id=48593",target:"_blank",rel:"noopener noreferrer"},P=t("Visual Studio 2015"),R={href:"https://www.microsoft.com/en-us/download/details.aspx?id=48739",target:"_blank",rel:"noopener noreferrer"},W=t("Visual Studio 2013");function q(z,F){const o=a("ExternalLinkIcon");return n(),i("div",null,[d,e("p",null,[p,e("a",_,[h,s(o)]),u]),m,e("p",null,[f,e("a",b,[g,s(o)]),v]),e("p",null,[k,e("a",S,[y,s(o)])]),T,e("ul",null,[e("li",null,[e("a",w,[x,s(o)])]),e("li",null,[e("a",E,[V,s(o)])]),e("li",null,[e("a",I,[N,s(o)])]),e("li",null,[e("a",B,[M,s(o)])]),e("li",null,[e("a",C,[D,s(o)])]),e("li",null,[e("a",L,[j,s(o)])]),e("li",null,[e("a",A,[P,s(o)])]),e("li",null,[e("a",R,[W,s(o)])])])])}var H=r(l,[["render",q],["__file","get-typescript.html.vue"]]);export{H as default};
