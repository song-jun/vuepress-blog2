import{_ as e,o as p,c as o,a as n,b as t,w as c,d as s,e as i,r as l}from"./app.e3c83e88.js";const u={},d=n("h2",{id:"\u53D8\u91CF\u4F5C\u7528\u57DF",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53D8\u91CF\u4F5C\u7528\u57DF","aria-hidden":"true"},"#"),s(" \u53D8\u91CF\u4F5C\u7528\u57DF")],-1),r=s("\u8BF7\u770B "),k=s("let \u547D\u4EE4"),v=i(`<h2 id="\u51FD\u6570\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u51FD\u6570\u4F5C\u7528\u57DF</h2><h3 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h3><p>\u4F5C\u7528\u57DF(scope)\u6307\u7684\u662F\u53D8\u91CF\u5B58\u5728\u7684\u8303\u56F4\u3002\u5728 ES5 \u7684\u89C4\u8303\u4E2D\uFF0CJavaScript \u53EA\u6709\u4E24\u79CD\u4F5C\u7528\u57DF: \u4E00\u79CD\u662F\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u53D8\u91CF\u5728\u6574\u4E2A\u7A0B\u5E8F\u4E2D\u4E00\u76F4\u5B58\u5728\uFF0C\u6240\u6709\u5730\u65B9\u90FD\u53EF\u4EE5\u8BFB\u53D6\uFF1B\u53E6\u4E00\u79CD\u662F\u51FD\u6570\u4F5C\u7528\u57DF\uFF0C\u53D8\u91CF\u53EA\u5728\u51FD\u6570\u5185\u90E8\u5B58\u5728\u3002ES6 \u53C8\u65B0\u589E\u4E86\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u672C\u6559\u7A0B\u4E0D\u6D89\u53CA\u3002</p><p>\u5BF9\u4E8E\u9876\u5C42\u51FD\u6570\u6765\u8BF4\uFF0C\u51FD\u6570\u5916\u90E8\u58F0\u660E\u7684\u53D8\u91CF\u5C31\u662F\u5168\u5C40\u53D8\u91CF(global variable)\uFF0C\u5B83\u53EF\u4EE5\u5728\u51FD\u6570\u5185\u90E8\u8BFB\u53D6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u8868\u660E\uFF0C\u51FD\u6570 <code>f</code> \u5185\u90E8\u53EF\u4EE5\u8BFB\u53D6\u5168\u5C40\u53D8\u91CF <code>v</code>\u3002</p><p>\u5728\u51FD\u6570\u5185\u90E8\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u5916\u90E8\u65E0\u6CD5\u8BFB\u53D6\uFF0C\u79F0\u4E3A\u201C\u5C40\u90E8\u53D8\u91CF\u201D(local variable)\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

v<span class="token punctuation">;</span> <span class="token comment">// ReferenceError: v is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u53D8\u91CF <code>v</code> \u5728\u51FD\u6570\u5185\u90E8\u5B9A\u4E49\uFF0C\u6240\u4EE5\u662F\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\uFF0C\u51FD\u6570\u4E4B\u5916\u5C31\u65E0\u6CD5\u8BFB\u53D6\u3002</p><p>\u51FD\u6570\u5185\u90E8\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u4F1A\u5728\u8BE5\u4F5C\u7528\u57DF\u5185\u8986\u76D6\u540C\u540D\u5168\u5C40\u53D8\u91CF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> v <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
v<span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u53D8\u91CF <code>v</code> \u540C\u65F6\u5728\u51FD\u6570\u7684\u5916\u90E8\u548C\u5185\u90E8\u6709\u5B9A\u4E49\u3002\u7ED3\u679C\uFF0C\u5728\u51FD\u6570\u5185\u90E8\u5B9A\u4E49\uFF0C\u5C40\u90E8\u53D8\u91CF <code>v</code> \u8986\u76D6\u4E86\u5168\u5C40\u53D8\u91CF <code>v</code>\u3002</p><p>\u6CE8\u610F\uFF0C\u5BF9\u4E8E <code>var</code> \u547D\u4EE4\u6765\u8BF4\uFF0C\u5C40\u90E8\u53D8\u91CF\u53EA\u80FD\u5728\u51FD\u6570\u5185\u90E8\u58F0\u660E\uFF0C\u5728\u5176\u4ED6\u533A\u5757\u4E2D\u58F0\u660E\uFF0C\u4E00\u5F8B\u90FD\u662F\u5168\u5C40\u53D8\u91CF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u53D8\u91CF <code>x</code> \u5728\u6761\u4EF6\u5224\u65AD\u533A\u5757\u4E4B\u4E2D\u58F0\u660E\uFF0C\u7ED3\u679C\u5C31\u662F\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5728\u533A\u5757\u4E4B\u5916\u8BFB\u53D6\u3002</p><h3 id="\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF\u63D0\u5347" aria-hidden="true">#</a> \u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF\u63D0\u5347</h3><p>\u4E0E\u5168\u5C40\u4F5C\u7528\u57DF\u4E00\u6837\uFF0C\u51FD\u6570\u4F5C\u7528\u57DF\u5185\u90E8\u4E5F\u4F1A\u4EA7\u751F\u201C\u53D8\u91CF\u63D0\u5347\u201D\u73B0\u8C61\u3002<code>var</code> \u547D\u4EE4\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u4E0D\u7BA1\u5728\u4EC0\u4E48\u4F4D\u7F6E\uFF0C\u53D8\u91CF\u58F0\u660E\u90FD\u4F1A\u88AB\u63D0\u5347\u5230\u51FD\u6570\u4F53\u7684\u5934\u90E8\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> tmp <span class="token operator">=</span> x <span class="token operator">-</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7B49\u540C\u4E8E</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> tmp<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    tmp <span class="token operator">=</span> x <span class="token operator">-</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u51FD\u6570\u672C\u8EAB\u7684\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u672C\u8EAB\u7684\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u51FD\u6570\u672C\u8EAB\u7684\u4F5C\u7528\u57DF</h3><p>\u51FD\u6570\u672C\u8EAB\u4E5F\u662F\u4E00\u4E2A\u503C\uFF0C\u4E5F\u6709\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF\u3002\u5B83\u7684\u4F5C\u7528\u57DF\u4E0E\u53D8\u91CF\u4E00\u6837\uFF0C\u5C31\u662F\u5176\u58F0\u660E\u65F6\u6240\u5728\u7684\u4F5C\u7528\u57DF\uFF0C\u4E0E\u5176\u8FD0\u884C\u65F6\u6240\u5728\u7684\u4F5C\u7528\u57DF\u65E0\u5173\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">x</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token function">x</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u51FD\u6570 <code>x</code> \u662F\u5728\u51FD\u6570 <code>f</code> \u7684\u5916\u90E8\u58F0\u660E\u7684\uFF0C\u6240\u4EE5\u5B83\u7684\u4F5C\u7528\u57DF\u7ED1\u5B9A\u5916\u5C42\uFF0C\u5185\u90E8\u53D8\u91CF <code>a</code> \u4E0D\u4F1A\u5230\u51FD\u6570 <code>f</code> \u4F53\u5185\u53D6\u503C\uFF0C\u6240\u4EE5\u8F93\u51FA <code>1</code>\uFF0C\u800C\u4E0D\u662F <code>2</code>\u3002</p><p>\u603B\u4E4B\uFF0C\u51FD\u6570\u6267\u884C\u65F6\u6240\u5728\u7684\u4F5C\u7528\u57DF\uFF0C\u662F\u5B9A\u4E49\u65F6\u7684\u4F5C\u7528\u57DF\uFF0C\u800C\u4E0D\u662F\u8C03\u7528\u65F6\u6240\u5728\u7684\u4F5C\u7528\u57DF\u3002</p><p>\u5F88\u5BB9\u6613\u72AF\u9519\u7684\u4E00\u70B9\u662F\uFF0C\u5982\u679C\u51FD\u6570 <code>A</code> \u8C03\u7528\u51FD\u6570 <code>B</code>\uFF0C\u5374\u6CA1\u8003\u8651\u5230\u51FD\u6570 <code>B</code> \u4E0D\u4F1A\u5F15\u7528\u51FD\u6570 <code>A</code> \u7684\u5185\u90E8\u53D8\u91CF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">x</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">y</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">y</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ReferenceError: a is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u5C06\u51FD\u6570 <code>x</code> \u4F5C\u4E3A\u53C2\u6570\uFF0C\u4F20\u5165\u51FD\u6570 <code>y</code>\u3002\u4F46\u662F\uFF0C\u51FD\u6570 <code>x</code> \u662F\u5728\u51FD\u6570 <code>y</code> \u4F53\u5916\u58F0\u660E\u7684\uFF0C\u4F5C\u7528\u57DF\u7ED1\u5B9A\u5916\u5C42\uFF0C\u56E0\u6B64\u627E\u4E0D\u5230\u51FD\u6570 <code>y</code> \u7684\u5185\u90E8\u53D8\u91CF <code>a</code>\uFF0C\u5BFC\u81F4\u62A5\u9519\u3002</p><p>\u540C\u6837\u7684\uFF0C\u51FD\u6570\u4F53\u5185\u90E8\u58F0\u660E\u7684\u51FD\u6570\uFF0C\u4F5C\u7528\u57DF\u7ED1\u5B9A\u51FD\u6570\u4F53\u5185\u90E8\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> bar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u51FD\u6570 <code>foo</code> \u5185\u90E8\u58F0\u660E\u4E86\u4E00\u4E2A\u51FD\u6570 <code>bar</code>\uFF0C<code>bar</code> \u7684\u4F5C\u7528\u57DF\u7ED1\u5B9A <code>foo</code>\u3002\u5F53\u6211\u4EEC\u5728 <code>foo</code> \u5916\u90E8\u53D6\u51FA <code>bar</code> \u6267\u884C\u65F6\uFF0C\u53D8\u91CF <code>x</code> \u6307\u5411\u7684\u662F <code>foo</code> \u5185\u90E8\u7684 <code>x</code>\uFF0C\u800C\u4E0D\u662F <code>foo</code> \u5916\u90E8\u7684 <code>x</code>\u3002\u6B63\u662F\u8FD9\u79CD\u673A\u5236\uFF0C\u6784\u6210\u4E86\u4E0B\u6587\u8981\u8BB2\u89E3\u7684\u201C\u95ED\u5305\u201D\u73B0\u8C61\u3002</p><h2 id="\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u547D\u540D\u7A7A\u95F4</h2><p>\u5168\u5C40\u53D8\u91CF\u4F1A\u7ED1\u5B9A\u5230 <code>window</code> \u4E0A\uFF0C\u4E0D\u540C\u7684 JavaScript \u6587\u4EF6\u5982\u679C\u4F7F\u7528\u4E86\u76F8\u540C\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u6216\u8005\u5B9A\u4E49\u4E86\u76F8\u540C\u540D\u5B57\u7684\u9876\u5C42\u51FD\u6570\uFF0C\u90FD\u4F1A\u9020\u6210\u547D\u540D\u51B2\u7A81\uFF0C\u5E76\u4E14\u5F88\u96BE\u88AB\u53D1\u73B0\u3002</p><p>\u51CF\u5C11\u51B2\u7A81\u7684\u4E00\u4E2A\u65B9\u6CD5\u662F\u628A\u81EA\u5DF1\u7684\u6240\u6709\u53D8\u91CF\u548C\u51FD\u6570\u5168\u90E8\u7ED1\u5B9A\u5230\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u4F8B\u5982:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u552F\u4E00\u7684\u5168\u5C40\u53D8\u91CFMYAPP:</span>
<span class="token keyword">const</span> <span class="token constant">MYAPP</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5176\u4ED6\u53D8\u91CF:</span>
<span class="token constant">MYAPP</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;myapp&quot;</span><span class="token punctuation">;</span>
<span class="token constant">MYAPP</span><span class="token punctuation">.</span>version <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>

<span class="token comment">// \u5176\u4ED6\u51FD\u6570:</span>
<span class="token constant">MYAPP</span><span class="token punctuation">.</span><span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u628A\u81EA\u5DF1\u7684\u4EE3\u7801\u5168\u90E8\u653E\u5165\u552F\u4E00\u7684\u547D\u540D\u7A7A\u95F4 <code>MYAPP</code> \u4E2D\uFF0C\u4F1A\u5927\u5927\u51CF\u5C11\u5168\u5C40\u53D8\u91CF\u51B2\u7A81\u7684\u53EF\u80FD\u3002</p><p>\u8BB8\u591A\u8457\u540D\u7684 JavaScript \u5E93\u90FD\u662F\u8FD9\u4E48\u5E72\u7684: jQuery\uFF0CYUI\uFF0Cunderscore \u7B49\u7B49\u3002</p>`,35);function m(b,f){const a=l("RouterLink");return p(),o("div",null,[d,n("p",null,[r,t(a,{to:"/code/language/js/es6/let.html"},{default:c(()=>[k]),_:1})]),v])}var g=e(u,[["render",m],["__file","scope.html.vue"]]);export{g as default};
