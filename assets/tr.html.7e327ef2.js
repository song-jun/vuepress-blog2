import{_ as e,o as s,c as a,e as n}from"./app.cc4bf3f5.js";const r={},i=n(`<h1 id="tr" tabindex="-1"><a class="header-anchor" href="#tr" aria-hidden="true">#</a> tr</h1><p><code>tr</code> \u547D\u4EE4\u7528\u4E8E\u6309\u7167\u7ED9\u5B9A\u6A21\u5F0F\u8F6C\u6362\u6587\u672C\u3002</p><p>\u4E0B\u9762\u662F <code>example.txt</code> \u6587\u4EF6\u7684\u5185\u5BB9\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Hello World Foo Bar Baz<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>tr</code> \u547D\u4EE4\u53EF\u4EE5\u5C06\u6240\u6709\u5C0F\u5199\u5B57\u6BCD\u8F6C\u6362\u4E3A\u5927\u5199\u5B57\u6BCD\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> example.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39;a-z&#39;</span> <span class="token string">&#39;A-Z&#39;</span>
HELLO WORLD FOO BAR BAZ<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>tr</code> \u547D\u4EE4\u8FD8\u53EF\u4EE5\u5C06\u6240\u6709\u7A7A\u683C\u8F6C\u4E3A\u6362\u884C\u7B26\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> example.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">&#39; &#39;</span> <span class="token string">&#39;\\n&#39;</span>
Hello
World
Foo
Bar
Baz<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[i];function t(c,o){return s(),a("div",null,l)}var p=e(r,[["render",t],["__file","tr.html.vue"]]);export{p as default};
