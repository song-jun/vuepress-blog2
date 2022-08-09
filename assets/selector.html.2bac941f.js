import{_ as p,o as c,c as o,a as n,b as t,d as s,e,r as i}from"./app.238d4ac4.js";const l={},u=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u63D0\u793A"),n("p",null,"\u6B64\u90E8\u5206\u5728\u521D\u6B65\u5B66\u4E60\u5C0F\u7A0B\u5E8F\u7684\u65F6\u5019\u76F4\u63A5\u7565\u8FC7\u5373\u53EF\u3002")],-1),r=n("h2",{id:"wxml-\u8282\u70B9\u4FE1\u606F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#wxml-\u8282\u70B9\u4FE1\u606F","aria-hidden":"true"},"#"),s(" WXML \u8282\u70B9\u4FE1\u606F")],-1),d={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html",target:"_blank",rel:"noopener noreferrer"},k=s("\u8282\u70B9\u4FE1\u606F\u67E5\u8BE2 API"),m=s(" \u53EF\u4EE5\u7528\u4E8E\u83B7\u53D6\u8282\u70B9\u5C5E\u6027\u3001\u6837\u5F0F\u3001\u5728\u754C\u9762\u4E0A\u7684\u4F4D\u7F6E\u7B49\u4FE1\u606F\u3002"),v=n("p",null,"\u6700\u5E38\u89C1\u7684\u7528\u6CD5\u662F\u4F7F\u7528\u8FD9\u4E2A\u63A5\u53E3\u6765\u67E5\u8BE2\u67D0\u4E2A\u8282\u70B9\u7684\u5F53\u524D\u4F4D\u7F6E\uFF0C\u4EE5\u53CA\u754C\u9762\u7684\u6EDA\u52A8\u4F4D\u7F6E\u3002",-1),b={class:"custom-container details"},h=e(`<summary>\u4EE3\u7801\u793A\u4F8B</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> query <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">createSelectorQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
query<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">&quot;#the-id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">boundingClientRect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span>top<span class="token punctuation">;</span> <span class="token comment">// #the-id \u8282\u70B9\u7684\u4E0A\u8FB9\u754C\u5750\u6807(\u76F8\u5BF9\u4E8E\u663E\u793A\u533A\u57DF)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
query<span class="token punctuation">.</span><span class="token function">selectViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scrollOffset</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span> <span class="token comment">// \u663E\u793A\u533A\u57DF\u7684\u7AD6\u76F4\u6EDA\u52A8\u4F4D\u7F6E</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

