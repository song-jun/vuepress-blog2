import{_ as n,o as s,c as a,e as t}from"./app.cc4bf3f5.js";var p="/vuepress-blog2/assets/img/drag.png";const e={},o=t(`<div class="custom-container tip"><p class="custom-container-title">vue\u5DE6\u53F3\u62D6\u62FD\u7EC4\u4EF6</p><p>template\u90E8\u5206<br> js\u90E8\u5206<br> CSS\u90E8\u5206<br> ......</p></div><h2 id="template\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#template\u90E8\u5206" aria-hidden="true">#</a> template\u90E8\u5206</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- drag --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag-box<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--\u5DE6\u4FA7div\u5185\u5BB9--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag-left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>resize<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6536\u7F29\u4FA7\u8FB9\u680F<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    \u22EE
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--\u53F3\u4FA7div\u5185\u5BB9--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag-right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#js\u90E8\u5206" aria-hidden="true">#</a> js\u90E8\u5206</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dragControllerDiv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">dragControllerDiv</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> resize <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> left <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;left&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> mid <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;mid&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;drag-box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> resize<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9F20\u6807\u6309\u4E0B\u4E8B\u4EF6</span>
        resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function-variable function">onmousedown</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">//\u989C\u8272\u6539\u53D8\u63D0\u9192</span>
          resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token string">&#39;#002240&#39;</span><span class="token punctuation">;</span>
          <span class="token keyword">var</span> startX <span class="token operator">=</span> e<span class="token punctuation">.</span>clientX<span class="token punctuation">;</span>
          resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left <span class="token operator">=</span> resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>offsetLeft<span class="token punctuation">;</span>
          <span class="token comment">// \u9F20\u6807\u62D6\u52A8\u4E8B\u4EF6</span>
          document<span class="token punctuation">.</span><span class="token function-variable function">onmousemove</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> endX <span class="token operator">=</span> e<span class="token punctuation">.</span>clientX<span class="token punctuation">;</span>
            <span class="token keyword">var</span> moveLen <span class="token operator">=</span> resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left <span class="token operator">+</span> <span class="token punctuation">(</span>endX <span class="token operator">-</span> startX<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uFF08endx-startx\uFF09=\u79FB\u52A8\u7684\u8DDD\u79BB\u3002resize[i].left+\u79FB\u52A8\u7684\u8DDD\u79BB=\u5DE6\u8FB9\u533A\u57DF\u6700\u540E\u7684\u5BBD\u5EA6</span>
            <span class="token keyword">var</span> maxT <span class="token operator">=</span> box<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>clientWidth <span class="token operator">-</span> resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>offsetWidth<span class="token punctuation">;</span> <span class="token comment">// \u5BB9\u5668\u5BBD\u5EA6 - \u5DE6\u8FB9\u533A\u57DF\u7684\u5BBD\u5EA6 = \u53F3\u8FB9\u533A\u57DF\u7684\u5BBD\u5EA6</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>moveLen <span class="token operator">&lt;</span> <span class="token number">200</span><span class="token punctuation">)</span> moveLen <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span> <span class="token comment">// \u5DE6\u8FB9\u533A\u57DF\u7684\u6700\u5C0F\u5BBD\u5EA6\u4E3A200px</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>moveLen <span class="token operator">&gt;</span> maxT <span class="token operator">-</span> <span class="token number">500</span><span class="token punctuation">)</span> moveLen <span class="token operator">=</span> maxT <span class="token operator">-</span> <span class="token number">500</span><span class="token punctuation">;</span> <span class="token comment">//\u53F3\u8FB9\u533A\u57DF\u6700\u5C0F\u5BBD\u5EA6\u4E3A500px</span>
            resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> moveLen<span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6E\u5DE6\u4FA7\u533A\u57DF\u7684\u5BBD\u5EA6</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> left<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              left<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> moveLen <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
              mid<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token punctuation">(</span>box<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>clientWidth <span class="token operator">-</span> moveLen <span class="token operator">-</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
          <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> currentWidth<span class="token operator">=</span>left<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>offsetWidth<span class="token punctuation">;</span>
            <span class="token keyword">var</span> endX <span class="token operator">=</span> e<span class="token punctuation">.</span>clientX<span class="token punctuation">;</span>
            <span class="token keyword">var</span> moveLen <span class="token operator">=</span> resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left <span class="token operator">+</span> <span class="token punctuation">(</span>endX <span class="token operator">-</span> startX<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uFF08endx-startx\uFF09=\u79FB\u52A8\u7684\u8DDD\u79BB\u3002resize[i].left+\u79FB\u52A8\u7684\u8DDD\u79BB=\u5DE6\u8FB9\u533A\u57DF\u6700\u540E\u7684\u5BBD\u5EA6</span>
            <span class="token keyword">var</span> maxT <span class="token operator">=</span> box<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>clientWidth <span class="token operator">-</span> resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>offsetWidth<span class="token punctuation">;</span> <span class="token comment">// \u5BB9\u5668\u5BBD\u5EA6 - \u5DE6\u8FB9\u533A\u57DF\u7684\u5BBD\u5EA6 = \u53F3\u8FB9\u533A\u57DF\u7684\u5BBD\u5EA6</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>moveLen <span class="token operator">&lt;</span> <span class="token number">200</span><span class="token punctuation">)</span> moveLen <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span> <span class="token comment">// \u5DE6\u8FB9\u533A\u57DF\u7684\u6700\u5C0F\u5BBD\u5EA6\u4E3A200px</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>moveLen <span class="token operator">&gt;</span> maxT <span class="token operator">-</span> <span class="token number">500</span><span class="token punctuation">)</span> moveLen <span class="token operator">=</span> maxT <span class="token operator">-</span> <span class="token number">500</span><span class="token punctuation">;</span> <span class="token comment">//\u53F3\u8FB9\u533A\u57DF\u6700\u5C0F\u5BBD\u5EA6\u4E3A500px</span>
            resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> moveLen<span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6E\u5DE6\u4FA7\u533A\u57DF\u7684\u5BBD\u5EA6</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> left<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              left<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> currentWidth <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
              mid<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token punctuation">(</span>box<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>clientWidth <span class="token operator">-</span> currentWidth <span class="token operator">-</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// \u9F20\u6807\u677E\u5F00\u4E8B\u4EF6</span>
          document<span class="token punctuation">.</span><span class="token function-variable function">onmouseup</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u989C\u8272\u6062\u590D</span>
            resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>background <span class="token operator">=</span> <span class="token string">&#39;#002240&#39;</span><span class="token punctuation">;</span>
            document<span class="token punctuation">.</span>onmousemove <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            document<span class="token punctuation">.</span>onmouseup <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>releaseCapture <span class="token operator">&amp;&amp;</span> resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">releaseCapture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5F53\u4F60\u4E0D\u5728\u9700\u8981\u7EE7\u7EED\u83B7\u5F97\u9F20\u6807\u6D88\u606F\u5C31\u8981\u5E94\u8BE5\u8C03\u7528ReleaseCapture()\u91CA\u653E\u6389</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
          resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>setCapture <span class="token operator">&amp;&amp;</span> resize<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">setCapture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u8BE5\u51FD\u6570\u5728\u5C5E\u4E8E\u5F53\u524D\u7EBF\u7A0B\u7684\u6307\u5B9A\u7A97\u53E3\u91CC\u8BBE\u7F6E\u9F20\u6807\u6355\u83B7</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#css\u90E8\u5206" aria-hidden="true">#</a> CSS\u90E8\u5206</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>&lt;style lang=<span class="token string">&quot;scss&quot;</span> scoped&gt;
<span class="token comment">/* \u62D6\u62FD\u76F8\u5173\u6837\u5F0F */</span>
<span class="token comment">/*\u5305\u56F4div\u6837\u5F0F*/</span>
<span class="token selector">.drag-box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> -1px 9px 10px 3px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.11<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\u5DE6\u4FA7div\u6837\u5F0F*/</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token comment">/*\u5DE6\u4FA7\u521D\u59CB\u5316\u5BBD\u5EA6*/</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #FFFFFF<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\u62D6\u62FD\u533Adiv\u6837\u5F0F*/</span>
<span class="token selector">.resize</span> <span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> -2px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> col-resize<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 45%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #002240<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px 0 0 20px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> -10px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token comment">/*z-index: 99999;*/</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\u62D6\u62FD\u533A\u9F20\u6807\u60AC\u505C\u6837\u5F0F*/</span>
<span class="token selector">.resize:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #409EFF<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*\u53F3\u4FA7div&#39;\u6837\u5F0F*/</span>
<span class="token selector">.mid</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 220px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/*\u53F3\u4FA7\u521D\u59CB\u5316\u5BBD\u5EA6*/</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> -1px 4px 5px 3px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.11<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>drag</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag-left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u81EA\u5B9A\u4E49\u90E8\u5206 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag-right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u81EA\u5B9A\u4E49\u90E8\u5206 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>drag</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6548\u679C\u5C55\u793A" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C\u5C55\u793A" aria-hidden="true">#</a> \u6548\u679C\u5C55\u793A</h2><img src="`+p+'" alt=""><ul><li>END</li></ul>',12),c=[o];function l(u,i){return s(),a("div",null,c)}var r=n(e,[["render",l],["__file","vue\u5DE6\u53F3\u62D6\u62FD\u7EC4\u4EF6.html.vue"]]);export{r as default};
