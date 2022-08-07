import{_ as e,o as n,c as s,e as i}from"./app.e3c83e88.js";const a={},d=i(`<h1 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h1><p><code>find</code> \u547D\u4EE4\u7528\u4E8E\u5BFB\u627E\u6587\u4EF6\uFF0C\u4F1A\u5305\u62EC\u5F53\u524D\u76EE\u5F55\u7684\u6240\u6709\u4E0B\u7EA7\u76EE\u5F55\u3002</p><p>\u5982\u679C\u4E0D\u5E26\u4EFB\u4F55\u53C2\u6570\uFF0C<code>find</code> \u6587\u4EF6\u4F1A\u5217\u51FA\u5F53\u524D\u76EE\u5F55\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u751A\u81F3\u8FD8\u5305\u62EC\u76F8\u5BF9\u8DEF\u5F84\u3002\u5982\u679C\u628A\u7ED3\u679C\u5BFC\u5165 <code>sort</code> \u6548\u679C\u66F4\u597D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">find</span> <span class="token operator">|</span> <span class="token function">sort</span>
<span class="token builtin class-name">.</span>
./Makefile
./README
./build
./client.c
./client.h
./common.h
./project.c
./server.c
./server.h
./tests
./tests/suite1.pl
./tests/suite2.pl
./tests/suite3.pl
./tests/suite4.pl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60F3\u8981 <code>ls -l</code> \u6837\u5F0F\u7684\u5217\u8868\uFF0C\u53EA\u8981\u5728 <code>find</code> \u540E\u9762\u52A0\u4E0A <code>-ls</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> -ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>find</code> \u6709\u5B83\u81EA\u5DF1\u7684\u4E00\u5957\u590D\u6742\u7684\u8FC7\u6EE4\u8BED\u53E5\u3002\u4E0B\u9762\u5217\u4E3E\u7684\u662F\u4E00\u4E9B\u6700\u5E38\u7528\u7684\u60A8\u53EF\u4EE5\u7528\u4EE5\u83B7\u53D6\u67D0\u4E9B\u6587\u4EF6\u5217\u8868\u7684\u8FC7\u6EE4\u5668:</p><ul><li><code>find -name &#39;*.c&#39;</code> \u2014\u2014 \u67E5\u627E\u7B26\u5408\u67D0 shell \u5F0F\u6837\u5F0F\u7684\u6587\u4EF6\u540D\u7684\u6587\u4EF6\u3002\u7528 iname \u5F00\u542F\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u641C\u7D22\u3002</li><li><code>find -path &#39;_test_&#39;</code> \u2014\u2014 \u67E5\u627E\u7B26\u5408\u67D0 shell \u5F0F\u6837\u5F0F\u7684\u8DEF\u5F84\u7684\u6587\u4EF6\u3002\u7528 ipath \u5F00\u542F\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u641C\u7D22\u3002</li><li><code>find -mtime -5</code> \u2014\u2014 \u67E5\u627E\u8FD1\u4E94\u5929\u5185\u7F16\u8F91\u8FC7\u7684\u6587\u4EF6\u3002\u60A8\u4E5F\u53EF\u4EE5\u7528 +5 \u6765\u67E5\u627E\u4E94\u5929\u4E4B\u524D\u7F16\u8F91\u8FC7\u7684\u6587\u4EF6\u3002</li><li><code>find -newer server.c</code> \u2014\u2014 \u67E5\u627E\u6BD4 server.c \u66F4\u65B0\u7684\u6587\u4EF6\u3002</li><li><code>find -type d</code> \u2014\u2014 \u67E5\u627E\u6240\u6709\u6587\u4EF6\u5939\u3002\u5982\u679C\u60F3\u627E\u51FA\u6240\u6709\u6587\u4EF6\uFF0C\u90A3\u5C31\u7528 <code>-type f</code>\uFF1B\u627E\u7B26\u53F7\u8FDE\u63A5\u5C31\u7528 <code>-type l</code>\u3002</li></ul><p>\u8981\u6CE8\u610F\uFF0C\u4E0A\u9762\u63D0\u5230\u7684\u8FD9\u4E9B\u8FC7\u6EE4\u5668\u90FD\u662F\u53EF\u4EE5\u7EC4\u5408\u4F7F\u7528\u7684\uFF0C\u4F8B\u5982\u627E\u51FA\u8FD1\u4E24\u5929\u5185\u7F16\u8F91\u8FC7\u7684 C \u6E90\u7801:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> -name <span class="token string">&#39;*.c&#39;</span> -mtime -2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C find \u5BF9\u641C\u7D22\u7ED3\u679C\u6240\u91C7\u53D6\u7684\u52A8\u4F5C\u53EA\u662F\u7B80\u5355\u5730\u901A\u8FC7\u6807\u51C6\u8F93\u51FA\u8F93\u51FA\u4E00\u4E2A\u5217\u8868\uFF0C\u7136\u800C\u5176\u5B9E\u8FD8\u6709\u5176\u4ED6\u4E00\u4E9B\u6709\u7528\u7684\u540E\u7EED\u52A8\u4F5C\u3002</p><ul><li>-ls \u2014\u2014 \u5982\u524D\u6587\uFF0C\u63D0\u4F9B\u4E86\u4E00\u79CD\u7C7B ls -l \u5F0F\u7684\u5217\u8868\u3002</li><li>-delete \u2014\u2014 \u5220\u9664\u7B26\u5408\u67E5\u627E\u6761\u4EF6\u7684\u6587\u4EF6\u3002</li><li>-exec \u2014\u2014 \u5BF9\u641C\u7D22\u7ED3\u679C\u91CC\u7684\u6BCF\u4E2A\u6587\u4EF6\u90FD\u8FD0\u884C\u67D0\u4E2A\u547D\u4EE4\uFF0C <code>{}</code> \u4F1A\u88AB\u66FF\u6362\u6210\u9002\u5F53\u7684\u6587\u4EF6\u540D\uFF0C\u5E76\u4E14\u547D\u4EE4\u7528 <code>\\;</code> \u7EC8\u7ED3\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> -name <span class="token string">&#39;*.pl&#39;</span> -exec perl -c <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u60A8\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>+</code> \u4F5C\u4E3A\u7EC8\u6B62\u7B26\u6765\u5BF9\u6240\u6709\u7ED3\u679C\u8FD0\u884C\u4E00\u6B21\u547D\u4EE4\u3002\u6211\u8FD8\u53D1\u73B0\u4E00\u4E2A\u6211\u7ECF\u5E38\u4F7F\u7528\u7684\u5C0F\u6280\u5DE7\uFF0C\u5C31\u662F\u7528 <code>find</code> \u751F\u6210\u4E00\u4E2A\u6587\u4EF6\u5217\u8868\uFF0C\u7136\u540E\u5728 Vim \u7684\u5782\u76F4\u5206\u7A97\u4E2D\u7F16\u8F91:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">find</span> -name <span class="token string">&#39;*.c&#39;</span> -exec <span class="token function">vim</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> +
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),l=[d];function c(o,t){return n(),s("div",null,l)}var p=e(a,[["render",c],["__file","find.html.vue"]]);export{p as default};
