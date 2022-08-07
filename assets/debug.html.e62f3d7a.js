import{_ as a,o as e,c as o,a as n,b as c,d as p,e as t,r as l}from"./app.e3c83e88.js";const i={},r={id:"vconsole",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#vconsole","aria-hidden":"true"},"#",-1),d=p(" vConsole "),v=t(`<p>\u5728\u771F\u673A\u4E0A\uFF0C\u5982\u679C\u60F3\u8981\u67E5\u770B <code>console</code> API \u8F93\u51FA\u7684\u65E5\u5FD7\u5185\u5BB9\u548C\u989D\u5916\u7684\u8C03\u8BD5\u4FE1\u606F\uFF0C\u9700\u8981\u5728\u70B9\u51FB\u5C4F\u5E55\u53F3\u4E0A\u89D2\u7684\u6309\u94AE\u6253\u5F00\u7684\u83DC\u5355\u91CC\u9009\u62E9\u300C\u6253\u5F00\u8C03\u8BD5\u300D\u3002\u6B64\u65F6\u5C0F\u7A0B\u5E8F/\u5C0F\u6E38\u620F\u4F1A\u9000\u51FA\uFF0C\u91CD\u65B0\u6253\u5F00\u540E\u4F1A\u53F3\u4E0B\u89D2\u4F1A\u51FA\u73B0\u4E00\u4E2A <code>vConsole</code> \u6309\u94AE\u3002\u70B9\u51FB <code>vConsole</code> \u6309\u94AE\u53EF\u4EE5\u6253\u5F00\u65E5\u5FD7\u9762\u677F\u3002</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/vConsole-app.19b93c1e.jpg#width:350px" alt="Vconsole"></p><h2 id="vconsole-\u4F7F\u7528\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#vconsole-\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a> vConsole \u4F7F\u7528\u8BF4\u660E</h2><p>\u7531\u4E8E\u5B9E\u73B0\u673A\u5236\u7684\u9650\u5236\uFF0C\u5F00\u53D1\u8005\u8C03\u7528 <code>console</code> API \u6253\u5370\u7684\u65E5\u5FD7\u5185\u5BB9\uFF0C\u662F\u8F6C\u6362\u6210 JSON \u5B57\u7B26\u4E32\u540E\u4F20\u8F93\u7ED9 <code>vConsole</code> \u7684\uFF0C\u5BFC\u81F4 <code>vConsole</code> \u4E2D\u5C55\u793A\u7684\u5185\u5BB9\u4F1A\u6709\u4E00\u4E9B\u9650\u5236:</p><ul><li><p>2.3.2 \u53CA\u4EE5\u4E0A\u7248\u672C\uFF0C\u652F\u6301\u6253\u5370\u5FAA\u73AF\u5F15\u7528\u5BF9\u8C61\u3002\u5FAA\u73AF\u5F15\u7528\u7684\u5BF9\u8C61\u5C5E\u6027\u4F1A\u663E\u793A\u5F15\u7528\u8DEF\u5F84\uFF0C<code>@</code> \u8868\u793A\u5BF9\u8C61\u672C\u8EAB\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> circular <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
circular<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">promise</span><span class="token operator">:</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
circular<span class="token punctuation">.</span>a <span class="token operator">=</span> circular<span class="token punctuation">;</span>
circular<span class="token punctuation">.</span>c<span class="token punctuation">.</span>x0 <span class="token operator">=</span> circular<span class="token punctuation">.</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>circular<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;{a: &#39;&lt;Circular: @&gt;&#39;, c: {x0: &#39;&lt;Circular: @.x[0]&gt;&#39;}, x: [{promise: &#39;&lt;Promise&gt;&#39;}]}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2.3.1 \u53CA\u4EE5\u4E0A\u7248\u672C\uFF0C\u652F\u6301\u5C55\u793A\u6240\u6709\u7C7B\u578B\u7684\u6570\u636E\u3002\u57FA\u7840\u5E93\u4F1A\u5BF9\u65E5\u5FD7\u5185\u5BB9\u8FDB\u884C\u4E00\u6B21\u8F6C\u6362\uFF0C\u7ECF\u8FC7\u8F6C\u6362\u7684\u5185\u5BB9\u4F1A\u4F7F\u7528 <code>&lt;&gt;</code> \u5305\u88F9\u3002\u5982:</p><ul><li><code>&lt;Function: func&gt;</code></li><li><code>&lt;Undefined&gt;</code></li><li><code>&lt;Infinity&gt;</code></li><li><code>&lt;Map: size=0&gt;</code></li><li><code>&lt;ArrayBuffer: byteLength=10&gt;</code></li><li>...</li></ul></li></ul><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5C3D\u91CF\u907F\u514D\u5728\u975E\u8C03\u8BD5\u60C5\u666F\u4E0B\u6253\u5370\u7ED3\u6784\u8FC7\u4E8E\u590D\u6742\u6216\u5185\u5BB9\u8FC7\u957F\u7684\u65E5\u5FD7\u5185\u5BB9\uFF0C\u56E0\u4E3A\u8FD9\u53EF\u80FD\u4F1A\u5E26\u6765\u989D\u5916\u8017\u65F6\u3002</p></div><h2 id="source-map" tabindex="-1"><a class="header-anchor" href="#source-map" aria-hidden="true">#</a> Source Map</h2><blockquote><p>\u76EE\u524D\u53EA\u5728 iOS 6.7.2 \u53CA\u4EE5\u4E0A\u7248\u672C\u652F\u6301</p></blockquote><p>\u5C0F\u7A0B\u5E8F/\u5C0F\u6E38\u620F\u5728\u6253\u5305\u65F6\uFF0C\u4F1A\u5C06\u6240\u6709 js \u4EE3\u7801\u6253\u5305\u6210\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4E3A\u4E86\u4FBF\u4E8E\u5F00\u53D1\u8005\u5728\u624B\u673A\u4E0A\u8C03\u8BD5\u65F6\u5B9A\u4F4D\u9519\u8BEF\u4F4D\u7F6E\uFF0C\u5C0F\u7A0B\u5E8F/\u5C0F\u6E38\u620F\u63D0\u4F9B\u4E86 Source Map \u652F\u6301\u3002</p><p>\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u5F00\u542F ES6 \u8F6C ES5\u3001\u4EE3\u7801\u538B\u7F29\u65F6\uFF0C\u4F1A\u751F\u6210 Source Map \u7684 <code>.map</code> \u6587\u4EF6\u3002\u5F00\u53D1\u7248\u5C0F\u7A0B\u5E8F\u4E2D\uFF0C\u57FA\u7840\u5E93\u4F1A\u4F7F\u7528\u4EE3\u7801\u5305\u4E2D\u7684 <code>.map</code> \u6587\u4EF6\uFF0C\u5BF9 <code>vConsole</code> \u4E2D\u5C55\u793A\u7684\u9519\u8BEF\u4FE1\u606F\u5806\u6808\u8FDB\u884C\u91CD\u65B0\u6620\u5C04(\u53EA\u5BF9\u5F00\u53D1\u8005\u4EE3\u7801\u6587\u4EF6\u8FDB\u884C)\u3002</p><p><img src="https://res.wx.qq.com/wxdoc/dist/assets/img/sourceMap.17b75816.jpg" alt="Sourcemap"></p><p>\u5982\u679C\u4F7F\u7528\u5916\u90E8\u7684\u7F16\u8BD1\u811A\u672C\u5BF9\u6E90\u6587\u4EF6\u8FDB\u884C\u5904\u7406\uFF0C\u53EA\u9700\u5C06\u5BF9\u5E94\u751F\u6210\u7684 Source Map \u6587\u4EF6\u653E\u7F6E\u5728\u6E90\u6587\u4EF6\u7684\u76F8\u540C\u76EE\u5F55\u4E0B</p><p>\u5982:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>pages/index.js

pages/index.js.map

app.js

app.js.map
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F00\u53D1\u8005\u5DE5\u5177\u4F1A\u8BFB\u53D6\u3001\u89E3\u6790 Source Map \u6587\u4EF6\uFF0C\u5E76\u8FDB\u884C\u5C06\u5176\u4E0A\u4F20</p><p>\u540E\u7EED\u53EF\u4EE5\u5728\u5C0F\u7A0B\u5E8F\u540E\u53F0\u7684\u8FD0\u8425\u4E2D\u5FC3\u53EF\u4EE5\u5229\u7528\u4E0A\u4F20\u7684 Source Map \u6587\u4EF6\u8FDB\u884C\u9519\u8BEF\u5206\u6790</p><ul><li>Source Map \u6587\u4EF6\u4E0D\u8BA1\u5165\u4EE3\u7801\u5305\u5927\u5C0F\u8BA1\u7B97\u3002</li><li>\u5F00\u53D1\u7248\u4EE3\u7801\u5305\u4E2D\u7531\u4E8E\u5305\u542B\u4E86 .map \u6587\u4EF6\uFF0C\u5B9E\u9645\u4EE3\u7801\u5305\u5927\u5C0F\u4F1A\u6BD4\u4F53\u9A8C\u7248\u548C\u6B63\u5F0F\u7248\u5927\u3002</li></ul>`,17);function m(k,g){const s=l("Badge");return e(),o("div",null,[n("h2",r,[u,d,c(s,{text:"\u91CD\u8981",type:"error"})]),v])}var h=a(i,[["render",m],["__file","debug.html.vue"]]);export{h as default};
