import{_ as i,o as l,c as u,a as s,b as e,w as o,e as a,d as n,r as p}from"./app.e3c83e88.js";const d={},r=a(`<h2 id="\u7528\u9014" tabindex="-1"><a class="header-anchor" href="#\u7528\u9014" aria-hidden="true">#</a> \u7528\u9014</h2><ul><li>\u5C06\u9875\u9762\u5185\u7684\u529F\u80FD\u6A21\u5757\u62BD\u8C61\u6210\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u4EE5\u4FBF\u5728\u4E0D\u540C\u7684\u9875\u9762\u4E2D\u91CD\u590D\u4F7F\u7528</li><li>\u5C06\u590D\u6742\u7684\u9875\u9762\u62C6\u5206\u6210\u591A\u4E2A\u4F4E\u8026\u5408\u7684\u6A21\u5757\uFF0C\u6709\u52A9\u4E8E\u4EE3\u7801\u7EF4\u62A4\u3002</li></ul><h2 id="\u521B\u5EFA\u81EA\u5B9A\u4E49\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u81EA\u5B9A\u4E49\u7EC4\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u81EA\u5B9A\u4E49\u7EC4\u4EF6</h2><p>\u7C7B\u4F3C\u4E8E\u9875\u9762\uFF0C\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7531 <code>json</code> <code>wxml</code> <code>wxss</code> <code>js</code> 4 \u4E2A\u6587\u4EF6\u7EC4\u6210\u3002</p><p>\u8981\u7F16\u5199\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u9996\u5148\u9700\u8981\u5728 json \u6587\u4EF6\u4E2D\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u58F0\u660E(\u5C06 <code>component</code> \u5B57\u6BB5\u8BBE\u4E3A <code>true</code> \u53EF\u5C06\u8FD9\u4E00\u7EC4\u6587\u4EF6\u8BBE\u4E3A\u81EA\u5B9A\u4E49\u7EC4\u4EF6):</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),m=n("\u540C\u65F6\uFF0C\u8FD8\u8981\u5728 "),v=s("code",null,"wxml",-1),k=n(" \u6587\u4EF6\u4E2D\u7F16\u5199\u7EC4\u4EF6\u6A21\u677F\uFF0C\u5728 "),g=s("code",null,"wxss",-1),h=n(" \u6587\u4EF6\u4E2D\u52A0\u5165\u7EC4\u4EF6\u6837\u5F0F\uFF0C\u5B83\u4EEC\u7684\u5199\u6CD5\u4E0E\u9875\u9762\u7684\u5199\u6CD5\u7C7B\u4F3C\u3002\u5177\u4F53\u7EC6\u8282\u548C\u6CE8\u610F\u4E8B\u9879\u53C2\u89C1 "),_=n("\u7EC4\u4EF6\u6A21\u677F\u548C\u6837\u5F0F"),b=n(" \u3002"),x=a(`<details class="custom-container details"><summary>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u8FD9\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u5185\u90E8WXML\u7ED3\u6784 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  {{innerText}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*\u8FD9\u91CC\u7684\u6837\u5F0F\u53EA\u5E94\u7528\u4E8E\u8FD9\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6*/</span>
<span class="token selector">.inner</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5728\u7EC4\u4EF6 <code>wxss</code> \u4E2D\u4E0D\u5E94\u4F7F\u7528 ID \u9009\u62E9\u5668\u3001\u5C5E\u6027\u9009\u62E9\u5668\u548C\u6807\u7B7E\u540D\u9009\u62E9\u5668\u3002</p></div><p>\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684 js \u6587\u4EF6\u4E2D\uFF0C\u9700\u8981\u4F7F\u7528 <code>Component()</code> \u6765\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u5E76\u63D0\u4F9B\u7EC4\u4EF6\u7684\u5C5E\u6027\u5B9A\u4E49\u3001\u5185\u90E8\u6570\u636E\u548C\u81EA\u5B9A\u4E49\u65B9\u6CD5\u3002</p>`,3),y=n("\u7EC4\u4EF6\u7684\u5C5E\u6027\u503C\u548C\u5185\u90E8\u6570\u636E\u5C06\u88AB\u7528\u4E8E\u7EC4\u4EF6 "),f=s("code",null,"wxml",-1),j=n(" \u7684\u6E32\u67D3\uFF0C\u5176\u4E2D\uFF0C\u5C5E\u6027\u503C\u662F\u53EF\u7531\u7EC4\u4EF6\u5916\u90E8\u4F20\u5165\u7684\u3002\u66F4\u591A\u7EC6\u8282\u53C2\u89C1 "),q=n("Component \u6784\u9020\u5668"),w=n(" \u3002"),C=a(`<details class="custom-container details"><summary>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u5B9A\u4E49\u4E86innerText\u5C5E\u6027\uFF0C\u5C5E\u6027\u503C\u53EF\u4EE5\u5728\u7EC4\u4EF6\u4F7F\u7528\u65F6\u6307\u5B9A</span>
    <span class="token literal-property property">innerText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;default value&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u662F\u4E00\u4E9B\u7EC4\u4EF6\u5185\u90E8\u6570\u636E</span>
    <span class="token literal-property property">someData</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u65B9\u6CD5</span>
    <span class="token function">customMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6</h2><p>\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5728\u4F7F\u7528\u65F6\u4E0E\u57FA\u7840\u7EC4\u4EF6\u975E\u5E38\u76F8\u4F3C\u3002</p><p>\u4F7F\u7528\u5DF2\u6CE8\u518C\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\uFF0C\u9996\u5148\u8981\u5728\u9875\u9762\u7684 json \u6587\u4EF6\u4E2D\u8FDB\u884C\u5F15\u7528\u58F0\u660E\u3002\u6B64\u65F6\u9700\u8981\u63D0\u4F9B\u6BCF\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u6807\u7B7E\u540D\u548C\u5BF9\u5E94\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6587\u4EF6\u8DEF\u5F84:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;component-tag-name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path/to/the/custom/component&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\uFF0C\u5728\u9875\u9762\u7684 <code>wxml</code> \u4E2D\u5C31\u53EF\u4EE5\u50CF\u4F7F\u7528\u57FA\u7840\u7EC4\u4EF6\u4E00\u6837\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002\u8282\u70B9\u540D\u5373\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u6807\u7B7E\u540D\uFF0C\u8282\u70B9\u5C5E\u6027\u5373\u4F20\u9012\u7ED9\u7EC4\u4EF6\u7684\u5C5E\u6027\u503C\u3002</p><div class="custom-container info"><p class="custom-container-title">\u76F8\u5173\u4FE1\u606F</p><p>\u5728 app.json \u4E2D\u4E5F\u53EF\u4EE5\u58F0\u660E <code>usingComponents</code> \u5B57\u6BB5\uFF0C\u5728\u6B64\u5904\u58F0\u660E\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u89C6\u4E3A\u5168\u5C40\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5728\u5C0F\u7A0B\u5E8F\u5185\u7684\u9875\u9762\u6216\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u800C\u65E0\u9700\u518D\u58F0\u660E\u3002</p></div>`,7),L={class:"custom-container details"},T=s("summary",null,"\u4EE3\u7801\u793A\u4F8B",-1),V={href:"https://developers.weixin.qq.com/s/OMfVAKmZ6KZT",target:"_blank",rel:"noopener noreferrer"},D=n("\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u9884\u89C8\u6548\u679C"),M=a(`<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u4EE5\u4E0B\u662F\u5BF9\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u5F15\u7528 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-tag-name</span> <span class="token attr-name">inner-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Some text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),N=a('<p>\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684 <code>wxml</code> \u8282\u70B9\u7ED3\u6784\u5728\u4E0E\u6570\u636E\u7ED3\u5408\u4E4B\u540E\uFF0C\u5C06\u88AB\u63D2\u5165\u5230\u5F15\u7528\u4F4D\u7F6E\u5185\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u56E0\u4E3A WXML \u8282\u70B9\u6807\u7B7E\u540D\u53EA\u80FD\u662F\u5C0F\u5199\u5B57\u6BCD\u3001\u4E2D\u5212\u7EBF\u548C\u4E0B\u5212\u7EBF\u7684\u7EC4\u5408\uFF0C\u6240\u4EE5\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u6807\u7B7E\u540D\u4E5F\u53EA\u80FD\u5305\u542B\u8FD9\u4E9B\u5B57\u7B26\u3002</li><li>\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E5F\u662F\u53EF\u4EE5\u5F15\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\uFF0C\u5F15\u7528\u65B9\u6CD5\u7C7B\u4F3C\u4E8E\u9875\u9762\u5F15\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u65B9\u5F0F(\u4F7F\u7528 <code>usingComponents</code> \u5B57\u6BB5)\u3002</li><li>\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u548C\u9875\u9762\u6240\u5728\u9879\u76EE\u6839\u76EE\u5F55\u540D\u4E0D\u80FD\u4EE5 <code>wx-</code> \u4E3A\u524D\u7F00\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002</li></ul></div><p>\u6CE8\u610F\uFF0C\u662F\u5426\u5728\u9875\u9762\u6587\u4EF6\u4E2D\u4F7F\u7528 <code>usingComponents</code> \u4F1A\u4F7F\u5F97\u9875\u9762\u7684 <code>this</code> \u5BF9\u8C61\u7684\u539F\u578B\u7A0D\u6709\u5DEE\u5F02\uFF0C\u5305\u62EC:</p><ul><li>\u4F7F\u7528 <code>usingComponents</code> \u9875\u9762\u7684\u539F\u578B\u4E0E\u4E0D\u4F7F\u7528\u65F6\u4E0D\u4E00\u81F4\uFF0C\u5373 <code>Object.getPrototypeOf(this)</code> \u7ED3\u679C\u4E0D\u540C\u3002</li><li>\u4F7F\u7528 <code>usingComponents</code> \u65F6\u4F1A\u591A\u4E00\u4E9B\u65B9\u6CD5\uFF0C\u5982 <code>selectComponent</code> \u3002</li><li>\u51FA\u4E8E\u6027\u80FD\u8003\u8651\uFF0C\u4F7F\u7528 <code>usingComponents</code> \u65F6\uFF0C <code>setData</code> \u5185\u5BB9\u4E0D\u4F1A\u88AB\u76F4\u63A5\u6DF1\u590D\u5236\uFF0C\u5373 <code>this.setData({ field: obj })</code> \u540E <code>this.data.field === obj</code>\u3002(\u6DF1\u590D\u5236\u4F1A\u5728\u8FD9\u4E2A\u503C\u88AB\u7EC4\u4EF6\u95F4\u4F20\u9012\u65F6\u53D1\u751F\u3002)</li></ul><p>\u5982\u679C\u9875\u9762\u6BD4\u8F83\u590D\u6742\uFF0C\u65B0\u589E\u6216\u5220\u9664 <code>usingComponents</code> \u5B9A\u4E49\u6BB5\u65F6\u5EFA\u8BAE\u91CD\u65B0\u6D4B\u8BD5\u4E00\u4E0B\u3002</p>',5);function B(E,I){const t=p("RouterLink"),c=p("ExternalLinkIcon");return l(),u("div",null,[r,s("p",null,[m,v,k,g,h,e(t,{to:"/code/mini-app/guide/custom-component/style.html"},{default:o(()=>[_]),_:1}),b]),x,s("p",null,[y,f,j,e(t,{to:"/code/mini-app/guide/custom-component/component.html"},{default:o(()=>[q]),_:1}),w]),C,s("details",L,[T,s("p",null,[s("a",V,[D,e(c)])]),M]),N])}var S=i(d,[["render",B],["__file","intro.html.vue"]]);export{S as default};
