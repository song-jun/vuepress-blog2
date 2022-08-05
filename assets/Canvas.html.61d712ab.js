import{_ as n,o as a,c as s,e as t}from"./app.17aa6dfd.js";const e={},i=t(`<h2 id="\u7ED8\u56FE\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u56FE\u5DE5\u5177" aria-hidden="true">#</a> \u7ED8\u56FE\u5DE5\u5177</h2><p>canvas\u753B\u5E03</p><ul><li>\u9ED8\u8BA4\u5927\u5C0F\u4E3A300*200</li><li>\u53EF\u901A\u8FC7width\u5C5E\u6027\u548Cheight\u5C5E\u6027\u8BBE\u7F6E\u753B\u5E03\u5927\u5C0F</li><li>\u89E3\u51B3\u753B\u5E03\u91CD\u7ED8\u95EE\u9898\uFF1A\u63CF\u8FB9\u540E\u4F7F\u7528 <code>beginPath()</code> \u5F00\u542F\u65B0\u7684\u56FE\u5C42</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>600<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>400<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u7ED8\u56FE\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u56FE\u65B9\u6CD5" aria-hidden="true">#</a> \u7ED8\u56FE\u65B9\u6CD5</h2><p>\u7EBF\u8FDE\u63A5\u65B9\u5F0F\uFF1A lineJoin: round | bevel | miter (\u9ED8\u8BA4)</p><p>\u7EBF\u5E3D\uFF08\u7EBF\u4E24\u7AEF\u7684\u7ED3\u675F\u65B9\u5F0F\uFF09\uFF1A lineCap: butt(\u9ED8\u8BA4\u503C) | round | square</p><p>\u95ED\u5408\u8DEF\u5F84\uFF1A ctx.closePath()</p><p>\u5F00\u542F\u65B0\u7684\u56FE\u5C42\uFF1A ctx.beginPath()</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6canvas\u753B\u5E03\u5BF9\u8C61</span>
<span class="token keyword">var</span> canvas <span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u83B7\u53D6\u7ED8\u56FE\u4E0A\u4E0B\u6587</span>
<span class="token keyword">var</span> ctx<span class="token operator">=</span>canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u843D\u7B14</span>
ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span>
<span class="token comment">// \u8FDE\u7EBF</span>
ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span>
<span class="token comment">// \u8BBE\u7F6E\u7EBF\u7684\u989C\u8272\u4E3A\u7EA2\u8272</span>
ctx<span class="token punctuation">.</span>strokeStyle<span class="token operator">=</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u8BBE\u7F6E\u7EBF\u5BBD</span>
ctx<span class="token punctuation">.</span>lineWidth<span class="token operator">=</span><span class="token string">&quot;20&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u63CF\u8FB9</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6E10\u53D8\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u6E10\u53D8\u65B9\u6848" aria-hidden="true">#</a> \u6E10\u53D8\u65B9\u6848</h2><h3 id="\u7EBF\u6027\u6E10\u53D8" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u6027\u6E10\u53D8" aria-hidden="true">#</a> \u7EBF\u6027\u6E10\u53D8</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// x0--&gt;\u6E10\u53D8\u5F00\u59CB\u7684x\u5750\u6807</span>
<span class="token comment">// y0--&gt;\u6E10\u53D8\u5F00\u59CB\u7684y\u5750\u6807</span>
<span class="token comment">// x1--&gt;\u6E10\u53D8\u7ED3\u675F\u7684x\u5750\u6807</span>
<span class="token comment">// y1--&gt;\u6E10\u53D8\u7ED3\u675F\u7684y\u5750\u6807</span>
<span class="token keyword">var</span> grd<span class="token operator">=</span>ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span>x0<span class="token punctuation">,</span>y0<span class="token punctuation">,</span>x1<span class="token punctuation">,</span>y1<span class="token punctuation">)</span><span class="token punctuation">;</span>  
      
<span class="token comment">// \u8BBE\u7F6E\u6E10\u53D8\u7684\u5F00\u59CB\u989C\u8272</span>
grd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string">&quot;black&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      
<span class="token comment">// \u8BBE\u7F6E\u6E10\u53D8\u7684\u4E2D\u95F4\u989C\u8272</span>
grd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">,</span><span class="token string">&quot;yellow&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token comment">// \u8BBE\u7F6E\u6E10\u53D8\u7684\u7ED3\u675F\u989C\u8272</span>
grd<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        

ctx<span class="token punctuation">.</span>strokeStyle<span class="token operator">=</span>grd<span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5907\u6CE8\uFF1AaddColorStop(offse,color)\u4E2D\u6E10\u53D8\u7684\u5F00\u59CB\u4F4D\u7F6E\u548C\u7ED3\u675F\u4F4D\u7F6E\u4ECB\u4E8E0-1\u4E4B\u95F4\uFF0C0\u4EE3\u8868\u5F00\u59CB\uFF0C1\u4EE3\u8868\u7ED3\u675F\u3002\u4E2D\u95F4\u53EF\u4EE5\u8BBE\u7F6E\u4EFB\u4F55\u5C0F\u6570\u3002</p><h3 id="\u5F84\u5411\u6E10\u53D8" tabindex="-1"><a class="header-anchor" href="#\u5F84\u5411\u6E10\u53D8" aria-hidden="true">#</a> \u5F84\u5411\u6E10\u53D8</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ctx.createradialGradient(x0,y0,r0,x1,y1,r1);

(x0,y0)\uFF1A\u6E10\u53D8\u7684\u5F00\u59CB\u5706\u7684 x,y \u5750\u6807

r0\uFF1A\u5F00\u59CB\u5706\u7684\u534A\u5F84

(x1,y1)\uFF1A\u6E10\u53D8\u7684\u7ED3\u675F\u5706\u7684 x,y \u5750\u6807

r1\uFF1A\u7ED3\u675F\u5706\u7684\u534A\u5F84
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u586B\u5145\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u586B\u5145\u6548\u679C" aria-hidden="true">#</a> \u586B\u5145\u6548\u679C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ctx.fillstyle=&quot;\u503C&quot;;    \u8BBE\u7F6E\u586B\u5145\u989C\u8272
ctx.fill();	          \u8BBE\u7F6E\u586B\u5145\u6548\u679C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u975E\u96F6\u73AF\u7ED5\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u975E\u96F6\u73AF\u7ED5\u539F\u5219" aria-hidden="true">#</a> \u975E\u96F6\u73AF\u7ED5\u539F\u5219</h2><ol><li>\u4EFB\u610F\u627E\u4E00\u70B9\uFF0C\u8D8A\u7B80\u5355\u8D8A\u597D</li><li>\u4EE5\u70B9\u4E3A\u5706\u5FC3\uFF0C\u7ED8\u5236\u4E00\u6761\u5C04\u7EBF\uFF0C\u8D8A\u7B80\u5355\u8D8A\u597D\uFF08\u76F8\u4EA4\u7684\u8FB9\u8D8A\u5C11\u8D8A\u597D\uFF09</li><li>\u4EE5\u5C04\u7EBF\u4E3A\u534A\u5F84\u987A\u65F6\u9488\u65CB\u8F6C\uFF0C\u76F8\u4EA4\u7684\u8FB9\u540C\u5411\u8BB0\u4E3A+1\uFF0C\u53CD\u65B9\u5411\u8BB0\u4E3A-1\uFF0C\u5982\u679C\u76F8\u52A0\u7684\u533A\u57DF\u7B49\u4E8E0\uFF0C\u5219\u4E0D\u586B\u5145\u3002\uFF08\u540C\u5411\u548C\u53CD\u5411\u6307\u7684\u662F\u65CB\u8F6C\u65B9\u5411\u548C\u7ED8\u5236\u65B9\u5411\u662F\u5426\u76F8\u540C\uFF09</li><li>\u975E\u96F6\u533A\u57DF\u586B\u5145<br> \u4F8B\u5B50\uFF1A\u56DE\u5B57\u56FE\u6848</li></ol><h2 id="\u7ED8\u5236\u865A\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u5236\u865A\u7EBF" aria-hidden="true">#</a> \u7ED8\u5236\u865A\u7EBF</h2><ul><li>\u539F\u7406\uFF1A\u8BBE\u7F6E\u865A\u7EBF\u5176\u5B9E\u5C31\u662F\u8BBE\u7F6E\u5B9E\u7EBF\u4E0E\u7A7A\u767D\u90E8\u5206\u76F4\u63A5\u7684\u8DDD\u79BB,\u5229\u7528\u6570\u7EC4\u63CF\u8FF0\u5176\u4E2D\u7684\u5173\u7CFB</li><li>\u7ED8\u5236 <ul><li>ctx.setLineDash(\u6570\u7EC4);</li><li>ctx.stroke();</li></ul></li><li>\u5B9E\u7EBF\u548C\u7A7A\u767D\u4E0D\u65AD\u6839\u636E\u6570\u7EC4\u7684\u503C\u5FAA\u73AF</li><li>\u5982\u679C\u8981\u5C06\u865A\u7EBF\u6539\u4E3A\u5B9E\u7EBF\uFF0C\u53EA\u8981\u5C06\u6570\u7EC4\u6539\u4E3A\u7A7A\u6570\u7EC4\u5373\u53EF</li></ul><h2 id="\u7ED8\u5236\u77E9\u5F62" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u5236\u77E9\u5F62" aria-hidden="true">#</a> \u7ED8\u5236\u77E9\u5F62</h2><ul><li>\u7ED8\u5236\u4E00\u4E2A\u63CF\u8FB9\u77E9\u5F62\uFF1A <code>content.strokeRect(x,y,width,height)</code></li><li>\u7ED8\u5236\u4E00\u4E2A\u586B\u5145\u77E9\u5F62\uFF1A <code>content.fillRect(x,y,width,height)</code></li><li>\u6E05\u9664\uFF1A <code>content.clearRect(x,y,width,height)</code></li><li>\u5B9E\u73B0\u52A8\u753B\u77E9\u5F62 <ul><li>\u5148\u6E05\u5C4F</li><li>\u7ED8\u5236\u56FE\u5F62</li><li>\u5904\u7406\u53D8\u91CF</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5F00\u59CB\u4F4D\u7F6E</span>
<span class="token keyword">var</span> x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">//\u5904\u7406\u7684\u662F\u4E00\u4E2A\u589E\u91CF</span>
<span class="token keyword">var</span> step<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
<span class="token comment">//\u6539\u53D8\u65B9\u5411\u53D8\u91CF</span>
<span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">//\u521B\u5EFA\u4E00\u4E2A\u5B9A\u65F6\u5668</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//\u5148\u6E05\u5C4F</span>
	ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//\u5F00\u59CB\u7ED8\u5236\u56FE\u5F62</span>
	ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//\u5F00\u59CB\u5904\u7406\u53D8\u91CF</span>
	x<span class="token operator">+=</span>step<span class="token operator">*</span>i<span class="token punctuation">;</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&gt;</span>canvas<span class="token punctuation">.</span>width<span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		i<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED8\u5236\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u5236\u6587\u672C" aria-hidden="true">#</a> \u7ED8\u5236\u6587\u672C</h2><ul><li><p>\u7ED8\u5236\u586B\u5145\u6587\u672C\uFF1A<code>content.fillText(\u6587\u672C\u7684\u5185\u5BB9,x,y)</code></p></li><li><p>\u7ED8\u5236\u9542\u7A7A\u6587\u672C\uFF1A<code>content.strokeText()</code></p></li><li><p>\u8BBE\u7F6E\u6587\u5B57\u5927\u5C0F\uFF1A</p><ul><li><code>content.font=&quot;20px \u5FAE\u8F6F\u96C5\u9ED1&quot;</code></li><li>\u5907\u6CE8\uFF1A \u8BE5\u5C5E\u6027\u8BBE\u7F6E\u6587\u5B57\u5927\u5C0F\uFF0C\u5FC5\u987B\u6309\u7167cssfont\u5C5E\u6027\u7684\u65B9\u5F0F\u8BBE\u7F6E</li></ul></li><li><p>\u6587\u5B57\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</p><ul><li><code>content.textalign=&quot;left | right | center&quot;</code></li><li>\u6587\u5B57\u5728\u5706\u5FC3\u70B9\u4F4D\u7F6E\u7684\u5BF9\u9F50\u65B9\u5F0F</li></ul></li><li><p>\u6587\u5B57\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F</p><ul><li><code>content.textBaseline=&quot;top | middle | bottom | alphabetic(\u9ED8\u8BA4)&quot;</code></li></ul></li><li><p>\u6587\u5B57\u9634\u5F71\u6548\u679C</p><ul><li>\u8BBE\u7F6E\u6587\u5B57\u9634\u5F71\u7684\u989C\u8272 <code>ctx.shadowColor=&quot;red&quot;</code></li><li>\u8BBE\u7F6E\u6587\u5B57\u9634\u5F71\u7684\u6C34\u5E73\u504F\u79FB\u91CF <code>ctx.ShadowOffsetX=\u503C</code></li><li>\u8BBE\u7F6E\u6587\u5B57\u9634\u5F71\u7684\u5782\u76F4\u504F\u79FB\u91CF <code>ctx.shadowOffsetY=\u503C</code></li><li>\u8BBE\u7F6E\u6587\u5B57\u9634\u5F71\u7684\u6A21\u7CCA\u5EA6 <code>ctx.shadowBlur=\u503C</code></li></ul></li></ul><h2 id="\u7ED8\u5236\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u5236\u56FE\u7247" aria-hidden="true">#</a> \u7ED8\u5236\u56FE\u7247</h2><ul><li>\u5C06\u56FE\u7247\u7ED8\u5236\u5230\u753B\u5E03\u7684\u6307\u5B9A\u4F4D\u7F6E <ul><li><code>content.drawImage(\u56FE\u7247\u5BF9\u8C61,x,y)</code></li></ul></li><li>\u5C06\u56FE\u7247\u7ED8\u5236\u5230\u6307\u5B9A\u533A\u57DF\u5927\u5C0F\u7684\u4F4D\u7F6E <ul><li><code> content.drawImage(\u56FE\u7247\u5BF9\u8C61,x,y,width,height);</code></li><li>x,y\u6307\u7684\u662F\u77E9\u5F62\u533A\u57DF\u7684\u4F4D\u7F6E</li><li>width\u548Cheight\u6307\u7684\u662F\u77E9\u5F62\u533A\u57DF\u7684\u5927\u5C0F</li></ul></li><li>\u5C06\u56FE\u7247\u7684\u6307\u5B9A\u533A\u57DF\u7ED8\u5236\u5230\u6307\u5B9A\u77E9\u5F62\u533A\u57DF\u5185 <ul><li><code>content.drawImage(\u56FE\u7247\u5BF9\u8C61,sx,sy,swidth,sheight,dx,dy,dwidth,dheight);</code></li><li>sx,sy \u6307\u7684\u662F\u8981\u4ECE\u56FE\u7247\u54EA\u5757\u533A\u57DF\u5F00\u59CB\u7ED8\u5236</li><li>swidth\uFF0Csheight \u662F\u6307\u622A\u53D6\u56FE\u7247\u533A\u57DF\u7684\u5927\u5C0F</li><li>dx,dy \u662F\u6307\u77E9\u5F62\u533A\u57DF\u7684\u4F4D\u7F6E</li><li>dwidth,dheight\u662F\u6307\u77E9\u5F62\u533A\u57DF\u7684\u5927\u5C0F</li></ul></li><li>\u89E3\u51B3\u56FE\u7247\u7ED8\u5236\u5230\u67D0\u4E00\u4E2A\u533A\u57DF\u7684\u6309\u6BD4\u4F8B\u7F29\u653E\u7ED8\u5236 <ul><li>\u7ED8\u5236\u5BBD\uFF1A\u7ED8\u5236\u9AD8 == \u539F\u59CB\u5BBD\uFF1A\u539F\u59CB\u9AD8</li></ul></li></ul><h2 id="\u7ED8\u5236\u5706\u5F27" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u5236\u5706\u5F27" aria-hidden="true">#</a> \u7ED8\u5236\u5706\u5F27</h2><ul><li><code>content.arc(x,y,radius,startradian,endradian[,direct]);</code><ul><li>(x,y) \u4E3A\u5706\u5FC3\u7684\u5750\u6807</li><li>radius \u4E3A\u534A\u5F84</li><li>startradian \u4E3A\u5F00\u59CB\u5F27\u5EA6</li><li>endradian \u4E3A\u7ED3\u675F\u5F27\u5EA6</li><li>direct \u4E3A\u65B9\u5411\uFF08\u9ED8\u8BA4\u987A\u65F6\u9488 false\uFF09true \u4EE3\u8868\u9006\u65F6\u9488</li></ul></li><li>\u4EE5\u5706\u5FC3\u4E3A\u4E2D\u5FC3\u5411\u53F3\u4E3A0\u89D2 \u987A\u65F6\u9488\u4E3A\u6B63\uFF0C\u9006\u65F6\u9488\u4E3A\u8D1F</li><li>\u89D2\u5EA6 \u548C \u5F27\u5EA6\u7684\u5173\u7CFB\uFF1A \u89D2\u5EA6:\u5F27\u5EA6= 180:pi</li></ul><h2 id="\u5750\u6807\u7CFB\u53D8\u6362" tabindex="-1"><a class="header-anchor" href="#\u5750\u6807\u7CFB\u53D8\u6362" aria-hidden="true">#</a> \u5750\u6807\u7CFB\u53D8\u6362</h2><h3 id="\u5E73\u79FB" tabindex="-1"><a class="header-anchor" href="#\u5E73\u79FB" aria-hidden="true">#</a> \u5E73\u79FB</h3><p>\u5750\u6807\u7CFB\u539F\u70B9\u7684\u5E73\u79FB\uFF1A<code>ctx.translate(x,y);</code></p><p>\u901A\u8FC7\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u5C06\u539F\u70B9\u7684\u4F4D\u7F6E\u8FDB\u884C\u91CD\u65B0\u8BBE\u7F6E\u3002</p><p>\u6CE8\u610F</p><ul><li>translate(x,y) \u4E2D\u4E0D\u80FD\u8BBE\u7F6E\u4E00\u4E2A\u503C</li><li>\u4E0EmoveTo(x,y) \u7684\u533A\u522B <ul><li>moveTo(x,y) \u6307\u7684\u662F\u5C06\u753B\u7B14\u7684\u843D\u7B14\u70B9\u7684\u4F4D\u7F6E\u6539\u53D8\uFF0C\u800C\u5750\u6807\u7CFB\u4E2D\u7684\u539F\u70B9\u4F4D\u7F6E\u5E76\u6CA1\u6709\u53D1\u751F\u6539\u53D8</li><li>translate(x,y) \u662F\u5C06\u5750\u6807\u7CFB\u4E2D\u7684\u539F\u70B9\u4F4D\u7F6E\u53D1\u751F\u6539\u53D8</li></ul></li></ul><h3 id="\u65CB\u8F6C" tabindex="-1"><a class="header-anchor" href="#\u65CB\u8F6C" aria-hidden="true">#</a> \u65CB\u8F6C</h3><p>\u5750\u6807\u7CFB\u65CB\u8F6C\uFF1A<code>ctx.rotate(\u5F27\u5EA6)</code></p><h3 id="\u4F38\u7F29" tabindex="-1"><a class="header-anchor" href="#\u4F38\u7F29" aria-hidden="true">#</a> \u4F38\u7F29</h3><p>\u6CBF\u7740x\u8F74\u548Cy\u8F74\u7F29\u653E\uFF1A<code>ctx.scale(x,y)</code></p><p>x,y \u4E3A\u500D\u6570 \u4F8B\u5982\uFF1A 0.5 1</p>`,42),l=[i];function c(p,o){return a(),s("div",null,l)}var d=n(e,[["render",c],["__file","Canvas.html.vue"]]);export{d as default};