query<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_=s("\u4E0A\u8FF0\u793A\u4F8B\u4E2D\uFF0C "),f=n("code",null,"#the-id",-1),g=s(" \u662F\u4E00\u4E2A\u8282\u70B9\u9009\u62E9\u5668\uFF0C\u4E0E CSS \u7684\u9009\u62E9\u5668\u76F8\u8FD1\u4F46\u7565\u6709\u533A\u522B\uFF0C\u8BF7\u53C2\u89C1 "),x={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.select.html",target:"_blank",rel:"noopener noreferrer"},w=s("SelectorQuery.select"),y=s(" \u7684\u76F8\u5173\u8BF4\u660E\u3002"),q=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u63D0\u793A"),n("p",null,[s("\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6216\u5305\u542B\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u9875\u9762\u4E2D\uFF0C\u63A8\u8350\u4F7F\u7528 "),n("code",null,"this.createSelectorQuery"),s(" \u6765\u4EE3\u66FF "),n("code",null,"wx.createSelectorQuery"),s(" \uFF0C\u8FD9\u6837\u53EF\u4EE5\u786E\u4FDD\u5728\u6B63\u786E\u7684\u8303\u56F4\u5185\u9009\u62E9\u8282\u70B9\u3002")])],-1),R=n("h2",{id:"wxml-\u8282\u70B9\u5E03\u5C40\u76F8\u4EA4\u72B6\u6001",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#wxml-\u8282\u70B9\u5E03\u5C40\u76F8\u4EA4\u72B6\u6001","aria-hidden":"true"},"#"),s(" WXML \u8282\u70B9\u5E03\u5C40\u76F8\u4EA4\u72B6\u6001")],-1),I={href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html",target:"_blank",rel:"noopener noreferrer"},j=s("\u8282\u70B9\u5E03\u5C40\u76F8\u4EA4\u72B6\u6001 API"),S=s(" \u53EF\u7528\u4E8E\u76D1\u542C\u4E24\u4E2A\u6216\u591A\u4E2A\u7EC4\u4EF6\u8282\u70B9\u5728\u5E03\u5C40\u4F4D\u7F6E\u4E0A\u7684\u76F8\u4EA4\u72B6\u6001\u3002\u8FD9\u4E00\u7EC4 API \u5E38\u5E38\u53EF\u4EE5\u7528\u4E8E\u63A8\u65AD\u67D0\u4E9B\u8282\u70B9\u662F\u5426\u53EF\u4EE5\u88AB\u7528\u6237\u770B\u89C1\u3001\u6709\u591A\u5927\u6BD4\u4F8B\u53EF\u4EE5\u88AB\u7528\u6237\u770B\u89C1\u3002"),V=e(`<p>\u8FD9\u4E00\u7EC4 API \u6D89\u53CA\u7684\u4E3B\u8981\u6982\u5FF5\u5982\u4E0B\u3002</p><ul><li>\u53C2\u7167\u8282\u70B9: \u76D1\u542C\u7684\u53C2\u7167\u8282\u70B9\uFF0C\u53D6\u5B83\u7684\u5E03\u5C40\u533A\u57DF\u4F5C\u4E3A\u53C2\u7167\u533A\u57DF\u3002\u5982\u679C\u6709\u591A\u4E2A\u53C2\u7167\u8282\u70B9\uFF0C\u5219\u4F1A\u53D6\u5B83\u4EEC\u5E03\u5C40\u533A\u57DF\u7684 <strong>\u4EA4\u96C6</strong> \u4F5C\u4E3A\u53C2\u7167\u533A\u57DF\u3002\u9875\u9762\u663E\u793A\u533A\u57DF\u4E5F\u53EF\u4F5C\u4E3A\u53C2\u7167\u533A\u57DF\u4E4B\u4E00\u3002</li><li>\u76EE\u6807\u8282\u70B9: \u76D1\u542C\u7684\u76EE\u6807\uFF0C\u9ED8\u8BA4\u53EA\u80FD\u662F\u4E00\u4E2A\u8282\u70B9(\u4F7F\u7528 selectAll \u9009\u9879\u65F6\uFF0C\u53EF\u4EE5\u540C\u65F6\u76D1\u542C\u591A\u4E2A\u8282\u70B9)\u3002</li><li>\u76F8\u4EA4\u533A\u57DF: \u76EE\u6807\u8282\u70B9\u7684\u5E03\u5C40\u533A\u57DF\u4E0E\u53C2\u7167\u533A\u57DF\u7684\u76F8\u4EA4\u533A\u57DF\u3002</li><li>\u76F8\u4EA4\u6BD4\u4F8B: \u76F8\u4EA4\u533A\u57DF\u5360\u53C2\u7167\u533A\u57DF\u7684\u6BD4\u4F8B\u3002</li><li>\u9608\u503C: \u76F8\u4EA4\u6BD4\u4F8B\u5982\u679C\u8FBE\u5230\u9608\u503C\uFF0C\u5219\u4F1A\u89E6\u53D1\u76D1\u542C\u5668\u7684\u56DE\u8C03\u51FD\u6570\u3002\u9608\u503C\u53EF\u4EE5\u6709\u591A\u4E2A\u3002</li></ul><details class="custom-container details"><summary>\u4EE3\u7801\u793A\u4F8B</summary><p>\u4EE5\u4E0B\u793A\u4F8B\u4EE3\u7801\u53EF\u4EE5\u5728\u76EE\u6807\u8282\u70B9(\u7528\u9009\u62E9\u5668 <code>.target-class</code> \u6307\u5B9A)\u6BCF\u6B21\u8FDB\u5165\u6216\u79BB\u5F00\u9875\u9762\u663E\u793A\u533A\u57DF\u65F6\uFF0C\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">createIntersectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">relativeToViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token string">&quot;.target-class&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token comment">// \u76EE\u6807\u8282\u70B9 id</span>
        res<span class="token punctuation">.</span>dataset<span class="token punctuation">;</span> <span class="token comment">// \u76EE\u6807\u8282\u70B9 dataset</span>
        res<span class="token punctuation">.</span>intersectionRatio<span class="token punctuation">;</span> <span class="token comment">// \u76F8\u4EA4\u533A\u57DF\u5360\u76EE\u6807\u8282\u70B9\u7684\u5E03\u5C40\u533A\u57DF\u7684\u6BD4\u4F8B</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">;</span> <span class="token comment">// \u76F8\u4EA4\u533A\u57DF</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>left<span class="token punctuation">;</span> <span class="token comment">// \u76F8\u4EA4\u533A\u57DF\u7684\u5DE6\u8FB9\u754C\u5750\u6807</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>top<span class="token punctuation">;</span> <span class="token comment">// \u76F8\u4EA4\u533A\u57DF\u7684\u4E0A\u8FB9\u754C\u5750\u6807</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>width<span class="token punctuation">;</span> <span class="token comment">// \u76F8\u4EA4\u533A\u57DF\u7684\u5BBD\u5EA6</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>height<span class="token punctuation">;</span> <span class="token comment">// \u76F8\u4EA4\u533A\u57DF\u7684\u9AD8\u5EA6</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u793A\u4F8B\u4EE3\u7801\u53EF\u4EE5\u5728\u76EE\u6807\u8282\u70B9(\u7528\u9009\u62E9\u5668 <code>.target-class</code> \u6307\u5B9A)\u4E0E\u53C2\u7167\u8282\u70B9(\u7528\u9009\u62E9\u5668 <code>.relative-class</code> \u6307\u5B9A)\u5728\u9875\u9762\u663E\u793A\u533A\u57DF\u5185\u76F8\u4EA4\u6216\u76F8\u79BB\uFF0C\u4E14\u76F8\u4EA4\u6216\u76F8\u79BB\u7A0B\u5EA6\u8FBE\u5230\u76EE\u6807\u8282\u70B9\u5E03\u5C40\u533A\u57DF\u7684 20%\u548C 50%\u65F6\uFF0C\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">createIntersectionObserver</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">thresholds</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">relativeTo</span><span class="token punctuation">(</span><span class="token string">&quot;.relative-class&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">relativeToViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token string">&quot;.target-class&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span>intersectionRatio<span class="token punctuation">;</span> <span class="token comment">// \u76F8\u4EA4\u533A\u57DF\u5360\u76EE\u6807\u8282\u70B9\u7684\u5E03\u5C40\u533A\u57DF\u7684\u6BD4\u4F8B</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">;</span> <span class="token comment">// \u76F8\u4EA4\u533A\u57DF</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>left<span class="token punctuation">;</span> <span class="token comment">// \u76F8\u4EA4\u533A\u57DF\u7684\u5DE6\u8FB9\u754C\u5750\u6807</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>top<span class="token punctuation">;</span> <span class="token comment">// \u76F8\u4EA4\u533A\u57DF\u7684\u4E0A\u8FB9\u754C\u5750\u6807</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>width<span class="token punctuation">;</span> <span class="token comment">// \u76F8\u4EA4\u533A\u57DF\u7684\u5BBD\u5EA6</span>
        res<span class="token punctuation">.</span>intersectionRect<span class="token punctuation">.</span>height<span class="token punctuation">;</span> <span class="token comment">// \u76F8\u4EA4\u533A\u57DF\u7684\u9AD8\u5EA6</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4E0E\u9875\u9762\u663E\u793A\u533A\u57DF\u7684\u76F8\u4EA4\u533A\u57DF\u5E76\u4E0D\u51C6\u786E\u4EE3\u8868\u7528\u6237\u53EF\u89C1\u7684\u533A\u57DF\uFF0C\u56E0\u4E3A\u53C2\u4E0E\u8BA1\u7B97\u7684\u533A\u57DF\u662F\u201C\u5E03\u5C40\u533A\u57DF\u201D\uFF0C\u5E03\u5C40\u533A\u57DF\u53EF\u80FD\u4F1A\u5728\u7ED8\u5236\u65F6\u88AB\u5176\u4ED6\u8282\u70B9\u88C1\u526A\u9690\u85CF(\u5982\u9047\u7956\u5148\u8282\u70B9\u4E2D overflow \u6837\u5F0F\u4E3A <code>hidden</code> \u7684\u8282\u70B9)\u6216\u906E\u76D6(\u5982\u9047 <code>fixed</code> \u5B9A\u4F4D\u7684\u8282\u70B9)\u3002</p></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6216\u5305\u542B\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u9875\u9762\u4E2D\uFF0C\u63A8\u8350\u4F7F\u7528 <code>this.createIntersectionObserver</code> \u6765\u4EE3\u66FF <code>wx.createIntersectionObserver</code> \uFF0C\u8FD9\u6837\u53EF\u4EE5\u786E\u4FDD\u5728\u6B63\u786E\u7684\u8303\u56F4\u5185\u9009\u62E9\u8282\u70B9\u3002</p></div>`,5);function L(O,P){const a=i("ExternalLinkIcon");return c(),o("div",null,[u,r,n("p",null,[n("a",d,[k,t(a)]),m]),v,n("details",b,[h,n("p",null,[_,f,g,n("a",x,[w,t(a)]),y])]),q,R,n("p",null,[n("a",I,[j,t(a)]),S]),V])}var A=p(l,[["render",L],["__file","selector.html.vue"]]);export{A as default};
