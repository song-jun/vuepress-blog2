import{_ as p,o as l,c as r,b as n,a,w as c,e,d as s,r as o}from"./app.cc4bf3f5.js";const d={},u=e('<p>\u60A8\u53EF\u4EE5\u505A\u5F88\u591A\u4E8B\u60C5\u6765\u4E2A\u6027\u5316 VS Code\u3002</p><ul><li>\u6539\u53D8\u60A8\u7684\u4E3B\u9898</li><li>\u6539\u53D8\u60A8\u7684\u6587\u4EF6\u56FE\u6807</li><li>\u66F4\u6539\u952E\u76D8\u5FEB\u6377\u952E</li><li>\u8C03\u6574\u8BBE\u7F6E</li><li>\u5B89\u88C5\u6269\u5C55</li></ul><h2 id="\u66F4\u6539\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539\u4E3B\u9898" aria-hidden="true">#</a> \u66F4\u6539\u4E3B\u9898</h2><p>\u952E\u76D8\u5FEB\u6377\u952E: <code>Ctrl + K Ctrl + T</code></p><p>\u60A8\u53EF\u4EE5\u4ECE VS Code \u6269\u5C55\u5E02\u573A\u4E2D\u5B89\u88C5\u66F4\u591A\u4E3B\u9898\u3002</p><p>\u6B64\u5916\uFF0C\u60A8\u53EF\u4EE5\u5B89\u88C5\u548C\u66F4\u6539\u6587\u4EF6\u56FE\u6807\u4E3B\u9898\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>Mr.Song \u4E2A\u4EBA\u63A8\u8350 <code>One Dark Pro</code> \u4E3B\u9898\u548C <code>Material Icon Theme</code> \u6587\u4EF6\u56FE\u6807\u4E3B\u9898\u3002</p><p>\u60A8\u9700\u8981\u4ECE\u6269\u5C55\u5E94\u7528\u5E94\u7528\u5546\u5E97\u4E2D\u5B89\u88C5\u5B83\u4EEC\u3002</p></div><h2 id="\u81EA\u5B9A\u4E49\u952E\u76D8\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u952E\u76D8\u5FEB\u6377\u952E" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u952E\u76D8\u5FEB\u6377\u952E</h2><p>\u952E\u76D8\u5FEB\u6377\u952E: <code>Ctrl + K Ctrl + S</code></p><p>\u60A8\u53EF\u4EE5\u641C\u7D22\u5FEB\u6377\u65B9\u5F0F\u5E76\u5C06\u81EA\u5DF1\u7684\u952E\u7ED1\u5B9A\u6DFB\u52A0\u5230 <code>keybindings.json</code> \u6587\u4EF6\u4E2D\u3002</p>',10),v=s("\u6709\u5173\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u89C1 "),m=s("\u5FEB\u6377\u952E\u952E\u7ED1\u5B9A"),k=s("\u3002"),b=e(`<h2 id="\u8C03\u6574\u60A8\u7684\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8C03\u6574\u60A8\u7684\u8BBE\u7F6E" aria-hidden="true">#</a> \u8C03\u6574\u60A8\u7684\u8BBE\u7F6E</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CVS Code \u663E\u793A <strong>\u8BBE\u7F6E</strong> \u7F16\u8F91\u5668\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 <strong>\u6253\u5F00\u8BBE\u7F6E(JSON)</strong> \u547D\u4EE4\u6253\u5F00 <code>settings.json</code>\u3002</p><p>\u952E\u76D8\u5FEB\u6377\u952E: <code>Ctrl + ,</code></p><p><strong>\u793A\u4F8B</strong>:</p><ul><li><p>\u66F4\u6539\u5404\u79CD UI \u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// Main editor</span>
<span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token comment">// Terminal panel</span>
<span class="token property">&quot;terminal.integrated.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
<span class="token comment">// Output panel</span>
<span class="token property">&quot;[Log]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">15</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u66F4\u6539\u7F29\u653E\u7B49\u7EA7</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;window.zoomLevel&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5B57\u4F53\u8FDE\u5B57</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Fira Code&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8FD9\u9700\u8981\u5B89\u88C5\u652F\u6301\u5B57\u4F53\u8FDE\u5B57\u7684\u5B57\u4F53\u3002FiraCode \u662F VS Code \u56E2\u961F\u4E2D\u6D41\u884C\u7684\u5B57\u4F53\u3002</p><p>Mr.Song \u4E5F\u5F3A\u529B\u63A8\u8350\u5B89\u88C5\u5E76\u4F7F\u7528\u8FD9\u4E00\u5B57\u4F53 (\u5B57\u4F53\u8BE6\u89C1\u4E91\u6587\u6863\u5171\u4EAB\u6587\u4EF6)</p></div></li><li><p>\u81EA\u52A8\u4FDD\u5B58</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;afterDelay&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u60A8\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>\u6587\u4EF6 &gt; \u81EA\u52A8\u4FDD\u5B58</code> \u4ECE\u9876\u5C42\u83DC\u5355\u5207\u6362\u81EA\u52A8\u4FDD\u5B58\u3002</p></li><li><p>\u4FDD\u5B58\u65F6\u683C\u5F0F\u5316</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u7C98\u8D34\u683C\u5F0F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;editor.formatOnPaste&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u66F4\u6539\u5236\u8868\u7B26\u7684\u5927\u5C0F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u7A7A\u683C\u6216\u5236\u8868\u7B26</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;editor.insertSpaces&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6E32\u67D3\u7A7A\u767D</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;editor.renderWhitespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728\u6587\u672C\u9009\u62E9\u4E2D\u5448\u73B0\u7A7A\u767D\u5B57\u7B26\u3002</p></li><li><p>\u5FFD\u7565\u6587\u4EF6/\u6587\u4EF6\u5939</p><p>\u4ECE\u7F16\u8F91\u5668\u7A97\u53E3\u4E2D\u5220\u9664\u8FD9\u4E9B\u6587\u4EF6/\u6587\u4EF6\u5939\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;somefolder/&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;somefile&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u641C\u7D22\u7ED3\u679C\u4E2D\u5220\u9664\u8FD9\u4E9B\u6587\u4EF6/\u6587\u4EF6\u5939\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;search.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;someFolder/&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;somefile&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>\u4EE5\u53CA\u8BB8\u591A\u5176\u4ED6\u5B9A\u5236\u3002</p><h2 id="\u8BED\u8A00\u7279\u5B9A\u7684\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8BED\u8A00\u7279\u5B9A\u7684\u8BBE\u7F6E" aria-hidden="true">#</a> \u8BED\u8A00\u7279\u5B9A\u7684\u8BBE\u7F6E</h2>`,7),g=s("\u60A8\u53EF\u4EE5\u901A\u8FC7\u8BED\u8A00\u6807\u8BC6\u7B26\u6765\u786E\u5B9A\u53EA\u9700\u8981\u7279\u5B9A\u8BED\u8A00\u7684\u8BBE\u7F6E\u7684\u8303\u56F4\u3002\u60A8\u53EF\u4EE5\u5728 "),h={href:"https://code.visualstudio.com/docs/languages/identifiers",target:"_blank",rel:"noopener noreferrer"},q=s("\u8BED\u8A00\u6807\u8BC6\u7B26"),j=s(" \u53C2\u8003\u4E2D\u627E\u5230\u5E38\u7528\u8BED\u8A00 ID \u7684\u5217\u8868\u3002"),_=e(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;[languageid]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u60A8\u8FD8\u53EF\u4EE5\u4F7F\u7528 <strong>\u914D\u7F6E\u8BED\u8A00\u7279\u5B9A\u7684\u8BBE\u7F6E</strong> \u547D\u4EE4\u6765\u521B\u5EFA\u7279\u5B9A\u4E8E\u8BED\u8A00\u7684\u8BBE\u7F6E\u3002</p></div>`,2);function f(x,y){const t=o("RouterLink"),i=o("ExternalLinkIcon");return l(),r("div",null,[u,n("p",null,[v,a(t,{to:"/software/vscode/shortcut-key.html#%E5%BF%AB%E6%8D%B7%E9%94%AE%E7%BC%96%E8%BE%91%E5%99%A8"},{default:c(()=>[m]),_:1}),k]),b,n("p",null,[g,n("a",h,[q,a(i)]),j]),_])}var C=p(d,[["render",f],["__file","customization.html.vue"]]);export{C as default};
