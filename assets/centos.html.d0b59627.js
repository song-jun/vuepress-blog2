import{_ as n,o as s,c as a,e}from"./app.e3c83e88.js";const i={},c=e(`<h2 id="\u7BA1\u7406\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u5DE5\u5177" aria-hidden="true">#</a> \u7BA1\u7406\u5DE5\u5177</h2><ul><li>yum (Centos 7)</li><li>dnf (Centos 8)</li></ul><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> yarn</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> --silent --location https://dl.yarnpkg.com/rpm/yarn.repo <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/yum.repos.d/yarn.repo

<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">yarn</span>
<span class="token comment">## OR ##</span>
<span class="token function">sudo</span> dnf <span class="token function">install</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u662F\u5426\u5B89\u88C5\u6210\u529F:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),l=[c];function t(o,r){return s(),a("div",null,l)}var u=n(i,[["render",t],["__file","centos.html.vue"]]);export{u as default};
