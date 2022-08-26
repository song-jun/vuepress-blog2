import{_ as n,o as s,c as e,e as a}from"./app.cc4bf3f5.js";const i={},d=a(`<div class="custom-container tip"><p class="custom-container-title">GIT</p><p>git\u6307\u4EE4\u64CD\u4F5C<br> \u5E94\u6709\u5C3D\u6709<br> let\u2019s go!<br> ......</p></div><h2 id="\u521D\u59CB\u5316git\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316git\u6D41\u7A0B" aria-hidden="true">#</a> \u521D\u59CB\u5316git\u6D41\u7A0B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6DFB\u52A0\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6587\u4EF6" aria-hidden="true">#</a> \u6DFB\u52A0\u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>  
<span class="token comment"># \u6DFB\u52A0\u6587\u4EF6,git add \u6587\u4EF6\u8DEF\u5F84(\u5355\u4E2A\u6587\u4EF6\u65B9\u5F0F)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D0\u4EA4\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u6CE8\u91CA" aria-hidden="true">#</a> \u63D0\u4EA4\u6CE8\u91CA</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit -m <span class="token string">&quot;sk&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8BBE\u7F6E\u8FDC\u7A0B\u4E3B\u673A" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u8FDC\u7A0B\u4E3B\u673A" aria-hidden="true">#</a> \u8BBE\u7F6E\u8FDC\u7A0B\u4E3B\u673A</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin https://git.coding.net/QQ15994206180/WordPress.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u63A8\u9001\u5230\u8FDC\u7A0B\u4E3B\u673A" tabindex="-1"><a class="header-anchor" href="#\u63A8\u9001\u5230\u8FDC\u7A0B\u4E3B\u673A" aria-hidden="true">#</a> \u63A8\u9001\u5230\u8FDC\u7A0B\u4E3B\u673A</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push -u origin master
<span class="token comment"># \u63A8\u9001\u5230\u8FDC\u7A0B\u4E3B\u673A,\u5982\u679C\u51FA\u73B0![rejected],\u8BF4\u660E\u521D\u6B21\u4F7F\u7528git\u4ED3\u5E93,\u8FDC\u7A0B\u4ED3\u5E93\u4E0E\u672C\u5730\u4ED3\u5E93\u4E0D\u4E00\u81F4,\u9700\u62C9\u4E00\u4E0B,\u4F7F\u7528\u547D\u4EE4git pull --rebase origin master(\u6B64\u547D\u4EE4\u524D\u63D0\u662F\u672C\u5730\u65B0\u5EFA\u4ED3\u5E93\u5E94\u4E3A\u7A7A\u4ED3\u5E93),\u5728\u63A8\u9001\u5C31OK\u4E86.\u4E0B\u6B21\u76F4\u63A5\u4F7F\u7528git push\u5C31OK\u4E86.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u672C\u5730\u4ED3\u5E93\u5173\u8054\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u4ED3\u5E93\u5173\u8054\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u672C\u5730\u4ED3\u5E93\u5173\u8054\u8FDC\u7A0B\u5206\u652F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/master master
<span class="token comment"># \u672C\u5730\u4ED3\u5E93\u5173\u8054\u8FDC\u7A0B\u5206\u652F\uFF08\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528Git pull,Git push\u7B49\u6307\u4EE4\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539\u8FDC\u7A0B\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u8FDC\u7A0B\u5730\u5740" aria-hidden="true">#</a> \u4FEE\u6539\u8FDC\u7A0B\u5730\u5740</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote set-url origin https://e.coding.net/QQ15994206180/blog.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5206\u652F\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u5339\u914D" aria-hidden="true">#</a> \u5206\u652F\u5339\u914D</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global push.default matching
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git\u5168\u5C40name-email\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#git\u5168\u5C40name-email\u4FEE\u6539" aria-hidden="true">#</a> git\u5168\u5C40name,email\u4FEE\u6539</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> credential-manager uninstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u7528\u6237\u540D\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7528\u6237\u540D\u6307\u4EE4" aria-hidden="true">#</a> \u914D\u7F6E\u7528\u6237\u540D\u6307\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name \u7528\u6237\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u90AE\u7BB1\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u90AE\u7BB1\u6307\u4EE4" aria-hidden="true">#</a> \u914D\u7F6E\u90AE\u7BB1\u6307\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.email \u90AE\u7BB1\u5730\u5740
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u914D\u7F6E\u7684\u7528\u6237\u540D\u548C\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u914D\u7F6E\u7684\u7528\u6237\u540D\u548C\u90AE\u7BB1" aria-hidden="true">#</a> \u67E5\u770B\u914D\u7F6E\u7684\u7528\u6237\u540D\u548C\u90AE\u7BB1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u6307\u5B9A\u914D\u7F6E\u9879\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u914D\u7F6E\u9879\u7684\u503C" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u914D\u7F6E\u9879\u7684\u503C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config user.name

<span class="token function">git</span> config user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-\u7F16\u8F91\u6A21\u5F0F\u9000\u51FA" tabindex="-1"><a class="header-anchor" href="#git-\u7F16\u8F91\u6A21\u5F0F\u9000\u51FA" aria-hidden="true">#</a> git \u7F16\u8F91\u6A21\u5F0F\u9000\u51FA</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&quot;:wq+enter\u952E&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u64A4\u56DE\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u64A4\u56DE\u64CD\u4F5C" aria-hidden="true">#</a> \u64A4\u56DE\u64CD\u4F5C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset
<span class="token comment"># \u64A4\u56DEgit add .\u64CD\u4F5C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u6240\u6709\u5206\u652F\u7684\u6240\u6709\u64CD\u4F5C\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709\u5206\u652F\u7684\u6240\u6709\u64CD\u4F5C\u8BB0\u5F55" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709\u5206\u652F\u7684\u6240\u6709\u64CD\u4F5C\u8BB0\u5F55</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6839\u636E\u7248\u672C\u53F7\u64A4\u56DE\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u7248\u672C\u53F7\u64A4\u56DE\u7248\u672C" aria-hidden="true">#</a> \u6839\u636E\u7248\u672C\u53F7\u64A4\u56DE\u7248\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset --hard <span class="token string">&quot;\u7248\u672C\u53F7&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u64A4\u9500\u672C\u5730\u7248\u672C\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500\u672C\u5730\u7248\u672C\u4FEE\u6539" aria-hidden="true">#</a> \u64A4\u9500\u672C\u5730\u7248\u672C\u4FEE\u6539</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5206\u652F" aria-hidden="true">#</a> \u521B\u5EFA\u5206\u652F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch sk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5207\u6362\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u5206\u652F" aria-hidden="true">#</a> \u5207\u6362\u5206\u652F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout sk

<span class="token function">git</span> checkout -b sk
<span class="token comment"># \u521B\u5EFAsk\u5206\u652F,\u5E76\u5207\u6362\u5230sk\u5206\u652F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BB0\u4F4F\u7528\u6237\u540D\u548C\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u8BB0\u4F4F\u7528\u6237\u540D\u548C\u5BC6\u7801" aria-hidden="true">#</a> \u8BB0\u4F4F\u7528\u6237\u540D\u548C\u5BC6\u7801</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># GIT\u4E4Bhttps\u6216http\u65B9\u5F0F\u8BBE\u7F6E\u8BB0\u4F4F\u7528\u6237\u540D\u548C\u5BC6\u7801\u7684\u65B9\u6CD5</span>

<span class="token comment"># \u8BBE\u7F6E\u8BB0\u4F4F\u5BC6\u7801\uFF08\u9ED8\u8BA415\u5206\u949F\uFF09\uFF1A</span>
<span class="token function">git</span> config --global credential.helper cache

<span class="token comment"># \u5982\u679C\u60F3\u81EA\u5DF1\u8BBE\u7F6E\u65F6\u95F4\uFF0C\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A</span>
<span class="token function">git</span> config credential.helper <span class="token string">&#39;cache --timeout=3600&#39;</span>
<span class="token comment"># \u8FD9\u6837\u5C31\u8BBE\u7F6E\u4E00\u4E2A\u5C0F\u65F6\u4E4B\u540E\u5931\u6548</span>

<span class="token comment"># \u957F\u671F\u5B58\u50A8\u5BC6\u7801\uFF1A</span>
<span class="token function">git</span> config --global credential.helper store

<span class="token comment"># \u589E\u52A0\u8FDC\u7A0B\u5730\u5740\u7684\u65F6\u5019\u5E26\u4E0A\u5BC6\u7801\u4E5F\u662F\u53EF\u4EE5\u7684\u3002(\u63A8\u8350)</span>
http://yourname:password@git.oschina.net/name/project.git
<span class="token comment"># \u8865\u5145\uFF1A\u4F7F\u7528\u5BA2\u6237\u7AEF\u4E5F\u53EF\u4EE5\u5B58\u50A8\u5BC6\u7801\u7684\u3002</span>

<span class="token comment"># \u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528ssh\u800C\u4E14\u60F3\u4F53\u9A8Chttps\u5E26\u6765\u7684\u9AD8\u901F\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A \u5207\u6362\u5230\u9879\u76EE\u76EE\u5F55\u4E0B \uFF1A</span>
<span class="token builtin class-name">cd</span> projectfile/
<span class="token comment"># \u79FB\u9664\u8FDC\u7A0Bssh\u65B9\u5F0F\u7684\u4ED3\u5E93\u5730\u5740</span>
<span class="token function">git</span> remote <span class="token function">rm</span> origin

<span class="token comment"># \u589E\u52A0https\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://yourname:password@git.oschina.net/name/project.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u64CD\u4F5C" aria-hidden="true">#</a> \u67E5\u770B\u64CD\u4F5C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6CA1\u63D0\u4EA4\u4E4B\u524D\uFF0C\u67E5\u770B\u66F4\u6539\u5185\u5BB9</span>
<span class="token function">git</span> <span class="token function">diff</span>
<span class="token comment"># \u67E5\u770B\u6240\u6709</span>

<span class="token function">git</span> <span class="token function">diff</span> \u6587\u4EF6\u540D
<span class="token comment"># \u5355\u4E2A\u6587\u4EF6</span>

<span class="token comment"># \u67E5\u770B\u63D0\u4EA4\u8BB0\u5F55</span>

<span class="token function">git</span> log <span class="token function">git</span> log <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> 
<span class="token comment"># \u67E5\u770B\u8BE5\u6587\u4EF6\u6BCF\u6B21\u63D0\u4EA4\u8BB0\u5F55</span>

<span class="token function">git</span> log -p <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
<span class="token comment"># \u67E5\u770B\u6BCF\u6B21\u8BE6\u7EC6\u4FEE\u6539\u5185\u5BB9\u7684diff</span>

<span class="token function">git</span> log -p -2 
<span class="token comment"># \u67E5\u770B\u6700\u8FD1\u4E24\u6B21\u8BE6\u7EC6\u4FEE\u6539\u5185\u5BB9\u7684diff</span>

<span class="token function">git</span> log --stat 
<span class="token comment"># \u67E5\u770B\u63D0\u4EA4\u7EDF\u8BA1\u4FE1\u606F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>git push origin master\u548Cgit push\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</p><ul><li>master\u662F\u4E3B\u5206\u652F\uFF0C\u8FD8\u53EF\u4EE5\u5EFA\u4E00\u4E9B\u5176\u4ED6\u7684\u5206\u652F\u7528\u4E8E\u5F00\u53D1\u3002</li><li>git push origin master\u7684\u610F\u601D\u5C31\u662F\u4E0A\u4F20\u672C\u5730\u5F53\u524D\u5206\u652F\u4EE3\u7801\u5230master\u5206\u652F\u3002git push\u662F\u4E0A\u4F20\u672C\u5730\u6240\u6709\u5206\u652F\u4EE3\u7801\u5230\u8FDC\u7A0B\u5BF9\u5E94\u7684\u5206\u652F\u4E0A\u3002</li></ul>`,47),l=[d];function c(r,t){return s(),e("div",null,l)}var u=n(i,[["render",c],["__file","git.html.vue"]]);export{u as default};
