import{_ as a,o as n,c as s,b as d,a as r,d as t,e as o,r as c}from"./app.cc4bf3f5.js";const l={},i=t("\u6846\u67B6\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u57FA\u7840\u7EC4\u4EF6\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7\u7EC4\u5408\u8FD9\u4E9B\u57FA\u7840\u7EC4\u4EF6\u8FDB\u884C\u5FEB\u901F\u5F00\u53D1\u3002\u8BE6\u7EC6\u4ECB\u7ECD\u8BF7\u53C2\u8003 "),p={href:"https://developers.weixin.qq.com/miniprogram/dev/component/",target:"_blank",rel:"noopener noreferrer"},h=t("\u7EC4\u4EF6\u6587\u6863"),u=t("\u3002"),m=o(`<p>\u4EC0\u4E48\u662F\u7EC4\u4EF6:</p><ul><li><p>\u7EC4\u4EF6\u662F\u89C6\u56FE\u5C42\u7684\u57FA\u672C\u7EC4\u6210\u5355\u5143\u3002</p></li><li><p>\u7EC4\u4EF6\u81EA\u5E26\u4E00\u4E9B\u529F\u80FD\u4E0E\u5FAE\u4FE1\u98CE\u683C\u4E00\u81F4\u7684\u6837\u5F0F\u3002</p></li><li><p>\u4E00\u4E2A\u7EC4\u4EF6\u901A\u5E38\u5305\u62EC <strong>\u5F00\u59CB\u6807\u7B7E</strong> \u548C <strong>\u7ED3\u675F\u6807\u7B7E</strong>\uFF0C\u5C5E\u6027 \u7528\u6765\u4FEE\u9970\u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u5185\u5BB9 \u5728\u4E24\u4E2A\u6807\u7B7E\u4E4B\u5185\u3002</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tagname</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
Content goes here ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tagname</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6240\u6709\u7EC4\u4EF6\u4E0E\u5C5E\u6027\u90FD\u662F\u5C0F\u5199\uFF0C\u4EE5\u8FDE\u5B57\u7B26 <code>-</code> \u8FDE\u63A5</p></div></li></ul><h2 id="\u5C5E\u6027\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u7C7B\u578B" aria-hidden="true">#</a> \u5C5E\u6027\u7C7B\u578B</h2><table><thead><tr><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th><th>\u6CE8\u89E3</th></tr></thead><tbody><tr><td>Boolean</td><td>\u5E03\u5C14\u503C</td><td>\u7EC4\u4EF6\u5199\u4E0A\u8BE5\u5C5E\u6027\uFF0C\u4E0D\u7BA1\u662F\u4EC0\u4E48\u503C\u90FD\u88AB\u5F53\u4F5C <code>true</code>\uFF1B\u53EA\u6709\u7EC4\u4EF6\u4E0A\u6CA1\u6709\u8BE5\u5C5E\u6027\u65F6\uFF0C\u5C5E\u6027\u503C\u624D\u4E3A <code>false</code>\u3002<br>\u5982\u679C\u5C5E\u6027\u503C\u4E3A\u53D8\u91CF\uFF0C\u53D8\u91CF\u7684\u503C\u4F1A\u88AB\u8F6C\u6362\u4E3A Boolean \u7C7B\u578B</td></tr><tr><td>Number</td><td>\u6570\u5B57</td><td>1, 2.5</td></tr><tr><td>String</td><td>\u5B57\u7B26\u4E32</td><td>&quot;string&quot;</td></tr><tr><td>Array</td><td>\u6570\u7EC4</td><td>[ 1, &quot;string&quot; ]</td></tr><tr><td>Object</td><td>\u5BF9\u8C61</td><td>{ key: value }</td></tr><tr><td>EventHandler</td><td>\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u540D</td><td><code>&quot;handlerName&quot;</code> \u662F <code>Page</code> \u4E2D\u5B9A\u4E49\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u540D</td></tr><tr><td>Any</td><td>\u4EFB\u610F\u5C5E\u6027</td><td></td></tr></tbody></table><h2 id="\u516C\u5171\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u516C\u5171\u5C5E\u6027" aria-hidden="true">#</a> \u516C\u5171\u5C5E\u6027</h2><p>\u6240\u6709\u7EC4\u4EF6\u90FD\u6709\u4EE5\u4E0B\u5C5E\u6027:</p><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th><th>\u6CE8\u89E3</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>\u7EC4\u4EF6\u7684\u552F\u4E00\u6807\u793A</td><td>\u4FDD\u6301\u6574\u4E2A\u9875\u9762\u552F\u4E00</td></tr><tr><td>class</td><td>String</td><td>\u7EC4\u4EF6\u7684\u6837\u5F0F\u7C7B</td><td>\u5728\u5BF9\u5E94\u7684 WXSS \u4E2D\u5B9A\u4E49\u7684\u6837\u5F0F\u7C7B</td></tr><tr><td>style</td><td>String</td><td>\u7EC4\u4EF6\u7684\u5185\u8054\u6837\u5F0F</td><td>\u53EF\u4EE5\u52A8\u6001\u8BBE\u7F6E\u7684\u5185\u8054\u6837\u5F0F</td></tr><tr><td>hidden</td><td>Boolean</td><td>\u7EC4\u4EF6\u662F\u5426\u663E\u793A</td><td>\u6240\u6709\u7EC4\u4EF6\u9ED8\u8BA4\u663E\u793A</td></tr><tr><td>data-*</td><td>Any</td><td>\u81EA\u5B9A\u4E49\u5C5E\u6027</td><td>\u7EC4\u4EF6\u4E0A\u89E6\u53D1\u7684\u4E8B\u4EF6\u65F6\uFF0C\u4F1A\u53D1\u9001\u7ED9\u4E8B\u4EF6\u5904\u7406\u51FD\u6570</td></tr><tr><td>bind* / catch*</td><td>EventHandler</td><td>\u7EC4\u4EF6\u7684\u4E8B\u4EF6</td><td>\u8BE6\u89C1\u4E8B\u4EF6</td></tr></tbody></table><h2 id="\u7279\u6B8A\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u7279\u6B8A\u5C5E\u6027" aria-hidden="true">#</a> \u7279\u6B8A\u5C5E\u6027</h2><p>\u51E0\u4E4E\u6240\u6709\u7EC4\u4EF6\u90FD\u6709\u5404\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u5BF9\u8BE5\u7EC4\u4EF6\u7684\u529F\u80FD\u6216\u6837\u5F0F\u8FDB\u884C\u4FEE\u9970\uFF0C\u8BF7\u53C2\u8003\u5404\u4E2A\u7EC4\u4EF6\u7684\u5B9A\u4E49\u3002</p>`,9);function g(_,v){const e=c("ExternalLinkIcon");return n(),s("div",null,[d("p",null,[i,d("a",p,[h,r(e)]),u]),m])}var k=a(l,[["render",g],["__file","component.html.vue"]]);export{k as default};
