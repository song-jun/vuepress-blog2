import{_ as p,o as t,c,a as n,b as e,w as o,d as s,e as l,r as i}from"./app.e3c83e88.js";const d={},u={class:"custom-container tip"},r=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),k=s("\u6B64\u6559\u7A0B\u4E0E\u5FEB\u901F\u4E0A\u624B\u7AE0\u8282\u4E2D\u7684 "),m=s("\u5E03\u5C14\u503C\u4ECB\u7ECD"),v=s(" \u5B8C\u5168\u76F8\u540C\u3002"),b=l(`<p>\u5E03\u5C14\u503C\u4EE3\u8868\u201C\u771F\u201D\u548C\u201C\u5047\u201D\u4E24\u4E2A\u72B6\u6001\u3002\u201C\u771F\u201D\u7528\u5173\u952E\u5B57 <code>true</code> \u8868\u793A\uFF0C\u201C\u5047\u201D\u7528\u5173\u952E\u5B57 <code>false</code> \u8868\u793A\u3002\u5E03\u5C14\u503C\u53EA\u6709\u8FD9\u4E24\u4E2A\u503C\u3002</p><p>\u4E0B\u5217\u8FD0\u7B97\u7B26\u4F1A\u8FD4\u56DE\u5E03\u5C14\u503C:</p><ul><li>\u524D\u7F6E\u903B\u8F91\u8FD0\u7B97\u7B26: <code>!</code> (Not)</li><li>\u76F8\u7B49\u8FD0\u7B97\u7B26: <code>===</code>\uFF0C<code>!==</code>\uFF0C<code>==</code>\uFF0C<code>!=</code></li><li>\u6BD4\u8F83\u8FD0\u7B97\u7B26: <code>&gt;</code>\uFF0C<code>&gt;=</code>\uFF0C<code>&lt;</code>\uFF0C<code>&lt;=</code></li></ul><p>\u5982\u679C JavaScript \u9884\u671F\u67D0\u4E2A\u4F4D\u7F6E\u5E94\u8BE5\u662F\u5E03\u5C14\u503C\uFF0C\u4F1A\u5C06\u8BE5\u4F4D\u7F6E\u4E0A\u73B0\u6709\u7684\u503C\u81EA\u52A8\u8F6C\u4E3A\u5E03\u5C14\u503C\u3002\u8F6C\u6362\u89C4\u5219\u662F\u9664\u4E86\u4E0B\u9762\u516D\u4E2A\u503C\u88AB\u8F6C\u4E3A <code>false</code>\uFF0C\u5176\u4ED6\u503C\u90FD\u89C6\u4E3A <code>true</code>\u3002</p><ul><li><code>undefined</code></li><li><code>null</code></li><li><code>false</code></li><li><code>0</code></li><li><code>NaN</code></li><li><code>&quot;&quot;</code> \u6216 <code>&#39;&#39;</code>(\u7A7A\u5B57\u7B26\u4E32)</li></ul><p>\u5E03\u5C14\u503C\u5F80\u5F80\u7528\u4E8E\u7A0B\u5E8F\u6D41\u7A0B\u7684\u63A7\u5236\uFF0C\u8BF7\u770B\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6CA1\u6709\u4EFB\u4F55\u8F93\u51FA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>if</code> \u547D\u4EE4\u540E\u9762\u7684\u5224\u65AD\u6761\u4EF6\uFF0C\u9884\u671F\u5E94\u8BE5\u662F\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u6240\u4EE5 JavaScript \u81EA\u52A8\u5C06\u7A7A\u5B57\u7B26\u4E32\uFF0C\u8F6C\u4E3A\u5E03\u5C14\u503C <code>false</code>\uFF0C\u5BFC\u81F4\u7A0B\u5E8F\u4E0D\u4F1A\u8FDB\u5165\u4EE3\u7801\u5757\uFF0C\u6240\u4EE5\u6CA1\u6709\u4EFB\u4F55\u8F93\u51FA\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6CE8\u610F\uFF0C\u7A7A\u6570\u7EC4(<code>[]</code>)\u548C\u7A7A\u5BF9\u8C61(<code>{}</code>)\u5BF9\u5E94\u7684\u5E03\u5C14\u503C\uFF0C\u90FD\u662F <code>true</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// true</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="\u6BD4\u8F83\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u8F83\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6BD4\u8F83\u8FD0\u7B97\u7B26</h2><p>\u5F53\u6211\u4EEC\u5BF9 <code>Number</code> \u505A\u6BD4\u8F83\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6BD4\u8F83\u8FD0\u7B97\u7B26\u5F97\u5230\u4E00\u4E2A\u5E03\u5C14\u503C:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token number">5</span> <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token number">7</span> <span class="token operator">==</span> <span class="token number">7</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u9645\u4E0A\uFF0CJavaScript \u5141\u8BB8\u5BF9\u4EFB\u610F\u6570\u636E\u7C7B\u578B\u505A\u6BD4\u8F83:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token boolean">false</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token boolean">false</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u7279\u522B\u6CE8\u610F\u76F8\u7B49\u8FD0\u7B97\u7B26 <code>==</code>\u3002JavaScript \u5728\u8BBE\u8BA1\u65F6\uFF0C\u6709\u4E24\u79CD\u6BD4\u8F83\u8FD0\u7B97\u7B26:</p><ul><li><p>\u7B2C\u4E00\u79CD\u662F <code>==</code> \u6BD4\u8F83\uFF0C\u5B83\u4F1A\u81EA\u52A8\u8F6C\u6362\u6570\u636E\u7C7B\u578B\u518D\u6BD4\u8F83\uFF0C\u5F88\u591A\u65F6\u5019\uFF0C\u4F1A\u5F97\u5230\u975E\u5E38\u8BE1\u5F02\u7684\u7ED3\u679C\uFF1B</p></li><li><p>\u7B2C\u4E8C\u79CD\u662F <code>===</code> \u6BD4\u8F83\uFF0C\u5B83\u4E0D\u4F1A\u81EA\u52A8\u8F6C\u6362\u6570\u636E\u7C7B\u578B\uFF0C\u5982\u679C\u6570\u636E\u7C7B\u578B\u4E0D\u4E00\u81F4\uFF0C\u8FD4\u56DE <code>false</code>\uFF0C\u5982\u679C\u4E00\u81F4\uFF0C\u518D\u6BD4\u8F83\u3002</p></li></ul><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7531\u4E8E JavaScript \u8FD9\u4E2A\u8BBE\u8BA1\u7F3A\u9677\uFF0C\u4E0D\u8981\u4F7F\u7528 <code>==</code> \u6BD4\u8F83\uFF0C\u59CB\u7EC8\u575A\u6301\u4F7F\u7528 <code>===</code> \u6BD4\u8F83\u3002</p></div><p>\u53E6\u4E00\u4E2A\u4F8B\u5916\u662F <code>NaN</code> \u8FD9\u4E2A\u7279\u6B8A\u7684 <code>Number</code> \u4E0E\u6240\u6709\u5176\u4ED6\u503C\u90FD\u4E0D\u76F8\u7B49\uFF0C\u5305\u62EC\u5B83\u81EA\u5DF1:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u552F\u4E00\u80FD\u5224\u65AD <code>NaN</code> \u7684\u65B9\u6CD5\u662F\u901A\u8FC7 <code>isNaN()</code> \u51FD\u6570:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6700\u540E\u8981\u6CE8\u610F\u6D6E\u70B9\u6570\u7684\u76F8\u7B49\u6BD4\u8F83:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E0D\u662F JavaScript \u7684\u8BBE\u8BA1\u7F3A\u9677\u3002\u6D6E\u70B9\u6570\u5728\u8FD0\u7B97\u8FC7\u7A0B\u4E2D\u4F1A\u4EA7\u751F\u8BEF\u5DEE\uFF0C\u56E0\u4E3A\u8BA1\u7B97\u673A\u65E0\u6CD5\u7CBE\u786E\u8868\u793A\u65E0\u9650\u5FAA\u73AF\u5C0F\u6570\u3002\u8981\u6BD4\u8F83\u4E24\u4E2A\u6D6E\u70B9\u6570\u662F\u5426\u76F8\u7B49\uFF0C\u53EA\u80FD\u8BA1\u7B97\u5B83\u4EEC\u4E4B\u5DEE\u7684\u7EDD\u5BF9\u503C\uFF0C\u770B\u662F\u5426\u5C0F\u4E8E\u67D0\u4E2A\u9608\u503C:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.0000001</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5E03\u5C14\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C14\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u5E03\u5C14\u8FD0\u7B97\u7B26</h2><h3 id="\u4E0E\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u4E0E\u8FD0\u7B97\u7B26 <code>&amp;&amp;</code></h3><p><code>&amp;&amp;</code> \u8FD0\u7B97\u662F\u4E0E\u8FD0\u7B97\uFF0C\u4ECE\u5DE6\u81F3\u53F3\u8FD0\u884C\u65F6\uFF0C\u68C0\u6D4B\u5230\u6709\u4EFB\u4E00\u8868\u8FBE\u5F0F\u4E3A <code>false</code> \u65F6\uFF0C\u5373\u505C\u6B62\u6267\u884C\u8F93\u51FA\u8BE5\u8868\u8FBE\u5F0F\u7684\u503C\uFF0C\u5426\u5219\u8F93\u51FA\u6700\u540E\u4E00\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\u3002</p><p>\u4E5F\u5C31\u662F\u6240\u53EA\u6709\u6240\u6709\u8868\u8FBE\u5F0F\u90FD\u4E3A\u201C\u771F\u201D\u65F6\uFF0C <code>&amp;&amp;</code> \u624D\u4F1A\u8F93\u51FA\u771F\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u4E2A&amp;&amp;\u8BED\u53E5\u8BA1\u7B97\u7ED3\u679C\u4E3Atrue</span>
<span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u4E2A&amp;&amp;\u8BED\u53E5\u8BA1\u7B97\u7ED3\u679C\u4E3Afalse</span>
<span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u4E2A&amp;&amp;\u8BED\u53E5\u8BA1\u7B97\u7ED3\u679C\u4E3Afalse</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6216\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6216\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6216\u8FD0\u7B97\u7B26 <code>||</code></h3><p><code>||</code> \u8FD0\u7B97\u662F\u6216\u8FD0\u7B97\uFF0C\u4ECE\u5DE6\u81F3\u53F3\u8FD0\u884C\u65F6\uFF0C\u68C0\u6D4B\u5230\u6709\u4EFB\u4E00\u8868\u8FBE\u5F0F\u4E3A <code>true</code> \u65F6\uFF0C\u5373\u505C\u6B62\u6267\u884C\u8F93\u51FA\u8BE5\u8868\u8FBE\u5F0F\u7684\u503C\uFF0C\u5426\u5219\u8F93\u51FA\u6700\u540E\u4E00\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\u3002</p><p>\u4E5F\u5C31\u662F\u6240\u53EA\u6709\u6240\u6709\u8868\u8FBE\u5F0F\u90FD\u4E3A\u201C\u5047\u201D\u65F6\uFF0C <code>||</code> \u624D\u4F1A\u8F93\u51FA\u5047\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token boolean">false</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u4E2A||\u8BED\u53E5\u8BA1\u7B97\u7ED3\u679C\u4E3Afalse</span>
<span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u4E2A||\u8BED\u53E5\u8BA1\u7B97\u7ED3\u679C\u4E3Atrue</span>
<span class="token boolean">false</span> <span class="token operator">||</span> <span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u4E2A||\u8BED\u53E5\u8BA1\u7B97\u7ED3\u679C\u4E3Atrue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u975E\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u975E\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u975E\u8FD0\u7B97\u7B26 <code>!</code></h3><p><code>!</code> \u8FD0\u7B97\u662F\u975E\u8FD0\u7B97\uFF0C\u5B83\u662F\u4E00\u4E2A\u5355\u76EE\u8FD0\u7B97\u7B26\uFF0C\u628A <code>true</code> \u53D8\u6210 <code>false</code>\uFF0C<code>false</code> \u53D8\u6210 <code>true</code>:</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>!</code> \u4F1A\u7B49\u5F85\u5176\u540E\u7684\u8868\u8FBE\u5F0F\u8FD0\u7B97\u5B8C\u6BD5\uFF0C\u4E4B\u540E\u5C06\u5176\u8F6C\u6362\u4E3A Boolean \u540E\u7ED9\u51FA\u4E00\u4E2A\u76F8\u53CD\u7684\u503C\u3002</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u4E3Afalse</span>
<span class="token operator">!</span><span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u4E3Atrue</span>
<span class="token operator">!</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7ED3\u679C\u4E3Atrue</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E03\u5C14\u503C\u7ECF\u5E38\u7528\u5728\u6761\u4EF6\u5224\u65AD\u4E2D\uFF0C\u6BD4\u5982:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;adult&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;teenager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E09\u5143\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5143\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u4E09\u5143\u8FD0\u7B97\u7B26</h3>`,41),g=s("\u8BE6\u89C1 "),h=s("if / \u4E09\u5143\u8FD0\u7B97\u7B26"),f=s(" \u7AE0\u8282");function j(_,x){const a=i("RouterLink");return t(),c("div",null,[n("div",u,[r,n("p",null,[k,e(a,{to:"/code/language/js/guide/boolean.html"},{default:o(()=>[m]),_:1}),v])]),b,n("p",null,[g,e(a,{to:"/code/language/js/guide/condition.html#%E4%B8%89%E5%85%83%E8%BF%90%E7%AE%97%E7%AC%A6"},{default:o(()=>[h]),_:1}),f])])}var q=p(d,[["render",j],["__file","boolean.html.vue"]]);export{q as default};
