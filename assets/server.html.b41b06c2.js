import{_ as s,o as n,c as e,e as i}from"./app.238d4ac4.js";const a={},l=i(`<p>\u5728\u8FDC\u7A0B\u4ED3\u5E93\u4E00\u8282\u4E2D\uFF0C\u6211\u4EEC\u8BB2\u4E86\u8FDC\u7A0B\u4ED3\u5E93\u5B9E\u9645\u4E0A\u548C\u672C\u5730\u4ED3\u5E93\u6CA1\u5565\u4E0D\u540C\uFF0C\u7EAF\u7CB9\u4E3A\u4E86 7x24 \u5C0F\u65F6\u5F00\u673A\u5E76\u4EA4\u6362\u5927\u5BB6\u7684\u4FEE\u6539\u3002</p><p>GitHub \u5C31\u662F\u4E00\u4E2A\u514D\u8D39\u6258\u7BA1\u4EE3\u7801\u7684\u8FDC\u7A0B\u4ED3\u5E93\u3002\u4F46\u662F\u5BF9\u4E8E\u67D0\u4E9B\u89C6\u6E90\u4EE3\u7801\u5982\u751F\u547D\u7684\u5546\u4E1A\u516C\u53F8\u6765\u8BF4\uFF0C\u4E0D\u60F3\u5C06\u6E90\u4EE3\u7801\u63D0\u4EA4\u7ED9\u4EFB\u4F55\u7B2C\u4E09\u65B9\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5C31\u9700\u8981\u642D\u5EFA Git \u670D\u52A1\u5668\u3002</p><p>\u642D\u5EFA Git \u670D\u52A1\u5668\u9700\u8981\u51C6\u5907\u4E00\u53F0\u8FD0\u884C Linux \u7684\u673A\u5668\uFF0C\u5F3A\u70C8\u63A8\u8350\u7528 Ubuntu \u6216 Debian\uFF0C\u8FD9\u6837\uFF0C\u901A\u8FC7\u51E0\u6761\u7B80\u5355\u7684 <code>apt</code> \u547D\u4EE4\u5C31\u53EF\u4EE5\u5B8C\u6210\u5B89\u88C5\u3002</p><ul><li><p><strong>Ubuntu</strong> \u6216 <strong>Debian</strong></p><p>\u5047\u8BBE\u60A8\u5DF2\u7ECF\u6709 sudo \u6743\u9650\u7684\u7528\u6237\u8D26\u53F7\uFF0C\u4E0B\u9762\uFF0C\u6B63\u5F0F\u5F00\u59CB\u5B89\u88C5\u3002</p><ul><li><p>\u7B2C\u4E00\u6B65\uFF0C\u5B89\u88C5 git:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u7B2C\u4E8C\u6B65\uFF0C\u521B\u5EFA\u4E00\u4E2A git \u7528\u6237\uFF0C\u7528\u6765\u8FD0\u884C git \u670D\u52A1:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> adduser <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u7B2C\u4E09\u6B65\uFF0C\u521B\u5EFA\u8BC1\u4E66\u767B\u5F55:</p><p>\u6536\u96C6\u6240\u6709\u9700\u8981\u767B\u5F55\u7684\u7528\u6237\u7684\u516C\u94A5\uFF0C\u5C31\u662F\u4ED6\u4EEC\u81EA\u5DF1\u7684 <code>id_rsa.pub</code> \u6587\u4EF6\uFF0C\u628A\u6240\u6709\u516C\u94A5\u5BFC\u5165\u5230 <code>/home/git/.ssh/authorized_keys</code> \u6587\u4EF6\u91CC\uFF0C\u4E00\u884C\u4E00\u4E2A\u3002</p></li><li><p>\u7B2C\u56DB\u6B65\uFF0C\u521D\u59CB\u5316 Git \u4ED3\u5E93:</p><p>\u5148\u9009\u5B9A\u4E00\u4E2A\u76EE\u5F55\u4F5C\u4E3A Git \u4ED3\u5E93\uFF0C\u5047\u5B9A\u662F <code>/srv/sample.git</code>\uFF0C\u5728 <code>/srv</code> \u76EE\u5F55\u4E0B\u8F93\u5165\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">git</span> init --bare sample.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Git \u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2A\u88F8\u4ED3\u5E93\uFF0C\u88F8\u4ED3\u5E93\u6CA1\u6709\u5DE5\u4F5C\u533A\uFF0C\u56E0\u4E3A\u670D\u52A1\u5668\u4E0A\u7684 Git \u4ED3\u5E93\u7EAF\u7CB9\u662F\u4E3A\u4E86\u5171\u4EAB\uFF0C\u6240\u4EE5\u4E0D\u8BA9\u7528\u6237\u76F4\u63A5\u767B\u5F55\u5230\u670D\u52A1\u5668\u4E0A\u53BB\u6539\u5DE5\u4F5C\u533A\uFF0C\u5E76\u4E14\u670D\u52A1\u5668\u4E0A\u7684 Git \u4ED3\u5E93\u901A\u5E38\u90FD\u4EE5 <code>.git</code> \u7ED3\u5C3E\u3002\u7136\u540E\uFF0C\u628A owner \u6539\u4E3A git:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chown</span> -R git:git sample.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u7B2C\u4E94\u6B65\uFF0C\u7981\u7528 shell \u767B\u5F55:</p><p>\u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u7B2C\u4E8C\u6B65\u521B\u5EFA\u7684 git \u7528\u6237\u4E0D\u5141\u8BB8\u767B\u5F55 shell\uFF0C\u8FD9\u53EF\u4EE5\u901A\u8FC7\u7F16\u8F91 <code>/etc/passwd</code> \u6587\u4EF6\u5B8C\u6210\u3002\u627E\u5230\u7C7B\u4F3C\u4E0B\u9762\u7684\u4E00\u884C:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>git:x:1001:1001:,,,:/home/git:/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6539\u4E3A:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\uFF0Cgit \u7528\u6237\u53EF\u4EE5\u6B63\u5E38\u901A\u8FC7 ssh \u4F7F\u7528 git\uFF0C\u4F46\u65E0\u6CD5\u767B\u5F55 shell\uFF0C\u56E0\u4E3A\u6211\u4EEC\u4E3A git \u7528\u6237\u6307\u5B9A\u7684 git-shell \u6BCF\u6B21\u4E00\u767B\u5F55\u5C31\u81EA\u52A8\u9000\u51FA\u3002</p></li><li><p>\u7B2C\u516D\u6B65\uFF0C\u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93:</p><p>\u73B0\u5728\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>git clone</code> \u547D\u4EE4\u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93\u4E86\uFF0C\u5728\u5404\u81EA\u7684\u7535\u8111\u4E0A\u8FD0\u884C:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> clone git@server:/srv/sample.git
Cloning into <span class="token string">&#39;sample&#39;</span><span class="token punctuation">..</span>.
warning: You appear to have cloned an empty repository.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5269\u4E0B\u7684\u63A8\u9001\u5C31\u7B80\u5355\u4E86\u3002</p></li></ul></li><li><p><strong>Centos</strong></p><ol><li><p>\u5B89\u88C5 Git</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> curl-devel expat-devel gettext-devel openssl-devel zlib-devel perl-devel
yum <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u521B\u5EFA\u4E00\u4E2A git \u7528\u6237\u7EC4\u548C\u7528\u6237\uFF0C\u7528\u6765\u8FD0\u884C git \u670D\u52A1:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">groupadd</span> <span class="token function">git</span>
<span class="token function">useradd</span> <span class="token function">git</span> -g <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u521B\u5EFA\u8BC1\u4E66\u767B\u5F55</p><p>\u6536\u96C6\u6240\u6709\u9700\u8981\u767B\u5F55\u7684\u7528\u6237\u7684\u516C\u94A5\uFF0C\u516C\u94A5\u4F4D\u4E8E <code>id_rsa.pub</code> \u6587\u4EF6\u4E2D\uFF0C\u5C06\u516C\u94A5\u5BFC\u5165\u5230 <code>/home/git/.ssh/authorized_keys</code> \u6587\u4EF6\u91CC\uFF0C\u4E00\u884C\u4E00\u4E2A\u3002</p><p>\u5982\u679C\u6CA1\u6709\u8BE5\u6587\u4EF6\u521B\u5EFA\u5B83:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/git/
<span class="token function">mkdir</span> .ssh
<span class="token function">chmod</span> <span class="token number">755</span> .ssh
<span class="token function">touch</span> .ssh/authorized_keys
<span class="token function">chmod</span> <span class="token number">644</span> .ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u521D\u59CB\u5316 Git \u4ED3\u5E93</p><p>\u9996\u5148\u6211\u4EEC\u9009\u5B9A\u4E00\u4E2A\u76EE\u5F55\u4F5C\u4E3A Git \u4ED3\u5E93\uFF0C\u5047\u5B9A\u662F <code>/home/gitrepo/test.git</code>\uFF0C\u5728 <code>/home/gitrepo</code> \u76EE\u5F55\u4E0B\u8F93\u5165\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> /home
$ <span class="token function">mkdir</span> gitrepo
$ <span class="token function">chown</span> git:git gitrepo/
$ <span class="token builtin class-name">cd</span> gitrepo

$ <span class="token function">git</span> init --bare test.git
Initialized empty Git repository <span class="token keyword">in</span> /home/gitrepo/runoob.git/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u547D\u4EE4 Git \u521B\u5EFA\u4E00\u4E2A\u7A7A\u4ED3\u5E93\uFF0C\u670D\u52A1\u5668\u4E0A\u7684 Git \u4ED3\u5E93\u901A\u5E38\u90FD\u4EE5 <code>.git</code> \u7ED3\u5C3E\u3002\u7136\u540E\uFF0C\u628A\u4ED3\u5E93\u6240\u5C5E\u7528\u6237\u6539\u4E3A git:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chown</span> -R git:git runoob.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u514B\u9686\u4ED3\u5E93</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> clone git@192.168.45.4:/home/gitrepo/runoob.git
Cloning into <span class="token string">&#39;runoob&#39;</span><span class="token punctuation">..</span>.
warning: You appear to have cloned an empty repository.
Checking connectivity<span class="token punctuation">..</span>. done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>192.168.45.4 \u4E3A Git \u6240\u5728\u670D\u52A1\u5668 ip \uFF0C\u60A8\u9700\u8981\u5C06\u5176\u4FEE\u6539\u4E3A\u60A8\u81EA\u5DF1\u7684 Git \u670D\u52A1 ip\u3002</p><p>\u8FD9\u6837\u6211\u4EEC\u7684 Git \u670D\u52A1\u5668\u5B89\u88C5\u5C31\u5B8C\u6210\u3002</p></li></ul>`,4),d=[l];function t(c,o){return n(),e("div",null,d)}var r=s(a,[["render",t],["__file","server.html.vue"]]);export{r as default};
