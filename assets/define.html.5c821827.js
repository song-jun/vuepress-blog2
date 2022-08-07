import{_ as t,o as p,c as o,a as s,b as c,w as i,e as a,d as n,r as l}from"./app.e3c83e88.js";const d={},r=a(`<p>\u5728 Python \u4E2D\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u8981\u4F7F\u7528 <code>def</code> \u8BED\u53E5\uFF0C\u4F9D\u6B21\u5199\u51FA\u51FD\u6570\u540D\u3001\u62EC\u53F7\u3001\u62EC\u53F7\u4E2D\u7684\u53C2\u6570\u548C\u5192\u53F7 <code>:</code>\uFF0C\u7136\u540E\uFF0C\u5728\u7F29\u8FDB\u5757\u4E2D\u7F16\u5199\u51FD\u6570\u4F53\uFF0C\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7528 <code>return</code> \u8BED\u53E5\u8FD4\u56DE\u3002</p><p>\u6211\u4EEC\u4EE5\u81EA\u5B9A\u4E49\u4E00\u4E2A\u6C42\u7EDD\u5BF9\u503C\u7684 <code>my_abs</code> \u51FD\u6570\u4E3A\u4F8B:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token keyword">def</span> <span class="token function">my_abs</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> x <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> x
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token operator">-</span>x

<span class="token keyword">print</span><span class="token punctuation">(</span>my_abs<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF7\u81EA\u884C\u6D4B\u8BD5\u5E76\u8C03\u7528 <code>my_abs</code> \u770B\u770B\u8FD4\u56DE\u7ED3\u679C\u662F\u5426\u6B63\u786E\u3002</p><p>\u8BF7\u6CE8\u610F\uFF0C\u51FD\u6570\u4F53\u5185\u90E8\u7684\u8BED\u53E5\u5728\u6267\u884C\u65F6\uFF0C\u4E00\u65E6\u6267\u884C\u5230 <code>return</code> \u65F6\uFF0C\u51FD\u6570\u5C31\u6267\u884C\u5B8C\u6BD5\uFF0C\u5E76\u5C06\u7ED3\u679C\u8FD4\u56DE\u3002\u56E0\u6B64\uFF0C\u51FD\u6570\u5185\u90E8\u901A\u8FC7\u6761\u4EF6\u5224\u65AD\u548C\u5FAA\u73AF\u53EF\u4EE5\u5B9E\u73B0\u975E\u5E38\u590D\u6742\u7684\u903B\u8F91\u3002</p><p>\u5982\u679C\u6CA1\u6709 <code>return</code> \u8BED\u53E5\uFF0C\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u540E\u4E5F\u4F1A\u8FD4\u56DE\u7ED3\u679C\uFF0C\u53EA\u662F\u7ED3\u679C\u4E3A <code>None</code>\u3002<code>return None</code> \u53EF\u4EE5\u7B80\u5199\u4E3A <code>return</code>\u3002</p><p>\u5728 Python \u4EA4\u4E92\u73AF\u5883\u4E2D\u5B9A\u4E49\u51FD\u6570\u65F6\uFF0C\u6CE8\u610F Python \u4F1A\u51FA\u73B0 <code>...</code> \u7684\u63D0\u793A\u3002\u51FD\u6570\u5B9A\u4E49\u7ED3\u675F\u540E\u9700\u8981\u6309\u4E24\u6B21\u56DE\u8F66\u91CD\u65B0\u56DE\u5230<code>&gt;&gt;&gt;</code> \u63D0\u793A\u7B26\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502Command Prompt - python                           - \u25A1 x \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502&gt;&gt;&gt; def my_abs(x):                                      \u2502
\u2502...     if x &gt;= 0:                                      \u2502
\u2502...         return x                                    \u2502
\u2502...     else:                                           \u2502
\u2502...         return -x                                   \u2502
\u2502...                                                     \u2502
\u2502&gt;&gt;&gt; my_abs(-9)                                          \u2502
\u25029                                                       \u2502
\u2502&gt;&gt;&gt; _                                                   \u2502
\u2502                                                        \u2502
\u2502                                                        \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60A8\u5DF2\u7ECF\u628A <code>my_abs()</code> \u7684\u51FD\u6570\u5B9A\u4E49\u4FDD\u5B58\u4E3A <code>abstest.py</code> \u6587\u4EF6\u4E86\uFF0C\u90A3\u4E48\uFF0C\u53EF\u4EE5\u5728\u8BE5\u6587\u4EF6\u7684\u5F53\u524D\u76EE\u5F55\u4E0B\u542F\u52A8 Python \u89E3\u91CA\u5668\uFF0C\u7528 <code>from abstest import my_abs</code> \u6765\u5BFC\u5165 <code>my_abs()</code> \u51FD\u6570\uFF0C\u6CE8\u610F <code>abstest</code> \u662F\u6587\u4EF6\u540D(\u4E0D\u542B .py \u6269\u5C55\u540D):</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502Command Prompt - python                           - \u25A1 x \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502&gt;&gt;&gt; from abstest import my_abs                          \u2502
\u2502&gt;&gt;&gt; my_abs(-9)                                          \u2502
\u25029                                                       \u2502
\u2502&gt;&gt;&gt; _                                                   \u2502
\u2502                                                        \u2502
\u2502                                                        \u2502
\u2502                                                        \u2502
\u2502                                                        \u2502
\u2502                                                        \u2502
\u2502                                                        \u2502
\u2502                                                        \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),u=s("code",null,"import",-1),k=n(" \u7684\u7528\u6CD5\u5728\u540E\u7EED "),v=n("\u6A21\u5757"),m=n(" \u4E00\u8282\u4E2D\u4F1A\u8BE6\u7EC6\u4ECB\u7ECD\u3002"),b=a(`<h2 id="\u7A7A\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u51FD\u6570" aria-hidden="true">#</a> \u7A7A\u51FD\u6570</h2><p>\u5982\u679C\u60F3\u5B9A\u4E49\u4E00\u4E2A\u4EC0\u4E48\u4E8B\u4E5F\u4E0D\u505A\u7684\u7A7A\u51FD\u6570\uFF0C\u53EF\u4EE5\u7528 pass \u8BED\u53E5:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">nop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>pass \u8BED\u53E5\u4EC0\u4E48\u90FD\u4E0D\u505A\uFF0C\u90A3\u6709\u4EC0\u4E48\u7528? \u5B9E\u9645\u4E0A pass \u53EF\u4EE5\u7528\u6765\u4F5C\u4E3A\u5360\u4F4D\u7B26\uFF0C\u6BD4\u5982\u73B0\u5728\u8FD8\u6CA1\u60F3\u597D\u600E\u4E48\u5199\u51FD\u6570\u7684\u4EE3\u7801\uFF0C\u5C31\u53EF\u4EE5\u5148\u653E\u4E00\u4E2A pass\uFF0C\u8BA9\u4EE3\u7801\u80FD\u8FD0\u884C\u8D77\u6765\u3002</p><p>pass \u8FD8\u53EF\u4EE5\u7528\u5728\u5176\u4ED6\u8BED\u53E5\u91CC\uFF0C\u6BD4\u5982:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F3A\u5C11\u4E86 pass\uFF0C\u4EE3\u7801\u8FD0\u884C\u5C31\u4F1A\u6709\u8BED\u6CD5\u9519\u8BEF\u3002</p><h2 id="\u53C2\u6570\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u68C0\u67E5" aria-hidden="true">#</a> \u53C2\u6570\u68C0\u67E5</h2><p>\u8C03\u7528\u51FD\u6570\u65F6\uFF0C\u5982\u679C\u53C2\u6570\u4E2A\u6570\u4E0D\u5BF9\uFF0CPython \u89E3\u91CA\u5668\u4F1A\u81EA\u52A8\u68C0\u67E5\u51FA\u6765\uFF0C\u5E76\u629B\u51FA <code>TypeError</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_abs<span class="token punctuation">(</span><span class="token number">1</span>, <span class="token number">2</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
TypeError: my_abs<span class="token punctuation">(</span><span class="token punctuation">)</span> takes <span class="token number">1</span> positional argument but <span class="token number">2</span> were given
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u5982\u679C\u53C2\u6570\u7C7B\u578B\u4E0D\u5BF9\uFF0CPython \u89E3\u91CA\u5668\u5C31\u65E0\u6CD5\u5E2E\u6211\u4EEC\u68C0\u67E5\u3002\u8BD5\u8BD5 <code>my_abs</code> \u548C\u5185\u7F6E\u51FD\u6570 abs \u7684\u5DEE\u522B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_abs<span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">2</span>, <span class="token keyword">in</span> my_abs
TypeError: unorderable types: str<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> int<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> abs<span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
TypeError: bad operand <span class="token builtin class-name">type</span> <span class="token keyword">for</span> abs<span class="token punctuation">(</span><span class="token punctuation">)</span>: <span class="token string">&#39;str&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4F20\u5165\u4E86\u4E0D\u6070\u5F53\u7684\u53C2\u6570\u65F6\uFF0C\u5185\u7F6E\u51FD\u6570 <code>abs</code> \u4F1A\u68C0\u67E5\u51FA\u53C2\u6570\u9519\u8BEF\uFF0C\u800C\u6211\u4EEC\u5B9A\u4E49\u7684 <code>my_abs</code> \u6CA1\u6709\u53C2\u6570\u68C0\u67E5\uFF0C\u4F1A\u5BFC\u81F4 <code>if</code> \u8BED\u53E5\u51FA\u9519\uFF0C\u51FA\u9519\u4FE1\u606F\u548C <code>abs</code> \u4E0D\u4E00\u6837\u3002\u6240\u4EE5\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5B9A\u4E49\u4E0D\u591F\u5B8C\u5584\u3002</p><p>\u8BA9\u6211\u4EEC\u4FEE\u6539\u4E00\u4E0B <code>my_abs</code> \u7684\u5B9A\u4E49\uFF0C\u5BF9\u53C2\u6570\u7C7B\u578B\u505A\u68C0\u67E5\uFF0C\u53EA\u5141\u8BB8\u6574\u6570\u548C\u6D6E\u70B9\u6570\u7C7B\u578B\u7684\u53C2\u6570\u3002\u6570\u636E\u7C7B\u578B\u68C0\u67E5\u53EF\u4EE5\u7528\u5185\u7F6E\u51FD\u6570 <code>isinstance()</code> \u5B9E\u73B0:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">my_abs</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> TypeError<span class="token punctuation">(</span><span class="token string">&#39;bad operand type&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> x <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> x
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token operator">-</span>x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u4E86\u53C2\u6570\u68C0\u67E5\u540E\uFF0C\u5982\u679C\u4F20\u5165\u9519\u8BEF\u7684\u53C2\u6570\u7C7B\u578B\uFF0C\u51FD\u6570\u5C31\u53EF\u4EE5\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> my_abs<span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">3</span>, <span class="token keyword">in</span> my_abs
TypeError: bad operand <span class="token builtin class-name">type</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9519\u8BEF\u548C\u5F02\u5E38\u5904\u7406\u5C06\u5728\u540E\u7EED\u8BB2\u5230\u3002</p><h2 id="\u8FD4\u56DE\u591A\u4E2A\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u591A\u4E2A\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u591A\u4E2A\u503C</h2><p>\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u591A\u4E2A\u503C\u5417? \u7B54\u6848\u662F\u80AF\u5B9A\u7684\u3002</p><p>\u6BD4\u5982\u5728\u6E38\u620F\u4E2D\u7ECF\u5E38\u9700\u8981\u4ECE\u4E00\u4E2A\u70B9\u79FB\u52A8\u5230\u53E6\u4E00\u4E2A\u70B9\uFF0C\u7ED9\u51FA\u5750\u6807\u3001\u4F4D\u79FB\u548C\u89D2\u5EA6\uFF0C\u5C31\u53EF\u4EE5\u8BA1\u7B97\u51FA\u65B0\u7684\u5750\u6807:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> math

<span class="token keyword">def</span> <span class="token function">move</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> step<span class="token punctuation">,</span> angle<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    nx <span class="token operator">=</span> x <span class="token operator">+</span> step <span class="token operator">*</span>math<span class="token punctuation">.</span>cos<span class="token punctuation">(</span>angle<span class="token punctuation">)</span>
ny <span class="token operator">=</span> y <span class="token operator">-</span> step<span class="token operator">*</span> math<span class="token punctuation">.</span>sin<span class="token punctuation">(</span>angle<span class="token punctuation">)</span>
    <span class="token keyword">return</span> nx<span class="token punctuation">,</span> ny
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>import math</code> \u8BED\u53E5\u8868\u793A\u5BFC\u5165 <code>math</code> \u5305\uFF0C\u5E76\u5141\u8BB8\u540E\u7EED\u4EE3\u7801\u5F15\u7528 <code>math</code> \u5305\u91CC\u7684 <code>sin</code>\u3001<code>cos</code> \u7B49\u51FD\u6570\u3002</p><p>\u7136\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u540C\u65F6\u83B7\u5F97\u8FD4\u56DE\u503C:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> x<span class="token punctuation">,</span> y <span class="token operator">=</span> move<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> math<span class="token punctuation">.</span>pi <span class="token operator">/</span> <span class="token number">6</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token number">151.96152422706632</span> <span class="token number">70.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u5176\u5B9E\u8FD9\u53EA\u662F\u4E00\u79CD\u5047\u8C61\uFF0CPython \u51FD\u6570\u8FD4\u56DE\u7684\u4ECD\u7136\u662F\u5355\u4E00\u503C:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> r <span class="token operator">=</span> move<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> math<span class="token punctuation">.</span>pi <span class="token operator">/</span> <span class="token number">6</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">151.96152422706632</span><span class="token punctuation">,</span> <span class="token number">70.0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u539F\u6765\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A tuple! \u4F46\u662F\uFF0C\u5728\u8BED\u6CD5\u4E0A\uFF0C\u8FD4\u56DE\u4E00\u4E2A tuple \u53EF\u4EE5\u7701\u7565\u62EC\u53F7\uFF0C\u800C\u591A\u4E2A\u53D8\u91CF\u53EF\u4EE5\u540C\u65F6\u63A5\u6536\u4E00\u4E2A tuple\uFF0C\u6309\u4F4D\u7F6E\u8D4B\u7ED9\u5BF9\u5E94\u7684\u503C\uFF0C\u6240\u4EE5\uFF0CPython \u7684\u51FD\u6570\u8FD4\u56DE\u591A\u503C\u5176\u5B9E\u5C31\u662F\u8FD4\u56DE\u4E00\u4E2A tuple\uFF0C\u4F46\u5199\u8D77\u6765\u66F4\u65B9\u4FBF\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u5B9A\u4E49\u51FD\u6570\u65F6\uFF0C\u9700\u8981\u786E\u5B9A\u51FD\u6570\u540D\u548C\u53C2\u6570\u4E2A\u6570\uFF1B</p><p>\u5982\u679C\u6709\u5FC5\u8981\uFF0C\u53EF\u4EE5\u5148\u5BF9\u53C2\u6570\u7684\u6570\u636E\u7C7B\u578B\u505A\u68C0\u67E5\uFF1B</p><p>\u51FD\u6570\u4F53\u5185\u90E8\u53EF\u4EE5\u7528 <code>return</code> \u968F\u65F6\u8FD4\u56DE\u51FD\u6570\u7ED3\u679C\uFF1B</p><p>\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u4E5F\u6CA1\u6709 <code>return</code> \u8BED\u53E5\u65F6\uFF0C\u81EA\u52A8 <code>return None</code>\u3002</p><p>\u51FD\u6570\u53EF\u4EE5\u540C\u65F6\u8FD4\u56DE\u591A\u4E2A\u503C\uFF0C\u4F46\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A tuple\u3002</p>`,34);function g(y,h){const e=l("RouterLink");return p(),o("div",null,[r,s("p",null,[u,k,c(e,{to:"/code/language/python/module/"},{default:i(()=>[v]),_:1}),m]),b])}var x=t(d,[["render",g],["__file","define.html.vue"]]);export{x as default};
