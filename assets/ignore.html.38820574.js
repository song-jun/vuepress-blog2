import{_ as a,o as c,c as o,a as n,b as d,e as s,d as e,r as t}from"./app.238d4ac4.js";const l={},r=s(`<p>\u6709\u4E9B\u65F6\u5019\uFF0C\u60A8\u5FC5\u987B\u628A\u67D0\u4E9B\u6587\u4EF6\u653E\u5230 Git \u5DE5\u4F5C\u76EE\u5F55\u4E2D\uFF0C\u4F46\u53C8\u4E0D\u80FD\u63D0\u4EA4\u5B83\u4EEC\uFF0C\u6BD4\u5982\u4FDD\u5B58\u4E86\u6570\u636E\u5E93\u5BC6\u7801\u7684\u914D\u7F6E\u6587\u4EF6\u5566\uFF0C\u7B49\u7B49\uFF0C\u6BCF\u6B21 <code>git status</code> \u90FD\u4F1A\u663E\u793A <code>Untracked files</code> ...\uFF0C\u6709\u5F3A\u8FEB\u75C7\u7684\u7AE5\u978B\u5FC3\u91CC\u80AF\u5B9A\u4E0D\u723D\u3002</p><p>\u597D\u5728 Git \u8003\u8651\u5230\u4E86\u5927\u5BB6\u7684\u611F\u53D7\uFF0C\u8FD9\u4E2A\u95EE\u9898\u89E3\u51B3\u8D77\u6765\u4E5F\u5F88\u7B80\u5355\uFF0C\u5728 Git \u5DE5\u4F5C\u533A\u7684\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u7279\u6B8A\u7684 <code>.gitignore</code> \u6587\u4EF6\uFF0C\u7136\u540E\u628A\u8981\u5FFD\u7565\u7684\u6587\u4EF6\u540D\u586B\u8FDB\u53BB\uFF0CGit \u5C31\u4F1A\u81EA\u52A8\u5FFD\u7565\u8FD9\u4E9B\u6587\u4EF6\u3002</p><p>\u5FFD\u7565\u6587\u4EF6\u7684\u539F\u5219\u662F:</p><ul><li>\u5FFD\u7565\u64CD\u4F5C\u7CFB\u7EDF\u81EA\u52A8\u751F\u6210\u7684\u6587\u4EF6\uFF0C\u6BD4\u5982\u7F29\u7565\u56FE\u7B49\uFF1B</li><li>\u5FFD\u7565\u7F16\u8BD1\u751F\u6210\u7684\u4E2D\u95F4\u6587\u4EF6\u3001\u53EF\u6267\u884C\u6587\u4EF6\u7B49\uFF0C\u4E5F\u5C31\u662F\u5982\u679C\u4E00\u4E2A\u6587\u4EF6\u662F\u901A\u8FC7\u53E6\u4E00\u4E2A\u6587\u4EF6\u81EA\u52A8\u751F\u6210\u7684\uFF0C\u90A3\u81EA\u52A8\u751F\u6210\u7684\u6587\u4EF6\u5C31\u6CA1\u5FC5\u8981\u653E\u8FDB\u7248\u672C\u5E93\uFF0C\u6BD4\u5982 Java \u7F16\u8BD1\u4EA7\u751F\u7684 <code>.class</code> \u6587\u4EF6\uFF1B</li><li>\u5FFD\u7565\u60A8\u81EA\u5DF1\u7684\u5E26\u6709\u654F\u611F\u4FE1\u606F\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6BD4\u5982\u5B58\u653E\u53E3\u4EE4\u7684\u914D\u7F6E\u6587\u4EF6\u3002</li></ul><p>\u4E3E\u4E2A\u4F8B\u5B50:</p><p>\u5047\u8BBE\u60A8\u5728 Windows \u4E0B\u8FDB\u884C Python \u5F00\u53D1\uFF0CWindows \u4F1A\u81EA\u52A8\u5728\u6709\u56FE\u7247\u7684\u76EE\u5F55\u4E0B\u751F\u6210\u9690\u85CF\u7684\u7F29\u7565\u56FE\u6587\u4EF6\uFF0C\u5982\u679C\u6709\u81EA\u5B9A\u4E49\u76EE\u5F55\uFF0C\u76EE\u5F55\u4E0B\u5C31\u4F1A\u6709 <code>Desktop.ini</code> \u6587\u4EF6\uFF0C\u56E0\u6B64\u60A8\u9700\u8981\u5FFD\u7565 Windows \u81EA\u52A8\u751F\u6210\u7684\u5783\u573E\u6587\u4EF6:</p><div class="language-gitignore ext-gitignore line-numbers-mode"><pre class="language-gitignore"><code><span class="token entry string">Thumbs.db</span>
<span class="token entry string">ehthumbs.db</span>
<span class="token entry string">Desktop.ini</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u7EE7\u7EED\u5FFD\u7565 Python \u7F16\u8BD1\u4EA7\u751F\u7684 <code>.pyc</code>\u3001<code>.pyo</code>\u3001<code>dist</code> \u7B49\u6587\u4EF6\u6216\u76EE\u5F55:</p><div class="language-gitignore ext-gitignore line-numbers-mode"><pre class="language-gitignore"><code><span class="token entry string">_.py<span class="token regex">[cod]</span></span>
<span class="token entry string">_.so</span>
<span class="token entry string">_.egg</span>
<span class="token entry string">_.egg-info</span>
<span class="token entry string">dist</span>
<span class="token entry string">build</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u52A0\u4E0A\u60A8\u81EA\u5DF1\u5B9A\u4E49\u7684\u6587\u4EF6\uFF0C\u6700\u7EC8\u5F97\u5230\u4E00\u4E2A\u5B8C\u6574\u7684 <code>.gitignore</code> \u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B:</p><div class="language-gitignore ext-gitignore line-numbers-mode"><pre class="language-gitignore"><code><span class="token comment"># Windows:</span>

<span class="token entry string">Thumbs.db</span>
<span class="token entry string">ehthumbs.db</span>
<span class="token entry string">Desktop.ini</span>

<span class="token comment"># Python:</span>

<span class="token entry string">_.py<span class="token regex">[cod]</span></span>
<span class="token entry string">_.so</span>
<span class="token entry string">_.egg</span>
<span class="token entry string">_.egg-info</span>
<span class="token entry string">dist</span>
<span class="token entry string">build</span>

<span class="token comment"># My configurations:</span>

<span class="token entry string">db.ini</span>
<span class="token entry string">deploy_key_rsa</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u4E00\u6B65\u5C31\u662F\u628A <code>.gitignore</code> \u4E5F\u63D0\u4EA4\u5230 Git\uFF0C\u5C31\u5B8C\u6210\u4E86! \u5F53\u7136\u68C0\u9A8C <code>.gitignore</code> \u7684\u6807\u51C6\u662F <code>git status</code> \u547D\u4EE4\u662F\u4E0D\u662F\u8BF4 <code>working directory clean</code>\u3002</p><p>\u4F7F\u7528 Windows \u7684\u7AE5\u978B\u6CE8\u610F\u4E86\uFF0C\u5982\u679C\u60A8\u5728\u8D44\u6E90\u7BA1\u7406\u5668\u91CC\u65B0\u5EFA\u4E00\u4E2A <code>.gitignore</code> \u6587\u4EF6\uFF0C\u5B83\u4F1A\u975E\u5E38\u5F31\u667A\u5730\u63D0\u793A\u60A8\u5FC5\u987B\u8F93\u5165\u6587\u4EF6\u540D\uFF0C\u4F46\u662F\u5728\u6587\u672C\u7F16\u8F91\u5668\u91CC\u201C\u4FDD\u5B58\u201D\u6216\u8005\u201C\u53E6\u5B58\u4E3A\u201D\u5C31\u53EF\u4EE5\u628A\u6587\u4EF6\u4FDD\u5B58\u4E3A <code>.gitignore</code> \u4E86\u3002</p><p>\u6709\u4E9B\u65F6\u5019\uFF0C\u60A8\u60F3\u6DFB\u52A0\u4E00\u4E2A\u6587\u4EF6\u5230 Git\uFF0C\u4F46\u53D1\u73B0\u6DFB\u52A0\u4E0D\u4E86\uFF0C\u539F\u56E0\u662F\u8FD9\u4E2A\u6587\u4EF6\u88AB <code>.gitignore</code> \u5FFD\u7565\u4E86:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> App.class
The following paths are ignored by one of your .gitignore files:
App.class
Use -f <span class="token keyword">if</span> you really want to <span class="token function">add</span> them.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60A8\u786E\u5B9E\u60F3\u6DFB\u52A0\u8BE5\u6587\u4EF6\uFF0C\u53EF\u4EE5\u7528 <code>-f</code> \u5F3A\u5236\u6DFB\u52A0\u5230 Git:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> -f App.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u8005\u60A8\u53D1\u73B0\uFF0C\u53EF\u80FD\u662F <code>.gitignore</code> \u5199\u5F97\u6709\u95EE\u9898\uFF0C\u9700\u8981\u627E\u51FA\u6765\u5230\u5E95\u54EA\u4E2A\u89C4\u5219\u5199\u9519\u4E86\uFF0C\u53EF\u4EE5\u7528 <code>git check-ignore</code> \u547D\u4EE4\u68C0\u67E5:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> check-ignore -v App.class
.gitignore:3:*.class    App.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Git \u4F1A\u544A\u8BC9\u6211\u4EEC\uFF0C<code>.gitignore</code> \u7684\u7B2C 3 \u884C\u89C4\u5219\u5FFD\u7565\u4E86\u8BE5\u6587\u4EF6\uFF0C\u4E8E\u662F\u6211\u4EEC\u5C31\u53EF\u4EE5\u77E5\u9053\u5E94\u8BE5\u4FEE\u8BA2\u54EA\u4E2A\u89C4\u5219\u3002</p><h2 id="\u683C\u5F0F\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u89C4\u8303" aria-hidden="true">#</a> \u683C\u5F0F\u89C4\u8303</h2><ul><li><p>\u6240\u6709\u7A7A\u884C\u6216\u8005\u4EE5 # \u5F00\u5934\u7684\u884C\u90FD\u4F1A\u88AB Git \u5FFD\u7565\u3002</p></li><li><p>\u53EF\u4EE5\u4F7F\u7528\u6807\u51C6\u7684 glob \u6A21\u5F0F\u5339\u914D\uFF0C\u5B83\u4F1A\u9012\u5F52\u5730\u5E94\u7528\u5728\u6574\u4E2A\u5DE5\u4F5C\u533A\u4E2D\u3002</p></li><li><p>\u5339\u914D\u6A21\u5F0F\u53EF\u4EE5\u4EE5(<code>/</code>)\u5F00\u5934\u9632\u6B62\u9012\u5F52\u3002</p></li><li><p>\u5339\u914D\u6A21\u5F0F\u53EF\u4EE5\u4EE5(<code>/</code>)\u7ED3\u5C3E\u6307\u5B9A\u76EE\u5F55\u3002</p></li><li><p>\u8981\u5FFD\u7565\u6307\u5B9A\u6A21\u5F0F\u4EE5\u5916\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u53EF\u4EE5\u5728\u6A21\u5F0F\u524D\u52A0\u4E0A\u53F9\u53F7(<code>!</code>)\u53D6\u53CD\u3002</p></li></ul><div class="custom-container tip"><p class="custom-container-title">glob \u6A21\u5F0F</p><p>\u6240\u8C13\u7684 glob \u6A21\u5F0F\u662F\u6307 shell \u6240\u4F7F\u7528\u7684\u7B80\u5316\u4E86\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u661F\u53F7(<code>*</code>)\u5339\u914D\u96F6\u4E2A\u6216\u591A\u4E2A\u4EFB\u610F\u5B57\u7B26\uFF1B<code>[abc]</code> \u5339\u914D\u4EFB\u4F55\u4E00\u4E2A\u5217\u5728\u65B9\u62EC\u53F7\u4E2D\u7684\u5B57\u7B26 (\u8FD9\u4E2A\u4F8B\u5B50\u8981\u4E48\u5339\u914D\u4E00\u4E2A <code>a</code>\uFF0C\u8981\u4E48\u5339\u914D\u4E00\u4E2A <code>b</code>\uFF0C\u8981\u4E48\u5339\u914D\u4E00\u4E2A <code>c</code>)\uFF1B \u95EE\u53F7(<code>?</code>)\u53EA\u5339\u914D\u4E00\u4E2A\u4EFB\u610F\u5B57\u7B26\uFF1B\u5982\u679C\u5728\u65B9\u62EC\u53F7\u4E2D\u4F7F\u7528\u77ED\u5212\u7EBF\u5206\u9694\u4E24\u4E2A\u5B57\u7B26\uFF0C \u8868\u793A\u6240\u6709\u5728\u8FD9\u4E24\u4E2A\u5B57\u7B26\u8303\u56F4\u5185\u7684\u90FD\u53EF\u4EE5\u5339\u914D(\u6BD4\u5982 <code>[0-9]</code> \u8868\u793A\u5339\u914D\u6240\u6709 <code>0</code> \u5230 <code>9</code> \u7684\u6570\u5B57)\u3002\u4F7F\u7528\u4E24\u4E2A\u661F\u53F7(<code>**</code>)\u8868\u793A\u5339\u914D\u4EFB\u610F\u4E2D\u95F4\u76EE\u5F55\uFF0C\u6BD4\u5982 <code>a/**/z</code> \u53EF\u4EE5\u5339\u914D <code>a/z</code> \u3001<code>a/b/z</code> \u6216 <code>a/b/c/z</code> \u7B49\u3002</p></div><p>\u4E00\u4E2A\u5177\u4F53\u7684\u4F8B\u5B50:</p><div class="language-gitignore ext-gitignore line-numbers-mode"><pre class="language-gitignore"><code><span class="token comment"># \u5FFD\u7565\u6240\u6709\u7684 .a \u6587\u4EF6</span>
<span class="token entry string"><span class="token operator">*</span>.a</span>

<span class="token comment"># \u4F46\u8DDF\u8E2A\u6240\u6709\u7684 lib.a\uFF0C\u5373\u4FBF\u60A8\u5728\u524D\u9762\u5FFD\u7565\u4E86 .a \u6587\u4EF6</span>
<span class="token entry string"><span class="token operator">!</span>lib.a</span>

<span class="token comment"># \u53EA\u5FFD\u7565\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 TODO \u6587\u4EF6\uFF0C\u800C\u4E0D\u5FFD\u7565 subdir/TODO</span>
<span class="token entry string"><span class="token punctuation">/</span>TODO</span>

<span class="token comment"># \u5FFD\u7565\u4EFB\u4F55\u76EE\u5F55\u4E0B\u540D\u4E3A build \u7684\u6587\u4EF6\u5939</span>
<span class="token entry string">build<span class="token punctuation">/</span></span>

<span class="token comment"># \u5FFD\u7565 doc/notes.txt\uFF0C\u4F46\u4E0D\u5FFD\u7565 doc/server/arch.txt</span>
<span class="token entry string">doc<span class="token punctuation">/</span><span class="token operator">*</span>.txt</span>

<span class="token comment"># \u5FFD\u7565 doc/ \u76EE\u5F55\u53CA\u5176\u6240\u6709\u5B50\u76EE\u5F55\u4E0B\u7684 .pdf \u6587\u4EF6</span>
<span class="token entry string">doc<span class="token punctuation">/</span><span class="token operator">**</span><span class="token punctuation">/</span><span class="token operator">*</span>.pdf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),p={class:"custom-container tip"},g=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),v=e("GitHub \u6709\u4E00\u4E2A\u5341\u5206\u8BE6\u7EC6\u7684\u9488\u5BF9\u6570\u5341\u79CD\u9879\u76EE\u53CA\u8BED\u8A00\u7684 .gitignore \u6587\u4EF6\u5217\u8868\uFF0C \u60A8\u53EF\u4EE5\u5728 "),u={href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"},m=e("https://github.com/github/gitignore"),b=e(" \u627E\u5230\u5B83\u3002"),k=s('<div class="custom-container tip"><p class="custom-container-title">\u591A\u4E2A .gitignore</p><p>\u5728\u6700\u7B80\u5355\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E2A\u4ED3\u5E93\u53EF\u80FD\u53EA\u6839\u76EE\u5F55\u4E0B\u6709\u4E00\u4E2A .gitignore \u6587\u4EF6\uFF0C\u5B83\u9012\u5F52\u5730\u5E94\u7528\u5230\u6574\u4E2A\u4ED3\u5E93\u4E2D\u3002\u7136\u800C\uFF0C\u5B50\u76EE\u5F55\u4E0B\u4E5F\u53EF\u4EE5\u6709\u989D\u5916\u7684 .gitignore \u6587\u4EF6\u3002\u5B50\u76EE\u5F55\u4E2D\u7684 .gitignore \u6587\u4EF6\u4E2D\u7684\u89C4\u5219\u53EA\u4F5C\u7528\u4E8E\u5B83\u6240\u5728\u7684\u76EE\u5F55\u4E2D\u3002(Linux \u5185\u6838\u7684\u6E90\u7801\u5E93\u62E5\u6709 206 \u4E2A .gitignore \u6587\u4EF6\u3002)</p></div><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><ul><li><p>\u5FFD\u7565\u67D0\u4E9B\u6587\u4EF6\u65F6\uFF0C\u9700\u8981\u7F16\u5199 <code>.gitignore</code>\uFF1B</p></li><li><p><code>.gitignore</code> \u6587\u4EF6\u672C\u8EAB\u8981\u653E\u5230\u7248\u672C\u5E93\u91CC\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5BF9 <code>.gitignore</code> \u505A\u7248\u672C\u7BA1\u7406!</p></li></ul>',3);function h(y,_){const i=t("ExternalLinkIcon");return c(),o("div",null,[r,n("div",p,[g,n("p",null,[v,n("a",u,[m,d(i)]),b])]),k])}var x=a(l,[["render",h],["__file","ignore.html.vue"]]);export{x as default};