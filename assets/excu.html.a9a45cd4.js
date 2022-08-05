import{_ as s,o as n,c as a,e}from"./app.17aa6dfd.js";const l={},o=e(`<p>\u524D\u9762\u8BB2\u8FC7\uFF0C\u5728 Linux \u7CFB\u7EDF\u4E2D\u201C\u4E00\u5207\u7686\u6587\u4EF6\u201D\uFF0CLinux \u547D\u4EE4\u4E5F\u4E0D\u4F8B\u5916\u3002\u90A3\u4E48\uFF0C\u5F53\u7F16\u8F91\u5B8C\u6210 Linux \u547D\u4EE4\u5E76\u56DE\u8F66\u540E\uFF0C\u7CFB\u7EDF\u5E95\u5C42\u5230\u5E95\u53D1\u751F\u4E86\u4EC0\u4E48\u4E8B\u60C5\u5462?</p><p>\u7B80\u5355\u6765\u8BF4\uFF0CLinux \u547D\u4EE4\u7684\u6267\u884C\u8FC7\u7A0B\u5206\u4E3A\u5982\u4E0B 4 \u4E2A\u6B65\u9AA4\u3002</p><ol><li><p>\u5224\u65AD\u8DEF\u5F84</p><p>\u5224\u65AD\u7528\u6237\u662F\u5426\u4EE5\u7EDD\u5BF9\u8DEF\u5F84\u6216\u76F8\u5BF9\u8DEF\u5F84\u7684\u65B9\u5F0F\u8F93\u5165\u547D\u4EE4(\u5982 <code>/bin/ls</code>)\uFF0C\u5982\u679C\u662F\u7684\u8BDD\u76F4\u63A5\u6267\u884C\u3002</p></li><li><p>\u68C0\u67E5\u522B\u540D</p><p>Linux \u7CFB\u7EDF\u4F1A\u68C0\u67E5\u7528\u6237\u8F93\u5165\u7684\u547D\u4EE4\u662F\u5426\u4E3A \u201C\u522B\u540D\u547D\u4EE4\u201D\u3002\u8981\u77E5\u9053\uFF0C\u901A\u8FC7 alias \u547D\u4EE4\u662F\u53EF\u4EE5\u7ED9\u73B0\u6709\u547D\u4EE4\u81EA\u5B9A\u4E49\u522B\u540D\u7684\uFF0C\u5373\u7528\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u547D\u4EE4\u540D\u79F0\u6765\u66FF\u6362\u539F\u672C\u7684\u547D\u4EE4\u540D\u79F0\u3002</p><p>\u4F8B\u5982\uFF0C\u6211\u4EEC\u7ECF\u5E38\u4F7F\u7528\u7684 <code>rm</code> \u547D\u4EE4\uFF0C\u5176\u5B9E\u5C31\u662F <code>rm -i</code> \u8FD9\u4E2A\u6574\u4F53\u7684\u522B\u540D:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">alias</span> <span class="token function">rm</span></span></span>
<span class="token output">alias rm=&#39;rm -i&#39;
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4F7F\u5F97\u5F53\u4F7F\u7528 rm \u547D\u4EE4\u5220\u9664\u6307\u5B9A\u6587\u4EF6\u65F6\uFF0CLinux \u7CFB\u7EDF\u4F1A\u8981\u6C42\u6211\u4EEC\u518D\u6B21\u786E\u8BA4\u662F\u5426\u6267\u884C\u5220\u9664\u64CD\u4F5C\u3002\u4F8B\u5982:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">rm</span> a.txt <span class="token operator">&lt;</span>-- \u5047\u5B9A\u5F53\u524D\u76EE\u5F55\u4E2D\u5DF2\u7ECF\u5B58\u5728 a.txt \u6587\u4EF6</span></span>
<span class="token output">rm: remove regular file &#39;a.txt&#39;? y  &lt;-- \u624B\u52A8\u8F93\u5165 y\uFF0C\u5373\u786E\u5B9A\u5220\u9664
[root@localhost ~]#
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u53EF\u4EE5\u4F7F\u7528 <code>unalias</code> \u547D\u4EE4\uFF0C\u5C06 Linux \u7CFB\u7EDF\u8BBE\u7F6E\u7684 <code>rm</code> \u522B\u540D\u5220\u9664\u6389\uFF0C\u6267\u884C\u547D\u4EE4\u5982\u4E0B:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">alias</span> <span class="token function">rm</span></span></span>
<span class="token output">alias rm=&#39;rm -i&#39;
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">unalias</span> <span class="token function">rm</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">rm</span> a.txt</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span>  <span class="token bash language-bash"><span class="token operator">&lt;</span>--\u76F4\u63A5\u5220\u9664\uFF0C\u4E0D\u518D\u8BE2\u95EE</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5224\u65AD\u662F\u5185\u90E8\u547D\u4EE4\u8FD8\u662F\u5916\u90E8\u547D\u4EE4</p><p>Linux \u547D\u4EE4\u884C\u89E3\u91CA\u5668 (\u53C8\u79F0\u4E3A Shell) \u4F1A\u5224\u65AD\u7528\u6237\u8F93\u5165\u7684\u547D\u4EE4\u662F\u5185\u90E8\u547D\u4EE4\u8FD8\u662F\u5916\u90E8\u547D\u4EE4\u3002\u5176\u4E2D\uFF0C\u5185\u90E8\u547D\u4EE4\u6307\u7684\u662F\u89E3\u91CA\u5668\u5185\u90E8\u7684\u547D\u4EE4\uFF0C\u4F1A\u88AB\u76F4\u63A5\u6267\u884C\uFF1B\u800C\u7528\u6237\u901A\u5E38\u8F93\u5165\u7684\u547D\u4EE4\u90FD\u662F\u5916\u90E8\u547D\u4EE4\uFF0C\u8FD9\u4E9B\u547D\u4EE4\u4EA4\u7ED9\u6B65\u9AA4\u56DB\u7EE7\u7EED\u5904\u7406\u3002 \u5185\u90E8\u547D\u4EE4\u7531 Shell \u81EA\u5E26\uFF0C\u4F1A\u968F\u7740\u7CFB\u7EDF\u542F\u52A8\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4ECE\u5185\u5B58\u4E2D\u8BFB\u53D6\uFF1B\u800C\u5916\u90E8\u547D\u4EE4\u4EC5\u662F\u5728\u7CFB\u7EDF\u4E2D\u6709\u5BF9\u5E94\u7684\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u6267\u884C\u65F6\u9700\u8981\u8BFB\u53D6\u8BE5\u6587\u4EF6\u3002</p><p>\u5224\u65AD\u4E00\u4E2A\u547D\u4EE4\u5C5E\u4E8E\u5185\u90E8\u547D\u4EE4\u8FD8\u662F\u5916\u90E8\u547D\u4EE4\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>type</code> \u547D\u4EE4\u5B9E\u73B0\u3002\u4F8B\u5982:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">type</span> <span class="token builtin class-name">pwd</span></span></span>
<span class="token output">pwd is a shell builtin  &lt;-- pwd\u662F\u5185\u90E8\u547D\u4EE4
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token builtin class-name">type</span> <span class="token function">top</span></span></span>
<span class="token output">top is /usr/bin/top  &lt;-- top\u662F\u5916\u90E8\u547D\u4EE4
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u67E5\u627E\u5916\u90E8\u547D\u4EE4\u5BF9\u5E94\u7684\u53EF\u6267\u884C\u6587\u4EF6</p><p>\u5F53\u7528\u6237\u6267\u884C\u7684\u662F\u5916\u90E8\u547D\u4EE4\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u5728\u6307\u5B9A\u7684\u591A\u4E2A\u8DEF\u5F84\u4E2D\u67E5\u627E\u8BE5\u547D\u4EE4\u7684\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u800C\u5B9A\u4E49\u8FD9\u4E9B\u8DEF\u5F84\u7684\u53D8\u91CF\uFF0C\u5C31\u79F0\u4E3A PATH \u73AF\u5883\u53D8\u91CF\uFF0C\u5176\u4F5C\u7528\u5C31\u662F\u544A\u8BC9 Shell \u5F85\u6267\u884C\u547D\u4EE4\u7684\u53EF\u6267\u884C\u6587\u4EF6\u53EF\u80FD\u5B58\u653E\u7684\u4F4D\u7F6E\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0CShell \u4F1A\u5728 PATH \u53D8\u91CF\u5305\u542B\u7684\u591A\u4E2A\u8DEF\u5F84\u4E2D\u9010\u4E2A\u67E5\u627E\uFF0C\u76F4\u5230\u627E\u5230\u4E3A\u6B62(\u5982\u679C\u627E\u4E0D\u5230\uFF0CShell \u4F1A\u63D0\u4F9B\u7528\u6237\u201C\u627E\u4E0D\u5230\u6B64\u547D\u4EE4\u201D)\u3002</p></li></ol>`,3),p=[o];function t(i,c){return n(),a("div",null,p)}var r=s(l,[["render",t],["__file","excu.html.vue"]]);export{r as default};
