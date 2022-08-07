import{_ as i,o as c,c as l,a as s,b as o,w as t,e as a,d as n,r as p}from"./app.edc3ba14.js";const d={},u=a(`<p>\u672C\u7AE0\u4ECB\u7ECD\u5982\u4F55\u5BF9 Shell \u811A\u672C\u9664\u9519\u3002</p><h2 id="\u5E38\u89C1\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u9519\u8BEF" aria-hidden="true">#</a> \u5E38\u89C1\u9519\u8BEF</h2><p>\u7F16\u5199 Shell \u811A\u672C\u7684\u65F6\u5019\uFF0C\u4E00\u5B9A\u8981\u8003\u8651\u5230\u547D\u4EE4\u5931\u8D25\u7684\u60C5\u51B5\uFF0C\u5426\u5219\u5F88\u5BB9\u6613\u51FA\u9519\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>

<span class="token assign-left variable">dir_name</span><span class="token operator">=</span>/path/not/exist

<span class="token builtin class-name">cd</span> <span class="token variable">$dir_name</span>
<span class="token function">rm</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u811A\u672C\u4E2D\uFF0C\u5982\u679C\u76EE\u5F55 <code>$dir_name</code> \u4E0D\u5B58\u5728\uFF0C<code>cd $dir_name</code> \u547D\u4EE4\u5C31\u4F1A\u6267\u884C\u5931\u8D25\u3002\u8FD9\u65F6\uFF0C\u5C31\u4E0D\u4F1A\u6539\u53D8\u5F53\u524D\u76EE\u5F55\uFF0C\u811A\u672C\u4F1A\u7EE7\u7EED\u6267\u884C\u4E0B\u53BB\uFF0C\u5BFC\u81F4 <code>rm *</code> \u547D\u4EE4\u5220\u5149\u5F53\u524D\u76EE\u5F55\u7684\u6587\u4EF6\u3002</p><p>\u5982\u679C\u6539\u6210\u4E0B\u9762\u7684\u6837\u5B50\uFF0C\u4E5F\u4F1A\u6709\u95EE\u9898\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$dir_name</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u811A\u672C\u4E2D\uFF0C\u53EA\u6709 <code>cd $dir_name</code> \u6267\u884C\u6210\u529F\uFF0C\u624D\u4F1A\u6267\u884C <code>rm *</code>\u3002\u4F46\u662F\uFF0C\u5982\u679C\u53D8\u91CF <code>$dir_name</code> \u4E3A\u7A7A\uFF0C<code>cd</code> \u5C31\u4F1A\u8FDB\u5165\u7528\u6237\u4E3B\u76EE\u5F55\uFF0C\u4ECE\u800C\u5220\u5149\u7528\u6237\u4E3B\u76EE\u5F55\u7684\u6587\u4EF6\u3002</p><p>\u4E0B\u9762\u7684\u5199\u6CD5\u624D\u662F\u6B63\u786E\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span><span class="token punctuation">[</span> -d <span class="token variable">$dir_name</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$dir_name</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u5148\u5224\u65AD\u76EE\u5F55 <code>$dir_name</code> \u662F\u5426\u5B58\u5728\uFF0C\u7136\u540E\u624D\u6267\u884C\u5176\u4ED6\u64CD\u4F5C\u3002</p><p>\u5982\u679C\u4E0D\u653E\u5FC3\u5220\u9664\u4EC0\u4E48\u6587\u4EF6\uFF0C\u53EF\u4EE5\u5148\u6253\u5370\u51FA\u6765\u770B\u4E00\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span><span class="token punctuation">[</span> -d <span class="token variable">$dir_name</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$dir_name</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token function">rm</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C<code>echo rm *</code> \u4E0D\u4F1A\u5220\u9664\u6587\u4EF6\uFF0C\u53EA\u4F1A\u6253\u5370\u51FA\u6765\u8981\u5220\u9664\u7684\u6587\u4EF6\u3002</p><h2 id="bash-\u7684-x-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#bash-\u7684-x-\u53C2\u6570" aria-hidden="true">#</a> <code>bash</code> \u7684 <code>-x</code> \u53C2\u6570</h2><p><code>bash</code> \u7684 <code>-x</code> \u53C2\u6570\u53EF\u4EE5\u5728\u6267\u884C\u6BCF\u4E00\u884C\u547D\u4EE4\u4E4B\u524D\uFF0C\u6253\u5370\u8BE5\u547D\u4EE4\u3002\u8FD9\u6837\u5C31\u4E0D\u7528\u81EA\u5DF1\u8F93\u51FA\u6267\u884C\u7684\u547D\u4EE4\uFF0C\u4E00\u65E6\u51FA\u9519\uFF0C\u6BD4\u8F83\u5BB9\u6613\u8FFD\u67E5\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u811A\u672C <code>script.sh</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># script.sh</span>
<span class="token builtin class-name">echo</span> hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u52A0\u4E0A <code>-x</code> \u53C2\u6570\uFF0C\u6267\u884C\u6BCF\u6761\u547D\u4EE4\u4E4B\u524D\uFF0C\u90FD\u4F1A\u663E\u793A\u8BE5\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> -x script.sh
+ <span class="token builtin class-name">echo</span> hello world
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u884C\u9996\u4E3A <code>+</code> \u7684\u884C\uFF0C\u663E\u793A\u8BE5\u884C\u662F\u6240\u8981\u6267\u884C\u7684\u547D\u4EE4\uFF0C\u4E0B\u4E00\u884C\u624D\u662F\u8BE5\u547D\u4EE4\u7684\u6267\u884C\u7ED3\u679C\u3002</p><p>\u4E0B\u9762\u518D\u770B\u4E00\u4E2A <code>-x</code> \u5199\u5728\u811A\u672C\u5185\u90E8\u7684\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash -x</span>
<span class="token comment"># trouble: script to demonstrate common errors</span>

<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$number</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Number is equal to 1.&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Number is not equal to 1.&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u811A\u672C\u6267\u884C\u4E4B\u540E\uFF0C\u4F1A\u8F93\u51FA\u6BCF\u4E00\u884C\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ trouble
+ <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">1</span>
+ <span class="token string">&#39;[&#39;</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token string">&#39;]&#39;</span>
+ <span class="token builtin class-name">echo</span> <span class="token string">&#39;Number is equal to 1.&#39;</span>
Number is equal to <span class="token number">1</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7684\u547D\u4EE4\u4E4B\u524D\u7684 <code>+</code> \u53F7\uFF0C\u662F\u7531\u7CFB\u7EDF\u53D8\u91CF <code>PS4</code> \u51B3\u5B9A\uFF0C\u53EF\u4EE5\u4FEE\u6539\u8FD9\u4E2A\u53D8\u91CF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PS4</span></span><span class="token operator">=</span><span class="token string">&#39;$LINENO + &#39;</span>
$ trouble
<span class="token number">5</span> + <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token number">7</span> + <span class="token string">&#39;[&#39;</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token string">&#39;]&#39;</span>
<span class="token number">8</span> + <span class="token builtin class-name">echo</span> <span class="token string">&#39;Number is equal to 1.&#39;</span>
Number is equal to <span class="token number">1</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),r=n("\u53E6\u5916\uFF0C"),v=s("code",null,"set",-1),b=n(" \u547D\u4EE4\u4E5F\u53EF\u4EE5\u8BBE\u7F6E Shell \u7684\u884C\u4E3A\u53C2\u6570\uFF0C\u6709\u5229\u4E8E\u811A\u672C\u9664\u9519\uFF0C\u8BE6\u89C1 "),m=n("set \u547D\u4EE4"),k=n(" \u4E00\u7AE0\u3002"),h=a(`<h2 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h2><p>\u6709\u4E00\u4E9B\u73AF\u5883\u53D8\u91CF\u5E38\u7528\u4E8E\u9664\u9519\u3002</p><h3 id="lineno" tabindex="-1"><a class="header-anchor" href="#lineno" aria-hidden="true">#</a> LINENO</h3><p>\u53D8\u91CF <code>LINENO</code> \u8FD4\u56DE\u5B83\u5728\u811A\u672C\u91CC\u9762\u7684\u884C\u53F7\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;This is line <span class="token variable">$LINENO</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u4E0A\u9762\u7684\u811A\u672C <code>test.sh</code>\uFF0C<code>$LINENO</code> \u4F1A\u8FD4\u56DE <code>3</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./test.sh
This is line <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="funcname" tabindex="-1"><a class="header-anchor" href="#funcname" aria-hidden="true">#</a> FUNCNAME</h3><p>\u53D8\u91CF <code>FUNCNAME</code> \u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5185\u5BB9\u662F\u5F53\u524D\u7684\u51FD\u6570\u8C03\u7528\u5806\u6808\u3002\u8BE5\u6570\u7EC4\u7684 0 \u53F7\u6210\u5458\u662F\u5F53\u524D\u8C03\u7528\u7684\u51FD\u6570\uFF0C1 \u53F7\u6210\u5458\u662F\u8C03\u7528\u5F53\u524D\u51FD\u6570\u7684\u51FD\u6570\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func1: FUNCNAME0 is <span class="token variable">\${FUNCNAME<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func1: FUNCNAME1 is <span class="token variable">\${FUNCNAME<span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func1: FUNCNAME2 is <span class="token variable">\${FUNCNAME<span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>&quot;</span>
  func2
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func2: FUNCNAME0 is <span class="token variable">\${FUNCNAME<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func2: FUNCNAME1 is <span class="token variable">\${FUNCNAME<span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func2: FUNCNAME2 is <span class="token variable">\${FUNCNAME<span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token punctuation">}</span>

func1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u4E0A\u9762\u7684\u811A\u672C <code>test.sh</code>\uFF0C\u7ED3\u679C\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./test.sh
func1: FUNCNAME0 is func1
func1: FUNCNAME1 is main
func1: FUNCNAME2 is
func2: FUNCNAME0 is func2
func2: FUNCNAME1 is func1
func2: FUNCNAME2 is main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u6267\u884C <code>func1</code> \u65F6\uFF0C\u53D8\u91CF <code>FUNCNAME</code> \u7684 0 \u53F7\u6210\u5458\u662F <code>func1</code>\uFF0C1 \u53F7\u6210\u5458\u662F\u8C03\u7528 <code>func1</code> \u7684\u4E3B\u811A\u672C <code>main</code>\u3002\u6267\u884C <code>func2</code> \u65F6\uFF0C\u53D8\u91CF <code>FUNCNAME</code> \u7684 0 \u53F7\u6210\u5458\u662F <code>func2</code>\uFF0C1 \u53F7\u6210\u5458\u662F\u8C03\u7528 <code>func2</code> \u7684 <code>func1</code>\u3002</p><h3 id="bash-source" tabindex="-1"><a class="header-anchor" href="#bash-source" aria-hidden="true">#</a> BASH_SOURCE</h3><p>\u53D8\u91CF <code>BASH_SOURCE</code> \u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5185\u5BB9\u662F\u5F53\u524D\u7684\u811A\u672C\u8C03\u7528\u5806\u6808\u3002\u8BE5\u6570\u7EC4\u7684 0 \u53F7\u6210\u5458\u662F\u5F53\u524D\u6267\u884C\u7684\u811A\u672C\uFF0C1 \u53F7\u6210\u5458\u662F\u8C03\u7528\u5F53\u524D\u811A\u672C\u7684\u811A\u672C\uFF0C\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u8DDF\u53D8\u91CF <code>FUNCNAME</code> \u662F\u4E00\u4E00\u5BF9\u5E94\u5173\u7CFB\u3002</p><p>\u4E0B\u9762\u6709\u4E24\u4E2A\u5B50\u811A\u672C <code>lib1.sh</code> \u548C <code>lib2.sh</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># lib1.sh</span>
<span class="token keyword">function</span> <span class="token function-name function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func1: BASH_SOURCE0 is <span class="token variable">\${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func1: BASH_SOURCE1 is <span class="token variable">\${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func1: BASH_SOURCE2 is <span class="token variable">\${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>&quot;</span>
  func2
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># lib2.sh</span>
<span class="token keyword">function</span> <span class="token function-name function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func2: BASH_SOURCE0 is <span class="token variable">\${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func2: BASH_SOURCE1 is <span class="token variable">\${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func2: BASH_SOURCE2 is <span class="token variable">\${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u4E3B\u811A\u672C <code>main.sh</code> \u8C03\u7528\u4E0A\u9762\u4E24\u4E2A\u5B50\u811A\u672C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># main.sh</span>

<span class="token builtin class-name">source</span> lib1.sh
<span class="token builtin class-name">source</span> lib2.sh

func1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u4E3B\u811A\u672C <code>main.sh</code>\uFF0C\u4F1A\u5F97\u5230\u4E0B\u9762\u7684\u7ED3\u679C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./main.sh
func1: BASH_SOURCE0 is lib1.sh
func1: BASH_SOURCE1 is ./main.sh
func1: BASH_SOURCE2 is
func2: BASH_SOURCE0 is lib2.sh
func2: BASH_SOURCE1 is lib1.sh
func2: BASH_SOURCE2 is ./main.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u6267\u884C\u51FD\u6570 <code>func1</code> \u65F6\uFF0C\u53D8\u91CF <code>BASH_SOURCE</code> \u7684 0 \u53F7\u6210\u5458\u662F <code>func1</code> \u6240\u5728\u7684\u811A\u672C <code>lib1.sh</code>\uFF0C1 \u53F7\u6210\u5458\u662F\u4E3B\u811A\u672C <code>main.sh</code>\uFF1B\u6267\u884C\u51FD\u6570 <code>func2</code> \u65F6\uFF0C\u53D8\u91CF <code>BASH_SOURCE</code> \u7684 0 \u53F7\u6210\u5458\u662F <code>func2</code> \u6240\u5728\u7684\u811A\u672C <code>lib2.sh</code>\uFF0C1 \u53F7\u6210\u5458\u662F\u8C03\u7528 <code>func2</code> \u7684\u811A\u672C <code>lib1.sh</code>\u3002</p><h3 id="bash-lineno" tabindex="-1"><a class="header-anchor" href="#bash-lineno" aria-hidden="true">#</a> BASH_LINENO</h3><p>\u53D8\u91CF <code>BASH_LINENO</code> \u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5185\u5BB9\u662F\u6BCF\u4E00\u8F6E\u8C03\u7528\u5BF9\u5E94\u7684\u884C\u53F7\u3002<code>\${BASH_LINENO[$i]}</code> \u8DDF <code>\${FUNCNAME[$i]}</code> \u662F\u4E00\u4E00\u5BF9\u5E94\u5173\u7CFB\uFF0C\u8868\u793A <code>\${FUNCNAME[$i]}</code> \u5728\u8C03\u7528\u5B83\u7684\u811A\u672C\u6587\u4EF6 <code>\${BASH_SOURCE[$i+1]}</code> \u91CC\u9762\u7684\u884C\u53F7\u3002</p><p>\u4E0B\u9762\u6709\u4E24\u4E2A\u5B50\u811A\u672C <code>lib1.sh</code> \u548C <code>lib2.sh</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># lib1.sh</span>
<span class="token keyword">function</span> <span class="token function-name function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func1: BASH_LINENO is <span class="token variable">\${<span class="token environment constant">BASH_LINENO</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func1: FUNCNAME is <span class="token variable">\${FUNCNAME<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func1: BASH_SOURCE is <span class="token variable">\${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>&quot;</span>

  func2
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># lib2.sh</span>
<span class="token keyword">function</span> <span class="token function-name function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func2: BASH_LINENO is <span class="token variable">\${<span class="token environment constant">BASH_LINENO</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func2: FUNCNAME is <span class="token variable">\${FUNCNAME<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;func2: BASH_SOURCE is <span class="token variable">\${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u4E3B\u811A\u672C <code>main.sh</code> \u8C03\u7528\u4E0A\u9762\u4E24\u4E2A\u5B50\u811A\u672C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># main.sh</span>

<span class="token builtin class-name">source</span> lib1.sh
<span class="token builtin class-name">source</span> lib2.sh

func1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u4E3B\u811A\u672C <code>main.sh</code>\uFF0C\u4F1A\u5F97\u5230\u4E0B\u9762\u7684\u7ED3\u679C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ./main.sh
func1: <span class="token environment constant">BASH_LINENO</span> is <span class="token number">7</span>
func1: FUNCNAME is func1
func1: <span class="token environment constant">BASH_SOURCE</span> is main.sh
func2: <span class="token environment constant">BASH_LINENO</span> is <span class="token number">8</span>
func2: FUNCNAME is func2
func2: <span class="token environment constant">BASH_SOURCE</span> is lib1.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u51FD\u6570 <code>func1</code> \u662F\u5728 <code>main.sh</code> \u7684\u7B2C 7 \u884C\u8C03\u7528\uFF0C\u51FD\u6570 <code>func2</code> \u662F\u5728 <code>lib1.sh</code> \u7684\u7B2C 8 \u884C\u8C03\u7528\u7684\u3002</p>`,33);function g(f,N){const e=p("RouterLink");return c(),l("div",null,[u,s("p",null,[r,v,b,o(e,{to:"/linux/bash/set.html"},{default:t(()=>[m]),_:1}),k]),h])}var E=i(d,[["render",g],["__file","debug.html.vue"]]);export{E as default};
