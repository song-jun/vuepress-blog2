import{_ as l,o as d,c,a as s,b as a,e as i,d as e,r as o}from"./app.238d4ac4.js";const t={},p=i(`<p><code>set</code> \u547D\u4EE4\u662F Bash \u811A\u672C\u7684\u91CD\u8981\u73AF\u8282\uFF0C\u5374\u5E38\u5E38\u88AB\u5FFD\u89C6\uFF0C\u5BFC\u81F4\u811A\u672C\u7684\u5B89\u5168\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u51FA\u95EE\u9898\u3002\u672C\u7AE0\u4ECB\u7ECD <code>set</code> \u7684\u57FA\u672C\u7528\u6CD5\uFF0C\u5E2E\u52A9\u60A8\u5199\u51FA\u66F4\u5B89\u5168\u7684 Bash \u811A\u672C\u3002</p><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>\u6211\u4EEC\u77E5\u9053\uFF0CBash \u6267\u884C\u811A\u672C\u65F6\uFF0C\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5B50 Shell\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">bash</span> script.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>script.sh</code> \u662F\u5728\u4E00\u4E2A\u5B50 Shell \u91CC\u9762\u6267\u884C\u3002\u8FD9\u4E2A\u5B50 Shell \u5C31\u662F\u811A\u672C\u7684\u6267\u884C\u73AF\u5883\uFF0CBash \u9ED8\u8BA4\u7ED9\u5B9A\u4E86\u8FD9\u4E2A\u73AF\u5883\u7684\u5404\u79CD\u53C2\u6570\u3002</p>`,5),r=s("code",null,"set",-1),u=e(" \u547D\u4EE4\u7528\u6765\u4FEE\u6539\u5B50 Shell \u73AF\u5883\u7684\u8FD0\u884C\u53C2\u6570\uFF0C\u5373\u5B9A\u5236\u73AF\u5883\u3002\u4E00\u5171\u6709\u5341\u51E0\u4E2A\u53C2\u6570\u53EF\u4EE5\u5B9A\u5236\uFF0C"),b={href:"https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html",target:"_blank",rel:"noopener noreferrer"},v=e("\u5B98\u65B9\u624B\u518C"),h=e("\u6709\u5B8C\u6574\u6E05\u5355\uFF0C\u672C\u7AE0\u4ECB\u7ECD\u5176\u4E2D\u6700\u5E38\u7528\u7684\u51E0\u4E2A\u3002"),m=i(`<p>\u987A\u4FBF\u63D0\u4E00\u4E0B\uFF0C\u5982\u679C\u547D\u4EE4\u884C\u4E0B\u4E0D\u5E26\u4EFB\u4F55\u53C2\u6570\uFF0C\u76F4\u63A5\u8FD0\u884C <code>set</code>\uFF0C\u4F1A\u663E\u793A\u6240\u6709\u7684\u73AF\u5883\u53D8\u91CF\u548C Shell \u51FD\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="set-u" tabindex="-1"><a class="header-anchor" href="#set-u" aria-hidden="true">#</a> set -u</h2><p>\u6267\u884C\u811A\u672C\u65F6\uFF0C\u5982\u679C\u9047\u5230\u4E0D\u5B58\u5728\u7684\u53D8\u91CF\uFF0CBash \u9ED8\u8BA4\u5FFD\u7565\u5B83\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
<span class="token builtin class-name">echo</span> bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>$a</code> \u662F\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u53D8\u91CF\u3002\u6267\u884C\u7ED3\u679C\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> script.sh

bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>echo $a</code> \u8F93\u51FA\u4E86\u4E00\u4E2A\u7A7A\u884C\uFF0CBash \u5FFD\u7565\u4E86\u4E0D\u5B58\u5728\u7684 <code>$a</code>\uFF0C\u7136\u540E\u7EE7\u7EED\u6267\u884C <code>echo bar</code>\u3002\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E0D\u662F\u5F00\u53D1\u8005\u60F3\u8981\u7684\u884C\u4E3A\uFF0C\u9047\u5230\u53D8\u91CF\u4E0D\u5B58\u5728\uFF0C\u811A\u672C\u5E94\u8BE5\u62A5\u9519\uFF0C\u800C\u4E0D\u662F\u4E00\u58F0\u4E0D\u54CD\u5730\u5F80\u4E0B\u6267\u884C\u3002</p><p><code>set -u</code> \u5C31\u7528\u6765\u6539\u53D8\u8FD9\u79CD\u884C\u4E3A\u3002\u811A\u672C\u5728\u5934\u90E8\u52A0\u4E0A\u5B83\uFF0C\u9047\u5230\u4E0D\u5B58\u5728\u7684\u53D8\u91CF\u5C31\u4F1A\u62A5\u9519\uFF0C\u5E76\u505C\u6B62\u6267\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token builtin class-name">set</span> -u

<span class="token builtin class-name">echo</span> <span class="token variable">$a</span>
<span class="token builtin class-name">echo</span> bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> script.sh
bash: script.sh:\u884C4: a: \u672A\u7ED1\u5B9A\u7684\u53D8\u91CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u811A\u672C\u62A5\u9519\u4E86\uFF0C\u5E76\u4E14\u4E0D\u518D\u6267\u884C\u540E\u9762\u7684\u8BED\u53E5\u3002</p><p><code>-u</code> \u8FD8\u6709\u53E6\u4E00\u79CD\u5199\u6CD5 <code>-o nounset</code>\uFF0C\u4E24\u8005\u662F\u7B49\u4EF7\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">set</span> -o nounset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="set-x" tabindex="-1"><a class="header-anchor" href="#set-x" aria-hidden="true">#</a> set -x</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u811A\u672C\u6267\u884C\u540E\uFF0C\u53EA\u8F93\u51FA\u8FD0\u884C\u7ED3\u679C\uFF0C\u6CA1\u6709\u5176\u4ED6\u5185\u5BB9\u3002\u5982\u679C\u591A\u4E2A\u547D\u4EE4\u8FDE\u7EED\u6267\u884C\uFF0C\u5B83\u4EEC\u7684\u8FD0\u884C\u7ED3\u679C\u5C31\u4F1A\u8FDE\u7EED\u8F93\u51FA\u3002\u6709\u65F6\u4F1A\u5206\u4E0D\u6E05\uFF0C\u67D0\u4E00\u6BB5\u5185\u5BB9\u662F\u4EC0\u4E48\u547D\u4EE4\u4EA7\u751F\u7684\u3002</p><p><code>set -x</code> \u7528\u6765\u5728\u8FD0\u884C\u7ED3\u679C\u4E4B\u524D\uFF0C\u5148\u8F93\u51FA\u6267\u884C\u7684\u90A3\u4E00\u884C\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token builtin class-name">set</span> -x

<span class="token builtin class-name">echo</span> bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u4E0A\u9762\u7684\u811A\u672C\uFF0C\u7ED3\u679C\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> script.sh
+ <span class="token builtin class-name">echo</span> bar
bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6267\u884C <code>echo bar</code> \u4E4B\u524D\uFF0C\u8BE5\u547D\u4EE4\u4F1A\u5148\u6253\u5370\u51FA\u6765\uFF0C\u884C\u9996\u4EE5 <code>+</code> \u8868\u793A\u3002\u8FD9\u5BF9\u4E8E\u8C03\u8BD5\u590D\u6742\u7684\u811A\u672C\u662F\u5F88\u6709\u7528\u7684\u3002</p><p><code>-x</code> \u8FD8\u6709\u53E6\u4E00\u79CD\u5199\u6CD5 <code>-o xtrace</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">set</span> -o xtrace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u811A\u672C\u5F53\u4E2D\u5982\u679C\u8981\u5173\u95ED\u547D\u4EE4\u8F93\u51FA\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>set +x</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token builtin class-name">set</span> -x
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$number</span> <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Number equals 1&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;Number does not equal 1&quot;</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">set</span> +x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u53EA\u5BF9\u7279\u5B9A\u7684\u4EE3\u7801\u6BB5\u6253\u5F00\u547D\u4EE4\u8F93\u51FA\u3002</p><h2 id="bash-\u7684\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#bash-\u7684\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> Bash \u7684\u9519\u8BEF\u5904\u7406</h2><p>\u5982\u679C\u811A\u672C\u91CC\u9762\u6709\u8FD0\u884C\u5931\u8D25\u7684\u547D\u4EE4(\u8FD4\u56DE\u503C\u975E <code>0</code>)\uFF0CBash \u9ED8\u8BA4\u4F1A\u7EE7\u7EED\u6267\u884C\u540E\u9762\u7684\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>

foo
<span class="token builtin class-name">echo</span> bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u811A\u672C\u4E2D\uFF0C<code>foo</code> \u662F\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u547D\u4EE4\uFF0C\u6267\u884C\u65F6\u4F1A\u62A5\u9519\u3002\u4F46\u662F\uFF0CBash \u4F1A\u5FFD\u7565\u8FD9\u4E2A\u9519\u8BEF\uFF0C\u7EE7\u7EED\u5F80\u4E0B\u6267\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> script.sh
script.sh:\u884C3: foo: \u672A\u627E\u5230\u547D\u4EE4
bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0CBash \u53EA\u662F\u663E\u793A\u6709\u9519\u8BEF\uFF0C\u5E76\u6CA1\u6709\u7EC8\u6B62\u6267\u884C\u3002</p><p>\u8FD9\u79CD\u884C\u4E3A\u5F88\u4E0D\u5229\u4E8E\u811A\u672C\u5B89\u5168\u548C\u9664\u9519\u3002\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u5982\u679C\u67D0\u4E2A\u547D\u4EE4\u5931\u8D25\uFF0C\u5F80\u5F80\u9700\u8981\u811A\u672C\u505C\u6B62\u6267\u884C\uFF0C\u9632\u6B62\u9519\u8BEF\u7D2F\u79EF\u3002\u8FD9\u65F6\uFF0C\u4E00\u822C\u91C7\u7528\u4E0B\u9762\u7684\u5199\u6CD5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token operator">||</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u5199\u6CD5\u8868\u793A\u53EA\u8981 <code>command</code> \u6709\u975E\u96F6\u8FD4\u56DE\u503C\uFF0C\u811A\u672C\u5C31\u4F1A\u505C\u6B62\u6267\u884C\u3002</p><p>\u5982\u679C\u505C\u6B62\u6267\u884C\u4E4B\u524D\u9700\u8981\u5B8C\u6210\u591A\u4E2A\u64CD\u4F5C\uFF0C\u5C31\u8981\u91C7\u7528\u4E0B\u9762\u4E09\u79CD\u5199\u6CD5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5199\u6CD5\u4E00</span>
<span class="token builtin class-name">command</span> <span class="token operator">||</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;command failed&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token comment"># \u5199\u6CD5\u4E8C</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token builtin class-name">command</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;command failed&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>

<span class="token comment"># \u5199\u6CD5\u4E09</span>
<span class="token builtin class-name">command</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;command failed&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u5916\uFF0C\u9664\u4E86\u505C\u6B62\u6267\u884C\uFF0C\u8FD8\u6709\u4E00\u79CD\u60C5\u51B5\u3002\u5982\u679C\u4E24\u4E2A\u547D\u4EE4\u6709\u7EE7\u627F\u5173\u7CFB\uFF0C\u53EA\u6709\u7B2C\u4E00\u4E2A\u547D\u4EE4\u6210\u529F\u4E86\uFF0C\u624D\u80FD\u7EE7\u7EED\u6267\u884C\u7B2C\u4E8C\u4E2A\u547D\u4EE4\uFF0C\u90A3\u4E48\u5C31\u8981\u91C7\u7528\u4E0B\u9762\u7684\u5199\u6CD5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>command1 <span class="token operator">&amp;&amp;</span> command2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="set-e" tabindex="-1"><a class="header-anchor" href="#set-e" aria-hidden="true">#</a> set -e</h2><p>\u4E0A\u9762\u8FD9\u4E9B\u5199\u6CD5\u591A\u5C11\u6709\u4E9B\u9EBB\u70E6\uFF0C\u5BB9\u6613\u758F\u5FFD\u3002<code>set -e</code> \u4ECE\u6839\u672C\u4E0A\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5B83\u4F7F\u5F97\u811A\u672C\u53EA\u8981\u53D1\u751F\u9519\u8BEF\uFF0C\u5C31\u7EC8\u6B62\u6267\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token builtin class-name">set</span> -e

foo
<span class="token builtin class-name">echo</span> bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u7ED3\u679C\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> script.sh
script.sh:\u884C4: foo: \u672A\u627E\u5230\u547D\u4EE4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u7B2C 4 \u884C\u6267\u884C\u5931\u8D25\u4EE5\u540E\uFF0C\u811A\u672C\u5C31\u7EC8\u6B62\u6267\u884C\u4E86\u3002</p><p><code>set -e</code> \u6839\u636E\u8FD4\u56DE\u503C\u6765\u5224\u65AD\uFF0C\u4E00\u4E2A\u547D\u4EE4\u662F\u5426\u8FD0\u884C\u5931\u8D25\u3002\u4F46\u662F\uFF0C\u67D0\u4E9B\u547D\u4EE4\u7684\u975E\u96F6\u8FD4\u56DE\u503C\u53EF\u80FD\u4E0D\u8868\u793A\u5931\u8D25\uFF0C\u6216\u8005\u5F00\u53D1\u8005\u5E0C\u671B\u5728\u547D\u4EE4\u5931\u8D25\u7684\u60C5\u51B5\u4E0B\uFF0C\u811A\u672C\u7EE7\u7EED\u6267\u884C\u4E0B\u53BB\u3002\u8FD9\u65F6\u53EF\u4EE5\u6682\u65F6\u5173\u95ED <code>set -e</code>\uFF0C\u8BE5\u547D\u4EE4\u6267\u884C\u7ED3\u675F\u540E\uFF0C\u518D\u91CD\u65B0\u6253\u5F00 <code>set -e</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">set</span> +e
command1
command2
<span class="token builtin class-name">set</span> -e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>set +e</code> \u8868\u793A\u5173\u95ED <code>-e</code> \u9009\u9879\uFF0C<code>set -e</code> \u8868\u793A\u91CD\u65B0\u6253\u5F00 <code>-e</code> \u9009\u9879\u3002</p><p>\u8FD8\u6709\u4E00\u79CD\u65B9\u6CD5\u662F\u4F7F\u7528 <code>command || true</code>\uFF0C\u4F7F\u5F97\u8BE5\u547D\u4EE4\u5373\u4F7F\u6267\u884C\u5931\u8D25\uFF0C\u811A\u672C\u4E5F\u4E0D\u4F1A\u7EC8\u6B62\u6267\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">set</span> -e

foo <span class="token operator">||</span> <span class="token boolean">true</span>
<span class="token builtin class-name">echo</span> bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>true</code> \u4F7F\u5F97\u8FD9\u4E00\u884C\u8BED\u53E5\u603B\u662F\u4F1A\u6267\u884C\u6210\u529F\uFF0C\u540E\u9762\u7684 <code>echo bar</code> \u4F1A\u6267\u884C\u3002</p><p><code>-e</code> \u8FD8\u6709\u53E6\u4E00\u79CD\u5199\u6CD5 <code>-o errexit</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">set</span> -o errexit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="set-o-pipefail" tabindex="-1"><a class="header-anchor" href="#set-o-pipefail" aria-hidden="true">#</a> set -o pipefail</h2><p><code>set -e</code> \u6709\u4E00\u4E2A\u4F8B\u5916\u60C5\u51B5\uFF0C\u5C31\u662F\u4E0D\u9002\u7528\u4E8E\u7BA1\u9053\u547D\u4EE4\u3002</p><p>\u6240\u8C13\u7BA1\u9053\u547D\u4EE4\uFF0C\u5C31\u662F\u591A\u4E2A\u5B50\u547D\u4EE4\u901A\u8FC7\u7BA1\u9053\u8FD0\u7B97\u7B26 (<code>|</code>) \u7EC4\u5408\u6210\u4E3A\u4E00\u4E2A\u5927\u7684\u547D\u4EE4\u3002Bash \u4F1A\u628A\u6700\u540E\u4E00\u4E2A\u5B50\u547D\u4EE4\u7684\u8FD4\u56DE\u503C\uFF0C\u4F5C\u4E3A\u6574\u4E2A\u547D\u4EE4\u7684\u8FD4\u56DE\u503C\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EA\u8981\u6700\u540E\u4E00\u4E2A\u5B50\u547D\u4EE4\u4E0D\u5931\u8D25\uFF0C\u7BA1\u9053\u547D\u4EE4\u603B\u662F\u4F1A\u6267\u884C\u6210\u529F\uFF0C\u56E0\u6B64\u5B83\u540E\u9762\u547D\u4EE4\u4F9D\u7136\u4F1A\u6267\u884C\uFF0C<code>set -e</code> \u5C31\u5931\u6548\u4E86\u3002</p><p>\u8BF7\u770B\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token builtin class-name">set</span> -e

foo <span class="token operator">|</span> <span class="token builtin class-name">echo</span> a
<span class="token builtin class-name">echo</span> bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u7ED3\u679C\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> script.sh
a
script.sh:\u884C4: foo: \u672A\u627E\u5230\u547D\u4EE4
bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>foo</code> \u662F\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u547D\u4EE4\uFF0C\u4F46\u662F <code>foo | echo a</code> \u8FD9\u4E2A\u7BA1\u9053\u547D\u4EE4\u4F1A\u6267\u884C\u6210\u529F\uFF0C\u5BFC\u81F4\u540E\u9762\u7684 <code>echo bar</code> \u4F1A\u7EE7\u7EED\u6267\u884C\u3002</p><p><code>set -o pipefail</code> \u7528\u6765\u89E3\u51B3\u8FD9\u79CD\u60C5\u51B5\uFF0C\u53EA\u8981\u4E00\u4E2A\u5B50\u547D\u4EE4\u5931\u8D25\uFF0C\u6574\u4E2A\u7BA1\u9053\u547D\u4EE4\u5C31\u5931\u8D25\uFF0C\u811A\u672C\u5C31\u4F1A\u7EC8\u6B62\u6267\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token builtin class-name">set</span> -eo pipefail

foo <span class="token operator">|</span> <span class="token builtin class-name">echo</span> a
<span class="token builtin class-name">echo</span> bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u540E\uFF0C\u7ED3\u679C\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> script.sh
a
script.sh:\u884C4: foo: \u672A\u627E\u5230\u547D\u4EE4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>echo bar</code> \u6CA1\u6709\u6267\u884C\u3002</p><h2 id="\u5176\u4ED6\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u53C2\u6570" aria-hidden="true">#</a> \u5176\u4ED6\u53C2\u6570</h2><p><code>set</code> \u547D\u4EE4\u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6\u53C2\u6570\u3002</p><ul><li><code>set -n</code>: \u7B49\u540C\u4E8E <code>set -o noexec</code>\uFF0C\u4E0D\u8FD0\u884C\u547D\u4EE4\uFF0C\u53EA\u68C0\u67E5\u8BED\u6CD5\u662F\u5426\u6B63\u786E\u3002</li><li><code>set -f</code>: \u7B49\u540C\u4E8E <code>set -o noglob</code>\uFF0C\u8868\u793A\u4E0D\u5BF9\u901A\u914D\u7B26\u8FDB\u884C\u6587\u4EF6\u540D\u6269\u5C55\u3002</li><li><code>set -v</code>: \u7B49\u540C\u4E8E <code>set -o verbose</code>\uFF0C\u8868\u793A\u6253\u5370 Shell \u63A5\u6536\u5230\u7684\u6BCF\u4E00\u884C\u8F93\u5165\u3002</li></ul><p>\u4E0A\u9762\u7684 <code>-f</code> \u548C <code>-v</code> \u53C2\u6570\uFF0C\u53EF\u4EE5\u5206\u522B\u4F7F\u7528 <code>set +f</code>\u3001<code>set +v</code> \u5173\u95ED\u3002</p><h2 id="set-\u547D\u4EE4\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#set-\u547D\u4EE4\u603B\u7ED3" aria-hidden="true">#</a> set \u547D\u4EE4\u603B\u7ED3</h2><p>\u4E0A\u9762\u91CD\u70B9\u4ECB\u7ECD\u7684 <code>set</code> \u547D\u4EE4\u7684\u56DB\u4E2A\u53C2\u6570\uFF0C\u4E00\u822C\u90FD\u653E\u5728\u4E00\u8D77\u4F7F\u7528\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5199\u6CD5\u4E00</span>
<span class="token builtin class-name">set</span> -euxo pipefail

<span class="token comment"># \u5199\u6CD5\u4E8C</span>
<span class="token builtin class-name">set</span> -eux
<span class="token builtin class-name">set</span> -o pipefail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E24\u79CD\u5199\u6CD5\u5EFA\u8BAE\u653E\u5728\u6240\u6709 Bash \u811A\u672C\u7684\u5934\u90E8\u3002</p><p>\u53E6\u4E00\u79CD\u529E\u6CD5\u662F\u5728\u6267\u884C Bash \u811A\u672C\u7684\u65F6\u5019\uFF0C\u4ECE\u547D\u4EE4\u884C\u4F20\u5165\u8FD9\u4E9B\u53C2\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">bash</span> -euxo pipefail script.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="shopt-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#shopt-\u547D\u4EE4" aria-hidden="true">#</a> shopt \u547D\u4EE4</h2><p><code>shopt</code> \u547D\u4EE4\u7528\u6765\u8C03\u6574 Shell \u7684\u53C2\u6570\uFF0C\u8DDF <code>set</code> \u547D\u4EE4\u7684\u4F5C\u7528\u5F88\u7C7B\u4F3C\u3002\u4E4B\u6240\u4EE5\u4F1A\u6709\u8FD9\u4E24\u4E2A\u7C7B\u4F3C\u547D\u4EE4\u7684\u4E3B\u8981\u539F\u56E0\u662F\uFF0C<code>set</code> \u662F\u4ECE Ksh \u7EE7\u627F\u7684\uFF0C\u5C5E\u4E8E POSIX \u89C4\u8303\u7684\u4E00\u90E8\u5206\uFF0C\u800C <code>shopt</code> \u662F Bash \u7279\u6709\u7684\u3002</p><p>\u76F4\u63A5\u8F93\u5165 <code>shopt</code> \u53EF\u4EE5\u67E5\u770B\u6240\u6709\u53C2\u6570\uFF0C\u4EE5\u53CA\u5B83\u4EEC\u5404\u81EA\u6253\u5F00\u548C\u5173\u95ED\u7684\u72B6\u6001\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">shopt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>shopt</code> \u547D\u4EE4\u540E\u9762\u8DDF\u7740\u53C2\u6570\u540D\uFF0C\u53EF\u4EE5\u67E5\u8BE2\u8BE5\u53C2\u6570\u662F\u5426\u6253\u5F00\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">shopt</span> globstar
globstar  off
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u8868\u793A <code>globstar</code> \u53C2\u6570\u9ED8\u8BA4\u662F\u5173\u95ED\u7684\u3002</p><ol><li><p><strong><code>-s</code></strong></p><p><code>-s</code> \u7528\u6765\u6253\u5F00\u67D0\u4E2A\u53C2\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">shopt</span> -s optionNameHere
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong><code>-u</code></strong></p><p><code>-u</code> \u7528\u6765\u5173\u95ED\u67D0\u4E2A\u53C2\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">shopt</span> -u optionNameHere
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E3E\u4F8B\u6765\u8BF4\uFF0C<code>histappend</code> \u8FD9\u4E2A\u53C2\u6570\u8868\u793A\u9000\u51FA\u5F53\u524D Shell \u65F6\uFF0C\u5C06\u64CD\u4F5C\u5386\u53F2\u8FFD\u52A0\u5230\u5386\u53F2\u6587\u4EF6\u4E2D\u3002\u8FD9\u4E2A\u53C2\u6570\u9ED8\u8BA4\u662F\u6253\u5F00\u7684\uFF0C\u5982\u679C\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u5C06\u5176\u5173\u95ED\uFF0C\u90A3\u4E48\u5F53\u524D Shell \u7684\u64CD\u4F5C\u5386\u53F2\u5C06\u66FF\u6362\u6389\u6574\u4E2A\u5386\u53F2\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">shopt</span> -u histappend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong><code>-q</code></strong></p><p><code>-q</code> \u7684\u4F5C\u7528\u4E5F\u662F\u67E5\u8BE2\u67D0\u4E2A\u53C2\u6570\u662F\u5426\u6253\u5F00\uFF0C\u4F46\u4E0D\u662F\u76F4\u63A5\u8F93\u51FA\u67E5\u8BE2\u7ED3\u679C\uFF0C\u800C\u662F\u901A\u8FC7\u547D\u4EE4\u7684\u6267\u884C\u72B6\u6001 (<code>$?</code>) \u8868\u793A\u67E5\u8BE2\u7ED3\u679C\u3002\u5982\u679C\u72B6\u6001\u4E3A <code>0</code>\uFF0C\u8868\u793A\u8BE5\u53C2\u6570\u6253\u5F00\uFF1B\u5982\u679C\u4E3A <code>1</code>\uFF0C\u8868\u793A\u8BE5\u53C2\u6570\u5173\u95ED\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">shopt</span> -q globstar
$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u67E5\u8BE2 <code>globstar</code> \u53C2\u6570\u662F\u5426\u6253\u5F00\u3002\u8FD4\u56DE\u72B6\u6001\u4E3A <code>1</code>\uFF0C\u8868\u793A\u8BE5\u53C2\u6570\u662F\u5173\u95ED\u7684\u3002</p><p>\u8FD9\u4E2A\u7528\u6CD5\u4E3B\u8981\u7528\u4E8E\u811A\u672C\uFF0C\u4F9B <code>if</code> \u6761\u4EF6\u7ED3\u6784\u4F7F\u7528\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token builtin class-name">shopt</span> -q globstar<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token punctuation">..</span>.
<span class="token keyword">if</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,86),g={href:"https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html",target:"_blank",rel:"noopener noreferrer"},k=e("The Set built-in"),f={href:"https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/",target:"_blank",rel:"noopener noreferrer"},x=e("Safer bash scripts with 'set -euxo pipefail\u2019"),_={href:"http://www.davidpashley.com/articles/writing-robust-shell-scripts/",target:"_blank",rel:"noopener noreferrer"},w=e("Writing Robust Bash Shell Scripts");function q(B,$){const n=o("ExternalLinkIcon");return d(),c("div",null,[p,s("p",null,[r,u,s("a",b,[v,a(n)]),h]),m,s("ul",null,[s("li",null,[s("a",g,[k,a(n)])]),s("li",null,[s("a",f,[x,a(n)])]),s("li",null,[s("a",_,[w,a(n)])])])])}var y=l(t,[["render",q],["__file","set.html.vue"]]);export{y as default};
