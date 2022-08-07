import{_ as n,o as s,c as e,e as a}from"./app.e3c83e88.js";const c={},o=a(`<h1 id="dirname\u3001-filename-\u548C-process-cwd-\u4E09\u8005\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#dirname\u3001-filename-\u548C-process-cwd-\u4E09\u8005\u7684\u533A\u522B" aria-hidden="true">#</a> <code>__dirname</code>\u3001<code>__filename</code> \u548C <code>process.cwd()</code> \u4E09\u8005\u7684\u533A\u522B</h1><ol><li><p><code>process.cwd()</code> \u65B9\u6CD5\u8FD4\u56DE Node.js \u8FDB\u7A0B\u5F53\u524D\u5DE5\u4F5C\u7684\u76EE\u5F55</p><p>\u4F8B: \u6211\u5728 <code>F:\\\u81EA\u5DF1\u7684\u6587\u4EF6\\\u81EA\u5DF1\u5728\u7F51\u4E0A\u5B66\u4E60\u7684\u77E5\u8BC6\u70B9\\node\u5B66\u4E60\\node-API\\process</code> \u8FD9\u4E2A\u6587\u4EF6\u52A0\u4E0B\u9762\u521B\u5EFA\u4E86\u4E00\u4E2A test.js \u5728\u8BE5 js \u6587\u4EF6\u4E2D\u5199\u4E0B\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u7136\u540E\u53F3\u952E <code>run test.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> cwd <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cwd<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u5982\u4E0B <code>F:\\\u81EA\u5DF1\u7684\u6587\u4EF6\\\u81EA\u5DF1\u5728\u7F51\u4E0A\u5B66\u4E60\u7684\u77E5\u8BC6\u70B9\\node\u5B66\u4E60\\node-API\\process</code></p></li><li><p><code>__dirname</code> \u662F Node.js \u7684\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\uFF0C\u83B7\u5F97\u5F53\u524D\u6587\u4EF6\u6240\u5728\u76EE\u5F55\u7684\u5B8C\u6574\u76EE\u5F55\u540D</p><p>\u8FD8\u5728\u4E0A\u9762\u7684 js \u6587\u4EF6\u4E2D\u8F93\u5165\u4E00\u4E0B\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u51FA\u5982\u4E0B <code>F:\\\u81EA\u5DF1\u7684\u6587\u4EF6\\\u81EA\u5DF1\u5728\u7F51\u4E0A\u5B66\u4E60\u7684\u77E5\u8BC6\u70B9\\node\u5B66\u4E60\\node-API\\process</code></p><p>\u73B0\u5728\u4E00\u770B\u611F\u89C9\u4E0A\u9762\u4E24\u4E2A\u65B9\u6CD5\u662F\u4E00\u6837\u7684\uFF0C\u5176\u5B9E\u4E0D\u662F\u3002node.js \u8FDB\u7A0B\u5F53\u524D\u5DE5\u4F5C\u7684\u76EE\u5F55\u6709\u53EF\u80FD\u4E0D\u662F\u8BE5\u6587\u4EF6\u6240\u5728\u76EE\u5F55\u7684\u5B8C\u6574\u76EE\u5F55\u3002\u4F8B\u5982: \u6211\u7528 <code>node webpack ..</code> \u6253\u5305\u4E86\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\uFF0C \u6211\u7528\u8FD9\u4E2A\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u751F\u4EA7\u51FA\u4E00\u5957\u5B8C\u6574\u7684\u9875\u9762\u67B6\u6784\uFF0C\u5728\u5E94\u7528\u7A0B\u5E8F\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D console.log(cwd) \u5728\u5B8C\u6574\u7684\u8FD9\u4E2A\u9875\u9762\u67B6\u6784\u4E2D\u6267\u884C\u542F\u52A8\u8FD9\u4E2A\u9879\u76EE\u7684\u547D\u4EE4\uFF0C\u5219\u5BF9\u5E94\u7684 cwd \u5C31\u662F\u5F53\u524D\u9879\u76EE\u6240\u5728\u7684\u7EDD\u5BF9\u8DEF\u5F84,\u800C\u4E0D\u662F\u5E94\u7528\u7A0B\u5E8F\u7684\u8DEF\u5F84</p></li><li><p><code>__filename</code> \u4E5F\u662F Node.js \u7684\u5168\u5C40\u53D8\u91CF Node.js \u4E2D\uFF0C\u5728\u4EFB\u4F55\u6A21\u5757\u6587\u4EF6\u5185\u90E8\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>__filename</code> \u53D8\u91CF\u83B7\u53D6\u5F53\u524D\u6A21\u5757\u6587\u4EF6\u7684\u5E26\u6709\u5B8C\u6574\u7EDD\u5BF9\u8DEF\u5F84\u7684\u6587\u4EF6\u540D</p></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8F93\u51FA <code>F:\\\u81EA\u5DF1\u7684\u6587\u4EF6\\\u81EA\u5DF1\u5728\u7F51\u4E0A\u5B66\u4E60\u7684\u77E5\u8BC6\u70B9\\node \u5B66\u4E60\\node-API\\process\\test.js</code></p>`,4),p=[o];function t(d,i){return s(),e("div",null,p)}var r=n(c,[["render",t],["__file","current-path.html.vue"]]);export{r as default};
