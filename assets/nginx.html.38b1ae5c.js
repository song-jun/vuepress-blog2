import{_ as a,o as e,c as i,b as n,a as c,e as o,d,r as t}from"./app.cc4bf3f5.js";const p={},l=o(`<p>Nginx \u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684 HTTP \u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u4E5F\u662F\u4E00\u4E2A IMAP / POP3 / SMTP \u4EE3\u7406\u670D\u52A1\u5668\u3002\u5176\u7279\u70B9\u662F\u5360\u6709\u5185\u5B58\u5C11\uFF0C\u5E76\u53D1\u80FD\u529B\u5F3A\uFF0C\u7A33\u5B9A\u6027\u9AD8\uFF0C\u5E76\u4E14 Nginx \u4E5F\u62E5\u6709\u53CB\u597D\u7075\u6D3B\u7684\u914D\u7F6E\u3002</p><h2 id="\u542F\u52A8-\u505C\u6B62\u548C\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-\u505C\u6B62\u548C\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E" aria-hidden="true">#</a> \u542F\u52A8\uFF0C\u505C\u6B62\u548C\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E</h2><p>\u8981\u542F\u52A8 nginx\uFF0C\u8BF7\u8FD0\u884C\u53EF\u6267\u884C\u6587\u4EF6\u3002\u4E00\u65E6\u542F\u52A8 nginx\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 <code>-s</code> \u53C2\u6570\u8C03\u7528\u53EF\u6267\u884C\u6587\u4EF6\u6765\u5BF9\u5176\u8FDB\u884C\u63A7\u5236\u3002\u4F7F\u7528\u4EE5\u4E0B\u8BED\u6CD5:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nginx -s signal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5176\u4E2D <code>signal</code> \u53EF\u80FD\u662F\u4EE5\u4E0B\u4E4B\u4E00:</p><ul><li>stop - \u5FEB\u901F\u5173\u673A</li><li>quit \u2014 \u6B63\u5E38\u5173\u673A</li><li>reload \u2014 \u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6</li><li>reopen \u2014 \u91CD\u65B0\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6</li></ul><h2 id="\u914D\u7F6E\u6587\u4EF6\u7684\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u7684\u7ED3\u6784" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u7684\u7ED3\u6784</h2><p>Nginx \u7531\u53D7\u914D\u7F6E\u6587\u4EF6\u4E2D\u6307\u5B9A\u7684\u6307\u4EE4\u63A7\u5236\u7684\u6A21\u5757\u7EC4\u6210\u3002\u6307\u4EE4\u5206\u4E3A\u7B80\u5355\u6307\u4EE4\u548C\u5757\u6307\u4EE4\u3002\u4E00\u4E2A\u7B80\u5355\u7684\u6307\u4EE4\u7531\u540D\u79F0\u548C\u53C2\u6570\u7EC4\u6210\uFF0C\u8FD9\u4E9B\u540D\u79F0\u548C\u53C2\u6570\u4E4B\u95F4\u7528\u7A7A\u683C\u5206\u9694\uFF0C\u5E76\u4EE5\u5206\u53F7(<code>;</code>)\u7ED3\u5C3E\u3002\u5757\u6307\u4EE4\u7684\u7ED3\u6784\u4E0E\u7B80\u5355\u6307\u4EE4\u7684\u7ED3\u6784\u76F8\u540C\uFF0C\u4F46\u662F\u5B83\u4E0D\u4EE5\u5206\u53F7\u7ED3\u5C3E\uFF0C\u800C\u662F\u5E26\u6709\u4E00\u7EC4\u7528\u62EC\u53F7 (<code>{</code> \u548C <code>}</code>) \u62EC\u8D77\u6765\u7684\u9644\u52A0\u6307\u4EE4\u3002\u5982\u679C\u4E00\u4E2A\u5757\u6307\u4EE4\u5728\u62EC\u53F7\u5185\u53EF\u4EE5\u6709\u5176\u4ED6\u6307\u4EE4\uFF0C\u5219\u79F0\u4E3A context (\u4F8B\u5982: <code>events</code>, <code>http</code>, <code>server</code> \u548C <code>location</code>)\u3002</p><p>\u653E\u7F6E\u5728\u4EFB\u4F55 context \u5916\u90E8\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u6307\u4EE4\u90FD\u88AB\u89C6\u4E3A\u5728 main context \u4E2D\u3002<code>events</code> \u548C <code>http</code> \u6307\u4EE4\u4F4D\u4E8E <code>main</code> context \u4E2D\uFF0C<code>server</code> \u4F4D\u4E8E <code>http</code> \u4E2D, \u5E76\u4E14 <code>location</code> \u5728 <code>server</code> \u4E2D</p><p><code>#</code> \u53F7\u540E\u7684\u5176\u4F59\u884C\u88AB\u89C6\u4E3A\u6CE8\u91CA\u3002</p><h2 id="\u63D0\u4F9B\u9759\u6001\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4F9B\u9759\u6001\u5185\u5BB9" aria-hidden="true">#</a> \u63D0\u4F9B\u9759\u6001\u5185\u5BB9</h2><p>Web \u670D\u52A1\u5668\u7684\u4E00\u9879\u91CD\u8981\u4EFB\u52A1\u662F\u5206\u53D1\u6587\u4EF6(\u4F8B\u5982\u56FE\u50CF\u6216\u9759\u6001 HTML \u9875\u9762)\u3002\u60A8\u5C06\u5B9E\u73B0\u4E00\u4E2A\u793A\u4F8B\uFF0C\u5176\u4E2D\u5C06\u6839\u636E\u8BF7\u6C42\u4ECE\u4E0D\u540C\u7684\u672C\u5730\u76EE\u5F55\u63D0\u4F9B\u6587\u4EF6: <code>/data/www</code> (\u53EF\u80FD\u5305\u542B HTML \u6587\u4EF6)\u548C <code>/data/images</code>(\u5305\u542B\u56FE\u50CF)\u3002\u8FD9\u5C06\u9700\u8981\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u5728\u5E26\u6709\u4E24\u4E2A\u4F4D\u7F6E\u5757\u7684 http \u5757\u5185\u8BBE\u7F6E\u670D\u52A1\u5668\u5757\u3002</p><p>\u9996\u5148\uFF0C\u521B\u5EFA <code>/data/www</code> \u76EE\u5F55\uFF0C\u5E76\u5C06\u5305\u542B\u4EFB\u4F55\u6587\u672C\u5185\u5BB9\u7684 <code>index.html</code> \u6587\u4EF6\u653E\u5165\u5176\u4E2D\uFF0C\u5E76\u521B\u5EFA <code>/data/images</code> \u76EE\u5F55\u5E76\u5C06\u4E00\u4E9B\u56FE\u50CF\u653E\u5165\u5176\u4E2D\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u6253\u5F00\u914D\u7F6E\u6587\u4EF6\u3002\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u5DF2\u7ECF\u5305\u542B\u4E86\u670D\u52A1\u5668\u5757\u7684\u51E0\u4E2A\u793A\u4F8B\uFF0C\u5927\u90E8\u5206\u5DF2\u88AB\u6CE8\u91CA\u6389\u3002\u73B0\u5728\uFF0C\u6CE8\u91CA\u6389\u6240\u6709\u8FD9\u4E9B\u5757\u5E76\u542F\u52A8\u4E00\u4E2A\u65B0\u7684\u670D\u52A1\u5668\u5757:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u5E38\uFF0C\u914D\u7F6E\u6587\u4EF6\u53EF\u4EE5\u5305\u62EC\u51E0\u4E2A\u670D\u52A1\u5668\u5757\uFF0C\u8FD9\u4E9B\u670D\u52A1\u5668\u5757\u901A\u8FC7\u5B83\u4EEC\u4FA6\u542C\u7684\u7AEF\u53E3\u548C\u670D\u52A1\u5668\u540D\u79F0\u6765\u533A\u5206\u3002\u4E00\u65E6 nginx \u51B3\u5B9A\u4E86\u54EA\u4E2A\u670D\u52A1\u5668\u5904\u7406\u8BF7\u6C42\uFF0C\u5B83\u5C31\u4F1A\u6839\u636E\u670D\u52A1\u5668\u5757\u5185\u5B9A\u4E49\u7684 location \u6307\u4EE4\u7684\u53C2\u6570\u6D4B\u8BD5\u8BF7\u6C42\u6807\u5934\u4E2D\u6307\u5B9A\u7684 URI\u3002</p><p>\u5C06\u4EE5\u4E0B\u4F4D\u7F6E\u5757\u6DFB\u52A0\u5230\u670D\u52A1\u5668\u5757:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">root</span> /data/www</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0E\u8BF7\u6C42\u4E2D\u7684 URI \u76F8\u6BD4\uFF0C\u6B64\u4F4D\u7F6E\u5757\u6307\u5B9A \u201C<code>/</code>\u201D \u524D\u7F00\u3002\u5BF9\u4E8E\u5339\u914D\u7684\u8BF7\u6C42\uFF0CURI \u5C06\u88AB\u6DFB\u52A0\u5230 root \u6307\u4EE4\u4E2D\u6307\u5B9A\u7684\u8DEF\u5F84\uFF0C\u5373 <code>/data/www</code>\uFF0C\u4EE5\u5F62\u6210\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u4E0A\u6240\u8BF7\u6C42\u6587\u4EF6\u7684\u8DEF\u5F84\u3002\u5982\u679C\u6709\u591A\u4E2A\u5339\u914D\u7684\u4F4D\u7F6E\u5757\uFF0Cnginx \u5C06\u9009\u62E9\u524D\u7F00\u6700\u957F\u7684\u4F4D\u7F6E\u5757\u3002\u4E0A\u9762\u7684\u4F4D\u7F6E\u5757\u63D0\u4F9B\u4E86\u6700\u77ED\u7684\u524D\u7F00\uFF0C\u957F\u5EA6\u4E3A 1\uFF0C\u56E0\u6B64\uFF0C\u53EA\u6709\u5728\u6240\u6709\u5176\u4ED6\u4F4D\u7F6E\u5757\u5747\u672A\u63D0\u4F9B\u5339\u914D\u9879\u65F6\uFF0C\u624D\u4F1A\u4F7F\u7528\u8BE5\u5757\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u6DFB\u52A0\u7B2C\u4E8C\u4E2A\u4F4D\u7F6E\u5757:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /images/</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">root</span> /data</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C06\u5339\u914D\u4EE5 <code>/images/</code> \u5F00\u5934\u7684\u8BF7\u6C42(\u4F4D\u7F6E <code>/</code> \u4E5F\u5339\u914D\u6B64\u7C7B\u8BF7\u6C42\uFF0C\u4F46\u524D\u7F00\u8F83\u77ED)\u3002</p><p>\u670D\u52A1\u5668\u5757\u7684\u6700\u7EC8\u914D\u7F6E\u5E94\u5982\u4E0B\u6240\u793A:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /data/www</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">location</span> /images/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /data</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5DF2\u7ECF\u662F\u670D\u52A1\u5668\u7684\u5DE5\u4F5C\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5728\u6807\u51C6\u7AEF\u53E3 <code>80</code> \u4E0A\u4FA6\u542C\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5728\u672C\u5730\u8BA1\u7B97\u673A\u4E0A\u7684 <code>http://localhost/</code> \u4E0A\u8BBF\u95EE\u3002\u54CD\u5E94\u4EE5 <code>/images/</code> \u5F00\u5934\u7684 URI \u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u5C06\u4ECE <code>/data/images</code> \u76EE\u5F55\u4E2D\u53D1\u9001\u6587\u4EF6\u3002\u4F8B\u5982\uFF0C\u4E3A\u54CD\u5E94 <code>http://localhost/images/example.png</code> \u8BF7\u6C42\uFF0Cnginx \u5C06\u53D1\u9001\u6587\u4EF6 <code>/data/images/example.png</code>\u3002\u5982\u679C\u8BE5\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0Cnginx \u5C06\u53D1\u9001\u4E00\u4E2A\u6CE8\u660E 404 \u9519\u8BEF\u7684\u54CD\u5E94\u3002URI \u4E0D\u4EE5 <code>/images/</code> \u5F00\u5934\u7684\u8BF7\u6C42\u5C06\u88AB\u6620\u5C04\u5230 <code>/data/www</code> \u76EE\u5F55\u3002\u4F8B\u5982\uFF0Cnginx \u4F1A\u54CD\u5E94 <code>http://localhost/some/example.html</code> \u8BF7\u6C42\u53D1\u9001 <code>/data/www/some/example.html</code> \u6587\u4EF6\u3002</p><p>\u8981\u5E94\u7528\u65B0\u914D\u7F6E\uFF0C\u8BF7\u542F\u52A8 nginx (\u5982\u679C\u5C1A\u672A\u542F\u52A8)\uFF0C\u6216\u901A\u8FC7\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5411 nginx \u7684\u4E3B\u8FDB\u7A0B\u53D1\u9001 <code>reload</code> \u4FE1\u53F7:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u67D0\u4E9B\u4E1C\u897F\u65E0\u6CD5\u6309\u9884\u671F\u5DE5\u4F5C\uFF0C\u5219\u53EF\u4EE5\u5C1D\u8BD5\u5728\u76EE\u5F55 <code>/usr/local/nginx/logs</code> \u6216\u76EE\u5F55 <code>/var/log/nginx</code> \u4E2D\u7684 access.log \u548C error.log \u6587\u4EF6\u4E2D\u627E\u51FA\u539F\u56E0\u3002\u3002</p><h2 id="\u8BBE\u7F6E\u7B80\u5355\u7684\u4EE3\u7406\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u7B80\u5355\u7684\u4EE3\u7406\u670D\u52A1\u5668" aria-hidden="true">#</a> \u8BBE\u7F6E\u7B80\u5355\u7684\u4EE3\u7406\u670D\u52A1\u5668</h2><p>Nginx \u7684\u4E00\u79CD\u5E38\u7528\u7528\u6CD5\u662F\u5C06\u5176\u8BBE\u7F6E\u4E3A\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u8FD9\u610F\u5473\u7740\u670D\u52A1\u5668\u53EF\u4EE5\u63A5\u6536\u8BF7\u6C42\uFF0C\u5C06\u8BF7\u6C42\u4F20\u9012\u7ED9\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u4ECE\u8BF7\u6C42\u4E2D\u68C0\u7D22\u54CD\u5E94\u5E76\u5C06\u5B83\u4EEC\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u3002</p><p>\u6211\u4EEC\u5C06\u914D\u7F6E\u4E00\u4E2A\u57FA\u672C\u7684\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u8BE5\u670D\u52A1\u5668\u4E3A\u56FE\u50CF\u8BF7\u6C42\u548C\u672C\u5730\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u63D0\u4F9B\u670D\u52A1\uFF0C\u5E76\u5C06\u6240\u6709\u5176\u4ED6\u8BF7\u6C42\u53D1\u9001\u5230\u4EE3\u7406\u670D\u52A1\u5668\u3002\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C\u4E24\u4E2A\u670D\u52A1\u5668\u90FD\u5C06\u5728\u5355\u4E2A nginx \u5B9E\u4F8B\u4E0A\u5B9A\u4E49\u3002</p><p>\u9996\u5148\uFF0C\u901A\u8FC7\u5411 nginx \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0\u53E6\u4E00\u4E2A <code>server</code> \u5757\u6765\u5B9A\u4E49\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u5176\u5185\u5BB9\u5982\u4E0B:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">8080</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">root</span> /data/up1</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C06\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u670D\u52A1\u5668\uFF0C\u5B83\u5728\u7AEF\u53E3 8080 \u4E0A\u4FA6\u542C (\u4EE5\u524D\uFF0C\u81EA\u4ECE\u4F7F\u7528\u6807\u51C6\u7AEF\u53E3 80 \u4EE5\u6765\uFF0C\u672A\u6307\u5B9A listen \u6307\u4EE4) \u5E76\u5C06\u6240\u6709\u8BF7\u6C42\u6620\u5C04\u5230\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u7684 <code>/data/up1</code> \u76EE\u5F55\u4E2D\u3002\u521B\u5EFA\u6B64\u76EE\u5F55\uFF0C\u5E76\u5C06 <code>index.html</code> \u6587\u4EF6\u653E\u5165\u5176\u4E2D\u3002\u8BF7\u6CE8\u610F\uFF0C\u6839\u6307\u4EE4\u4F4D\u4E8E\u670D\u52A1\u5668\u4E0A\u4E0B\u6587\u4E2D\u3002\u5F53\u9009\u62E9\u7528\u4E8E\u670D\u52A1\u8BF7\u6C42\u7684\u4F4D\u7F6E\u5757\u4E0D\u5305\u62EC\u81EA\u5DF1\u7684\u6839\u6307\u4EE4\u65F6\uFF0C\u5C06\u4F7F\u7528\u8FD9\u79CD\u6839\u6307\u4EE4\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u4F7F\u7528\u4E0A\u4E00\u90E8\u5206\u4E2D\u7684\u670D\u52A1\u5668\u914D\u7F6E\u5E76\u5BF9\u5176\u8FDB\u884C\u4FEE\u6539\u4EE5\u4F7F\u5176\u6210\u4E3A\u4EE3\u7406\u670D\u52A1\u5668\u914D\u7F6E\u3002\u5728\u7B2C\u4E00\u4E2A\u4F4D\u7F6E\u5757\u4E2D\uFF0C\u5C06 <code>proxy_pass</code> \u6307\u4EE4\u4E0E\u53C2\u6570\u4E2D\u6307\u5B9A\u7684\u4EE3\u7406\u670D\u52A1\u5668\u7684\u534F\u8BAE\uFF0C\u540D\u79F0\u548C\u7AEF\u53E3\u653E\u5728\u4E00\u8D77 (\u5728\u672C\u4F8B\u4E2D\u4E3A <code>http://localhost:8080</code> ):</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8080</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">location</span> /images/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /data</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u5C06\u4FEE\u6539\u7B2C\u4E8C\u4E2A location \u5757\uFF0C\u8BE5\u4F4D\u7F6E\u5757\u5F53\u524D\u5C06\u5E26\u6709 <code>/images/</code> \u524D\u7F00\u7684\u8BF7\u6C42\u6620\u5C04\u5230 <code>/data/images</code> \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\uFF0C\u4EE5\u4F7F\u5176\u4E0E\u5177\u6709\u5178\u578B\u6587\u4EF6\u6269\u5C55\u540D\u7684\u56FE\u50CF\u7684\u8BF7\u6C42\u76F8\u5339\u914D\u3002\u4FEE\u6539\u540E\u7684\u4F4D\u7F6E\u5757\u5982\u4E0B\u6240\u793A:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> ~ \\.(gif|jpg|png)$</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">root</span> /data/images</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u53C2\u6570\u662F\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5B83\u5339\u914D\u4EE5 <code>.gif</code>\uFF0C<code>.jpg</code> \u6216 <code>.png</code> \u7ED3\u5C3E\u7684\u6240\u6709 URI\u3002\u6B63\u5219\u8868\u8FBE\u5F0F\u5E94\u4EE5 <code>~</code> \u5F00\u5934\u3002\u76F8\u5E94\u7684\u8BF7\u6C42\u5C06\u88AB\u6620\u5C04\u5230 <code>/ data/images</code> \u76EE\u5F55\u3002</p><p>\u5F53 nginx \u9009\u62E9\u4E00\u4E2A <code>location</code> \u5757\u6765\u670D\u52A1\u8BF7\u6C42\u65F6\uFF0C\u5B83\u9996\u5148\u68C0\u67E5\u6307\u5B9A\u524D\u7F00\u7684 <code>location</code> \u6307\u4EE4\uFF0C\u8BB0\u4F4F\u5E26\u6709\u6700\u957F\u524D\u7F00\u7684 <code>location</code>\uFF0C\u7136\u540E\u68C0\u67E5\u6B63\u5219\u8868\u8FBE\u5F0F\u3002\u5982\u679C\u5B58\u5728\u4E0E\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u7684\u5185\u5BB9\uFF0Cnginx \u4F1A\u9009\u62E9\u8BE5 \u201C<code>location</code>\u201D\uFF0C\u5426\u5219\uFF0C\u5B83\u5C06\u9009\u62E9\u4E4B\u524D\u8BB0\u4F4F\u7684\u4F4D\u7F6E\u3002</p><p>\u4EE3\u7406\u670D\u52A1\u5668\u7684\u6700\u7EC8\u914D\u7F6E\u5982\u4E0B\u6240\u793A:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:8080/</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">location</span> ~ \\.(gif|jpg|png)$</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /data/images</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u670D\u52A1\u5668\u5C06\u8FC7\u6EE4\u4EE5 <code>.gif</code>\uFF0C<code>.jpg</code> \u6216 <code>.png</code> \u7ED3\u5C3E\u7684\u8BF7\u6C42\uFF0C\u5E76\u5C06\u5B83\u4EEC\u6620\u5C04\u5230\u76EE\u5F55 <code>/data/images</code>(\u901A\u8FC7\u5C06 URI \u6DFB\u52A0\u5230\u6839\u6307\u4EE4\u7684\u53C2\u6570)\uFF0C\u5E76\u5C06\u6240\u6709\u5176\u4ED6\u8BF7\u6C42\u4F20\u9012\u7ED9\u4E0A\u9762\u914D\u7F6E\u7684\u4EE3\u7406\u670D\u52A1\u5668\u3002</p><p>\u8981\u5E94\u7528\u65B0\u914D\u7F6E\uFF0C\u8BF7\u6309\u7167\u524D\u9762\u51E0\u8282\u7684\u8BF4\u660E\u5C06\u91CD\u8F7D\u4FE1\u53F7\u53D1\u9001\u5230 nginx\u3002</p><p>\u8FD8\u6709\u8BB8\u591A\u5176\u4ED6\u6307\u4EE4\u53EF\u7528\u4E8E\u8FDB\u4E00\u6B65\u914D\u7F6E\u4EE3\u7406\u8FDE\u63A5\u3002</p><h2 id="\u8BBE\u7F6E-fastcgi-\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-fastcgi-\u4EE3\u7406" aria-hidden="true">#</a> \u8BBE\u7F6E FastCGI \u4EE3\u7406</h2><p>Nginx \u53EF\u7528\u4E8E\u5C06\u8BF7\u6C42\u8DEF\u7531\u5230 FastCGI \u670D\u52A1\u5668\uFF0C\u8BE5\u670D\u52A1\u5668\u8FD0\u884C\u4F7F\u7528\u5404\u79CD\u6846\u67B6\u548C\u7F16\u7A0B\u8BED\u8A00 (\u4F8B\u5982 PHP) \u6784\u5EFA\u7684\u5E94\u7528\u7A0B\u5E8F\u3002</p><p>\u4E0E FastCGI \u670D\u52A1\u5668\u4E00\u8D77\u4F7F\u7528\u7684\u6700\u57FA\u672C\u7684 Nginx \u914D\u7F6E\u5305\u62EC\u4F7F\u7528 <code>fastcgi_pass</code> \u6307\u4EE4\u800C\u4E0D\u662F <code>proxy_pass</code> \u6307\u4EE4\u548C <code>fastcgi_param</code> \u6307\u4EE4\u6765\u8BBE\u7F6E\u4F20\u9012\u7ED9 FastCGI \u670D\u52A1\u5668\u7684\u53C2\u6570\u3002\u5047\u8BBE FastCGI \u670D\u52A1\u5668\u53EF\u4EE5\u5728 <code>localhost:9000</code> \u4E0A\u8BBF\u95EE\u3002\u4EE5\u4E0A\u4E00\u8282\u4E2D\u7684\u4EE3\u7406\u914D\u7F6E\u4E3A\u57FA\u7840\uFF0C\u7528 <code>fastcgi_pass</code> \u6307\u4EE4\u66FF\u6362 <code>proxy_pass</code> \u6307\u4EE4\uFF0C\u5E76\u5C06\u53C2\u6570\u66F4\u6539\u4E3A <code>localhost:9000</code>\u3002\u5728 PHP \u4E2D\uFF0C <code>SCRIPT_FILENAME</code> \u53C2\u6570\u7528\u4E8E\u786E\u5B9A\u811A\u672C\u540D\u79F0\uFF0C\u800C <code>QUERY_STRING</code> \u53C2\u6570\u7528\u4E8E\u4F20\u9012\u8BF7\u6C42\u53C2\u6570\u3002\u914D\u7F6E\u7684\u7ED3\u679C\u4E3A:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">fastcgi_pass</span>  localhost:9000</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_param</span> SCRIPT_FILENAME <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_param</span> QUERY_STRING    <span class="token variable">$query_string</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">location</span> ~ \\.(gif|jpg|png)$</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span> /data/images</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C06\u8BBE\u7F6E\u4E00\u4E2A\u670D\u52A1\u5668\uFF0C\u8BE5\u670D\u52A1\u5668\u5C06\u901A\u8FC7 FastCGI \u534F\u8BAE\u5C06\u9664\u9759\u6001\u56FE\u50CF\u8BF7\u6C42\u4EE5\u5916\u7684\u6240\u6709\u8BF7\u6C42\u8DEF\u7531\u5230\u8FD0\u884C\u5728 <code>localhost:9000</code> \u4E0A\u7684\u4EE3\u7406\u670D\u52A1\u5668\u3002</p><h2 id="\u5B98\u65B9\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u5B98\u65B9\u6587\u6863" aria-hidden="true">#</a> \u5B98\u65B9\u6587\u6863</h2>`,51),r={href:"https://docs.nginx.com/nginx/admin-guide/",target:"_blank",rel:"noopener noreferrer"},u=d("\u70B9\u51FB\u6B64\u5904");function v(k,g){const s=t("ExternalLinkIcon");return e(),i("div",null,[l,n("ul",null,[n("li",null,[n("a",r,[u,c(s)])])])])}var b=a(p,[["render",v],["__file","nginx.html.vue"]]);export{b as default};
