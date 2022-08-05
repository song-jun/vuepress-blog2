import{_ as t,o,c as p,a as n,b as a,e as i,d as s,r as c}from"./app.17aa6dfd.js";const r={},l=i(`<p>\u8054\u5408\u7C7B\u578B(Union Types)\u8868\u793A\u53D6\u503C\u53EF\u4EE5\u4E3A\u591A\u79CD\u7C7B\u578B\u4E2D\u7684\u4E00\u79CD\u3002</p><h2 id="\u7B80\u5355\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u7B80\u5355\u7684\u4F8B\u5B50</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// index.ts(2,1): error TS2322: Type &#39;boolean&#39; is not assignable to type &#39;string | number&#39;.</span>
<span class="token comment">//   Type &#39;boolean&#39; is not assignable to type &#39;number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8054\u5408\u7C7B\u578B\u4F7F\u7528 <code>|</code> \u5206\u9694\u6BCF\u4E2A\u7C7B\u578B\u3002</p><p>\u8FD9\u91CC\u7684 <code>let myFavoriteNumber: string | number</code> \u7684\u542B\u4E49\u662F\uFF0C\u5141\u8BB8 <code>myFavoriteNumber</code> \u7684\u7C7B\u578B\u662F <code>string</code> \u6216\u8005 <code>number</code>\uFF0C\u4F46\u662F\u4E0D\u80FD\u662F\u5176\u4ED6\u7C7B\u578B\u3002</p><h2 id="\u8BBF\u95EE\u8054\u5408\u7C7B\u578B\u7684\u5C5E\u6027\u6216\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u8054\u5408\u7C7B\u578B\u7684\u5C5E\u6027\u6216\u65B9\u6CD5" aria-hidden="true">#</a> \u8BBF\u95EE\u8054\u5408\u7C7B\u578B\u7684\u5C5E\u6027\u6216\u65B9\u6CD5</h2><p>\u5F53 TypeScript \u4E0D\u786E\u5B9A\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u7684\u53D8\u91CF\u5230\u5E95\u662F\u54EA\u4E2A\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u6211\u4EEC<strong>\u53EA\u80FD\u8BBF\u95EE\u6B64\u8054\u5408\u7C7B\u578B\u7684\u6240\u6709\u7C7B\u578B\u91CC\u5171\u6709\u7684\u5C5E\u6027\u6216\u65B9\u6CD5</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> something<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// index.ts(2,22): error TS2339: Property &#39;length&#39; does not exist on type &#39;string | number&#39;.</span>
<span class="token comment">//   Property &#39;length&#39; does not exist on type &#39;number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C<code>length</code> \u4E0D\u662F <code>string</code> \u548C <code>number</code> \u7684\u5171\u6709\u5C5E\u6027\uFF0C\u6240\u4EE5\u4F1A\u62A5\u9519\u3002</p><p>\u8BBF\u95EE <code>string</code> \u548C <code>number</code> \u7684\u5171\u6709\u5C5E\u6027\u662F\u6CA1\u95EE\u9898\u7684:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getString</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> something<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8054\u5408\u7C7B\u578B\u7684\u53D8\u91CF\u5728\u88AB\u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u4F1A\u6839\u636E\u7C7B\u578B\u63A8\u8BBA\u7684\u89C4\u5219\u63A8\u65AD\u51FA\u4E00\u4E2A\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token string">&quot;seven&quot;</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myFavoriteNumber<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myFavoriteNumber<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7F16\u8BD1\u65F6\u62A5\u9519</span>

<span class="token comment">// index.ts(5,30): error TS2339: Property &#39;length&#39; does not exist on type &#39;number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\uFF0C\u7B2C\u4E8C\u884C\u7684 <code>myFavoriteNumber</code> \u88AB\u63A8\u65AD\u6210\u4E86 <code>string</code>\uFF0C\u8BBF\u95EE\u5B83\u7684 <code>length</code> \u5C5E\u6027\u4E0D\u4F1A\u62A5\u9519\u3002</p><p>\u800C\u7B2C\u56DB\u884C\u7684 <code>myFavoriteNumber</code> \u88AB\u63A8\u65AD\u6210\u4E86 <code>number</code>\uFF0C\u8BBF\u95EE\u5B83\u7684 <code>length</code> \u5C5E\u6027\u65F6\u5C31\u62A5\u9519\u4E86\u3002</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,17),u={href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types",target:"_blank",rel:"noopener noreferrer"},d=s("Advanced Types # Union Types"),m=s("("),k={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"},b=s("\u4E2D\u6587\u7248"),v=s(")");function g(h,y){const e=c("ExternalLinkIcon");return o(),p("div",null,[l,n("ul",null,[n("li",null,[n("a",u,[d,a(e)]),m,n("a",k,[b,a(e)]),v])])])}var f=t(r,[["render",g],["__file","union-types.html.vue"]]);export{f as default};
