import{_ as n,o as s,c as a,e as t}from"./app.17aa6dfd.js";const p={},e=t(`<div class="custom-container tip"><p class="custom-container-title">\u7AE0\u8282\u8FC7\u65F6</p><p>\u5927\u90E8\u5206\u52A8\u753B\u90FD\u80FD\u591F\u901A\u8FC7 CSS3 \u7684 transition \u5B9E\u73B0\uFF0C\u4E14 CSS3 \u5F00\u9500\u66F4\u5C0F\u3002\u5728\u590D\u6742\u52A8\u753B\u4E0B\uFF0CjQuery \u66F4\u5BB9\u6613\u89E6\u53D1\u6027\u80FD\u74F6\u9888\u3002</p><p>2020 \u5E74\u6D4F\u89C8\u5668\u5BF9 CSS3 \u5DF2\u7ECF\u652F\u6301\u7684\u7279\u522B\u826F\u597D\uFF0C\u6240\u4EE5\u76EE\u524D\u5927\u591A\u6570\u7684\u52A8\u753B\u90FD\u76F4\u63A5\u4F7F\u7528 CSS3 \u7684\u52A8\u753B\u5E93\u3002\u672C\u7AE0\u4EE5\u5B66\u4E60\u601D\u8DEF\u4E3A\u4E3B\u5373\u53EF\u3002</p></div><p>\u7528 JavaScript \u5B9E\u73B0\u52A8\u753B\uFF0C\u539F\u7406\u975E\u5E38\u7B80\u5355: \u6211\u4EEC\u53EA\u9700\u8981\u4EE5\u56FA\u5B9A\u7684\u65F6\u95F4\u95F4\u9694(\u4F8B\u5982\uFF0C0.1 \u79D2)\uFF0C\u6BCF\u6B21\u628A DOM \u5143\u7D20\u7684 CSS \u6837\u5F0F\u4FEE\u6539\u4E00\u70B9(\u4F8B\u5982\uFF0C\u9AD8\u5BBD\u5404\u589E\u52A0 10%)\uFF0C\u770B\u8D77\u6765\u5C31\u50CF\u52A8\u753B\u4E86\u3002</p><p>\u4F46\u662F\u8981\u7528 JavaScript \u624B\u52A8\u5B9E\u73B0\u52A8\u753B\u6548\u679C\uFF0C\u9700\u8981\u7F16\u5199\u975E\u5E38\u590D\u6742\u7684\u4EE3\u7801\u3002\u5982\u679C\u60F3\u8981\u628A\u52A8\u753B\u6548\u679C\u7528\u51FD\u6570\u5C01\u88C5\u8D77\u6765\u4FBF\u4E8E\u590D\u7528\uFF0C\u90A3\u8003\u8651\u7684\u4E8B\u60C5\u5C31\u66F4\u591A\u4E86\u3002</p><p>\u4F7F\u7528 jQuery \u5B9E\u73B0\u52A8\u753B\uFF0C\u4EE3\u7801\u5DF2\u7ECF\u7B80\u5355\u5F97\u4E0D\u80FD\u518D\u7B80\u5316\u4E86: \u53EA\u9700\u8981\u4E00\u884C\u4EE3\u7801!</p><p>\u8BA9\u6211\u4EEC\u5148\u6765\u770B\u770B jQuery \u5185\u7F6E\u7684\u51E0\u79CD\u52A8\u753B\u6837\u5F0F:</p><h2 id="show-hide" tabindex="-1"><a class="header-anchor" href="#show-hide" aria-hidden="true">#</a> show / hide</h2><p>\u76F4\u63A5\u4EE5\u65E0\u53C2\u6570\u5F62\u5F0F\u8C03\u7528 <code>show()</code> \u548C <code>hide()</code>\uFF0C\u4F1A\u663E\u793A\u548C\u9690\u85CF DOM \u5143\u7D20\u3002\u4F46\u662F\uFF0C\u53EA\u8981\u4F20\u9012\u4E00\u4E2A\u65F6\u95F4\u53C2\u6570\u8FDB\u53BB\uFF0C\u5C31\u53D8\u6210\u4E86\u52A8\u753B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-show-hide&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u57283\u79D2\u949F\u5185\u9010\u6E10\u6D88\u5931</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65F6\u95F4\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u662F <code>&#39;slow&#39;</code>\uFF0C<code>&#39;fast&#39;</code> \u8FD9\u4E9B\u5B57\u7B26\u4E32:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-show-hide&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">&quot;slow&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u57280.6\u79D2\u949F\u5185\u9010\u6E10\u663E\u793A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>toggle()</code> \u65B9\u6CD5\u5219\u6839\u636E\u5F53\u524D\u72B6\u6001\u51B3\u5B9A\u662F <code>show()</code> \u8FD8\u662F <code>hide()</code>\u3002</p><h2 id="slideup-slidedown" tabindex="-1"><a class="header-anchor" href="#slideup-slidedown" aria-hidden="true">#</a> slideUp / slideDown</h2><p>\u60A8\u53EF\u80FD\u5DF2\u7ECF\u770B\u51FA\u6765\u4E86\uFF0C<code>show()</code> \u548C <code>hide()</code> \u662F\u4ECE\u5DE6\u4E0A\u89D2\u9010\u6E10\u5C55\u5F00\u6216\u6536\u7F29\u7684\uFF0C\u800C <code>slideUp()</code> \u548C <code>slideDown()</code> \u5219\u662F\u5728\u5782\u76F4\u65B9\u5411\u9010\u6E10\u5C55\u5F00\u6216\u6536\u7F29\u7684\u3002</p><p><code>slideUp()</code> \u628A\u4E00\u4E2A\u53EF\u89C1\u7684 DOM \u5143\u7D20\u6536\u8D77\u6765\uFF0C\u6548\u679C\u8DDF\u62C9\u4E0A\u7A97\u5E18\u4F3C\u7684\uFF0C<code>slideDown()</code> \u76F8\u53CD\uFF0C\u800C <code>slideToggle()</code> \u5219\u6839\u636E\u5143\u7D20\u662F\u5426\u53EF\u89C1\u6765\u51B3\u5B9A\u4E0B\u4E00\u6B65\u52A8\u4F5C:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-slide&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span><span class="token function">slideUp</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u57283\u79D2\u949F\u5185\u9010\u6E10\u5411\u4E0A\u6D88\u5931</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fadein-fadeout" tabindex="-1"><a class="header-anchor" href="#fadein-fadeout" aria-hidden="true">#</a> fadeIn / fadeOut</h2><p><code>fadeIn()</code> \u548C <code>fadeOut()</code> \u7684\u52A8\u753B\u6548\u679C\u662F\u6DE1\u5165\u6DE1\u51FA\uFF0C\u4E5F\u5C31\u662F\u901A\u8FC7\u4E0D\u65AD\u8BBE\u7F6E DOM \u5143\u7D20\u7684 <code>opacity</code> \u5C5E\u6027\u6765\u5B9E\u73B0\uFF0C\u800C <code>fadeToggle()</code> \u5219\u6839\u636E\u5143\u7D20\u662F\u5426\u53EF\u89C1\u6765\u51B3\u5B9A\u4E0B\u4E00\u6B65\u52A8\u4F5C:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#test-fade&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span><span class="token function">fadeOut</span><span class="token punctuation">(</span><span class="token string">&#39;slow&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5728 0.6 \u79D2\u5185\u6DE1\u51FA</span>
<span class="token function">fadeOut</span><span class="token punctuation">(</span><span class="token string">&#39;slow&#39;</span><span class="token punctuation">)</span>  <span class="token function">fadeIn</span><span class="token punctuation">(</span><span class="token string">&#39;slow&#39;</span><span class="token punctuation">)</span>  <span class="token function">fadeToggle</span><span class="token punctuation">(</span><span class="token string">&#39;slow&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u52A8\u753B" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u52A8\u753B</h2><p>\u5982\u679C\u4E0A\u8FF0\u52A8\u753B\u6548\u679C\u8FD8\u4E0D\u80FD\u6EE1\u8DB3\u60A8\u7684\u8981\u6C42\uFF0C\u90A3\u5C31\u796D\u51FA\u6700\u540E\u5927\u62DB: <code>animate()</code>\uFF0C\u5B83\u53EF\u4EE5\u5B9E\u73B0\u4EFB\u610F\u52A8\u753B\u6548\u679C\uFF0C\u6211\u4EEC\u9700\u8981\u4F20\u5165\u7684\u53C2\u6570\u5C31\u662F DOM \u5143\u7D20\u6700\u7EC8\u7684 CSS \u72B6\u6001\u548C\u65F6\u95F4\uFF0CjQuery \u5728\u65F6\u95F4\u6BB5\u5185\u4E0D\u65AD\u8C03\u6574 CSS \u76F4\u5230\u8FBE\u5230\u6211\u4EEC\u8BBE\u5B9A\u7684\u503C:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-animate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;256px&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;256px&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token number">3000</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5728 3 \u79D2\u949F\u5185 CSS \u8FC7\u6E21\u5230\u8BBE\u5B9A\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>animate()</code> \u8FD8\u53EF\u4EE5\u518D\u4F20\u5165\u4E00\u4E2A\u51FD\u6570\uFF0C\u5F53\u52A8\u753B\u7ED3\u675F\u65F6\uFF0C\u8BE5\u51FD\u6570\u5C06\u88AB\u8C03\u7528:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-animate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&quot;256px&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&quot;256px&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token number">3000</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u52A8\u753B\u5DF2\u7ED3\u675F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6062\u590D\u81F3\u521D\u59CB\u72B6\u6001:</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;opacity&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1.0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;128px&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;height&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;128px&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u9645\u4E0A\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570\u53C2\u6570\u5BF9\u4E8E\u57FA\u672C\u52A8\u753B\u4E5F\u662F\u9002\u7528\u7684\u3002</p><p>\u6709\u4E86 <code>animate()</code>\uFF0C\u60A8\u5C31\u53EF\u4EE5\u5B9E\u73B0\u5404\u79CD\u81EA\u5B9A\u4E49\u52A8\u753B\u6548\u679C\u4E86:</p><h2 id="\u4E32\u884C\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#\u4E32\u884C\u52A8\u753B" aria-hidden="true">#</a> \u4E32\u884C\u52A8\u753B</h2><p>jQuery \u7684\u52A8\u753B\u6548\u679C\u8FD8\u53EF\u4EE5\u4E32\u884C\u6267\u884C\uFF0C\u901A\u8FC7 <code>delay()</code> \u65B9\u6CD5\u8FD8\u53EF\u4EE5\u5B9E\u73B0\u6682\u505C\uFF0C\u8FD9\u6837\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B9E\u73B0\u66F4\u590D\u6742\u7684\u52A8\u753B\u6548\u679C\uFF0C\u800C\u4EE3\u7801\u5374\u76F8\u5F53\u7B80\u5355:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#test-animates&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u52A8\u753B\u6548\u679C: slideDown - \u6682\u505C - \u653E\u5927 - \u6682\u505C - \u7F29\u5C0F</span>
div<span class="token punctuation">.</span><span class="token function">slideDown</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;256px&#39;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;256px&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
   <span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;128px&#39;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;128px&#39;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u52A8\u753B\u9700\u8981\u6267\u884C\u4E00\u6BB5\u65F6\u95F4\uFF0C\u6240\u4EE5 jQuery \u5FC5\u987B\u4E0D\u65AD\u8FD4\u56DE\u65B0\u7684 Promise \u5BF9\u8C61\u624D\u80FD\u540E\u7EED\u6267\u884C\u64CD\u4F5C\u3002\u7B80\u5355\u5730\u628A\u52A8\u753B\u5C01\u88C5\u5728\u51FD\u6570\u4E2D\u662F\u4E0D\u591F\u7684\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u6709\u7684\u52A8\u753B\u6CA1\u6709\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u6709\u7684\u52A8\u753B\u6CA1\u6709\u6548\u679C" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u6709\u7684\u52A8\u753B\u6CA1\u6709\u6548\u679C</h2><p>\u60A8\u53EF\u80FD\u4F1A\u9047\u5230\uFF0C\u6709\u7684\u52A8\u753B\u5982 <code>slideUp()</code> \u6839\u672C\u6CA1\u6709\u6548\u679C\u3002\u8FD9\u662F\u56E0\u4E3A jQuery \u52A8\u753B\u7684\u539F\u7406\u662F\u9010\u6E10\u6539\u53D8 CSS \u7684\u503C\uFF0C\u5982 <code>height</code> \u4ECE <code>100px</code> \u9010\u6E10\u53D8\u4E3A <code>0</code>\u3002\u4F46\u662F\u5F88\u591A\u4E0D\u662F block \u6027\u8D28\u7684 DOM \u5143\u7D20\uFF0C\u5BF9\u5B83\u4EEC\u8BBE\u7F6E <code>height</code> \u6839\u672C\u5C31\u4E0D\u8D77\u4F5C\u7528\uFF0C\u6240\u4EE5\u52A8\u753B\u4E5F\u5C31\u6CA1\u6709\u6548\u679C\u3002</p><p>\u6B64\u5916\uFF0CjQuery \u4E5F\u6CA1\u6709\u5B9E\u73B0\u5BF9 <code>background-color</code> \u7684\u52A8\u753B\u6548\u679C\uFF0C\u7528 <code>animate()</code> \u8BBE\u7F6E <code>background-color</code> \u4E5F\u6CA1\u6709\u6548\u679C\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\u53EF\u4EE5\u4F7F\u7528 CSS3 \u7684 <code>transition</code> \u5B9E\u73B0\u52A8\u753B\u6548\u679C\u3002</p>`,32),o=[e];function c(i,l){return s(),a("div",null,o)}var d=n(p,[["render",c],["__file","animation.html.vue"]]);export{d as default};
