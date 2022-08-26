import{_ as o,o as l,c,b as n,a as s,w as t,e as p,r as u,d as e}from"./app.cc4bf3f5.js";const i={},r=p(`<p>WXML (WeiXin Markup Language) \u662F\u6846\u67B6\u8BBE\u8BA1\u7684\u4E00\u5957\u6807\u7B7E\u8BED\u8A00\uFF0C\u7ED3\u5408\u57FA\u7840\u7EC4\u4EF6\u3001\u4E8B\u4EF6\u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u6784\u5EFA\u51FA\u9875\u9762\u7684\u7ED3\u6784\u3002</p><p>\u7528\u4EE5\u4E0B\u4E00\u4E9B\u7B80\u5355\u7684\u4F8B\u5B50\u6765\u5C55\u793A WXML \u7684\u80FD\u529B:</p><h2 id="\u6570\u636E\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7ED1\u5B9A" aria-hidden="true">#</a> \u6570\u636E\u7ED1\u5B9A</h2><p>\u6848\u4F8B:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--wxml--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{message}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// page.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;Hello MINA!&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),k=e("\u67E5\u770B\u8BE6\u60C5"),d=p(`<h2 id="\u6761\u4EF6\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u6E32\u67D3" aria-hidden="true">#</a> \u6761\u4EF6\u6E32\u67D3</h2><p>\u6848\u4F8B:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--wxml--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{view == <span class="token punctuation">&#39;</span>WEBVIEW<span class="token punctuation">&#39;</span>}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> WEBVIEW <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>elif</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{view == <span class="token punctuation">&#39;</span>APP<span class="token punctuation">&#39;</span>}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> APP <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>else</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{view == <span class="token punctuation">&#39;</span>MINA<span class="token punctuation">&#39;</span>}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> MINA <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// page.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">view</span><span class="token operator">:</span> <span class="token string">&quot;MINA&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m=e("\u67E5\u770B\u8BE6\u60C5"),v=p(`<h2 id="\u5217\u8868\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u5217\u8868\u6E32\u67D3" aria-hidden="true">#</a> \u5217\u8868\u6E32\u67D3</h2><p>\u6848\u4F8B:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--wxml--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{array}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{item}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// page.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),g=e("\u67E5\u770B\u8BE6\u60C5"),b=p(`<h2 id="\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F" aria-hidden="true">#</a> \u6A21\u677F</h2><p>\u6848\u4F8B:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--wxml--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>staffName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
    FirstName: {{firstName}}, LastName: {{lastName}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>staffName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{...staffA}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>staffName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{...staffB}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>staffName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{...staffC}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// page.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">staffA</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&quot;Hulk&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;Hu&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">staffB</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&quot;Shang&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;You&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">staffC</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&quot;Gideon&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;Lin&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),h=e("\u67E5\u770B\u8BE6\u60C5");function q(f,x){const a=u("RouterLink");return l(),c("div",null,[r,n("ul",null,[n("li",null,[s(a,{to:"/code/mini-app/guide/view/data-bind.html"},{default:t(()=>[k]),_:1})])]),d,n("ul",null,[n("li",null,[s(a,{to:"/code/mini-app/guide/view/condition-render.html"},{default:t(()=>[m]),_:1})])]),v,n("ul",null,[n("li",null,[s(a,{to:"/code/mini-app/guide/view/list-render.html"},{default:t(()=>[g]),_:1})])]),b,n("ul",null,[n("li",null,[s(a,{to:"/code/mini-app/guide/view/template.html"},{default:t(()=>[h]),_:1})])])])}var _=o(i,[["render",q],["__file","wxml.html.vue"]]);export{_ as default};
