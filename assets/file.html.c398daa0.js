import{_ as s,o as a,c as l,a as n,b as i,w as o,e as t,r as c,d as p}from"./app.238d4ac4.js";const d={},u=t(`<h2 id="touch-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#touch-\u547D\u4EE4" aria-hidden="true">#</a> touch \u547D\u4EE4</h2><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0Ctouch \u547D\u4EE4\u4E0D\u5149\u53EF\u4EE5\u7528\u6765\u521B\u5EFA\u6587\u4EF6(\u5F53\u6307\u5B9A\u64CD\u4F5C\u6587\u4EF6\u4E0D\u5B58\u5728\u65F6\uFF0C\u8BE5\u547D\u4EE4\u4F1A\u5728\u5F53\u524D\u4F4D\u7F6E\u5EFA\u7ACB\u4E00\u4E2A\u7A7A\u6587\u4EF6)\uFF0C\u6B64\u547D\u4EE4\u66F4\u91CD\u8981\u7684\u529F\u80FD\u662F\u4FEE\u6539\u6587\u4EF6\u7684\u65F6\u95F4\u53C2\u6570(\u4F46\u5F53\u6587\u4EF6\u5B58\u5728\u65F6\uFF0C\u4F1A\u4FEE\u6539\u6B64\u6587\u4EF6\u7684\u65F6\u95F4\u53C2\u6570)\u3002</p><p>Linux \u7CFB\u7EDF\u4E2D\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u4E3B\u8981\u62E5\u6709 3 \u4E2A\u65F6\u95F4\u53C2\u6570(\u901A\u8FC7 stat \u547D\u4EE4\u8FDB\u884C\u67E5\u770B)\uFF0C\u5206\u522B\u662F\u6587\u4EF6\u7684\u8BBF\u95EE\u65F6\u95F4\u3001\u6570\u636E\u4FEE\u6539\u65F6\u95F4\u4EE5\u53CA\u72B6\u6001\u4FEE\u6539\u65F6\u95F4:</p><ul><li>\u8BBF\u95EE\u65F6\u95F4 (Access Time\uFF0C\u7B80\u79F0 atime): \u53EA\u8981\u6587\u4EF6\u7684\u5185\u5BB9\u88AB\u8BFB\u53D6\uFF0C\u8BBF\u95EE\u65F6\u95F4\u5C31\u4F1A\u66F4\u65B0\u3002\u4F8B\u5982\uFF0C\u4F7F\u7528 <code>cat</code> \u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u6B64\u65F6\u6587\u4EF6\u7684\u8BBF\u95EE\u65F6\u95F4\u5C31\u4F1A\u53D1\u751F\u6539\u53D8\u3002</li><li>\u6570\u636E\u4FEE\u6539\u65F6\u95F4 (Modify Time\uFF0C\u7B80\u79F0 mtime): \u5F53\u6587\u4EF6\u7684\u5185\u5BB9\u6570\u636E\u53D1\u751F\u6539\u53D8\uFF0C\u6B64\u6587\u4EF6\u7684\u6570\u636E\u4FEE\u6539\u65F6\u95F4\u5C31\u4F1A\u8DDF\u7740\u76F8\u5E94\u6539\u53D8\u3002</li><li>\u72B6\u6001\u4FEE\u6539\u65F6\u95F4 (Change Time\uFF0C\u7B80\u79F0 ctime): \u5F53\u6587\u4EF6\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\uFF0C\u5C31\u4F1A\u76F8\u5E94\u6539\u53D8\u8FD9\u4E2A\u65F6\u95F4\u3002\u6BD4\u5982\u8BF4\uFF0C\u5982\u679C\u6587\u4EF6\u7684\u6743\u9650\u6216\u8005\u5C5E\u6027\u53D1\u751F\u6539\u53D8\uFF0C\u6B64\u65F6\u95F4\u5C31\u4F1A\u76F8\u5E94\u6539\u53D8\u3002</li></ul><p>touch \u547D\u4EE4\u7684\u57FA\u672C\u683C\u5F0F\u5982\u4E0B:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">touch</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u6587\u4EF6\u540D</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9009\u9879:</p><ul><li>-a: \u53EA\u4FEE\u6539\u6587\u4EF6\u7684\u8BBF\u95EE\u65F6\u95F4\uFF1B</li><li>-c: \u4EC5\u4FEE\u6539\u6587\u4EF6\u7684\u65F6\u95F4\u53C2\u6570(3 \u4E2A\u65F6\u95F4\u53C2\u6570\u90FD\u6539\u53D8)\uFF0C\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u5219\u4E0D\u5EFA\u7ACB\u65B0\u6587\u4EF6\u3002</li><li>-d: \u540E\u9762\u53EF\u4EE5\u8DDF\u6B32\u4FEE\u8BA2\u7684\u65E5\u671F\uFF0C\u800C\u4E0D\u7528\u5F53\u524D\u7684\u65E5\u671F\uFF0C\u5373\u628A\u6587\u4EF6\u7684 atime \u548C mtime \u65F6\u95F4\u6539\u4E3A\u6307\u5B9A\u7684\u65F6\u95F4\u3002</li><li>-m: \u53EA\u4FEE\u6539\u6587\u4EF6\u7684\u6570\u636E\u4FEE\u6539\u65F6\u95F4\u3002</li><li>-t: \u547D\u4EE4\u540E\u9762\u53EF\u4EE5\u8DDF\u6B32\u4FEE\u8BA2\u7684\u65F6\u95F4\uFF0C\u800C\u4E0D\u7528\u76EE\u524D\u7684\u65F6\u95F4\uFF0C\u65F6\u95F4\u4E66\u5199\u683C\u5F0F\u4E3A YYMMDDhhmm\u3002</li></ul><p>\u53EF\u4EE5\u770B\u5230\uFF0Ctouch \u547D\u4EE4\u53EF\u4EE5\u53EA\u4FEE\u6539\u6587\u4EF6\u7684\u8BBF\u95EE\u65F6\u95F4\uFF0C\u4E5F\u53EF\u4EE5\u53EA\u4FEE\u6539\u6587\u4EF6\u7684\u6570\u636E\u4FEE\u6539\u65F6\u95F4\uFF0C\u4F46\u662F\u4E0D\u80FD\u53EA\u4FEE\u6539\u6587\u4EF6\u7684\u72B6\u6001\u4FEE\u6539\u65F6\u95F4\u3002\u56E0\u4E3A\uFF0C\u4E0D\u8BBA\u662F\u4FEE\u6539\u8BBF\u95EE\u65F6\u95F4\uFF0C\u8FD8\u662F\u4FEE\u6539\u6587\u4EF6\u7684\u6570\u636E\u65F6\u95F4\uFF0C\u5BF9\u6587\u4EF6\u6765\u8BB2\uFF0C\u72B6\u6001\u90FD\u4F1A\u53D1\u751F\u6539\u53D8\uFF0C\u5373\u72B6\u6001\u4FEE\u6539\u65F6\u95F4\u4F1A\u968F\u4E4B\u6539\u53D8(\u66F4\u65B0\u4E3A\u64CD\u4F5C\u5F53\u524D\u6587\u4EF6\u7684\u771F\u6B63\u65F6\u95F4)\u3002</p><h2 id="ln-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#ln-\u547D\u4EE4" aria-hidden="true">#</a> ln \u547D\u4EE4</h2><p>\u5982\u679C\u8981\u60F3\u8BF4\u6E05\u695A ln \u547D\u4EE4\uFF0C\u5219\u5FC5\u987B\u5148\u89E3\u91CA\u4E0B ext \u6587\u4EF6\u7CFB\u7EDF(Linux \u6587\u4EF6\u7CFB\u7EDF)\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002\u6211\u4EEC\u5728\u524D\u9762\u8BB2\u89E3\u4E86\u5206\u533A\u7684\u683C\u5F0F\u5316\u5C31\u662F\u5199\u5165\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u800C\u6211\u4EEC\u7684 Linux \u76EE\u524D\u4F7F\u7528\u7684\u662F ext4 \u6587\u4EF6\u7CFB\u7EDF\u3002</p><p>ext4 \u6587\u4EF6\u7CFB\u7EDF\u4F1A\u628A\u5206\u533A\u4E3B\u8981\u5206\u4E3A\u4E24\u5927\u90E8\u5206(\u6682\u65F6\u4E0D\u63D0\u8D85\u7EA7\u5757): \u5C0F\u90E8\u5206\u7528\u4E8E\u4FDD\u5B58\u6587\u4EF6\u7684 inode (i \u8282\u70B9)\u4FE1\u606F\uFF1B\u5269\u4F59\u7684\u5927\u90E8\u5206\u7528\u4E8E\u4FDD\u5B58 block \u4FE1\u606F\u3002</p><p>inode \u7684\u9ED8\u8BA4\u5927\u5C0F\u4E3A 128 Byte\uFF0C\u7528\u6765\u8BB0\u5F55\u6587\u4EF6\u7684\u6743\u9650(r\u3001w\u3001x)\u3001\u6587\u4EF6\u7684\u6240\u6709\u8005\u548C\u5C5E\u7EC4\u3001\u6587\u4EF6\u7684\u5927\u5C0F\u3001\u6587\u4EF6\u7684\u72B6\u6001\u6539\u53D8\u65F6\u95F4(ctime)\u3001\u6587\u4EF6\u7684\u6700\u8FD1\u4E00\u6B21\u8BFB\u53D6\u65F6\u95F4(atime)\u3001\u6587\u4EF6\u7684\u6700\u8FD1\u4E00\u6B21\u4FEE\u6539\u65F6\u95F4(mtime)\u3001\u6587\u4EF6\u7684\u6570\u636E\u771F\u6B63\u4FDD\u5B58\u7684 block \u7F16\u53F7\u3002\u6BCF\u4E2A\u6587\u4EF6\u9700\u8981\u5360\u7528\u4E00\u4E2A inode\u3002\u5927\u5BB6\u5982\u679C\u4ED4\u7EC6\u67E5\u770B\uFF0C\u5C31\u4F1A\u53D1\u73B0 inode \u4E2D\u662F\u4E0D\u8BB0\u5F55\u6587\u4EF6\u540D\u7684\uFF0C\u90A3\u662F\u56E0\u4E3A\u6587\u4EF6\u540D\u8BB0\u5F55\u5728\u6587\u4EF6\u6240\u5728\u76EE\u5F55\u7684 block \u4E2D\u3002</p><p>block \u7684\u5927\u5C0F\u53EF\u4EE5\u662F 1KB\u30012KB\u30014KB\uFF0C\u9ED8\u8BA4\u4E3A 4KB\u3002block \u7528\u4E8E\u5B9E\u9645\u7684\u6570\u636E\u5B58\u50A8\uFF0C\u5982\u679C\u4E00\u4E2A block \u653E\u4E0D\u4E0B\u6570\u636E\uFF0C\u5219\u53EF\u4EE5\u5360\u7528\u591A\u4E2A block\u3002\u4F8B\u5982\uFF0C\u6709\u4E00\u4E2A 10KB \u7684\u6587\u4EF6\u9700\u8981\u5B58\u50A8\uFF0C\u5219\u4F1A\u5360\u7528 3 \u4E2A block\uFF0C\u867D\u7136\u6700\u540E\u4E00\u4E2A block \u4E0D\u80FD\u5360\u6EE1\uFF0C\u4F46\u4E5F\u4E0D\u80FD\u518D\u653E\u5165\u5176\u4ED6\u6587\u4EF6\u7684\u6570\u636E\u3002\u8FD9 3 \u4E2A block \u6709\u53EF\u80FD\u662F\u8FDE\u7EED\u7684\uFF0C\u4E5F\u6709\u53EF\u80FD\u662F\u5206\u6563\u7684\u3002</p><p>\u7531\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053\u4EE5\u4E0B 2 \u4E2A\u91CD\u8981\u7684\u4FE1\u606F:</p><ol><li>\u6BCF\u4E2A\u6587\u4EF6\u90FD\u72EC\u81EA\u5360\u7528\u4E00\u4E2A inode\uFF0C\u6587\u4EF6\u5185\u5BB9\u7531 inode \u7684\u8BB0\u5F55\u6765\u6307\u5411\uFF1B</li><li>\u5982\u679C\u60F3\u8981\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9\uFF0C\u5C31\u5FC5\u987B\u501F\u52A9\u76EE\u5F55\u4E2D\u8BB0\u5F55\u7684\u6587\u4EF6\u540D\u627E\u5230\u8BE5\u6587\u4EF6\u7684 inode\uFF0C\u624D\u80FD\u6210\u529F\u627E\u5230\u6587\u4EF6\u5185\u5BB9\u6240\u5728\u7684 block \u5757\uFF1B</li></ol><p>\u4E86\u89E3\u4E86 Linux \u7CFB\u7EDF\u5E95\u5C42\u6587\u4EF6\u7684\u5B58\u50A8\u72B6\u6001\u540E\uFF0C\u63A5\u4E0B\u6765\u5B66\u4E60 ln \u547D\u4EE4\u3002</p><p>ln \u547D\u4EE4\u7528\u4E8E\u7ED9\u6587\u4EF6\u521B\u5EFA\u94FE\u63A5\uFF0C\u6839\u636E Linux \u7CFB\u7EDF\u5B58\u50A8\u6587\u4EF6\u7684\u7279\u70B9\uFF0C\u94FE\u63A5\u7684\u65B9\u5F0F\u5206\u4E3A\u4EE5\u4E0B 2 \u79CD:</p><ul><li>\u8F6F\u94FE\u63A5: \u7C7B\u4F3C\u4E8E Windows \u7CFB\u7EDF\u4E2D\u7ED9\u6587\u4EF6\u521B\u5EFA\u5FEB\u6377\u65B9\u5F0F\uFF0C\u5373\u4EA7\u751F\u4E00\u4E2A\u7279\u6B8A\u7684\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u7528\u6765\u6307\u5411\u53E6\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6B64\u94FE\u63A5\u65B9\u5F0F\u540C\u6837\u9002\u7528\u4E8E\u76EE\u5F55\u3002</li><li>\u786C\u94FE\u63A5: \u6211\u4EEC\u77E5\u9053\uFF0C\u6587\u4EF6\u7684\u57FA\u672C\u4FE1\u606F\u90FD\u5B58\u50A8\u5728 inode \u4E2D\uFF0C\u800C\u786C\u94FE\u63A5\u6307\u7684\u5C31\u662F\u7ED9\u4E00\u4E2A\u6587\u4EF6\u7684 inode \u5206\u914D\u591A\u4E2A\u6587\u4EF6\u540D\uFF0C\u901A\u8FC7\u4EFB\u4F55\u4E00\u4E2A\u6587\u4EF6\u540D\uFF0C\u90FD\u53EF\u4EE5\u627E\u5230\u6B64\u6587\u4EF6\u7684 inode\uFF0C\u4ECE\u800C\u8BFB\u53D6\u8BE5\u6587\u4EF6\u7684\u6570\u636E\u4FE1\u606F\u3002</li></ul><p>ln \u547D\u4EE4\u7684\u57FA\u672C\u683C\u5F0F\u5982\u4E0B:</p><div class="language-shell-session ext-shell-session line-numbers-mode"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">[root@localhost ~]</span></span><span class="token shell-symbol important">#</span> <span class="token bash language-bash"><span class="token function">ln</span> <span class="token punctuation">[</span>\u9009\u9879<span class="token punctuation">]</span> \u6E90\u6587\u4EF6 \u76EE\u6807\u6587\u4EF6</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9009\u9879:</p><ul><li>-s: \u5EFA\u7ACB\u8F6F\u94FE\u63A5\u6587\u4EF6\u3002\u5982\u679C\u4E0D\u52A0 <code>-s</code> \u9009\u9879\uFF0C\u5219\u5EFA\u7ACB\u786C\u94FE\u63A5\u6587\u4EF6\uFF1B</li><li>-f: \u5F3A\u5236\u3002\u5982\u679C\u76EE\u6807\u6587\u4EF6\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5219\u5220\u9664\u76EE\u6807\u6587\u4EF6\u540E\u518D\u5EFA\u7ACB\u94FE\u63A5\u6587\u4EF6\uFF1B</li></ul><h3 id="ln-\u6269\u5C55\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#ln-\u6269\u5C55\u4ECB\u7ECD" aria-hidden="true">#</a> ln \u6269\u5C55\u4ECB\u7ECD</h3>`,24),r=p("\u70B9\u51FB\u524D\u5F80");function h(m,k){const e=c("RouterLink");return a(),l("div",null,[u,n("ul",null,[n("li",null,[i(e,{to:"/linux/command/ln.html"},{default:o(()=>[r]),_:1})])])])}var x=s(d,[["render",h],["__file","file.html.vue"]]);export{x as default};
