import{_ as s,o as n,c as o,e}from"./app.238d4ac4.js";var l="/vuepress-blog2/assets/hardlink.b0aa00dc.jpg",a="/vuepress-blog2/assets/softlink.e533eb8e.jpg";const t={},i=e(`<p>\u5EFA\u7ACB\u786C\u94FE\u63A5\u548C\u8F6F\u94FE\u63A5\u975E\u5E38\u7B80\u5355\uFF0C\u90A3\u8FD9\u4E24\u79CD\u94FE\u63A5\u6709\u4EC0\u4E48\u533A\u522B? \u5B83\u4EEC\u90FD\u6709\u4EC0\u4E48\u4F5C\u7528? \u8FD9\u624D\u662F\u94FE\u63A5\u6587\u4EF6\u6700\u4E0D\u5BB9\u6613\u7406\u89E3\u7684\u5730\u65B9\uFF0C\u6211\u4EEC\u5206\u522B\u6765\u8BB2\u8BB2\u3002</p><h2 id="ln-\u521B\u5EFA\u786C\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#ln-\u521B\u5EFA\u786C\u94FE\u63A5" aria-hidden="true">#</a> ln \u521B\u5EFA\u786C\u94FE\u63A5</h2><p>\u6211\u4EEC\u518D\u6765\u5EFA\u7ACB\u4E00\u4E2A\u786C\u94FE\u63A5\u6587\u4EF6\uFF0C\u7136\u540E\u770B\u770B\u8FD9\u4E24\u4E2A\u6587\u4EF6\u7684\u7279\u70B9\u3002</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">touch</span> <span class="token builtin class-name">test</span></span></span>
<span class="token output">#\u5EFA\u7ACB\u6E90\u6587\u4EF6
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ln</span> /root/test /tmp/test-hard</span></span>
<span class="token output">#\u7ED9\u6E90\u6587\u4EF6\u5EFA\u7ACB\u786C\u94FE\u63A5\u6587\u4EF6 /tmp/test-hard
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash">ll -i /root/test /tmp/test-hard</span></span>
<span class="token output">262147 -rw-r--r-- 2 root root 0 6\u6708 19 10:06 /root/test
hard
262147 -rw-r--r-- 2 root root 0 6\u6708 19 10:06 /tmp/test-hard
#\u67E5\u770B\u4E24\u4E2A\u6587\u4EF6\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u53EF\u4EE5\u53D1\u73B0\u8FD9\u4E24\u4E2A\u6587\u4EF6\u7684 inode \u53F7\u662F\u4E00\u6837\u7684\uFF0C&quot;ll&quot;\u7B49\u540C\u4E8E&quot;ls -l&quot;\u3002
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6709\u4E00\u4EF6\u5F88\u5947\u602A\u7684\u4E8B\u60C5\uFF0C\u6211\u4EEC\u4E4B\u524D\u5728\u8BB2 inode \u53F7\u7684\u65F6\u5019\u8BF4\u8FC7\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u7684 inode \u53F7\u90FD\u5E94\u8BE5\u662F\u4E0D\u4E00\u6837\u7684\u3002inode \u53F7\u5C31\u76F8\u5F53\u4E8E\u6587\u4EF6 ID\uFF0C\u6211\u4EEC\u5728\u67E5\u627E\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u8981\u5148\u67E5\u627E inode \u53F7\uFF0C\u624D\u80FD\u8BFB\u53D6\u5230\u6587\u4EF6\u7684\u5185\u5BB9\u3002</p><p>\u4F46\u662F\u8FD9\u91CC\u6E90\u6587\u4EF6\u548C\u786C\u94FE\u63A5\u6587\u4EF6\u7684 inode \u53F7\u5C45\u7136\u662F\u4E00\u6837\u7684\uFF0C\u90A3\u6211\u4EEC\u5728\u67E5\u627E\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u5230\u5E95\u627E\u5230\u7684\u662F\u54EA\u4E00\u4E2A\u6587\u4EF6\u5462? \u6211\u4EEC\u6765\u753B\u4E00\u5F20\u793A\u610F\u56FE\uFF0C\u5982\u56FE 2 \u6240\u793A\u3002</p><p><img src="`+l+`" alt="Hardlink"></p><p>\u5728 inode \u4FE1\u606F\u4E2D\uFF0C\u662F\u4E0D\u4F1A\u8BB0\u5F55\u6587\u4EF6\u540D\u79F0\u7684\uFF0C\u800C\u662F\u628A\u6587\u4EF6\u540D\u8BB0\u5F55\u5728\u4E0A\u7EA7\u76EE\u5F55\u7684 block \u4E2D\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u76EE\u5F55\u7684 block \u4E2D\u8BB0\u5F55\u7684\u662F\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u6240\u6709\u4E00\u7EA7\u5B50\u6587\u4EF6\u548C\u5B50\u76EE\u5F55\u7684\u6587\u4EF6\u540D\u53CA inode \u7684\u5BF9\u5E94\uFF1B\u800C\u6587\u4EF6\u7684 block \u4E2D\u8BB0\u5F55\u7684\u624D\u662F\u6587\u4EF6\u5B9E\u9645\u7684\u6570\u636E\u3002</p><p>\u5F53\u6211\u4EEC\u67E5\u627E\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6BD4\u5982 <code>/root/test</code> \u65F6\uFF0C\u8981\u7ECF\u8FC7\u4EE5\u4E0B\u6B65\u9AA4:</p><ul><li>\u9996\u5148\u627E\u5230\u6839\u76EE\u5F55\u7684 inode(\u6839\u76EE\u5F55\u7684 inode \u662F\u7CFB\u7EDF\u5DF2\u77E5\u7684\uFF0Cinode \u53F7\u662F 2)\uFF0C\u7136\u540E\u5224\u65AD\u7528\u6237\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u6839\u76EE\u5F55\u7684 block\u3002</li><li>\u5982\u679C\u6709\u6743\u9650\uFF0C\u5219\u53EF\u4EE5\u5728\u6839\u76EE\u5F55\u7684 block \u4E2D\u8BBF\u95EE\u5230 <code>/root</code> \u7684\u6587\u4EF6\u540D\u53CA\u5BF9\u5E94\u7684 inode \u53F7\u3002</li><li>\u901A\u8FC7 <code>/root/</code> \u76EE\u5F55\u7684 inode \u53F7\uFF0C\u53EF\u4EE5\u67E5\u627E\u5230 <code>/root/</code> \u76EE\u5F55\u7684 inode \u4FE1\u606F\uFF0C\u63A5\u7740\u5224\u65AD\u7528\u6237\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE <code>/root/</code> \u76EE\u5F55\u7684 block\u3002</li><li>\u5982\u679C\u6709\u6743\u9650\uFF0C\u5219\u53EF\u4EE5\u4ECE <code>/root/</code> \u76EE\u5F55\u7684 block \u4E2D\u8BFB\u53D6\u5230 test \u6587\u4EF6\u7684\u6587\u4EF6\u540D\u53CA\u5BF9\u5E94\u7684 inode \u53F7\u3002</li><li>\u901A\u8FC7 test \u6587\u4EF6\u7684 inode \u53F7\uFF0C\u5C31\u53EF\u4EE5\u627E\u5230 test \u6587\u4EF6\u7684 inode \u4FE1\u606F\uFF0C\u63A5\u7740\u5224\u65AD\u7528\u6237\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE test \u6587\u4EF6\u7684 block\u3002</li><li>\u5982\u679C\u6709\u6743\u9650\uFF0C\u5219\u53EF\u4EE5\u8BFB\u53D6 block \u4E2D\u7684\u6570\u636E\uFF0C\u8FD9\u6837\u5C31\u5B8C\u6210\u4E86 <code>/root/test</code> \u6587\u4EF6\u7684\u8BFB\u53D6\u4E0E\u8BBF\u95EE\u3002</li></ul><p>\u6309\u7167\u8FD9\u4E2A\u6B65\u9AA4\uFF0C\u5728\u7ED9\u6E90\u6587\u4EF6 <code>/root/test</code> \u5EFA\u7ACB\u4E86\u786C\u94FE\u63A5\u6587\u4EF6 <code>/tmp/test-hard</code> \u4E4B\u540E\uFF0C\u5728 <code>/root/</code> \u76EE\u5F55\u548C <code>/tmp/</code> \u76EE\u5F55\u7684 block \u4E2D\u5C31\u4F1A\u5EFA\u7ACB test \u548C test-hard \u7684\u4FE1\u606F\uFF0C\u8FD9\u4E2A\u4FE1\u606F\u4E3B\u8981\u5C31\u662F\u6587\u4EF6\u540D\u548C\u5BF9\u5E94\u7684 inode \u53F7\u3002\u4F46\u662F\u6211\u4EEC\u4F1A\u53D1\u73B0 test \u548C test-hard \u7684 inode \u4FE1\u606F\u5C45\u7136\u662F\u4E00\u6837\u7684\uFF0C\u90A3\u4E48\uFF0C\u6211\u4EEC\u65E0\u8BBA\u8BBF\u95EE\u54EA\u4E2A\u6587\u4EF6\uFF0C\u6700\u7EC8\u90FD\u4F1A\u8BBF\u95EE inode \u53F7\u662F 262147 \u7684\u6587\u4EF6\u4FE1\u606F\u3002</p><p>\u8FD9\u5C31\u662F\u786C\u94FE\u63A5\u7684\u539F\u7406\u3002\u786C\u94FE\u63A5\u7684\u7279\u70B9\u5982\u4E0B:</p><ul><li>\u4E0D\u8BBA\u662F\u4FEE\u6539\u6E90\u6587\u4EF6(test \u6587\u4EF6)\uFF0C\u8FD8\u662F\u4FEE\u6539\u786C\u94FE\u63A5\u6587\u4EF6(test-hard \u6587\u4EF6)\uFF0C\u53E6\u4E00\u4E2A\u6587\u4EF6\u4E2D\u7684\u6570\u636E\u90FD\u4F1A\u53D1\u751F\u6539\u53D8\u3002</li><li>\u4E0D\u8BBA\u662F\u5220\u9664\u6E90\u6587\u4EF6\uFF0C\u8FD8\u662F\u5220\u9664\u786C\u94FE\u63A5\u6587\u4EF6\uFF0C\u53EA\u8981\u8FD8\u6709\u4E00\u4E2A\u6587\u4EF6\u5B58\u5728\uFF0C\u8FD9\u4E2A\u6587\u4EF6(inode \u53F7\u662F 262147 \u7684\u6587\u4EF6)\u90FD\u53EF\u4EE5\u88AB\u8BBF\u95EE\u3002</li><li>\u786C\u94FE\u63A5\u4E0D\u4F1A\u5EFA\u7ACB\u65B0\u7684 inode \u4FE1\u606F\uFF0C\u4E5F\u4E0D\u4F1A\u66F4\u6539 inode \u7684\u603B\u6570\u3002</li><li>\u786C\u94FE\u63A5\u4E0D\u80FD\u8DE8\u6587\u4EF6\u7CFB\u7EDF(\u5206\u533A)\u5EFA\u7ACB\uFF0C\u56E0\u4E3A\u5728\u4E0D\u540C\u7684\u6587\u4EF6\u7CFB\u7EDF\u4E2D\uFF0Cinode \u53F7\u662F\u91CD\u65B0\u8BA1\u7B97\u7684\u3002</li><li>\u786C\u94FE\u63A5\u4E0D\u80FD\u94FE\u63A5\u76EE\u5F55\uFF0C\u56E0\u4E3A\u5982\u679C\u7ED9\u76EE\u5F55\u5EFA\u7ACB\u786C\u94FE\u63A5\uFF0C\u90A3\u4E48\u4E0D\u4EC5\u76EE\u5F55\u672C\u8EAB\u9700\u8981\u91CD\u65B0\u5EFA\u7ACB\uFF0C\u76EE\u5F55\u4E0B\u6240\u6709\u7684\u5B50\u6587\u4EF6\uFF0C\u5305\u62EC\u5B50\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u5B50\u6587\u4EF6\u90FD\u9700\u8981\u5EFA\u7ACB\u786C\u94FE\u63A5\uFF0C\u8FD9\u5BF9\u5F53\u524D\u7684 Linux \u6765\u8BB2\u8FC7\u4E8E\u590D\u6742\u3002</li></ul><p>\u786C\u94FE\u63A5\u7684\u9650\u5236\u6BD4\u8F83\u591A\uFF0C\u65E2\u4E0D\u80FD\u8DE8\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u4E5F\u4E0D\u80FD\u94FE\u63A5\u76EE\u5F55\uFF0C\u800C\u4E14\u6E90\u6587\u4EF6\u548C\u786C\u94FE\u63A5\u6587\u4EF6\u4E4B\u95F4\u9664 inode \u53F7\u662F\u4E00\u6837\u7684\u4E4B\u5916\uFF0C\u6CA1\u6709\u5176\u4ED6\u660E\u663E\u7684\u7279\u5F81\u3002\u8FD9\u4E9B\u7279\u5F81\u90FD\u4F7F\u5F97\u786C\u94FE\u63A5\u5E76\u4E0D\u5E38\u7528\uFF0C\u5927\u5BB6\u6709\u6240\u4E86\u89E3\u5C31\u597D\u3002</p><h2 id="ln-\u521B\u5EFA\u8F6F\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#ln-\u521B\u5EFA\u8F6F\u94FE\u63A5" aria-hidden="true">#</a> ln \u521B\u5EFA\u8F6F\u94FE\u63A5</h2><p>\u8F6F\u94FE\u63A5\u4E5F\u79F0\u4F5C\u7B26\u53F7\u94FE\u63A5\uFF0C\u76F8\u6BD4\u786C\u94FE\u63A5\u6765\u8BB2\uFF0C\u8F6F\u94FE\u63A5\u5C31\u8981\u5E38\u7528\u591A\u4E86\u3002\u6211\u4EEC\u5148\u5EFA\u7ACB\u4E00\u4E2A\u8F6F\u94FE\u63A5\uFF0C\u518D\u6765\u770B\u770B\u8F6F\u94FE\u63A5\u7684\u7279\u70B9\u3002</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">touch</span> check</span></span>
<span class="token output">#\u5EFA\u7ACB\u6E90\u6587\u4EF6
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ln</span> -s /root/check /tmp/check-soft</span></span>
<span class="token output">#\u5EFA\u7ACB\u8F6F\u94FE\u63A5\u6587\u4EF6
</span><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash">ll -id /root/check /tmp/check-soft</span></span>
<span class="token output">262154 -rw-r--r-- 1 root root 0 6\u6708 19 11:30 /root/check
917507 lrwxrwxrwx 1 root root 11 6\u6708 19 11:31 /tmp/ check-soft -&gt; /root/check
#\u8F6F\u94FE\u63A5\u548C\u6E90\u6587\u4EF6\u7684 inode \u53F7\u4E0D\u4E00\u81F4\uFF0C\u8F6F\u94FE\u63A5\u901A\u8FC7 -&gt; \u660E\u663E\u5730\u6807\u8BC6\u51FA\u6E90\u6587\u4EF6\u7684\u4F4D\u7F6E
#\u5728\u8F6F\u94FE\u63A5\u7684\u6743\u9650\u4F4D lrwxrwxrwx \u4E2D\uFF0Cl \u5C31\u4EE3\u8868\u8F6F\u94FE\u63A5\u6587\u4EF6
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u5F3A\u8C03\u4E00\u4E0B\uFF0C\u8F6F\u94FE\u63A5\u7684\u6E90\u6587\u4EF6\u5FC5\u987B\u5199\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5426\u5219\u5EFA\u7ACB\u7684\u8F6F\u94FE\u63A5\u6587\u4EF6\u5C31\u4F1A\u62A5\u9519\uFF0C\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528\u3002</p><p>\u8F6F\u94FE\u63A5\u7684\u6807\u5FD7\u975E\u5E38\u660E\u663E\uFF0C\u9996\u5148\uFF0C\u6743\u9650\u4F4D\u4E2D&quot;l&quot;\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u8F6F\u94FE\u63A5\u6587\u4EF6\uFF1B\u5176\u6B21\uFF0C\u5728\u6587\u4EF6\u7684\u540E\u9762\u901A\u8FC7 &quot;-&gt;&quot; \u663E\u793A\u51FA\u6E90\u6587\u4EF6\u7684\u5B8C\u6574\u540D\u5B57\u3002\u6240\u4EE5\u8F6F\u94FE\u63A5\u6BD4\u786C\u94FE\u63A5\u7684\u6807\u5FD7\u8981\u660E\u663E\u5F97\u591A\uFF0C\u800C\u4E14\u8F6F\u94FE\u63A5\u4E5F\u4E0D\u50CF\u786C\u94FE\u63A5\u7684\u9650\u5236\u90A3\u6837\u591A\uFF0C\u6BD4\u5982\u8F6F\u94FE\u63A5\u53EF\u4EE5\u94FE\u63A5\u76EE\u5F55\uFF0C\u4E5F\u53EF\u4EE5\u8DE8\u5206\u533A\u6765\u5EFA\u7ACB\u8F6F\u94FE\u63A5\u3002</p><p>\u8F6F\u94FE\u63A5\u5B8C\u5168\u53EF\u4EE5\u5F53\u4F5C Windows \u7684\u5FEB\u6377\u65B9\u5F0F\u6765\u5BF9\u5F85\uFF0C\u5B83\u7684\u7279\u70B9\u548C\u5FEB\u6377\u65B9\u5F0F\u4E00\u6837\uFF0C\u6211\u4EEC\u66F4\u63A8\u8350\u5927\u5BB6\u4F7F\u7528\u8F6F\u94FE\u63A5\uFF0C\u800C\u4E0D\u662F\u786C\u94FE\u63A5\u3002</p><p>\u5927\u5BB6\u5728\u5B66\u4E60\u8F6F\u94FE\u63A5\u7684\u65F6\u5019\u4F1A\u6709\u4E00\u4E9B\u7591\u95EE: Windows \u7684\u5FEB\u6377\u65B9\u5F0F\u662F\u7531\u4E8E\u6E90\u6587\u4EF6\u653E\u7F6E\u7684\u4F4D\u7F6E\u8FC7\u6DF1\uFF0C\u4E0D\u5BB9\u6613\u627E\u5230\uFF0C\u5EFA\u7ACB\u4E00\u4E2A\u5FEB\u6377\u65B9\u5F0F\u653E\u5728\u684C\u9762\uFF0C\u65B9\u4FBF\u67E5\u627E\uFF0C\u90A3 Linux \u7684\u8F6F\u94FE\u63A5\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\u5462?</p><p>\u8F6F\u94FE\u63A5\u4E3B\u8981\u662F\u4E3A\u4E86\u7167\u987E\u7BA1\u7406\u5458\u7684\u4F7F\u7528\u4E60\u60EF\u3002\u6BD4\u5982\uFF0C\u6709\u4E9B\u7CFB\u7EDF\u7684\u81EA\u542F\u52A8\u6587\u4EF6 <code>/etc/rc.local</code> \u653E\u7F6E\u5728 <code>/etc</code> \u76EE\u5F55\u4E2D\uFF0C\u800C\u6709\u4E9B\u7CFB\u7EDF\u5374\u5C06\u5176\u653E\u7F6E\u5728 <code>/etc/rc.d/rc.local</code> \u4E2D\uFF0C\u90A3\u4E48\u5E72\u8106\u5BF9\u8FD9\u4E24\u4E2A\u6587\u4EF6\u5EFA\u7ACB\u8F6F\u94FE\u63A5\uFF0C\u4E0D\u8BBA\u60A8\u4E60\u60EF\u64CD\u4F5C\u54EA\u4E00\u4E2A\u6587\u4EF6\uFF0C\u7ED3\u679C\u90FD\u662F\u4E00\u6837\u7684\u3002</p><p>\u5982\u679C\u60A8\u6BD4\u8F83\u7EC6\u5FC3\uFF0C\u5219\u5E94\u8BE5\u5DF2\u7ECF\u53D1\u73B0\u8F6F\u94FE\u63A5\u548C\u6E90\u6587\u4EF6\u7684 inode \u53F7\u662F\u4E0D\u4E00\u81F4\u7684\uFF0C\u6211\u4EEC\u4E5F\u753B\u4E00\u5F20\u793A\u610F\u56FE\u6765\u770B\u770B\u8F6F\u94FE\u63A5\u7684\u539F\u7406\uFF0C\u5982\u56FE 3 \u6240\u793A\u3002</p><p><img src="`+a+'" alt="\u8F6F\u94FE\u63A5\u793A\u610F\u56FE"></p><p>\u8F6F\u94FE\u63A5\u548C\u786C\u94FE\u63A5\u5728\u539F\u7406\u4E0A\u6700\u4E3B\u8981\u7684\u4E0D\u540C\u5728\u4E8E: \u786C\u94FE\u63A5\u4E0D\u4F1A\u5EFA\u7ACB\u81EA\u5DF1\u7684 inode \u7D22\u5F15\u548C block(\u6570\u636E\u5757)\uFF0C\u800C\u662F\u76F4\u63A5\u6307\u5411\u6E90\u6587\u4EF6\u7684 inode \u4FE1\u606F\u548C block\uFF0C\u6240\u4EE5\u786C\u94FE\u63A5\u548C\u6E90\u6587\u4EF6\u7684 inode \u53F7\u662F\u4E00\u81F4\u7684\uFF1B\u800C\u8F6F\u94FE\u63A5\u4F1A\u771F\u6B63\u5EFA\u7ACB\u81EA\u5DF1\u7684 inode \u7D22\u5F15\u548C block\uFF0C\u6240\u4EE5\u8F6F\u94FE\u63A5\u548C\u6E90\u6587\u4EF6\u7684 inode \u53F7\u662F\u4E0D\u4E00\u81F4\u7684\uFF0C\u800C\u4E14\u5728\u8F6F\u94FE\u63A5\u7684 block \u4E2D\uFF0C\u5199\u7684\u4E0D\u662F\u771F\u6B63\u7684\u6570\u636E\uFF0C\u800C\u4EC5\u4EC5\u662F\u6E90\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u53CA inode \u53F7\u3002</p><p>\u6211\u4EEC\u6765\u770B\u770B\u8BBF\u95EE\u8F6F\u94FE\u63A5\u7684\u6B65\u9AA4\u548C\u8BBF\u95EE\u786C\u94FE\u63A5\u7684\u6B65\u9AA4\u6709\u4EC0\u4E48\u4E0D\u540C\u3002</p><ul><li>\u9996\u5148\u627E\u5230\u6839\u76EE\u5F55\u7684 inode \u7D22\u5F15\u4FE1\u606F\uFF0C\u7136\u540E\u5224\u65AD\u7528\u6237\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u6839\u76EE\u5F55\u7684 block\u3002</li><li>\u5982\u679C\u6709\u6743\u9650\u8BBF\u95EE\u6839\u76EE\u5F55\u7684 block\uFF0C\u5C31\u4F1A\u5728 block \u4E2D\u67E5\u627E\u5230 <code>/tmp/</code> \u76EE\u5F55\u7684 inode \u53F7\u3002</li><li>\u63A5\u7740\u8BBF\u95EE <code>/tmp/</code> \u76EE\u5F55\u7684 inode \u4FE1\u606F\uFF0C\u5224\u65AD\u7528\u6237\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE <code>/tmp/</code> \u76EE\u5F55\u7684 block\u3002</li><li>\u5982\u679C\u6709\u6743\u9650\uFF0C\u5C31\u4F1A\u5728 block \u4E2D\u8BFB\u53D6\u5230\u8F6F\u94FE\u63A5\u6587\u4EF6 check-soft \u7684 inode \u53F7\u3002\u56E0\u4E3A\u8F6F\u94FE\u63A5\u6587\u4EF6\u4F1A\u771F\u6B63\u5EFA\u7ACB\u81EA\u5DF1\u7684 inode \u7D22\u5F15\u548C block\uFF0C\u6240\u4EE5\u8F6F\u94FE\u63A5\u6587\u4EF6\u548C\u6E90\u6587\u4EF6\u7684 inode \u53F7\u662F\u4E0D\u4E00\u6837\u7684\u3002</li><li>\u901A\u8FC7\u8F6F\u94FE\u63A5\u6587\u4EF6\u7684 inode \u53F7\uFF0C\u627E\u5230\u4E86 check-soft \u6587\u4EF6 inode \u4FE1\u606F\uFF0C\u5224\u65AD\u7528\u6237\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE block\u3002</li><li>\u5982\u679C\u6709\u6743\u9650\uFF0C\u5C31\u4F1A\u53D1\u73B0 check-soft \u6587\u4EF6\u7684 block \u4E2D\u6CA1\u6709\u5B9E\u9645\u6570\u636E\uFF0C\u4EC5\u6709\u6E90\u6587\u4EF6 check \u7684 inode \u53F7\u3002</li><li>\u63A5\u7740\u901A\u8FC7\u6E90\u6587\u4EF6\u7684 inode \u53F7\uFF0C\u8BBF\u95EE\u5230\u6E90\u6587\u4EF6 check \u7684 inode \u4FE1\u606F\uFF0C\u5224\u65AD\u7528\u6237\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE block\u3002</li><li>\u5982\u679C\u6709\u6743\u9650\uFF0C\u5C31\u4F1A\u5728 check \u6587\u4EF6\u7684 block \u4E2D\u8BFB\u53D6\u5230\u771F\u6B63\u7684\u6570\u636E\uFF0C\u4ECE\u800C\u5B8C\u6210\u6570\u636E\u8BBF\u95EE\u3002</li></ul><p>\u901A\u8FC7\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u603B\u7ED3\u51FA\u8F6F\u94FE\u63A5\u7684\u7279\u70B9(\u8F6F\u94FE\u63A5\u7684\u7279\u70B9\u548C Windows \u4E2D\u7684\u5FEB\u6377\u65B9\u5F0F\u5B8C\u5168\u4E00\u81F4)\u3002</p><ul><li>\u4E0D\u8BBA\u662F\u4FEE\u6539\u6E90\u6587\u4EF6(check)\uFF0C\u8FD8\u662F\u4FEE\u6539\u786C\u94FE\u63A5\u6587\u4EF6(check-soft)\uFF0C\u53E6\u4E00\u4E2A\u6587\u4EF6\u4E2D\u7684\u6570\u636E\u90FD\u4F1A\u53D1\u751F\u6539\u53D8\u3002</li><li>\u5220\u9664\u8F6F\u94FE\u63A5\u6587\u4EF6\uFF0C\u6E90\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002\u800C\u5220\u9664\u539F\u6587\u4EF6\uFF0C\u8F6F\u94FE\u63A5\u6587\u4EF6\u5C06\u627E\u4E0D\u5230\u5B9E\u9645\u7684\u6570\u636E\uFF0C\u4ECE\u800C\u663E\u793A\u6587\u4EF6\u4E0D\u5B58\u5728\u3002</li><li>\u8F6F\u94FE\u63A5\u4F1A\u65B0\u5EFA\u81EA\u5DF1\u7684 inode \u4FE1\u606F\u548C block\uFF0C\u53EA\u662F\u5728 block \u4E2D\u4E0D\u5B58\u50A8\u5B9E\u9645\u6587\u4EF6\u6570\u636E\uFF0C\u800C\u5B58\u50A8\u7684\u662F\u6E90\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u53CA inode \u53F7\u3002</li><li>\u8F6F\u94FE\u63A5\u53EF\u4EE5\u94FE\u63A5\u76EE\u5F55\u3002</li><li>\u8F6F\u94FE\u63A5\u53EF\u4EE5\u8DE8\u5206\u533A\u3002</li></ul>',29),c=[i];function d(p,r){return n(),o("div",null,c)}var k=s(t,[["render",d],["__file","ln.html.vue"]]);export{k as default};