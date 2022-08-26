import{_ as p,o as l,c as o,b as n,a as e,w as u,e as a,d as s,r as t}from"./app.cc4bf3f5.js";const d={},r=a('<p>\u8BE5\u64CD\u4F5C\u5C06\u68C0\u51FA\u60A8\u7684\u5B58\u50A8\u5E93 <code>$GITHUB_WORKSPACE</code>\uFF0C\u4F7F\u60A8\u7684\u5DE5\u4F5C\u6D41\u53EF\u4EE5\u8BBF\u95EE\u5B83\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u4E8E\u89E6\u53D1\u5DE5\u4F5C\u6D41\u7684 ref / SHA\uFF0C\u4E3A\u4E86\u901F\u5EA6\u4EC5\u63D0\u53D6\u4E00\u6B21\u63D0\u4EA4\u3002\u5982\u9700\u83B7\u53D6\u6240\u6709\u5206\u652F\u548C\u6807\u7B7E\u7684\u6240\u6709\u5386\u53F2\u8BB0\u5F55\uFF0C\u9700\u8981\u8BBE\u7F6E\u8BBE\u7F6E <code>fetch-depth: 0</code>\u3002</p><p>\u8EAB\u4EFD\u9A8C\u8BC1\u4EE4\u724C\u4FDD\u7559\u5728\u672C\u5730 Git \u914D\u7F6E\u4E2D\u3002\u8FD9\u4F7F\u60A8\u7684\u811A\u672C\u53EF\u4EE5\u8FD0\u884C\u7ECF\u8FC7\u8EAB\u4EFD\u9A8C\u8BC1\u7684 Git \u547D\u4EE4\u3002\u5728\u5DE5\u4F5C\u540E\u6E05\u7406\u671F\u95F4\u5C06\u5220\u9664\u4EE4\u724C\u3002</p><p>\u8BBE\u7F6E <code>persist-credentials: false</code> \u53D6\u6D88\u4FDD\u7559\u3002</p><h2 id="\u5E38\u7528\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u53C2\u6570" aria-hidden="true">#</a> \u5E38\u7528\u53C2\u6570</h2><h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h3><p>\u9700\u8981\u68C0\u51FA\u7684 ref\uFF0C\u5373\u53EF\u4EE5\u586B\u5165\u7279\u5B9A\u5206\u652F\u3001commitID \u6216 tag\u3002\u9ED8\u8BA4\u4E3A\u89E6\u53D1\u5F53\u524D\u5DE5\u4F5C\u6D41\u7684 ref\u3002</p><h3 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> token</h3>',8),k=s("\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C\uFF0C\u53C8\u79F0 Personal access token (PAT)\uFF0C\u7528\u4E8E\u914D\u7F6E\u673A\u5668 Git \u914D\u7F6E\uFF0C\u4EE5\u8FD0\u884C\u9700\u8981\u8EAB\u4EFD\u9A8C\u8BC1\u7684 Git \u547D\u4EE4\uFF0C\u8BE6\u89C1 "),h=s("GitHub Token"),v=s("\u3002"),m=n("div",null,[n("p",null,[s("\u9ED8\u8BA4\u4E3A\u5DE5\u4F5C\u6D41\u63D0\u4F9B\u7684 "),n("code",{"v-pre":""},"${{ github.token }}")])],-1),b=a(`<h3 id="fetch-depth" tabindex="-1"><a class="header-anchor" href="#fetch-depth" aria-hidden="true">#</a> fetch-depth</h3><p>\u8981\u83B7\u53D6\u7684\u63D0\u4EA4\u6570\u3002 <code>0</code> \u8868\u793A\u6240\u6709\u5206\u652F\u548C\u6807\u7B7E\u7684\u6240\u6709\u5386\u53F2\u8BB0\u5F55\u3002</p><p>\u9ED8\u8BA4\u4E3A <code>1</code></p><h3 id="submodules" tabindex="-1"><a class="header-anchor" href="#submodules" aria-hidden="true">#</a> submodules</h3><p>\u662F\u5426\u68C0\u51FA\u5B50\u6A21\u5757\u3002<code>true</code> \u68C0\u51FA\u5B50\u6A21\u5757 <code>recursive</code> \u4F1A\u9012\u5F52\u68C0\u51FA\u5B50\u6A21\u5757\u3002</p><p>\u9ED8\u8BA4\u4E3A <code>false</code></p><h2 id="\u5176\u4ED6\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u53C2\u6570" aria-hidden="true">#</a> \u5176\u4ED6\u53C2\u6570</h2><h3 id="repository" tabindex="-1"><a class="header-anchor" href="#repository" aria-hidden="true">#</a> repository</h3><p>\u5E26\u6709\u4F5C\u8005\u7684\u4ED3\u5E93\u540D\uFF0C\u5982 <code>Hope-Studio/innenu-app</code>\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u4ED3\u5E93\u3002</p><h3 id="persist-credentials" tabindex="-1"><a class="header-anchor" href="#persist-credentials" aria-hidden="true">#</a> persist-credentials</h3><p>\u662F\u5426\u5C06 token \u7B49\u4FE1\u606F\u7528\u4E8E\u672C\u5730\u7684 Git \u914D\u7F6E\uFF0C\u4EE5\u4FBF\u540E\u7EED Git \u547D\u4EE4\u53EF\u4EE5\u8BBF\u95EE\u3002</p><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h3><p><code>$GITHUB_WORKSPACE</code> \u4E0B\u7528\u4E8E\u653E\u7F6E\u5B58\u50A8\u5E93\u7684\u76F8\u5BF9\u8DEF\u5F84</p><p>\u9ED8\u8BA4\u4E3A <code>./</code></p><h3 id="ssh-key" tabindex="-1"><a class="header-anchor" href="#ssh-key" aria-hidden="true">#</a> ssh-key</h3><p>\u7528\u4E8E\u83B7\u53D6\u4ED3\u5E93\u7684 SSH \u79C1\u94A5\uFF0C\u7528\u4E8E\u914D\u7F6E\u673A\u5668 Git \u914D\u7F6E\uFF0C\u4EE5\u8FD0\u884C\u9700\u8981\u8EAB\u4EFD\u9A8C\u8BC1\u7684 Git \u547D\u4EE4\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u9ED8\u8BA4\u7684 token \u6709\u6743\u9650\u62C9\u53D6\u5DE5\u4F5C\u6D41\u6240\u5728\u7684\u4ED3\u5E93\u3002</p><p>\u5982\u679C\u4ED3\u5E93\u5305\u542B\u4E86\u5B58\u653E\u4E8E\u5176\u4ED6\u4EE3\u7801\u6258\u7BA1\u5546\u6216\u79C1\u6709\u7684 submodules\uFF0C\u6216\u662F\u7684\u4ED3\u5E93\uFF0C\u53EF\u80FD\u9700\u8981\u8BBE\u7F6E\u4E0A\u8FF0\u4E24\u9009\u9879\u4E4B\u4E00\uFF0C\u624D\u80FD\u62C9\u53D6\u5BF9\u5E94 submodule\u3002</p></div><h3 id="ssh-known-hosts" tabindex="-1"><a class="header-anchor" href="#ssh-known-hosts" aria-hidden="true">#</a> ssh-known-hosts</h3><p>\u9664\u4E86\u7528\u6237\u548C\u5168\u5C40\u4E3B\u673A\u5BC6\u94A5\u6570\u636E\u5E93\u5916\u7684\u5DF2\u77E5\u4E3B\u673A\u3002\u53EF\u4EE5\u4F7F\u7528 <code>ssh-keyscan</code> \u83B7\u5F97\u4E3B\u673A\u7684\u516C\u5171 SSH \u5BC6\u94A5\u3002 \u4F8B\u5982\uFF0C<code>ssh-keyscan github.com</code>\u3002 github.com \u7684\u516C\u94A5\u603B\u662F\u9690\u5F0F\u6DFB\u52A0\u7684\u3002</p><div class="custom-container info"><p class="custom-container-title">\u76F8\u5173\u4FE1\u606F</p><p>\u5F53\u60A8\u9700\u8981\u83B7\u53D6\u5176\u4ED6\u4EE3\u7801\u6258\u7BA1\u5546\u7684\u4ED3\u5E93\u65F6\uFF0C\u9700\u8981\u8BBE\u7F6E\u6B64\u9009\u9879</p></div><h3 id="ssh-strict" tabindex="-1"><a class="header-anchor" href="#ssh-strict" aria-hidden="true">#</a> ssh-strict</h3><p>\u662F\u5426\u8FDB\u884C\u4E25\u683C\u7684 ssh \u6821\u9A8C\uFF0C\u9ED8\u8BA4\u4E3A <code>true</code>\uFF0C\u5373\u4E0D\u68C0\u67E5 IP\uFF0C\u800C\u662F\u68C0\u67E5 Host \u7ED9\u51FA\u7684\u5BC6\u94A5\u6307\u7EB9\u662F\u5426\u5339\u914D\u3002</p><h3 id="clean" tabindex="-1"><a class="header-anchor" href="#clean" aria-hidden="true">#</a> clean</h3><p>\u662F\u5426\u5728\u62C9\u53D6\u4EE3\u7801\u524D\u6267\u884C <code>git clean -ffdx &amp;&amp; git reset --hard HEAD</code>\u3002</p><p>\u9ED8\u8BA4\u4E3A <code>true</code></p><h3 id="lfs" tabindex="-1"><a class="header-anchor" href="#lfs" aria-hidden="true">#</a> lfs</h3><p>\u662F\u5426\u4E0B\u8F7D Git-LFS \u6587\u4EF6\u3002</p><p>\u9ED8\u8BA4\u4E3A <code>false</code></p><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2><ul><li><p>\u83B7\u53D6\u6240\u6709\u6807\u7B7E\u4E0E\u5386\u53F2:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u68C0\u51FA\u7279\u5B9A\u5206\u652F</p></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">ref</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u68C0\u51FA <code>HEAD^</code></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> git checkout HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5E76\u5217\u68C0\u51FA\u591A\u4E2A repo</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> main

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout tools repo
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">repository</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>org/my<span class="token punctuation">-</span>tools
    <span class="token key atrule">path</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5D4C\u5957\u68C0\u51FA\u591A\u4E2A repo</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout tools repo
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">repository</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>org/my<span class="token punctuation">-</span>tools
    <span class="token key atrule">path</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u68C0\u51FA\u591A\u4E2A\u79C1\u6709 repo</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> main

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout private tools
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">repository</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>org/my<span class="token punctuation">-</span>private<span class="token punctuation">-</span>tools
    <span class="token key atrule">token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GitHub_PAT <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># \`GitHub_PAT\` is a secret that contains your PAT</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,32),y=n("div",{class:"custom-container info"},[n("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F"),n("div",null,[n("p",null,[n("code",{"v-pre":""},"${{ github.token }}"),s(" \u4EC5\u9650\u4E8E\u5F53\u524D\u5B58\u50A8\u5E93\uFF0C\u56E0\u6B64\uFF0C\u5982\u679C\u8981\u7B7E\u51FA\u5176\u4ED6\u79C1\u6709\u5B58\u50A8\u5E93\uFF0C\u5219\u9700\u8981\u63D0\u4F9B\u81EA\u5DF1\u7684 PAT\u3002")])])],-1),g=a(`<ul><li><p>\u68C0\u51FA PR HEAD commit \u800C\u4E0D\u662F merge commit</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">ref</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.pull_request.head.sha <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5F53\u5173\u95ED PR \u65F6\u5C06\u5176\u68C0\u51FA</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>opened<span class="token punctuation">,</span> synchronize<span class="token punctuation">,</span> closed<span class="token punctuation">]</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528\u5185\u7F6E token \u8FDB\u884C\u63D0\u4EA4</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">on</span><span class="token punctuation">:</span> push
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          date &gt; generated.txt
          git config user.name github-actions
          git config user.email github-actions@github.com
          git add .
          git commit -m &quot;generated&quot;
          git push</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u5730\u5740" aria-hidden="true">#</a> \u5730\u5740</h2>`,2),f=s("\u5730\u5740: "),_={href:"https://github.com/actions/checkout",target:"_blank",rel:"noopener noreferrer"},x=s("https://github.com/actions/checkout");function w(G,H){const c=t("RouterLink"),i=t("ExternalLinkIcon");return l(),o("div",null,[r,n("p",null,[k,e(c,{to:"/code/github/token.html"},{default:u(()=>[h]),_:1}),v]),m,b,y,g,n("p",null,[f,n("a",_,[x,e(i)])])])}var P=p(d,[["render",w],["__file","checkout.html.vue"]]);export{P as default};
