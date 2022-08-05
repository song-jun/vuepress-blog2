import{_ as a,o as i,c as n,a as e,b as c,e as d,d as o,r as s}from"./app.17aa6dfd.js";const r={},l=d(`<h2 id="semantic" tabindex="-1"><a class="header-anchor" href="#semantic" aria-hidden="true">#</a> Semantic</h2><p>\u5BF9\u4E8E\u4E00\u4E2A\u5927\u578B\u9879\u76EE\uFF0C\u51E0\u5343\u4E2A commit \u662F\u5F88\u5E38\u89C1\u7684\uFF0C\u8FD9\u4E9B commit \u90E8\u5206\u662F\u9879\u76EE\u7EF4\u62A4\u8005\u63D0\u4EA4\u7684 commit\uFF0C\u90E8\u5206\u662F\u4E00\u4E9B\u70ED\u5FC3\u7684\u5F00\u53D1\u8005\u901A\u8FC7 PR \u8D21\u732E\u7684\u3002</p><p>\u65E0\u8BBA\u662F\u5BF9\u4E8E\u9879\u76EE\u7EF4\u62A4\u8005\uFF0C\u8FD8\u662F\u60F3\u8981\u8D21\u732E\u4EE3\u7801\u7684\u70ED\u5FC3\u5F00\u53D1\u8005\u6765\u8BF4\uFF0C\u4E00\u4E2A\u7B80\u6D01\u660E\u4E86\u7684 commit \u63CF\u8FF0\u90FD\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\u6211\u4EEC\u9700\u8981\u7528\u5C3D\u53EF\u80FD\u7B80\u77ED\u7684\u5907\u6CE8\u4FE1\u606F\uFF0C\u5907\u6CE8\u6BCF\u4E00\u4E2A commit \u7684\u4F5C\u7528\uFF0C\u4EE5\u4FBF\u5927\u5BB6\u67E5\u770B\u3002\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u4E00\u79CD\u89C4\u8303\u7684\uFF0C\u8BED\u4E49\u5316\u7684\u5907\u6CE8\u683C\u5F0F\uFF0C\u5F88\u5FEB\u7531\u77E5\u540D\u9879\u76EE\u7275\u5934\uFF0C\u5168\u7403\u63A5\u6536\u5E76\u7EDF\u4E00\u4E86\u4E00\u79CD\u8BED\u4E49\u5316\u7684\u5907\u6CE8\u683C\u5F0F\uFF0C\u8FD9\u5C31\u662F semantic \u89C4\u8303\u7684\u6765\u6E90\u3002</p><h2 id="\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#\u4F18\u52BF" aria-hidden="true">#</a> \u4F18\u52BF</h2><p>\u5F53\u4E00\u4E2A\u4ED3\u5E93\u6240\u6709\u7684 commit \u4FE1\u606F\u90FD\u662F\u7528\u6807\u51C6\u7684 semantic \u683C\u5F0F\u65F6\uFF0C\u7528\u6237\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u7406\u89E3\u6BCF\u4E00\u4E2A commit \u7684\u4F5C\u7528\u3002</p><p>\u540C\u65F6\uFF0Csenmantic \u652F\u6301\u76F4\u63A5\u5C06\u67D0\u4E2A\u63D0\u4EA4\u6216 PR \u4E0E\u7279\u5B9A issue \u94FE\u63A5\uFF0C\u5E76\u81EA\u52A8\u5173\u95ED\u6216\u5F15\u7528\u8FD9\u4E9B issue\u3002</p><p>\u901A\u8FC7\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5DE5\u5177\uFF0C\u5927\u5BB6\u53EF\u4EE5\u57FA\u4E8E\u8FD9\u4E9B\u5907\u6CE8\u4FE1\u606F\u8FDB\u884C\u8FC7\u6EE4\u67E5\u627E\uFF0C\u66F4\u65B0\u65E5\u5FD7\u751F\u6210\u7B49\u64CD\u4F5C\u3002</p><h2 id="\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F" aria-hidden="true">#</a> \u683C\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;
&lt;body&gt;

&lt;footer&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> header</h3><p>\u7B2C\u4E00\u884C\u88AB\u79F0\u4E3A <code>header</code>\uFF0C\u5B83\u5FC5\u987B\u53EA\u6709\u4E00\u884C\uFF0C\u5305\u62EC\u4E09\u4E2A\u5B57\u6BB5: <code>&lt;type&gt;</code>(\u5FC5\u9700)\u3001<code>&lt;scope&gt;</code>(\u53EF\u9009)\u548C <code>&lt;subject&gt;</code>(\u5FC5\u9700)</p><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3><p>commit \u7684\u7C7B\u578B\u3002</p><p>\u89C4\u8303\u4E2D\u89C4\u5B9A\u4E86\u5982\u4E0B\u7C7B\u578B:</p><ul><li><code>feat</code>: feature, \u65B0\u589E\u529F\u80FD</li><li><code>fix</code> : bug fix, \u4FEE\u590D bug</li><li><code>docs</code>: documentation, \u4EC5\u4EC5\u4FEE\u6539\u4E86\u6587\u6863\uFF0C\u5982 <code>README.md</code></li><li><code>style</code>: style, \u4EC5\u4EC5\u662F\u5BF9\u683C\u5F0F\u8FDB\u884C\u4FEE\u6539\uFF0C\u5982\u9017\u53F7\u3001\u7F29\u8FDB\u3001\u7A7A\u683C\u7B49\uFF0C\u4E0D\u6539\u53D8\u4EE3\u7801\u903B\u8F91</li><li><code>refactor</code>: refactor, \u4EE3\u7801\u91CD\u6784\uFF0C\u4E00\u822C\u66F4\u6539\u4E86\u6E90\u6587\u4EF6\u6216\u6D4B\u8BD5\u6587\u4EF6\uFF0C\u4F46\u6CA1\u6709\u65B0\u589E\u529F\u80FD\u6216\u4FEE\u590D bug</li><li><code>perf</code>: preformance, \u4F18\u5316\u76F8\u5173\uFF0C\u5982\u63D0\u5347\u6027\u80FD\u3001\u7528\u6237\u4F53\u9A8C\u7B49</li><li><code>test</code>: test, \u6D4B\u8BD5\u7528\u4F8B\uFF0C\u5305\u62EC\u5355\u5143\u6D4B\u8BD5\uFF0C\u96C6\u6210\u6D4B\u8BD5</li><li><code>chore</code>: chore, \u5BF9\u4E8E\u5E93\u7684\u5176\u4ED6\u5185\u5BB9\u7684\u6539\u53D8\uFF0C\u4E00\u822C\u4E0D\u6D89\u53CA\u5230\u6E90\u6587\u4EF6\u6216\u6D4B\u8BD5\u6587\u4EF6\uFF0C\u6BD4\u5982\u66F4\u6539 CI \u8BBE\u7F6E\uFF0C\u63D0\u5347\u4ED3\u5E93\u4EE5\u6765\u7B49</li><li><code>revert</code>: \u7248\u672C\u56DE\u6EDA</li></ul><h3 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> scope</h3><p>\u7528\u4E8E\u8BF4\u660E commit \u5F71\u54CD\u7684\u8303\u56F4\uFF0C\u6BD4\u5982: <code>views</code> , <code>component</code>, <code>utils</code>, <code>test</code>\u3002\u8FD9\u4E2A\u662F\u7531\u9879\u76EE\u7684\u5185\u5BB9\u4E0E\u7ED3\u6784\u51B3\u5B9A\u7684\u3002</p><h3 id="subject" tabindex="-1"><a class="header-anchor" href="#subject" aria-hidden="true">#</a> subject</h3><p>commit \u76EE\u7684\u7684\u7B80\u77ED\u63CF\u8FF0\uFF0C\u6700\u597D\u5C0F\u4E8E 50 \u5B57\u7B26\uFF0C\u4E00\u822C\u4E0D\u8D85\u8FC7 65 \u4E2A\u5B57\u7B26\uFF0C\u6700\u957F\u4E0D\u8D85\u8FC7 80 \u5B57\u7B26\u3002</p><p>\u5F53 subject \u9650\u5236\u7684\u5B57\u7B26\u6570\u65E0\u6CD5\u8BE6\u7EC6\u8BF4\u660E\u6B64 commit \u7684\u53D8\u52A8\u65F6\uFF0C\u5C06 commit \u7684\u5177\u4F53\u53D8\u52A8\u653E\u7F6E\u5728 body \u4E2D</p><h3 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> body</h3><p>\u5BF9\u672C\u6B21 commit \u4FEE\u6539\u5185\u5BB9\u7684\u5177\u4F53\u63CF\u8FF0\uFF0C\u53EF\u4EE5\u5206\u4E3A\u591A\u884C\u3002<code>body</code> \u662F\u53EF\u9009\u7684\uFF0C\u800C\u4E14 <code>body</code> \u53EF\u4EE5\u6709\u591A\u884C\u3002</p><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3><p>\u53EF\u9009\u7684\uFF0C\u524D\u9762\u6709\u4E00\u7A7A\u884C\u3002\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E9B\u5907\u6CE8\uFF0C\u4E00\u822C\u653E\u7F6E <code>BREAKING CHANGE</code>(\u4E00\u4E9B\u7834\u574F\u6027\u7684\u53D8\u52A8) \u6216\u4FEE\u590D\u7684 bug(\u6D89\u53CA\u7684 issue)\u7684\u94FE\u63A5\u3002</p><h2 id="semantic-commit-\u4E0E-changelog-\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#semantic-commit-\u4E0E-changelog-\u751F\u6210" aria-hidden="true">#</a> Semantic commit \u4E0E Changelog \u751F\u6210</h2><p>\u4E0D\u540C\u8BED\u8A00\u73AF\u5883\u90FD\u6709\u5F88\u591A\u79CD\u5DE5\u5177\u6765\u5E2E\u52A9\u60A8\u521B\u5EFA\u4E00\u4E2A semantic commit \u6216\u8005\u81EA\u52A8\u751F\u6210 changelog\u3002</p>`,26),h={class:"custom-container tip"},m=e("p",{class:"custom-container-title"},"\u6848\u4F8B",-1),p=e("p",null,"Node.js \u73AF\u5883\u4E0B\u53EF\u4EE5\u4F7F\u7528:",-1),u={href:"https://github.com/commitizen/cz-conventional-changelog",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"cz-conventional-changelog",-1),b=o(" \u63D0\u4F9B "),g=e("code",null,"git cz",-1),f=o(" \u547D\u4EE4\u8F85\u52A9\u521B\u5EFA semantic commit\u3002"),v={href:"https://github.com/conventional-changelog/conventional-changelog",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"conventional-changelog-cli",-1),y=o(" \u6765\u5FEB\u901F\u751F\u6210\u66F4\u65B0\u65E5\u5FD7\uFF0C\u5982 "),E={href:"https://github.com/Mister-Hope/vuepress-theme-hope/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},N=o("vuepress-theme-hope \u7684\u66F4\u6539\u65E5\u5FD7");function j(k,C){const t=s("ExternalLinkIcon");return i(),n("div",null,[l,e("div",h,[m,p,e("ul",null,[e("li",null,[e("p",null,[e("a",u,[_,c(t)]),b,g,f])]),e("li",null,[e("p",null,[e("a",v,[x,c(t)]),y,e("a",E,[N,c(t)])])])])])])}var A=a(r,[["render",j],["__file","semantic.html.vue"]]);export{A as default};
