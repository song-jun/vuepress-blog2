import{_ as n,o as s,c as a,e as p}from"./app.238d4ac4.js";const t={},e=p(`<p>\u9AD8\u9636\u51FD\u6570\u82F1\u6587\u53EB Higher-order function\u3002</p><p>JavaScript \u7684\u51FD\u6570\u5176\u5B9E\u90FD\u6307\u5411\u67D0\u4E2A\u53D8\u91CF\u3002\u65E2\u7136\u53D8\u91CF\u53EF\u4EE5\u6307\u5411\u51FD\u6570\uFF0C\u51FD\u6570\u7684\u53C2\u6570\u80FD\u63A5\u6536\u53D8\u91CF\uFF0C\u90A3\u4E48\u4E00\u4E2A\u51FD\u6570\u5C31\u53EF\u4EE5\u63A5\u6536\u53E6\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD9\u79CD\u51FD\u6570\u5C31\u79F0\u4E4B\u4E3A\u9AD8\u9636\u51FD\u6570\u3002</p><p>\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u9AD8\u9636\u51FD\u6570:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u8005\u5199\u4F5C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u8C03\u7528 <code>add(-5, 6, Math.abs)</code> \u65F6\uFF0C\u53C2\u6570 <code>x</code>\uFF0C<code>y</code> \u548C <code>f</code> \u5206\u522B\u63A5\u6536 <code>-5</code>\uFF0C<code>6</code> \u548C\u51FD\u6570 <code>Math.abs</code>\uFF0C\u6839\u636E\u51FD\u6570\u5B9A\u4E49\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63A8\u5BFC\u8BA1\u7B97\u8FC7\u7A0B\u4E3A:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">;</span>
y <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
f <span class="token operator">=</span> Math<span class="token punctuation">.</span>abs<span class="token punctuation">;</span>
<span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">11</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">11</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528\u4EE3\u7801\u9A8C\u8BC1\u4E00\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> f</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">f</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span>abs<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u5199\u9AD8\u9636\u51FD\u6570\uFF0C\u5C31\u662F\u8BA9\u51FD\u6570\u7684\u53C2\u6570\u80FD\u591F\u63A5\u6536\u522B\u7684\u51FD\u6570\u3002</p>`,11),o=[e];function c(u,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","higher-order-function.html.vue"]]);export{r as default};
