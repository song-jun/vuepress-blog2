import{_ as n,o as s,c as a,e as t}from"./app.238d4ac4.js";const p={},e=t(`<div class="custom-container tip"><p class="custom-container-title">Node\u542F\u52A8https\u670D\u52A1\u5668</p><p>https\u8BC1\u4E66<br> Node\u539F\u751F\u7248\u672C<br> express\u7248\u672C<br> koa\u7248\u672C ......</p></div><ul><li>\u9996\u5148\u4F60\u9700\u8981\u751F\u6210https\u8BC1\u4E66\uFF0C\u514D\u8D39\u7684https\u8BC1\u4E66\u53EF\u80FD\u4F1A\u662Fkey\u6216\u8005crt\u6216\u8005pem\u7ED3\u5C3E\u7684\u3002\u4E0D\u540C\u683C\u5F0F\u4E4B\u95F4\u53EF\u4EE5\u901A\u8FC7OpenSSL\u8F6C\u6362</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>openssl x509 -in mycert.crt -out mycert.pem -outform PEM
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="node\u539F\u751F\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#node\u539F\u751F\u7248\u672C" aria-hidden="true">#</a> Node\u539F\u751F\u7248\u672C</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> https <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;https&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u6839\u636E\u9879\u76EE\u7684\u8DEF\u5F84\u5BFC\u5165\u751F\u6210\u7684\u8BC1\u4E66\u6587\u4EF6</span>
<span class="token keyword">const</span> privateKey <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./certificate/private.key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> certificate <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./certificate/certificate.crt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> credentials <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> privateKey<span class="token punctuation">,</span>
  <span class="token literal-property property">cert</span><span class="token operator">:</span> certificate<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFAhttps\u670D\u52A1\u5668\u5B9E\u4F8B</span>
<span class="token keyword">const</span> httpsServer <span class="token operator">=</span> https<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>credentials<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u8BBE\u7F6Ehttps\u7684\u8BBF\u95EE\u7AEF\u53E3\u53F7</span>
<span class="token keyword">const</span> <span class="token constant">SSLPORT</span> <span class="token operator">=</span> <span class="token number">443</span>

<span class="token comment">// \u542F\u52A8\u670D\u52A1\u5668\uFF0C\u76D1\u542C\u5BF9\u5E94\u7684\u7AEF\u53E3</span>
httpsServer<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">SSLPORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">HTTPS Server is running on: https://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">SSLPORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="express\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#express\u7248\u672C" aria-hidden="true">#</a> express\u7248\u672C</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> https <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;https&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u6839\u636E\u9879\u76EE\u7684\u8DEF\u5F84\u5BFC\u5165\u751F\u6210\u7684\u8BC1\u4E66\u6587\u4EF6</span>
<span class="token keyword">const</span> privateKey <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./certificate/private.key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> certificate <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./certificate/certificate.crt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> credentials <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> privateKey<span class="token punctuation">,</span>
  <span class="token literal-property property">cert</span><span class="token operator">:</span> certificate<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFAexpress\u5B9E\u4F8B</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u5904\u7406\u8BF7\u6C42</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u521B\u5EFAhttps\u670D\u52A1\u5668\u5B9E\u4F8B</span>
<span class="token keyword">const</span> httpsServer <span class="token operator">=</span> https<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>credentials<span class="token punctuation">,</span> app<span class="token punctuation">)</span>

<span class="token comment">// \u8BBE\u7F6Ehttps\u7684\u8BBF\u95EE\u7AEF\u53E3\u53F7</span>
<span class="token keyword">const</span> <span class="token constant">SSLPORT</span> <span class="token operator">=</span> <span class="token number">443</span>

<span class="token comment">// \u542F\u52A8\u670D\u52A1\u5668\uFF0C\u76D1\u542C\u5BF9\u5E94\u7684\u7AEF\u53E3</span>
httpsServer<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">SSLPORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">HTTPS Server is running on: https://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">SSLPORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="koa\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#koa\u7248\u672C" aria-hidden="true">#</a> koa\u7248\u672C</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> https <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;https&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u6839\u636E\u9879\u76EE\u7684\u8DEF\u5F84\u5BFC\u5165\u751F\u6210\u7684\u8BC1\u4E66\u6587\u4EF6</span>
<span class="token keyword">const</span> privateKey <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./certificate/private.key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> certificate <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./certificate/certificate.crt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> credentials <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> privateKey<span class="token punctuation">,</span>
  <span class="token literal-property property">cert</span><span class="token operator">:</span> certificate<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u521B\u5EFAkoa\u5B9E\u4F8B</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u5904\u7406\u8BF7\u6C42</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">ctx</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&#39;Hello World!&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u521B\u5EFAhttps\u670D\u52A1\u5668\u5B9E\u4F8B</span>
<span class="token keyword">const</span> httpsServer <span class="token operator">=</span> https<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>credentials<span class="token punctuation">,</span> app<span class="token punctuation">.</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u8BBE\u7F6Ehttps\u7684\u8BBF\u95EE\u7AEF\u53E3\u53F7</span>
<span class="token keyword">const</span> <span class="token constant">SSLPORT</span> <span class="token operator">=</span> <span class="token number">443</span>

<span class="token comment">// \u542F\u52A8\u670D\u52A1\u5668\uFF0C\u76D1\u542C\u5BF9\u5E94\u7684\u7AEF\u53E3</span>
httpsServer<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">SSLPORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">HTTPS Server is running on: https://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">SSLPORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","Node\u542F\u52A8https\u670D\u52A1\u5668.html.vue"]]);export{r as default};
