import{_ as s,o as n,c as a,e}from"./app.edc3ba14.js";const l={},i=e(`<h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><p>\u6709\u65F6\uFF0C\u811A\u672C\u9700\u8981\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u7531\u7528\u6237\u63D0\u4F9B\u4E00\u90E8\u5206\u6570\u636E\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u4F7F\u7528 <code>read</code> \u547D\u4EE4\u3002\u5B83\u5C06\u7528\u6237\u7684\u8F93\u5165\u5B58\u5165\u4E00\u4E2A\u53D8\u91CF\uFF0C\u65B9\u4FBF\u540E\u9762\u7684\u4EE3\u7801\u4F7F\u7528\u3002\u7528\u6237\u6309\u4E0B\u56DE\u8F66\u952E\uFF0C\u5C31\u8868\u793A\u8F93\u5165\u7ED3\u675F\u3002</p><p><code>read</code> \u547D\u4EE4\u7684\u683C\u5F0F\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token punctuation">[</span>-options<span class="token punctuation">]</span> <span class="token punctuation">[</span>variable<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u8BED\u6CD5\u4E2D\uFF0C<code>options</code> \u662F\u53C2\u6570\u9009\u9879\uFF0C<code>variable</code> \u662F\u7528\u6765\u4FDD\u5B58\u8F93\u5165\u6570\u503C\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u53D8\u91CF\u540D\u3002\u5982\u679C\u6CA1\u6709\u63D0\u4F9B\u53D8\u91CF\u540D\uFF0C\u73AF\u5883\u53D8\u91CF <code>REPLY</code> \u4F1A\u5305\u542B\u7528\u6237\u8F93\u5165\u7684\u4E00\u6574\u884C\u6570\u636E\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50 <code>demo.sh</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> -n <span class="token string">&quot;\u8F93\u5165\u4E00\u4E9B\u6587\u672C &gt; &quot;</span>
<span class="token builtin class-name">read</span> text
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u60A8\u7684\u8F93\u5165: <span class="token variable">$text</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u5148\u663E\u793A\u4E00\u884C\u63D0\u793A\u6587\u672C\uFF0C\u7136\u540E\u4F1A\u7B49\u5F85\u7528\u6237\u8F93\u5165\u6587\u672C\u3002\u7528\u6237\u8F93\u5165\u7684\u6587\u672C\uFF0C\u5B58\u5165\u53D8\u91CF <code>text</code>\uFF0C\u5728\u4E0B\u4E00\u884C\u663E\u793A\u51FA\u6765\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> demo.sh
\u8F93\u5165\u4E00\u4E9B\u6587\u672C <span class="token operator">&gt;</span> \u60A8\u597D\uFF0C\u4E16\u754C
\u60A8\u7684\u8F93\u5165: \u60A8\u597D\uFF0C\u4E16\u754C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>read</code> \u53EF\u4EE5\u63A5\u53D7\u7528\u6237\u8F93\u5165\u7684\u591A\u4E2A\u503C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> Please, enter your firstname and lastname
<span class="token builtin class-name">read</span> FN LN
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hi! <span class="token variable">$LN</span>, <span class="token variable">$FN</span> !&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>read</code> \u6839\u636E\u7528\u6237\u7684\u8F93\u5165\uFF0C\u540C\u65F6\u4E3A\u4E24\u4E2A\u53D8\u91CF\u8D4B\u503C\u3002</p><p>\u5982\u679C\u7528\u6237\u7684\u8F93\u5165\u9879\u5C11\u4E8E <code>read</code> \u547D\u4EE4\u7ED9\u51FA\u7684\u53D8\u91CF\u6570\u76EE\uFF0C\u90A3\u4E48\u989D\u5916\u7684\u53D8\u91CF\u503C\u4E3A\u7A7A\u3002\u5982\u679C\u7528\u6237\u7684\u8F93\u5165\u9879\u591A\u4E8E\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u90A3\u4E48\u591A\u4F59\u7684\u8F93\u5165\u9879\u4F1A\u5305\u542B\u5230\u6700\u540E\u4E00\u4E2A\u53D8\u91CF\u4E2D\u3002</p><p>\u5982\u679C <code>read</code> \u547D\u4EE4\u4E4B\u540E\u6CA1\u6709\u5B9A\u4E49\u53D8\u91CF\u540D\uFF0C\u90A3\u4E48\u73AF\u5883\u53D8\u91CF <code>REPLY</code> \u4F1A\u5305\u542B\u6240\u6709\u7684\u8F93\u5165\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># read-single: read multiple values into default variable</span>
<span class="token builtin class-name">echo</span> -n <span class="token string">&quot;Enter one or more values &gt; &quot;</span>
<span class="token builtin class-name">read</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;REPLY = &#39;<span class="token environment constant">$REPLY</span>&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u811A\u672C\u7684\u8FD0\u884C\u7ED3\u679C\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ read-single
Enter one or <span class="token function">more</span> values <span class="token operator">&gt;</span> a b c d
<span class="token environment constant">REPLY</span> <span class="token operator">=</span> <span class="token string">&#39;a b c d&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>read</code> \u547D\u4EE4\u9664\u4E86\u8BFB\u53D6\u952E\u76D8\u8F93\u5165\uFF0C\u53EF\u4EE5\u7528\u6765\u8BFB\u53D6\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token builtin class-name">read</span> myline
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$myline</span>&quot;</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> <span class="token variable">$filename</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u901A\u8FC7 <code>read</code> \u547D\u4EE4\uFF0C\u8BFB\u53D6\u4E00\u4E2A\u6587\u4EF6\u7684\u5185\u5BB9\u3002<code>done</code> \u547D\u4EE4\u540E\u9762\u7684\u5B9A\u5411\u7B26 <code>&lt;</code>\uFF0C\u5C06\u6587\u4EF6\u5BFC\u5411 <code>read</code> \u547D\u4EE4\uFF0C\u6BCF\u6B21\u8BFB\u53D6\u4E00\u884C\uFF0C\u5B58\u5165\u53D8\u91CF <code>myline</code>\uFF0C\u76F4\u5230\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6BD5\u3002</p><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p><code>read</code> \u547D\u4EE4\u7684\u53C2\u6570\u5982\u4E0B\u3002</p><ol><li><p><strong><code>-t</code> \u53C2\u6570</strong></p><p><code>read</code> \u547D\u4EE4\u7684 <code>-t</code> \u53C2\u6570\uFF0C\u8BBE\u7F6E\u4E86\u8D85\u65F6\u7684\u79D2\u6570\u3002\u5982\u679C\u8D85\u8FC7\u4E86\u6307\u5B9A\u65F6\u95F4\uFF0C\u7528\u6237\u4ECD\u7136\u6CA1\u6709\u8F93\u5165\uFF0C\u811A\u672C\u5C06\u653E\u5F03\u7B49\u5F85\uFF0C\u7EE7\u7EED\u5411\u4E0B\u6267\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> -n <span class="token string">&quot;\u8F93\u5165\u4E00\u4E9B\u6587\u672C &gt; &quot;</span>
<span class="token keyword">if</span> <span class="token builtin class-name">read</span> -t <span class="token number">3</span> response<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7528\u6237\u5DF2\u7ECF\u8F93\u5165\u4E86&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7528\u6237\u6CA1\u6709\u8F93\u5165&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u8F93\u5165\u547D\u4EE4\u4F1A\u7B49\u5F85 3 \u79D2\uFF0C\u5982\u679C\u7528\u6237\u8D85\u8FC7\u8FD9\u4E2A\u65F6\u95F4\u6CA1\u6709\u8F93\u5165\uFF0C\u8FD9\u4E2A\u547D\u4EE4\u5C31\u4F1A\u6267\u884C\u5931\u8D25\u3002<code>if</code> \u6839\u636E\u547D\u4EE4\u7684\u8FD4\u56DE\u503C\uFF0C\u8F6C\u5165 <code>else</code> \u4EE3\u7801\u5757\uFF0C\u7EE7\u7EED\u5F80\u4E0B\u6267\u884C\u3002</p><p>\u73AF\u5883\u53D8\u91CF <code>TMOUT</code> \u4E5F\u53EF\u4EE5\u8D77\u5230\u540C\u6837\u4F5C\u7528\uFF0C\u6307\u5B9A <code>read</code> \u547D\u4EE4\u7B49\u5F85\u7528\u6237\u8F93\u5165\u7684\u65F6\u95F4(\u5355\u4F4D\u4E3A\u79D2)\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">TMOUT</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token builtin class-name">read</span> response
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E5F\u662F\u7B49\u5F85 3 \u79D2\uFF0C\u5982\u679C\u7528\u6237\u8FD8\u6CA1\u6709\u8F93\u5165\uFF0C\u5C31\u4F1A\u8D85\u65F6\u3002</p></li><li><p><strong><code>-p</code> \u53C2\u6570</strong></p><p><code>-p</code> \u53C2\u6570\u6307\u5B9A\u7528\u6237\u8F93\u5165\u7684\u63D0\u793A\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">read</span> -p <span class="token string">&quot;Enter one or more values &gt; &quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;REPLY = &#39;<span class="token environment constant">$REPLY</span>&#39;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u5148\u663E\u793A <code>Enter one or more values &gt;</code>\uFF0C\u518D\u63A5\u53D7\u7528\u6237\u7684\u8F93\u5165\u3002</p></li><li><p><strong><code>-a</code> \u53C2\u6570</strong></p><p><code>-a</code> \u53C2\u6570\u628A\u7528\u6237\u7684\u8F93\u5165\u8D4B\u503C\u7ED9\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4ECE\u96F6\u53F7\u4F4D\u7F6E\u5F00\u59CB\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">read</span> -a people
alice duchess dodo
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${people<span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>
dodo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u7528\u6237\u8F93\u5165\u88AB\u8D4B\u503C\u7ED9\u4E00\u4E2A\u6570\u7EC4 <code>people</code>\uFF0C\u8FD9\u4E2A\u6570\u7EC4\u7684 2 \u53F7\u6210\u5458\u5C31\u662F <code>dodo</code>\u3002</p></li><li><p><strong><code>-n</code> \u53C2\u6570</strong></p><p><code>-n</code> \u53C2\u6570\u6307\u5B9A\u53EA\u8BFB\u53D6\u82E5\u5E72\u4E2A\u5B57\u7B26\u4F5C\u4E3A\u53D8\u91CF\u503C\uFF0C\u800C\u4E0D\u662F\u6574\u884C\u8BFB\u53D6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">read</span> -n <span class="token number">3</span> letter
abcdefghij
$ <span class="token builtin class-name">echo</span> <span class="token variable">$letter</span>
abc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u53D8\u91CF <code>letter</code> \u53EA\u5305\u542B 3 \u4E2A\u5B57\u6BCD\u3002</p></li><li><p><strong>-e \u53C2\u6570</strong></p><p><code>-e</code> \u53C2\u6570\u5141\u8BB8\u7528\u6237\u8F93\u5165\u7684\u65F6\u5019\uFF0C\u4F7F\u7528 <code>readline</code> \u5E93\u63D0\u4F9B\u7684\u5FEB\u6377\u952E\uFF0C\u6BD4\u5982\u81EA\u52A8\u8865\u5168\u3002\u5177\u4F53\u7684\u5FEB\u6377\u952E\u53EF\u4EE5\u53C2\u9605\u300A\u884C\u64CD\u4F5C\u300B\u4E00\u7AE0\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> Please input the path to the file:

<span class="token builtin class-name">read</span> -e fileName

<span class="token builtin class-name">echo</span> <span class="token variable">$fileName</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>read</code> \u547D\u4EE4\u63A5\u53D7\u7528\u6237\u8F93\u5165\u7684\u6587\u4EF6\u540D\u3002\u8FD9\u65F6\uFF0C\u7528\u6237\u53EF\u80FD\u60F3\u4F7F\u7528 Tab \u952E\u7684\u6587\u4EF6\u540D\u201C\u81EA\u52A8\u8865\u5168\u201D\u529F\u80FD\uFF0C\u4F46\u662F <code>read</code> \u547D\u4EE4\u7684\u8F93\u5165\u9ED8\u8BA4\u4E0D\u652F\u6301 <code>readline</code> \u5E93\u7684\u529F\u80FD\u3002<code>-e</code> \u53C2\u6570\u5C31\u53EF\u4EE5\u5141\u8BB8\u7528\u6237\u4F7F\u7528\u81EA\u52A8\u8865\u5168\u3002</p></li><li><p><strong>\u5176\u4ED6\u53C2\u6570</strong></p><ul><li><code>-d delimiter</code>: \u5B9A\u4E49\u5B57\u7B26\u4E32 <code>delimiter</code> \u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4F5C\u4E3A\u7528\u6237\u8F93\u5165\u7684\u7ED3\u675F\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u6362\u884C\u7B26\u3002</li><li><code>-r</code>: raw \u6A21\u5F0F\uFF0C\u8868\u793A\u4E0D\u628A\u7528\u6237\u8F93\u5165\u7684\u53CD\u659C\u6760\u5B57\u7B26\u89E3\u91CA\u4E3A\u8F6C\u4E49\u5B57\u7B26\u3002</li><li><code>-s</code>: \u4F7F\u5F97\u7528\u6237\u7684\u8F93\u5165\u4E0D\u663E\u793A\u5728\u5C4F\u5E55\u4E0A\uFF0C\u8FD9\u5E38\u5E38\u7528\u4E8E\u8F93\u5165\u5BC6\u7801\u6216\u4FDD\u5BC6\u4FE1\u606F\u3002</li><li><code>-u fd</code>: \u4F7F\u7528\u6587\u4EF6\u63CF\u8FF0\u7B26 <code>fd</code> \u4F5C\u4E3A\u8F93\u5165\u3002</li></ul></li></ol><h2 id="ifs-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#ifs-\u53D8\u91CF" aria-hidden="true">#</a> IFS \u53D8\u91CF</h2><p><code>read</code> \u547D\u4EE4\u8BFB\u53D6\u7684\u503C\uFF0C\u9ED8\u8BA4\u662F\u4EE5\u7A7A\u683C\u5206\u9694\u3002\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF <code>IFS</code>(\u5185\u90E8\u5B57\u6BB5\u5206\u9694\u7B26\uFF0CInternal Field Separator \u7684\u7F29\u5199)\uFF0C\u4FEE\u6539\u5206\u9694\u6807\u5FD7\u3002</p><p><code>IFS</code> \u7684\u9ED8\u8BA4\u503C\u662F\u7A7A\u683C\u3001Tab \u7B26\u53F7\u3001\u6362\u884C\u7B26\u53F7\uFF0C\u901A\u5E38\u53D6\u7B2C\u4E00\u4E2A(\u5373\u7A7A\u683C)\u3002</p><p>\u5982\u679C\u628A <code>IFS</code> \u5B9A\u4E49\u6210\u5192\u53F7(<code>:</code>)\u6216\u5206\u53F7(<code>;</code>)\uFF0C\u5C31\u53EF\u4EE5\u5206\u9694\u4EE5\u8FD9\u4E24\u4E2A\u7B26\u53F7\u5206\u9694\u7684\u503C\uFF0C\u8FD9\u5BF9\u8BFB\u53D6\u6587\u4EF6\u5F88\u6709\u7528\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># read-ifs: read fields from a file</span>

<span class="token assign-left variable">FILE</span><span class="token operator">=</span>/etc/passwd

<span class="token builtin class-name">read</span> -p <span class="token string">&quot;Enter a username &gt; &quot;</span> user_name
<span class="token assign-left variable">file_info</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">grep</span> <span class="token string">&quot;^<span class="token variable">$user_name</span>:&quot;</span> $FILE<span class="token variable">)</span></span>&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">&quot;<span class="token variable">$file_info</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;:&quot;</span> <span class="token builtin class-name">read</span> user pw uid gid name home shell <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&quot;<span class="token variable">$file_info</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;User = &#39;<span class="token variable">$user</span>&#39;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;UID = &#39;<span class="token variable">$uid</span>&#39;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;GID = &#39;<span class="token variable">$gid</span>&#39;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Full Name = &#39;<span class="token variable">$name</span>&#39;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Home Dir. = &#39;<span class="token variable">$home</span>&#39;&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Shell = &#39;<span class="token variable">$shell</span>&#39;&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;No such user &#39;<span class="token variable">$user_name</span>&#39;&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>IFS</code> \u8BBE\u4E3A\u5192\u53F7\uFF0C\u7136\u540E\u7528\u6765\u5206\u89E3 <code>/etc/passwd</code> \u6587\u4EF6\u7684\u4E00\u884C\u3002<code>IFS</code> \u7684\u8D4B\u503C\u547D\u4EE4\u548C <code>read</code> \u547D\u4EE4\u5199\u5728\u4E00\u884C\uFF0C\u8FD9\u6837\u7684\u8BDD\uFF0C<code>IFS</code> \u7684\u6539\u53D8\u4EC5\u5BF9\u540E\u9762\u7684\u547D\u4EE4\u751F\u6548\uFF0C\u8BE5\u547D\u4EE4\u6267\u884C\u540E <code>IFS</code> \u4F1A\u81EA\u52A8\u6062\u590D\u539F\u6765\u7684\u503C\u3002\u5982\u679C\u4E0D\u5199\u5728\u4E00\u884C\uFF0C\u5C31\u8981\u91C7\u7528\u4E0B\u9762\u7684\u5199\u6CD5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">OLD_IFS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$IFS</span>&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;:&quot;</span>
<span class="token builtin class-name">read</span> user pw uid gid name home shell <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&quot;<span class="token variable">$file_info</span>&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$OLD_IFS</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u5916\uFF0C\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>&lt;&lt;&lt;</code> \u662F Here \u5B57\u7B26\u4E32\uFF0C\u7528\u4E8E\u5C06\u53D8\u91CF\u503C\u8F6C\u4E3A\u6807\u51C6\u8F93\u5165\uFF0C\u56E0\u4E3A <code>read</code> \u547D\u4EE4\u53EA\u80FD\u89E3\u6790\u6807\u51C6\u8F93\u5165\u3002</p><p>\u5982\u679C <code>IFS</code> \u8BBE\u4E3A\u7A7A\u5B57\u7B26\u4E32\uFF0C\u5C31\u7B49\u540C\u4E8E\u5C06\u6574\u884C\u8BFB\u5165\u4E00\u4E2A\u53D8\u91CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">input</span><span class="token operator">=</span><span class="token string">&quot;/path/to/txt/file&quot;</span>
<span class="token keyword">while</span> <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span> <span class="token builtin class-name">read</span> -r line
<span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$line</span>&quot;</span>
<span class="token keyword">done</span> <span class="token operator">&lt;</span> <span class="token string">&quot;<span class="token variable">$input</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u547D\u4EE4\u53EF\u4EE5\u9010\u884C\u8BFB\u53D6\u6587\u4EF6\uFF0C\u6BCF\u4E00\u884C\u5B58\u5165\u53D8\u91CF <code>line</code>\uFF0C\u6253\u5370\u51FA\u6765\u4EE5\u540E\u518D\u8BFB\u53D6\u4E0B\u4E00\u884C\u3002</p>`,34),o=[i];function c(d,t){return n(),a("div",null,o)}var r=s(l,[["render",c],["__file","read.html.vue"]]);export{r as default};
