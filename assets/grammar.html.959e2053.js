import{_ as a,o as i,c as d,a as l,b as c,w as o,e as s,d as e,r as t}from"./app.edc3ba14.js";const p={},r=s(`<p>\u672C\u7AE0\u4ECB\u7ECD Bash \u7684\u6700\u57FA\u672C\u8BED\u6CD5\u3002</p><h2 id="echo-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#echo-\u547D\u4EE4" aria-hidden="true">#</a> echo \u547D\u4EE4</h2><p>\u7531\u4E8E\u540E\u9762\u7684\u4F8B\u5B50\u4F1A\u5927\u91CF\u7528\u5230 <code>echo</code> \u547D\u4EE4\uFF0C\u8FD9\u91CC\u5148\u4ECB\u7ECD\u8FD9\u4E2A\u547D\u4EE4\u3002</p><p><code>echo</code> \u547D\u4EE4\u7684\u4F5C\u7528\u662F\u5728\u5C4F\u5E55\u8F93\u51FA\u4E00\u884C\u6587\u672C\uFF0C\u53EF\u4EE5\u5C06\u8BE5\u547D\u4EE4\u7684\u53C2\u6570\u539F\u6837\u8F93\u51FA\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> hello world
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>echo</code> \u7684\u53C2\u6570\u662F <code>hello world</code>\uFF0C\u53EF\u4EE5\u539F\u6837\u8F93\u51FA\u3002</p><p>\u5982\u679C\u60F3\u8981\u8F93\u51FA\u7684\u662F\u591A\u884C\u6587\u672C\uFF0C\u5373\u5305\u62EC\u6362\u884C\u7B26\u3002\u8FD9\u65F6\u9700\u8981\u628A\u591A\u884C\u6587\u672C\u653E\u5728\u5F15\u53F7\u91CC\u9762\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;&lt;HTML&gt;
    &lt;HEAD&gt;
          &lt;TITLE&gt;Page Title&lt;/TITLE&gt;
    &lt;/HEAD&gt;
    &lt;BODY&gt;
          Page body.
    &lt;/BODY&gt;
&lt;/HTML&gt;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>echo</code> \u53EF\u4EE5\u539F\u6837\u8F93\u51FA\u591A\u884C\u6587\u672C\u3002</p><h3 id="n-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#n-\u53C2\u6570" aria-hidden="true">#</a> <code>-n</code> \u53C2\u6570</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>echo</code> \u8F93\u51FA\u7684\u6587\u672C\u672B\u5C3E\u4F1A\u6709\u4E00\u4E2A\u56DE\u8F66\u7B26\u3002<code>-n</code> \u53C2\u6570\u53EF\u4EE5\u53D6\u6D88\u672B\u5C3E\u7684\u56DE\u8F66\u7B26\uFF0C\u4F7F\u5F97\u4E0B\u4E00\u4E2A\u63D0\u793A\u7B26\u7D27\u8DDF\u5728\u8F93\u51FA\u5185\u5BB9\u7684\u540E\u9762\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> -n hello world
hello world$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>world</code> \u540E\u9762\u76F4\u63A5\u5C31\u662F\u4E0B\u4E00\u884C\u7684\u63D0\u793A\u7B26 <code>$</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> a<span class="token punctuation">;</span><span class="token builtin class-name">echo</span> b
a
b

$ <span class="token builtin class-name">echo</span> -n a<span class="token punctuation">;</span><span class="token builtin class-name">echo</span> b
ab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>-n</code> \u53C2\u6570\u53EF\u4EE5\u8BA9\u4E24\u4E2A <code>echo</code> \u547D\u4EE4\u7684\u8F93\u51FA\u8FDE\u5728\u4E00\u8D77\uFF0C\u51FA\u73B0\u5728\u540C\u4E00\u884C\u3002</p><h3 id="e-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#e-\u53C2\u6570" aria-hidden="true">#</a> <code>-e</code> \u53C2\u6570</h3><p><code>-e</code> \u53C2\u6570\u4F1A\u89E3\u91CA\u5F15\u53F7(\u53CC\u5F15\u53F7\u548C\u5355\u5F15\u53F7)\u91CC\u9762\u7684\u7279\u6B8A\u5B57\u7B26(\u6BD4\u5982\u6362\u884C\u7B26 <code>\\n</code>)\u3002\u5982\u679C\u4E0D\u4F7F\u7528 <code>-e</code> \u53C2\u6570\uFF0C\u5373\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F15\u53F7\u4F1A\u8BA9\u7279\u6B8A\u5B57\u7B26\u53D8\u6210\u666E\u901A\u5B57\u7B26\uFF0C<code>echo</code> \u4E0D\u89E3\u91CA\u5B83\u4EEC\uFF0C\u539F\u6837\u8F93\u51FA\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello<span class="token entity" title="\\n">\\n</span>World&quot;</span>
Hello<span class="token punctuation">\\</span>nWorld

<span class="token comment"># \u53CC\u5F15\u53F7\u7684\u60C5\u51B5</span>
$ <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;Hello<span class="token entity" title="\\n">\\n</span>World&quot;</span>
Hello
World

<span class="token comment"># \u5355\u5F15\u53F7\u7684\u60C5\u51B5</span>
$ <span class="token builtin class-name">echo</span> -e <span class="token string">&#39;Hello\\nWorld&#39;</span>
Hello
World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>-e</code> \u53C2\u6570\u4F7F\u5F97 <code>\\n</code> \u89E3\u91CA\u4E3A\u6362\u884C\u7B26\uFF0C\u5BFC\u81F4\u8F93\u51FA\u5185\u5BB9\u91CC\u9762\u51FA\u73B0\u6362\u884C\u3002</p><h2 id="\u547D\u4EE4\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u683C\u5F0F" aria-hidden="true">#</a> \u547D\u4EE4\u683C\u5F0F</h2><p>\u547D\u4EE4\u884C\u73AF\u5883\u4E2D\uFF0C\u4E3B\u8981\u901A\u8FC7\u4F7F\u7528 Shell \u547D\u4EE4\uFF0C\u8FDB\u884C\u5404\u79CD\u64CD\u4F5C\u3002Shell \u547D\u4EE4\u57FA\u672C\u90FD\u662F\u4E0B\u9762\u7684\u683C\u5F0F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token punctuation">[</span> arg1 <span class="token punctuation">..</span>. <span class="token punctuation">[</span> argN <span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>command</code> \u662F\u5177\u4F53\u7684\u547D\u4EE4\u6216\u8005\u4E00\u4E2A\u53EF\u6267\u884C\u6587\u4EF6\uFF0C<code>arg1 ... argN</code> \u662F\u4F20\u9012\u7ED9\u547D\u4EE4\u7684\u53C2\u6570\uFF0C\u5B83\u4EEC\u662F\u53EF\u9009\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u8FD9\u4E2A\u547D\u4EE4\u4E2D\uFF0C<code>ls</code> \u662F\u547D\u4EE4\uFF0C<code>-l</code> \u662F\u53C2\u6570\u3002</p><p>\u6709\u4E9B\u53C2\u6570\u662F\u547D\u4EE4\u7684\u914D\u7F6E\u9879\uFF0C\u8FD9\u4E9B\u914D\u7F6E\u9879\u4E00\u822C\u90FD\u4EE5\u4E00\u4E2A\u8FDE\u8BCD\u7EBF\u5F00\u5934\uFF0C\u6BD4\u5982\u4E0A\u9762\u7684 <code>-l</code>\u3002\u540C\u4E00\u4E2A\u914D\u7F6E\u9879\u5F80\u5F80\u6709\u957F\u548C\u77ED\u4E24\u79CD\u5F62\u5F0F\uFF0C\u6BD4\u5982 <code>-l</code> \u662F\u77ED\u5F62\u5F0F\uFF0C<code>--list</code> \u662F\u957F\u5F62\u5F0F\uFF0C\u5B83\u4EEC\u7684\u4F5C\u7528\u5B8C\u5168\u76F8\u540C\u3002\u77ED\u5F62\u5F0F\u4FBF\u4E8E\u624B\u52A8\u8F93\u5165\uFF0C\u957F\u5F62\u5F0F\u4E00\u822C\u7528\u5728\u811A\u672C\u4E4B\u4E2D\uFF0C\u53EF\u8BFB\u6027\u66F4\u597D\uFF0C\u5229\u4E8E\u89E3\u91CA\u81EA\u8EAB\u7684\u542B\u4E49\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u77ED\u5F62\u5F0F</span>
$ <span class="token function">ls</span> -r

<span class="token comment"># \u957F\u5F62\u5F0F</span>
$ <span class="token function">ls</span> --reverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C<code>-r</code> \u662F\u77ED\u5F62\u5F0F\uFF0C<code>--reverse</code> \u662F\u957F\u5F62\u5F0F\uFF0C\u4F5C\u7528\u5B8C\u5168\u4E00\u6837\u3002\u524D\u8005\u4FBF\u4E8E\u8F93\u5165\uFF0C\u540E\u8005\u4FBF\u4E8E\u7406\u89E3\u3002</p><p>Bash \u5355\u4E2A\u547D\u4EE4\u4E00\u822C\u90FD\u662F\u4E00\u884C\uFF0C\u7528\u6237\u6309\u4E0B\u56DE\u8F66\u952E\uFF0C\u5C31\u5F00\u59CB\u6267\u884C\u3002\u6709\u4E9B\u547D\u4EE4\u6BD4\u8F83\u957F\uFF0C\u5199\u6210\u591A\u884C\u4F1A\u6709\u5229\u4E8E\u9605\u8BFB\u548C\u7F16\u8F91\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u5728\u6BCF\u4E00\u884C\u7684\u7ED3\u5C3E\u52A0\u4E0A\u53CD\u659C\u6760\uFF0CBash \u5C31\u4F1A\u5C06\u4E0B\u4E00\u884C\u8DDF\u5F53\u524D\u884C\u653E\u5728\u4E00\u8D77\u89E3\u91CA\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> foo bar

<span class="token comment"># \u7B49\u540C\u4E8E</span>
$ <span class="token builtin class-name">echo</span> foo <span class="token punctuation">\\</span>
bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7A7A\u683C" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u683C" aria-hidden="true">#</a> \u7A7A\u683C</h2><p>Bash \u4F7F\u7528\u7A7A\u683C(\u6216 Tab \u952E)\u533A\u5206\u4E0D\u540C\u7684\u53C2\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">command</span> foo bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C<code>foo</code> \u548C <code>bar</code> \u4E4B\u95F4\u6709\u4E00\u4E2A\u7A7A\u683C\uFF0C\u6240\u4EE5 Bash \u8BA4\u4E3A\u5B83\u4EEC\u662F\u4E24\u4E2A\u53C2\u6570\u3002</p><p>\u5982\u679C\u53C2\u6570\u4E4B\u95F4\u6709\u591A\u4E2A\u7A7A\u683C\uFF0CBash \u4F1A\u81EA\u52A8\u5FFD\u7565\u591A\u4F59\u7684\u7A7A\u683C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> this is a     <span class="token builtin class-name">test</span>
this is a <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C<code>a</code> \u548C <code>test</code> \u4E4B\u95F4\u6709\u591A\u4E2A\u7A7A\u683C\uFF0CBash \u4F1A\u5FFD\u7565\u591A\u4F59\u7684\u7A7A\u683C\u3002</p><h2 id="\u5206\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5206\u53F7" aria-hidden="true">#</a> \u5206\u53F7</h2><p>\u5206\u53F7(<code>;</code>)\u662F\u547D\u4EE4\u7684\u7ED3\u675F\u7B26\uFF0C\u4F7F\u5F97\u4E00\u884C\u53EF\u4EE5\u653E\u7F6E\u591A\u4E2A\u547D\u4EE4\uFF0C\u4E0A\u4E00\u4E2A\u547D\u4EE4\u6267\u884C\u7ED3\u675F\u540E\uFF0C\u518D\u6267\u884C\u7B2C\u4E8C\u4E2A\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">clear</span><span class="token punctuation">;</span> <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0CBash \u5148\u6267\u884C <code>clear</code> \u547D\u4EE4\uFF0C\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u518D\u6267\u884C <code>ls</code> \u547D\u4EE4\u3002</p><p>\u6CE8\u610F\uFF0C\u4F7F\u7528\u5206\u53F7\u65F6\uFF0C\u7B2C\u4E8C\u4E2A\u547D\u4EE4\u603B\u662F\u63A5\u7740\u7B2C\u4E00\u4E2A\u547D\u4EE4\u6267\u884C\uFF0C\u4E0D\u7BA1\u7B2C\u4E00\u4E2A\u547D\u4EE4\u6267\u884C\u6210\u529F\u6216\u5931\u8D25\u3002</p><h2 id="\u547D\u4EE4\u7684\u7EC4\u5408\u7B26-\u548C" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u7684\u7EC4\u5408\u7B26-\u548C" aria-hidden="true">#</a> \u547D\u4EE4\u7684\u7EC4\u5408\u7B26 <code>&amp;&amp;</code> \u548C <code>||</code></h2><p>\u9664\u4E86\u5206\u53F7\uFF0CBash \u8FD8\u63D0\u4F9B\u4E24\u4E2A\u547D\u4EE4\u7EC4\u5408\u7B26 <code>&amp;&amp;</code> \u548C <code>||</code>\uFF0C\u5141\u8BB8\u66F4\u597D\u5730\u63A7\u5236\u591A\u4E2A\u547D\u4EE4\u4E4B\u95F4\u7684\u7EE7\u53D1\u5173\u7CFB\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Command1 <span class="token operator">&amp;&amp;</span> Command2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u7684\u610F\u601D\u662F\uFF0C\u5982\u679C <code>Command1</code> \u547D\u4EE4\u8FD0\u884C\u6210\u529F\uFF0C\u5219\u7EE7\u7EED\u8FD0\u884C <code>Command2</code> \u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Command1 <span class="token operator">||</span> Command2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u7684\u610F\u601D\u662F\uFF0C\u5982\u679C <code>Command1</code> \u547D\u4EE4\u8FD0\u884C\u5931\u8D25\uFF0C\u5219\u7EE7\u7EED\u8FD0\u884C <code>Command2</code> \u547D\u4EE4\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E9B\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> filelist.txt <span class="token punctuation">;</span> <span class="token function">ls</span> -l filelist.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u53EA\u8981 <code>cat</code> \u547D\u4EE4\u6267\u884C\u7ED3\u675F\uFF0C\u4E0D\u7BA1\u6210\u529F\u6216\u5931\u8D25\uFF0C\u90FD\u4F1A\u7EE7\u7EED\u6267\u884C <code>ls</code> \u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> filelist.txt <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span> -l filelist.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u53EA\u6709 <code>cat</code> \u547D\u4EE4\u6267\u884C\u6210\u529F\uFF0C\u624D\u4F1A\u7EE7\u7EED\u6267\u884C <code>ls</code> \u547D\u4EE4\u3002\u5982\u679C <code>cat</code> \u6267\u884C\u5931\u8D25(\u6BD4\u5982\u4E0D\u5B58\u5728\u6587\u4EF6 <code>flielist.txt</code>)\uFF0C\u90A3\u4E48 <code>ls</code> \u547D\u4EE4\u5C31\u4E0D\u4F1A\u6267\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> foo <span class="token operator">||</span> <span class="token function">mkdir</span> bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u53EA\u6709 <code>mkdir foo</code> \u547D\u4EE4\u6267\u884C\u5931\u8D25(\u6BD4\u5982 <code>foo</code> \u76EE\u5F55\u5DF2\u7ECF\u5B58\u5728)\uFF0C\u624D\u4F1A\u7EE7\u7EED\u6267\u884C <code>mkdir bar</code> \u547D\u4EE4\u3002\u5982\u679C <code>mkdir foo</code> \u547D\u4EE4\u6267\u884C\u6210\u529F\uFF0C\u5C31\u4E0D\u4F1A\u521B\u5EFA <code>bar</code> \u76EE\u5F55\u4E86\u3002</p><h2 id="type-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#type-\u547D\u4EE4" aria-hidden="true">#</a> type \u547D\u4EE4</h2><p>Bash \u672C\u8EAB\u5185\u7F6E\u4E86\u5F88\u591A\u547D\u4EE4\uFF0C\u540C\u65F6\u4E5F\u53EF\u4EE5\u6267\u884C\u5916\u90E8\u7A0B\u5E8F\u3002\u600E\u4E48\u77E5\u9053\u4E00\u4E2A\u547D\u4EE4\u662F\u5185\u7F6E\u547D\u4EE4\uFF0C\u8FD8\u662F\u5916\u90E8\u7A0B\u5E8F\u5462?</p><p><code>type</code> \u547D\u4EE4\u7528\u6765\u5224\u65AD\u547D\u4EE4\u7684\u6765\u6E90\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">type</span> <span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> is a shell <span class="token builtin class-name">builtin</span>
$ <span class="token builtin class-name">type</span> <span class="token function">ls</span>
<span class="token function">ls</span> is hashed <span class="token punctuation">(</span>/bin/ls<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>type</code> \u547D\u4EE4\u544A\u8BC9\u6211\u4EEC\uFF0C<code>echo</code> \u662F\u5185\u90E8\u547D\u4EE4\uFF0C<code>ls</code> \u662F\u5916\u90E8\u7A0B\u5E8F (<code>/bin/ls</code>)\u3002</p><p><code>type</code> \u547D\u4EE4\u672C\u8EAB\u4E5F\u662F\u5185\u7F6E\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">type</span> <span class="token builtin class-name">type</span>
<span class="token builtin class-name">type</span> is a shell <span class="token builtin class-name">builtin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8981\u67E5\u770B\u4E00\u4E2A\u547D\u4EE4\u7684\u6240\u6709\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>type</code> \u547D\u4EE4\u7684 <code>-a</code> \u53C2\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">type</span> -a <span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> is shell <span class="token builtin class-name">builtin</span>
<span class="token builtin class-name">echo</span> is /usr/bin/echo
<span class="token builtin class-name">echo</span> is /bin/echo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u8868\u793A\uFF0C<code>echo</code> \u547D\u4EE4\u5373\u662F\u5185\u7F6E\u547D\u4EE4\uFF0C\u4E5F\u6709\u5BF9\u5E94\u7684\u5916\u90E8\u7A0B\u5E8F\u3002</p><p><code>type</code> \u547D\u4EE4\u7684 <code>-t</code> \u53C2\u6570\uFF0C\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u547D\u4EE4\u7684\u7C7B\u578B: \u522B\u540D(alias)\uFF0C\u5173\u952E\u8BCD(keyword)\uFF0C\u51FD\u6570(function)\uFF0C\u5185\u7F6E\u547D\u4EE4(builtin)\u548C\u6587\u4EF6(file)\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">type</span> -t <span class="token function">bash</span>
<span class="token function">file</span>
$ <span class="token builtin class-name">type</span> -t <span class="token keyword">if</span>
keyword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>bash</code> \u662F\u6587\u4EF6\uFF0C<code>if</code> \u662F\u5173\u952E\u8BCD\u3002</p><h2 id="\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u6377\u952E" aria-hidden="true">#</a> \u5FEB\u6377\u952E</h2>`,69),u=e("Bash \u63D0\u4F9B\u5F88\u591A\u5FEB\u6377\u952E\uFF0C\u53EF\u4EE5\u5927\u5927\u65B9\u4FBF\u64CD\u4F5C\u3002\u4E0B\u9762\u662F\u4E00\u4E9B\u6700\u5E38\u7528\u7684\u5FEB\u6377\u952E\uFF0C\u5B8C\u6574\u7684\u4ECB\u7ECD\u53C2\u89C1 "),b=e("\u884C\u64CD\u4F5C"),m=e(" \u4E00\u7AE0\u3002"),v=s("<ul><li><code>Ctrl + L</code>: \u6E05\u9664\u5C4F\u5E55\u5E76\u5C06\u5F53\u524D\u884C\u79FB\u5230\u9875\u9762\u9876\u90E8\u3002</li><li><code>Ctrl + C</code>: \u4E2D\u6B62\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u547D\u4EE4\u3002</li><li><code>Shift + PageUp</code>: \u5411\u4E0A\u6EDA\u52A8\u3002</li><li><code>Shift + PageDown</code>: \u5411\u4E0B\u6EDA\u52A8\u3002</li><li><code>Ctrl + U</code>: \u4ECE\u5149\u6807\u4F4D\u7F6E\u5220\u9664\u5230\u884C\u9996\u3002</li><li><code>Ctrl + K</code>: \u4ECE\u5149\u6807\u4F4D\u7F6E\u5220\u9664\u5230\u884C\u5C3E\u3002</li><li><code>Ctrl + D</code>: \u5173\u95ED Shell \u4F1A\u8BDD\u3002</li><li><code>\u2191</code>\uFF0C<code>\u2193</code>: \u6D4F\u89C8\u5DF2\u6267\u884C\u547D\u4EE4\u7684\u5386\u53F2\u8BB0\u5F55\u3002</li></ul><p>\u9664\u4E86\u4E0A\u9762\u7684\u5FEB\u6377\u952E\uFF0CBash \u8FD8\u5177\u6709\u81EA\u52A8\u8865\u5168\u529F\u80FD\u3002\u547D\u4EE4\u8F93\u5165\u5230\u4E00\u534A\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u6309\u4E0B Tab \u952E\uFF0CBash \u4F1A\u81EA\u52A8\u5B8C\u6210\u5269\u4E0B\u7684\u90E8\u5206\u3002\u6BD4\u5982\uFF0C\u8F93\u5165 <code>pw</code>\uFF0C\u7136\u540E\u6309\u4E00\u4E0B Tab \u952E\uFF0CBash \u4F1A\u81EA\u52A8\u8865\u4E0A <code>d</code>\u3002</p><p>\u9664\u4E86\u547D\u4EE4\u7684\u81EA\u52A8\u8865\u5168\uFF0CBash \u8FD8\u652F\u6301\u8DEF\u5F84\u7684\u81EA\u52A8\u8865\u5168\u3002\u6709\u65F6\uFF0C\u9700\u8981\u8F93\u5165\u5F88\u957F\u7684\u8DEF\u5F84\uFF0C\u8FD9\u65F6\u53EA\u9700\u8981\u8F93\u5165\u524D\u9762\u7684\u90E8\u5206\uFF0C\u7136\u540E\u6309\u4E0B Tab \u952E\uFF0C\u5C31\u4F1A\u81EA\u52A8\u8865\u5168\u540E\u9762\u7684\u90E8\u5206\u3002\u5982\u679C\u6709\u591A\u4E2A\u53EF\u80FD\u7684\u9009\u62E9\uFF0C\u6309\u4E24\u6B21 Tab \u952E\uFF0CBash \u4F1A\u663E\u793A\u6240\u6709\u9009\u9879\uFF0C\u8BA9\u60A8\u9009\u62E9\u3002</p>",3);function h(g,k){const n=t("RouterLink");return i(),d("div",null,[r,l("p",null,[u,c(n,{to:"/linux/bash/readline.html"},{default:o(()=>[b]),_:1}),m]),v])}var x=a(p,[["render",h],["__file","grammar.html.vue"]]);export{x as default};
