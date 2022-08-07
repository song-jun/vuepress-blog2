import{_ as n,o as s,c as a,e}from"./app.edc3ba14.js";const p={},t=e(`<p>\u901A\u8FC7\u5217\u8868\u751F\u6210\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u521B\u5EFA\u4E00\u4E2A\u5217\u8868\u3002\u4F46\u662F\uFF0C\u53D7\u5230\u5185\u5B58\u9650\u5236\uFF0C\u5217\u8868\u5BB9\u91CF\u80AF\u5B9A\u662F\u6709\u9650\u7684\u3002\u800C\u4E14\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5305\u542B 100 \u4E07\u4E2A\u5143\u7D20\u7684\u5217\u8868\uFF0C\u4E0D\u4EC5\u5360\u7528\u5F88\u5927\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u5982\u679C\u6211\u4EEC\u4EC5\u4EC5\u9700\u8981\u8BBF\u95EE\u524D\u9762\u51E0\u4E2A\u5143\u7D20\uFF0C\u90A3\u540E\u9762\u7EDD\u5927\u591A\u6570\u5143\u7D20\u5360\u7528\u7684\u7A7A\u95F4\u90FD\u767D\u767D\u6D6A\u8D39\u4E86\u3002</p><p>\u6240\u4EE5\uFF0C\u5982\u679C\u5217\u8868\u5143\u7D20\u53EF\u4EE5\u6309\u7167\u67D0\u79CD\u7B97\u6CD5\u63A8\u7B97\u51FA\u6765\uFF0C\u90A3\u6211\u4EEC\u662F\u5426\u53EF\u4EE5\u5728\u5FAA\u73AF\u7684\u8FC7\u7A0B\u4E2D\u4E0D\u65AD\u63A8\u7B97\u51FA\u540E\u7EED\u7684\u5143\u7D20\u5462? \u8FD9\u6837\u5C31\u4E0D\u5FC5\u521B\u5EFA\u5B8C\u6574\u7684 list\uFF0C\u4ECE\u800C\u8282\u7701\u5927\u91CF\u7684\u7A7A\u95F4\u3002\u5728 Python \u4E2D\uFF0C\u8FD9\u79CD\u4E00\u8FB9\u5FAA\u73AF\u4E00\u8FB9\u8BA1\u7B97\u7684\u673A\u5236\uFF0C\u79F0\u4E3A\u751F\u6210\u5668: generator\u3002</p><p>\u8981\u521B\u5EFA\u4E00\u4E2A generator\uFF0C\u6709\u5F88\u591A\u79CD\u65B9\u6CD5\u3002\u7B2C\u4E00\u79CD\u65B9\u6CD5\u5F88\u7B80\u5355\uFF0C\u53EA\u8981\u628A\u4E00\u4E2A\u5217\u8868\u751F\u6210\u5F0F\u7684[]\u6539\u6210()\uFF0C\u5C31\u521B\u5EFA\u4E86\u4E00\u4E2A generator:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L <span class="token operator">=</span> <span class="token punctuation">[</span>x <span class="token operator">*</span> x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> L
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">81</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">*</span> x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g
<span class="token operator">&lt;</span>generator <span class="token builtin">object</span> <span class="token operator">&lt;</span>genexpr<span class="token operator">&gt;</span> at <span class="token number">0x1022ef630</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA <code>L</code> \u548C <code>g</code> \u7684\u533A\u522B\u4EC5\u5728\u4E8E\u6700\u5916\u5C42\u7684 <code>[]</code> \u548C <code>()</code>\uFF0CL \u662F\u4E00\u4E2A list\uFF0C\u800C g \u662F\u4E00\u4E2A generator\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u6253\u5370\u51FA list \u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\uFF0C\u4F46\u6211\u4EEC\u600E\u4E48\u6253\u5370\u51FA generator \u7684\u6BCF\u4E00\u4E2A\u5143\u7D20\u5462?</p><p>\u5982\u679C\u8981\u4E00\u4E2A\u4E00\u4E2A\u6253\u5370\u51FA\u6765\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>next()</code> \u51FD\u6570\u83B7\u5F97 generator \u7684\u4E0B\u4E00\u4E2A\u8FD4\u56DE\u503C:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">0</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">4</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">9</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">16</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">25</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">36</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">49</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">64</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token number">81</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
StopIteration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u8BB2\u8FC7\uFF0Cgenerator \u4FDD\u5B58\u7684\u662F\u7B97\u6CD5\uFF0C\u6BCF\u6B21\u8C03\u7528 <code>next(g)</code>\uFF0C\u5C31\u8BA1\u7B97\u51FA <code>g</code> \u7684\u4E0B\u4E00\u4E2A\u5143\u7D20\u7684\u503C\uFF0C\u76F4\u5230\u8BA1\u7B97\u5230\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u6CA1\u6709\u66F4\u591A\u7684\u5143\u7D20\u65F6\uFF0C\u629B\u51FA <code>StopIteration</code> \u7684\u9519\u8BEF\u3002</p><p>\u5F53\u7136\uFF0C\u4E0A\u9762\u8FD9\u79CD\u4E0D\u65AD\u8C03\u7528 <code>next(g)</code> \u5B9E\u5728\u662F\u592A\u53D8\u6001\u4E86\uFF0C\u6B63\u786E\u7684\u65B9\u6CD5\u662F\u4F7F\u7528 for \u5FAA\u73AF\uFF0C\u56E0\u4E3A generator \u4E5F\u662F\u53EF\u8FED\u4EE3\u5BF9\u8C61:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">*</span> x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> n <span class="token keyword">in</span> g<span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token number">0</span>
<span class="token number">1</span>
<span class="token number">4</span>
<span class="token number">9</span>
<span class="token number">16</span>
<span class="token number">25</span>
<span class="token number">36</span>
<span class="token number">49</span>
<span class="token number">64</span>
<span class="token number">81</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A generator \u540E\uFF0C\u57FA\u672C\u4E0A\u6C38\u8FDC\u4E0D\u4F1A\u8C03\u7528 <code>next()</code>\uFF0C\u800C\u662F\u901A\u8FC7 for \u5FAA\u73AF\u6765\u8FED\u4EE3\u5B83\uFF0C\u5E76\u4E14\u4E0D\u9700\u8981\u5173\u5FC3 <code>StopIteration</code> \u7684\u9519\u8BEF\u3002</p><p>Generator \u975E\u5E38\u5F3A\u5927\u3002\u5982\u679C\u63A8\u7B97\u7684\u7B97\u6CD5\u6BD4\u8F83\u590D\u6742\uFF0C\u7528\u7C7B\u4F3C\u5217\u8868\u751F\u6210\u5F0F\u7684 for \u5FAA\u73AF\u65E0\u6CD5\u5B9E\u73B0\u7684\u65F6\u5019\uFF0C\u8FD8\u53EF\u4EE5\u7528\u51FD\u6570\u6765\u5B9E\u73B0\u3002</p><p>\u6BD4\u5982\uFF0C\u8457\u540D\u7684\u6590\u6CE2\u62C9\u5951\u6570\u5217(Fibonacci)\uFF0C\u9664\u7B2C\u4E00\u4E2A\u548C\u7B2C\u4E8C\u4E2A\u6570\u5916\uFF0C\u4EFB\u610F\u4E00\u4E2A\u6570\u90FD\u53EF\u7531\u524D\u4E24\u4E2A\u6570\u76F8\u52A0\u5F97\u5230:</p><p>1, 1, 2, 3, 5, 8, 13, 21, 34, ...</p><p>\u6590\u6CE2\u62C9\u5951\u6570\u5217\u7528\u5217\u8868\u751F\u6210\u5F0F\u5199\u4E0D\u51FA\u6765\uFF0C\u4F46\u662F\uFF0C\u7528\u51FD\u6570\u628A\u5B83\u6253\u5370\u51FA\u6765\u5374\u5F88\u5BB9\u6613:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    n<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
    <span class="token keyword">while</span> n <span class="token operator">&lt;</span> <span class="token builtin">max</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
        a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b
        n <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">return</span> <span class="token string">&#39;done&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u8D4B\u503C\u8BED\u53E5:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76F8\u5F53\u4E8E:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>t <span class="token operator">=</span> <span class="token punctuation">(</span>b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token comment"># t\u662F\u4E00\u4E2Atuple</span>
a <span class="token operator">=</span> t<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
b <span class="token operator">=</span> t<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u4E0D\u5FC5\u663E\u5F0F\u5199\u51FA\u4E34\u65F6\u53D8\u91CF <code>t</code> \u5C31\u53EF\u4EE5\u8D4B\u503C\u3002</p><p>\u4E0A\u9762\u7684\u51FD\u6570\u53EF\u4EE5\u8F93\u51FA\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684\u524D N \u4E2A\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> fib<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token number">1</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">5</span>
<span class="token number">8</span>
<span class="token string">&#39;done&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ED4\u7EC6\u89C2\u5BDF\uFF0C\u53EF\u4EE5\u770B\u51FA\uFF0C<code>fib</code> \u51FD\u6570\u5B9E\u9645\u4E0A\u662F\u5B9A\u4E49\u4E86\u6590\u6CE2\u62C9\u5951\u6570\u5217\u7684\u63A8\u7B97\u89C4\u5219\uFF0C\u53EF\u4EE5\u4ECE\u7B2C\u4E00\u4E2A\u5143\u7D20\u5F00\u59CB\uFF0C\u63A8\u7B97\u51FA\u540E\u7EED\u4EFB\u610F\u7684\u5143\u7D20\uFF0C\u8FD9\u79CD\u903B\u8F91\u5176\u5B9E\u975E\u5E38\u7C7B\u4F3C generator\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0A\u9762\u7684\u51FD\u6570\u548C generator \u4EC5\u4E00\u6B65\u4E4B\u9065\u3002\u8981\u628A fib \u51FD\u6570\u53D8\u6210 generator\uFF0C\u53EA\u9700\u8981\u628A <code>print(b)</code> \u6539\u4E3A <code>yield b</code> \u5C31\u53EF\u4EE5\u4E86:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    n<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span>
    <span class="token keyword">while</span> n <span class="token operator">&lt;</span> <span class="token builtin">max</span><span class="token punctuation">:</span>
        <span class="token keyword">yield</span> b
        a<span class="token punctuation">,</span> b <span class="token operator">=</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b
        n <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">return</span> <span class="token string">&#39;done&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C31\u662F\u5B9A\u4E49 generator \u7684\u53E6\u4E00\u79CD\u65B9\u6CD5\u3002\u5982\u679C\u4E00\u4E2A\u51FD\u6570\u5B9A\u4E49\u4E2D\u5305\u542B <code>yield</code> \u5173\u952E\u5B57\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u51FD\u6570\u5C31\u4E0D\u518D\u662F\u4E00\u4E2A\u666E\u901A\u51FD\u6570\uFF0C\u800C\u662F\u4E00\u4E2A generator:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f <span class="token operator">=</span> fib<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f
<span class="token operator">&lt;</span>generator <span class="token builtin">object</span> fib at <span class="token number">0x104feaaa0</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\uFF0C\u6700\u96BE\u7406\u89E3\u7684\u5C31\u662F generator \u548C\u51FD\u6570\u7684\u6267\u884C\u6D41\u7A0B\u4E0D\u4E00\u6837\u3002\u51FD\u6570\u662F\u987A\u5E8F\u6267\u884C\uFF0C\u9047\u5230 <code>return</code> \u8BED\u53E5\u6216\u8005\u6700\u540E\u4E00\u884C\u51FD\u6570\u8BED\u53E5\u5C31\u8FD4\u56DE\u3002\u800C\u53D8\u6210 generator \u7684\u51FD\u6570\uFF0C\u5728\u6BCF\u6B21\u8C03\u7528 <code>next()</code> \u7684\u65F6\u5019\u6267\u884C\uFF0C\u9047\u5230 <code>yield</code> \u8BED\u53E5\u8FD4\u56DE\uFF0C\u518D\u6B21\u6267\u884C\u65F6\u4ECE\u4E0A\u6B21\u8FD4\u56DE\u7684 <code>yield</code> \u8BED\u53E5\u5904\u7EE7\u7EED\u6267\u884C\u3002</p><p>\u4E3E\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u5B9A\u4E49\u4E00\u4E2A generator\uFF0C\u4F9D\u6B21\u8FD4\u56DE\u6570\u5B57 1\uFF0C3\uFF0C5:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">odd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;step 1&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;step 2&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;step 3&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u7528\u8BE5 generator \u65F6\uFF0C\u9996\u5148\u8981\u751F\u6210\u4E00\u4E2A generator \u5BF9\u8C61\uFF0C\u7136\u540E\u7528 <code>next()</code> \u51FD\u6570\u4E0D\u65AD\u83B7\u5F97\u4E0B\u4E00\u4E2A\u8FD4\u56DE\u503C:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> o <span class="token operator">=</span> odd<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
step <span class="token number">1</span>
<span class="token number">1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
step <span class="token number">2</span>
<span class="token number">3</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
step <span class="token number">3</span>
<span class="token number">5</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">next</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
StopIteration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>odd</code> \u4E0D\u662F\u666E\u901A\u51FD\u6570\uFF0C\u800C\u662F generator\uFF0C\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u9047\u5230 <code>yield</code> \u5C31\u4E2D\u65AD\uFF0C\u4E0B\u6B21\u53C8\u7EE7\u7EED\u6267\u884C\u3002\u6267\u884C 3 \u6B21 <code>yield</code> \u540E\uFF0C\u5DF2\u7ECF\u6CA1\u6709 <code>yield</code> \u53EF\u4EE5\u6267\u884C\u4E86\uFF0C\u6240\u4EE5\uFF0C\u7B2C 4 \u6B21\u8C03\u7528 <code>next(o)</code> \u5C31\u62A5\u9519\u3002</p><p>\u56DE\u5230 fib \u7684\u4F8B\u5B50\uFF0C\u6211\u4EEC\u5728\u5FAA\u73AF\u8FC7\u7A0B\u4E2D\u4E0D\u65AD\u8C03\u7528 <code>yield</code>\uFF0C\u5C31\u4F1A\u4E0D\u65AD\u4E2D\u65AD\u3002\u5F53\u7136\u8981\u7ED9\u5FAA\u73AF\u8BBE\u7F6E\u4E00\u4E2A\u6761\u4EF6\u6765\u9000\u51FA\u5FAA\u73AF\uFF0C\u4E0D\u7136\u5C31\u4F1A\u4EA7\u751F\u4E00\u4E2A\u65E0\u9650\u6570\u5217\u51FA\u6765\u3002</p><p>\u540C\u6837\u7684\uFF0C\u628A\u51FD\u6570\u6539\u6210 generator \u540E\uFF0C\u6211\u4EEC\u57FA\u672C\u4E0A\u4ECE\u6765\u4E0D\u4F1A\u7528 <code>next()</code> \u6765\u83B7\u53D6\u4E0B\u4E00\u4E2A\u8FD4\u56DE\u503C\uFF0C\u800C\u662F\u76F4\u63A5\u4F7F\u7528 for \u5FAA\u73AF\u6765\u8FED\u4EE3:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">for</span> n <span class="token keyword">in</span> fib<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token number">1</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">5</span>
<span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u7528 for \u5FAA\u73AF\u8C03\u7528 generator \u65F6\uFF0C\u53D1\u73B0\u62FF\u4E0D\u5230 generator \u7684 <code>return</code> \u8BED\u53E5\u7684\u8FD4\u56DE\u503C\u3002\u5982\u679C\u60F3\u8981\u62FF\u5230\u8FD4\u56DE\u503C\uFF0C\u5FC5\u987B\u6355\u83B7 <code>StopIteration</code> \u9519\u8BEF\uFF0C\u8FD4\u56DE\u503C\u5305\u542B\u5728 <code>StopIteration</code> \u7684 value \u4E2D:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g <span class="token operator">=</span> fib<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">try</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         x <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;g:&#39;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">except</span> StopIteration <span class="token keyword">as</span> e<span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Generator return value:&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>         <span class="token keyword">break</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
g<span class="token punctuation">:</span> <span class="token number">1</span>
g<span class="token punctuation">:</span> <span class="token number">1</span>
g<span class="token punctuation">:</span> <span class="token number">2</span>
g<span class="token punctuation">:</span> <span class="token number">3</span>
g<span class="token punctuation">:</span> <span class="token number">5</span>
g<span class="token punctuation">:</span> <span class="token number">8</span>
Generator <span class="token keyword">return</span> value<span class="token punctuation">:</span> done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u4E8E\u5982\u4F55\u6355\u83B7\u9519\u8BEF\uFF0C\u540E\u9762\u7684\u9519\u8BEF\u5904\u7406\u8FD8\u4F1A\u8BE6\u7EC6\u8BB2\u89E3\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>Generator \u662F\u975E\u5E38\u5F3A\u5927\u7684\u5DE5\u5177\uFF0C\u5728 Python \u4E2D\uFF0C\u53EF\u4EE5\u7B80\u5355\u5730\u628A\u5217\u8868\u751F\u6210\u5F0F\u6539\u6210 generator\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u51FD\u6570\u5B9E\u73B0\u590D\u6742\u903B\u8F91\u7684 generator\u3002</p><p>\u8981\u7406\u89E3 generator \u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u5B83\u662F\u5728 for \u5FAA\u73AF\u7684\u8FC7\u7A0B\u4E2D\u4E0D\u65AD\u8BA1\u7B97\u51FA\u4E0B\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E76\u5728\u9002\u5F53\u7684\u6761\u4EF6\u7ED3\u675F for \u5FAA\u73AF\u3002\u5BF9\u4E8E\u51FD\u6570\u6539\u6210\u7684 generator \u6765\u8BF4\uFF0C\u9047\u5230 <code>return</code> \u8BED\u53E5\u6216\u8005\u6267\u884C\u5230\u51FD\u6570\u4F53\u6700\u540E\u4E00\u884C\u8BED\u53E5\uFF0C\u5C31\u662F\u7ED3\u675F generator \u7684\u6307\u4EE4\uFF0Cfor \u5FAA\u73AF\u968F\u4E4B\u7ED3\u675F\u3002</p><p>\u8BF7\u6CE8\u610F\u533A\u5206\u666E\u901A\u51FD\u6570\u548C generator \u51FD\u6570\uFF0C\u666E\u901A\u51FD\u6570\u8C03\u7528\u76F4\u63A5\u8FD4\u56DE\u7ED3\u679C:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> r <span class="token operator">=</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> r
<span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Generator \u51FD\u6570\u7684\u201C\u8C03\u7528\u201D\u5B9E\u9645\u8FD4\u56DE\u4E00\u4E2A generator \u5BF9\u8C61:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g <span class="token operator">=</span> fib<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> g
<span class="token operator">&lt;</span>generator <span class="token builtin">object</span> fib at <span class="token number">0x1022ef948</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48),o=[t];function c(l,i){return s(),a("div",null,o)}var u=n(p,[["render",c],["__file","generator.html.vue"]]);export{u as default};
