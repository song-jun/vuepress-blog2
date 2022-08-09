import{_ as o,o as p,c,a as s,b as e,e as t,d as n,r as l}from"./app.238d4ac4.js";const i={},u=t(`<p>\u6211\u4EEC\u4ECE\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u5F00\u59CB\u3002</p><p>\u5C06\u4EE5\u4E0B\u4EE3\u7801\u590D\u5236\u5230 <code>hello.ts</code> \u4E2D:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u6267\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>tsc hello.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u5019\u4F1A\u751F\u6210\u4E00\u4E2A\u7F16\u8BD1\u597D\u7684\u6587\u4EF6 <code>hello.js</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript \u4E2D\uFF0C\u4F7F\u7528 <code>:</code> \u6307\u5B9A\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C<code>:</code> \u7684\u524D\u540E\u6709\u6CA1\u6709\u7A7A\u683C\u90FD\u53EF\u4EE5\u3002</p><p>\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u7528 <code>:</code> \u6307\u5B9A <code>person</code> \u53C2\u6570\u7C7B\u578B\u4E3A <code>string</code>\u3002\u4F46\u662F\u7F16\u8BD1\u4E3A js \u4E4B\u540E\uFF0C\u5E76\u6CA1\u6709\u4EC0\u4E48\u68C0\u67E5\u7684\u4EE3\u7801\u88AB\u63D2\u5165\u8FDB\u6765\u3002</p><p><strong>TypeScript \u53EA\u4F1A\u8FDB\u884C\u9759\u6001\u68C0\u67E5\uFF0C\u5982\u679C\u53D1\u73B0\u6709\u9519\u8BEF\uFF0C\u7F16\u8BD1\u7684\u65F6\u5019\u5C31\u4F1A\u62A5\u9519\u3002</strong></p>`,10),r=s("code",null,"let",-1),d=n(" \u662F ES6 \u4E2D\u7684\u5173\u952E\u5B57\uFF0C\u548C "),k=s("code",null,"var",-1),v=n(" \u7C7B\u4F3C\uFF0C\u7528\u4E8E\u5B9A\u4E49\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\uFF0C\u53EF\u4EE5\u53C2\u9605 "),m={href:"http://es6.ruanyifeng.com/#docs/let",target:"_blank",rel:"noopener noreferrer"},b=n("let \u548C const \u547D\u4EE4"),_=n("\u3002"),g=t(`<p>\u4E0B\u9762\u5C1D\u8BD5\u628A\u8FD9\u6BB5\u4EE3\u7801\u7F16\u8BD1\u4E00\u4E0B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8F91\u5668\u4E2D\u4F1A\u63D0\u793A\u9519\u8BEF\uFF0C\u7F16\u8BD1\u7684\u65F6\u5019\u4E5F\u4F1A\u51FA\u9519:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>index.ts<span class="token punctuation">(</span><span class="token number">6,22</span><span class="token punctuation">)</span>: error TS2345: Argument of <span class="token builtin class-name">type</span> <span class="token string">&#39;number[]&#39;</span> is not assignable to parameter of <span class="token builtin class-name">type</span> <span class="token string">&#39;string&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F46\u662F\u8FD8\u662F\u751F\u6210\u4E86 js \u6587\u4EF6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> person<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sayHello</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>TypeScript \u7F16\u8BD1\u7684\u65F6\u5019\u5373\u4F7F\u62A5\u9519\u4E86\uFF0C\u8FD8\u662F\u4F1A\u751F\u6210\u7F16\u8BD1\u7ED3\u679C</strong>\uFF0C\u6211\u4EEC\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u7F16\u8BD1\u4E4B\u540E\u7684\u6587\u4EF6\u3002</p>`,7),h=n("\u5982\u679C\u8981\u5728\u62A5\u9519\u7684\u65F6\u5019\u7EC8\u6B62 js \u6587\u4EF6\u7684\u751F\u6210\uFF0C\u53EF\u4EE5\u5728 "),f=s("code",null,"tsconfig.json",-1),y=n(" \u4E2D\u914D\u7F6E "),w=s("code",null,"noEmitOnError",-1),j=n(" \u5373\u53EF\u3002\u5173\u4E8E "),q=s("code",null,"tsconfig.json",-1),x=n("\uFF0C\u8BF7\u53C2\u9605"),H={href:"http://www.typescriptlang.org/docs/handbook/tsconfig-json.html",target:"_blank",rel:"noopener noreferrer"},T=n("\u5B98\u65B9\u624B\u518C"),E=n("("),S={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html",target:"_blank",rel:"noopener noreferrer"},N=n("\u4E2D\u6587\u7248"),V=n(")\u3002");function B(I,L){const a=l("ExternalLinkIcon");return p(),c("div",null,[u,s("blockquote",null,[s("p",null,[r,d,k,v,s("a",m,[b,e(a)]),_])]),g,s("p",null,[h,f,y,w,j,q,x,s("a",H,[T,e(a)]),E,s("a",S,[N,e(a)]),V])])}var A=o(i,[["render",B],["__file","hello-typescript.html.vue"]]);export{A as default};
