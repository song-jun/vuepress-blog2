import{_ as n,o as s,c as a,e}from"./app.e3c83e88.js";const p={},o=e(`<p>Python \u672C\u8EAB\u5C31\u5185\u7F6E\u4E86\u5F88\u591A\u975E\u5E38\u6709\u7528\u7684\u6A21\u5757\uFF0C\u53EA\u8981\u5B89\u88C5\u5B8C\u6BD5\uFF0C\u8FD9\u4E9B\u6A21\u5757\u5C31\u53EF\u4EE5\u7ACB\u523B\u4F7F\u7528\u3002</p><p>\u6211\u4EEC\u4EE5\u5185\u5EFA\u7684 sys \u6A21\u5757\u4E3A\u4F8B\uFF0C\u7F16\u5199\u4E00\u4E2A hello \u7684\u6A21\u5757:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token string">&#39; a test module &#39;</span>

__author__ <span class="token operator">=</span> <span class="token string">&#39;Mr.Song&#39;</span>

<span class="token keyword">import</span> sys

<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    args <span class="token operator">=</span> sys<span class="token punctuation">.</span>argv
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world!&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> <span class="token builtin">len</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, %s!&#39;</span> <span class="token operator">%</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Too many arguments!&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    test<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C 1 \u884C\u548C\u7B2C 2 \u884C\u662F\u6807\u51C6\u6CE8\u91CA\uFF0C\u7B2C 1 \u884C\u6CE8\u91CA\u53EF\u4EE5\u8BA9\u8FD9\u4E2A <code>hello.py</code> \u6587\u4EF6\u76F4\u63A5\u5728 <code>Unix/Linux/Mac</code> \u4E0A\u8FD0\u884C\uFF0C\u7B2C 2 \u884C\u6CE8\u91CA\u8868\u793A <code>.py</code> \u6587\u4EF6\u672C\u8EAB\u4F7F\u7528\u6807\u51C6 UTF-8 \u7F16\u7801\uFF1B</p><p>\u7B2C 4 \u884C\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u6A21\u5757\u7684\u6587\u6863\u6CE8\u91CA\uFF0C\u4EFB\u4F55\u6A21\u5757\u4EE3\u7801\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E32\u90FD\u88AB\u89C6\u4E3A\u6A21\u5757\u7684\u6587\u6863\u6CE8\u91CA\uFF1B</p><p>\u7B2C 6 \u884C\u4F7F\u7528 <code>__author__</code> \u53D8\u91CF\u628A\u4F5C\u8005\u5199\u8FDB\u53BB\uFF0C\u8FD9\u6837\u5F53\u60A8\u516C\u5F00\u6E90\u4EE3\u7801\u540E\u522B\u4EBA\u5C31\u53EF\u4EE5\u77BB\u4EF0\u60A8\u7684\u5927\u540D\uFF1B</p><p>\u4EE5\u4E0A\u5C31\u662F Python \u6A21\u5757\u7684\u6807\u51C6\u6587\u4EF6\u6A21\u677F\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u5168\u90E8\u5220\u6389\u4E0D\u5199\uFF0C\u4F46\u662F\uFF0C\u6309\u6807\u51C6\u529E\u4E8B\u80AF\u5B9A\u6CA1\u9519\u3002</p><p>\u540E\u9762\u5F00\u59CB\u5C31\u662F\u771F\u6B63\u7684\u4EE3\u7801\u90E8\u5206\u3002</p><p>\u60A8\u53EF\u80FD\u6CE8\u610F\u5230\u4E86\uFF0C\u4F7F\u7528 <code>sys</code> \u6A21\u5757\u7684\u7B2C\u4E00\u6B65\uFF0C\u5C31\u662F\u5BFC\u5165\u8BE5\u6A21\u5757:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> sys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5BFC\u5165 sys \u6A21\u5757\u540E\uFF0C\u6211\u4EEC\u5C31\u6709\u4E86\u53D8\u91CF sys \u6307\u5411\u8BE5\u6A21\u5757\uFF0C\u5229\u7528 sys \u8FD9\u4E2A\u53D8\u91CF\uFF0C\u5C31\u53EF\u4EE5\u8BBF\u95EE sys \u6A21\u5757\u7684\u6240\u6709\u529F\u80FD\u3002</p><p>sys \u6A21\u5757\u6709\u4E00\u4E2A <code>argv</code> \u53D8\u91CF\uFF0C\u7528 list \u5B58\u50A8\u4E86\u547D\u4EE4\u884C\u7684\u6240\u6709\u53C2\u6570\u3002<code>argv</code> \u81F3\u5C11\u6709\u4E00\u4E2A\u5143\u7D20\uFF0C\u56E0\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\u6C38\u8FDC\u662F\u8BE5.py \u6587\u4EF6\u7684\u540D\u79F0\uFF0C\u4F8B\u5982:</p><p>\u8FD0\u884C <code>python3 hello.py</code> \u83B7\u5F97\u7684 <code>sys.argv</code> \u5C31\u662F <code>[&#39;hello.py&#39;]</code>\uFF1B</p><p>\u8FD0\u884C <code>python3 hello.py Mr.Song</code> \u83B7\u5F97\u7684 <code>sys.argv</code> \u5C31\u662F <code>[&#39;hello.py&#39;, &#39;Mr.Song&#39;]</code>\u3002</p><p>\u6700\u540E\uFF0C\u6CE8\u610F\u5230\u8FD9\u4E24\u884C\u4EE3\u7801:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    test<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u5728\u547D\u4EE4\u884C\u8FD0\u884C hello \u6A21\u5757\u6587\u4EF6\u65F6\uFF0CPython \u89E3\u91CA\u5668\u628A\u4E00\u4E2A\u7279\u6B8A\u53D8\u91CF <code>__name__</code> \u7F6E\u4E3A <code>__main__</code>\uFF0C\u800C\u5982\u679C\u5728\u5176\u4ED6\u5730\u65B9\u5BFC\u5165\u8BE5 hello \u6A21\u5757\u65F6\uFF0Cif \u5224\u65AD\u5C06\u5931\u8D25\uFF0C\u56E0\u6B64\uFF0C\u8FD9\u79CD if \u6D4B\u8BD5\u53EF\u4EE5\u8BA9\u4E00\u4E2A\u6A21\u5757\u901A\u8FC7\u547D\u4EE4\u884C\u8FD0\u884C\u65F6\u6267\u884C\u4E00\u4E9B\u989D\u5916\u7684\u4EE3\u7801\uFF0C\u6700\u5E38\u89C1\u7684\u5C31\u662F\u8FD0\u884C\u6D4B\u8BD5\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u7528\u547D\u4EE4\u884C\u8FD0\u884C hello.py \u770B\u770B\u6548\u679C:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ python3 hello.py
Hello, world<span class="token operator">!</span>
$ python hello.py Michael
Hello, Michael<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u542F\u52A8 Python \u4EA4\u4E92\u73AF\u5883\uFF0C\u518D\u5BFC\u5165 hello \u6A21\u5757:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ python3
Python <span class="token number">3.4</span>.3 <span class="token punctuation">(</span>v3.4.3:9b73f1c3e601, Feb <span class="token number">23</span> <span class="token number">2015</span>, 02:52:03<span class="token punctuation">)</span>
<span class="token punctuation">[</span>GCC <span class="token number">4.2</span>.1 <span class="token punctuation">(</span>Apple Inc. build <span class="token number">5666</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>dot <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span> on darwin
Type <span class="token string">&quot;help&quot;</span>, <span class="token string">&quot;copyright&quot;</span>, <span class="token string">&quot;credits&quot;</span> or <span class="token string">&quot;license&quot;</span> <span class="token keyword">for</span> <span class="token function">more</span> information.
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token function">import</span> hello
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BFC\u5165\u65F6\uFF0C\u6CA1\u6709\u6253\u5370 <code>Hello, word!</code>\uFF0C\u56E0\u4E3A\u6CA1\u6709\u6267\u884C <code>test()</code> \u51FD\u6570\u3002</p><p>\u8C03\u7528 <code>hello.test()</code> \u65F6\uFF0C\u624D\u80FD\u6253\u5370\u51FA <code>Hello, word!</code> :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> hello.test<span class="token punctuation">(</span><span class="token punctuation">)</span>
Hello, world<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u4F5C\u7528\u57DF</h2><p>\u5728\u4E00\u4E2A\u6A21\u5757\u4E2D\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u5B9A\u4E49\u5F88\u591A\u51FD\u6570\u548C\u53D8\u91CF\uFF0C\u4F46\u6709\u7684\u51FD\u6570\u548C\u53D8\u91CF\u6211\u4EEC\u5E0C\u671B\u7ED9\u522B\u4EBA\u4F7F\u7528\uFF0C\u6709\u7684\u51FD\u6570\u548C\u53D8\u91CF\u6211\u4EEC\u5E0C\u671B\u4EC5\u4EC5\u5728\u6A21\u5757\u5185\u90E8\u4F7F\u7528\u3002\u5728 Python \u4E2D\uFF0C\u662F\u901A\u8FC7_\u524D\u7F00\u6765\u5B9E\u73B0\u7684\u3002</p><p>\u6B63\u5E38\u7684\u51FD\u6570\u548C\u53D8\u91CF\u540D\u662F\u516C\u5F00\u7684 (public) \uFF0C\u53EF\u4EE5\u88AB\u76F4\u63A5\u5F15\u7528\uFF0C\u6BD4\u5982: <code>abc</code>\uFF0C<code>x123</code>\uFF0C<code>PI</code> \u7B49\uFF1B</p><p>\u7C7B\u4F3C <code>__xxx__</code> \u8FD9\u6837\u7684\u53D8\u91CF\u662F\u7279\u6B8A\u53D8\u91CF\uFF0C\u53EF\u4EE5\u88AB\u76F4\u63A5\u5F15\u7528\uFF0C\u4F46\u662F\u6709\u7279\u6B8A\u7528\u9014\uFF0C\u6BD4\u5982\u4E0A\u9762\u7684 <code>__author__</code>\uFF0C<code>__name__</code> \u5C31\u662F\u7279\u6B8A\u53D8\u91CF\uFF0Chello \u6A21\u5757\u5B9A\u4E49\u7684\u6587\u6863\u6CE8\u91CA\u4E5F\u53EF\u4EE5\u7528\u7279\u6B8A\u53D8\u91CF <code>__doc__</code> \u8BBF\u95EE\uFF0C\u6211\u4EEC\u81EA\u5DF1\u7684\u53D8\u91CF\u4E00\u822C\u4E0D\u8981\u7528\u8FD9\u79CD\u53D8\u91CF\u540D\uFF1B</p><p>\u7C7B\u4F3C <code>_xxx</code> \u548C <code>__xxx</code> \u8FD9\u6837\u7684\u51FD\u6570\u6216\u53D8\u91CF\u5C31\u662F\u975E\u516C\u5F00\u7684 (private) \uFF0C\u4E0D\u5E94\u8BE5\u88AB\u76F4\u63A5\u5F15\u7528\uFF0C\u6BD4\u5982 <code>_abc</code>\uFF0C<code>__abc</code> \u7B49\uFF1B</p><p>\u4E4B\u6240\u4EE5\u6211\u4EEC\u8BF4\uFF0Cprivate \u51FD\u6570\u548C\u53D8\u91CF\u201C\u4E0D\u5E94\u8BE5\u201D\u88AB\u76F4\u63A5\u5F15\u7528\uFF0C\u800C\u4E0D\u662F\u201C\u4E0D\u80FD\u201D\u88AB\u76F4\u63A5\u5F15\u7528\uFF0C\u662F\u56E0\u4E3A Python \u5E76\u6CA1\u6709\u4E00\u79CD\u65B9\u6CD5\u53EF\u4EE5\u5B8C\u5168\u9650\u5236\u8BBF\u95EE private \u51FD\u6570\u6216\u53D8\u91CF\uFF0C\u4F46\u662F\uFF0C\u4ECE\u7F16\u7A0B\u4E60\u60EF\u4E0A\u4E0D\u5E94\u8BE5\u5F15\u7528 private \u51FD\u6570\u6216\u53D8\u91CF\u3002</p><p>private \u51FD\u6570\u6216\u53D8\u91CF\u4E0D\u5E94\u8BE5\u88AB\u522B\u4EBA\u5F15\u7528\uFF0C\u90A3\u5B83\u4EEC\u6709\u4EC0\u4E48\u7528\u5462\uFF1F\u8BF7\u770B\u4F8B\u5B50:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">_private_1</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello, %s&#39;</span> <span class="token operator">%</span> name

<span class="token keyword">def</span> <span class="token function">_private_2</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hi, %s&#39;</span> <span class="token operator">%</span> name

<span class="token keyword">def</span> <span class="token function">greeting</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> _private_1<span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> _private_2<span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u5728\u6A21\u5757\u91CC\u516C\u5F00 <code>greeting()</code> \u51FD\u6570\uFF0C\u800C\u628A\u5185\u90E8\u903B\u8F91\u7528 private \u51FD\u6570\u9690\u85CF\u8D77\u6765\u4E86\uFF0C\u8FD9\u6837\uFF0C\u8C03\u7528 <code>greeting()</code> \u51FD\u6570\u4E0D\u7528\u5173\u5FC3\u5185\u90E8\u7684 private \u51FD\u6570\u7EC6\u8282\uFF0C\u8FD9\u4E5F\u662F\u4E00\u79CD\u975E\u5E38\u6709\u7528\u7684\u4EE3\u7801\u5C01\u88C5\u548C\u62BD\u8C61\u7684\u65B9\u6CD5\uFF0C\u5373:</p><p>\u5916\u90E8\u4E0D\u9700\u8981\u5F15\u7528\u7684\u51FD\u6570\u5168\u90E8\u5B9A\u4E49\u6210 private\uFF0C\u53EA\u6709\u5916\u90E8\u9700\u8981\u5F15\u7528\u7684\u51FD\u6570\u624D\u5B9A\u4E49\u4E3A public\u3002</p>`,34),t=[o];function c(l,i){return s(),a("div",null,t)}var r=n(p,[["render",c],["__file","usage.html.vue"]]);export{r as default};
