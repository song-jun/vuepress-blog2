import{_ as n,o as s,c as a,e}from"./app.e3c83e88.js";const t={},p=e(`<h2 id="name-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#name-\u5C5E\u6027" aria-hidden="true">#</a> name \u5C5E\u6027</h2><p>\u51FD\u6570\u7684 <code>name</code> \u5C5E\u6027\u8FD4\u56DE\u51FD\u6570\u7684\u540D\u5B57\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
f1<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &quot;f1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662F\u901A\u8FC7\u53D8\u91CF\u8D4B\u503C\u5B9A\u4E49\u7684\u51FD\u6570\uFF0C\u90A3\u4E48 <code>name</code> \u5C5E\u6027\u8FD4\u56DE\u53D8\u91CF\u540D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">f2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
f2<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &quot;f2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\uFF0C\u4E0A\u9762\u8FD9\u79CD\u60C5\u51B5\uFF0C\u53EA\u6709\u5728\u53D8\u91CF\u7684\u503C\u662F\u4E00\u4E2A\u533F\u540D\u51FD\u6570\u65F6\u624D\u662F\u5982\u6B64\u3002\u5982\u679C\u53D8\u91CF\u7684\u503C\u662F\u4E00\u4E2A\u5177\u540D\u51FD\u6570\uFF0C\u90A3\u4E48 <code>name</code> \u5C5E\u6027\u8FD4\u56DE <code>function</code> \u5173\u952E\u5B57\u4E4B\u540E\u7684\u90A3\u4E2A\u51FD\u6570\u540D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">f3</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">myName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
f3<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;myName&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>f3.name</code> \u8FD4\u56DE\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u540D\u5B57\u3002\u6CE8\u610F\uFF0C\u771F\u6B63\u7684\u51FD\u6570\u540D\u8FD8\u662F <code>f3</code>\uFF0C\u800C <code>myName</code> \u8FD9\u4E2A\u540D\u5B57\u53EA\u5728\u51FD\u6570\u4F53\u5185\u90E8\u53EF\u7528\u3002</p><p><code>name</code> \u5C5E\u6027\u7684\u4E00\u4E2A\u7528\u5904\uFF0C\u5C31\u662F\u83B7\u53D6\u53C2\u6570\u51FD\u6570\u7684\u540D\u5B57\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">myFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span>myFunc<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// myFunc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u51FD\u6570 <code>test</code> \u5185\u90E8\u901A\u8FC7 <code>name</code> \u5C5E\u6027\uFF0C\u5C31\u53EF\u4EE5\u77E5\u9053\u4F20\u5165\u7684\u53C2\u6570\u662F\u4EC0\u4E48\u51FD\u6570\u3002</p><h2 id="length-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#length-\u5C5E\u6027" aria-hidden="true">#</a> length \u5C5E\u6027</h2><p>\u51FD\u6570\u7684 <code>length</code> \u5C5E\u6027\u8FD4\u56DE\u51FD\u6570\u9884\u671F\u4F20\u5165\u7684\u53C2\u6570\u4E2A\u6570\uFF0C\u5373\u51FD\u6570\u5B9A\u4E49\u4E4B\u4E2D\u7684\u53C2\u6570\u4E2A\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
f<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u5B9A\u4E49\u4E86\u7A7A\u51FD\u6570 <code>f</code>\uFF0C\u5B83\u7684 <code>length</code> \u5C5E\u6027\u5C31\u662F\u5B9A\u4E49\u65F6\u7684\u53C2\u6570\u4E2A\u6570\u3002\u4E0D\u7BA1\u8C03\u7528\u65F6\u8F93\u5165\u4E86\u591A\u5C11\u4E2A\u53C2\u6570\uFF0C<code>length</code> \u5C5E\u6027\u59CB\u7EC8\u7B49\u4E8E 2\u3002</p><p><code>length</code> \u5C5E\u6027\u63D0\u4F9B\u4E86\u4E00\u79CD\u673A\u5236\uFF0C\u5224\u65AD\u5B9A\u4E49\u65F6\u548C\u8C03\u7528\u65F6\u53C2\u6570\u7684\u5DEE\u5F02\uFF0C\u4EE5\u4FBF\u5B9E\u73B0\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u7684\u201C\u65B9\u6CD5\u91CD\u8F7D\u201D(overload)\u3002</p><h2 id="tostring" tabindex="-1"><a class="header-anchor" href="#tostring" aria-hidden="true">#</a> toString()</h2><p>\u51FD\u6570\u7684 <code>toString</code> \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5185\u5BB9\u662F\u51FD\u6570\u7684\u6E90\u7801\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

f<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// function f() {</span>
<span class="token comment">//  a();</span>
<span class="token comment">//  b();</span>
<span class="token comment">//  c();</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u90A3\u4E9B\u539F\u751F\u7684\u51FD\u6570\uFF0C<code>toString()</code> \u65B9\u6CD5\u8FD4\u56DE <code>function (){[native code]}</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span>sqrt<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;function sqrt() { [native code] }&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>Math.sqrt</code> \u662F JavaScript \u5F15\u64CE\u63D0\u4F9B\u7684\u539F\u751F\u51FD\u6570\uFF0C<code>toString()</code> \u65B9\u6CD5\u5C31\u8FD4\u56DE\u539F\u751F\u4EE3\u7801\u7684\u63D0\u793A\u3002</p><p>\u51FD\u6570\u5185\u90E8\u7684\u6CE8\u91CA\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*
  \u8FD9\u662F\u4E00\u4E2A
  \u591A\u884C\u6CE8\u91CA
*/</span><span class="token punctuation">}</span>

f<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;function f(){/*</span>
<span class="token comment">//   \u8FD9\u662F\u4E00\u4E2A</span>
<span class="token comment">//   \u591A\u884C\u6CE8\u91CA</span>
<span class="token comment">// */}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528\u8FD9\u4E00\u70B9\uFF0C\u53EF\u4EE5\u53D8\u76F8\u5B9E\u73B0\u591A\u884C\u5B57\u7B26\u4E32\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">multiline</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> arr <span class="token operator">=</span> fn<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*
  \u8FD9\u662F\u4E00\u4E2A
  \u591A\u884C\u6CE8\u91CA
*/</span><span class="token punctuation">}</span>

<span class="token function">multiline</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot; \u8FD9\u662F\u4E00\u4E2A</span>
<span class="token comment">//   \u591A\u884C\u6CE8\u91CA&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),c=[p];function o(i,l){return s(),a("div",null,c)}var d=n(t,[["render",o],["__file","method.html.vue"]]);export{d as default};
