import{_ as n,o as s,c as a,e as t}from"./app.17aa6dfd.js";const e={},p=t(`<p>\u6211\u4EEC\u5DF2\u7ECF\u77E5\u9053\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F5C\u7528\u4E8E for \u5FAA\u73AF\u7684\u6570\u636E\u7C7B\u578B\u6709\u4EE5\u4E0B\u51E0\u79CD:</p><p>\u4E00\u7C7B\u662F\u96C6\u5408\u6570\u636E\u7C7B\u578B\uFF0C\u5982 list\u3001tuple\u3001dict\u3001set\u3001str \u7B49\uFF1B</p><p>\u4E00\u7C7B\u662F generator\uFF0C\u5305\u62EC\u751F\u6210\u5668\u548C\u5E26 yield \u7684 generator function\u3002</p><p>\u8FD9\u4E9B\u53EF\u4EE5\u76F4\u63A5\u4F5C\u7528\u4E8E for \u5FAA\u73AF\u7684\u5BF9\u8C61\u7EDF\u79F0\u4E3A\u53EF\u8FED\u4EE3\u5BF9\u8C61: Iterable\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528 isinstance()\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F Iterable \u5BF9\u8C61:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterable
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> Iterable<span class="token punctuation">)</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800C\u751F\u6210\u5668\u4E0D\u4F46\u53EF\u4EE5\u4F5C\u7528\u4E8E for \u5FAA\u73AF\uFF0C\u8FD8\u53EF\u4EE5\u88AB <code>next()</code> \u51FD\u6570\u4E0D\u65AD\u8C03\u7528\u5E76\u8FD4\u56DE\u4E0B\u4E00\u4E2A\u503C\uFF0C\u76F4\u5230\u6700\u540E\u629B\u51FA <code>StopIteration</code> \u9519\u8BEF\u8868\u793A\u65E0\u6CD5\u7EE7\u7EED\u8FD4\u56DE\u4E0B\u4E00\u4E2A\u503C\u4E86\u3002</p><p>\u53EF\u4EE5\u88AB <code>next()</code> \u51FD\u6570\u8C03\u7528\u5E76\u4E0D\u65AD\u8FD4\u56DE\u4E0B\u4E00\u4E2A\u503C\u7684\u5BF9\u8C61\u79F0\u4E3A\u8FED\u4EE3\u5668: <code>Iterator</code>\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528 <code>isinstance()</code> \u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F <code>Iterator</code> \u5BF9\u8C61:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">from</span> collections<span class="token punctuation">.</span>abc <span class="token keyword">import</span> Iterator
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>
<span class="token boolean">False</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>
<span class="token boolean">False</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u751F\u6210\u5668\u90FD\u662F <code>Iterator</code> \u5BF9\u8C61\uFF0C\u4F46 list\u3001dict\u3001str \u867D\u7136\u662F <code>Iterable</code>\uFF0C\u5374\u4E0D\u662F <code>Iterator</code>\u3002</p><p>\u628A list\u3001dict\u3001str \u7B49 <code>Iterable</code> \u53D8\u6210 <code>Iterator</code> \u53EF\u4EE5\u4F7F\u7528 <code>iter()</code> \u51FD\u6570:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token builtin">iter</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span><span class="token builtin">iter</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Iterator<span class="token punctuation">)</span>
<span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u60A8\u53EF\u80FD\u4F1A\u95EE\uFF0C\u4E3A\u4EC0\u4E48 list\u3001dict\u3001str \u7B49\u6570\u636E\u7C7B\u578B\u4E0D\u662F <code>Iterator</code>?</p><p>\u8FD9\u662F\u56E0\u4E3A Python \u7684 Iterator \u5BF9\u8C61\u8868\u793A\u7684\u662F\u4E00\u4E2A\u6570\u636E\u6D41\uFF0CIterator \u5BF9\u8C61\u53EF\u4EE5\u88AB <code>next()</code> \u51FD\u6570\u8C03\u7528\u5E76\u4E0D\u65AD\u8FD4\u56DE\u4E0B\u4E00\u4E2A\u6570\u636E\uFF0C\u76F4\u5230\u6CA1\u6709\u6570\u636E\u65F6\u629B\u51FA StopIteration \u9519\u8BEF\u3002\u53EF\u4EE5\u628A\u8FD9\u4E2A\u6570\u636E\u6D41\u770B\u505A\u662F\u4E00\u4E2A\u6709\u5E8F\u5E8F\u5217\uFF0C\u4F46\u6211\u4EEC\u5374\u4E0D\u80FD\u63D0\u524D\u77E5\u9053\u5E8F\u5217\u7684\u957F\u5EA6\uFF0C\u53EA\u80FD\u4E0D\u65AD\u901A\u8FC7 next()\u51FD\u6570\u5B9E\u73B0\u6309\u9700\u8BA1\u7B97\u4E0B\u4E00\u4E2A\u6570\u636E\uFF0C\u6240\u4EE5 Iterator \u7684\u8BA1\u7B97\u662F\u60F0\u6027\u7684\uFF0C\u53EA\u6709\u5728\u9700\u8981\u8FD4\u56DE\u4E0B\u4E00\u4E2A\u6570\u636E\u65F6\u5B83\u624D\u4F1A\u8BA1\u7B97\u3002</p><p>Iterator \u751A\u81F3\u53EF\u4EE5\u8868\u793A\u4E00\u4E2A\u65E0\u9650\u5927\u7684\u6570\u636E\u6D41\uFF0C\u4F8B\u5982\u5168\u4F53\u81EA\u7136\u6570\u3002\u800C\u4F7F\u7528 list \u662F\u6C38\u8FDC\u4E0D\u53EF\u80FD\u5B58\u50A8\u5168\u4F53\u81EA\u7136\u6570\u7684\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u51E1\u662F\u53EF\u4F5C\u7528\u4E8E for \u5FAA\u73AF\u7684\u5BF9\u8C61\u90FD\u662F <code>Iterable</code> \u7C7B\u578B\uFF1B</p><p>\u51E1\u662F\u53EF\u4F5C\u7528\u4E8E <code>next()</code> \u51FD\u6570\u7684\u5BF9\u8C61\u90FD\u662F <code>Iterator</code> \u7C7B\u578B\uFF0C\u5B83\u4EEC\u8868\u793A\u4E00\u4E2A\u60F0\u6027\u8BA1\u7B97\u7684\u5E8F\u5217\uFF1B</p><p>\u96C6\u5408\u6570\u636E\u7C7B\u578B\u5982 list\u3001dict\u3001str \u7B49\u662F <code>Iterable</code> \u4F46\u4E0D\u662F <code>Iterator</code>\uFF0C\u4E0D\u8FC7\u53EF\u4EE5\u901A\u8FC7 <code>iter()</code> \u51FD\u6570\u83B7\u5F97\u4E00\u4E2A <code>Iterator</code> \u5BF9\u8C61\u3002</p><p>Python \u7684 for \u5FAA\u73AF\u672C\u8D28\u4E0A\u5C31\u662F\u901A\u8FC7\u4E0D\u65AD\u8C03\u7528 <code>next()</code> \u51FD\u6570\u5B9E\u73B0\u7684\uFF0C\u4F8B\u5982:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u9645\u4E0A\u5B8C\u5168\u7B49\u4EF7\u4E8E:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u9996\u5148\u83B7\u5F97Iterator\u5BF9\u8C61</span>

it <span class="token operator">=</span> <span class="token builtin">iter</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># \u5FAA\u73AF</span>

<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token comment"># \u83B7\u5F97\u4E0B\u4E00\u4E2A\u503C:</span>
        x <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span>
    <span class="token keyword">except</span> StopIteration<span class="token punctuation">:</span>
        <span class="token comment"># \u9047\u5230StopIteration\u5C31\u9000\u51FA\u5FAA\u73AF</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[p];function c(l,i){return s(),a("div",null,o)}var u=n(e,[["render",c],["__file","iterator.html.vue"]]);export{u as default};
