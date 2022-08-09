import{_ as a,o as p,c as e,e as s,a as n}from"./app.238d4ac4.js";const t={},o=s(`<p><code>generator</code> (\u751F\u6210\u5668)\u662F ES6 \u6807\u51C6\u5F15\u5165\u7684\u65B0\u7684\u6570\u636E\u7C7B\u578B\u3002\u4E00\u4E2A <code>generator</code> \u770B\u4E0A\u53BB\u50CF\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F46\u53EF\u4EE5\u8FD4\u56DE\u591A\u6B21\u3002</p><p>ES6 \u5B9A\u4E49 <code>generator</code> \u6807\u51C6\u7684\u54E5\u4EEC\u501F\u9274\u4E86 Python \u7684 generator \u7684\u6982\u5FF5\u548C\u8BED\u6CD5\uFF0C\u5982\u679C\u60A8\u5BF9 Python \u7684 generator \u5F88\u719F\u6089\uFF0C\u90A3\u4E48 ES6 \u7684 generator \u5C31\u662F\u5C0F\u83DC\u4E00\u789F\u4E86\u3002</p><p>\u6211\u4EEC\u5148\u590D\u4E60\u51FD\u6570\u7684\u6982\u5FF5\u3002\u4E00\u4E2A\u51FD\u6570\u662F\u4E00\u6BB5\u5B8C\u6574\u7684\u4EE3\u7801\uFF0C\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\u5C31\u662F\u4F20\u5165\u53C2\u6570\uFF0C\u7136\u540E\u8FD4\u56DE\u7ED3\u679C:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> x<span class="token punctuation">;</span>

<span class="token keyword">const</span> r <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8C03\u7528foo\u51FD\u6570</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FD\u6570\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u6CA1\u6709\u9047\u5230 <code>return</code> \u8BED\u53E5(\u51FD\u6570\u672B\u5C3E\u5982\u679C\u6CA1\u6709 <code>return</code>\uFF0C\u5C31\u662F\u9690\u542B\u7684 <code>return undefined;</code>)\uFF0C\u63A7\u5236\u6743\u65E0\u6CD5\u4EA4\u56DE\u88AB\u8C03\u7528\u7684\u4EE3\u7801\u3002</p><p><code>generator</code> \u8DDF\u51FD\u6570\u5F88\u50CF\uFF0C\u5B9A\u4E49\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>generator</code> \u548C\u51FD\u6570\u4E0D\u540C\u7684\u662F\uFF0C<code>generator</code> \u7531 <code>function*</code> \u5B9A\u4E49(\u6CE8\u610F\u591A\u51FA\u7684 <code>*</code> \u53F7)\uFF0C\u5E76\u4E14\uFF0C\u9664\u4E86 <code>return</code> \u8BED\u53E5\uFF0C\u8FD8\u53EF\u4EE5\u7528 <code>yield</code> \u8FD4\u56DE\u591A\u6B21\u3002</p><p>\u5927\u591A\u6570\u540C\u5B66\u7ACB\u523B\u5C31\u6655\u4E86\uFF0C<code>generator</code> \u5C31\u662F\u80FD\u591F\u8FD4\u56DE\u591A\u6B21\u7684\u201C\u51FD\u6570\u201D? \u8FD4\u56DE\u591A\u6B21\u6709\u5565\u7528?</p><p>\u8FD8\u662F\u4E3E\u4E2A\u6817\u5B50\u5427\u3002</p><p>\u6211\u4EEC\u4EE5\u4E00\u4E2A\u8457\u540D\u7684\u6590\u6CE2\u90A3\u5951\u6570\u5217\u4E3A\u4F8B\uFF0C\u5B83\u7531 0\uFF0C1 \u5F00\u5934:</p>`,11),c=n("p",{class:"katex-block"},[n("span",{class:"katex-display"},[n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[n("semantics",null,[n("mrow",null,[n("mn",null,"0"),n("mspace",{width:"1em"}),n("mn",null,"1"),n("mspace",{width:"1em"}),n("mn",null,"1"),n("mspace",{width:"1em"}),n("mn",null,"2"),n("mspace",{width:"1em"}),n("mn",null,"3"),n("mspace",{width:"1em"}),n("mn",null,"5"),n("mspace",{width:"1em"}),n("mn",null,"8"),n("mspace",{width:"1em"}),n("mn",null,"13"),n("mspace",{width:"1em"}),n("mi",{mathvariant:"normal"},"."),n("mi",{mathvariant:"normal"},"."),n("mi",{mathvariant:"normal"},".")]),n("annotation",{encoding:"application/x-tex"},"0\\quad1\\quad1\\quad2\\quad3\\quad5\\quad8\\quad13\\quad... ")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"0"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"1"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"1"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"2"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"3"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"5"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"8"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"13"),n("span",{class:"mspace",style:{"margin-right":"1em"}}),n("span",{class:"mord"},"...")])])])])],-1),l=s(`<p>\u8981\u7F16\u5199\u4E00\u4E2A\u4EA7\u751F\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7684\u51FD\u6570\uFF0C\u53EF\u4EE5\u8FD9\u4E48\u5199:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6D4B\u8BD5:</span>
<span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [0, 1, 1, 2, 3]</span>
<span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u51FD\u6570\u53EA\u80FD\u8FD4\u56DE\u4E00\u6B21\uFF0C\u6240\u4EE5\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A Array\u3002\u4F46\u662F\uFF0C\u5982\u679C\u6362\u6210 generator\uFF0C\u5C31\u53EF\u4EE5\u4E00\u6B21\u8FD4\u56DE\u4E00\u4E2A\u6570\uFF0C\u4E0D\u65AD\u8FD4\u56DE\u591A\u6B21\u3002\u7528 generator \u6539\u5199\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>
    n<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76F4\u63A5\u8C03\u7528\u8BD5\u8BD5:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// fib {[[GeneratorStatus]]: &quot;suspended&quot;, [[GeneratorReceiver]]: Window}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76F4\u63A5\u8C03\u7528\u4E00\u4E2A <code>generator</code> \u548C\u8C03\u7528\u51FD\u6570\u4E0D\u4E00\u6837\uFF0C<code>fib(5)</code> \u4EC5\u4EC5\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A <code>generator</code> \u5BF9\u8C61\uFF0C\u8FD8\u6CA1\u6709\u53BB\u6267\u884C\u5B83\u3002</p><p>\u8C03\u7528 <code>generator</code> \u5BF9\u8C61\u6709\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u4E00\u662F\u4E0D\u65AD\u5730\u8C03\u7528 <code>generator</code> \u5BF9\u8C61\u7684 <code>next()</code> \u65B9\u6CD5:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 0, done: false}</span>
f<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 1, done: false}</span>
f<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 1, done: false}</span>
f<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 2, done: false}</span>
f<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: 3, done: false}</span>
f<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: undefined, done: true}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>next()</code> \u65B9\u6CD5\u4F1A\u6267\u884C <code>generator</code> \u7684\u4EE3\u7801\uFF0C\u7136\u540E\uFF0C\u6BCF\u6B21\u9047\u5230 <code>yield x;</code> \u5C31\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61 <code>{value: x, done: true/false}</code>\uFF0C\u7136\u540E\u201C\u6682\u505C\u201D\u3002\u8FD4\u56DE\u7684 <code>value</code> \u5C31\u662F <code>yield</code> \u7684\u8FD4\u56DE\u503C\uFF0C<code>done</code> \u8868\u793A\u8FD9\u4E2A <code>generator</code> \u662F\u5426\u5DF2\u7ECF\u6267\u884C\u7ED3\u675F\u4E86\u3002\u5982\u679C <code>done</code> \u4E3A <code>true</code>\uFF0C\u5219 <code>value</code> \u5C31\u662F <code>return</code> \u7684\u8FD4\u56DE\u503C\u3002</p><p>\u5F53\u6267\u884C\u5230 <code>done</code> \u4E3A <code>true</code> \u65F6\uFF0C\u8FD9\u4E2A generator \u5BF9\u8C61\u5C31\u5DF2\u7ECF\u5168\u90E8\u6267\u884C\u5B8C\u6BD5\uFF0C\u4E0D\u8981\u518D\u7EE7\u7EED\u8C03\u7528 <code>next()</code> \u4E86\u3002</p><p>\u7B2C\u4E8C\u4E2A\u65B9\u6CD5\u662F\u76F4\u63A5\u7528 <code>for ... of</code> \u5FAA\u73AF\u8FED\u4EE3 generator \u5BF9\u8C61\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u9700\u8981\u6211\u4EEC\u81EA\u5DF1\u5224\u65AD <code>done</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token parameter">max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>
    n<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> <span class="token function">fib</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4F9D\u6B21\u8F93\u51FA0, 1, 1, 2, 3, ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">generator \u548C\u666E\u901A\u51FD\u6570\u76F8\u6BD4\uFF0C\u6709\u4EC0\u4E48\u7528?</p><p>\u56E0\u4E3A generator \u53EF\u4EE5\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u591A\u6B21\u8FD4\u56DE\uFF0C\u6240\u4EE5\u5B83\u770B\u4E0A\u53BB\u5C31\u50CF\u4E00\u4E2A\u53EF\u4EE5\u8BB0\u4F4F\u6267\u884C\u72B6\u6001\u7684\u51FD\u6570\uFF0C\u5229\u7528\u8FD9\u4E00\u70B9\uFF0C\u5199\u4E00\u4E2A generator \u5C31\u53EF\u4EE5\u5B9E\u73B0\u9700\u8981\u7528\u9762\u5411\u5BF9\u8C61\u624D\u80FD\u5B9E\u73B0\u7684\u529F\u80FD\u3002\u4F8B\u5982\uFF0C\u7528\u4E00\u4E2A\u5BF9\u8C61\u6765\u4FDD\u5B58\u72B6\u6001\uFF0C\u5F97\u8FD9\u4E48\u5199:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fib <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">;</span>
    <span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b<span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> t<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>n <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> r<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528\u5BF9\u8C61\u7684\u5C5E\u6027\u6765\u4FDD\u5B58\u72B6\u6001\uFF0C\u76F8\u5F53\u7E41\u7410\u3002</p><p>Generator \u8FD8\u6709\u53E6\u4E00\u4E2A\u5DE8\u5927\u7684\u597D\u5904\uFF0C\u5C31\u662F\u628A\u5F02\u6B65\u56DE\u8C03\u4EE3\u7801\u53D8\u6210\u201C\u540C\u6B65\u201D\u4EE3\u7801\u3002\u8FD9\u4E2A\u597D\u5904\u8981\u7B49\u5230\u540E\u9762\u5B66\u4E86 Ajax \u4EE5\u540E\u624D\u80FD\u4F53\u4F1A\u5230\u3002</p><p>\u6CA1\u6709 generator \u4E4B\u524D\u7684\u9ED1\u6697\u65F6\u4EE3\uFF0C\u7528 Ajax \u65F6\u9700\u8981\u8FD9\u4E48\u5199\u4EE3\u7801:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-1&#39;</span><span class="token punctuation">,</span> data1<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">handle</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-2&#39;</span><span class="token punctuation">,</span> data2<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">handle</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-3&#39;</span><span class="token punctuation">,</span> data3<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      err<span class="token operator">?</span> <span class="token function">handle</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token function">success</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56DE\u8C03\u8D8A\u591A\uFF0C\u4EE3\u7801\u8D8A\u96BE\u770B\u3002</p><p>\u6709\u4E86 generator \u7684\u7F8E\u597D\u65F6\u4EE3\uFF0C\u7528 Ajax \u65F6\u53EF\u4EE5\u8FD9\u4E48\u5199:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  r1 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-1&#39;</span><span class="token punctuation">,</span> data1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  r2 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-2&#39;</span><span class="token punctuation">,</span> data2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  r3 <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&#39;https://url-3&#39;</span><span class="token punctuation">,</span> data3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">success</span><span class="token punctuation">(</span>r3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">handle</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u770B\u4E0A\u53BB\u662F\u540C\u6B65\u7684\u4EE3\u7801\uFF0C\u5B9E\u9645\u6267\u884C\u662F\u5F02\u6B65\u7684\u3002</p></div>`,14),i=[o,c,l];function u(r,d){return p(),e("div",null,i)}var v=a(t,[["render",u],["__file","generator.html.vue"]]);export{v as default};
