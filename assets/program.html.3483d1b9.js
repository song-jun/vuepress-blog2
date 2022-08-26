const e=JSON.parse('{"key":"v-833997ce","path":"/code/node-js/program.html","title":"\u7B2C\u4E00\u4E2A Node \u7A0B\u5E8F","lang":"zh-CN","frontmatter":{"title":"\u7B2C\u4E00\u4E2A Node \u7A0B\u5E8F","icon":"shell","category":["Node.js"],"tag":["Node.js","\u8F6F\u4EF6"],"summary":"\u5728\u524D\u9762\u7684\u6240\u6709\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u7F16\u5199\u7684 JavaScript \u4EE3\u7801\u90FD\u662F\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u7684\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u4E2D\u6572\u4EE3\u7801\uFF0C\u7136\u540E\u76F4\u63A5\u8FD0\u884C\u3002\\n\u4ECE\u672C\u7AE0\u5F00\u59CB\uFF0C\u6211\u4EEC\u7F16\u5199\u7684 JavaScript \u4EE3\u7801\u5C06\u4E0D\u80FD\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u6267\u884C\u4E86\uFF0C\u800C\u662F\u5728 Node.js \u73AF\u5883\u4E2D\u6267\u884C\uFF0C\u56E0\u6B64\uFF0CJavaScript \u4EE3\u7801\u5C06\u76F4\u63A5\u5728\u60A8\u7684\u8BA1\u7B97\u673A\u4E0A\u4EE5\u547D\u4EE4\u884C\u7684\u65B9\u5F0F\u8FD0\u884C\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u8981\u5148\u9009\u62E9\u4E00\u4E2A\u6587\u672C\u7F16\u8F91\u5668\u6765\u7F16\u5199 JavaScript \u4EE3\u7801\uFF0C\u5E76\u4E14\u628A\u5B83\u4FDD\u5B58\u5230\u672C\u5730\u786C\u76D8\u7684\u67D0\u4E2A\u76EE\u5F55\uFF0C\u624D\u80FD\u591F\u6267\u884C\u3002\\n","head":[["meta",{"property":"og:url","content":"https://songjun520.cn/vuepress-blog2/code/node-js/program.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"\u7B2C\u4E00\u4E2A Node \u7A0B\u5E8F"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://songjun520.cn/vuepress-blog2/"}],["meta",{"property":"og:updated_time","content":"2022-08-26T09:37:39.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"\u7B2C\u4E00\u4E2A Node \u7A0B\u5E8F"}],["meta",{"property":"article:tag","content":"Node.js"}],["meta",{"property":"article:tag","content":"\u8F6F\u4EF6"}],["meta",{"property":"article:modified_time","content":"2022-08-26T09:37:39.000Z"}]]},"excerpt":"<p>\u5728\u524D\u9762\u7684\u6240\u6709\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u7F16\u5199\u7684 JavaScript \u4EE3\u7801\u90FD\u662F\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u7684\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u4E2D\u6572\u4EE3\u7801\uFF0C\u7136\u540E\u76F4\u63A5\u8FD0\u884C\u3002</p>\\n<p>\u4ECE\u672C\u7AE0\u5F00\u59CB\uFF0C\u6211\u4EEC\u7F16\u5199\u7684 JavaScript \u4EE3\u7801\u5C06\u4E0D\u80FD\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u6267\u884C\u4E86\uFF0C\u800C\u662F\u5728 Node.js \u73AF\u5883\u4E2D\u6267\u884C\uFF0C\u56E0\u6B64\uFF0CJavaScript \u4EE3\u7801\u5C06\u76F4\u63A5\u5728\u60A8\u7684\u8BA1\u7B97\u673A\u4E0A\u4EE5\u547D\u4EE4\u884C\u7684\u65B9\u5F0F\u8FD0\u884C\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u8981\u5148\u9009\u62E9\u4E00\u4E2A\u6587\u672C\u7F16\u8F91\u5668\u6765\u7F16\u5199 JavaScript \u4EE3\u7801\uFF0C\u5E76\u4E14\u628A\u5B83\u4FDD\u5B58\u5230\u672C\u5730\u786C\u76D8\u7684\u67D0\u4E2A\u76EE\u5F55\uFF0C\u624D\u80FD\u591F\u6267\u884C\u3002</p>\\n","headers":[{"level":2,"title":"\u547D\u4EE4\u884C\u6A21\u5F0F\u548C Node.js \u4EA4\u4E92\u6A21\u5F0F","slug":"\u547D\u4EE4\u884C\u6A21\u5F0F\u548C-node-js-\u4EA4\u4E92\u6A21\u5F0F","children":[]},{"level":2,"title":"\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F","slug":"\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F","children":[]},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3","children":[]}],"git":{"createdTime":1661506659000,"updatedTime":1661506659000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":3.96,"words":1188},"filePathRelative":"code/node-js/program.md","localizedDate":"2022\u5E748\u670826\u65E5"}');export{e as data};
