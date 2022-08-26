import{_ as n,o as s,c as a,e as p}from"./app.cc4bf3f5.js";const t={},e=p(`<p>\u5728\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u7ED1\u5B9A\u51FD\u6570\uFF0C\u79F0\u4E3A\u8FD9\u4E2A\u5BF9\u8C61\u7684\u65B9\u6CD5\u3002</p><p>\u5728 JavaScript \u4E2D\uFF0C\u5BF9\u8C61\u7684\u5B9A\u4E49\u662F\u8FD9\u6837\u7684:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\uFF0C\u5982\u679C\u6211\u4EEC\u7ED9 <code>xiaoming</code> \u7ED1\u5B9A\u4E00\u4E2A\u51FD\u6570\uFF0C\u5C31\u53EF\u4EE5\u505A\u66F4\u591A\u7684\u4E8B\u60C5\u3002\u6BD4\u5982\uFF0C\u5199\u4E2A <code>age()</code> \u65B9\u6CD5\uFF0C\u8FD4\u56DE <code>xiaoming</code> \u7684\u5E74\u9F84:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> y <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// function xiaoming.age()</span>
xiaoming<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4ECA\u5E74\u8C03\u7528\u662F25,\u660E\u5E74\u8C03\u7528\u5C31\u53D8\u621026\u4E86</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u662F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">age</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7684\u7B80\u5199\u65B9\u5F0F\u3002</p></div><p>\u7ED1\u5B9A\u5230\u5BF9\u8C61\u4E0A\u7684\u51FD\u6570\u79F0\u4E3A\u65B9\u6CD5\uFF0C\u548C\u666E\u901A\u51FD\u6570\u4E5F\u6CA1\u5565\u533A\u522B\uFF0C\u4F46\u662F\u5B83\u5728\u5185\u90E8\u4F7F\u7528\u4E86\u4E00\u4E2A <code>this</code> \u5173\u952E\u5B57\uFF0C\u8FD9\u4E2A\u4E1C\u4E1C\u662F\u4EC0\u4E48?</p><p>\u5728\u4E00\u4E2A\u65B9\u6CD5\u5185\u90E8\uFF0C<code>this</code> \u662F\u4E00\u4E2A\u7279\u6B8A\u53D8\u91CF\uFF0C\u5B83\u59CB\u7EC8\u6307\u5411\u5F53\u524D\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F <code>xiaoming</code> \u8FD9\u4E2A\u53D8\u91CF\u3002\u6240\u4EE5\uFF0C<code>this.birth</code> \u53EF\u4EE5\u62FF\u5230 <code>xiaoming</code> \u7684 <code>birth</code> \u5C5E\u6027\u3002</p><p>\u8BA9\u6211\u4EEC\u62C6\u5F00\u5199:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> getAge<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25, \u6B63\u5E38\u7ED3\u679C</span>
<span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5355\u72EC\u8C03\u7528\u51FD\u6570 <code>getAge()</code> \u600E\u4E48\u8FD4\u56DE\u4E86 <code>NaN</code>? \u8BF7\u6CE8\u610F\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u8FDB\u5165\u5230\u4E86 JavaScript \u7684\u4E00\u4E2A\u5927\u5751\u91CC\u3002</p><p>JavaScript \u7684\u51FD\u6570\u5185\u90E8\u5982\u679C\u8C03\u7528\u4E86 <code>this</code>\uFF0C\u90A3\u4E48\u8FD9\u4E2A <code>this</code> \u5230\u5E95\u6307\u5411\u8C01?</p><p>\u7B54\u6848\u662F\uFF0C\u89C6\u60C5\u51B5\u800C\u5B9A!</p><p>\u5982\u679C\u4EE5\u5BF9\u8C61\u7684\u65B9\u6CD5\u5F62\u5F0F\u8C03\u7528\uFF0C\u6BD4\u5982 <code>xiaoming.age()</code>\uFF0C\u8BE5\u51FD\u6570\u7684 <code>this</code> \u6307\u5411\u88AB\u8C03\u7528\u7684\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F <code>xiaoming</code>\uFF0C\u8FD9\u662F\u7B26\u5408\u6211\u4EEC\u9884\u671F\u7684\u3002</p><p>\u5982\u679C\u5355\u72EC\u8C03\u7528\u51FD\u6570\uFF0C\u6BD4\u5982 <code>getAge()</code>\uFF0C\u6B64\u65F6\uFF0C\u8BE5\u51FD\u6570\u7684 <code>this</code> \u6307\u5411\u5168\u5C40\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F <code>window</code>\u3002</p><p>\u5751\u7239\u554A!</p><p>\u66F4\u5751\u7239\u7684\u662F\uFF0C\u5982\u679C\u8FD9\u4E48\u5199:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fn <span class="token operator">=</span> xiaoming<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// \u5148\u62FF\u5230 xiaoming \u7684 page \u51FD\u6570</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E5F\u662F\u4E0D\u884C\u7684! \u8981\u4FDD\u8BC1 <code>this</code> \u6307\u5411\u6B63\u786E\uFF0C\u5FC5\u987B\u7528 <code>obj.xxx()</code> \u7684\u5F62\u5F0F\u8C03\u7528!</p><p>\u7531\u4E8E\u8FD9\u662F\u4E00\u4E2A\u5DE8\u5927\u7684\u8BBE\u8BA1\u9519\u8BEF\uFF0C\u8981\u60F3\u7EA0\u6B63\u53EF\u6CA1\u90A3\u4E48\u7B80\u5355\u3002ECMA \u51B3\u5B9A\uFF0C\u5728 strict \u6A21\u5F0F\u4E0B\u8BA9\u51FD\u6570\u7684 <code>this</code> \u6307\u5411 <code>undefined</code>\uFF0C\u56E0\u6B64\uFF0C\u5728 strict \u6A21\u5F0F\u4E0B\uFF0C\u60A8\u4F1A\u5F97\u5230\u4E00\u4E2A\u9519\u8BEF:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fn <span class="token operator">=</span> xiaoming<span class="token punctuation">.</span>age<span class="token punctuation">;</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught TypeError: Cannot read property &#39;birth&#39; of undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u51B3\u5B9A\u53EA\u662F\u8BA9\u9519\u8BEF\u53CA\u65F6\u66B4\u9732\u51FA\u6765\uFF0C\u5E76\u6CA1\u6709\u89E3\u51B3 <code>this</code> \u5E94\u8BE5\u6307\u5411\u7684\u6B63\u786E\u4F4D\u7F6E\u3002</p><p>\u6709\u4E9B\u65F6\u5019\uFF0C\u559C\u6B22\u91CD\u6784\u7684\u60A8\u628A\u65B9\u6CD5\u91CD\u6784\u4E86\u4E00\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">getAgeFromBirth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">getAgeFromBirth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught TypeError: Cannot read property &#39;birth&#39; of undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u53C8\u62A5\u9519\u4E86! \u539F\u56E0\u662F <code>this</code> \u6307\u9488\u53EA\u5728 <code>age</code> \u65B9\u6CD5\u7684\u51FD\u6570\u5185\u6307\u5411 <code>xiaoming</code>\uFF0C\u5728\u51FD\u6570\u5185\u90E8\u5B9A\u4E49\u7684\u51FD\u6570\uFF0C<code>this</code> \u53C8\u6307\u5411 <code>undefined</code> \u4E86! (\u5728\u975E strict \u6A21\u5F0F\u4E0B\uFF0C\u5B83\u91CD\u65B0\u6307\u5411\u5168\u5C40\u5BF9\u8C61 <code>window</code>! )</p><p>\u4FEE\u590D\u7684\u529E\u6CD5\u4E5F\u4E0D\u662F\u6CA1\u6709\uFF0C\u6211\u4EEC\u7528\u4E00\u4E2A <code>that</code> \u53D8\u91CF\u9996\u5148\u6355\u83B7 <code>this</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// \u5728\u65B9\u6CD5\u5185\u90E8\u4E00\u5F00\u59CB\u5C31\u6355\u83B7 this</span>

    <span class="token keyword">function</span> <span class="token function">getAgeFromBirth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7528that\u800C\u4E0D\u662Fthis</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> that<span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">getAgeFromBirth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7528 <code>const that = this;</code>\uFF0C\u60A8\u5C31\u53EF\u4EE5\u653E\u5FC3\u5730\u5728\u65B9\u6CD5\u5185\u90E8\u5B9A\u4E49\u5176\u4ED6\u51FD\u6570\uFF0C\u800C\u4E0D\u662F\u628A\u6240\u6709\u8BED\u53E5\u90FD\u5806\u5230\u4E00\u4E2A\u65B9\u6CD5\u4E2D\u3002</p><h2 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply</h2><p>\u867D\u7136\u5728\u4E00\u4E2A\u72EC\u7ACB\u7684\u51FD\u6570\u8C03\u7528\u4E2D\uFF0C\u6839\u636E\u662F\u5426\u662F <code>strict</code> \u6A21\u5F0F\uFF0C<code>this</code> \u6307\u5411 <code>undefined</code> \u6216 <code>window</code>\uFF0C\u4E0D\u8FC7\uFF0C\u6211\u4EEC\u8FD8\u662F\u53EF\u4EE5\u63A7\u5236 <code>this</code> \u7684\u6307\u5411\u7684!</p><p>\u8981\u6307\u5B9A\u51FD\u6570\u7684 <code>this</code> \u6307\u5411\u54EA\u4E2A\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u7528\u51FD\u6570\u672C\u8EAB\u7684 <code>apply</code> \u65B9\u6CD5\uFF0C\u5B83\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u5C31\u662F\u9700\u8981\u7ED1\u5B9A\u7684 <code>this</code> \u53D8\u91CF\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F <code>Array</code>\uFF0C\u8868\u793A\u51FD\u6570\u672C\u8EAB\u7684\u53C2\u6570\u3002</p><p>\u7528 <code>apply</code> \u4FEE\u590D <code>getAge()</code> \u8C03\u7528:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>birth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1990</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> getAge<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

xiaoming<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25</span>
<span class="token function">getAge</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25, this\u6307\u5411xiaoming, \u53C2\u6570\u4E3A\u7A7A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53E6\u4E00\u4E2A\u4E0E <code>apply()</code> \u7C7B\u4F3C\u7684\u65B9\u6CD5\u662F <code>call()</code>\uFF0C\u552F\u4E00\u533A\u522B\u662F:</p><p><code>apply()</code> \u628A\u53C2\u6570\u6253\u5305\u6210 <code>Array</code> \u518D\u4F20\u5165\uFF1B</p><p><code>call()</code> \u628A\u53C2\u6570\u6309\u987A\u5E8F\u4F20\u5165\u3002</p><p>\u6BD4\u5982\u8C03\u7528 <code>Math.max(3, 5, 4)</code>\uFF0C\u5206\u522B\u7528 <code>apply()</code> \u548C <code>call()</code> \u5B9E\u73B0\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u666E\u901A\u51FD\u6570\u8C03\u7528\uFF0C\u6211\u4EEC\u901A\u5E38\u628A <code>this</code> \u7ED1\u5B9A\u4E3A null\u3002</p><h2 id="\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970\u5668" aria-hidden="true">#</a> \u88C5\u9970\u5668</h2><p>\u5229\u7528 <code>apply()</code>\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u52A8\u6001\u6539\u53D8\u51FD\u6570\u7684\u884C\u4E3A\u3002</p><p>JavaScript \u7684\u6240\u6709\u5BF9\u8C61\u90FD\u662F\u52A8\u6001\u7684\uFF0C\u5373\u4F7F\u5185\u7F6E\u7684\u51FD\u6570\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u91CD\u65B0\u6307\u5411\u65B0\u7684\u51FD\u6570\u3002</p><p>\u73B0\u5728\u5047\u5B9A\u6211\u4EEC\u60F3\u7EDF\u8BA1\u4E00\u4E0B\u4EE3\u7801\u4E00\u5171\u8C03\u7528\u4E86\u591A\u5C11\u6B21 <code>parseInt()</code>\uFF0C\u53EF\u4EE5\u628A\u6240\u6709\u7684\u8C03\u7528\u90FD\u627E\u51FA\u6765\uFF0C\u7136\u540E\u624B\u52A8\u52A0\u4E0A <code>count += 1</code>\uFF0C\u4E0D\u8FC7\u8FD9\u6837\u505A\u592A\u50BB\u4E86\u3002\u6700\u4F73\u65B9\u6848\u662F\u7528\u6211\u4EEC\u81EA\u5DF1\u7684\u51FD\u6570\u66FF\u6362\u6389\u9ED8\u8BA4\u7684 <code>parseInt()</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> oldParseInt <span class="token operator">=</span> parseInt<span class="token punctuation">;</span> <span class="token comment">// \u4FDD\u5B58\u539F\u51FD\u6570</span>

window<span class="token punctuation">.</span><span class="token function-variable function">parseInt</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">oldParseInt</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8C03\u7528\u539F\u51FD\u6570</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u6D4B\u8BD5:</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;20&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&quot;30&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">count = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","this.html.vue"]]);export{r as default};
