import{_ as n,o as s,c as a,e}from"./app.cc4bf3f5.js";const i={},l=e(`<div class="custom-container tip"><p class="custom-container-title">\u5DE5\u5177\u5B89\u88C5</p><p>linux\u4E0B\u5B9D\u5854\u5B89\u88C5<br> git \u5B89\u88C5<br> nginx \u5B89\u88C5 ......</p></div><h2 id="\u5B9D\u5854\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B9D\u5854\u5B89\u88C5" aria-hidden="true">#</a> \u5B9D\u5854\u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y <span class="token function">wget</span> <span class="token operator">&amp;&amp;</span> <span class="token function">wget</span> -O install.sh http://download.bt.cn/install/install_6.0.sh <span class="token operator">&amp;&amp;</span> <span class="token function">sh</span> install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#git-\u5B89\u88C5" aria-hidden="true">#</a> git \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5B89\u88C5</span>
yum -y <span class="token function">install</span> <span class="token function">git</span>
<span class="token comment">#\u5378\u8F7D</span>
yum -y remove <span class="token function">git</span>
<span class="token comment">#\u67E5\u770B\u7248\u672C</span>
<span class="token function">git</span> --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#mysql\u7248\u672C" aria-hidden="true">#</a> mysql\u7248\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nginx-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#nginx-\u5B89\u88C5" aria-hidden="true">#</a> nginx \u5B89\u88C5</h2><ul><li>\u4F7F\u7528 yum \u547D\u4EE4\u5B89\u88C5 Nginx</li><li>\u8F93\u5165\u6307\u4EE4: yum install -y nginx</li><li>\u5B89\u88C5\u5B8C\u6210\u540E, \u542F\u52A8 Nginx</li><li>\u8F93\u5165\u6307\u4EE4: nginx</li><li>\u8BBE\u7F6E Nginx \u5F00\u673A\u542F\u52A8</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u91CD\u542F</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> nginx restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),c=[l];function t(d,r){return s(),a("div",null,c)}var u=n(i,[["render",t],["__file","liunx\u5DE5\u5177\u5B89\u88C5.html.vue"]]);export{u as default};
