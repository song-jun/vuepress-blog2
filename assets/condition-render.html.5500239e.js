import{_ as a,o as n,c as s,e as t}from"./app.edc3ba14.js";const e={},p=t(`<h2 id="wx-if" tabindex="-1"><a class="header-anchor" href="#wx-if" aria-hidden="true">#</a> wx:if</h2><p>\u5728\u6846\u67B6\u4E2D\uFF0C\u4F7F\u7528 <code>wx:if=&quot;&quot;</code> \u6765\u5224\u65AD\u662F\u5426\u9700\u8981\u6E32\u67D3\u8BE5\u4EE3\u7801\u5757:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{condition}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> True <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u7528 <code>wx:elif</code> \u548C <code>wx:else</code> \u6765\u6DFB\u52A0\u4E00\u4E2A <code>else</code> \u5757:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{length &gt; 5}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 1 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>elif</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{length &gt; 2}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>else</span><span class="token punctuation">&gt;</span></span> 3 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="block-wx-if" tabindex="-1"><a class="header-anchor" href="#block-wx-if" aria-hidden="true">#</a> block wx:if</h2><p>\u56E0\u4E3A <code>wx:if</code> \u662F\u4E00\u4E2A\u63A7\u5236\u5C5E\u6027\uFF0C\u9700\u8981\u5C06\u5B83\u6DFB\u52A0\u5230\u4E00\u4E2A\u6807\u7B7E\u4E0A\u3002\u5982\u679C\u8981\u4E00\u6B21\u6027\u5224\u65AD\u591A\u4E2A\u7EC4\u4EF6\u6807\u7B7E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A <code>&lt;block /&gt;</code> \u6807\u7B7E\u5C06\u591A\u4E2A\u7EC4\u4EF6\u5305\u88C5\u8D77\u6765\uFF0C\u5E76\u5728\u4E0A\u8FB9\u4F7F\u7528 <code>wx:if</code> \u63A7\u5236\u5C5E\u6027\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>block</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{true}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> view1 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> view2 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>block</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>&lt;block /&gt;</code> \u5E76\u4E0D\u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5B83\u4EC5\u4EC5\u662F\u4E00\u4E2A\u5305\u88C5\u5143\u7D20\uFF0C\u4E0D\u4F1A\u5728\u9875\u9762\u4E2D\u505A\u4EFB\u4F55\u6E32\u67D3\uFF0C\u53EA\u63A5\u53D7\u63A7\u5236\u5C5E\u6027\u3002</p></div><h2 id="wx-if-vs-hidden" tabindex="-1"><a class="header-anchor" href="#wx-if-vs-hidden" aria-hidden="true">#</a> wx:if vs hidden</h2><p>\u56E0\u4E3A <code>wx:if</code> \u4E4B\u4E2D\u7684\u6A21\u677F\u4E5F\u53EF\u80FD\u5305\u542B\u6570\u636E\u7ED1\u5B9A\uFF0C\u6240\u4EE5\u5F53 <code>wx:if</code> \u7684\u6761\u4EF6\u503C\u5207\u6362\u65F6\uFF0C\u6846\u67B6\u6709\u4E00\u4E2A\u5C40\u90E8\u6E32\u67D3\u7684\u8FC7\u7A0B\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u786E\u4FDD\u6761\u4EF6\u5757\u5728\u5207\u6362\u65F6\u9500\u6BC1\u6216\u91CD\u65B0\u6E32\u67D3\u3002</p><p>\u540C\u65F6 <code>wx:if</code> \u4E5F\u662F\u60F0\u6027\u7684\uFF0C\u5982\u679C\u5728\u521D\u59CB\u6E32\u67D3\u6761\u4EF6\u4E3A <code>false</code>\uFF0C\u6846\u67B6\u4EC0\u4E48\u4E5F\u4E0D\u505A\uFF0C\u5728\u6761\u4EF6\u7B2C\u4E00\u6B21\u53D8\u6210\u771F\u7684\u65F6\u5019\u624D\u5F00\u59CB\u5C40\u90E8\u6E32\u67D3\u3002</p><p>\u76F8\u6BD4\u4E4B\u4E0B\uFF0C<code>hidden</code> \u5C31\u7B80\u5355\u7684\u591A\uFF0C\u7EC4\u4EF6\u59CB\u7EC8\u4F1A\u88AB\u6E32\u67D3\uFF0C\u53EA\u662F\u7B80\u5355\u7684\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4E00\u822C\u6765\u8BF4\uFF0C<code>wx:if</code> \u6709\u66F4\u9AD8\u7684\u5207\u6362\u6D88\u8017\u800C <code>hidden</code> \u6709\u66F4\u9AD8\u7684\u521D\u59CB\u6E32\u67D3\u6D88\u8017\u3002\u56E0\u6B64\uFF0C\u5982\u679C\u9700\u8981\u9891\u7E41\u5207\u6362\u7684\u60C5\u666F\u4E0B\uFF0C\u7528 <code>hidden</code> \u66F4\u597D\uFF0C\u5982\u679C\u5728\u8FD0\u884C\u65F6\u6761\u4EF6\u4E0D\u5927\u53EF\u80FD\u6539\u53D8\u5219 <code>wx:if</code> \u8F83\u597D\u3002</p></div>`,14),c=[p];function o(l,i){return n(),s("div",null,c)}var d=a(e,[["render",o],["__file","condition-render.html.vue"]]);export{d as default};
