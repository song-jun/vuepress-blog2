const e=JSON.parse('{"key":"v-5220625f","path":"/code/language/js/es6/arraybuffer.html","title":"ArrayBuffer","lang":"zh-CN","frontmatter":{"title":"ArrayBuffer","icon":"rank","author":"\u962E\u4E00\u5CF0","date":"2019-10-25T00:00:00.000Z","category":["JavaScript"],"copyright":"\u6B64\u90E8\u5206\u535A\u5BA2\u91C7\u7528 <a href=\\"http://creativecommons.org/licenses/by-nc/4.0/\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">\u201C\u4FDD\u6301\u7F72\u540D\u2014\u975E\u5546\u7528\u201D\u521B\u610F\u5171\u4EAB4.0\u8BB8\u53EF\u8BC1</a>","summary":"ArrayBuffer \u5BF9\u8C61\u3001TypedArray \u89C6\u56FE\u548C DataView \u89C6\u56FE\u662F JavaScript \u64CD\u4F5C\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u4E00\u4E2A\u63A5\u53E3\u3002\u8FD9\u4E9B\u5BF9\u8C61\u65E9\u5C31\u5B58\u5728\uFF0C\u5C5E\u4E8E\u72EC\u7ACB\u7684\u89C4\u683C(2011 \u5E74 2 \u6708\u53D1\u5E03)\uFF0CES6 \u5C06\u5B83\u4EEC\u7EB3\u5165\u4E86 ECMAScript \u89C4\u683C\uFF0C\u5E76\u4E14\u589E\u52A0\u4E86\u65B0\u7684\u65B9\u6CD5\u3002\u5B83\u4EEC\u90FD\u662F\u4EE5\u6570\u7EC4\u7684\u8BED\u6CD5\u5904\u7406\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u6240\u4EE5\u7EDF\u79F0\u4E3A\u4E8C\u8FDB\u5236\u6570\u7EC4\u3002\\n","head":[["meta",{"property":"og:url","content":"https://songjun520.cn/vuepress-blog2/code/language/js/es6/arraybuffer.html"}],["meta",{"property":"og:site_name","content":"Mr.Song"}],["meta",{"property":"og:title","content":"ArrayBuffer"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-26T09:37:39.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"\u962E\u4E00\u5CF0"}],["meta",{"property":"article:published_time","content":"2019-10-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-26T09:37:39.000Z"}]]},"excerpt":"<p><code v-pre>ArrayBuffer</code> \u5BF9\u8C61\u3001<code v-pre>TypedArray</code> \u89C6\u56FE\u548C <code v-pre>DataView</code> \u89C6\u56FE\u662F JavaScript \u64CD\u4F5C\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u4E00\u4E2A\u63A5\u53E3\u3002\u8FD9\u4E9B\u5BF9\u8C61\u65E9\u5C31\u5B58\u5728\uFF0C\u5C5E\u4E8E\u72EC\u7ACB\u7684\u89C4\u683C(2011 \u5E74 2 \u6708\u53D1\u5E03)\uFF0CES6 \u5C06\u5B83\u4EEC\u7EB3\u5165\u4E86 ECMAScript \u89C4\u683C\uFF0C\u5E76\u4E14\u589E\u52A0\u4E86\u65B0\u7684\u65B9\u6CD5\u3002\u5B83\u4EEC\u90FD\u662F\u4EE5\u6570\u7EC4\u7684\u8BED\u6CD5\u5904\u7406\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u6240\u4EE5\u7EDF\u79F0\u4E3A\u4E8C\u8FDB\u5236\u6570\u7EC4\u3002</p>\\n","headers":[{"level":2,"title":"ArrayBuffer \u5BF9\u8C61","slug":"arraybuffer-\u5BF9\u8C61","children":[{"level":3,"title":"ArrayBuffer \u6982\u8FF0","slug":"arraybuffer-\u6982\u8FF0","children":[]},{"level":3,"title":"ArrayBuffer.prototype.byteLength","slug":"arraybuffer-prototype-bytelength","children":[]},{"level":3,"title":"ArrayBuffer.prototype.slice()","slug":"arraybuffer-prototype-slice","children":[]},{"level":3,"title":"ArrayBuffer.isView()","slug":"arraybuffer-isview","children":[]}]},{"level":2,"title":"TypedArray \u89C6\u56FE","slug":"typedarray-\u89C6\u56FE","children":[{"level":3,"title":"TypedArray \u6982\u8FF0","slug":"typedarray-\u6982\u8FF0","children":[]},{"level":3,"title":"\u6784\u9020\u51FD\u6570","slug":"\u6784\u9020\u51FD\u6570","children":[]},{"level":3,"title":"\u6570\u7EC4\u65B9\u6CD5","slug":"\u6570\u7EC4\u65B9\u6CD5","children":[]},{"level":3,"title":"\u5B57\u8282\u5E8F","slug":"\u5B57\u8282\u5E8F","children":[]},{"level":3,"title":"BYTES_PER_ELEMENT \u5C5E\u6027","slug":"bytes-per-element-\u5C5E\u6027","children":[]},{"level":3,"title":"ArrayBuffer \u4E0E\u5B57\u7B26\u4E32\u7684\u4E92\u76F8\u8F6C\u6362","slug":"arraybuffer-\u4E0E\u5B57\u7B26\u4E32\u7684\u4E92\u76F8\u8F6C\u6362","children":[]},{"level":3,"title":"\u6EA2\u51FA","slug":"\u6EA2\u51FA","children":[]},{"level":3,"title":"TypedArray buffer","slug":"typedarray-buffer","children":[]},{"level":3,"title":"TypedArray byteLength \u4E0E byteOffset","slug":"typedarray-bytelength-\u4E0E-byteoffset","children":[]},{"level":3,"title":"TypedArray.prototype.length","slug":"typedarray-prototype-length","children":[]},{"level":3,"title":"TypedArray.prototype.set()","slug":"typedarray-prototype-set","children":[]},{"level":3,"title":"TypedArray.prototype.subarray()","slug":"typedarray-prototype-subarray","children":[]},{"level":3,"title":"TypedArray.prototype.slice()","slug":"typedarray-prototype-slice","children":[]},{"level":3,"title":"TypedArray.of()","slug":"typedarray-of","children":[]},{"level":3,"title":"TypedArray.from()","slug":"typedarray-from","children":[]}]},{"level":2,"title":"\u590D\u5408\u89C6\u56FE","slug":"\u590D\u5408\u89C6\u56FE","children":[]},{"level":2,"title":"DataView \u89C6\u56FE","slug":"dataview-\u89C6\u56FE","children":[]},{"level":2,"title":"\u4E8C\u8FDB\u5236\u6570\u7EC4\u7684\u5E94\u7528","slug":"\u4E8C\u8FDB\u5236\u6570\u7EC4\u7684\u5E94\u7528","children":[{"level":3,"title":"Ajax","slug":"ajax","children":[]},{"level":3,"title":"Canvas","slug":"canvas","children":[]},{"level":3,"title":"WebSocket","slug":"websocket","children":[]},{"level":3,"title":"Fetch API","slug":"fetch-api","children":[]},{"level":3,"title":"File API","slug":"file-api","children":[]}]},{"level":2,"title":"SharedArrayBuffer","slug":"sharedarraybuffer","children":[]},{"level":2,"title":"Atomics \u5BF9\u8C61","slug":"atomics-\u5BF9\u8C61","children":[]}],"git":{"createdTime":1661506659000,"updatedTime":1661506659000,"contributors":[{"name":"MrSong","email":"289097246@qq.com","commits":1}]},"readingTime":{"minutes":36.24,"words":10871},"filePathRelative":"code/language/js/es6/arraybuffer.md","localizedDate":"2019\u5E7410\u670825\u65E5"}');export{e as data};
