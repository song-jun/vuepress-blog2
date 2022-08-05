import{_ as n,o as s,c as a,e}from"./app.17aa6dfd.js";const p={},t=e(`<h2 id="void-\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#void-\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> void \u8FD0\u7B97\u7B26</h2><p><code>void</code> \u8FD0\u7B97\u7B26\u7684\u4F5C\u7528\u662F\u6267\u884C\u4E00\u4E2A\u8868\u8FBE\u5F0F\uFF0C\u7136\u540E\u4E0D\u8FD4\u56DE\u4EFB\u4F55\u503C\uFF0C\u6216\u8005\u8BF4\u8FD4\u56DE <code>undefined</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
<span class="token keyword">void</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u662F <code>void</code> \u8FD0\u7B97\u7B26\u7684\u4E24\u79CD\u5199\u6CD5\uFF0C\u90FD\u6B63\u786E\u3002\u5EFA\u8BAE\u91C7\u7528\u540E\u4E00\u79CD\u5F62\u5F0F\uFF0C\u5373\u603B\u662F\u4F7F\u7528\u5706\u62EC\u53F7\u3002\u56E0\u4E3A <code>void</code> \u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u6027\u5F88\u9AD8\uFF0C\u5982\u679C\u4E0D\u4F7F\u7528\u62EC\u53F7\uFF0C\u5BB9\u6613\u9020\u6210\u9519\u8BEF\u7684\u7ED3\u679C\u3002\u6BD4\u5982\uFF0C<code>void 4 + 7</code> \u5B9E\u9645\u4E0A\u7B49\u540C\u4E8E <code>(void 4) + 7</code>\u3002</p><p>\u4E0B\u9762\u662F <code>void</code> \u8FD0\u7B97\u7B26\u7684\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
x<span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u8FD0\u7B97\u7B26\u7684\u4E3B\u8981\u7528\u9014\u662F\u6D4F\u89C8\u5668\u7684\u4E66\u7B7E\u5DE5\u5177(Bookmarklet)\uFF0C\u4EE5\u53CA\u5728\u8D85\u7EA7\u94FE\u63A5\u4E2D\u63D2\u5165\u4EE3\u7801\u9632\u6B62\u7F51\u9875\u8DF3\u8F6C\u3002</p><p>\u8BF7\u770B\u4E0B\u9762\u7684\u4EE3\u7801\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://example.com<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\u70B9\u51FB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u70B9\u51FB\u94FE\u63A5\u540E\uFF0C\u4F1A\u5148\u6267\u884C <code>onclick</code> \u7684\u4EE3\u7801\uFF0C\u7531\u4E8E <code>onclick</code> \u8FD4\u56DE <code>false</code>\uFF0C\u6240\u4EE5\u6D4F\u89C8\u5668\u4E0D\u4F1A\u8DF3\u8F6C\u5230 example.com\u3002</p><p><code>void</code> \u8FD0\u7B97\u7B26\u53EF\u4EE5\u53D6\u4EE3\u4E0A\u9762\u7684\u5199\u6CD5\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript: void(f())<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6587\u5B57<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u66F4\u5B9E\u9645\u7684\u4F8B\u5B50\uFF0C\u7528\u6237\u70B9\u51FB\u94FE\u63A5\u63D0\u4EA4\u8868\u5355\uFF0C\u4F46\u662F\u4E0D\u4EA7\u751F\u9875\u9762\u8DF3\u8F6C\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javascript: void(document.form.submit())<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \u63D0\u4EA4 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u9017\u53F7\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u9017\u53F7\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u9017\u53F7\u8FD0\u7B97\u7B26</h2><p>\u9017\u53F7\u8FD0\u7B97\u7B26\u7528\u4E8E\u5BF9\u4E24\u4E2A\u8868\u8FBE\u5F0F\u6C42\u503C\uFF0C\u5E76\u8FD4\u56DE\u540E\u4E00\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;b&quot;</span>

<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">++</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
x<span class="token punctuation">;</span> <span class="token comment">// 1</span>
y<span class="token punctuation">;</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u9017\u53F7\u8FD0\u7B97\u7B26\u8FD4\u56DE\u540E\u4E00\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\u3002</p><p>\u9017\u53F7\u8FD0\u7B97\u7B26\u7684\u4E00\u4E2A\u7528\u9014\u662F\uFF0C\u5728\u8FD4\u56DE\u4E00\u4E2A\u503C\u4E4B\u524D\uFF0C\u8FDB\u884C\u4E00\u4E9B\u8F85\u52A9\u64CD\u4F5C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token punctuation">(</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Hi!</span>

value<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5148\u6267\u884C\u9017\u53F7\u4E4B\u524D\u7684\u64CD\u4F5C\uFF0C\u7136\u540E\u8FD4\u56DE\u9017\u53F7\u540E\u9762\u7684\u503C\u3002</p><h2 id="\u8FD0\u7B97\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u987A\u5E8F" aria-hidden="true">#</a> \u8FD0\u7B97\u987A\u5E8F</h2><h3 id="\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u4F18\u5148\u7EA7</h3><p>JavaScript \u5404\u79CD\u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u7EA7\u522B(Operator Precedence)\u662F\u4E0D\u4E00\u6837\u7684\u3002\u4F18\u5148\u7EA7\u9AD8\u7684\u8FD0\u7B97\u7B26\u5148\u6267\u884C\uFF0C\u4F18\u5148\u7EA7\u4F4E\u7684\u8FD0\u7B97\u7B26\u540E\u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">4</span> <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">// 34</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u4E58\u6CD5\u8FD0\u7B97\u7B26(<code>*</code>)\u7684\u4F18\u5148\u6027\u9AD8\u4E8E\u52A0\u6CD5\u8FD0\u7B97\u7B26(<code>+</code>)\uFF0C\u6240\u4EE5\u5148\u6267\u884C\u4E58\u6CD5\uFF0C\u518D\u6267\u884C\u52A0\u6CD5\uFF0C\u76F8\u5F53\u4E8E\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">4</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 34</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u591A\u4E2A\u8FD0\u7B97\u7B26\u6DF7\u5199\u5728\u4E00\u8D77\uFF0C\u5E38\u5E38\u4F1A\u5BFC\u81F4\u4EE4\u4EBA\u56F0\u60D1\u7684\u4EE3\u7801\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> y <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> x <span class="token operator">:</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u53D8\u91CF <code>y</code> \u7684\u503C\u5C31\u5F88\u96BE\u770B\u51FA\u6765\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u8868\u8FBE\u5F0F\u6D89\u53CA 5 \u4E2A\u8FD0\u7B97\u7B26\uFF0C\u5230\u5E95\u8C01\u7684\u4F18\u5148\u7EA7\u6700\u9AD8\uFF0C\u5B9E\u5728\u4E0D\u5BB9\u6613\u8BB0\u4F4F\u3002</p><p>\u6839\u636E\u8BED\u8A00\u89C4\u683C\uFF0C\u8FD9\u4E94\u4E2A\u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\u4F9D\u6B21\u4E3A: \u5C0F\u4E8E\u7B49\u4E8E(<code>&lt;=</code>)\u3001\u4E25\u683C\u76F8\u7B49(<code>===</code>)\u3001\u6216(<code>||</code>)\u3001\u4E09\u5143(<code>?:</code>)\u3001\u7B49\u53F7(<code>=</code>)\u3002\u56E0\u6B64\u4E0A\u9762\u7684\u8868\u8FBE\u5F0F\uFF0C\u5B9E\u9645\u7684\u8FD0\u7B97\u987A\u5E8F\u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">?</span> x <span class="token operator">:</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BB0\u4F4F\u6240\u6709\u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u7EA7\uFF0C\u662F\u975E\u5E38\u96BE\u7684\uFF0C\u4E5F\u662F\u6CA1\u6709\u5FC5\u8981\u7684\u3002</p><h3 id="\u5706\u62EC\u53F7\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u5706\u62EC\u53F7\u7684\u4F5C\u7528" aria-hidden="true">#</a> \u5706\u62EC\u53F7\u7684\u4F5C\u7528</h3><p>\u5706\u62EC\u53F7(<code>()</code>)\u53EF\u4EE5\u7528\u6765\u63D0\u9AD8\u8FD0\u7B97\u7684\u4F18\u5148\u7EA7\uFF0C\u56E0\u4E3A\u5B83\u7684\u4F18\u5148\u7EA7\u662F\u6700\u9AD8\u7684\uFF0C\u5373\u5706\u62EC\u53F7\u4E2D\u7684\u8868\u8FBE\u5F0F\u4F1A\u7B2C\u4E00\u4E2A\u8FD0\u7B97\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">// 54</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u7531\u4E8E\u4F7F\u7528\u4E86\u5706\u62EC\u53F7\uFF0C\u52A0\u6CD5\u4F1A\u5148\u4E8E\u4E58\u6CD5\u6267\u884C\u3002</p><p>\u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u7EA7\u522B\u5341\u5206\u7E41\u6742\uFF0C\u4E14\u90FD\u662F\u786C\u6027\u89C4\u5B9A\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u603B\u662F\u4F7F\u7528\u5706\u62EC\u53F7\uFF0C\u4FDD\u8BC1\u8FD0\u7B97\u987A\u5E8F\u6E05\u6670\u53EF\u8BFB\uFF0C\u8FD9\u5BF9\u4EE3\u7801\u7684\u7EF4\u62A4\u548C\u9664\u9519\u81F3\u5173\u91CD\u8981\u3002</p><p>\u987A\u4FBF\u8BF4\u4E00\u4E0B\uFF0C\u5706\u62EC\u53F7\u4E0D\u662F\u8FD0\u7B97\u7B26\uFF0C\u800C\u662F\u4E00\u79CD\u8BED\u6CD5\u7ED3\u6784\u3002\u5B83\u4E00\u5171\u6709\u4E24\u79CD\u7528\u6CD5: \u4E00\u79CD\u662F\u628A\u8868\u8FBE\u5F0F\u653E\u5728\u5706\u62EC\u53F7\u4E4B\u4E2D\uFF0C\u63D0\u5347\u8FD0\u7B97\u7684\u4F18\u5148\u7EA7\uFF1B\u53E6\u4E00\u79CD\u662F\u8DDF\u5728\u51FD\u6570\u7684\u540E\u9762\uFF0C\u4F5C\u7528\u662F\u8C03\u7528\u51FD\u6570\u3002</p><p>\u6CE8\u610F\uFF0C\u56E0\u4E3A\u5706\u62EC\u53F7\u4E0D\u662F\u8FD0\u7B97\u7B26\uFF0C\u6240\u4EE5\u4E0D\u5177\u6709\u6C42\u503C\u4F5C\u7528\uFF0C\u53EA\u6539\u53D8\u8FD0\u7B97\u7684\u4F18\u5148\u7EA7\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u7684\u7B2C\u4E8C\u884C\uFF0C\u5982\u679C\u5706\u62EC\u53F7\u5177\u6709\u6C42\u503C\u4F5C\u7528\uFF0C\u90A3\u4E48\u5C31\u4F1A\u53D8\u6210 <code>1 = 2</code>\uFF0C\u8FD9\u662F\u4F1A\u62A5\u9519\u4E86\u3002\u4F46\u662F\uFF0C\u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u8FD0\u884C\uFF0C\u8FD9\u9A8C\u8BC1\u4E86\u5706\u62EC\u53F7\u53EA\u6539\u53D8\u4F18\u5148\u7EA7\uFF0C\u4E0D\u4F1A\u6C42\u503C\u3002</p><p>\u8FD9\u4E5F\u610F\u5473\u7740\uFF0C\u5982\u679C\u6574\u4E2A\u8868\u8FBE\u5F0F\u90FD\u653E\u5728\u5706\u62EC\u53F7\u4E4B\u4E2D\uFF0C\u90A3\u4E48\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6548\u679C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span>expression<span class="token punctuation">)</span>
<span class="token comment">// \u7B49\u540C\u4E8E</span>
expression
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FD\u6570\u653E\u5728\u5706\u62EC\u53F7\u4E2D\uFF0C\u4F1A\u8FD4\u56DE\u51FD\u6570\u672C\u8EAB\u3002\u5982\u679C\u5706\u62EC\u53F7\u7D27\u8DDF\u5728\u51FD\u6570\u7684\u540E\u9762\uFF0C\u5C31\u8868\u793A\u8C03\u7528\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// function f(){return 1;}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u51FD\u6570\u653E\u5728\u5706\u62EC\u53F7\u4E4B\u4E2D\u4F1A\u8FD4\u56DE\u51FD\u6570\u672C\u8EAB\uFF0C\u5706\u62EC\u53F7\u8DDF\u5728\u51FD\u6570\u540E\u9762\u5219\u662F\u8C03\u7528\u51FD\u6570\u3002</p><p>\u5706\u62EC\u53F7\u4E4B\u4E2D\uFF0C\u53EA\u80FD\u653E\u7F6E\u8868\u8FBE\u5F0F\uFF0C\u5982\u679C\u5C06\u8BED\u53E5\u653E\u5728\u5706\u62EC\u53F7\u4E4B\u4E2D\uFF0C\u5C31\u4F1A\u62A5\u9519\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// SyntaxError: Unexpected token var</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5DE6\u7ED3\u5408\u4E0E\u53F3\u7ED3\u5408" tabindex="-1"><a class="header-anchor" href="#\u5DE6\u7ED3\u5408\u4E0E\u53F3\u7ED3\u5408" aria-hidden="true">#</a> \u5DE6\u7ED3\u5408\u4E0E\u53F3\u7ED3\u5408</h3><p>\u5BF9\u4E8E\u4F18\u5148\u7EA7\u522B\u76F8\u540C\u7684\u8FD0\u7B97\u7B26\uFF0C\u5927\u591A\u6570\u60C5\u51B5\uFF0C\u8BA1\u7B97\u987A\u5E8F\u603B\u662F\u4ECE\u5DE6\u5230\u53F3\uFF0C\u8FD9\u53EB\u505A\u8FD0\u7B97\u7B26\u7684\u201C\u5DE6\u7ED3\u5408\u201D(left-to-right associativity)\uFF0C\u5373\u4ECE\u5DE6\u8FB9\u5F00\u59CB\u8BA1\u7B97\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>x <span class="token operator">+</span> y <span class="token operator">+</span> z<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u5148\u8BA1\u7B97\u6700\u5DE6\u8FB9\u7684 <code>x</code> \u4E0E <code>y</code> \u7684\u548C\uFF0C\u7136\u540E\u518D\u8BA1\u7B97\u4E0E <code>z</code> \u7684\u548C\u3002</p><p>\u4F46\u662F\u5C11\u6570\u8FD0\u7B97\u7B26\u7684\u8BA1\u7B97\u987A\u5E8F\u662F\u4ECE\u53F3\u5230\u5DE6\uFF0C\u5373\u4ECE\u53F3\u8FB9\u5F00\u59CB\u8BA1\u7B97\uFF0C\u8FD9\u53EB\u505A\u8FD0\u7B97\u7B26\u7684\u201C\u53F3\u7ED3\u5408\u201D(right-to-left associativity)\u3002\u5176\u4E2D\uFF0C\u6700\u4E3B\u8981\u7684\u662F\u8D4B\u503C\u8FD0\u7B97\u7B26(<code>=</code>)\u548C\u4E09\u5143\u6761\u4EF6\u8FD0\u7B97\u7B26(<code>?:</code>)\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w <span class="token operator">=</span> x <span class="token operator">=</span> y <span class="token operator">=</span> z<span class="token punctuation">;</span>
q <span class="token operator">=</span> a <span class="token operator">?</span> b <span class="token operator">:</span> c <span class="token operator">?</span> d <span class="token operator">:</span> e <span class="token operator">?</span> f <span class="token operator">:</span> g<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u7684\u8FD0\u7B97\u7ED3\u679C\uFF0C\u76F8\u5F53\u4E8E\u4E0B\u9762\u7684\u6837\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>w <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token punctuation">(</span>y <span class="token operator">=</span> z<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
q <span class="token operator">=</span> a <span class="token operator">?</span> b <span class="token operator">:</span> <span class="token punctuation">(</span>c <span class="token operator">?</span> d <span class="token operator">:</span> <span class="token punctuation">(</span>e <span class="token operator">?</span> f <span class="token operator">:</span> g<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4E24\u884C\u4EE3\u7801\uFF0C\u5404\u6709\u4E09\u4E2A\u7B49\u53F7\u8FD0\u7B97\u7B26\u548C\u4E09\u4E2A\u4E09\u5143\u8FD0\u7B97\u7B26\uFF0C\u90FD\u662F\u5148\u8BA1\u7B97\u6700\u53F3\u8FB9\u7684\u90A3\u4E2A\u8FD0\u7B97\u7B26\u3002</p><p>\u6307\u6570\u8FD0\u7B97\u7B26(<code>**</code>)\u4E5F\u662F\u53F3\u7ED3\u5408\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u76F8\u5F53\u4E8E 2 ** (3 ** 2)</span>
<span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span> <span class="token operator">**</span> <span class="token number">2</span>
<span class="token comment">// 512</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60),o=[t];function c(l,i){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","priority.html.vue"]]);export{r as default};
