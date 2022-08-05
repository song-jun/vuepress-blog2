import{_ as t,o,c as p,a as n,b as e,e as c,d as s,r as l}from"./app.17aa6dfd.js";const i={},r=c(`<p>\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B\u7528\u6765\u7EA6\u675F\u53D6\u503C\u53EA\u80FD\u662F\u67D0\u51E0\u4E2A\u5B57\u7B26\u4E32\u4E2D\u7684\u4E00\u4E2A\u3002</p><h2 id="\u7B80\u5355\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u7B80\u5355\u7684\u4F8B\u5B50</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">EventNames</span> <span class="token operator">=</span> <span class="token string">&quot;click&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;scroll&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;mousemove&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">handleEvent</span><span class="token punctuation">(</span>ele<span class="token operator">:</span> Element<span class="token punctuation">,</span> event<span class="token operator">:</span> EventNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something</span>
<span class="token punctuation">}</span>

<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;scroll&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6CA1\u95EE\u9898</span>
<span class="token function">handleEvent</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;dbclick&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u62A5\u9519\uFF0Cevent \u4E0D\u80FD\u4E3A &#39;dbclick&#39;</span>

<span class="token comment">// index.ts(7,47): error TS2345: Argument of type &#39;&quot;dbclick&quot;&#39; is not assignable to parameter of type &#39;EventNames&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>type</code> \u5B9A\u4E86\u4E00\u4E2A\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B <code>EventNames</code>\uFF0C\u5B83\u53EA\u80FD\u53D6\u4E09\u79CD\u5B57\u7B26\u4E32\u4E2D\u7684\u4E00\u79CD\u3002</p><p>\u6CE8\u610F\uFF0C<strong>\u7C7B\u578B\u522B\u540D\u4E0E\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u7C7B\u578B\u90FD\u662F\u4F7F\u7528 <code>type</code> \u8FDB\u884C\u5B9A\u4E49\u3002</strong></p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,6),u={href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types",target:"_blank",rel:"noopener noreferrer"},d=s("Advanced Types # Type Aliases"),k=s("("),m={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AD%97%E9%9D%A2%E9%87%8F%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"},v=s("\u4E2D\u6587\u7248"),h=s(")");function _(g,b){const a=l("ExternalLinkIcon");return o(),p("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[d,e(a)]),k,n("a",m,[v,e(a)]),h])])])}var f=t(i,[["render",_],["__file","string-literal-types.html.vue"]]);export{f as default};
