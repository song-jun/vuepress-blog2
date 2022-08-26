import{_ as n,o as s,c as a,e as p}from"./app.cc4bf3f5.js";const t={},e=p(`<h2 id="\u6392\u5E8F\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F\u7B97\u6CD5" aria-hidden="true">#</a> \u6392\u5E8F\u7B97\u6CD5</h2><p>\u6392\u5E8F\u4E5F\u662F\u5728\u7A0B\u5E8F\u4E2D\u7ECF\u5E38\u7528\u5230\u7684\u7B97\u6CD5\u3002\u65E0\u8BBA\u4F7F\u7528\u5192\u6CE1\u6392\u5E8F\u8FD8\u662F\u5FEB\u901F\u6392\u5E8F\uFF0C\u6392\u5E8F\u7684\u6838\u5FC3\u662F\u6BD4\u8F83\u4E24\u4E2A\u5143\u7D20\u7684\u5927\u5C0F\u3002\u5982\u679C\u662F\u6570\u5B57\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u6BD4\u8F83\uFF0C\u4F46\u5982\u679C\u662F\u5B57\u7B26\u4E32\u6216\u8005\u4E24\u4E2A dict \u5462? \u76F4\u63A5\u6BD4\u8F83\u6570\u5B66\u4E0A\u7684\u5927\u5C0F\u662F\u6CA1\u6709\u610F\u4E49\u7684\uFF0C\u56E0\u6B64\uFF0C\u6BD4\u8F83\u7684\u8FC7\u7A0B\u5FC5\u987B\u901A\u8FC7\u51FD\u6570\u62BD\u8C61\u51FA\u6765\u3002</p><p>Python \u5185\u7F6E\u7684 <code>sorted()</code> \u51FD\u6570\u5C31\u53EF\u4EE5\u5BF9 list \u8FDB\u884C\u6392\u5E8F:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">21</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5916\uFF0C<code>sorted()</code> \u51FD\u6570\u4E5F\u662F\u4E00\u4E2A\u9AD8\u9636\u51FD\u6570\uFF0C\u5B83\u8FD8\u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A <code>key</code> \u51FD\u6570\u6765\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u6392\u5E8F\uFF0C\u4F8B\u5982\u6309\u7EDD\u5BF9\u503C\u5927\u5C0F\u6392\u5E8F:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token builtin">abs</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>key \u6307\u5B9A\u7684\u51FD\u6570\u5C06\u4F5C\u7528\u4E8E list \u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u4E0A\uFF0C\u5E76\u6839\u636E <code>key</code> \u51FD\u6570\u8FD4\u56DE\u7684\u7ED3\u679C\u8FDB\u884C\u6392\u5E8F\u3002\u5BF9\u6BD4\u539F\u59CB\u7684 list \u548C\u7ECF\u8FC7 <code>key=abs</code> \u5904\u7406\u8FC7\u7684 list:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">21</span><span class="token punctuation">]</span>

keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span>  <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span>  <span class="token number">21</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E <code>sorted()</code> \u51FD\u6570\u6309\u7167 keys \u8FDB\u884C\u6392\u5E8F\uFF0C\u5E76\u6309\u7167\u5BF9\u5E94\u5173\u7CFB\u8FD4\u56DE list \u76F8\u5E94\u7684\u5143\u7D20:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>keys\u6392\u5E8F\u7ED3\u679C =&gt; [5, 9,  12,  21, 36]
                |  |    |    |   |
\u6700\u7EC8\u7ED3\u679C     =&gt; [5, 9, -12, -21, 36]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u518D\u770B\u4E00\u4E2A\u5B57\u7B26\u4E32\u6392\u5E8F\u7684\u4F8B\u5B50:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Zoo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Credit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token string">&#39;Credit&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Zoo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bob&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u5B57\u7B26\u4E32\u6392\u5E8F\uFF0C\u662F\u6309\u7167 ASCII \u7684\u5927\u5C0F\u6BD4\u8F83\u7684\uFF0C\u7531\u4E8E <code>&#39;Z&#39; &lt; &#39;a&#39;</code>\uFF0C\u7ED3\u679C\uFF0C\u5927\u5199\u5B57\u6BCD Z \u4F1A\u6392\u5728\u5C0F\u5199\u5B57\u6BCD a \u7684\u524D\u9762\u3002</p><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u63D0\u51FA\u6392\u5E8F\u5E94\u8BE5\u5FFD\u7565\u5927\u5C0F\u5199\uFF0C\u6309\u7167\u5B57\u6BCD\u5E8F\u6392\u5E8F\u3002\u8981\u5B9E\u73B0\u8FD9\u4E2A\u7B97\u6CD5\uFF0C\u4E0D\u5FC5\u5BF9\u73B0\u6709\u4EE3\u7801\u5927\u52A0\u6539\u52A8\uFF0C\u53EA\u8981\u6211\u4EEC\u80FD\u7528\u4E00\u4E2A key \u51FD\u6570\u628A\u5B57\u7B26\u4E32\u6620\u5C04\u4E3A\u5FFD\u7565\u5927\u5C0F\u5199\u6392\u5E8F\u5373\u53EF\u3002\u5FFD\u7565\u5927\u5C0F\u5199\u6765\u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u5148\u628A\u5B57\u7B26\u4E32\u90FD\u53D8\u6210\u5927\u5199(\u6216\u8005\u90FD\u53D8\u6210\u5C0F\u5199)\uFF0C\u518D\u6BD4\u8F83\u3002</p><p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u7ED9 <code>sorted</code> \u4F20\u5165 key \u51FD\u6570\uFF0C\u5373\u53EF\u5B9E\u73B0\u5FFD\u7565\u5927\u5C0F\u5199\u7684\u6392\u5E8F:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Zoo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Credit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">.</span>lower<span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Credit&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Zoo&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u8FDB\u884C\u53CD\u5411\u6392\u5E8F\uFF0C\u4E0D\u5FC5\u6539\u52A8 key \u51FD\u6570\uFF0C\u53EF\u4EE5\u4F20\u5165\u7B2C\u4E09\u4E2A\u53C2\u6570 <code>reverse=True</code>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Zoo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Credit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">.</span>lower<span class="token punctuation">,</span> reverse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token string">&#39;Zoo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Credit&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u8FF0\u4F8B\u5B50\u53EF\u4EE5\u770B\u51FA\uFF0C\u9AD8\u9636\u51FD\u6570\u7684\u62BD\u8C61\u80FD\u529B\u662F\u975E\u5E38\u5F3A\u5927\u7684\uFF0C\u800C\u4E14\uFF0C\u6838\u5FC3\u4EE3\u7801\u53EF\u4EE5\u4FDD\u6301\u5F97\u975E\u5E38\u7B80\u6D01\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p><code>sorted()</code> \u4E5F\u662F\u4E00\u4E2A\u9AD8\u9636\u51FD\u6570\u3002\u7528 <code>sorted()</code> \u6392\u5E8F\u7684\u5173\u952E\u5728\u4E8E\u5B9E\u73B0\u4E00\u4E2A\u6620\u5C04\u51FD\u6570\u3002</p>`,21),o=[e];function c(l,u){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","sorted.html.vue"]]);export{r as default};
