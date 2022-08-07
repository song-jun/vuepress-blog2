import{_ as n,o as s,c as a,e as t}from"./app.edc3ba14.js";const p={},e=t(`<div class="custom-container tip"><p class="custom-container-title">\u7AE0\u8282\u8FC7\u65F6</p><p>\u800C\u4E14\u76EE\u524D\u6D4F\u89C8\u5668 API \u5DF2\u7ECF\u57FA\u672C\u7EDF\u4E00\uFF0C\u9664\u975E\u517C\u5BB9\u65E7\u7248\u672C IE\uFF0C\u5426\u5219\u65E0\u9700\u9488\u5BF9\u4E0D\u540C\u6D4F\u89C8\u5668\u5199\u4E0D\u540C\u7684\u4EE3\u7801\u3002</p></div><p>\u76F4\u63A5\u4F7F\u7528\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684 API \u5BF9 DOM \u7ED3\u6784\u8FDB\u884C\u4FEE\u6539\uFF0C\u4E0D\u4F46\u4EE3\u7801\u590D\u6742\uFF0C\u800C\u4E14\u8981\u9488\u5BF9\u6D4F\u89C8\u5668\u5199\u4E0D\u540C\u7684\u4EE3\u7801\u3002</p><p>\u6709\u4E86 jQuery\uFF0C\u6211\u4EEC\u5C31\u4E13\u6CE8\u4E8E\u64CD\u4F5C jQuery \u5BF9\u8C61\u672C\u8EAB\uFF0C\u5E95\u5C42\u7684 DOM \u64CD\u4F5C\u7531 jQuery \u5B8C\u6210\u5C31\u53EF\u4EE5\u4E86\uFF0C\u8FD9\u6837\u4E00\u6765\uFF0C\u4FEE\u6539 DOM \u4E5F\u5927\u5927\u7B80\u5316\u4E86\u3002</p><h2 id="\u6DFB\u52A0-dom" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-dom" aria-hidden="true">#</a> \u6DFB\u52A0 DOM</h2><p>\u8981\u6DFB\u52A0\u65B0\u7684 DOM \u8282\u70B9\uFF0C\u9664\u4E86\u901A\u8FC7 jQuery \u7684 <code>html()</code> \u8FD9\u79CD\u66B4\u529B\u65B9\u6CD5\u5916\uFF0C\u8FD8\u53EF\u4EE5\u7528 <code>append()</code> \u65B9\u6CD5\uFF0C\u4F8B\u5982:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-div<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>JavaScript<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Python<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Swift<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4F55\u5411\u5217\u8868\u65B0\u589E\u4E00\u4E2A\u8BED\u8A00? \u9996\u5148\u8981\u62FF\u5230 <code>&lt;ul&gt;</code> \u8282\u70B9:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ul <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-div&gt;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u8C03\u7528 <code>append()</code> \u4F20\u5165 HTML \u7247\u6BB5:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ul<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;li&gt;&lt;span&gt;Haskell&lt;/span&gt;&lt;/li&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9664\u4E86\u63A5\u53D7\u5B57\u7B26\u4E32\uFF0C<code>append()</code> \u8FD8\u53EF\u4EE5\u4F20\u5165\u539F\u59CB\u7684 DOM \u5BF9\u8C61\uFF0CjQuery \u5BF9\u8C61\u548C\u51FD\u6570\u5BF9\u8C61:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u521B\u5EFADOM\u5BF9\u8C61:</span>
<span class="token keyword">const</span> ps <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ps<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;&lt;span&gt;Pascal&lt;/span&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u6DFB\u52A0DOM\u5BF9\u8C61:</span>
ul<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>ps<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6DFB\u52A0jQuery\u5BF9\u8C61:</span>
ul<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#scheme&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6DFB\u52A0\u51FD\u6570\u5BF9\u8C61:</span>
ul<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;&lt;li&gt;&lt;span&gt;Language - &quot;</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">&quot;&lt;/span&gt;&lt;/li&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F20\u5165\u51FD\u6570\u65F6\uFF0C\u8981\u6C42\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u3001DOM \u5BF9\u8C61\u6216\u8005 jQuery \u5BF9\u8C61\u3002\u56E0\u4E3A jQuery \u7684 <code>append()</code> \u53EF\u80FD\u4F5C\u7528\u4E8E\u4E00\u7EC4 DOM \u8282\u70B9\uFF0C\u53EA\u6709\u4F20\u5165\u51FD\u6570\u624D\u80FD\u9488\u5BF9\u6BCF\u4E2A DOM \u751F\u6210\u4E0D\u540C\u7684\u5B50\u8282\u70B9\u3002</p><p><code>append()</code> \u628A DOM \u6DFB\u52A0\u5230\u6700\u540E\uFF0C<code>prepend()</code> \u5219\u628A DOM \u6DFB\u52A0\u5230\u6700\u524D\u3002</p><p>\u53E6\u5916\u6CE8\u610F\uFF0C\u5982\u679C\u8981\u6DFB\u52A0\u7684 DOM \u8282\u70B9\u5DF2\u7ECF\u5B58\u5728\u4E8E HTML \u6587\u6863\u4E2D\uFF0C\u5B83\u4F1A\u9996\u5148\u4ECE\u6587\u6863\u79FB\u9664\uFF0C\u7136\u540E\u518D\u6DFB\u52A0\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u7528 <code>append()</code>\uFF0C\u60A8\u53EF\u4EE5\u79FB\u52A8\u4E00\u4E2A DOM \u8282\u70B9\u3002</p><p>\u5982\u679C\u8981\u628A\u65B0\u8282\u70B9\u63D2\u5165\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u4F8B\u5982\uFF0CJavaScript \u548C Python \u4E4B\u95F4\uFF0C\u90A3\u4E48\uFF0C\u53EF\u4EE5\u5148\u5B9A\u4F4D\u5230 JavaScript\uFF0C\u7136\u540E\u7528 <code>after()</code> \u65B9\u6CD5:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> js <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-div&gt;ul&gt;li:first-child&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
js<span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;li&gt;&lt;span&gt;Lua&lt;/span&gt;&lt;/li&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u540C\u7EA7\u8282\u70B9\u53EF\u4EE5\u7528 <code>after()</code> \u6216\u8005 <code>before()</code> \u65B9\u6CD5\u3002</p><h2 id="\u5220\u9664\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8282\u70B9" aria-hidden="true">#</a> \u5220\u9664\u8282\u70B9</h2><p>\u8981\u5220\u9664 DOM \u8282\u70B9\uFF0C\u62FF\u5230 jQuery \u5BF9\u8C61\u540E\u76F4\u63A5\u8C03\u7528 <code>remove()</code> \u65B9\u6CD5\u5C31\u53EF\u4EE5\u4E86\u3002\u5982\u679C jQuery \u5BF9\u8C61\u5305\u542B\u82E5\u5E72 DOM \u8282\u70B9\uFF0C\u5B9E\u9645\u4E0A\u53EF\u4EE5\u4E00\u6B21\u5220\u9664\u591A\u4E2A DOM \u8282\u70B9:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> li <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-div&gt;ul&gt;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
li<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6240\u6709&lt;li&gt;\u5168\u88AB\u5220\u9664</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,21),c=[e];function o(l,i){return s(),a("div",null,c)}var d=n(p,[["render",o],["__file","modify-dom.html.vue"]]);export{d as default};
