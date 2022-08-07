import{_ as n,o as s,c as a,e}from"./app.e3c83e88.js";const p={},t=e(`<p>\u8FD0\u7B97\u7B26\u662F\u5904\u7406\u6570\u636E\u7684\u57FA\u672C\u65B9\u6CD5\uFF0C\u7528\u6765\u4ECE\u73B0\u6709\u7684\u503C\u5F97\u5230\u65B0\u7684\u503C\u3002JavaScript \u63D0\u4F9B\u4E86\u591A\u79CD\u8FD0\u7B97\u7B26\uFF0C\u8986\u76D6\u4E86\u6240\u6709\u4E3B\u8981\u7684\u8FD0\u7B97\u3002</p><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>JavaScript \u5171\u63D0\u4F9B 10 \u4E2A\u7B97\u672F\u8FD0\u7B97\u7B26\uFF0C\u7528\u6765\u5B8C\u6210\u57FA\u672C\u7684\u7B97\u672F\u8FD0\u7B97\u3002</p><ul><li><strong>\u52A0\u6CD5\u8FD0\u7B97\u7B26</strong>: <code>x + y</code></li><li><strong>\u51CF\u6CD5\u8FD0\u7B97\u7B26</strong>: <code>x - y</code></li><li><strong>\u4E58\u6CD5\u8FD0\u7B97\u7B26</strong>: <code>x * y</code></li><li><strong>\u9664\u6CD5\u8FD0\u7B97\u7B26</strong>: <code>x / y</code></li><li><strong>\u6307\u6570\u8FD0\u7B97\u7B26</strong>: <code>x ** y</code></li><li><strong>\u4F59\u6570\u8FD0\u7B97\u7B26</strong>: <code>x % y</code></li><li><strong>\u81EA\u589E\u8FD0\u7B97\u7B26</strong>: <code>++x</code> \u6216\u8005 <code>x++</code></li><li><strong>\u81EA\u51CF\u8FD0\u7B97\u7B26</strong>: <code>--x</code> \u6216\u8005 <code>x--</code></li><li><strong>\u6570\u503C\u8FD0\u7B97\u7B26</strong>: <code>+x</code></li><li><strong>\u8D1F\u6570\u503C\u8FD0\u7B97\u7B26</strong>: <code>-x</code></li></ul><p>\u51CF\u6CD5\u3001\u4E58\u6CD5\u3001\u9664\u6CD5\u8FD0\u7B97\u6CD5\u6BD4\u8F83\u5355\u7EAF\uFF0C\u5C31\u662F\u6267\u884C\u76F8\u5E94\u7684\u6570\u5B66\u8FD0\u7B97\u3002\u4E0B\u9762\u4ECB\u7ECD\u5176\u4ED6\u51E0\u4E2A\u7B97\u672F\u8FD0\u7B97\u7B26\uFF0C\u91CD\u70B9\u662F\u52A0\u6CD5\u8FD0\u7B97\u7B26\u3002</p><h2 id="\u52A0\u6CD5\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u52A0\u6CD5\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u52A0\u6CD5\u8FD0\u7B97\u7B26</h2><h3 id="\u57FA\u672C\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u89C4\u5219" aria-hidden="true">#</a> \u57FA\u672C\u89C4\u5219</h3><p>\u52A0\u6CD5\u8FD0\u7B97\u7B26(<code>+</code>)\u662F\u6700\u5E38\u89C1\u7684\u8FD0\u7B97\u7B26\uFF0C\u7528\u6765\u6C42\u4E24\u4E2A\u6570\u503C\u7684\u548C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>JavaScript \u5141\u8BB8\u975E\u6570\u503C\u7684\u76F8\u52A0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token boolean">true</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token number">1</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u7B2C\u4E00\u884C\u662F\u4E24\u4E2A\u5E03\u5C14\u503C\u76F8\u52A0\uFF0C\u7B2C\u4E8C\u884C\u662F\u6570\u503C\u4E0E\u5E03\u5C14\u503C\u76F8\u52A0\u3002\u8FD9\u4E24\u79CD\u60C5\u51B5\uFF0C\u5E03\u5C14\u503C\u90FD\u4F1A\u81EA\u52A8\u8F6C\u6210\u6570\u503C\uFF0C\u7136\u540E\u518D\u76F8\u52A0\u3002</p><p>\u6BD4\u8F83\u7279\u6B8A\u7684\u662F\uFF0C\u5982\u679C\u662F\u4E24\u4E2A\u5B57\u7B26\u4E32\u76F8\u52A0\uFF0C\u8FD9\u65F6\u52A0\u6CD5\u8FD0\u7B97\u7B26\u4F1A\u53D8\u6210\u8FDE\u63A5\u8FD0\u7B97\u7B26\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32\uFF0C\u5C06\u4E24\u4E2A\u539F\u5B57\u7B26\u4E32\u8FDE\u63A5\u5728\u4E00\u8D77\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;a&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;bc&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;abc&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4E00\u4E2A\u8FD0\u7B97\u5B50\u662F\u5B57\u7B26\u4E32\uFF0C\u53E6\u4E00\u4E2A\u8FD0\u7B97\u5B50\u662F\u975E\u5B57\u7B26\u4E32\uFF0C\u8FD9\u65F6\u975E\u5B57\u7B26\u4E32\u4F1A\u8F6C\u6210\u5B57\u7B26\u4E32\uFF0C\u518D\u8FDE\u63A5\u5728\u4E00\u8D77\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;1a&quot;</span>
<span class="token boolean">false</span> <span class="token operator">+</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;falsea&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u52A0\u6CD5\u8FD0\u7B97\u7B26\u662F\u5728\u8FD0\u884C\u65F6\u51B3\u5B9A\uFF0C\u5230\u5E95\u662F\u6267\u884C\u76F8\u52A0\uFF0C\u8FD8\u662F\u6267\u884C\u8FDE\u63A5\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD0\u7B97\u5B50\u7684\u4E0D\u540C\uFF0C\u5BFC\u81F4\u4E86\u4E0D\u540C\u7684\u8BED\u6CD5\u884C\u4E3A\uFF0C\u8FD9\u79CD\u73B0\u8C61\u79F0\u4E3A\u201C\u91CD\u8F7D\u201D(overload)\u3002\u7531\u4E8E\u52A0\u6CD5\u8FD0\u7B97\u7B26\u5B58\u5728\u91CD\u8F7D\uFF0C\u53EF\u80FD\u6267\u884C\u4E24\u79CD\u8FD0\u7B97\uFF0C\u4F7F\u7528\u7684\u65F6\u5019\u5FC5\u987B\u5F88\u5C0F\u5FC3\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;3&quot;</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// &quot;345&quot;</span>
<span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;75&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u7531\u4E8E\u4ECE\u5DE6\u5230\u53F3\u7684\u8FD0\u7B97\u6B21\u5E8F\uFF0C\u5B57\u7B26\u4E32\u7684\u4F4D\u7F6E\u4E0D\u540C\u4F1A\u5BFC\u81F4\u4E0D\u540C\u7684\u7ED3\u679C\u3002</p><p>\u9664\u4E86\u52A0\u6CD5\u8FD0\u7B97\u7B26\uFF0C\u5176\u4ED6\u7B97\u672F\u8FD0\u7B97\u7B26(\u6BD4\u5982\u51CF\u6CD5\u3001\u9664\u6CD5\u548C\u4E58\u6CD5)\u90FD\u4E0D\u4F1A\u53D1\u751F\u91CD\u8F7D\u3002\u5B83\u4EEC\u7684\u89C4\u5219\u662F: \u6240\u6709\u8FD0\u7B97\u5B50\u4E00\u5F8B\u8F6C\u4E3A\u6570\u503C\uFF0C\u518D\u8FDB\u884C\u76F8\u5E94\u7684\u6570\u5B66\u8FD0\u7B97\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">-</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>
<span class="token number">1</span> <span class="token operator">*</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token number">1</span> <span class="token operator">/</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 0.5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u51CF\u6CD5\u3001\u9664\u6CD5\u548C\u4E58\u6CD5\u8FD0\u7B97\u7B26\uFF0C\u90FD\u662F\u5C06\u5B57\u7B26\u4E32\u81EA\u52A8\u8F6C\u4E3A\u6570\u503C\uFF0C\u7136\u540E\u518D\u8FD0\u7B97\u3002</p><h3 id="\u5BF9\u8C61\u7684\u76F8\u52A0" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u76F8\u52A0" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u76F8\u52A0</h3><p>\u5982\u679C\u8FD0\u7B97\u5B50\u662F\u5BF9\u8C61\uFF0C\u5FC5\u987B\u5148\u8F6C\u6210\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u7136\u540E\u518D\u76F8\u52A0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

obj <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// &quot;[object Object]2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5BF9\u8C61 <code>obj</code> \u8F6C\u6210\u539F\u59CB\u7C7B\u578B\u7684\u503C\u662F <code>[object Object]</code>\uFF0C\u518D\u52A0 <code>2</code> \u5C31\u5F97\u5230\u4E86\u4E0A\u9762\u7684\u7ED3\u679C\u3002</p><p>\u5BF9\u8C61\u8F6C\u6210\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u89C4\u5219\u5982\u4E0B\u3002</p><p>\u9996\u5148\uFF0C\u81EA\u52A8\u8C03\u7528\u5BF9\u8C61\u7684 <code>valueOf</code> \u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { p: 1 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u5BF9\u8C61\u7684 <code>valueOf</code> \u65B9\u6CD5\u603B\u662F\u8FD4\u56DE\u5BF9\u8C61\u81EA\u8EAB\uFF0C\u8FD9\u65F6\u518D\u81EA\u52A8\u8C03\u7528\u5BF9\u8C61\u7684 <code>toString</code> \u65B9\u6CD5\uFF0C\u5C06\u5176\u8F6C\u4E3A\u5B57\u7B26\u4E32\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;[object Object]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u8C61\u7684 <code>toString</code> \u65B9\u6CD5\u9ED8\u8BA4\u8FD4\u56DE <code>[object Object]</code>\uFF0C\u6240\u4EE5\u5C31\u5F97\u5230\u4E86\u6700\u524D\u9762\u90A3\u4E2A\u4F8B\u5B50\u7684\u7ED3\u679C\u3002</p><p>\u77E5\u9053\u4E86\u8FD9\u4E2A\u89C4\u5219\u4EE5\u540E\uFF0C\u5C31\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u4E49 <code>valueOf</code> \u65B9\u6CD5\u6216 <code>toString</code> \u65B9\u6CD5\uFF0C\u5F97\u5230\u60F3\u8981\u7684\u7ED3\u679C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">valueOf</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49 <code>obj</code> \u5BF9\u8C61\u7684 <code>valueOf</code> \u65B9\u6CD5\u8FD4\u56DE <code>1</code>\uFF0C\u4E8E\u662F <code>obj + 2</code> \u5C31\u5F97\u5230\u4E86 <code>3</code>\u3002\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u7531\u4E8E <code>valueOf</code> \u65B9\u6CD5\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u6240\u4EE5\u4E0D\u518D\u8C03\u7528 <code>toString</code> \u65B9\u6CD5\u3002</p><p>\u4E0B\u9762\u662F\u81EA\u5B9A\u4E49 <code>toString</code> \u65B9\u6CD5\u7684\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">toString</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// &quot;hello2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5BF9\u8C61 <code>obj</code> \u7684 <code>toString</code> \u65B9\u6CD5\u8FD4\u56DE\u5B57\u7B26\u4E32 <code>hello</code>\u3002\u524D\u9762\u8BF4\u8FC7\uFF0C\u53EA\u8981\u6709\u4E00\u4E2A\u8FD0\u7B97\u5B50\u662F\u5B57\u7B26\u4E32\uFF0C\u52A0\u6CD5\u8FD0\u7B97\u7B26\u5C31\u53D8\u6210\u8FDE\u63A5\u8FD0\u7B97\u7B26\uFF0C\u8FD4\u56DE\u8FDE\u63A5\u540E\u7684\u5B57\u7B26\u4E32\u3002</p><p>\u8FD9\u91CC\u6709\u4E00\u4E2A\u7279\u4F8B\uFF0C\u5982\u679C\u8FD0\u7B97\u5B50\u662F\u4E00\u4E2A <code>Date</code> \u5BF9\u8C61\u7684\u5B9E\u4F8B\uFF0C\u90A3\u4E48\u4F1A\u4F18\u5148\u6267\u884C <code>toString</code> \u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function-variable function">valueOf</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// &quot;hello2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5BF9\u8C61 <code>obj</code> \u662F\u4E00\u4E2A <code>Date</code> \u5BF9\u8C61\u7684\u5B9E\u4F8B\uFF0C\u5E76\u4E14\u81EA\u5B9A\u4E49\u4E86 <code>valueOf</code> \u65B9\u6CD5\u548C <code>toString</code> \u65B9\u6CD5\uFF0C\u7ED3\u679C <code>toString</code> \u65B9\u6CD5\u4F18\u5148\u6267\u884C\u3002</p><h2 id="\u4F59\u6570\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4F59\u6570\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u4F59\u6570\u8FD0\u7B97\u7B26</h2><p>\u4F59\u6570\u8FD0\u7B97\u7B26(<code>%</code>)\u8FD4\u56DE\u524D\u4E00\u4E2A\u8FD0\u7B97\u5B50\u88AB\u540E\u4E00\u4E2A\u8FD0\u7B97\u5B50\u9664\uFF0C\u6240\u5F97\u7684\u4F59\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">12</span> <span class="token operator">%</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD0\u7B97\u7ED3\u679C\u7684\u6B63\u8D1F\u53F7\u7531\u7B2C\u4E00\u4E2A\u8FD0\u7B97\u5B50\u7684\u6B63\u8D1F\u53F7\u51B3\u5B9A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>
<span class="token number">1</span> <span class="token operator">%</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\uFF0C\u4E3A\u4E86\u5F97\u5230\u8D1F\u6570\u7684\u6B63\u786E\u4F59\u6570\u503C\uFF0C\u53EF\u4EE5\u5148\u4F7F\u7528\u7EDD\u5BF9\u503C\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9519\u8BEF\u7684\u5199\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token comment">// \u6B63\u786E\u7684\u5199\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isOdd</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F59\u6570\u8FD0\u7B97\u7B26\u8FD8\u53EF\u4EE5\u7528\u4E8E\u6D6E\u70B9\u6570\u7684\u8FD0\u7B97\u3002\u4F46\u662F\uFF0C\u7531\u4E8E\u6D6E\u70B9\u6570\u4E0D\u662F\u7CBE\u786E\u7684\u503C\uFF0C\u65E0\u6CD5\u5F97\u5230\u5B8C\u5168\u51C6\u786E\u7684\u7ED3\u679C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">6.5</span> <span class="token operator">%</span> <span class="token number">2.1</span><span class="token punctuation">;</span>
<span class="token comment">// 0.19999999999999973</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u589E\u548C\u81EA\u51CF\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u81EA\u589E\u548C\u81EA\u51CF\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u81EA\u589E\u548C\u81EA\u51CF\u8FD0\u7B97\u7B26</h2><p>\u81EA\u589E\u548C\u81EA\u51CF\u8FD0\u7B97\u7B26\uFF0C\u662F\u4E00\u5143\u8FD0\u7B97\u7B26\uFF0C\u53EA\u9700\u8981\u4E00\u4E2A\u8FD0\u7B97\u5B50\u3002\u5B83\u4EEC\u7684\u4F5C\u7528\u662F\u5C06\u8FD0\u7B97\u5B50\u9996\u5148\u8F6C\u4E3A\u6570\u503C\uFF0C\u7136\u540E\u52A0\u4E0A 1 \u6216\u8005\u51CF\u53BB 1\u3002\u5B83\u4EEC\u4F1A\u4FEE\u6539\u539F\u59CB\u53D8\u91CF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token operator">++</span>x<span class="token punctuation">;</span> <span class="token comment">// 2</span>
x<span class="token punctuation">;</span> <span class="token comment">// 2</span>

<span class="token operator">--</span>x<span class="token punctuation">;</span> <span class="token comment">// 1</span>
x<span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u7684\u53D8\u91CF <code>x</code> \u81EA\u589E\u540E\uFF0C\u8FD4\u56DE <code>2</code>\uFF0C\u518D\u8FDB\u884C\u81EA\u51CF\uFF0C\u8FD4\u56DE <code>1</code>\u3002\u8FD9\u4E24\u79CD\u60C5\u51B5\u90FD\u4F1A\u4F7F\u5F97\uFF0C\u539F\u59CB\u53D8\u91CF <code>x</code> \u7684\u503C\u53D1\u751F\u6539\u53D8\u3002</p><p>\u8FD0\u7B97\u4E4B\u540E\uFF0C\u53D8\u91CF\u7684\u503C\u53D1\u751F\u53D8\u5316\uFF0C\u8FD9\u79CD\u6548\u5E94\u53EB\u505A\u8FD0\u7B97\u7684\u526F\u4F5C\u7528(side effect)\u3002\u81EA\u589E\u548C\u81EA\u51CF\u8FD0\u7B97\u7B26\u662F\u4EC5\u6709\u7684\u4E24\u4E2A\u5177\u6709\u526F\u4F5C\u7528\u7684\u8FD0\u7B97\u7B26\uFF0C\u5176\u4ED6\u8FD0\u7B97\u7B26\u90FD\u4E0D\u4F1A\u6539\u53D8\u53D8\u91CF\u7684\u503C\u3002</p><p>\u81EA\u589E\u548C\u81EA\u51CF\u8FD0\u7B97\u7B26\u6709\u4E00\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\uFF0C\u5C31\u662F\u653E\u5728\u53D8\u91CF\u4E4B\u540E\uFF0C\u4F1A\u5148\u8FD4\u56DE\u53D8\u91CF\u64CD\u4F5C\u524D\u7684\u503C\uFF0C\u518D\u8FDB\u884C\u81EA\u589E/\u81EA\u51CF\u64CD\u4F5C\uFF1B\u653E\u5728\u53D8\u91CF\u4E4B\u524D\uFF0C\u4F1A\u5148\u8FDB\u884C\u81EA\u589E/\u81EA\u51CF\u64CD\u4F5C\uFF0C\u518D\u8FD4\u56DE\u53D8\u91CF\u64CD\u4F5C\u540E\u7684\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

x<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token operator">++</span>y<span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>x</code> \u662F\u5148\u8FD4\u56DE\u5F53\u524D\u503C\uFF0C\u7136\u540E\u81EA\u589E\uFF0C\u6240\u4EE5\u5F97\u5230 <code>1</code>\uFF1B<code>y</code> \u662F\u5148\u81EA\u589E\uFF0C\u7136\u540E\u8FD4\u56DE\u65B0\u7684\u503C\uFF0C\u6240\u4EE5\u5F97\u5230 <code>2</code>\u3002</p><h2 id="\u6570\u503C\u8FD0\u7B97\u7B26-\u8D1F\u6570\u503C\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6570\u503C\u8FD0\u7B97\u7B26-\u8D1F\u6570\u503C\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6570\u503C\u8FD0\u7B97\u7B26\uFF0C\u8D1F\u6570\u503C\u8FD0\u7B97\u7B26</h2><p>\u6570\u503C\u8FD0\u7B97\u7B26(<code>+</code>)\u540C\u6837\u4F7F\u7528\u52A0\u53F7\uFF0C\u4F46\u5B83\u662F\u4E00\u5143\u8FD0\u7B97\u7B26(\u53EA\u9700\u8981\u4E00\u4E2A\u64CD\u4F5C\u6570)\uFF0C\u800C\u52A0\u6CD5\u8FD0\u7B97\u7B26\u662F\u4E8C\u5143\u8FD0\u7B97\u7B26(\u9700\u8981\u4E24\u4E2A\u64CD\u4F5C\u6570)\u3002</p><p>\u6570\u503C\u8FD0\u7B97\u7B26\u7684\u4F5C\u7528\u5728\u4E8E\u53EF\u4EE5\u5C06\u4EFB\u4F55\u503C\u8F6C\u4E3A\u6570\u503C(\u4E0E <code>Number</code> \u51FD\u6570\u7684\u4F5C\u7528\u76F8\u540C)\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">+</span><span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token operator">+</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token operator">+</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u8868\u793A\uFF0C\u975E\u6570\u503C\u7ECF\u8FC7\u6570\u503C\u8FD0\u7B97\u7B26\u4EE5\u540E\uFF0C\u90FD\u53D8\u6210\u4E86\u6570\u503C(\u6700\u540E\u4E00\u884C <code>NaN</code> \u4E5F\u662F\u6570\u503C)\u3002\u5177\u4F53\u7684\u7C7B\u578B\u8F6C\u6362\u89C4\u5219\uFF0C\u53C2\u89C1\u300A\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u300B\u4E00\u7AE0\u3002</p><p>\u8D1F\u6570\u503C\u8FD0\u7B97\u7B26(<code>-</code>)\uFF0C\u4E5F\u540C\u6837\u5177\u6709\u5C06\u4E00\u4E2A\u503C\u8F6C\u4E3A\u6570\u503C\u7684\u529F\u80FD\uFF0C\u53EA\u4E0D\u8FC7\u5F97\u5230\u7684\u503C\u6B63\u8D1F\u76F8\u53CD\u3002\u8FDE\u7528\u4E24\u4E2A\u8D1F\u6570\u503C\u8FD0\u7B97\u7B26\uFF0C\u7B49\u540C\u4E8E\u6570\u503C\u8FD0\u7B97\u7B26\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token operator">-</span>x <span class="token operator">-</span> <span class="token operator">-</span>x<span class="token punctuation">;</span> <span class="token comment">// -1 // 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u6700\u540E\u4E00\u884C\u7684\u5706\u62EC\u53F7\u4E0D\u53EF\u5C11\uFF0C\u5426\u5219\u4F1A\u53D8\u6210\u81EA\u51CF\u8FD0\u7B97\u7B26\u3002</p><p>\u6570\u503C\u8FD0\u7B97\u7B26\u53F7\u548C\u8D1F\u6570\u503C\u8FD0\u7B97\u7B26\uFF0C\u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u503C\uFF0C\u800C\u4E0D\u4F1A\u6539\u53D8\u539F\u59CB\u53D8\u91CF\u7684\u503C\u3002</p><h2 id="\u6307\u6570\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6307\u6570\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6307\u6570\u8FD0\u7B97\u7B26</h2><p>\u6307\u6570\u8FD0\u7B97\u7B26(<code>**</code>)\u5B8C\u6210\u6307\u6570\u8FD0\u7B97\uFF0C\u524D\u4E00\u4E2A\u8FD0\u7B97\u5B50\u662F\u5E95\u6570\uFF0C\u540E\u4E00\u4E2A\u8FD0\u7B97\u5B50\u662F\u6307\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// 16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u6307\u6570\u8FD0\u7B97\u7B26\u662F\u53F3\u7ED3\u5408\uFF0C\u800C\u4E0D\u662F\u5DE6\u7ED3\u5408\u3002\u5373\u591A\u4E2A\u6307\u6570\u8FD0\u7B97\u7B26\u8FDE\u7528\u65F6\uFF0C\u5148\u8FDB\u884C\u6700\u53F3\u8FB9\u7684\u8BA1\u7B97\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u76F8\u5F53\u4E8E 2 ** (3 ** 2)</span>
<span class="token number">2</span> <span class="token operator">**</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 512</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u7531\u4E8E\u6307\u6570\u8FD0\u7B97\u7B26\u662F\u53F3\u7ED3\u5408\uFF0C\u6240\u4EE5\u5148\u8BA1\u7B97\u7B2C\u4E8C\u4E2A\u6307\u6570\u8FD0\u7B97\u7B26\uFF0C\u800C\u4E0D\u662F\u7B2C\u4E00\u4E2A\u3002</p><h2 id="\u8D4B\u503C\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8D4B\u503C\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u8D4B\u503C\u8FD0\u7B97\u7B26</h2><p>\u8D4B\u503C\u8FD0\u7B97\u7B26(Assignment Operators)\u7528\u4E8E\u7ED9\u53D8\u91CF\u8D4B\u503C\u3002</p><p>\u6700\u5E38\u89C1\u7684\u8D4B\u503C\u8FD0\u7B97\u7B26\uFF0C\u5F53\u7136\u5C31\u662F\u7B49\u53F7(<code>=</code>)\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5C06 1 \u8D4B\u503C\u7ED9\u53D8\u91CF x</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// \u5C06\u53D8\u91CF y \u7684\u503C\u8D4B\u503C\u7ED9\u53D8\u91CF x</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> y<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8D4B\u503C\u8FD0\u7B97\u7B26\u8FD8\u53EF\u4EE5\u4E0E\u5176\u4ED6\u8FD0\u7B97\u7B26\u7ED3\u5408\uFF0C\u5F62\u6210\u53D8\u4F53\u3002\u4E0B\u9762\u662F\u4E0E\u7B97\u672F\u8FD0\u7B97\u7B26\u7684\u7ED3\u5408\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7B49\u540C\u4E8E x = x + y</span>
x <span class="token operator">+=</span> y<span class="token punctuation">;</span>

<span class="token comment">// \u7B49\u540C\u4E8E x = x - y</span>
x <span class="token operator">-=</span> y<span class="token punctuation">;</span>

<span class="token comment">// \u7B49\u540C\u4E8E x = x * y</span>
x <span class="token operator">*=</span> y<span class="token punctuation">;</span>

<span class="token comment">// \u7B49\u540C\u4E8E x = x / y</span>
x <span class="token operator">/=</span> y<span class="token punctuation">;</span>

<span class="token comment">// \u7B49\u540C\u4E8E x = x % y</span>
x <span class="token operator">%=</span> y<span class="token punctuation">;</span>

<span class="token comment">// \u7B49\u540C\u4E8E x = x ** y</span>
x <span class="token operator">**=</span> y<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u4E0E\u4F4D\u8FD0\u7B97\u7B26\u7684\u7ED3\u5408(\u5173\u4E8E\u4F4D\u8FD0\u7B97\u7B26\uFF0C\u8BF7\u89C1\u540E\u6587\u7684\u4ECB\u7ECD)\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7B49\u540C\u4E8E x = x &gt;&gt; y</span>
x <span class="token operator">&gt;&gt;=</span> y<span class="token punctuation">;</span>

<span class="token comment">// \u7B49\u540C\u4E8E x = x &lt;&lt; y</span>
x <span class="token operator">&lt;&lt;=</span> y<span class="token punctuation">;</span>

<span class="token comment">// \u7B49\u540C\u4E8E x = x &gt;&gt;&gt; y</span>
x <span class="token operator">&gt;&gt;&gt;=</span> y<span class="token punctuation">;</span>

<span class="token comment">// \u7B49\u540C\u4E8E x = x &amp; y</span>
x <span class="token operator">&amp;=</span> y<span class="token punctuation">;</span>

<span class="token comment">// \u7B49\u540C\u4E8E x = x | y</span>
x <span class="token operator">|=</span> y<span class="token punctuation">;</span>

<span class="token comment">// \u7B49\u540C\u4E8E x = x ^ y</span>
x <span class="token operator">^=</span> y<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E9B\u590D\u5408\u7684\u8D4B\u503C\u8FD0\u7B97\u7B26\uFF0C\u90FD\u662F\u5148\u8FDB\u884C\u6307\u5B9A\u8FD0\u7B97\uFF0C\u7136\u540E\u5C06\u5F97\u5230\u503C\u8FD4\u56DE\u7ED9\u5DE6\u8FB9\u7684\u53D8\u91CF\u3002</p>`,82),o=[t];function c(i,l){return s(),a("div",null,o)}var d=n(p,[["render",c],["__file","arithmetic.html.vue"]]);export{d as default};
