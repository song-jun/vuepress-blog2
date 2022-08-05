import{_ as s,o as n,c as e,e as a}from"./app.17aa6dfd.js";var i="/vuepress-blog2/assets/git3.5dbe1179.jpg",t="/vuepress-blog2/assets/git4.b1942131.jpg";const d={},c=a('<p>Git \u548C\u5176\u4ED6\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u5982 SVN \u7684\u4E00\u4E2A\u4E0D\u540C\u4E4B\u5904\u5C31\u662F\u6709\u6682\u5B58\u533A\u7684\u6982\u5FF5\u3002</p><h2 id="\u5DE5\u4F5C\u533A-working-directory" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u533A-working-directory" aria-hidden="true">#</a> \u5DE5\u4F5C\u533A(Working Directory)</h2><p>\u5C31\u662F\u60A8\u5728\u7535\u8111\u91CC\u80FD\u770B\u5230\u7684\u76EE\u5F55\uFF0C\u6BD4\u5982 learngit \u6587\u4EF6\u5939\u5C31\u662F\u4E00\u4E2A\u5DE5\u4F5C\u533A:</p><h2 id="\u7248\u672C\u5E93-repository" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u5E93-repository" aria-hidden="true">#</a> \u7248\u672C\u5E93(Repository)</h2><p>\u5DE5\u4F5C\u533A\u6709\u4E00\u4E2A\u9690\u85CF\u76EE\u5F55.git\uFF0C\u8FD9\u4E2A\u4E0D\u7B97\u5DE5\u4F5C\u533A\uFF0C\u800C\u662F Git \u7684\u7248\u672C\u5E93\u3002</p><p>Git \u7684\u7248\u672C\u5E93\u91CC\u5B58\u4E86\u5F88\u591A\u4E1C\u897F\uFF0C\u5176\u4E2D\u6700\u91CD\u8981\u7684\u5C31\u662F\u79F0\u4E3A stage(\u6216\u8005\u53EB index)\u7684\u6682\u5B58\u533A\uFF0C\u8FD8\u6709 Git \u4E3A\u6211\u4EEC\u81EA\u52A8\u521B\u5EFA\u7684\u7B2C\u4E00\u4E2A\u5206\u652F <code>master</code>\uFF0C\u4EE5\u53CA\u6307\u5411 master \u7684\u4E00\u4E2A\u6307\u9488\u53EB <code>HEAD</code>\u3002</p><p><img src="'+i+`" alt="\u7248\u672C\u5E93\u56FE\u4F8B"></p><p>\u524D\u9762\u8BB2\u4E86\u6211\u4EEC\u628A\u6587\u4EF6\u5F80 Git \u7248\u672C\u5E93\u91CC\u6DFB\u52A0\u7684\u65F6\u5019\uFF0C\u63D0\u4EA4\u66F4\u6539\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u628A\u6682\u5B58\u533A\u7684\u6240\u6709\u5185\u5BB9\u63D0\u4EA4\u5230\u5F53\u524D\u5206\u652F\u3002\u6211\u4EEC\u521B\u5EFA Git \u7248\u672C\u5E93\u65F6\uFF0CGit \u81EA\u52A8\u4E3A\u6211\u4EEC\u521B\u5EFA\u4E86\u552F\u4E00\u4E00\u4E2A <code>master</code> \u5206\u652F\uFF0C\u6240\u4EE5\uFF0C\u73B0\u5728\uFF0C<code>git commit</code> \u5C31\u662F\u5F80 master \u5206\u652F\u4E0A\u63D0\u4EA4\u66F4\u6539\u3002</p><p>\u60A8\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A\uFF0C\u9700\u8981\u63D0\u4EA4\u7684\u6587\u4EF6\u4FEE\u6539\u901A\u901A\u653E\u5230\u6682\u5B58\u533A\uFF0C\u7136\u540E\uFF0C\u4E00\u6B21\u6027\u63D0\u4EA4\u6682\u5B58\u533A\u7684\u6240\u6709\u4FEE\u6539\u3002</p><p>\u5148\u5BF9 readme.txt \u505A\u4E2A\u4FEE\u6539\uFF0C\u6BD4\u5982\u52A0\u4E0A\u4E00\u884C\u5185\u5BB9:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u5728\u5DE5\u4F5C\u533A\u65B0\u589E\u4E00\u4E2A LICENSE \u6587\u672C\u6587\u4EF6(\u5185\u5BB9\u968F\u4FBF\u5199)\u3002</p><p>\u5148\u7528 <code>git status</code> \u67E5\u770B\u4E00\u4E0B\u72B6\u6001:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes not staged <span class="token keyword">for</span> commit:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation">)</span>
  <span class="token punctuation">(</span>use <span class="token string">&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes <span class="token keyword">in</span> working directory<span class="token punctuation">)</span>

    modified:   readme.txt

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>

    LICENSE

no changes added to commit <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> and/or <span class="token string">&quot;git commit -a&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git \u975E\u5E38\u6E05\u695A\u5730\u544A\u8BC9\u6211\u4EEC\uFF0Creadme.txt \u88AB\u4FEE\u6539\u4E86\uFF0C\u800C LICENSE \u8FD8\u4ECE\u6765\u6CA1\u6709\u88AB\u6DFB\u52A0\u8FC7\uFF0C\u6240\u4EE5\u5B83\u7684\u72B6\u6001\u662F <code>Untracked</code>\u3002</p><p>\u73B0\u5728\uFF0C\u4F7F\u7528\u4E24\u6B21\u547D\u4EE4 <code>git add</code>\uFF0C\u628A readme.txt \u548C LICENSE \u90FD\u6DFB\u52A0\u540E\uFF0C\u7528 <code>git status</code> \u518D\u67E5\u770B\u4E00\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
Changes to be committed:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation">)</span>

    new file:   LICENSE
    modified:   readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\uFF0C\u6682\u5B58\u533A\u7684\u72B6\u6001\u5C31\u53D8\u6210\u8FD9\u6837\u4E86:</p><p><img src="`+t+`" alt="\u72B6\u6001\u793A\u610F\u56FE"></p><p>\u6240\u4EE5\uFF0C<code>git add</code> \u547D\u4EE4\u5B9E\u9645\u4E0A\u5C31\u662F\u628A\u8981\u63D0\u4EA4\u7684\u6240\u6709\u4FEE\u6539\u653E\u5230\u6682\u5B58\u533A(Stage)\uFF0C\u7136\u540E\uFF0C\u6267\u884C <code>git commit</code> \u5C31\u53EF\u4EE5\u4E00\u6B21\u6027\u628A\u6682\u5B58\u533A\u7684\u6240\u6709\u4FEE\u6539\u63D0\u4EA4\u5230\u5206\u652F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> commit -m <span class="token string">&quot;understand how stage works&quot;</span>
<span class="token punctuation">[</span>master e43a48b<span class="token punctuation">]</span> understand how stage works
 <span class="token number">2</span> files changed, <span class="token number">2</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> LICENSE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u65E6\u63D0\u4EA4\u540E\uFF0C\u5982\u679C\u60A8\u53C8\u6CA1\u6709\u5BF9\u5DE5\u4F5C\u533A\u505A\u4EFB\u4F55\u4FEE\u6539\uFF0C\u90A3\u4E48\u5DE5\u4F5C\u533A\u5C31\u662F\u201C\u5E72\u51C0\u201D\u7684:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status
On branch master
nothing to commit, working tree clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),o=[c];function r(l,u){return n(),e("div",null,o)}var m=s(d,[["render",r],["__file","working-directory.html.vue"]]);export{m as default};
