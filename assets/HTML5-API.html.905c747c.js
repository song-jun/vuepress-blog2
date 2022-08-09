import{_ as l,o as c,c as i,b as e,w as o,e as a,r as p,a as n,d as s}from"./app.238d4ac4.js";const u={},r=a(`<h2 id="\u83B7\u53D6\u9875\u9762\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u9875\u9762\u5143\u7D20" aria-hidden="true">#</a> \u83B7\u53D6\u9875\u9762\u5143\u7D20</h2><ul><li><p><code>document.querySelector(&quot;\u9009\u62E9\u5668&quot;);</code></p><ul><li>\u9009\u62E9\u5668\u53EF\u4EE5\u662Fcss\u4E2D\u7684\u4EFB\u610F\u4E00\u79CD\u9009\u62E9\u5668</li><li>\u901A\u8FC7\u8BE5\u9009\u62E9\u5668\u53EA\u80FD\u9009\u4E2D\u7B2C\u4E00\u4E2A\u5143\u7D20</li></ul></li><li><p><code>document.querySelectorAll(&quot;\u9009\u62E9\u5668&quot;);</code></p><ul><li>querySelectorAll\u4F1A\u8FD4\u56DE\u6240\u6709\u7B26\u5408\u9009\u62E9\u5668\u89C4\u5219\u7684\u5143\u7D20\u5217\u8868</li><li>querySelector\u8FD4\u56DE\u7684\u53EA\u662F\u5355\u72EC\u7684\u4E00\u4E2A\u5143\u7D20</li></ul></li></ul><h2 id="\u7C7B\u540D\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u540D\u64CD\u4F5C" aria-hidden="true">#</a> \u7C7B\u540D\u64CD\u4F5C</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> Dom<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u540D&quot;</span><span class="token punctuation">)</span><span class="token operator">:</span> \u7ED9\u5F53\u524Ddom\u5143\u7D20\u6DFB\u52A0\u7C7B\u6837\u5F0F

 Dom<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u540D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \u7ED9\u5F53\u524Ddom\u5143\u7D20\u79FB\u9664\u7C7B\u6837\u5F0F

 classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u540D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \u68C0\u6D4B\u662F\u5426\u5305\u542B\u7C7B\u6837\u5F0F

 classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">&quot;active&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \u5207\u6362\u7C7B\u6837\u5F0F\uFF08\u6709\u5C31\u5220\u9664\uFF0C\u6CA1\u6709\u5C31\u6DFB\u52A0\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5C5E\u6027" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5C5E\u6027</h2><p>\u5728\u6807\u7B7E\u4E2D\u53EF\u4EE5\u901A\u8FC7 <code>data-\u81EA\u5B9A\u4E49\u5C5E\u6027\u540D</code> \u6765\u81EA\u5B9A\u4E49\u5C5E\u6027</p><ul><li>\u83B7\u53D6\u81EA\u5B9A\u4E49\u5C5E\u6027<br> Dom.dataset.\u5C5E\u6027\u540D\u6216\u8005Dom.dataset[\u5C5E\u6027\u540D]<br> Dom.dataset\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61</li><li>\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u5C5E\u6027<br> Dom.dataset.\u81EA\u5B9A\u4E49\u5C5E\u6027\u540D=\u503C \u6216\u8005 Dom.dataset[\u81EA\u5B9A\u4E49\u5C5E\u6027\u540D]=\u503C</li><li>\u6807\u7B7E\u4E2D\u4E3Adata-test-name=&quot;123&quot;\u65F6\uFF0C\u83B7\u53D6\u65F6\u8981\u7528Dom.dataset.testName</li></ul><h2 id="\u6587\u4EF6\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u8BFB\u53D6" aria-hidden="true">#</a> \u6587\u4EF6\u8BFB\u53D6</h2>`,8),d=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),n("span",{class:"token punctuation"},"/>")]),s(`
\u4E0A\u4F20\u5934\u50CF(\u8BF7\u4E0A\u4F20png jpg gif ico\u683C\u5F0F\u7684\u6587\u4EF6)
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("input")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("file"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("upLoadImg"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showLogo"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s("150px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s("150px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("/assets/img/basic.png"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" file_btn "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#upLoadImg"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"var"),s(" logo_wrap "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#showLogo"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
file_btn`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onchange"),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" file "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("files"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"//\u5224\u65AD\u540E\u7F00\u540D\u662F\u5426\u5408\u6CD5"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" filename "),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lastIndexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" imgs "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'".png"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'".jpg"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"gif"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'".ico"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"var"),s(" flag "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"var"),s(" i"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"<"),s("imgs"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("imgs"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"=="),s("filename"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      flag`),n("span",{class:"token operator"},"="),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("flag"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"var"),s(" reader"),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),n("span",{class:"token operator"},"="),n("span",{class:"token keyword"},"function"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      logo_wrap`),n("span",{class:"token punctuation"},"."),s("src "),n("span",{class:"token operator"},"="),s(" reader"),n("span",{class:"token punctuation"},"."),s("result"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u6587\u4EF6\u7C7B\u578B\u4E0D\u6B63\u786E\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=a(`<ul><li><code>FileReader</code> \u6709\u4E09\u4E2A\u65B9\u6CD5\u7528\u6765\u8BFB\u53D6\u6587\u4EF6\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u7ED3\u679C\u5728result\u4E2D <ul><li>readAsBinaryString --- \u5C06\u6587\u4EF6\u8BFB\u53D6\u4E3A\u4E8C\u8FDB\u5236\u7F16\u7801</li><li>readAsText --- \u5C06\u6587\u4EF6\u8BFB\u53D6\u4E3A\u6587\u672C</li><li>readAsDataURL --- \u5C06\u6587\u4EF6\u8BFB\u53D6\u4E3ADataURL</li></ul></li><li><code>FileReader</code>\u63D0\u4F9B\u7684\u4E8B\u4EF6\u6A21\u578B <ul><li>onabort \u4E2D\u65AD\u65F6\u89E6\u53D1</li><li>onerror \u51FA\u9519\u65F6\u89E6\u53D1</li><li>onload \u6587\u4EF6\u8BFB\u53D6\u6210\u529F\u5B8C\u6210\u65F6\u89E6\u53D1</li><li>onloadend \u8BFB\u53D6\u5B8C\u6210\u89E6\u53D1\uFF0C\u65E0\u8BBA\u6210\u529F\u6216\u5931\u8D25</li><li>onloadstart \u8BFB\u53D6\u5F00\u59CB\u65F6\u89E6\u53D1</li><li>onprogress \u8BFB\u53D6\u4E2D</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6\u5230\u6587\u4EF6</span>
<span class="token keyword">var</span> file <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// \u521B\u5EFA\u8BFB\u53D6\u5668</span>
<span class="token keyword">var</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F00\u59CB\u8BFB\u53D6</span>
reader<span class="token punctuation">.</span><span class="token function">readAsText</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u83B7\u53D6\u8BFB\u53D6\u7684\u7ED3\u679C</span>
<span class="token comment">// \u5F53\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6210\u540E\uFF0C\u624D\u53EF\u4EE5\u83B7\u53D6\u6587\u4EF6\u4FE1\u606F\u5185\u5BB9</span>
reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reader<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u83B7\u53D6\u7F51\u7EDC\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7F51\u7EDC\u72B6\u6001" aria-hidden="true">#</a> \u83B7\u53D6\u7F51\u7EDC\u72B6\u6001</h2>`,3),v=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),n("span",{class:"token punctuation"},">")]),s(`
\u5F53\u524D\u7F51\u7EDC\u72B6\u6001 : `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onlineStatus"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #f3f"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s("--"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`  
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),s(" state "),n("span",{class:"token operator"},"="),s(" window"),n("span",{class:"token punctuation"},"."),s("navigator"),n("span",{class:"token punctuation"},"."),s("onLine"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("state"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#onlineStatus"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("innerText "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'\u5728\u7EBF\u5462\uFF01'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
  document`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#onlineStatus"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("innerText "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'\u6389\u7EBF\u5566\uFF01'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=a(`<ul><li>\u83B7\u53D6\u7F51\u7EDC\u72B6\u6001 <code>window.navigator.onLine</code> \u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C</li><li>\u7F51\u7EDC\u72B6\u6001\u4E8B\u4EF6 <ul><li>window.ononline</li><li>window.onoffline</li></ul></li></ul><h2 id="\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E" aria-hidden="true">#</a> \u83B7\u53D6\u5730\u7406\u4F4D\u7F6E</h2><ul><li><p>\u83B7\u53D6\u5F53\u524D\u5730\u7406\u4F4D\u7F6E<br><code>window.navigator.geolocation.getCurrentPosition(success,error);</code></p><ul><li>coords.latitude \u7EF4\u5EA6</li><li>coords.longitude \u7ECF\u5EA6</li></ul></li><li><p>\u83B7\u53D6\u4E00\u6B21\u5F53\u524D\u4F4D\u7F6E<br><code>window.navigator.geolocation.watchPosition(success,error);</code></p></li></ul><h2 id="\u672C\u5730\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5B58\u50A8" aria-hidden="true">#</a> \u672C\u5730\u5B58\u50A8</h2><ul><li>localStorage\uFF1A <ul><li>\u6C38\u4E45\u751F\u6548</li><li>\u591A\u7A97\u53E3\u5171\u4EAB</li><li>\u5BB9\u91CF\u5927\u7EA6\u4E3A20M</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>window.localStorage.setItem(key,value)  \u8BBE\u7F6E\u5B58\u50A8\u5185\u5BB9

window.localStorage.getItem(key)  		\u83B7\u53D6\u5185\u5BB9

window.localStorage.removeItem(key)	    \u5220\u9664\u5185\u5BB9

window.localStorage.clear()			    \u6E05\u7A7A\u5185\u5BB9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>sessionStorage\uFF1A <ul><li>\u751F\u547D\u5468\u671F\u4E3A\u5173\u95ED\u5F53\u524D\u6D4F\u89C8\u5668\u7A97\u53E3</li><li>\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u7A97\u53E3\u4E0B\u8BBF\u95EE</li><li>\u6570\u636E\u5927\u5C0F\u4E3A5M\u5DE6\u53F3</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>window.sessionStorage.setItem(key,value)

window.sessionStorage.getItem(key)

window.sessionStorage.removeItem(key)

window.sessionStorage.clear()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,5);function C(f,h){const t=p("CodeDemo");return c(),i("div",null,[r,e(t,{id:"code-demo-82901910",type:"normal",code:"%7B%22html%22%3A%22%3Cbr%2F%3E%5Cn%E4%B8%8A%E4%BC%A0%E5%A4%B4%E5%83%8F(%E8%AF%B7%E4%B8%8A%E4%BC%A0png%20jpg%20gif%20ico%E6%A0%BC%E5%BC%8F%E7%9A%84%E6%96%87%E4%BB%B6)%5Cn%3Cbr%3E%3Cbr%3E%5Cn%3Cinput%20type%3D%5C%22file%5C%22%20id%3D%5C%22upLoadImg%5C%22%2F%3E%5Cn%3Cbr%3E%3Cbr%3E%5Cn%3Cimg%20id%3D%5C%22showLogo%5C%22%20style%3D%5C%22width%3A150px%3Bheight%3A150px%3B%5C%22%20src%3D%5C%22%2Fassets%2Fimg%2Fbasic.png%5C%22%2F%3E%5Cn%22%2C%22js%22%3A%22var%20file_btn%20%3D%20document.querySelector(%5C%22%23upLoadImg%5C%22)%3B%5Cnvar%20logo_wrap%20%3D%20document.querySelector(%5C%22%23showLogo%5C%22)%3B%5Cnfile_btn.onchange%3Dfunction()%20%7B%5Cn%20%20var%20file%20%3D%20this.files%5B0%5D%3B%5Cn%20%20%2F%2F%E5%88%A4%E6%96%AD%E5%90%8E%E7%BC%80%E5%90%8D%E6%98%AF%E5%90%A6%E5%90%88%E6%B3%95%5Cn%20%20var%20filename%20%3D%20file.name.substring(file.name.lastIndexOf(%5C%22.%5C%22))%3B%5Cn%20%20var%20imgs%20%3D%20%5B%5C%22.png%5C%22%2C%5C%22.jpg%5C%22%2C%5C%22gif%5C%22%2C%5C%22.ico%5C%22%5D%3B%5Cn%20%20var%20flag%20%3D%20false%3B%5Cn%20%20for(var%20i%3D0%3B%20i%3Cimgs.length%3B%20i%2B%2B)%20%7B%5Cn%20%20%20%20if(imgs%5Bi%5D%3D%3Dfilename)%20%7B%5Cn%20%20%20%20%20%20flag%3Dtrue%3B%5Cn%20%20%20%20%20%20break%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D%5Cn%20%20if(flag)%20%7B%5Cn%20%20%20%20var%20reader%3Dnew%20FileReader()%3B%5Cn%20%20%20%20reader.readAsDataURL(file)%3B%5Cn%20%20%20%20reader.onload%3Dfunction()%20%7B%5Cn%20%20%20%20%20%20logo_wrap.src%20%3D%20reader.result%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7Delse%20%7B%5Cn%20%20%20%20alert(%5C%22%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B%E4%B8%8D%E6%AD%A3%E7%A1%AE%EF%BC%8C%E8%AF%B7%E9%87%8D%E6%96%B0%E9%80%89%E6%8B%A9%5C%22)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%22%7D"},{default:o(()=>[d,k]),_:1}),m,e(t,{id:"code-demo-6ca707cc",type:"normal",code:"%7B%22html%22%3A%22%3Cbr%3E%5Cn%E5%BD%93%E5%89%8D%E7%BD%91%E7%BB%9C%E7%8A%B6%E6%80%81%20%3A%20%3Cspan%20id%3D%5C%22onlineStatus%5C%22%20style%3D%5C%22color%3A%20%23f3f%3B%5C%22%3E--%3C%2Fspan%3E%20%20%5Cn%22%2C%22js%22%3A%22var%20state%20%3D%20window.navigator.onLine%3B%5Cnif(state)%20%7B%5Cn%20%20document.querySelector(%5C%22%23onlineStatus%5C%22).innerText%20%3D%20'%E5%9C%A8%E7%BA%BF%E5%91%A2%EF%BC%81'%3B%5Cn%7Delse%20%7B%5Cn%20%20document.querySelector(%5C%22%23onlineStatus%5C%22).innerText%20%3D%20'%E6%8E%89%E7%BA%BF%E5%95%A6%EF%BC%81'%3B%5Cn%7D%5Cn%22%7D"},{default:o(()=>[v,g]),_:1}),b])}var w=l(u,[["render",C],["__file","HTML5-API.html.vue"]]);export{w as default};
