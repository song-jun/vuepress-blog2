import{_ as i,o as l,c as u,b as s,a,w as p,e,d as n,r as o}from"./app.cc4bf3f5.js";const d={},r=e(`<p>\u5BBF\u4E3B\u73AF\u5883\u662F\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u7ED9\u5C0F\u7A0B\u5E8F\u6240\u63D0\u4F9B\u7684\u73AF\u5883\u3002\u5C0F\u7A0B\u5E8F\u501F\u52A9\u5BBF\u4E3B\u73AF\u5883\u63D0\u4F9B\u7684\u80FD\u529B\uFF0C\u53EF\u4EE5\u5B8C\u6210\u8BB8\u591A\u666E\u901A\u7F51\u9875\u65E0\u6CD5\u5B8C\u6210\u7684\u529F\u80FD\u3002</p><h2 id="\u6E32\u67D3\u5C42\u548C\u903B\u8F91\u5C42" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u5C42\u548C\u903B\u8F91\u5C42" aria-hidden="true">#</a> \u6E32\u67D3\u5C42\u548C\u903B\u8F91\u5C42</h2><p>\u5C0F\u7A0B\u5E8F\u7684\u8FD0\u884C\u73AF\u5883\u5206\u6210\u6E32\u67D3\u5C42\u548C\u903B\u8F91\u5C42\u3002</p><ul><li>WXML \u6A21\u677F\u548C WXSS \u6837\u5F0F\u5DE5\u4F5C\u5728\u6E32\u67D3\u5C42\uFF1B</li><li>JS \u811A\u672C\u5DE5\u4F5C\u5728\u903B\u8F91\u5C42\u3002</li></ul><p>\u5C0F\u7A0B\u5E8F\u7684\u6E32\u67D3\u5C42\u548C\u903B\u8F91\u5C42\u5206\u522B\u7531 2 \u4E2A\u7EBF\u7A0B\u7BA1\u7406:</p><ul><li>\u6E32\u67D3\u5C42\u7684\u754C\u9762\u4F7F\u7528\u4E86 WebView \u8FDB\u884C\u6E32\u67D3\uFF1B</li><li>\u903B\u8F91\u5C42\u91C7\u7528 JsCore \u7EBF\u7A0B\u8FD0\u884C JS \u811A\u672C\u3002</li></ul><p>\u4E00\u4E2A\u5C0F\u7A0B\u5E8F\u5B58\u5728\u591A\u4E2A\u754C\u9762\uFF0C\u6240\u4EE5\u6E32\u67D3\u5C42\u5B58\u5728\u591A\u4E2A WebView \u7EBF\u7A0B\uFF0C\u8FD9\u4E24\u4E2A\u7EBF\u7A0B\u7684\u901A\u4FE1\u4F1A\u7ECF\u7531\u5FAE\u4FE1\u5BA2\u6237\u7AEF(Native)\u505A\u4E2D\u8F6C\uFF0C\u903B\u8F91\u5C42\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\u4E5F\u7ECF\u7531 Native \u8F6C\u53D1\uFF0C\u5C0F\u7A0B\u5E8F\u7684\u901A\u4FE1\u6A21\u578B\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/4-1.ad156d1c.png" alt="\u901A\u4FE1\u6A21\u578B"></p><h2 id="\u7A0B\u5E8F\u4E0E\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#\u7A0B\u5E8F\u4E0E\u9875\u9762" aria-hidden="true">#</a> \u7A0B\u5E8F\u4E0E\u9875\u9762</h2><p>\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u5728\u6253\u5F00\u5C0F\u7A0B\u5E8F\u4E4B\u524D\uFF0C\u4F1A\u628A\u6574\u4E2A\u5C0F\u7A0B\u5E8F\u7684\u4EE3\u7801\u5305\u4E0B\u8F7D\u5230\u672C\u5730\u3002</p><p>\u5BA2\u6237\u7AEF\u901A\u8FC7 <code>app.json</code> \u7684 <code>pages</code> \u5B57\u6BB5\u83B7\u5F97\u5F53\u524D\u5C0F\u7A0B\u5E8F\u7684\u6240\u6709\u9875\u9762\u8DEF\u5F84:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pages/logs/logs&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>QuickStart \u9879\u76EE\u901A\u8FC7\u8BE5\u914D\u7F6E\u5B9A\u4E49\u4E86\u4E24\u4E2A\u9875\u9762\uFF0C\u5206\u522B\u4F4D\u4E8E <code>pages/index/index</code> \u548C <code>pages/logs/logs</code>\u3002\u5199\u5728 <code>pages</code> \u5B57\u6BB5\u7684\u7B2C\u4E00\u4E2A\u9875\u9762\u5C31\u662F\u8FD9\u4E2A\u5C0F\u7A0B\u5E8F\u7684\u9996\u9875(\u6253\u5F00\u5C0F\u7A0B\u5E8F\u770B\u5230\u7684\u7B2C\u4E00\u4E2A\u9875\u9762)\u3002</p></div><p>\u4E8E\u662F\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u5C31\u628A\u9996\u9875\u7684\u4EE3\u7801\u88C5\u8F7D\u8FDB\u6765\uFF0C\u67D3\u51FA\u8FD9\u4E2A\u9996\u9875\u3002</p><p>\u5C0F\u7A0B\u5E8F\u542F\u52A8\u4E4B\u540E\uFF0C\u5728 <code>app.js</code> \u5B9A\u4E49\u7684 <code>App</code> \u5B9E\u4F8B\u7684 <code>onLaunch</code> \u56DE\u8C03\u4F1A\u88AB\u6267\u884C:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5C0F\u7A0B\u5E8F\u542F\u52A8\u4E4B\u540E \u89E6\u53D1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),k=n("\u6574\u4E2A\u5C0F\u7A0B\u5E8F\u53EA\u6709\u4E00\u4E2A App \u5B9E\u4F8B\uFF0C\u662F\u5168\u90E8\u9875\u9762\u5171\u4EAB\u7684\uFF0C\u66F4\u591A\u7684\u4E8B\u4EF6\u56DE\u8C03\u53C2\u8003\u6587\u6863 "),v=n("\u6CE8\u518C\u7A0B\u5E8F App"),m=n(" \u3002"),g=e(`<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u7B80\u5355\u770B\u770B\u5C0F\u7A0B\u5E8F\u7684\u4E00\u4E2A\u9875\u9762\u662F\u600E\u4E48\u5199\u7684\u3002</p><p>\u60A8\u53EF\u4EE5\u89C2\u5BDF\u5230 <code>pages/logs/logs</code> \u4E0B\u5176\u5B9E\u662F\u5305\u62EC\u4E86 4 \u79CD\u6587\u4EF6\u7684\uFF0C\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u4F1A\u5148\u6839\u636E <code>logs.json</code> \u914D\u7F6E\u751F\u6210\u4E00\u4E2A\u754C\u9762\uFF0C\u9876\u90E8\u7684\u989C\u8272\u548C\u6587\u5B57\u60A8\u90FD\u53EF\u4EE5\u5728\u8FD9\u4E2A json \u6587\u4EF6\u91CC\u8FB9\u5B9A\u4E49\u597D\u3002\u7D27\u63A5\u7740\u5BA2\u6237\u7AEF\u5C31\u4F1A\u88C5\u8F7D\u8FD9\u4E2A\u9875\u9762\u7684 WXML \u7ED3\u6784\u548C WXSS \u6837\u5F0F\u3002\u6700\u540E\u5BA2\u6237\u7AEF\u4F1A\u88C5\u8F7D <code>logs.js</code>\uFF0C\u60A8\u53EF\u4EE5\u770B\u5230 <code>logs.js</code> \u7684\u5927\u4F53\u5185\u5BB9\u5C31\u662F:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53C2\u4E0E\u9875\u9762\u6E32\u67D3\u7684\u6570\u636E</span>
    <span class="token literal-property property">logs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9875\u9762\u6E32\u67D3\u540E \u6267\u884C</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Page \u662F\u4E00\u4E2A\u9875\u9762\u6784\u9020\u5668\uFF0C\u8FD9\u4E2A\u6784\u9020\u5668\u5C31\u751F\u6210\u4E86\u4E00\u4E2A\u9875\u9762\u3002\u5728\u751F\u6210\u9875\u9762\u7684\u65F6\u5019\uFF0C\u5C0F\u7A0B\u5E8F\u6846\u67B6\u4F1A\u628A <code>data</code> \u6570\u636E\u548C\u5BF9\u5E94\u7684 wxml \u4E00\u8D77\u6E32\u67D3\u51FA\u6700\u7EC8\u7684\u7ED3\u6784\uFF0C\u4E8E\u662F\u5C31\u5F97\u5230\u4E86\u60A8\u770B\u5230\u7684\u5C0F\u7A0B\u5E8F\u7684\u6837\u5B50\u3002</p><p>\u5728\u6E32\u67D3\u5B8C\u754C\u9762\u4E4B\u540E\uFF0C\u9875\u9762\u5B9E\u4F8B\u5C31\u4F1A\u6536\u5230\u4E00\u4E2A <code>onLoad</code> \u7684\u56DE\u8C03\uFF0C\u60A8\u53EF\u4EE5\u5728\u8FD9\u4E2A\u56DE\u8C03\u5904\u7406\u60A8\u7684\u903B\u8F91\u3002</p>`,5),b=n("\u6709\u5173\u4E8E Page \u6784\u9020\u5668\u66F4\u591A\u8BE6\u7EC6\u7684\u6587\u6863\u53C2\u8003 "),h=n("\u6CE8\u518C\u9875\u9762 Page"),_=n("\u3002"),x=e(`<h2 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6</h2><p>\u5C0F\u7A0B\u5E8F\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u7ED9\u5F00\u53D1\u8005\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u50CF\u642D\u79EF\u6728\u4E00\u6837\uFF0C\u7EC4\u5408\u5404\u79CD\u7EC4\u4EF6\u62FC\u5408\u6210\u81EA\u5DF1\u7684\u5C0F\u7A0B\u5E8F\u3002</p><p>\u5C31\u50CF HTML \u7684 <code>div</code>, <code>p</code> \u7B49\u6807\u7B7E\u4E00\u6837\uFF0C\u5728\u5C0F\u7A0B\u5E8F\u91CC\u8FB9\uFF0C\u60A8\u53EA\u9700\u8981\u5728 WXML \u5199\u4E0A\u5BF9\u5E94\u7684\u7EC4\u4EF6\u6807\u7B7E\u540D\u5B57\u5C31\u53EF\u4EE5\u628A\u8BE5\u7EC4\u4EF6\u663E\u793A\u5728\u754C\u9762\u4E0A\uFF0C\u4F8B\u5982\uFF0C\u60A8\u9700\u8981\u5728\u754C\u9762\u4E0A\u663E\u793A\u5730\u56FE\uFF0C\u60A8\u53EA\u9700\u8981\u8FD9\u6837\u5199\u5373\u53EF:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u5C5E\u6027\u4F20\u9012\u503C\u7ED9\u7EC4\u4EF6\uFF0C\u8BA9\u7EC4\u4EF6\u53EF\u4EE5\u4EE5\u4E0D\u540C\u7684\u72B6\u6001\u53BB\u5C55\u73B0\uFF0C\u4F8B\u5982\uFF0C\u6211\u4EEC\u5E0C\u671B\u5730\u56FE\u4E00\u5F00\u59CB\u7684\u4E2D\u5FC3\u7684\u7ECF\u7EAC\u5EA6\u662F\u957F\u6625\uFF0C\u90A3\u4E48\u60A8\u9700\u8981\u58F0\u660E\u5730\u56FE\u7684 <code>longitude</code>(\u4E2D\u5FC3\u7ECF\u5EA6) \u548C <code>latitude</code>(\u4E2D\u5FC3\u7EAC\u5EA6)\u4E24\u4E2A\u5C5E\u6027:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token attr-name">longitude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u957F\u6625\u7ECF\u5EA6<span class="token punctuation">&quot;</span></span> <span class="token attr-name">latitude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u957F\u6625\u7EAC\u5EA6<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7EC4\u4EF6\u7684\u5185\u90E8\u884C\u4E3A\u4E5F\u4F1A\u901A\u8FC7\u4E8B\u4EF6\u7684\u5F62\u5F0F\u8BA9\u5F00\u53D1\u8005\u53EF\u4EE5\u611F\u77E5\uFF0C\u4F8B\u5982\u7528\u6237\u70B9\u51FB\u4E86\u5730\u56FE\u4E0A\u7684\u67D0\u4E2A\u6807\u8BB0\uFF0C\u60A8\u53EF\u4EE5\u5728 js \u7F16\u5199 markertap \u51FD\u6570\u6765\u5904\u7406:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token attr-name">bindmarkertap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>markertap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">longitude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u957F\u6625\u7ECF\u5EA6<span class="token punctuation">&quot;</span></span> <span class="token attr-name">latitude</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u957F\u6625\u7EAC\u5EA6<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u7136\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>style</code> \u6216\u8005 <code>class</code> \u6765\u63A7\u5236\u7EC4\u4EF6\u7684\u5916\u5C42\u6837\u5F0F\uFF0C\u4EE5\u4FBF\u9002\u5E94\u60A8\u7684\u754C\u9762\u5BBD\u5EA6\u9AD8\u5EA6\u7B49\u7B49\u3002</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><p>\u4E3A\u4E86\u8BA9\u5F00\u53D1\u8005\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u8C03\u8D77\u5FAE\u4FE1\u63D0\u4F9B\u7684\u80FD\u529B\uFF0C\u4F8B\u5982\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u3001\u5FAE\u4FE1\u652F\u4ED8\u7B49\u7B49\uFF0C\u5C0F\u7A0B\u5E8F\u63D0\u4F9B\u4E86\u5F88\u591A API \u7ED9\u5F00\u53D1\u8005\u53BB\u4F7F\u7528\u3002</p><p>\u8981\u83B7\u53D6\u7528\u6237\u7684\u5730\u7406\u4F4D\u7F6E\u65F6\uFF0C\u53EA\u9700\u8981:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;wgs84&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> latitude<span class="token punctuation">,</span> longitude <span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u7ECF\u7EAC\u5EA6</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>latitude<span class="token punctuation">,</span> longitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u7528\u5FAE\u4FE1\u626B\u4E00\u626B\u80FD\u529B\uFF0C\u53EA\u9700\u8981:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">scanCode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F: \u591A\u6570 API \u7684\u56DE\u8C03\u90FD\u662F\u5F02\u6B65\uFF0C\u60A8\u9700\u8981\u5904\u7406\u597D\u4EE3\u7801\u903B\u8F91\u7684\u5F02\u6B65\u95EE\u9898\u3002</p>`,16),f=n("\u66F4\u591A\u7684 API \u80FD\u529B\u89C1 "),q={href:"https://developers.weixin.qq.com/miniprogram/dev/api/",target:"_blank",rel:"noopener noreferrer"},j=n("\u5C0F\u7A0B\u5E8F\u7684 API"),L=n("\u3002");function w(y,A){const t=o("RouterLink"),c=o("ExternalLinkIcon");return l(),u("div",null,[r,s("p",null,[k,a(t,{to:"/code/mini-app/guide/service/app.html"},{default:p(()=>[v]),_:1}),m]),g,s("p",null,[b,a(t,{to:"/code/mini-app/guide/service/page.html"},{default:p(()=>[h]),_:1}),_]),x,s("p",null,[f,s("a",q,[j,a(c)]),L])])}var S=i(d,[["render",w],["__file","env.html.vue"]]);export{S as default};