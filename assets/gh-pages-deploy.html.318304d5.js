import{_ as n,o as s,c as t,a as e,b as c,e as i,d as r,r as d}from"./app.edc3ba14.js";const o={},p=i(`<p>github-pages-deploy-action \u7528\u4E8E\u81EA\u52A8\u5C06\u7F51\u7AD9\u5185\u5BB9\u90E8\u7F72\u5230 GitHub Pages\u3002</p><p>\u60A8\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A Action \u5C06\u4EE3\u7801\u63A8\u9001\u5230\u60A8\u60F3\u8981\u7684\u4EFB\u4F55\u5206\u652F\u4E2D\uFF0C\u5305\u62EC gh-pages \u548C docs, \u751A\u81F3\u53EF\u4EE5\u5904\u7406\u8DE8\u5B58\u50A8\u5E93\u90E8\u7F72\u3002</p><h2 id="\u91CD\u8981\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8981\u914D\u7F6E" aria-hidden="true">#</a> \u91CD\u8981\u914D\u7F6E</h2><h3 id="branch" tabindex="-1"><a class="header-anchor" href="#branch" aria-hidden="true">#</a> branch</h3><p>\u6B64\u9879\u5FC5\u586B\uFF0C\u586B\u5165\u60A8\u5E0C\u671B\u90E8\u7F72\u5230\u7684\u5206\u652F\uFF0C\u4F8B\u5982 gh-pages \u6216 docs</p><h3 id="folder" tabindex="-1"><a class="header-anchor" href="#folder" aria-hidden="true">#</a> folder</h3><p>\u6B64\u9879\u5FC5\u586B\uFF0C\u586B\u5165\u5B58\u50A8\u5E93\u4E2D\u8981\u90E8\u7F72\u7684\u6587\u4EF6\u5939\u3002\u6B64\u9879\u81EA\u52A8\u8BC6\u522B\u4E3A\u76F8\u5BF9\u8DEF\u5F84\u3002</p><ul><li><p>\u5982\u60A8\u7684\u6784\u5EFA\u8F93\u51FA\u5230 dist \u76EE\u5F55\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E <code>dist</code></p></li><li><p>\u5982\u679C\u60A8\u5E0C\u671B\u90E8\u7F72\u6839\u76EE\u5F55\uFF0C\u8BF7\u8BBE\u7F6E <code>.</code></p></li><li><p>\u5982\u679C\u60A8\u5E0C\u671B\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u8BBF\u95EE workflow \u6240\u5728\u7684 server\uFF0C\u8BF7\u5728\u8DEF\u5F84\u524D\u6DFB\u52A0 <code>~</code></p></li></ul><h2 id="\u53EF\u9009\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u914D\u7F6E" aria-hidden="true">#</a> \u53EF\u9009\u914D\u7F6E</h2><h3 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> token</h3><p>\u6B64\u9009\u9879\u9ED8\u8BA4\u4E3A\u53EF\u8BBF\u95EE\u5B58\u50A8\u5E93\u7684 Token\u3002</p><p>\u5982\u679C\u60A8\u9700\u8981\u66F4\u591A\u6743\u9650 (\u4F8B\u5982\uFF0C\u90E8\u7F72\u5230\u53E6\u4E00\u4E2A\u5B58\u50A8\u5E93) \uFF0C\u53EF\u4EE5\u901A\u8FC7\u6B64\u9009\u9879\u8BBE\u7F6E\u4E2A\u4EBA\u8BBF\u95EE\u4EE4\u724C (PAT) \u3002</p><p>\u672C\u9009\u9879\u7684\u503C\u5E94\u8BE5\u5B58\u50A8\u5728 secrets \u4E2D\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5EFA\u8BAE\u5728\u751F\u6210\u65B0\u7684 PAT \u65F6\u9009\u62E9\u6240\u9700\u7684\u6700\u5C11\u6743\u9650\u8303\u56F4</p></div><h3 id="ssh-key" tabindex="-1"><a class="header-anchor" href="#ssh-key" aria-hidden="true">#</a> ssh-key</h3><p>\u6B64\u9009\u9879\u53EF\u4EE5\u586B\u5165\u90E8\u7F72\u7528\u7684 SSH \u4E13\u7528\u5BC6\u94A5\uFF0C(\u672C\u9009\u9879\u7684\u503C\u5E94\u8BE5\u5B58\u50A8\u5728 secrets \u4E2D)\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u5176\u8BBE\u7F6E\u4E3A <code>true</code> \u4F7F\u7528\u73B0\u6709\u7684 SSH \u5BA2\u6237\u7AEF\u914D\u7F6E\uFF0C\u4F7F\u7528 SSH \u90E8\u7F72\u3002</p><h3 id="repository-name" tabindex="-1"><a class="header-anchor" href="#repository-name" aria-hidden="true">#</a> repository-name</h3><p>\u5141\u8BB8\u60A8\u6307\u5B9A\u5176\u4ED6\u5B58\u50A8\u5E93\u8DEF\u5F84\uFF0C\u53EA\u8981\u60A8\u6709\u6743\u5C06\u5176\u63A8\u9001\u3002\u683C\u5F0F\u5E94\u4E3A: <code>\u7528\u6237\u540D/\u5B58\u50A8\u5E93\u540D\u79F0</code>\u3002\u60A8\u9700\u8981\u8BBE\u7F6E token \u4E3A PAT\uFF0C\u6B64\u914D\u7F6E\u9009\u9879\u624D\u80FD\u6B63\u5E38\u8FD0\u884C\u3002</p><h3 id="target-folder" tabindex="-1"><a class="header-anchor" href="#target-folder" aria-hidden="true">#</a> target-folder</h3><p>\u5982\u679C\u8981\u5C06\u90E8\u7F72\u6587\u4EF6\u5939\u7684\u5185\u5BB9\u63A8\u9001\u5230\u90E8\u7F72\u5206\u652F\u4E0A\u7684\u7279\u5B9A\u76EE\u5F55\u4E2D\uFF0C\u53EF\u4EE5\u5728\u6B64\u5904\u6307\u5B9A\u3002</p><h3 id="commit-message" tabindex="-1"><a class="header-anchor" href="#commit-message" aria-hidden="true">#</a> commit-message</h3><p>\u5B9A\u5236\u63D0\u4EA4\u4FE1\u606F</p><h3 id="clean" tabindex="-1"><a class="header-anchor" href="#clean" aria-hidden="true">#</a> clean</h3><p>\u5982\u679C\u60A8\u7684\u9879\u76EE\u5728\u6784\u5EFA\u65F6\u751F\u6210\u54C8\u5E0C\u6587\u4EF6\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u6B64\u9009\u9879\u5728\u6BCF\u6B21\u90E8\u7F72\u65F6\u4ECE\u90E8\u7F72\u5206\u652F\u7684\u76EE\u6807\u6587\u4EF6\u5939\u4E2D\u81EA\u52A8\u5C06\u5176\u5220\u9664\u3002</p><p>\u6B64\u9009\u9879\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5904\u4E8E\u542F\u7528\u72B6\u6001\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5C06\u5176\u8BBE\u7F6E\u4E3A\u6765\u5173\u95ED <code>false</code>\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4E5F\u5C31\u662F\u6BCF\u6B21\u90E8\u7F72\u9ED8\u8BA4\u662F\u5168\u65B0\u7684\uFF0C\u4E0D\u4F1A\u4FDD\u7559\u4EFB\u4F55\u4E0A\u4E00\u6B21\u90E8\u7F72\u7684\u6587\u4EF6\u3002\u60A8\u9700\u8981\u4FDD\u8BC1\u90E8\u7F72\u65F6\u60A8\u5DF2\u7ECF\u62E5\u6709\u4E86\u6240\u6709\u9700\u8981\u7684\u6587\u4EF6\u3002</p></div><h3 id="clean-exclude" tabindex="-1"><a class="header-anchor" href="#clean-exclude" aria-hidden="true">#</a> clean-exclude</h3><p>\u5982\u679C\u60A8\u9700\u8981\u4F7F\u7528 <code>clean</code> \u4F46\u60F3\u4FDD\u7559\u67D0\u4E9B\u6587\u4EF6\u6216\u6587\u4EF6\u5939\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u6B64\u9009\u9879\u3002\u8FD9\u5E94\u8BE5\u5728\u591A\u884C\u5B57\u7B26\u4E32\u4E2D\u5C06\u6BCF\u4E2A\u6A21\u5F0F\u5305\u542B\u4E3A\u4E00\u884C\u3002</p><h3 id="single-commit" tabindex="-1"><a class="header-anchor" href="#single-commit" aria-hidden="true">#</a> single-commit</h3><p>\u5982\u679C\u60A8\u5E0C\u671B\u5728\u90E8\u7F72\u5206\u652F\u53EA\u6709\u4E00\u6B21\u6700\u65B0\u7684\u63D0\u4EA4\uFF0C\u800C\u4E0D\u662F\u7EF4\u62A4\u5B8C\u6574\u7684\u5386\u53F2\u8BB0\u5F55\uFF0C\u5219\u53EF\u4EE5\u5C06\u6B64\u9009\u9879\u5207\u6362\u4E3A <code>true</code>\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4F7F\u7528\u6B64\u9009\u9879\u8FD8\u5C06\u5BFC\u81F4\u4ECE\u90E8\u7F72\u5206\u652F\u4E2D\u79FB\u9664\u6240\u6709\u73B0\u6709\u5386\u53F2\u8BB0\u5F55\u3002</p></div><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><p>\u5F53\u6784\u5EFA\u5B8C\u6574\u7F51\u7AD9\u540E\uFF0C\u8BF7\u6DFB\u52A0\u4E0B\u5217\u6B65\u9AA4:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy \u{1F680}
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token comment"># \u9700\u8981\u90E8\u7F72\u5230\u7684\u5206\u652F</span>
    <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
    <span class="token comment"># \u9700\u8981\u90E8\u7F72\u7684\u6587\u4EF6\u5939</span>
    <span class="token key atrule">folder</span><span class="token punctuation">:</span> dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4ED3\u5E93" aria-hidden="true">#</a> \u4ED3\u5E93</h2>`,35),l={href:"https://github.com/JamesIves/github-pages-deploy-action",target:"_blank",rel:"noopener noreferrer"},h=r("https://github.com/JamesIves/github-pages-deploy-action");function u(m,b){const a=d("ExternalLinkIcon");return s(),t("div",null,[p,e("p",null,[e("a",l,[h,c(a)])])])}var k=n(o,[["render",u],["__file","gh-pages-deploy.html.vue"]]);export{k as default};
