const e=JSON.parse('{"key":"v-c1f11850","path":"/code/language/js/operators/comparison.html","title":"\u6BD4\u8F83\u8FD0\u7B97\u7B26","lang":"zh-CN","frontmatter":{"title":"\u6BD4\u8F83\u8FD0\u7B97\u7B26","icon":"compare","date":"2019-09-26T00:00:00.000Z","category":["JavaScript"],"summary":"JavaScript \u4E00\u5171\u63D0\u4F9B\u4E86 8 \u4E2A\u6BD4\u8F83\u8FD0\u7B97\u7B26\u3002\\n\\n&gt; \u5927\u4E8E\u8FD0\u7B97\u7B26\\n&lt; \u5C0F\u4E8E\u8FD0\u7B97\u7B26\\n&lt;= \u5C0F\u4E8E\u6216\u7B49\u4E8E\u8FD0\u7B97\u7B26\\n&gt;= \u5927\u4E8E\u6216\u7B49\u4E8E\u8FD0\u7B97\u7B26\\n== \u76F8\u7B49\u8FD0\u7B97\u7B26\\n=== \u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26\\n!= \u4E0D\u76F8\u7B49\u8FD0\u7B97\u7B26\\n!== \u4E25\u683C\u4E0D\u76F8\u7B49\u8FD0\u7B97\u7B26\\n\\n\u8FD9\u516B\u4E2A\u6BD4\u8F83\u8FD0\u7B97\u7B26\u5206\u6210\u4E24\u7C7B: \u76F8\u7B49\u6BD4\u8F83\u548C\u975E\u76F8\u7B49\u6BD4\u8F83\u3002\u4E24\u8005\u7684\u89C4\u5219\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u5BF9\u4E8E\u975E\u76F8\u7B49\u7684\u6BD4\u8F83\uFF0C\u7B97\u6CD5\u662F\u5148\u770B\u4E24\u4E2A\u8FD0\u7B97\u5B50\u662F\u5426\u90FD\u662F\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u662F\u7684\uFF0C\u5C31\u6309\u7167\u5B57\u5178\u987A\u5E8F\u6BD4\u8F83(\u5B9E\u9645\u4E0A\u662F\u6BD4\u8F83 Unicode \u7801\u70B9)\uFF1B\u5426\u5219\uFF0C\u5C06\u4E24\u4E2A\u8FD0\u7B97\u5B50\u90FD\u8F6C\u6210\u6570\u503C\uFF0C\u518D\u6BD4\u8F83\u6570\u503C\u7684\u5927\u5C0F\u3002\\n","head":[["meta",{"property":"og:url","content":"https://songjun520.cn/vuepress-blog2/code/language/js/operators/comparison.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"\u6BD4\u8F83\u8FD0\u7B97\u7B26"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-26T09:37:39.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2019-09-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-26T09:37:39.000Z"}]]},"excerpt":"<p>JavaScript \u4E00\u5171\u63D0\u4F9B\u4E86 8 \u4E2A\u6BD4\u8F83\u8FD0\u7B97\u7B26\u3002</p>\\n<ul>\\n<li><code v-pre>&gt;</code> \u5927\u4E8E\u8FD0\u7B97\u7B26</li>\\n<li><code v-pre>&lt;</code> \u5C0F\u4E8E\u8FD0\u7B97\u7B26</li>\\n<li><code v-pre>&lt;=</code> \u5C0F\u4E8E\u6216\u7B49\u4E8E\u8FD0\u7B97\u7B26</li>\\n<li><code v-pre>&gt;=</code> \u5927\u4E8E\u6216\u7B49\u4E8E\u8FD0\u7B97\u7B26</li>\\n<li><code v-pre>==</code> \u76F8\u7B49\u8FD0\u7B97\u7B26</li>\\n<li><code v-pre>===</code> \u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26</li>\\n<li><code v-pre>!=</code> \u4E0D\u76F8\u7B49\u8FD0\u7B97\u7B26</li>\\n<li><code v-pre>!==</code> \u4E25\u683C\u4E0D\u76F8\u7B49\u8FD0\u7B97\u7B26</li>\\n</ul>\\n<p>\u8FD9\u516B\u4E2A\u6BD4\u8F83\u8FD0\u7B97\u7B26\u5206\u6210\u4E24\u7C7B: \u76F8\u7B49\u6BD4\u8F83\u548C\u975E\u76F8\u7B49\u6BD4\u8F83\u3002\u4E24\u8005\u7684\u89C4\u5219\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u5BF9\u4E8E\u975E\u76F8\u7B49\u7684\u6BD4\u8F83\uFF0C\u7B97\u6CD5\u662F\u5148\u770B\u4E24\u4E2A\u8FD0\u7B97\u5B50\u662F\u5426\u90FD\u662F\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u662F\u7684\uFF0C\u5C31\u6309\u7167\u5B57\u5178\u987A\u5E8F\u6BD4\u8F83(\u5B9E\u9645\u4E0A\u662F\u6BD4\u8F83 Unicode \u7801\u70B9)\uFF1B\u5426\u5219\uFF0C\u5C06\u4E24\u4E2A\u8FD0\u7B97\u5B50\u90FD\u8F6C\u6210\u6570\u503C\uFF0C\u518D\u6BD4\u8F83\u6570\u503C\u7684\u5927\u5C0F\u3002</p>\\n","headers":[{"level":2,"title":"\u6982\u8FF0","slug":"\u6982\u8FF0","children":[]},{"level":2,"title":"\u975E\u76F8\u7B49\u8FD0\u7B97\u7B26: \u5B57\u7B26\u4E32\u7684\u6BD4\u8F83","slug":"\u975E\u76F8\u7B49\u8FD0\u7B97\u7B26-\u5B57\u7B26\u4E32\u7684\u6BD4\u8F83","children":[]},{"level":2,"title":"\u975E\u76F8\u7B49\u8FD0\u7B97\u7B26: \u975E\u5B57\u7B26\u4E32\u7684\u6BD4\u8F83","slug":"\u975E\u76F8\u7B49\u8FD0\u7B97\u7B26-\u975E\u5B57\u7B26\u4E32\u7684\u6BD4\u8F83","children":[{"level":3,"title":"\u539F\u59CB\u7C7B\u578B\u503C","slug":"\u539F\u59CB\u7C7B\u578B\u503C","children":[]},{"level":3,"title":"\u5BF9\u8C61","slug":"\u5BF9\u8C61","children":[]}]},{"level":2,"title":"\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26","slug":"\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26","children":[{"level":3,"title":"\u4E0D\u540C\u7C7B\u578B\u7684\u503C","slug":"\u4E0D\u540C\u7C7B\u578B\u7684\u503C","children":[]},{"level":3,"title":"\u540C\u4E00\u7C7B\u7684\u539F\u59CB\u7C7B\u578B\u503C","slug":"\u540C\u4E00\u7C7B\u7684\u539F\u59CB\u7C7B\u578B\u503C","children":[]},{"level":3,"title":"\u590D\u5408\u7C7B\u578B\u503C","slug":"\u590D\u5408\u7C7B\u578B\u503C","children":[]},{"level":3,"title":"undefined \u548C null","slug":"undefined-\u548C-null","children":[]}]},{"level":2,"title":"\u4E25\u683C\u4E0D\u76F8\u7B49\u8FD0\u7B97\u7B26","slug":"\u4E25\u683C\u4E0D\u76F8\u7B49\u8FD0\u7B97\u7B26","children":[]},{"level":2,"title":"\u76F8\u7B49\u8FD0\u7B97\u7B26","slug":"\u76F8\u7B49\u8FD0\u7B97\u7B26","children":[{"level":3,"title":"\u539F\u59CB\u7C7B\u578B\u503C","slug":"\u539F\u59CB\u7C7B\u578B\u503C-1","children":[]},{"level":3,"title":"\u5BF9\u8C61\u4E0E\u539F\u59CB\u7C7B\u578B\u503C\u6BD4\u8F83","slug":"\u5BF9\u8C61\u4E0E\u539F\u59CB\u7C7B\u578B\u503C\u6BD4\u8F83","children":[]},{"level":3,"title":"undefined \u548C null","slug":"undefined-\u548C-null-1","children":[]},{"level":3,"title":"\u76F8\u7B49\u8FD0\u7B97\u7B26\u7684\u7F3A\u70B9","slug":"\u76F8\u7B49\u8FD0\u7B97\u7B26\u7684\u7F3A\u70B9","children":[]}]},{"level":2,"title":"\u4E0D\u76F8\u7B49\u8FD0\u7B97\u7B26","slug":"\u4E0D\u76F8\u7B49\u8FD0\u7B97\u7B26","children":[]}],"git":{"createdTime":1661506659000,"updatedTime":1661506659000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":7.32,"words":2196},"filePathRelative":"code/language/js/operators/comparison.md","localizedDate":"2019\u5E749\u670826\u65E5"}');export{e as data};
