import{_ as t,o as a,c as n,a as e,b as r,d as o,e as d,r as i}from"./app.238d4ac4.js";var c="/vuepress-blog2/assets/configure-debug.3401496e.gif",h="/vuepress-blog2/assets/node-debug.a1225a50.gif",_="/vuepress-blog2/assets/debug-data-inspection.15da3fc9.gif";const l={},p=e("h2",{id:"\u914D\u7F6E\u8C03\u8BD5\u5668",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u914D\u7F6E\u8C03\u8BD5\u5668","aria-hidden":"true"},"#"),o(" \u914D\u7F6E\u8C03\u8BD5\u5668")],-1),u=o("\u6253\u5F00\u547D\u4EE4\u9762\u677F("),g=e("code",null,"Ctrl + Shift + P",-1),f=o(")\uFF0C\u7136\u540E\u9009\u62E9 "),b=e("strong",null,"\u8C03\u8BD5: \u6253\u5F00 launch.json",-1),m=o("\uFF0C\u8FD9\u5C06\u63D0\u793A\u60A8\u9009\u62E9\u4E0E\u9879\u76EE(Node.js\uFF0CPython\uFF0CC ++\u7B49)\u5339\u914D\u7684\u73AF\u5883\u3002\u8FD9\u5C06\u751F\u6210\u4E00\u4E2A "),v=e("code",null,"launch.json",-1),x=o(" \u6587\u4EF6\u3002Node.js \u652F\u6301\u662F\u5185\u7F6E\u7684\uFF0C\u5176\u4ED6\u73AF\u5883\u8981\u6C42\u5B89\u88C5\u9002\u5F53\u7684\u8BED\u8A00\u6269\u5C55\u3002\u6709\u5173\u66F4\u591A\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u89C1 "),N={href:"https://code.visualstudio.com/docs/editor/debugging",target:"_blank",rel:"noopener noreferrer"},k=o("\u8C03\u8BD5\u6587\u6863"),V=o("\u3002"),j=d('<p><img src="'+c+'" alt="\u914D\u7F6E\u8C03\u8BD5"></p><h2 id="\u65AD\u70B9\u5E76\u9010\u6B65\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u65AD\u70B9\u5E76\u9010\u6B65\u6267\u884C" aria-hidden="true">#</a> \u65AD\u70B9\u5E76\u9010\u6B65\u6267\u884C</h2><p>\u5728\u884C\u53F7\u65C1\u8FB9\u653E\u7F6E\u65AD\u70B9\u3002\u4F7F\u7528 <strong>\u8C03\u8BD5</strong> \u5C0F\u90E8\u4EF6\u5411\u524D\u5BFC\u822A\u3002</p><p><img src="'+h+'" alt="\u8C03\u8BD5"></p><h2 id="\u6570\u636E\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u68C0\u67E5" aria-hidden="true">#</a> \u6570\u636E\u68C0\u67E5</h2><p>\u5728 <strong>\u8FD0\u884C</strong> \u9762\u677F\u548C\u63A7\u5236\u53F0\u4E2D\u68C0\u67E5\u53D8\u91CF\u3002</p><p><img src="'+_+'" alt="\u6570\u636E\u68C0\u67E5"></p><h2 id="\u5185\u5D4C\u503C" tabindex="-1"><a class="header-anchor" href="#\u5185\u5D4C\u503C" aria-hidden="true">#</a> \u5185\u5D4C\u503C</h2><p>\u60A8\u53EF\u4EE5\u8BBE\u7F6E <code>&quot;debug.inlineValues&quot;: true</code> \u5728\u8C03\u8BD5\u5668\u4E2D\u5185\u8054\u67E5\u770B\u53D8\u91CF\u503C\u3002\u6B64\u529F\u80FD\u5F00\u9500\u5F88\u5927\uFF0C\u5E76\u4E14\u53EF\u80FD\u4F1A\u51CF\u6162\u6B65\u8FDB\u901F\u5EA6\uFF0C\u56E0\u6B64\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u7981\u7528\u6B64\u529F\u80FD\u3002</p><h2 id="logpoints" tabindex="-1"><a class="header-anchor" href="#logpoints" aria-hidden="true">#</a> Logpoints</h2><p>\u65E5\u5FD7\u70B9\u7684\u884C\u4E3A\u5F88\u50CF\u65AD\u70B9\uFF0C\u4F46\u5B83\u4EEC\u4E0D\u4F1A\u5728\u547D\u4E2D\u65F6\u6682\u505C\u8C03\u8BD5\u5668\uFF0C\u800C\u662F\u5728\u63A7\u5236\u53F0\u4E2D\u8BB0\u5F55\u4E00\u6761\u6D88\u606F\u3002\u65E5\u5FD7\u70B9\u5BF9\u4E8E\u8C03\u8BD5\u65E0\u6CD5\u4FEE\u6539\u6216\u6682\u505C\u7684\u751F\u4EA7\u670D\u52A1\u5668\u65F6\u6CE8\u5165\u65E5\u5FD7\u7279\u522B\u6709\u7528\u3002</p><p>\u4F7F\u7528\u5DE6\u4FA7\u7F16\u8F91\u5668\u88C5\u8BA2\u7EBF\u4E2D\u7684 <strong>\u6DFB\u52A0\u65E5\u5FD7\u70B9</strong> \u547D\u4EE4\u6DFB\u52A0\u65E5\u5FD7\u70B9\uFF0C\u8BE5\u65E5\u5FD7\u70B9\u5C06\u663E\u793A\u4E3A \u{1F538} \u5F62\u72B6\u7684\u56FE\u6807\u3002\u65E5\u5FD7\u6D88\u606F\u662F\u7EAF\u6587\u672C\uFF0C\u4F46\u53EF\u4EE5\u5305\u542B\u8981\u5728\u82B1\u62EC\u53F7(&#39;{}&#39;)\u4E2D\u8BA1\u7B97\u7684\u8868\u8FBE\u5F0F\u3002</p>',12);function B(C,E){const s=i("ExternalLinkIcon");return a(),n("div",null,[p,e("p",null,[u,g,f,b,m,v,x,e("a",N,[k,r(s)]),V]),j])}var q=t(l,[["render",B],["__file","debug.html.vue"]]);export{q as default};
