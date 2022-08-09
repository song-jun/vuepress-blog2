import{_ as s,o,c,a as e,b as p,d as n,e as d,r as i}from"./app.238d4ac4.js";const t={},r=e("p",null,"\u7531\u4E8E Node.js \u5E73\u53F0\u662F\u5728\u540E\u7AEF\u8FD0\u884C JavaScript \u4EE3\u7801\uFF0C\u6240\u4EE5\uFF0C\u5FC5\u987B\u9996\u5148\u5728\u672C\u673A\u5B89\u88C5 Node.js \u73AF\u5883\u3002",-1),l=e("h2",{id:"\u5B89\u88C5-node-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B89\u88C5-node-js","aria-hidden":"true"},"#"),n(" \u5B89\u88C5 Node.js")],-1),u=e("p",null,"\u76EE\u524D Node.js \u7684 LTS \u7248\u672C\u662F 16.15.1\u3002\u9996\u5148\uFF0C\u4ECE Node.js \u5B98\u7F51\u4E0B\u8F7D\u5BF9\u5E94\u5E73\u53F0\u7684\u5B89\u88C5\u7A0B\u5E8F\u3002\u70B9\u51FB LTS \u7248\u672C\u7684\u4E0B\u8F7D\u6309\u94AE\u3002",-1),m={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},v=n("Node.js \u5B98\u7F51"),h=d(`<h3 id="\u5B89\u88C5\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u8FC7\u7A0B" aria-hidden="true">#</a> \u5B89\u88C5\u8FC7\u7A0B</h3><ul><li><p>\u5728 Windows \u4E0A\u5B89\u88C5\u65F6\u52A1\u5FC5\u9009\u62E9\u5168\u90E8\u7EC4\u4EF6\uFF0C\u5305\u62EC\u52FE\u9009 <code>Add to Path</code>\u3002</p><p>\u5728\u5B89\u88C5\u8FC7\u7A0B\u4E2D\uFF0C\u65E0\u9700\u52FE\u9009 &quot;Automatically install the necessary tools&quot;\u3002\u9009\u4E2D\u6B64\u9879\u4F1A\u5728\u7535\u8111\u4E2D\u5B89\u88C5 VS \u7B49\u65E5\u5E38\u5F00\u53D1\u4F7F\u7528\u4E0D\u5230\u7684\u8F6F\u4EF6\u3002</p><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u5728 Windows \u73AF\u5883\u4E0B\uFF0C\u8BF7\u6253\u5F00\u547D\u4EE4\u63D0\u793A\u7B26\uFF0C\u7136\u540E\u8F93\u5165 <code>node -v</code> \uFF0C\u5982\u679C\u5B89\u88C5\u6B63\u5E38\uFF0C\u60A8\u5E94\u8BE5\u770B\u5230 <code>v16.15.1</code> \u8FD9\u6837\u7684\u8F93\u51FA:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>IEUser<span class="token operator">&gt;</span>node -v
v16.15.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EE7\u7EED\u5728\u547D\u4EE4\u63D0\u793A\u7B26\u8F93\u5165 node\uFF0C\u6B64\u523B\u60A8\u5C06\u8FDB\u5165 Node.js \u7684\u4EA4\u4E92\u73AF\u5883\u3002\u5728\u4EA4\u4E92\u73AF\u5883\u4E0B\uFF0C\u60A8\u53EF\u4EE5\u8F93\u5165\u4EFB\u610F JavaScript \u8BED\u53E5\uFF0C\u4F8B\u5982 <code>100 + 200</code>\uFF0C\u56DE\u8F66\u540E\u5C06\u5F97\u5230\u8F93\u51FA\u7ED3\u679C\u3002</p><p>\u8981\u9000\u51FA Node.js \u73AF\u5883\uFF0C\u8FDE\u6309\u4E24\u6B21 <code>Ctrl + C</code> \u3002</p></li><li><p>\u5728 Mac \u6216 Linux \u73AF\u5883\u4E0B\uFF0C\u8BF7\u6253\u5F00\u7EC8\u7AEF\uFF0C\u7136\u540E\u8F93\u5165 <code>node -v</code>\uFF0C\u60A8\u5E94\u8BE5\u770B\u5230\u5982\u4E0B\u8F93\u51FA:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">node</span> -v
v16.15.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h2><p>npm \u662F Node.js \u7684\u5305\u7BA1\u7406\u5DE5\u5177(package manager)\u3002</p><p>\u6211\u4EEC\u5728 Node.js \u4E0A\u5F00\u53D1\u65F6\uFF0C\u4F1A\u7528\u5230\u5F88\u591A\u522B\u4EBA\u5199\u7684 JavaScript \u4EE3\u7801\u3002\u5982\u679C\u6211\u4EEC\u8981\u4F7F\u7528\u522B\u4EBA\u5199\u7684\u67D0\u4E2A\u5305\uFF0C\u6BCF\u6B21\u90FD\u6839\u636E\u540D\u79F0\u641C\u7D22\u4E00\u4E0B\u5B98\u65B9\u7F51\u7AD9\uFF0C\u4E0B\u8F7D\u4EE3\u7801\uFF0C\u89E3\u538B\uFF0C\u518D\u4F7F\u7528\uFF0C\u975E\u5E38\u7E41\u7410\u3002\u4E8E\u662F\u4E00\u4E2A\u96C6\u4E2D\u7BA1\u7406\u7684\u5DE5\u5177\u5E94\u8FD0\u800C\u751F: \u5927\u5BB6\u90FD\u628A\u81EA\u5DF1\u5F00\u53D1\u7684\u6A21\u5757\u6253\u5305\u540E\u653E\u5230 npm \u5B98\u7F51\u4E0A\uFF0C\u5982\u679C\u8981\u4F7F\u7528\uFF0C\u76F4\u63A5\u901A\u8FC7 npm \u5B89\u88C5\u5C31\u53EF\u4EE5\u76F4\u63A5\u7528\uFF0C\u4E0D\u7528\u7BA1\u4EE3\u7801\u5B58\u5728\u54EA\uFF0C\u5E94\u8BE5\u4ECE\u54EA\u4E0B\u8F7D\u3002</p><p>\u66F4\u91CD\u8981\u7684\u662F\uFF0C\u5982\u679C\u6211\u4EEC\u8981\u4F7F\u7528\u6A21\u5757 A\uFF0C\u800C\u6A21\u5757 A \u53C8\u4F9D\u8D56\u4E8E\u6A21\u5757 B\uFF0C\u6A21\u5757 B \u53C8\u4F9D\u8D56\u4E8E\u6A21\u5757 X \u548C\u6A21\u5757 Y\uFF0Cnpm \u53EF\u4EE5\u6839\u636E\u4F9D\u8D56\u5173\u7CFB\uFF0C\u628A\u6240\u6709\u4F9D\u8D56\u7684\u5305\u90FD\u4E0B\u8F7D\u4E0B\u6765\u5E76\u7BA1\u7406\u8D77\u6765\u3002\u5426\u5219\uFF0C\u9760\u6211\u4EEC\u81EA\u5DF1\u624B\u52A8\u7BA1\u7406\uFF0C\u80AF\u5B9A\u65E2\u9EBB\u70E6\u53C8\u5BB9\u6613\u51FA\u9519\u3002</p><p>\u8BB2\u4E86\u8FD9\u4E48\u591A\uFF0Cnpm \u7A76\u7ADF\u5728\u54EA?</p><p>\u5176\u5B9E npm \u5DF2\u7ECF\u5728 Node.js \u5B89\u88C5\u7684\u65F6\u5019\u987A\u5E26\u88C5\u597D\u4E86\u3002\u6211\u4EEC\u5728\u547D\u4EE4\u63D0\u793A\u7B26\u6216\u8005\u7EC8\u7AEF\u8F93\u5165 <code>npm -v</code>\uFF0C\u5E94\u8BE5\u770B\u5230\u7C7B\u4F3C\u7684\u8F93\u51FA:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span><span class="token operator">&gt;</span>npm -v
<span class="token number">8.12</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C\u7248\u672C\u53F7\u592A\u5C0F\uFF0C\u8BF4\u660E npm \u7248\u672C\u8F83\u4F4E\uFF0C\u8BF7\u4F7F\u7528\u6B64\u547D\u4EE4\u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C: <code>npm i -g npm</code>\u3002</p></blockquote><p>\u5982\u679C\u76F4\u63A5\u8F93\u5165 <code>npm</code>\uFF0C\u60A8\u4F1A\u770B\u5230\u7C7B\u4F3C\u4E0B\u9762\u7684\u8F93\u51FA:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span><span class="token operator">&gt;</span> <span class="token function">npm</span>
<span class="token function">npm</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>

Usage:

<span class="token function">npm</span> <span class="token function">install</span>        <span class="token function">install</span> all the dependencies <span class="token keyword">in</span> your project
<span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>foo<span class="token operator">&gt;</span>  <span class="token function">add</span> the <span class="token operator">&lt;</span>foo<span class="token operator">&gt;</span> dependency to your project
    <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4E00\u5927\u5806\u6587\u5B57\u544A\u8BC9\u60A8\uFF0Cnpm \u9700\u8981\u9644\u5E26\u547D\u4EE4\u3002\u73B0\u5728\u6211\u4EEC\u4E0D\u7528\u5173\u5FC3\u8FD9\u4E9B\u547D\u4EE4\uFF0C\u540E\u9762\u4F1A\u4E00\u4E00\u8BB2\u5230\u3002\u76EE\u524D\uFF0C\u60A8\u53EA\u9700\u8981\u786E\u4FDD npm \u6B63\u786E\u5B89\u88C5\u4E86\uFF0C\u80FD\u8FD0\u884C\u5C31\u884C\u3002</p><h2 id="\u56FD\u5185\u955C\u50CF\u7AD9" tabindex="-1"><a class="header-anchor" href="#\u56FD\u5185\u955C\u50CF\u7AD9" aria-hidden="true">#</a> \u56FD\u5185\u955C\u50CF\u7AD9</h2><p>\u5927\u5BB6\u90FD\u77E5\u9053\u5929\u671D\u662F\u6709\u5899\u7684\uFF0C\u6709\u7684\u65F6\u5019\uFF0C\u8BBF\u95EE\u56FD\u5916\u7684 Node.js \u670D\u52A1\u5668\u53EF\u80FD\u4F1A\u5341\u5206\u7F13\u6162\u4EE5\u81F3\u4E8E\u60A8\u60F3\u628A\u5B83\u7838\u4E86\u3002</p><p>\u6240\u4EE5\u8D34\u5FC3\u7684\u9A6C\u4E91\u7238\u7238\u63D0\u4F9B\u4E86\u6DD8\u5B9D\u955C\u50CF\u6E90\u3002\u4F60\u53EF\u4EE5\u5C06 npm \u7684\u6E90\u914D\u7F6E\u4E3A\u56FD\u5185\u955C\u50CF\u6E90\uFF0C\u4EE5\u5728\u6BCF\u6B21\u5B89\u88C5\u4F9D\u8D56\u7684\u65F6\u5019\u4ECE\u56FD\u5185\u955C\u50CF\u7AD9\u62C9\u53D6\u955C\u50CF\u3002\u8FD9\u53EF\u4EE5\u6781\u5927\u7684\u63D0\u5347\u5B89\u88C5\u901F\u5EA6\u3002</p><div class="custom-container note"><p class="custom-container-title">\u6CE8</p><p>\u5982\u679C\u5B98\u65B9\u6E90\u7684\u901F\u5EA6\u8FD8\u53EF\u4EE5\u7684\u8BDD\u8BF7\u5C3D\u53EF\u80FD\u4F7F\u7528\u5B98\u65B9\u6E90\u3002</p><p>\u56FD\u5185\u6E90\u6BD5\u7ADF\u662F\u955C\u50CF\u7AD9\u70B9\uFF0C\u540C\u6B65\u5B98\u65B9\u6E90\u7684\u5305\u4F1A\u51FA\u73B0\u5EF6\u8FDF\uFF0C\u6240\u4EE5\u6709\u65F6\u5019\u4F60\u53EF\u80FD\u4F1A\u9047\u5230 <code>version xxx not found</code> \u4E4B\u7C7B\u7684\u9519\u8BEF\uFF0C\u8FD9\u662F\u56E0\u4E3A\u6240\u9700\u8981\u7684\u7248\u672C\u8FD8\u6CA1\u6765\u5F97\u53CA\u88AB\u955C\u50CF\u7AD9\u70B9\u540C\u6B65\u6240\u5BFC\u81F4\u3002</p><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u8BBF\u95EE <code>npmmirror.com/sync/&lt;\u5305\u540D&gt;</code> \u6765\u624B\u52A8\u540C\u6B65\u4E00\u4E2A\u5305\u3002</p></div><p>\u8BBE\u7F6E\u53CA\u56FD\u5185\u6E90\u7684\u547D\u4EE4\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p><code>https://registry.npm.taobao.org/</code> \u662F\u8001\u7684\u6DD8\u5B9D\u6E90\u5730\u5740\uFF0C\u73B0\u5DF2\u505C\u6B62\u7EF4\u62A4\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528!!!</p></div><h2 id="\u542F\u7528-corepack" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528-corepack" aria-hidden="true">#</a> \u542F\u7528 Corepack</h2><p>Node.js \u81EA\u5E26\u7684\u5305\u7BA1\u7406\u5DE5\u5177 npm \u5E76\u4E0D\u662F\u90A3\u4E48\u7684\u5F3A\u5927\uFF0C\u5176\u5B89\u88C5\u901F\u5EA6\u4E5F\u5F88\u6162\uFF0C\u6240\u4EE5\u793E\u533A\u5F00\u53D1\u4E86\u4E00\u4E9B\u5176\u4ED6\u7684\u5305\u7BA1\u7406\u5DE5\u5177\u5982 <code>yarn</code> \u548C <code>pnpm</code>\uFF0C\u5B83\u4EEC\u6709\u81EA\u5DF1\u7684\u4F18\u52BF\u3002</p><p>Mr.Song \u63A8\u8350\u4F7F\u7528 pnpm \u8FDB\u884C\u5305\u7BA1\u7406\uFF0C\u56E0\u4E3A\u5B83\u4F7F\u7528\u786C\u94FE\u63A5\u7D22\u5F15\u5305\u6587\u4EF6\uFF0C\u5B89\u88C5\u901F\u5EA6\u66F4\u5FEB\u800C\u4E14\u8282\u7701\u78C1\u76D8\u7A7A\u95F4\u3002</p><p>\u4ECE v16 \u5F00\u59CB\uFF0CNode.js \u5F15\u5165\u4E86 Corepack \u5DE5\u5177\uFF0C\u5E76\u5728 package.json \u652F\u6301\u4E86 <code>packageManager</code> \u9009\u9879\u4EE5\u652F\u6301\u7B2C\u4E09\u65B9\u7BA1\u7406\u5DE5\u5177\u3002</p><p>\u4F60\u9700\u8981\u901A\u8FC7\u4E0B\u65B9\u547D\u4EE4\u542F\u7528 Corepack:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\u6BCF\u4E2A\u9879\u76EE\u4F1A\u81EA\u52A8\u5E94\u7528\u6839\u76EE\u5F55 package.json \u4E2D\u7684 <code>packageManager</code> \u9009\u9879\u3002\u6BD4\u5982\u8BBE\u7F6E <code>&quot;packageManager&quot;: &quot;pnpm@7.2.1&quot;</code> \u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u4E0B\u8F7D\u5E76\u4F7F\u7528 <code>pnpm@7.2.1</code>\u3002</p><div class="custom-container info"><p class="custom-container-title">\u8BBE\u7F6E\u5168\u5C40\u7684 packageManager</p><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>corepack prepare packageManager@semver</code> \u6765\u5168\u5C40\u51C6\u5907\u4E00\u4E2A packageManager \u7248\u672C\uFF0C\u5E76\u4F7F\u7528 <code>--activate</code> \u9009\u65B0\u5A18 \u5168\u5C40\u6FC0\u6D3B\u3002</p><p>\u6BD4\u5982\u4EE5\u4E0B\u547D\u4EE4\u4E0B\u8F7D <code>pnpm@7.2.1</code> \u5E76\u5C06\u5176\u4F5C\u4E3A\u9ED8\u8BA4\u7684\u5168\u5C40\u5305\u7BA1\u7406\u5668:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>corepack prepare pnpm@7.2.1 --activate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u8BF7\u5728\u672C\u673A\u5B89\u88C5 Node.js \u73AF\u5883\uFF0C\u5E76\u786E\u4FDD Node.js \u548C npm \u80FD\u6B63\u5E38\u8FD0\u884C\u3002</p>`,30);function g(b,k){const a=i("ExternalLinkIcon");return o(),c("div",null,[r,l,u,e("ul",null,[e("li",null,[e("a",m,[v,p(a)])])]),h])}var _=s(t,[["render",g],["__file","install.html.vue"]]);export{_ as default};
